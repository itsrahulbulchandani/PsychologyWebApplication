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

    const result = await googleCalendarService.getEventsInRange(startDate, endDate);

    if (result.success) {
      return NextResponse.json({
        success: true,
        events: result.events,
      });
    } else {
      return NextResponse.json(
        // TEMP DEBUG: `debug` field surfaces the real Google error. Remove after diagnosing.
        { success: false, error: result.error || 'Failed to fetch availability', debug: (result as any).debug },
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

