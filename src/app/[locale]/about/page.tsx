import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("intro")} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-serif text-brand-black mb-3">{t("missionTitle")}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{t("missionBody")}</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-brand-black mb-3">{t("founderTitle")}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{t("founderBody")}</p>
        </div>
      </div>
      <div className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-xl font-serif text-brand-black mb-6">{t("valuesTitle")}</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {[t("value1"), t("value2"), t("value3")].map((v) => (
              <li
                key={v}
                className="rounded-lg bg-brand-white border border-brand-grid p-5 text-brand-ink-secondary text-sm"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
