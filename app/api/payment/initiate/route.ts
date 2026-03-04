import { NextRequest, NextResponse } from 'next/server';
import { phonePeService } from '@/lib/phonepe';
import { storeBooking } from '@/lib/bookingStore';

export const dynamic = 'force-dynamic';

const VALID_PACKAGES: Record<string, number> = {
  'Discovery Call': 0,
  'Single Session': 1200,
  '3-Session Bundle': 3200,
  '6-Session Bundle': 6000,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, mobileNumber, packageName, appointmentDate, email, name } = body;

    // Validate required fields
    if (amount === undefined || amount === null || !mobileNumber || !packageName || !appointmentDate || !email || !name) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate package name and amount server-side (prevents client price manipulation)
    if (!(packageName in VALID_PACKAGES) || VALID_PACKAGES[packageName] !== Number(amount)) {
      return NextResponse.json(
        { success: false, error: 'Invalid package or amount' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, error: 'Invalid mobile number' },
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

    await storeBooking(bookingData);
    console.log('📋 Booking data stored:', bookingData.transactionId);

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

