import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link, getPathname } from "../../../i18n/navigation";
import type { Locale } from "../../../i18n/routing";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { NavDropdown } from "./nav-dropdown";
import { HeaderShell } from "./header-shell";
import { SECTEURS_UI } from "@/lib/secteurs";
import { tr } from "@/lib/localized";

export async function SiteHeader() {
  const t = await getTranslations("nav");
  const tEnt = await getTranslations("entreprises");
  const locale = (await getLocale()) as Locale;

  const path = (href: Parameters<typeof getPathname>[0]["href"], hash?: string) =>
    getPathname({ href, locale }) + (hash ? `#${hash}` : "");

  // The switch sets the audience; each side's flat nav lists that audience's silos/
  // sections. Cross-page and anchor links can't use the typed <Link> (it only accepts
  // registered pathname keys, never "key#anchor"), so these are pre-localized strings
  // rendered as plain <a> inside the client nav -- same pattern as site-footer.tsx.
  const candidatsSwitch = { href: path("/candidats"), label: t("candidats") };
  const entreprisesSwitch = { href: path("/entreprises"), label: t("entreprises") };

  // Candidats: a simple single-column list (same shape as Entreprises), pointing to the
  // key candidate hubs — the three parcours, the German courses, the professions grid and
  // the profile assessment. Each page presents its own sub-sections, so the menu stays flat.
  const candidateLinks = [
    { href: path("/ausbildung-allemagne"), label: t("ausbildung") },
    { href: path("/travailler-en-allemagne"), label: t("travailler") },
    {
      href: path("/visa-allemagne/chancenkarte"),
      label: tr({ fr: "Chancenkarte", de: "Chancenkarte", en: "Chancenkarte" }, locale),
    },
    { href: path("/cours-allemand"), label: t("coursAllemand") },
    { href: path("/secteurs"), label: tr(SECTEURS_UI.secteurs, locale) },
    {
      href: path("/evaluation"),
      label: tr({ fr: "Évaluer mon profil", de: "Mein Profil einschätzen", en: "Assess my profile" }, locale),
    },
  ];

  const employerLinks = [
    { href: path("/entreprises/fachkraefte"), label: t("entFachkraefte") },
    { href: path("/entreprises/ausbildung"), label: t("entAzubis") },
    { href: path("/entreprises/methode"), label: t("entMethode") },
    { href: path("/entreprises/secteurs"), label: t("entSecteurs") },
    { href: path("/entreprises/demande-recrutement"), label: t("entDemande") },
  ];

  // "À propos de nous": a simple single-column list, same shape as Entreprises/Candidats.
  const aboutLinks = [
    { href: path("/a-propos"), label: tr({ fr: "Qui sommes-nous", de: "Wer wir sind", en: "Who we are" }, locale) },
    { href: path("/a-propos/methode"), label: tr({ fr: "Notre méthode", de: "Unsere Methode", en: "Our method" }, locale) },
    { href: path("/a-propos/notre-histoire"), label: tr({ fr: "Notre histoire", de: "Unsere Geschichte", en: "Our story" }, locale) },
    { href: path("/partenaires"), label: tr({ fr: "Nos partenaires", de: "Unsere Partner", en: "Our partners" }, locale) },
    { href: path("/contact"), label: tr({ fr: "Contact", de: "Kontakt", en: "Contact" }, locale) },
  ];

  return (
    <HeaderShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo on the left, navigation on the right. No solid CTA in the bar:
            the gold stays a rare accent, which reads more premium. On mobile the
            nav collapses into the drawer. */}
        <div className="flex h-[108px] sm:h-[116px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label="Karriere Fähre">
            <Image
              src="/logo-kf-transparent.png"
              alt="Karriere Fähre"
              width={900}
              height={620}
              priority
              className="w-[148px] sm:w-[160px] h-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavDropdown label={t("candidats")} items={candidateLinks} />
            <NavDropdown label={t("entreprises")} items={employerLinks} />
            <NavDropdown label={t("aProposUs")} items={aboutLinks} />
            <LocaleSwitcher />
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LocaleSwitcher />
            <MobileNav
              candidatsSwitch={candidatsSwitch}
              entreprisesSwitch={entreprisesSwitch}
              candidateLinks={candidateLinks}
              employerLinks={employerLinks}
              companyLinks={aboutLinks}
              postulerLabel={t("postulerNow")}
              employerCtaLabel={tEnt("contactCta")}
              loginLabel={t("login")}
            />
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
