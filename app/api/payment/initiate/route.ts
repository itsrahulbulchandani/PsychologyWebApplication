import { NextRequest, NextResponse } from 'next/server';
import { phonePeService } from '@/lib/phonepe';
import { storeBooking } from '@/lib/bookingStore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, mobileNumber, packageName, appointmentDate, email, name } = body;

    // Validate required fields
    if (!amount || !mobileNumber || !packageName || !appointmentDate || !email || !name) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create payment payload
    const payload = phonePeService.createPaymentPayload(
      amount,
      mobileNumber,
      packageName,
      appointmentDate
    );

    // Store booking details
    const bookingData = {
      transactionId: payload.merchantTransactionId,
      email,
      name,
      mobileNumber,
      packageName,
      appointmentDate,
      amount,
      timestamp: new Date().toISOString(),
    };

    // Store booking in memory (in production, use a database)
    storeBooking(bookingData);
    console.log('📋 Booking data stored:', bookingData);

    // Initiate payment
    const result = await phonePeService.initiatePayment(payload);

    if (result.success) {
      return NextResponse.json({
        success: true,
        paymentUrl: result.data?.paymentUrl,
        transactionId: result.data?.transactionId,
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

