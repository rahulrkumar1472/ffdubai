export type StoredBooking = {
  id: string;
  referenceId: string;
  locale: "en" | "ar";
  bookingType: "consultation" | "treatment";
  treatment: string | null;
  area: string | null;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  durationMinutes: number;
  createdAt: string;
};

type BookingStore = Map<string, StoredBooking>;

declare global {
  // eslint-disable-next-line no-var
  var __ffdubaiBookingStore: BookingStore | undefined;
}

const store: BookingStore = globalThis.__ffdubaiBookingStore ?? new Map<string, StoredBooking>();

if (!globalThis.__ffdubaiBookingStore) {
  globalThis.__ffdubaiBookingStore = store;
}

export function saveFallbackBooking(payload: Omit<StoredBooking, "id" | "createdAt">) {
  const id = `fallback_${payload.referenceId.toLowerCase()}`;

  const record: StoredBooking = {
    ...payload,
    id,
    createdAt: new Date().toISOString()
  };

  store.set(payload.referenceId, record);
  return record;
}

export function getFallbackBooking(referenceId: string) {
  return store.get(referenceId) ?? null;
}
