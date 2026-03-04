// Booking store with automatic Upstash Redis support in production.
// When UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN are set, bookings
// are persisted in Redis and survive serverless cold starts.
// Falls back to an in-memory Map for local development.

export interface BookingData {
  transactionId: string;
  email: string;
  name: string;
  mobileNumber: string;
  packageName: string;
  appointmentDate: string;
  amount: number;
  timestamp: string;
}

// In-memory fallback (local dev only)
const memoryStore = new Map<string, BookingData>();

function isUpstashConfigured(): boolean {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

function bookingKey(transactionId: string): string {
  return `booking:${transactionId}`;
}

// Upstash Redis uses the Redis REST API — no extra package required.
async function upstashSet(transactionId: string, data: BookingData): Promise<void> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;
  // TTL: 2 hours – enough for any payment flow to complete
  await fetch(
    `${url}/set/${encodeURIComponent(bookingKey(transactionId))}/${encodeURIComponent(JSON.stringify(data))}?ex=7200`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

async function upstashGet(transactionId: string): Promise<BookingData | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;
  const res = await fetch(`${url}/get/${encodeURIComponent(bookingKey(transactionId))}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const body = await res.json() as { result?: string | BookingData | null };
  if (!body.result) return null;
  return typeof body.result === 'string' ? (JSON.parse(body.result) as BookingData) : body.result;
}

async function upstashDel(transactionId: string): Promise<void> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;
  await fetch(`${url}/del/${encodeURIComponent(bookingKey(transactionId))}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function storeBooking(data: BookingData): Promise<void> {
  if (isUpstashConfigured()) {
    await upstashSet(data.transactionId, data);
  } else {
    memoryStore.set(data.transactionId, data);
  }
  console.log('✅ Booking stored:', data.transactionId);
}

export async function getBooking(transactionId: string): Promise<BookingData | undefined> {
  if (isUpstashConfigured()) {
    const result = await upstashGet(transactionId);
    return result ?? undefined;
  }
  return memoryStore.get(transactionId);
}

export async function deleteBooking(transactionId: string): Promise<void> {
  if (isUpstashConfigured()) {
    await upstashDel(transactionId);
  } else {
    memoryStore.delete(transactionId);
  }
}
