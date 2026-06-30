import { NextRequest, NextResponse } from 'next/server';
import { googleCalendarService } from '@/lib/googleCalendar';
import { sendTherapistBookingEmail, sendClientBookingEmail } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

// Free bookings only (no payment). PhonePe flow is disabled.
// Currently only the Discovery Call is bookable.
const VALID_FREE_PACKAGES = new Set(['Discovery Call']);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { packageName, appointmentDate, email, name, mobileNumber } = body;

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

    // Discovery call is 20 minutes
    const startTime = new Date(appointmentDate);
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
      summary: `Discovery Call - ${name}`,
      description: `Package: ${packageName}\nFree 15–20 min discovery call\nPhone: ${mobileNumber}`,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      attendeeEmail: email,
      attendeeName: name,
    });

    if (!calendarResult.success) {
      console.error('Failed to create calendar event:', calendarResult.error);
      return NextResponse.json(
        { success: false, error: 'Could not book the slot. Please try again.' },
        { status: 500 }
      );
    }

    const therapistEmail = process.env.THERAPIST_EMAIL;
    if (therapistEmail) {
      await sendTherapistBookingEmail({
        therapistEmail,
        clientName: name,
        clientEmail: email,
        packageName,
        appointmentIso: appointmentDate,
        amount: 0,
        transactionId: 'DISCOVERY-CALL',
        meetLink: calendarResult.meetLink,
        eventLink: calendarResult.eventLink,
      });

      await sendClientBookingEmail({
        clientEmail: email,
        clientName: name,
        packageName,
        appointmentIso: appointmentDate,
        amount: 0,
        meetLink: calendarResult.meetLink,
        therapistEmail,
      });
    } else {
      console.log('⚠️ THERAPIST_EMAIL not set, skipping emails');
    }

    return NextResponse.json({
      success: true,
      eventId: calendarResult.eventId,
    });
  } catch (error) {
    console.error('Booking confirm error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
