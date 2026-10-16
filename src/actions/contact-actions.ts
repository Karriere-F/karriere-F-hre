"use server";

import { createClient } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/validation/contact-schema";

export async function submitContactMessage(input: unknown) {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  // Honeypot filled → bot. Pretend success and drop it; never store the honeypot field.
  const { company, ...data } = parsed.data;
  if (company && company.trim() !== "") {
    return { ok: true as const };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert(data);

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
