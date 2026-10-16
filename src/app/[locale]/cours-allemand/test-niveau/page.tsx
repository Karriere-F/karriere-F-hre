import { getLocale, getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { GermanLevelTest } from "@/components/cours/german-level-test";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { GERMAN_TEST as T } from "@/lib/german-test";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/cours-allemand/test-niveau",
    locale,
    title: tr(T.heroTitle, locale),
    description: tr(T.heroIntro, locale),
  });
}

export default async function TestNiveauPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tr(T.heroKicker, locale), pathname: "/cours-allemand/test-niveau" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-text">
            {tr(T.heroKicker, locale)}
          </p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl text-brand-black text-balance leading-tight">
            {tr(T.heroTitle, locale)}
          </h1>
          <p className="mt-5 text-brand-ink-secondary leading-relaxed">{tr(T.heroIntro, locale)}</p>
        </div>
      </section>

      {/* Test */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <GermanLevelTest locale={locale} />
        </div>
      </section>
    </div>
  );
}
