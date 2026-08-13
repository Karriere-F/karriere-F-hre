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
import { DIPLOME_METIERS, SANTE_FICHES, SANTE_UI, tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs/sante/diplome",
    locale,
    title: `${tr(SANTE_UI.sector, locale)} : ${tr(SECTEURS_UI.routeDiplomeTitle, locale)}`,
    description: tr(SECTEURS_UI.routeDiplomeIntro, locale),
  });
}

export default async function SanteDiplomePage() {
  const locale = (await getLocale()) as Locale;
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
          { name: tr(SANTE_UI.sector, locale), pathname: "/secteurs/sante" },
          { name: tr(SECTEURS_UI.routeDiplomeTitle, locale), pathname: "/secteurs/sante/diplome" },
        ]}
      />

      <PageHero title={tr(SANTE_UI.hubTitle, locale)} subtitle={tr(SECTEURS_UI.routeDiplomeIntro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/secteurs/sante"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SECTEURS_UI.backToRoute, locale)}
          </Link>

          <div className="mt-6">
            <MetierList
              metiers={DIPLOME_METIERS}
              locale={locale}
              hasFiche={(slug) => Boolean(SANTE_FICHES[slug])}
              ficheHref={(slug) => ({ pathname: "/metiers/sante/[slug]", params: { slug } })}
              labels={{ viewFiche: SANTE_UI.viewFiche }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
