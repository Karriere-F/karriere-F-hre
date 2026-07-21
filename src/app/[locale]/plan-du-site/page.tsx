import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPathname } from "@i18n/navigation";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";

export const generateMetadata = () => metadataFromNamespace("planDuSite", "/plan-du-site");

type Href = Parameters<typeof getPathname>[0]["href"];
type Entry = { href: Href; hash?: string; labelKey: string };

// Mirrors the public routes registered in i18n/routing.ts and listed in
// src/app/sitemap.ts. Anchor entries point at sections of the long /candidats and
// /entreprises pages -- those sections are real destinations for visitors even though
// they aren't separate URLs, so they belong on a human-readable site map.
const GROUPS: { titleKey: string; entries: Entry[] }[] = [
  {
    titleKey: "groupCandidats",
    entries: [
      { href: "/candidats", labelKey: "candidats" },
      { href: "/candidats", hash: "voies", labelKey: "candidatsVoies" },
      { href: "/candidats", hash: "eligibilite", labelKey: "candidatsEligibilite" },
      { href: "/candidats", hash: "formations", labelKey: "candidatsFormations" },
      { href: "/candidats", hash: "faq", labelKey: "candidatsFaq" },
      { href: "/cours-allemand", labelKey: "formationsAllemand" },
      { href: "/cours-allemand/full-training", labelKey: "coursFull" },
      { href: "/cours-allemand/fast-track", labelKey: "coursFast" },
      { href: "/cours-allemand/quel-parcours", labelKey: "coursQuiz" },
      { href: "/cours-allemand/preparation-examens", labelKey: "formationsExamens" },
      { href: "/ausbildung-allemagne", labelKey: "ausbildung" },
      { href: "/ausbildung-allemagne/metiers", labelKey: "ausbildungMetiers" },
      { href: "/ausbildung-allemagne/conditions", labelKey: "ausbildungConditions" },
      { href: "/ausbildung-allemagne/salaire", labelKey: "ausbildungSalaire" },
      { href: "/ausbildung-allemagne/apres-ausbildung", labelKey: "ausbildungApres" },
      { href: "/visa-allemagne", labelKey: "visa" },
      { href: "/visa-allemagne/travailleur-qualifie", labelKey: "visaTravailleur" },
      { href: "/visa-allemagne/chancenkarte", labelKey: "visaChancenkarte" },
      { href: "/travailler-en-allemagne", labelKey: "travailler" },
      { href: "/travailler-en-allemagne/salaires", labelKey: "travaillerSalaires" },
      { href: "/partir-en-allemagne", labelKey: "partir" },
      { href: "/partir-en-allemagne/cameroun", labelKey: "partirCameroun" },
      { href: "/candidats/formations/integration", labelKey: "formationsIntegration" },
      { href: "/candidats/reconnaissance-diplomes", labelKey: "reconnaissance" },
      { href: "/candidats/vivre-en-allemagne", labelKey: "vivre" },
      { href: "/metiers", labelKey: "metiers" },
      { href: "/postuler", labelKey: "postuler" },
    ],
  },
  {
    titleKey: "groupEntreprises",
    entries: [
      { href: "/entreprises", labelKey: "entreprises" },
      { href: "/entreprises", hash: "services", labelKey: "entreprisesServices" },
      { href: "/entreprises", hash: "profils", labelKey: "entreprisesProfils" },
      { href: "/entreprises", hash: "processus", labelKey: "entreprisesProcessus" },
      { href: "/entreprises", hash: "contact", labelKey: "entreprisesDemande" },
      { href: "/entreprises/partenariat", labelKey: "entreprisesPartenariat" },
    ],
  },
  {
    titleKey: "groupCompany",
    entries: [
      { href: "/a-propos", labelKey: "aPropos" },
      { href: "/a-propos/notre-histoire", labelKey: "aProposHistoire" },
      { href: "/a-propos/methode", labelKey: "aProposMethode" },
      { href: "/partenaires", labelKey: "partenaires" },
      { href: "/temoignages", labelKey: "temoignages" },
      { href: "/blog", labelKey: "blog" },
      { href: "/contact", labelKey: "contact" },
      { href: "/book-appointment", labelKey: "bookAppointment" },
    ],
  },
  {
    titleKey: "groupLegal",
    entries: [
      { href: "/mentions-legales", labelKey: "mentionsLegales" },
      { href: "/confidentialite", labelKey: "confidentialite" },
      { href: "/cgu", labelKey: "cgu" },
    ],
  },
];

export default async function PlanDuSitePage() {
  const t = await getTranslations("planDuSite");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = { title: t("title"), subtitle: t("subtitle") };

  // Cross-page anchor links can't use next-intl's typed <Link> (it only accepts
  // registered pathname keys, never "key#anchor") -- same plain <a> pattern as
  // site-header.tsx / site-footer.tsx.
  const path = (href: Href, hash?: string) =>
    getPathname({ href, locale }) + (hash ? `#${hash}` : "");

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: content.title, pathname: "/plan-du-site" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <a
            href={getPathname({ href: "/", locale })}
            className="lift-on-hover animate-fade-up mb-4 flex items-center gap-3 rounded-xl bg-brand-black px-6 py-5 text-brand-gold-light"
          >
            <span className="font-serif text-lg">{t("home")}</span>
            <span aria-hidden="true" className="text-brand-gold">
              →
            </span>
          </a>

          <ul className="space-y-4">
            {GROUPS.map((group, gi) => (
              <li
                key={group.titleKey}
                className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-6"
                style={{ animationDelay: `${(gi + 1) * 60}ms` }}
              >
                <h2 className="font-serif text-lg text-brand-gold-text mb-4">{t(group.titleKey)}</h2>
                <ul className="flex flex-wrap gap-2">
                  {group.entries.map((entry) => (
                    <li key={entry.labelKey}>
                      <a
                        href={path(entry.href, entry.hash)}
                        className="inline-block rounded-full border border-brand-grid bg-brand-white px-4 py-1.5 text-sm text-brand-ink-secondary transition-colors hover:border-brand-gold hover:text-brand-gold-text"
                      >
                        {t(entry.labelKey)}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-brand-ink-muted">{t("note")}</p>
        </div>
      </section>
    </div>
  );
}
