"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireRole } from "@/lib/auth/require-role";
import {
  CONTENT_PAGES,
  IMAGE_SLOTS,
  isValidContentField,
  type ContentPageKey,
  type ImageSlotKey,
} from "@/lib/content/content-schema";
import { routing } from "../../i18n/routing";

export async function upsertPageContentField(input: {
  pageKey: ContentPageKey;
  fieldKey: string;
  valueFr: string;
  valueDe: string;
  valueEn: string;
}) {
  const current = await requireRole("admin");

  if (!isValidContentField(input.pageKey, input.fieldKey)) {
    return { ok: false as const, error: "unknown_field" };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("page_content").upsert(
    {
      page_key: input.pageKey,
      field_key: input.fieldKey,
      value_fr: input.valueFr || null,
      value_de: input.valueDe || null,
      value_en: input.valueEn || null,
      updated_by: current.user.id,
    },
    { onConflict: "page_key,field_key" }
  );

  if (error) {
    return { ok: false as const, error: "save_failed" };
  }

  revalidatePath(`/admin/content/${input.pageKey}`);
  const path = CONTENT_PAGES[input.pageKey].path;
  for (const locale of routing.locales) {
    revalidatePath(`/${locale}${path}`);
  }

  return { ok: true as const };
}

export async function upsertSiteImage(slotKey: ImageSlotKey, formData: FormData) {
  await requireRole("admin");

  if (!IMAGE_SLOTS[slotKey]) {
    return { ok: false as const, error: "unknown_slot" };
  }

  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false as const, error: "no_file" };
  }
  if (!file.type.startsWith("image/")) {
    return { ok: false as const, error: "invalid_type" };
  }
  if (file.size > 5 * 1024 * 1024) {
    return { ok: false as const, error: "too_large" };
  }

  const supabase = await createClient();

  const { data: existing } = await supabase
    .from("site_images")
    .select("storage_path")
    .eq("slot_key", slotKey)
    .maybeSingle();

  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${slotKey}/${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("site-images")
    .upload(path, file, { contentType: file.type });

  if (uploadError) {
    return { ok: false as const, error: "upload_failed" };
  }

  const { error: upsertError } = await supabase.from("site_images").upsert(
    { slot_key: slotKey, storage_path: path },
    { onConflict: "slot_key" }
  );

  if (upsertError) {
    return { ok: false as const, error: "save_failed" };
  }

  if (existing?.storage_path) {
    await supabase.storage.from("site-images").remove([existing.storage_path]);
  }

  revalidatePath("/admin/images");
  for (const locale of routing.locales) {
    revalidatePath(`/${locale}`, "layout");
  }

  return { ok: true as const };
}
