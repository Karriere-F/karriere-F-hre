const OPEN_HOUR = 9;
const CLOSE_HOUR = 18;
const SLOT_MINUTES = 30;

// Monday-Friday, 9:00-18:00, 30-minute slots (last slot starts at 17:30).
export function generateDaySlots(dateStr: string): string[] {
  const date = new Date(`${dateStr}T00:00:00Z`);
  const day = date.getUTCDay(); // 0 = Sunday, 6 = Saturday
  if (day === 0 || day === 6) return [];

  const slots: string[] = [];
  for (let minutes = OPEN_HOUR * 60; minutes < CLOSE_HOUR * 60; minutes += SLOT_MINUTES) {
    const h = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const m = (minutes % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
  }
  return slots;
}
