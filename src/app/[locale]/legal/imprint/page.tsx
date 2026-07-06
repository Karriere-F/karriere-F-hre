import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";

export default async function ImprintPage() {
  const t = await getTranslations("legal");

  return (
    <div>
      <PageHero title={t("imprintTitle")} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-brand-ink-secondary leading-relaxed">
          {t("imprintPlaceholder")}
        </p>
      </div>
    </div>
  );
}
