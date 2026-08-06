import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowRight, GraduationCap, Stethoscope } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import {
  AUSBILDUNG_METIERS,
  DIPLOME_METIERS,
  SANTE_FICHES,
  SANTE_UI,
  tr,
  type SanteMetier,
} from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/metiers/sante",
    locale,
    title: tr(SANTE_UI.hubTitle, locale),
    description: tr(SANTE_UI.hubIntro, locale),
  });
}

function MetierList({ metiers, locale }: { metiers: SanteMetier[]; locale: Locale }) {
  return (
    <ul className="mt-6 divide-y divide-brand-grid border-y border-brand-grid">
      {metiers.map((m) => {
        const hasFiche = Boolean(SANTE_FICHES[m.slug]);
        const note = tr(m.note, locale);
        const inner = (
          <>
            <span className="min-w-0">
              <span className="block font-medium text-brand-black">{tr(m.name, locale)}</span>
              {note && <span className="block text-sm text-brand-ink-secondary">{note}</span>}
            </span>
            {hasFiche && (
              <span className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-brand-gold-text">
                {tr(SANTE_UI.viewFiche, locale)}
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </span>
            )}
          </>
        );
        return (
          <li key={m.slug + tr(m.name, locale)}>
            {hasFiche ? (
              <Link
                href={{ pathname: "/metiers/sante/[slug]", params: { slug: m.slug } }}
                className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-brand-gold-text"
              >
                {inner}
              </Link>
            ) : (
              <div className="flex items-center justify-between gap-4 py-3.5">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default async function SanteHubPage() {
  const locale = (await getLocale()) as Locale;

  const paths = [
    {
      icon: GraduationCap,
      title: tr(SANTE_UI.pathAusbildungTitle, locale),
      intro: tr(SANTE_UI.pathAusbildungIntro, locale),
      metiers: AUSBILDUNG_METIERS,
    },
    {
      icon: Stethoscope,
      title: tr(SANTE_UI.pathDiplomeTitle, locale),
      intro: tr(SANTE_UI.pathDiplomeIntro, locale),
      metiers: DIPLOME_METIERS,
    },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SANTE_UI.home, locale), pathname: "/" },
          { name: tr(SANTE_UI.metiers, locale), pathname: "/metiers" },
          { name: tr(SANTE_UI.sector, locale), pathname: "/metiers/sante" },
        ]}
      />

      <PageHero title={tr(SANTE_UI.hubTitle, locale)} subtitle={tr(SANTE_UI.hubIntro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {paths.map(({ icon: Icon, title, intro, metiers }) => (
              <div
                key={title}
                className="animate-fade-up flex flex-col rounded-2xl border border-brand-grid bg-brand-card p-6 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-serif text-2xl text-brand-black leading-snug">{title}</h2>
                <p className="mt-2 text-brand-ink-secondary leading-relaxed">{intro}</p>

                <MetierList metiers={metiers} locale={locale} />

                <div className="mt-auto pt-7">
                  <Link
                    href="/postuler"
                    className="press inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 font-medium text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
                  >
                    {tr(SANTE_UI.apply, locale)}
                    <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
