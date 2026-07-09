import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { requireValidatedEmployer } from "@/lib/auth/require-validated-employer";
import { createClient } from "@/lib/supabase/server";

export default async function EmployerCandidateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("employer");
  await requireValidatedEmployer();
  const supabase = await createClient();

  const { data: candidate } = await supabase
    .from("candidates_public_view")
    .select("*")
    .eq("id", id)
    .single();

  if (!candidate) {
    notFound();
  }

  let cvUrl: string | null = null;
  if (candidate.cv_storage_path) {
    const { data: signed } = await supabase.storage
      .from("cv-uploads")
      .createSignedUrl(candidate.cv_storage_path, 300);
    cvUrl = signed?.signedUrl ?? null;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-2 uppercase">
        {candidate.german_level}
      </h1>
      <p className="text-sm text-brand-ink-muted mb-6">
        {candidate.years_experience ?? 0} {t("candidates.yearsExperienceSuffix")}
      </p>
      {candidate.bio && (
        <p className="text-brand-ink-secondary leading-relaxed mb-6">{candidate.bio}</p>
      )}
      {cvUrl ? (
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors"
        >
          {t("candidateDetail.downloadCv")}
        </a>
      ) : (
        <p className="text-sm text-brand-ink-muted">{t("candidateDetail.cvNotAvailable")}</p>
      )}
    </div>
  );
}
