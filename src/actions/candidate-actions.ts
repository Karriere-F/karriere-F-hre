"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { candidateProfileSchema } from "@/lib/validation/candidate-schema";

export async function updateCandidateProfile(input: unknown) {
  const parsed = candidateProfileSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { ok: false as const, error: "not_authenticated" };
  }

  const { error } = await supabase
    .from("candidates")
    .update({
      bio: parsed.data.bio,
      years_experience: parsed.data.yearsExperience,
      german_level: parsed.data.germanLevel,
    })
    .eq("id", user.id);

  if (error) {
    return { ok: false as const, error: "update_failed" };
  }

  revalidatePath("/candidate/profile");
  return { ok: true as const };
}

export async function uploadCandidateCv(formData: FormData) {
  const file = formData.get("cv");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false as const, error: "no_file" };
  }
  if (file.type !== "application/pdf") {
    return { ok: false as const, error: "invalid_type" };
  }
  if (file.size > 5 * 1024 * 1024) {
    return { ok: false as const, error: "too_large" };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { ok: false as const, error: "not_authenticated" };
  }

  const path = `${user.id}/cv.pdf`;
  const { error: uploadError } = await supabase.storage
    .from("cv-uploads")
    .upload(path, file, { upsert: true, contentType: "application/pdf" });

  if (uploadError) {
    return { ok: false as const, error: "upload_failed" };
  }

  const { error: updateError } = await supabase
    .from("candidates")
    .update({ cv_storage_path: path })
    .eq("id", user.id);

  if (updateError) {
    return { ok: false as const, error: "update_failed" };
  }

  revalidatePath("/candidate/cv");
  return { ok: true as const };
}
