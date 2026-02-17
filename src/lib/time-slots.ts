export const START_HOUR = 12;
export const END_HOUR = 20;

export function buildTimeSlots() {
  const slots: string[] = [];

  for (let hour = START_HOUR; hour <= END_HOUR; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === END_HOUR && minute === 30) continue;
      const hh = String(hour).padStart(2, "0");
      const mm = String(minute).padStart(2, "0");
      slots.push(`${hh}:${mm}`);
    }
  }

  return slots;
}

export const VALID_TIME_SLOTS = buildTimeSlots();
