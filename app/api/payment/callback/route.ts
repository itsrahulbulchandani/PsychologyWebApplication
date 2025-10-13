import { NextRequest, NextResponse } from 'next/server';
import { phonePeService } from '@/lib/phonepe';
import { googleCalendarService } from '@/lib/googleCalendar';
import { getBooking } from '@/lib/bookingStore';

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
      const bookingData = getBooking(merchantTransactionId || transactionId);

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

  // For demo mode, accept status parameter
  if (status === 'success') {
    // Retrieve booking data
    const bookingData = getBooking(transactionId);

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

