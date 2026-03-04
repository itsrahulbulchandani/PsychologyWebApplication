import { NextRequest, NextResponse } from 'next/server';
import { phonePeService } from '@/lib/phonepe';
import { googleCalendarService } from '@/lib/googleCalendar';
import { getBooking } from '@/lib/bookingStore';
import { sendTherapistBookingEmail, sendClientBookingEmail } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { transactionId, merchantTransactionId } = body;

    // Check payment status with PhonePe
    const paymentStatus = await phonePeService.checkPaymentStatus(
      merchantTransactionId || transactionId
    );

    if (paymentStatus.success && paymentStatus.data?.state === 'COMPLETED') {
      // Payment successful, retrieve booking data
      const bookingData = await getBooking(merchantTransactionId || transactionId);

      if (!bookingData) {
        console.error('Booking data not found for transaction:', transactionId);
        return NextResponse.redirect(
          new URL('/booking/error?message=Booking data not found', request.url)
        );
      }

      console.log('💳 Payment successful! Creating calendar event...');

      // Calculate end time (50 minutes session)
      const startTime = new Date(bookingData.appointmentDate);
      const endTime = new Date(startTime.getTime() + 50 * 60000);

      // Check for existing events at the same time
      const existingEvents = await googleCalendarService.getEventsInRange(
        new Date(startTime.getTime() - 60000).toISOString(), // 1 minute before
        new Date(endTime.getTime() + 60000).toISOString()     // 1 minute after
      );

      if (existingEvents.success && existingEvents.events && existingEvents.events.length > 0) {
        console.error('Time slot already booked in Google Calendar');
        return NextResponse.redirect(
          new URL('/booking/error?message=Time slot no longer available', request.url)
        );
      }

      // Create calendar event
      const calendarResult = await googleCalendarService.createEvent({
        summary: `Therapy Session - ${bookingData.name}`,
        description: `Package: ${bookingData.packageName}\nPayment ID: ${transactionId}\nAmount: ₹${bookingData.amount}`,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        attendeeEmail: bookingData.email,
        attendeeName: bookingData.name,
      });

      if (calendarResult.success) {
        console.log('✅ Calendar event created successfully!');

        const therapistEmail = process.env.THERAPIST_EMAIL;
        if (therapistEmail) {
          const emailResult = await sendTherapistBookingEmail({
            therapistEmail,
            clientName: bookingData.name,
            clientEmail: bookingData.email,
            packageName: bookingData.packageName,
            appointmentIso: bookingData.appointmentDate,
            amount: bookingData.amount,
            transactionId: transactionId,
            meetLink: calendarResult.meetLink,
            eventLink: calendarResult.eventLink,
          });

          if (!emailResult.success) {
            console.log('⚠️ Therapist email not sent:', emailResult.error);
          }

          await sendClientBookingEmail({
            clientEmail: bookingData.email,
            clientName: bookingData.name,
            packageName: bookingData.packageName,
            appointmentIso: bookingData.appointmentDate,
            amount: bookingData.amount,
            meetLink: calendarResult.meetLink,
            therapistEmail,
          });
        } else {
          console.log('⚠️ THERAPIST_EMAIL not set, skipping emails');
        }

        return NextResponse.redirect(
          new URL(`/booking/success?eventId=${calendarResult.eventId}`, request.url)
        );
      } else {
        console.error('Failed to create calendar event');
        return NextResponse.redirect(
          new URL('/booking/error?message=Calendar booking failed', request.url)
        );
      }
    } else {
      // Payment failed
      return NextResponse.redirect(
        new URL('/booking/error?message=Payment failed', request.url)
      );
    }
  } catch (error) {
    console.error('Payment callback error:', error);
    return NextResponse.redirect(
      new URL('/booking/error?message=Processing error', request.url)
    );
  }
}

export async function GET(request: NextRequest) {
  // Handle GET callback from PhonePe or demo payment
  const searchParams = request.nextUrl.searchParams;
  const transactionId = searchParams.get('transactionId');
  const status = searchParams.get('status');

  if (!transactionId) {
    return NextResponse.redirect(new URL('/booking/error', request.url));
  }

  // For demo mode only, accept status parameter
  if (status === 'success' && phonePeService.isDemoMode) {
    // Retrieve booking data
    const bookingData = await getBooking(transactionId);

    if (!bookingData) {
      return NextResponse.redirect(
        new URL('/booking/error?message=Booking not found', request.url)
      );
    }

    console.log('💳 Demo payment successful! Creating calendar event...');

    // Calculate end time (50 minutes session)
    const startTime = new Date(bookingData.appointmentDate);
    const endTime = new Date(startTime.getTime() + 50 * 60000);

    try {
      // Create calendar event
      const calendarResult = await googleCalendarService.createEvent({
        summary: `Therapy Session - ${bookingData.name}`,
        description: `Package: ${bookingData.packageName}\nPayment ID: ${transactionId} (DEMO)\nAmount: ₹${bookingData.amount}`,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        attendeeEmail: bookingData.email,
        attendeeName: bookingData.name,
      });

      if (calendarResult.success) {
        console.log('✅ Calendar event created successfully!');

        const therapistEmail = process.env.THERAPIST_EMAIL;
        if (therapistEmail) {
          const emailResult = await sendTherapistBookingEmail({
            therapistEmail,
            clientName: bookingData.name,
            clientEmail: bookingData.email,
            packageName: bookingData.packageName,
            appointmentIso: bookingData.appointmentDate,
            amount: bookingData.amount,
            transactionId: transactionId,
            meetLink: calendarResult.meetLink,
            eventLink: calendarResult.eventLink,
          });

          if (!emailResult.success) {
            console.log('⚠️ Therapist email not sent:', emailResult.error);
          }

          await sendClientBookingEmail({
            clientEmail: bookingData.email,
            clientName: bookingData.name,
            packageName: bookingData.packageName,
            appointmentIso: bookingData.appointmentDate,
            amount: bookingData.amount,
            meetLink: calendarResult.meetLink,
            therapistEmail,
          });
        } else {
          console.log('⚠️ THERAPIST_EMAIL not set, skipping emails');
        }

        return NextResponse.redirect(
          new URL(`/booking/success?eventId=${calendarResult.eventId}`, request.url)
        );
      } else {
        console.log('⚠️ Google Calendar not configured, skipping...');
        // Still show success even if calendar fails (in demo mode)
        return NextResponse.redirect(new URL('/booking/success', request.url));
      }
    } catch (error) {
      console.log('⚠️ Calendar error (probably not configured):', error);
      // Still show success page in demo mode
      return NextResponse.redirect(new URL('/booking/success', request.url));
    }
  }

  // Check actual payment status for production
  const paymentStatus = await phonePeService.checkPaymentStatus(transactionId);

  if (paymentStatus.success && paymentStatus.data?.state === 'COMPLETED') {
    return NextResponse.redirect(new URL('/booking/success', request.url));
  } else {
    return NextResponse.redirect(new URL('/booking/error', request.url));
  }
}

