"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { fastTrackApplicationSchema } from "@/lib/validation/fast-track-application-schema";

const MAX_FILE = 5 * 1024 * 1024;
const BUCKET = "cv-uploads";

function slug(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 40);
}

// Uploads a PDF to the private cv-uploads bucket with the service-role client (bypasses RLS,
// so no anonymous upload policy is needed) and returns the storage PATH only. The admin inbox
// stores the path, never a long-lived signed URL; a short-lived URL is minted on demand when
// an admin opens the document (see getUploadSignedUrl in admin-actions.ts).
async function uploadDoc(
  admin: ReturnType<typeof createAdminClient>,
  folder: string,
  kind: string,
  file: File | null,
): Promise<{ ok: true; path: string | null } | { ok: false }> {
  if (!file || file.size === 0) return { ok: true, path: null };
  if (file.type !== "application/pdf") return { ok: false };
  if (file.size > MAX_FILE) return { ok: false };

  const path = `fast-track/${folder}/${kind}.pdf`;
  const { error } = await admin.storage
    .from(BUCKET)
    .upload(path, file, { upsert: true, contentType: "application/pdf" });
  if (error) return { ok: false };

  return { ok: true, path };
}

export async function submitFastTrackApplication(formData: FormData) {
  const get = (k: string) => String(formData.get(k) ?? "");
  const input = {
    prenom: get("prenom"),
    nom: get("nom"),
    email: get("email"),
    whatsapp: get("whatsapp"),
    pays: get("pays"),
    b2Confirm: formData.get("b2Confirm") === "true",
    b2Organisme: get("b2Organisme"),
    b2Annee: get("b2Annee"),
    formation: get("formation"),
    metier: get("metier"),
    experience: get("experience"),
    objectif: get("objectif"),
    domaine: get("domaine"),
    emploiRecherche: get("emploiRecherche"),
    message: get("message"),
  };

  const parsed = fastTrackApplicationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }
  const d = parsed.data;

  // Upload documents (PDF) with the service-role client.
  const admin = createAdminClient();
  const folder = `${Date.now()}-${slug(`${d.prenom}-${d.nom}`)}`;
  const cvFile = formData.get("cvFile");
  const dipFile = formData.get("diplomesFile");

  // CV and diplomas are mandatory (PDF); only the message is optional.
  if (!(cvFile instanceof File) || cvFile.size === 0 || !(dipFile instanceof File) || dipFile.size === 0) {
    return { ok: false as const, error: "missing_docs" };
  }

  const cv = await uploadDoc(admin, folder, "cv", cvFile);
  const dip = await uploadDoc(admin, folder, "diplomes", dipFile);
  if (!cv.ok || !dip.ok) {
    return { ok: false as const, error: "upload_failed" };
  }

  const line = (label: string, value?: string | null) =>
    value && value.trim() ? `${label} : ${value.trim()}` : null;

  const message = [
    "[Candidature Fast Track]",
    "—",
    line("Certificat B2 officiel confirmé", d.b2Confirm ? "oui" : "non"),
    line("Organisme (B2)", d.b2Organisme),
    line("Année (B2)", d.b2Annee),
    "—",
    line("Métier", d.metier),
    line("Formation", d.formation),
    line("Expérience", d.experience),
    "—",
    line("Objectif", d.objectif),
    line("Domaine professionnel", d.domaine),
    line("Emploi recherché / Ausbildung", d.emploiRecherche),
    "—",
    line("CV (PDF)", cv.path),
    line("Diplômes (PDF)", dip.path),
    line("Message", d.message),
    "—",
    line("WhatsApp / téléphone", d.whatsapp),
    line("Pays de résidence", d.pays),
  ]
    .filter(Boolean)
    .join("\n");

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: `${d.prenom} ${d.nom}`.trim(),
    email: d.email,
    message,
  });

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  return { ok: true as const };
}
