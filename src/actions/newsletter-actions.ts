"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const newsletterSchema = z.object({
  email: z.string().email(),
  // Honeypot: a hidden field real users never fill. Bots that fill every input get silently
  // dropped (we return success so they don't learn the field is a trap).
  company: z.string().optional(),
});

// Newsletter sign-ups are captured as contact messages (a lightweight lead
// record) so no extra table/migration is needed to start collecting them.
export async function subscribeNewsletter(input: unknown) {
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_email" };
  }

  if (parsed.data.company && parsed.data.company.trim() !== "") {
    return { ok: true as const };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: "Newsletter",
    email: parsed.data.email,
    message: "Inscription à la newsletter (footer du site).",
  });

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
