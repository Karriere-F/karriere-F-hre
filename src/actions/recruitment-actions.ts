"use server";

import { createClient } from "@/lib/supabase/server";
import { recruitmentRequestSchema } from "@/lib/validation/recruitment-request-schema";

// Stores an employer recruitment request as a contact message, prefixed so the admin
// inbox can tell it apart. Public, no account required. Employer need only — no candidate data.
export async function submitRecruitmentRequest(input: unknown) {
  const parsed = recruitmentRequestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const d = parsed.data;
  const line = (label: string, value?: string) =>
    value && value.trim() ? `${label} : ${value.trim()}` : null;

  const message = [
    "[Demande de recrutement]",
    "—",
    line("Entreprise", d.entreprise),
    line("Secteur", d.secteur),
    line("Site internet", d.siteWeb),
    "—",
    line("Interlocuteur", d.prenomNom),
    line("Fonction", d.fonction),
    line("E-mail", d.email),
    line("Téléphone", d.telephone),
    "—",
    line("Type de recrutement", d.besoin),
    line("Métier / poste", d.metier),
    line("Nombre de candidats", d.nombre),
    line("Date d'entrée souhaitée", d.delai),
    "—",
    line("Niveau d'allemand attendu", d.niveauAllemand),
    line("Qualification / expérience", d.qualification),
    line("Message", d.message),
  ]
    .filter(Boolean)
    .join("\n");

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: `${d.prenomNom} (${d.entreprise})`.trim(),
    email: d.email,
    message,
  });

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
