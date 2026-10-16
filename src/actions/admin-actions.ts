"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireRole } from "@/lib/auth/require-role";
import type { CandidateStatus } from "@/types/database.types";

export async function validateEmployer(employerId: string) {
  const current = await requireRole("admin");
  const supabase = await createClient();

  const { error } = await supabase
    .from("employers")
    .update({
      status: "validated",
      validated_at: new Date().toISOString(),
      validated_by: current.user.id,
    })
    .eq("id", employerId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath("/admin/employers");
  return { ok: true as const };
}

export async function rejectEmployer(employerId: string) {
  await requireRole("admin");
  const supabase = await createClient();

  const { error } = await supabase
    .from("employers")
    .update({ status: "rejected" })
    .eq("id", employerId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath("/admin/employers");
  return { ok: true as const };
}

export async function updateCandidateAdminFields(
  candidateId: string,
  input: { adminNotes?: string; status?: CandidateStatus }
) {
  await requireRole("admin");
  const supabase = await createClient();

  const { error } = await supabase
    .from("candidates")
    .update({ admin_notes: input.adminNotes, status: input.status })
    .eq("id", candidateId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath(`/admin/candidates/${candidateId}`);
  return { ok: true as const };
}

export async function toggleCandidateVisibility(candidateId: string, visible: boolean) {
  await requireRole("admin");
  const supabase = await createClient();

  const { error } = await supabase
    .from("candidates")
    .update({ is_visible_to_employers: visible })
    .eq("id", candidateId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath("/admin/candidates");
  return { ok: true as const };
}

export async function upsertOccupation(input: {
  id?: string;
  slug: string;
  category: string;
  title_fr: string;
  title_de: string;
  title_en: string;
  description_fr?: string;
  description_de?: string;
  description_en?: string;
  is_published: boolean;
}) {
  await requireRole("admin");
  const supabase = await createClient();

  const { id, ...rest } = input;
  const { error } = id
    ? await supabase.from("shortage_occupations").update(rest).eq("id", id)
    : await supabase.from("shortage_occupations").insert(rest);

  if (error) return { ok: false as const, error: "save_failed" };

  revalidatePath("/admin/occupations");
  revalidatePath("/metiers");
  return { ok: true as const };
}

export async function markContactMessageHandled(messageId: string, handled: boolean) {
  await requireRole("admin");
  const supabase = await createClient();

  const { error } = await supabase
    .from("contact_messages")
    .update({ handled })
    .eq("id", messageId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath("/admin/contact-messages");
  return { ok: true as const };
}

// profile_evaluations has RLS enabled with no policies, so it's reached with the
// service-role client (the admin role is already enforced by requireRole).
export async function markEvaluationHandled(evaluationId: string, handled: boolean) {
  await requireRole("admin");
  const admin = createAdminClient();

  const { error } = await admin
    .from("profile_evaluations")
    .update({ handled })
    .eq("id", evaluationId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath("/admin/evaluations");
  return { ok: true as const };
}

export async function cancelAppointment(appointmentId: string) {
  await requireRole("admin");
  const supabase = await createClient();

  const { error } = await supabase
    .from("appointments")
    .update({ status: "cancelled" })
    .eq("id", appointmentId);

  if (error) return { ok: false as const, error: "update_failed" };

  revalidatePath("/admin/appointments");
  return { ok: true as const };
}

// On-demand, short-lived (5 min) signed URL for a Fast Track document stored in the private
// cv-uploads bucket. Admin-only; the message inbox stores only the storage path (never a
// long-lived URL), so access to applicant CVs/diplomas is minted fresh each time it's opened.
export async function getUploadSignedUrl(path: string) {
  await requireRole("admin");

  // Only fast-track PDFs, no path traversal — the only paths that appear in messages.
  if (!/^fast-track\/[A-Za-z0-9._-]+\/(cv|diplomes)\.pdf$/.test(path)) {
    return { ok: false as const, error: "invalid_path" };
  }

  const admin = createAdminClient();
  const { data, error } = await admin.storage.from("cv-uploads").createSignedUrl(path, 300);
  if (error || !data?.signedUrl) return { ok: false as const, error: "sign_failed" };

  return { ok: true as const, url: data.signedUrl };
}
