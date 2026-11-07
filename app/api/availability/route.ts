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
      // This route is public. Calendar events hold client names, emails, intake
      // answers and Meet links, so only the times the booking calendar needs
      // may leave it. Keep this an allowlist: never spread the event.
      return NextResponse.json({
        success: true,
        events: (result.events ?? []).map((event) => ({
          status: event.status,
          start: { dateTime: event.start?.dateTime },
          end: { dateTime: event.end?.dateTime },
        })),
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to fetch availability' },
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

