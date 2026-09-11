/**
 * Thin wrapper around gtag.js.
 *
 * @next/third-parties injects the gtag bootstrap with Next's "afterInteractive"
 * strategy, so window.gtag does not exist yet when a component's effect runs on
 * first paint — the confirmation page fires its conversion in exactly that gap.
 * Events raised before the bootstrap lands are held here and flushed once it
 * arrives, rather than dropped. Queueing straight onto window.dataLayer is not
 * an option: the entry would sit ahead of the gtag('config') call and gtag.js
 * discards events that precede the configuration of their measurement ID.
 *
 * The GA script only mounts when NEXT_PUBLIC_GA_ID is set (see app/layout.tsx),
 * and visitors' blockers strip it, so the queue gives up after a grace period.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: GtagParams) => void;
  }
}

/** How long to wait for gtag.js before assuming it will never load. */
const BOOTSTRAP_GRACE_MS = 10_000;
const POLL_INTERVAL_MS = 200;

let queue: Array<[string, GtagParams]> = [];
let pollTimer: ReturnType<typeof setInterval> | undefined;

function isReady(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function deliver(eventName: string, params: GtagParams): void {
  try {
    window.gtag!('event', eventName, params);
  } catch {
    // Analytics must never break a booking.
  }
}

function flush(): void {
  const pending = queue;
  queue = [];
  for (const [eventName, params] of pending) deliver(eventName, params);
}

function waitForBootstrap(): void {
  if (pollTimer !== undefined) return;

  const startedAt = Date.now();
  pollTimer = setInterval(() => {
    if (isReady()) {
      clearInterval(pollTimer);
      pollTimer = undefined;
      flush();
    } else if (Date.now() - startedAt > BOOTSTRAP_GRACE_MS) {
      clearInterval(pollTimer);
      pollTimer = undefined;
      queue = [];
    }
  }, POLL_INTERVAL_MS);
}

export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return;

  // Drop undefined values so GA doesn't record empty parameters.
  const clean: GtagParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') clean[key] = value;
  }

  if (isReady()) {
    deliver(eventName, clean);
    return;
  }

  queue.push([eventName, clean]);
  waitForBootstrap();
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
