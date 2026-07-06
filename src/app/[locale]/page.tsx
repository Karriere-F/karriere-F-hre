import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <div className="flex flex-col">
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl font-serif max-w-2xl leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="max-w-xl text-brand-white/80 text-lg">{t("heroSubtitle")}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/candidate/signup"
              className="rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors"
            >
              {t("ctaCandidate")}
            </Link>
            <Link
              href="/employer/signup"
              className="rounded-full border border-brand-gold px-6 py-3 text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-colors"
            >
              {t("ctaEmployer")}
            </Link>
            <Link
              href="/book-appointment"
              className="rounded-full border border-brand-white/30 px-6 py-3 text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors"
            >
              {t("ctaBook")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-serif text-brand-ink mb-10">{t("whyTitle")}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg bg-brand-white border border-brand-grid p-6">
                <h3 className="text-brand-gold font-semibold mb-2">
                  {t(`why${i}Title` as "why1Title")}
                </h3>
                <p className="text-brand-ink-secondary text-sm leading-relaxed">
                  {t(`why${i}Body` as "why1Body")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-serif text-brand-ink mb-10">{t("tracksTitle")}</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <Link
              href="/german-courses"
              className="rounded-lg border border-brand-grid p-8 hover:border-brand-gold transition-colors block"
            >
              <h3 className="text-xl font-serif text-brand-black mb-3">
                {t("fastTrackTitle")}
              </h3>
              <p className="text-brand-ink-secondary text-sm leading-relaxed">
                {t("fastTrackBody")}
              </p>
            </Link>
            <Link
              href="/german-courses"
              className="rounded-lg border border-brand-grid p-8 hover:border-brand-gold transition-colors block"
            >
              <h3 className="text-xl font-serif text-brand-black mb-3">
                {t("fullTrainingTitle")}
              </h3>
              <p className="text-brand-ink-secondary text-sm leading-relaxed">
                {t("fullTrainingBody")}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
