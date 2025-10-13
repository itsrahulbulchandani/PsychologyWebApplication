import { NextRequest, NextResponse } from 'next/server';
import { googleCalendarService } from '@/lib/googleCalendar';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: 'Missing date parameters' },
        { status: 400 }
      );
    }

    const result = await googleCalendarService.getAvailableSlots(startDate, endDate);

    if (result.success) {
      return NextResponse.json({
        success: true,
        slots: result.slots,
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch availability' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

