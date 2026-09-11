'use client';

import { useEffect } from 'react';
import { trackEventOnce, BOOKING_CURRENCY } from '@/lib/analytics';

/**
 * Fires the booking conversion once the confirmation page renders.
 *
 * The success page is a server component and only knows the booking id, so the
 * package details are handed over through sessionStorage when the request is
 * submitted. A refresh of this page must not double-count, hence the dedupe on
 * the booking id.
 */
export default function BookingConversion({ bookingId }: { bookingId?: string }) {
  useEffect(() => {
    let itemId: string | undefined;
    let itemName: string | undefined;
    let value: number | undefined;

    try {
      const raw = window.sessionStorage.getItem('sthairyam:booking:pending');
      if (raw) {
        const pending = JSON.parse(raw) as { id?: string; name?: string; price?: number };
        itemId = pending.id;
        itemName = pending.name;
        value = pending.price;
      }
    } catch {
      // No handoff available; still report the conversion.
    }

    // A free package is reported without a value on purpose: Google Ads only
    // applies its own fallback amount when the value is absent, not when it is
    // zero, and a zero-value conversion teaches its bidding nothing.
    const hasValue = typeof value === 'number' && value > 0;

    trackEventOnce(`lead:${bookingId ?? 'unknown'}`, 'generate_lead', {
      transaction_id: bookingId,
      item_id: itemId,
      item_name: itemName,
      value: hasValue ? value : undefined,
      currency: hasValue ? BOOKING_CURRENCY : undefined,
    });
  }, [bookingId]);

  return null;
}
