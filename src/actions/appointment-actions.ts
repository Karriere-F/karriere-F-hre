"use server";

import { createClient } from "@/lib/supabase/server";
import { appointmentSchema } from "@/lib/validation/appointment-schema";
import { generateDaySlots } from "@/lib/appointment-slots";

export async function getAvailableSlots(dateStr: string) {
  const allSlots = generateDaySlots(dateStr);
  if (allSlots.length === 0) return [];

  const supabase = await createClient();
  const { data: booked } = await supabase
    .from("appointments_availability_view")
    .select("appointment_time")
    .eq("appointment_date", dateStr);

  const bookedTimes = new Set((booked ?? []).map((b) => b.appointment_time.slice(0, 5)));
  return allSlots.filter((slot) => !bookedTimes.has(slot));
}

export async function bookAppointment(input: unknown) {
  const parsed = appointmentSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const validSlots = await getAvailableSlots(parsed.data.appointmentDate);
  if (!validSlots.includes(parsed.data.appointmentTime)) {
    return { ok: false as const, error: "slot_unavailable" };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("appointments").insert({
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    appointment_date: parsed.data.appointmentDate,
    appointment_time: parsed.data.appointmentTime,
    notes: parsed.data.notes,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: false as const, error: "slot_unavailable" };
    }
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
