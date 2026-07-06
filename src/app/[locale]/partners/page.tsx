import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "../../../../i18n/navigation";

export default async function PartnersPage() {
  const t = await getTranslations("partners");

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-brand-ink-secondary leading-relaxed mb-8">{t("growingBody")}</p>
        <Link
          href="/employer/signup"
          className="inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors"
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
}
