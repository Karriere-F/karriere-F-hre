"use server";

import { createClient } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/validation/contact-schema";

export async function submitContactMessage(input: unknown) {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert(parsed.data);

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
