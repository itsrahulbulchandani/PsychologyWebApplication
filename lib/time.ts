// Time helpers for the booking flow.
//
// Every bookable slot is a wall-clock time in Asia/Kolkata (the therapist's
// timezone), regardless of where the visitor's browser is. IST has no DST, so a
// fixed +05:30 offset is safe.

export const IST_OFFSET_MINUTES = 330;

/** Minimum notice required before a session can start. */
export const BOOKING_LEAD_TIME_MINUTES = 120;

/** Bookable hours (IST, 24h) — 11 AM to 8 PM. */
export const BOOKING_SLOT_HOURS = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/** How long a slot blocks the calendar, for overlap checks. */
export const SLOT_BLOCK_MINUTES = 50;

export interface IstParts {
  year: number;
  monthIndex: number;
  day: number;
  hours: number;
  minutes: number;
}

/** Format a 24h hour as the slot label shown in the UI, e.g. 16 -> "04:00 PM". */
export function formatSlotLabel(hours: number): string {
  const period = hours >= 12 ? 'PM' : 'AM';
  let display = hours % 12;
  if (display === 0) display = 12;
  return `${String(display).padStart(2, '0')}:00 ${period}`;
}

export const TIME_SLOTS = BOOKING_SLOT_HOURS.map(formatSlotLabel);

/** Parse a slot label such as "04:00 PM" into 24h parts. Returns null if malformed. */
export function parseSlotLabel(label: string): { hours: number; minutes: number } | null {
  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(label.trim());
  if (!match) return null;

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();

  if (hours < 1 || hours > 12 || minutes > 59) return null;
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return { hours, minutes };
}

/** Build the real instant for an IST wall-clock date/time. */
export function istWallClockToUtc(
  year: number,
  monthIndex: number,
  day: number,
  hours: number,
  minutes = 0
): Date {
  return new Date(Date.UTC(year, monthIndex, day, hours, minutes) - IST_OFFSET_MINUTES * 60000);
}

/** Read the IST wall-clock parts of an instant. */
export function getIstParts(instant: Date): IstParts {
  const shifted = new Date(instant.getTime() + IST_OFFSET_MINUTES * 60000);
  return {
    year: shifted.getUTCFullYear(),
    monthIndex: shifted.getUTCMonth(),
    day: shifted.getUTCDate(),
    hours: shifted.getUTCHours(),
    minutes: shifted.getUTCMinutes(),
  };
}

/** IST wall-clock parts for right now. */
export function getNowIstParts(): IstParts {
  return getIstParts(new Date());
}

/** Earliest instant a session may start (now + lead time). */
export function getEarliestBookableInstant(now: Date = new Date()): Date {
  return new Date(now.getTime() + BOOKING_LEAD_TIME_MINUTES * 60000);
}

/** True when a slot start is in the past or inside the lead-time window. */
export function isSlotTooSoon(slotStart: Date, now: Date = new Date()): boolean {
  return slotStart.getTime() < getEarliestBookableInstant(now).getTime();
}
