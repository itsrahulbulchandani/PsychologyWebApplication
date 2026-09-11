/**
 * Thin wrapper around gtag.js.
 *
 * The GA script only mounts when NEXT_PUBLIC_GA_ID is set (see app/layout.tsx),
 * so every call has to survive gtag being undefined — locally, in preview
 * builds, and for visitors whose blockers strip the script.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: GtagParams) => void;
  }
}

export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  // Drop undefined values so GA doesn't record empty parameters.
  const clean: GtagParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') clean[key] = value;
  }

  try {
    window.gtag('event', eventName, clean);
  } catch {
    // Analytics must never break a booking.
  }
}

/** Fires an event at most once per browser session for a given key. */
export function trackEventOnce(key: string, eventName: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return;

  const storageKey = `sthairyam:ga:${key}`;
  try {
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, '1');
  } catch {
    // Private mode or blocked storage: fall through and send the event anyway.
  }

  trackEvent(eventName, params);
}

export const BOOKING_CURRENCY = 'INR';
