"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
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
  revalidatePath("/candidats/metiers");
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
