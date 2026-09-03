"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { evaluationSchema } from "@/lib/validation/evaluation-schema";
import { buildSummary, recommend, type Answers } from "@/lib/evaluation";
import { buildAusSummary, type AusAnswers } from "@/lib/ausbildung-orientation";

// Stores a completed evaluation. The primary target is the dedicated, structured
// `profile_evaluations` table (each answer in its own column + the computed orientation),
// written with the service-role client so no public RLS insert policy is needed. If that
// table doesn't exist yet (the SQL hasn't been run), the lead falls back to a
// `contact_messages` row so nothing is ever lost.
export async function submitEvaluation(input: unknown) {
  const parsed = evaluationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const { prenom, nom, whatsapp, email, pays, answers } = parsed.data;
  const a = answers as Answers;
  const rec = recommend(a);

  const admin = createAdminClient();
  const { error } = await admin.from("profile_evaluations").insert({
    prenom,
    nom,
    email,
    whatsapp,
    pays,
    objectif: a.objectif ?? null,
    etudes: a.etudes ?? null,
    domaine: a.domaine ?? null,
    qualification: a.qualification ?? null,
    experience: a.experience ?? null,
    allemand: a.allemand ?? null,
    certificat: a.certificat ?? null,
    age: a.age ?? null,
    orientation: rec.path,
    compat: rec.compat,
  });

  if (!error) {
    return { ok: true as const };
  }

  // Fallback: keep the lead as a contact message (works with no migration).
  const message = [
    buildSummary(a),
    "—",
    `WhatsApp / téléphone : ${whatsapp}`,
    `Pays de résidence : ${pays}`,
  ].join("\n");

  const supabase = await createClient();
  const { error: fallbackError } = await supabase.from("contact_messages").insert({
    name: `${prenom} ${nom}`.trim(),
    email,
    message,
  });

  if (fallbackError) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}

// Stores an Ausbildung orientation lead (the "Trouver mon parcours" evaluator) as a
// contact message, with the profile summary + suggested trades. Indicative only.
export async function submitAusbildungOrientation(input: unknown) {
  const parsed = evaluationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }
  const { prenom, nom, whatsapp, email, pays, answers } = parsed.data;
  const message = [
    buildAusSummary(answers as AusAnswers),
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
