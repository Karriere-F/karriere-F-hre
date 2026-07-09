import { getTranslations } from "next-intl/server";
import { requireRole } from "@/lib/auth/require-role";
import { createClient } from "@/lib/supabase/server";
import { CvUploadForm } from "@/components/candidate/cv-upload-form";

export default async function CandidateCvPage() {
  const t = await getTranslations("candidate.cv");
  const current = await requireRole("candidate");
  const supabase = await createClient();

  const { data: candidate } = await supabase
    .from("candidates")
    .select("cv_storage_path")
    .eq("id", current.user.id)
    .single();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-6">{t("title")}</h1>
      <CvUploadForm currentPath={candidate?.cv_storage_path ?? null} />
    </div>
  );
}
