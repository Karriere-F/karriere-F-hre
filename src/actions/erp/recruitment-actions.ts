"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireStaff } from "@/lib/erp/auth";
import { erpRedirect, fail, number, text, refreshErp } from "@/lib/erp/server";
import { DOCUMENT_TYPES, PLACEMENT_STAGES } from "@/lib/erp/labels";
import type {
  CandidateStatus,
  DocumentStatus,
  GermanLevel,
  PlacementStage,
} from "@/types/database.types";

const MAX_FILE = 5 * 1024 * 1024;

// A dossier is a regular site account (auth user -> profiles -> candidates), created
// without a password: the candidate can be given site access later.
export async function createCandidateDossier(fd: FormData) {
  await requireStaff("recruitment");
  const fullName = text(fd, "full_name");
  const email = text(fd, "email")?.toLowerCase();
  if (!fullName || !email) return fail("/erp/dossiers/nouveau", "Nom et email sont obligatoires.");

  const admin = createAdminClient();
  const { data, error } = await admin.auth.admin.createUser({
    email,
    email_confirm: true,
    user_metadata: { full_name: fullName, needs_training: fd.get("track") !== "fast" },
  });
  if (error || !data.user) {
    return fail(
      "/erp/dossiers/nouveau",
      error?.message.includes("already") ? "Un compte existe déjà avec cet email." : "Création impossible."
    );
  }

  const id = data.user.id;
  await admin.from("profiles").update({ phone: text(fd, "phone"), email }).eq("id", id);
  await admin
    .from("candidates")
    .update({
      german_level: (text(fd, "german_level") ?? "none") as GermanLevel,
      years_experience: number(fd, "years_experience"),
      target_occupation_id: text(fd, "target_occupation_id"),
      admin_notes: text(fd, "notes"),
    })
    .eq("id", id);

  refreshErp();
  return erpRedirect(`/erp/dossiers/${id}`);
}

export async function updateCandidateDossier(candidateId: string, fd: FormData) {
  await requireStaff("recruitment");
  const supabase = await createClient();

  const { error } = await supabase
    .from("candidates")
    .update({
      status: text(fd, "status") as CandidateStatus,
      german_level: text(fd, "german_level") as GermanLevel,
      needs_training: fd.get("track") !== "fast",
      years_experience: number(fd, "years_experience"),
      target_occupation_id: text(fd, "target_occupation_id"),
      admin_notes: text(fd, "admin_notes"),
    })
    .eq("id", candidateId);
  if (error) return fail(`/erp/dossiers/${candidateId}`, "Mise à jour impossible.");

  // Contact fields live on profiles, which only an admin (or service role) may write.
  await createAdminClient()
    .from("profiles")
    .update({ full_name: text(fd, "full_name"), phone: text(fd, "phone") })
    .eq("id", candidateId);

  refreshErp();
}

export async function saveDocument(candidateId: string, docType: string, fd: FormData) {
  const { user } = await requireStaff("recruitment");
  if (!DOCUMENT_TYPES.some((d) => d.key === docType)) throw new Error("bad doc type");
  const supabase = await createClient();
  const back = `/erp/dossiers/${candidateId}`;

  let storagePath: string | undefined;
  const file = fd.get("file");
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE) return fail(back, "Fichier trop lourd (5 Mo maximum).");
    const ext = (file.name.split(".").pop() || "pdf").toLowerCase().replace(/[^a-z0-9]/g, "");
    storagePath = `${candidateId}/${docType}-${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from("erp-documents")
      .upload(storagePath, file, { contentType: file.type || undefined });
    if (error) return fail(back, "Envoi du fichier impossible.");
  }

  let status = (text(fd, "status") ?? "missing") as DocumentStatus;
  if (storagePath && status === "missing") status = "received";

  const { error } = await supabase.from("candidate_documents").upsert(
    {
      candidate_id: candidateId,
      doc_type: docType,
      status,
      expires_on: text(fd, "expires_on"),
      notes: text(fd, "notes"),
      updated_by: user.id,
      updated_at: new Date().toISOString(),
      ...(storagePath ? { storage_path: storagePath } : {}),
    },
    { onConflict: "candidate_id,doc_type" }
  );
  if (error) return fail(back, "Enregistrement du document impossible.");

  refreshErp();
}

export async function createPlacement(fd: FormData) {
  const { user } = await requireStaff("recruitment");
  const supabase = await createClient();
  const candidateId = text(fd, "candidate_id");
  const jobTitle = text(fd, "job_title");
  const back = text(fd, "back") ?? "/erp/placements";
  if (!candidateId || !jobTitle) return fail(back, "Candidat et poste sont obligatoires.");

  const stage = (text(fd, "stage") ?? "training") as PlacementStage;
  const { data, error } = await supabase
    .from("placements")
    .insert({
      candidate_id: candidateId,
      job_title: jobTitle,
      track: text(fd, "track") ?? "fachkraft",
      stage,
      employer_id: text(fd, "employer_id"),
      owner_id: text(fd, "owner_id") ?? user.id,
      target_start_date: text(fd, "target_start_date"),
      germany_city: text(fd, "germany_city"),
    })
    .select("id")
    .single();
  if (error || !data) return fail(back, "Création du placement impossible.");

  await supabase
    .from("placement_events")
    .insert({ placement_id: data.id, stage, note: "Placement ouvert", created_by: user.id });

  refreshErp();
  return erpRedirect(`/erp/placements/${data.id}`);
}

export async function updatePlacement(placementId: string, fd: FormData) {
  await requireStaff("recruitment");
  const supabase = await createClient();
  const { error } = await supabase
    .from("placements")
    .update({
      job_title: text(fd, "job_title") ?? undefined,
      track: text(fd, "track") ?? undefined,
      employer_id: text(fd, "employer_id"),
      owner_id: text(fd, "owner_id"),
      target_start_date: text(fd, "target_start_date"),
      germany_city: text(fd, "germany_city"),
      notes: text(fd, "notes"),
      updated_at: new Date().toISOString(),
    })
    .eq("id", placementId);
  if (error) return fail(`/erp/placements/${placementId}`, "Mise à jour impossible.");
  refreshErp();
}

// Moves the placement to another stage and/or logs a note in its history.
export async function logPlacementEvent(placementId: string, fd: FormData) {
  const { user } = await requireStaff("recruitment");
  const supabase = await createClient();
  const stage = text(fd, "stage") as PlacementStage | null;
  const note = text(fd, "note");
  const back = `/erp/placements/${placementId}`;
  if (stage && !PLACEMENT_STAGES.some((s) => s.key === stage)) throw new Error("bad stage");

  const { data: current } = await supabase.from("placements").select("stage, candidate_id").eq("id", placementId).single();
  if (!current) return fail(back, "Placement introuvable.");
  const changed = stage && stage !== current.stage;
  if (!changed && !note) return;

  if (changed) {
    await supabase
      .from("placements")
      .update({ stage, updated_at: new Date().toISOString() })
      .eq("id", placementId);
    // Keep the site-side candidate status in step with the pipeline.
    const status: CandidateStatus | null =
      stage === "placed" ? "placed" : stage === "training" ? "in_training" : stage === "dropped" ? null : "ready";
    if (status) await supabase.from("candidates").update({ status }).eq("id", current.candidate_id);
  }
  await supabase.from("placement_events").insert({
    placement_id: placementId,
    stage: changed ? stage : null,
    note,
    created_by: user.id,
  });

  refreshErp();
}

export async function deletePlacement(placementId: string) {
  await requireStaff("recruitment");
  const supabase = await createClient();
  await supabase.from("placements").delete().eq("id", placementId);
  refreshErp();
  return erpRedirect("/erp/placements");
}
