"use server";

import { createClient } from "@/lib/supabase/server";
import { evaluationSchema } from "@/lib/validation/evaluation-schema";
import { buildSummary, type Answers } from "@/lib/evaluation";

// Stored as a contact message (a lightweight lead record) so no extra table/migration is
// needed to start collecting evaluations. The message body carries the full profile plus
// the computed preliminary orientation, and the candidate's contact details, so a
// counselor can review and follow up.
export async function submitEvaluation(input: unknown) {
  const parsed = evaluationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const { prenom, nom, whatsapp, email, pays, answers } = parsed.data;
  const summary = buildSummary(answers as Answers);
  const message = [
    summary,
    "—",
    `WhatsApp / téléphone : ${whatsapp}`,
    `Pays de résidence : ${pays}`,
  ].join("\n");

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: `${prenom} ${nom}`.trim(),
    email,
    message,
  });

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
