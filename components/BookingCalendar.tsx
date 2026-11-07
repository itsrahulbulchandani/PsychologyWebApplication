'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  BOOKING_LEAD_TIME_MINUTES,
  BOOKING_SLOT_HOURS,
  QUICK_SLOT_WINDOW_DAYS,
  TIME_SLOTS,
  formatQuickSlot,
  formatSlotLabel,
  getIstParts,
  getNowIstParts,
  getQuickSlots,
  isSlotBusy,
  istWallClockToUtc,
  parseSlotLabel,
  type BusyPeriod,
} from '@/lib/time';

export type SlotSource = 'quick' | 'calendar';

interface BookingCalendarProps {
  onDateTimeSelect: (date: Date, time: string, source: SlotSource) => void;
}

type SlotState = 'available' | 'booked' | 'past';

/** Returns null when availability could not be read. */
async function fetchBusyPeriods(start: Date, end: Date): Promise<BusyPeriod[] | null> {
  const response = await fetch(
    `/api/availability?startDate=${start.toISOString()}&endDate=${end.toISOString()}`
  );
  if (!response.ok) return null;

  const data = await response.json();
  if (!data.success || !data.events) return null;

  const periods: BusyPeriod[] = [];
  data.events.forEach((event: any) => {
    if (event.status === 'cancelled') return;
    if (event.start?.dateTime && event.end?.dateTime) {
      const start = new Date(event.start.dateTime).getTime();
      const end = new Date(event.end.dateTime).getTime();
      if (Number.isFinite(start) && Number.isFinite(end)) {
        periods.push({ start, end });
      }
    }
  });
  return periods;
}

export default function BookingCalendar({ onDateTimeSelect }: BookingCalendarProps) {
  // Calendar days and slots are all Asia/Kolkata wall-clock, whatever the
  // visitor's own timezone is.
  const [currentMonth, setCurrentMonth] = useState(() => {
    const nowIst = getNowIstParts();
    return { year: nowIst.year, monthIndex: nowIst.monthIndex };
  });
  const [selectedDay, setSelectedDay] = useState<{ year: number; monthIndex: number; day: number } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [busyPeriods, setBusyPeriods] = useState<BusyPeriod[]>([]);
  // Quick slots can fall in next month, so they get their own window rather
  // than depending on whichever month the grid is showing.
  const [upcomingBusy, setUpcomingBusy] = useState<BusyPeriod[] | null>(null);
  const [quickSlotsLoading, setQuickSlotsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  // Re-evaluate which slots are still bookable as time passes.
  const [now, setNow] = useState(() => Date.now());
  const slotsRef = useRef<HTMLDivElement>(null);
  const scrollToSlots = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  // Fetch booked slots for the current month
  useEffect(() => {
    const fetchBookedSlots = async () => {
      setLoading(true);
      try {
        const startOfMonth = istWallClockToUtc(currentMonth.year, currentMonth.monthIndex, 1, 0, 0);
        const startOfNextMonth = istWallClockToUtc(currentMonth.year, currentMonth.monthIndex + 1, 1, 0, 0);

        const periods = await fetchBusyPeriods(startOfMonth, startOfNextMonth);
        if (periods) setBusyPeriods(periods);
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookedSlots();
  }, [currentMonth]);

  useEffect(() => {
    const start = new Date();
    const end = new Date(start.getTime() + (QUICK_SLOT_WINDOW_DAYS + 1) * 86400000);
    fetchBusyPeriods(start, end)
      .then(setUpcomingBusy)
      .catch((error) => console.error('Error fetching upcoming slots:', error))
      .finally(() => setQuickSlotsLoading(false));
  }, []);

  const quickSlots = useMemo(
    () => (upcomingBusy ? getQuickSlots(upcomingBusy, new Date(now)) : []),
    [upcomingBusy, now]
  );

  // Picking a day reveals the times below the grid, which is off screen on a phone.
  useEffect(() => {
    if (!scrollToSlots.current) return;
    scrollToSlots.current = false;
    slotsRef.current?.scrollIntoView({ block: 'nearest' });
  }, [selectedDay]);

  const daysInMonth = useMemo(
    () => new Date(Date.UTC(currentMonth.year, currentMonth.monthIndex + 1, 0)).getUTCDate(),
    [currentMonth]
  );

  const startingDayOfWeek = useMemo(
    () => new Date(Date.UTC(currentMonth.year, currentMonth.monthIndex, 1)).getUTCDay(),
    [currentMonth]
  );

  const earliestBookable = now + BOOKING_LEAD_TIME_MINUTES * 60000;

  const slotStartInstant = (day: number, hours: number) =>
    istWallClockToUtc(currentMonth.year, currentMonth.monthIndex, day, hours).getTime();

  const isHourBooked = (day: number, hours: number) =>
    isSlotBusy(slotStartInstant(day, hours), busyPeriods);

  const getSlotState = (day: number, time: string): SlotState => {
    const parsed = parseSlotLabel(time);
    if (!parsed) return 'past';
    if (slotStartInstant(day, parsed.hours) < earliestBookable) return 'past';
    if (isHourBooked(day, parsed.hours)) return 'booked';
    return 'available';
  };

  const dayHasAvailableSlot = (day: number) =>
    BOOKING_SLOT_HOURS.some(
      (hours) => slotStartInstant(day, hours) >= earliestBookable && !isHourBooked(day, hours)
    );

  // Disabled while slots load so the grid never offers a slot we cannot verify.
  const isDateDisabled = (day: number) => loading || !dayHasAvailableSlot(day);

  const isViewingCurrentOrPastMonth = useMemo(() => {
    const nowIst = getIstParts(new Date(now));
    return (
      currentMonth.year < nowIst.year ||
      (currentMonth.year === nowIst.year && currentMonth.monthIndex <= nowIst.monthIndex)
    );
  }, [currentMonth, now]);

  const previousMonth = () => {
    if (isViewingCurrentOrPastMonth) return;
    const date = new Date(Date.UTC(currentMonth.year, currentMonth.monthIndex - 1, 1));
    setCurrentMonth({ year: date.getUTCFullYear(), monthIndex: date.getUTCMonth() });
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    const date = new Date(Date.UTC(currentMonth.year, currentMonth.monthIndex + 1, 1));
    setCurrentMonth({ year: date.getUTCFullYear(), monthIndex: date.getUTCMonth() });
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const handleDateClick = (day: number) => {
    if (isDateDisabled(day)) return;
    scrollToSlots.current = true;
    setSelectedDay({ year: currentMonth.year, monthIndex: currentMonth.monthIndex, day });
    setSelectedTime(null);
  };

  const handleQuickSlot = (slot: Date) => {
    const { year, monthIndex, day, hours } = getIstParts(slot);
    const time = formatSlotLabel(hours);

    if (year !== currentMonth.year || monthIndex !== currentMonth.monthIndex) {
      setCurrentMonth({ year, monthIndex });
    }
    setSelectedDay({ year, monthIndex, day });
    setSelectedTime(time);
    onDateTimeSelect(slot, time, 'quick');
  };

  const isQuickSlotSelected = (slot: Date) => {
    if (!selectedDay || !selectedTime) return false;
    const { year, monthIndex, day, hours } = getIstParts(slot);
    return (
      selectedDay.year === year &&
      selectedDay.monthIndex === monthIndex &&
      selectedDay.day === day &&
      selectedTime === formatSlotLabel(hours)
    );
  };

  const handleTimeClick = (time: string) => {
    if (!selectedDay) return;
    const parsed = parseSlotLabel(time);
    if (!parsed) return;

    setSelectedTime(time);
    // The Date handed upward carries the correct instant for the IST slot.
    onDateTimeSelect(
      istWallClockToUtc(selectedDay.year, selectedDay.monthIndex, selectedDay.day, parsed.hours),
      time,
      'calendar'
    );
  };

  // If the selected slot ages out while the form is open, drop it.
  useEffect(() => {
    if (!selectedDay || !selectedTime) return;
    const parsed = parseSlotLabel(selectedTime);
    if (!parsed) return;
    const start = istWallClockToUtc(selectedDay.year, selectedDay.monthIndex, selectedDay.day, parsed.hours).getTime();
    if (start < now + BOOKING_LEAD_TIME_MINUTES * 60000) {
      setSelectedTime(null);
    }
  }, [now, selectedDay, selectedTime]);

  const isDateSelected = (day: number) =>
    !!selectedDay &&
    selectedDay.day === day &&
    selectedDay.monthIndex === currentMonth.monthIndex &&
    selectedDay.year === currentMonth.year;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Create calendar grid
  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-12"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const disabled = isDateDisabled(day);
    calendarDays.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={disabled}
        className={`h-12 rounded-full flex items-center justify-center text-sm transition-colors duration-200 ${
          disabled
            ? 'text-ink/20 cursor-not-allowed'
            : isDateSelected(day)
            ? 'bg-pine text-cream'
            : 'hover:bg-sage-pale text-ink'
        }`}
      >
        {day}
      </button>
    );
  }

  const selectedDayHasSlots = selectedDay ? dayHasAvailableSlot(selectedDay.day) : false;

  return (
    <div className="bg-white border border-ink/15 rounded-xl p-6 sm:p-8">

      {/* Next available. Placeholders hold the space so the calendar doesn't jump. */}
      {(quickSlotsLoading || quickSlots.length > 0) && (
        <div className="mb-8 border-b border-ink/10 pb-8">
          <h3 className="font-display text-lg text-ink mb-4">Next available</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickSlotsLoading
              ? [0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-14 rounded-3xl bg-cream-deep animate-pulse" />
                ))
              : quickSlots.map((slot) => (
                  <button
                    key={slot.getTime()}
                    onClick={() => handleQuickSlot(slot)}
                    className={`h-14 px-3 rounded-3xl text-sm leading-snug transition-colors duration-200 border ${
                      isQuickSlotSelected(slot)
                        ? 'bg-pine text-cream border-pine'
                        : 'bg-white text-ink border-ink/15 hover:border-pine/60'
                    }`}
                  >
                    {formatQuickSlot(slot, new Date(now))}
                  </button>
                ))}
          </div>
          <p className="mt-4 text-sm text-ink-soft">Or choose another date below.</p>
        </div>
      )}

      {/* Calendar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            disabled={isViewingCurrentOrPastMonth}
            className={`p-2 rounded-full transition-colors ${
              isViewingCurrentOrPastMonth
                ? 'text-ink/20 cursor-not-allowed'
                : 'hover:bg-sage-pale text-ink'
            }`}
            aria-label="Previous month"
          >
            <ChevronLeft size={22} />
          </button>
          <h4 className="font-display text-xl text-ink">
            {monthNames[currentMonth.monthIndex]} {currentMonth.year}
          </h4>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-sage-pale transition-colors text-ink"
            aria-label="Next month"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-[11px] uppercase tracking-[0.12em] font-semibold text-ink-soft">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays}
        </div>

        <p className="mt-4 text-xs text-ink-soft text-center">
          All times are India Standard Time. Sessions can be booked at least{' '}
          {BOOKING_LEAD_TIME_MINUTES / 60} hours in advance.
        </p>
      </div>

      {/* Time slots */}
      {selectedDay && (
        <div ref={slotsRef}>
          <div className="flex items-center mb-4 border-t border-ink/10 pt-6">
            <Clock className="text-pine mr-2" size={18} />
            <h4 className="font-display text-lg text-ink">Available time slots</h4>
          </div>
          {selectedDayHasSlots ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TIME_SLOTS.map((time) => {
                const state = getSlotState(selectedDay.day, time);
                const disabled = state !== 'available';
                return (
                  <button
                    key={time}
                    onClick={() => handleTimeClick(time)}
                    disabled={disabled}
                    className={`px-4 py-3 rounded-full text-sm transition-colors duration-200 border ${
                      selectedTime === time
                        ? 'bg-pine text-cream border-pine'
                        : disabled
                        ? 'bg-cream-deep text-ink/30 border-ink/10 cursor-not-allowed line-through'
                        : 'bg-white text-ink border-ink/15 hover:border-pine/60'
                    }`}
                  >
                    {state === 'booked' ? 'Booked' : state === 'past' ? 'Unavailable' : time}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-ink-soft">
              No slots left on this date. Please pick another day.
            </p>
          )}
        </div>
      )}

      {selectedDay && selectedTime && (
        <div className="mt-6 p-4 bg-sage-pale rounded-lg border border-pine/30">
          <p className="text-pine-dark text-sm font-medium">
            ✓ Selected: {new Date(Date.UTC(selectedDay.year, selectedDay.monthIndex, selectedDay.day)).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })} at {selectedTime} IST
          </p>
        </div>
      )}
    </div>
  );
}
