import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { MetierList } from "@/components/sante/metier-list";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { AUSBILDUNG_METIERS, SANTE_UI, tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/metiers/sante/ausbildung",
    locale,
    title: tr(SANTE_UI.pathAusbildungTitle, locale),
    description: tr(SANTE_UI.pathAusbildungIntro, locale),
  });
}

export default async function SanteAusbildungPage() {
  const locale = (await getLocale()) as Locale;

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SANTE_UI.home, locale), pathname: "/" },
          { name: tr(SANTE_UI.metiers, locale), pathname: "/metiers" },
          { name: tr(SANTE_UI.sector, locale), pathname: "/metiers/sante" },
          { name: tr(SANTE_UI.pathAusbildungTitle, locale), pathname: "/metiers/sante/ausbildung" },
        ]}
      />

      <PageHero
        title={tr(SANTE_UI.pathAusbildungTitle, locale)}
        subtitle={tr(SANTE_UI.pathAusbildungIntro, locale)}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/metiers/sante"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SANTE_UI.backToSante, locale)}
          </Link>

          <div className="mt-6">
            <MetierList metiers={AUSBILDUNG_METIERS} locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
}
