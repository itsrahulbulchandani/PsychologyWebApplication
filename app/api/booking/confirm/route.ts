import { NextRequest, NextResponse } from 'next/server';
import { googleCalendarService } from '@/lib/googleCalendar';
import { sendTherapistBookingEmail, sendClientBookingEmail, getBookingNotificationRecipients } from '@/lib/mailer';
import { buildEventDescription, generateBookingId, type IntakeDetails } from '@/lib/intake';
import {
  BOOKING_LEAD_TIME_MINUTES,
  BOOKING_SLOT_HOURS,
  getIstParts,
  isSlotTooSoon,
} from '@/lib/time';

export const dynamic = 'force-dynamic';

// Free bookings only (no payment). PhonePe flow is disabled.
// Currently only the Discovery Call is bookable.
const VALID_FREE_PACKAGES = new Set(['Discovery Call']);

function clean(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      packageName,
      appointmentDate,
      email,
      name,
      mobileNumber,
      emergencyContact,
      consentSigned,
    } = body;

    if (!packageName || !appointmentDate || !email || !name || !mobileNumber) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Only free packages allowed on this endpoint (no payment is taken)
    if (!VALID_FREE_PACKAGES.has(packageName)) {
      return NextResponse.json(
        { success: false, error: 'This package requires payment and is not available yet' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, error: 'Invalid mobile number' },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(emergencyContact || '')) {
      return NextResponse.json(
        { success: false, error: 'Invalid emergency contact number' },
        { status: 400 }
      );
    }

    if (!consentSigned) {
      return NextResponse.json(
        { success: false, error: 'Informed consent must be signed before booking' },
        { status: 400 }
      );
    }

    const bookingId = generateBookingId();

    const intake: IntakeDetails = {
      name: clean(name, 120),
      email: clean(email, 160),
      mobileNumber: clean(mobileNumber, 15),
      emergencyContact: clean(emergencyContact, 15),
      address: clean(body.address, 300),
      preferredLanguage: clean(body.preferredLanguage, 60),
      reasonForCounselling: clean(body.reasonForCounselling, 1000),
      problemDuration: clean(body.problemDuration, 60),
      psychiatricMedication: clean(body.psychiatricMedication, 10),
      medicationDetails: clean(body.medicationDetails, 300),
      concerns: Array.isArray(body.concerns)
        ? body.concerns.filter((c: unknown) => typeof c === 'string').slice(0, 20).map((c: string) => clean(c, 80))
        : [],
      anythingElse: clean(body.anythingElse, 1000),
      mode: clean(body.mode, 30) || 'Video',
      consultationType: clean(body.consultationType, 30) || 'Individual',
      packageName: clean(packageName, 60),
      bookingId,
      consentSigned: true,
      consentSignedAt: clean(body.consentSignedAt, 40) || new Date().toISOString(),
    };

    // Discovery call is 20 minutes
    const startTime = new Date(appointmentDate);
    if (isNaN(startTime.getTime())) {
      return NextResponse.json(
        { success: false, error: 'Invalid appointment time' },
        { status: 400 }
      );
    }

    // The slot must be one of the published IST hours...
    const istStart = getIstParts(startTime);
    if (istStart.minutes !== 0 || !BOOKING_SLOT_HOURS.includes(istStart.hours)) {
      return NextResponse.json(
        { success: false, error: 'That time is outside available hours. Please pick another slot.' },
        { status: 400 }
      );
    }

    // ...and far enough ahead. A minute of slack absorbs clock skew between the
    // browser that rendered the slot and this server.
    const skewGraceMs = 60000;
    if (isSlotTooSoon(startTime, new Date(Date.now() - skewGraceMs))) {
      return NextResponse.json(
        {
          success: false,
          error: `Sessions must be booked at least ${BOOKING_LEAD_TIME_MINUTES / 60} hours in advance. Please pick a later slot.`,
        },
        { status: 400 }
      );
    }

    const endTime = new Date(startTime.getTime() + 20 * 60000);

    // Reject if the slot is already taken
    const existingEvents = await googleCalendarService.getEventsInRange(
      new Date(startTime.getTime() - 60000).toISOString(),
      new Date(endTime.getTime() + 60000).toISOString()
    );

    if (existingEvents.success && existingEvents.events && existingEvents.events.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Time slot no longer available. Please pick another.' },
        { status: 409 }
      );
    }

    const calendarResult = await googleCalendarService.createEvent({
      summary: `Discovery Call - ${intake.name} (${bookingId})`,
      description: buildEventDescription(intake, startTime.toISOString()),
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      attendeeEmail: intake.email,
      attendeeName: intake.name,
    });

    if (!calendarResult.success) {
      console.error('Failed to create calendar event:', calendarResult.error);
      return NextResponse.json(
        { success: false, error: 'Could not book the slot. Please try again.' },
        { status: 500 }
      );
    }

    const notifyRecipients = getBookingNotificationRecipients();
    const therapistEmail = process.env.THERAPIST_EMAIL;
    if (notifyRecipients.length > 0 && therapistEmail) {
      const therapistEmailResult = await sendTherapistBookingEmail({
        therapistEmail: notifyRecipients,
        clientName: intake.name,
        clientEmail: intake.email,
        packageName,
        appointmentIso: appointmentDate,
        amount: 0,
        transactionId: 'DISCOVERY-CALL',
        meetLink: calendarResult.meetLink,
        eventLink: calendarResult.eventLink,
        bookingId,
        intakeSummary: buildEventDescription(intake, startTime.toISOString()),
      });

      if (!therapistEmailResult.success) {
        console.error('Booking notification email failed', {
          bookingId,
          recipients: notifyRecipients,
          error: therapistEmailResult.error,
        });
      }

      const clientEmailResult = await sendClientBookingEmail({
        clientEmail: intake.email,
        clientName: intake.name,
        packageName,
        appointmentIso: appointmentDate,
        amount: 0,
        meetLink: calendarResult.meetLink,
        therapistEmail,
        bookingId,
      });

      if (!clientEmailResult.success) {
        console.error('Client confirmation email failed', {
          bookingId,
          error: clientEmailResult.error,
        });
      }
    } else {
      console.error('⚠️ THERAPIST_EMAIL not set, skipping booking emails', { bookingId });
    }

    return NextResponse.json({
      success: true,
      eventId: calendarResult.eventId,
      bookingId,
    });
  } catch (error) {
    console.error('Booking confirm error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
