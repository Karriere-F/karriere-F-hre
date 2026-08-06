import { getLocale, getTranslations } from "next-intl/server";
import { HeartPulse, UtensilsCrossed, Wrench, Cog, Cpu, Truck, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { Link } from "@i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { METIER_CATEGORIES } from "@/lib/metier-categories";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.metiers;

export const generateMetadata = () => metadataFromNamespace("metiers", "/metiers");

const SECTOR_ICONS: Record<string, LucideIcon> = {
  "sante-soins": HeartPulse,
  "hotellerie-restauration": UtensilsCrossed,
  "btp-artisanat": Wrench,
  "industrie-technique": Cog,
  informatique: Cpu,
  "transport-logistique": Truck,
};

export default async function MetiersPage() {
  const t = await getTranslations("metiers");
  const tFaq = await getTranslations("metiersFaq");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("metiers");
  const supabase = await createClient();

  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("category")
    .eq("is_published", true);

  const counts = new Map<string, number>();
  for (const occ of occupations ?? []) {
    counts.set(occ.category, (counts.get(occ.category) ?? 0) + 1);
  }

  const faqItems = [1, 2, 3, 4, 5].map((i) => ({
    q: tFaq(`q${i}` as "q1"),
    a: tFaq(`a${i}` as "a1"),
  }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/metiers" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      <PageHero title={content.title} subtitle={content.subtitle} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href="#secteurs"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaSecteurs}
          </a>
        </div>
      </div>

      {/* Contexte */}
      <AnchorSection
        id="contexte"
        white
        eyebrow={content.contexteEyebrow}
        title={content.contexteTitle}
        lead={content.contexteLead}
      >
        <p className="text-brand-ink-secondary max-w-2xl">{content.contexteBody}</p>
      </AnchorSection>

      {/* Secteurs */}
      <AnchorSection
        id="secteurs"
        eyebrow={content.secteursEyebrow}
        title={content.secteursTitle}
        lead={content.secteursLead}
      >
        <div className="space-y-5">
          {Object.entries(METIER_CATEGORIES).map(([slug, cat], i) => {
            const Icon = SECTOR_ICONS[slug];
            const openings = cat.dbCategory ? (counts.get(cat.dbCategory) ?? 0) : 0;
            return (
              <article
                key={slug}
                id={slug}
                className="animate-fade-up lift-on-hover rounded-xl border border-brand-grid bg-brand-white p-6"
                style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}
              >
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <span className="shrink-0 h-12 w-12 rounded-xl bg-brand-card border border-brand-grid flex items-center justify-center">
                    <Icon size={24} strokeWidth={2} className="text-brand-gold-text" aria-hidden="true" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg text-brand-black">{cat.title[locale]}</h3>
                    <p className="text-sm text-brand-ink-secondary">{cat.tagline[locale]}</p>
                    <span className="inline-block mt-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-gold text-brand-black">
                      {content.levelLabel}
                    </span>
                  </div>
                  {openings > 0 && (
                    <span className="text-xs text-brand-gold-text font-medium whitespace-nowrap">
                      {openings} {content.openingsSuffix}
                    </span>
                  )}
                </div>
                <p className="text-sm text-brand-ink-secondary mb-5">{cat.body[locale]}</p>
                <ul className="flex flex-wrap gap-2">
                  {cat.jobs.map((job) => (
                    <li
                      key={job.de}
                      className="rounded-full border border-brand-grid bg-brand-card px-3.5 py-1.5 text-sm text-brand-ink-secondary"
                    >
                      {job.label[locale]}{" "}
                      <span className="text-brand-gold-text">· {job.de}</span>
                    </li>
                  ))}
                </ul>
                {cat.specialCase && (
                  <div className="mt-5 rounded-lg border border-brand-gold bg-brand-gold/10 p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-sm font-medium text-brand-black">{cat.specialCase.title[locale]}</h4>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-gold text-brand-black">
                        {locale === "fr" ? "Langue" : locale === "de" ? "Sprache" : "Language"} : {cat.specialCase.levelLabel}
                      </span>
                    </div>
                    <p className="text-sm text-brand-ink-secondary mb-3">{cat.specialCase.body[locale]}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.specialCase.steps.map((step, si) => (
                        <span
                          key={step[locale]}
                          className="rounded-full bg-brand-white border border-brand-grid px-3 py-1 text-xs text-brand-ink-secondary"
                        >
                          {si + 1}. {step[locale]}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {slug === "sante-soins" && (
                  <div className="mt-5">
                    <Link
                      href="/metiers/sante"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
                    >
                      {locale === "fr"
                        ? "Voir tous les métiers de la santé"
                        : locale === "de"
                          ? "Alle Gesundheitsberufe ansehen"
                          : "See all healthcare professions"}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </AnchorSection>

      {/* Éligibilité */}
      <AnchorSection
        id="eligibilite-conditions"
        white
        eyebrow={content.eligibiliteEyebrow}
        title={content.eligibiliteTitle}
        lead={content.eligibiliteLead}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [content.crit1Title, content.crit1Body],
            [content.crit2Title, content.crit2Body],
            [content.crit3Title, content.crit3Body],
            [content.crit4Title, content.crit4Body],
          ].map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h4 className="text-brand-black font-medium mb-1">{title}</h4>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Parcours */}
      <AnchorSection id="parcours" eyebrow={content.parcoursEyebrow} title={content.parcoursTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [content.step1Title, content.step1Body],
            [content.step2Title, content.step2Body],
            [content.step3Title, content.step3Body],
            [content.step4Title, content.step4Body],
          ].map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-8 w-8 rounded-lg bg-brand-gold text-brand-black font-serif font-bold text-sm flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <h4 className="text-brand-black font-medium mb-1">{title}</h4>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* FAQ */}
      <AnchorSection id="faq" white eyebrow={content.faqEyebrow} title={content.faqTitle}>
        <div className="max-w-3xl space-y-4">
          {faqItems.map((item, i) => (
            <details
              key={item.q}
              className="animate-fade-up group rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <summary className="cursor-pointer text-brand-black font-medium marker:content-none flex items-center justify-between gap-4">
                {item.q}
                <span className="text-brand-gold-text transition-transform duration-150 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-brand-ink-secondary leading-relaxed text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </AnchorSection>

      {/* Final CTA */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <Link
            href="/candidate/signup"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
