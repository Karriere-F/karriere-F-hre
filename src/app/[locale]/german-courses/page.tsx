import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "../../../../i18n/navigation";

export default async function GermanCoursesPage() {
  const t = await getTranslations("germanCourses");

  const levels = ["levelA1", "levelA2", "levelB1", "levelB2", "levelPrep"] as const;

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 sm:grid-cols-2">
        <div className="rounded-lg border border-brand-grid p-8">
          <h2 className="text-xl font-serif text-brand-black mb-3">
            {t("fastTrack.title")}
          </h2>
          <p className="text-brand-ink-secondary leading-relaxed mb-6">
            {t("fastTrack.body")}
          </p>
          <Link
            href="/candidate/signup"
            className="inline-flex rounded-full border border-brand-gold px-5 py-2.5 text-brand-gold hover:bg-brand-gold hover:text-brand-white transition-colors text-sm"
          >
            {t("fastTrack.title")}
          </Link>
        </div>

        <div className="rounded-lg border border-brand-grid p-8">
          <h2 className="text-xl font-serif text-brand-black mb-3">
            {t("fullTraining.title")}
          </h2>
          <p className="text-brand-ink-secondary leading-relaxed mb-6">
            {t("fullTraining.body")}
          </p>

          <h3 className="text-brand-gold font-semibold text-sm mb-2">
            {t("fullTraining.levelsTitle")}
          </h3>
          <ul className="text-sm text-brand-ink-secondary space-y-1 mb-6">
            {levels.map((key) => (
              <li key={key}>{t(`fullTraining.${key}`)}</li>
            ))}
          </ul>

          <h3 className="text-brand-gold font-semibold text-sm mb-2">
            {t("fullTraining.examsTitle")}
          </h3>
          <p className="text-sm text-brand-ink-secondary mb-6">
            {t("fullTraining.examsBody")}
          </p>

          <h3 className="text-brand-gold font-semibold text-sm mb-2">
            {t("fullTraining.includesTitle")}
          </h3>
          <ul className="text-sm text-brand-ink-secondary space-y-1 list-disc list-inside">
            <li>{t("fullTraining.includes1")}</li>
            <li>{t("fullTraining.includes2")}</li>
            <li>{t("fullTraining.includes3")}</li>
            <li>{t("fullTraining.includes4")}</li>
            <li>{t("fullTraining.includes5")}</li>
          </ul>
        </div>
      </div>

      <div className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-center text-brand-ink-secondary text-sm">
          {t("pricingNote")}
        </div>
      </div>
    </div>
  );
}
