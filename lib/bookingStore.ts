// Simple in-memory storage for demo purposes
// In production, replace this with a proper database (MongoDB, PostgreSQL, etc.)

interface BookingData {
  transactionId: string;
  email: string;
  name: string;
  mobileNumber: string;
  packageName: string;
  appointmentDate: string;
  amount: number;
  timestamp: string;
}

// In-memory storage (will be reset when server restarts)
const bookingsStore = new Map<string, BookingData>();

export function storeBooking(data: BookingData) {
  bookingsStore.set(data.transactionId, data);
  console.log('✅ Booking stored:', data.transactionId);
}

export function getBooking(transactionId: string): BookingData | undefined {
  return bookingsStore.get(transactionId);
}

export function deleteBooking(transactionId: string) {
  bookingsStore.delete(transactionId);
}

export function getAllBookings(): BookingData[] {
  return Array.from(bookingsStore.values());
}

