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

export class GoogleCalendarService {
  private calendar;
  private auth;

  constructor() {
    // Initialize OAuth2 client
    this.auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    // Set refresh token
    this.auth.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    this.calendar = google.calendar({ version: 'v3', auth: this.auth });
  }

  /**
   * Create a calendar event
   */
  async createEvent(eventDetails: CalendarEvent): Promise<{ success: boolean; eventId?: string; error?: string }> {
    try {
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

      const response = await this.calendar.events.insert({
        calendarId: 'primary',
        conferenceDataVersion: 1,
        sendUpdates: 'all',
        requestBody: event,
      });

      return {
        success: true,
        eventId: response.data.id || undefined,
      };
    } catch (error) {
      console.error('Google Calendar error:', error);
      return {
        success: false,
        error: 'Failed to create calendar event',
      };
    }
  }

  /**
   * Get available time slots
   */
  async getAvailableSlots(startDate: string, endDate: string): Promise<{ success: boolean; slots?: string[] }> {
    try {
      const response = await this.calendar.freebusy.query({
        requestBody: {
          timeMin: startDate,
          timeMax: endDate,
          timeZone: 'Asia/Kolkata',
          items: [{ id: 'primary' }],
        },
      });

      const busy = response.data.calendars?.primary?.busy || [];
      
      // Generate available slots (9 AM to 6 PM, excluding busy times)
      const slots: string[] = [];
      const currentDate = new Date(startDate);
      const endDateTime = new Date(endDate);

      while (currentDate < endDateTime) {
        const hour = currentDate.getHours();
        if (hour >= 9 && hour < 18) {
          const slotStart = currentDate.toISOString();
          const slotEnd = new Date(currentDate.getTime() + 50 * 60000).toISOString(); // 50 minutes

          // Check if slot is not busy
          const isBusy = busy.some((busySlot: any) => {
            const busyStart = new Date(busySlot.start);
            const busyEnd = new Date(busySlot.end);
            return currentDate >= busyStart && currentDate < busyEnd;
          });

          if (!isBusy) {
            slots.push(slotStart);
          }
        }

        currentDate.setTime(currentDate.getTime() + 60 * 60000); // Move to next hour
      }

      return {
        success: true,
        slots,
      };
    } catch (error) {
      console.error('Error fetching available slots:', error);
      return {
        success: false,
      };
    }
  }

  /**
   * Delete/Cancel an event
   */
  async cancelEvent(eventId: string): Promise<{ success: boolean }> {
    try {
      await this.calendar.events.delete({
        calendarId: 'primary',
        eventId: eventId,
        sendUpdates: 'all',
      });

      return { success: true };
    } catch (error) {
      console.error('Error canceling event:', error);
      return { success: false };
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();

