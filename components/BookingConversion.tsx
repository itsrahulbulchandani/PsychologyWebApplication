'use client';

import { useEffect } from 'react';
import { trackEvent, BOOKING_CURRENCY, BOOKING_HANDOFF_KEY } from '@/lib/analytics';

type BookingHandoff = {
  bookingId?: string;
  id?: string;
  name?: string;
  price?: number;
};

/**
 * Fires the booking conversion once per real booking.
 *
 * Loading the confirmation page proves nothing by itself: it also opens from a
 * reopened link, a new tab or browser history, and GA does not dedupe
 * generate_lead. The booking form therefore leaves a handoff in sessionStorage
 * after the server confirms, and this consumes it. No matching handoff, no
 * conversion. A browser with storage blocked goes unreported, which beats
 * counting every revisit as a lead.
 */
export default function BookingConversion({ bookingId }: { bookingId?: string }) {
  useEffect(() => {
    let handoff: BookingHandoff | null;

    try {
      const raw = window.sessionStorage.getItem(BOOKING_HANDOFF_KEY);
      window.sessionStorage.removeItem(BOOKING_HANDOFF_KEY);
      handoff = raw ? (JSON.parse(raw) as BookingHandoff) : null;
    } catch {
      return;
    }

    if (!handoff || !bookingId || handoff.bookingId !== bookingId) return;

    // A free package is reported without a value on purpose: Google Ads only
    // applies its own fallback amount when the value is absent, not when it is
    // zero, and a zero-value conversion teaches its bidding nothing.
    const value = handoff.price;
    const hasValue = typeof value === 'number' && value > 0;

    trackEvent('generate_lead', {
      transaction_id: bookingId,
      item_id: handoff.id,
      item_name: handoff.name,
      value: hasValue ? value : undefined,
      currency: hasValue ? BOOKING_CURRENCY : undefined,
    });
  }, [bookingId]);

  return null;
}
