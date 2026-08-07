import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, GraduationCap, Stethoscope } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SECTEURS_UI } from "@/lib/secteurs";
import { SANTE_UI, tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs/sante",
    locale,
    title: `${tr(SANTE_UI.sector, locale)} — ${tr(SECTEURS_UI.chooseRouteTitle, locale)}`,
    description: tr(SANTE_UI.hubIntro, locale),
  });
}

export default async function SecteursSantePage() {
  const locale = (await getLocale()) as Locale;

  const choices = [
    {
      href: "/secteurs/sante/ausbildung" as const,
      icon: GraduationCap,
      title: tr(SECTEURS_UI.routeAusbildungTitle, locale),
      intro: tr(SECTEURS_UI.routeAusbildungIntro, locale),
    },
    {
      href: "/secteurs/sante/diplome" as const,
      icon: Stethoscope,
      title: tr(SECTEURS_UI.routeDiplomeTitle, locale),
      intro: tr(SECTEURS_UI.routeDiplomeIntro, locale),
    },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
          { name: tr(SANTE_UI.sector, locale), pathname: "/secteurs/sante" },
        ]}
      />

      <PageHero title={tr(SANTE_UI.sector, locale)} subtitle={tr(SECTEURS_UI.chooseRouteTitle, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SECTEURS_UI.backToSecteurs, locale)}
          </Link>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {choices.map(({ href, icon: Icon, title, intro }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-brand-grid bg-brand-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-[0_14px_34px_-16px_rgba(17,17,17,0.25)] sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text transition-colors duration-200 group-hover:bg-brand-gold group-hover:text-brand-black">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-serif text-xl text-brand-black leading-snug sm:text-2xl">
                  {title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-brand-ink-secondary leading-relaxed">{intro}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text">
                  {tr(SECTEURS_UI.choose, locale)}
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
