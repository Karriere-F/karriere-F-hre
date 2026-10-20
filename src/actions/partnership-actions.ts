"use server";

import { createClient } from "@/lib/supabase/server";
import { partnershipRequestSchema } from "@/lib/validation/partnership-request-schema";

// Stores a B2B partnership enquiry as a contact message, prefixed so the admin
// inbox can tell it apart. Public, no account required. No candidate data.
export async function submitPartnershipRequest(input: unknown) {
  const parsed = partnershipRequestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const d = parsed.data;
  const line = (label: string, value?: string) =>
    value && value.trim() ? `${label} : ${value.trim()}` : null;

  const message = [
    "[Partnerschaft]",
    "—",
    line("Unternehmen", d.unternehmen),
    line("Branche", d.branche),
    line("Website", d.website),
    "—",
    line("Ansprechpartner", d.ansprechpartner),
    line("Position", d.position),
    line("E-Mail", d.email),
    line("Telefon", d.telefon),
    "—",
    line("Art der Zusammenarbeit", d.interesse),
    line("Nachricht", d.nachricht),
  ]
    .filter(Boolean)
    .join("\n");

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: `${d.ansprechpartner} (${d.unternehmen})`.trim(),
    email: d.email,
    message,
  });

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
