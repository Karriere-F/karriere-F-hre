import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { getPageContent } from "@/lib/content/get-page-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.cgu;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("cgu");
  return buildMetadata({
    pathname: "/cgu",
    locale,
    title: t("title"),
    description: t("placeholder"),
  });
}

export default async function CguPage() {
  const t = await getTranslations("cgu");
  const content = await getPageContent<Content>("cgu");

  return (
    <div>
      <PageHero title={t("title")} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <p className="text-brand-ink-secondary text-sm italic">{t("placeholder")}</p>
        <div>
          <h2 className="text-lg font-serif text-brand-black mb-2">{content.section1Title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.section1Body}</p>
        </div>
        <div>
          <h2 className="text-lg font-serif text-brand-black mb-2">{content.section2Title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.section2Body}</p>
        </div>
        <div>
          <h2 className="text-lg font-serif text-brand-black mb-2">{content.section3Title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.section3Body}</p>
        </div>
      </div>
    </div>
  );
}
