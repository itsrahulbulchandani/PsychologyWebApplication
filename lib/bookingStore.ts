// Booking store with automatic Vercel KV support in production.
// When KV_REST_API_URL + KV_REST_API_TOKEN are set (Vercel KV add-on), bookings
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

function isKvConfigured(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function kvKey(transactionId: string): string {
  return `booking:${transactionId}`;
}

// Vercel KV uses the Upstash Redis REST API — no extra package required.
async function kvSet(transactionId: string, data: BookingData): Promise<void> {
  const url = process.env.KV_REST_API_URL!;
  const token = process.env.KV_REST_API_TOKEN!;
  // TTL: 2 hours – enough for any payment flow to complete
  await fetch(
    `${url}/set/${encodeURIComponent(kvKey(transactionId))}/${encodeURIComponent(JSON.stringify(data))}?ex=7200`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

async function kvGet(transactionId: string): Promise<BookingData | null> {
  const url = process.env.KV_REST_API_URL!;
  const token = process.env.KV_REST_API_TOKEN!;
  const res = await fetch(`${url}/get/${encodeURIComponent(kvKey(transactionId))}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const body = await res.json() as { result?: string | BookingData | null };
  if (!body.result) return null;
  return typeof body.result === 'string' ? (JSON.parse(body.result) as BookingData) : body.result;
}

async function kvDel(transactionId: string): Promise<void> {
  const url = process.env.KV_REST_API_URL!;
  const token = process.env.KV_REST_API_TOKEN!;
  await fetch(`${url}/del/${encodeURIComponent(kvKey(transactionId))}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function storeBooking(data: BookingData): Promise<void> {
  if (isKvConfigured()) {
    await kvSet(data.transactionId, data);
  } else {
    memoryStore.set(data.transactionId, data);
  }
  console.log('✅ Booking stored:', data.transactionId);
}

export async function getBooking(transactionId: string): Promise<BookingData | undefined> {
  if (isKvConfigured()) {
    const result = await kvGet(transactionId);
    return result ?? undefined;
  }
  return memoryStore.get(transactionId);
}

export async function deleteBooking(transactionId: string): Promise<void> {
  if (isKvConfigured()) {
    await kvDel(transactionId);
  } else {
    memoryStore.delete(transactionId);
  }
}

