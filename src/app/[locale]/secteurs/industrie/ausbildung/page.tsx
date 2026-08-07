import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { MetierList } from "@/components/secteurs/metier-list";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SECTEURS_UI } from "@/lib/secteurs";
import { INDUSTRIE_AUSBILDUNG_METIERS, INDUSTRIE_FICHES, INDUSTRIE_UI, tr } from "@/lib/industrie-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs/industrie/ausbildung",
    locale,
    title: `${tr(INDUSTRIE_UI.sector, locale)} : ${tr(SECTEURS_UI.routeAusbildungTitle, locale)}`,
    description: tr(SECTEURS_UI.routeAusbildungIntro, locale),
  });
}

export default async function IndustrieAusbildungPage() {
  const locale = (await getLocale()) as Locale;
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
          { name: tr(INDUSTRIE_UI.sector, locale), pathname: "/secteurs/industrie" },
          { name: tr(SECTEURS_UI.routeAusbildungTitle, locale), pathname: "/secteurs/industrie/ausbildung" },
        ]}
      />

      <PageHero title={tr(INDUSTRIE_UI.hubTitle, locale)} subtitle={tr(SECTEURS_UI.routeAusbildungIntro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/secteurs/industrie"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SECTEURS_UI.backToRoute, locale)}
          </Link>

          <div className="mt-6">
            <MetierList
              metiers={INDUSTRIE_AUSBILDUNG_METIERS}
              locale={locale}
              hasFiche={(slug) => Boolean(INDUSTRIE_FICHES[slug])}
              ficheHref={(slug) => ({ pathname: "/metiers/industrie/[slug]", params: { slug } })}
              labels={{ viewFiche: INDUSTRIE_UI.viewFiche, apply: INDUSTRIE_UI.apply }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
