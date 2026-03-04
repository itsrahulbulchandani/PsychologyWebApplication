// Google Calendar Integration
import { google } from 'googleapis';

export interface CalendarEvent {
  summary: string;
  description: string;
  startTime: string;
  endTime: string;
  attendeeEmail: string;
  attendeeName: string;
}

 type GoogleApiErrorLike = any;

 function extractGoogleApiError(error: GoogleApiErrorLike): { message?: string; status?: number; data?: any } {
   const status = error?.code ?? error?.response?.status;
   const data = error?.response?.data;
   const message = error?.message ?? data?.error?.message;
   return { message, status, data };
 }

 function extractNodeFetchCause(error: any): any {
   const cause = error?.cause;
   if (!cause) return undefined;
   return {
     name: cause?.name,
     message: cause?.message,
     code: cause?.code,
     errno: cause?.errno,
     syscall: cause?.syscall,
     hostname: cause?.hostname,
   };
 }

 async function withTimeout<T>(promise: Promise<T>, timeoutMs: number, label: string): Promise<T> {
   let timeoutId: ReturnType<typeof setTimeout> | undefined;
   const timeoutPromise = new Promise<never>((_, reject) => {
     timeoutId = setTimeout(() => {
       reject(new Error(`${label} timed out after ${timeoutMs}ms`));
     }, timeoutMs);
   });

   try {
     return await Promise.race([promise, timeoutPromise]);
   } finally {
     if (timeoutId) clearTimeout(timeoutId);
   }
 }

export class GoogleCalendarService {
  private calendar;
  private auth;
  private clientId: string;
  private clientSecret: string;
  private refreshToken: string;
  private cachedAccessToken?: { token: string; expiresAtMs: number };

  constructor() {
    // Initialize OAuth2 client
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !redirectUri || !refreshToken) {
      throw new Error(
        'Missing Google Calendar environment variables (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI, GOOGLE_REFRESH_TOKEN)'
      );
    }

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.refreshToken = refreshToken;

    this.auth = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    // Set refresh token
    this.auth.setCredentials({
      refresh_token: refreshToken,
    });

    this.calendar = google.calendar({ version: 'v3', auth: this.auth });
  }

  private async ensureAccessToken(): Promise<void> {
    const now = Date.now();
    const refreshSkewMs = 60_000;

    if (this.cachedAccessToken && now < this.cachedAccessToken.expiresAtMs - refreshSkewMs) {
      return;
    }

    return new Promise((resolve, reject) => {
      const https = require('https');
      
      const postData = new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: this.refreshToken,
        grant_type: 'refresh_token',
      }).toString();

      const options = {
        hostname: 'oauth2.googleapis.com',
        port: 443,
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
        timeout: 12000,
      };

      const req = https.request(options, (res: any) => {
        let data = '';

        res.on('data', (chunk: any) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const parsed = JSON.parse(data) as
              | { access_token?: string; expires_in?: number; token_type?: string; scope?: string; error?: string; error_description?: string }
              | undefined;

            if (res.statusCode !== 200) {
              const message = parsed?.error_description || parsed?.error || `Token endpoint error (${res.statusCode})`;
              reject(new Error(message));
              return;
            }

            const accessToken = parsed?.access_token;
            const expiresInSec = parsed?.expires_in;

            if (!accessToken || !expiresInSec) {
              reject(new Error('Token endpoint returned an invalid response'));
              return;
            }

            const expiresAtMs = now + expiresInSec * 1000;
            this.cachedAccessToken = { token: accessToken, expiresAtMs };
            this.auth.setCredentials({
              refresh_token: this.refreshToken,
              access_token: accessToken,
              expiry_date: expiresAtMs,
            });
            resolve();
          } catch (error) {
            reject(new Error('Failed to parse token response'));
          }
        });
      });

      req.on('error', (error: any) => {
        console.error('Google OAuth token refresh error:', {
          name: error?.name,
          message: error?.message,
          code: error?.code,
          syscall: error?.syscall,
        });
        reject(new Error(error?.message || 'Failed to refresh Google OAuth access token'));
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Token endpoint request timed out'));
      });

      req.write(postData);
      req.end();
    });
  }

  /**
   * Create a calendar event
   */
  async createEvent(
    eventDetails: CalendarEvent
  ): Promise<{ success: boolean; eventId?: string; meetLink?: string; eventLink?: string; error?: string }> {
    try {
      const therapistEmail = process.env.THERAPIST_EMAIL;
      if (!therapistEmail) {
        throw new Error('THERAPIST_EMAIL environment variable is not set');
      }

      await withTimeout(this.ensureAccessToken(), 15_000, 'Google OAuth access token refresh');

      const event = {
        summary: eventDetails.summary,
        description: eventDetails.description,
        start: {
          dateTime: eventDetails.startTime,
          timeZone: 'Asia/Kolkata',
        },
        end: {
          dateTime: eventDetails.endTime,
          timeZone: 'Asia/Kolkata',
        },
        attendees: [
          { email: eventDetails.attendeeEmail, displayName: eventDetails.attendeeName },
          { email: therapistEmail, displayName: 'Therapist' },
        ],
        conferenceData: {
          createRequest: {
            requestId: `meet-${Date.now()}`,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 }, // 1 day before
            { method: 'popup', minutes: 60 }, // 1 hour before
          ],
        },
      };

      const response = await withTimeout(
        this.calendar.events.insert(
          {
            calendarId: 'primary',
            conferenceDataVersion: 1,
            sendUpdates: 'all',
            requestBody: event,
          },
          { timeout: 20_000 }
        ),
        25_000,
        'Google Calendar events.insert'
      );

      const meetLink =
        response.data.hangoutLink ||
        response.data.conferenceData?.entryPoints?.find((ep) => ep.entryPointType === 'video')?.uri ||
        undefined;

      return {
        success: true,
        eventId: response.data.id || undefined,
        meetLink,
        eventLink: response.data.htmlLink || undefined,
      };
    } catch (error) {
      const extracted = extractGoogleApiError(error);
      console.error('Google Calendar error (createEvent):', {
        message: extracted.message,
        status: extracted.status,
        data: extracted.data,
      });
      return {
        success: false,
        error: extracted.message || 'Failed to create calendar event',
      };
    }
  }

  /**
   * Get available time slots
   */
  async getAvailableSlots(
    startDate: string,
    endDate: string
  ): Promise<{ success: boolean; slots?: string[]; error?: string }> {
    try {
      await withTimeout(this.ensureAccessToken(), 15_000, 'Google OAuth access token refresh');

      const response = await withTimeout(
        this.calendar.freebusy.query(
          {
            requestBody: {
              timeMin: startDate,
              timeMax: endDate,
              timeZone: 'Asia/Kolkata',
              items: [{ id: 'primary' }],
            },
          },
          { timeout: 20_000 }
        ),
        25_000,
        'Google Calendar freebusy.query'
      );

      const busy = response.data.calendars?.primary?.busy || [];
      
      // Generate available slots (9 AM to 11 PM, excluding busy times)
      const slots: string[] = [];
      const currentDate = new Date(startDate);
      const endDateTime = new Date(endDate);

      while (currentDate < endDateTime) {
        const hour = currentDate.getHours();
        if (hour >= 9 && hour < 23) {
          const slotStartIso = currentDate.toISOString();
          const slotStart = currentDate;
          const slotEnd = new Date(currentDate.getTime() + 50 * 60000); // 50 minutes later

          // Check if slot overlaps with any busy period
          const isBusy = busy.some((busySlot: any) => {
            const busyStart = new Date(busySlot.start);
            const busyEnd = new Date(busySlot.end);
            
            // Check if slot overlaps with busy period
            return slotStart < busyEnd && slotEnd > busyStart;
          });

          if (!isBusy) {
            slots.push(slotStartIso);
          }
        }

        currentDate.setTime(currentDate.getTime() + 60 * 60000); // Move to next hour
      }

      return {
        success: true,
        slots,
      };
    } catch (error) {
      const extracted = extractGoogleApiError(error);
      console.error('Error fetching available slots:', {
        message: extracted.message,
        status: extracted.status,
        data: extracted.data,
      });
      return {
        success: false,
        error: extracted.message || 'Failed to fetch available slots',
      };
    }
  }

  /**
   * Delete/Cancel an event
   */
  async cancelEvent(eventId: string): Promise<{ success: boolean }> {
    try {
      await withTimeout(this.ensureAccessToken(), 15_000, 'Google OAuth access token refresh');

      await withTimeout(
        this.calendar.events.delete(
          {
            calendarId: 'primary',
            eventId: eventId,
            sendUpdates: 'all',
          },
          { timeout: 20_000 }
        ),
        25_000,
        'Google Calendar events.delete'
      );

      return { success: true };
    } catch (error) {
      const extracted = extractGoogleApiError(error);
      console.error('Error canceling event:', {
        message: extracted.message,
        status: extracted.status,
        data: extracted.data,
      });
      return { success: false };
    }
  }

  /**
   * Fetch events within a date range to check availability
   */
  async getEventsInRange(startDate: string, endDate: string): Promise<{ success: boolean; events?: any[]; error?: string }> {
    try {
      await withTimeout(this.ensureAccessToken(), 15_000, 'Google OAuth access token refresh');

      const response = await withTimeout(
        this.calendar.events.list(
          {
            calendarId: 'primary',
            timeMin: startDate,
            timeMax: endDate,
            singleEvents: true,
            orderBy: 'startTime',
          },
          { timeout: 20_000 }
        ),
        25_000,
        'Google Calendar events.list'
      );

      return {
        success: true,
        events: response.data.items || [],
      };
    } catch (error) {
      const extracted = extractGoogleApiError(error);
      console.error('Error fetching calendar events:', {
        message: extracted.message,
        status: extracted.status,
        data: extracted.data,
      });
      return {
        success: false,
        error: extracted.message || 'Failed to fetch calendar events',
      };
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();

