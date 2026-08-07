import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link, getPathname } from "../../../i18n/navigation";
import type { Locale } from "../../../i18n/routing";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { NavDropdown } from "./nav-dropdown";
import { SECTORS_ALL, SECTEURS_UI } from "@/lib/secteurs";
import { tr } from "@/lib/sante-metiers";

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

  // Sector-first entry. The column header goes to the /secteurs grid; each sector lists
  // beneath it. Only active sectors have their own page yet -- the rest point back to the
  // grid, where their "bientôt disponible" state is shown.
  const secteursGroup = {
    href: path("/secteurs"),
    label: tr(SECTEURS_UI.secteurs, locale),
    items: SECTORS_ALL.map((sector) => ({
      href: sector.active ? path("/secteurs/sante") : path("/secteurs"),
      label: sector.active
        ? tr(sector.name, locale)
        : `${tr(sector.name, locale)} (${tr(SECTEURS_UI.comingSoon, locale)})`,
    })),
  };

  const candidateLinks = [
    secteursGroup,
    {
      href: path("/cours-allemand"),
      label: t("coursAllemand"),
      // Clicking the label goes to the hub; the dropdown lists only the three dedicated
      // pages. "Pourquoi le niveau" and "L'inscription" stay as sections on the hub, not
      // in the menu -- reached by opening the hub itself.
      items: [
        { href: path("/cours-allemand/full-training"), label: t("coursFullTraining") },
        { href: path("/cours-allemand/fast-track"), label: t("coursFastTrack") },
        { href: path("/cours-allemand/quel-parcours"), label: t("coursQuiz") },
      ],
    },
    {
      href: path("/ausbildung-allemagne"),
      label: t("ausbildung"),
      items: [
        { href: path("/ausbildung-allemagne/metiers"), label: t("ausMetiers") },
        { href: path("/ausbildung-allemagne/conditions"), label: t("ausConditions") },
        { href: path("/ausbildung-allemagne/apres-ausbildung"), label: t("ausApres") },
      ],
    },
    {
      href: path("/visa-allemagne"),
      label: t("visa"),
      // The three visa routes the hub presents as cards. The Ausbildung visa detail
      // lives in the Ausbildung silo, so that item crosses to /ausbildung-allemagne.
      items: [
        { href: path("/ausbildung-allemagne"), label: t("ausbildung") },
        { href: path("/visa-allemagne/travailleur-qualifie"), label: t("visTravailleur") },
        { href: path("/visa-allemagne/chancenkarte"), label: t("visChancenkarte") },
      ],
    },
    {
      href: path("/travailler-en-allemagne"),
      label: t("travailler"),
      // The two sub-topics of "working in Germany" -- both full pages living in other
      // silos (the hub already presents them as cards).
      items: [
        { href: path("/metiers"), label: t("travMetiers") },
        { href: path("/candidats/vivre-en-allemagne"), label: t("travVivre") },
      ],
    },
  ];

  const employerLinks = [
    { href: path("/entreprises", "services"), label: t("entServices") },
    { href: path("/entreprises", "profils"), label: t("entProfils") },
    { href: path("/entreprises", "processus"), label: t("entProcessus") },
    { href: path("/entreprises/partenariat"), label: t("entPartenaires") },
  ];

  const companyLinks = [
    { href: path("/a-propos"), label: t("aPropos") },
    { href: path("/blog"), label: t("blog") },
  ];

  const navLink =
    "text-sm font-medium text-brand-ink hover:text-brand-gold-text transition-colors duration-150";

  return (
    <header className="bg-brand-white text-brand-ink sticky top-0 z-40 border-b border-brand-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Centred logo: audience links to its left, About / language / apply to its
            right. On mobile the two audience links collapse into the drawer. */}
        <div className="grid grid-cols-[1fr_auto_1fr] h-20 sm:h-24 items-center gap-4">
          <div className="justify-self-start flex items-center">
            <nav className="hidden lg:flex items-center gap-7">
              <NavDropdown label={t("candidats")} groups={candidateLinks} />
              <NavDropdown label={t("entreprises")} items={employerLinks} />
            </nav>
            <div className="lg:hidden">
              <MobileNav
                candidatsSwitch={candidatsSwitch}
                entreprisesSwitch={entreprisesSwitch}
                candidateLinks={candidateLinks}
                employerLinks={employerLinks}
                companyLinks={companyLinks}
                postulerLabel={t("postulerNow")}
                employerCtaLabel={tEnt("contactCta")}
                loginLabel={t("login")}
              />
            </div>
          </div>

          <Link href="/" className="justify-self-center flex items-center" aria-label="Karriere Fähre">
            <Image
              src="/logo-kf.png"
              alt="Karriere Fähre"
              width={900}
              height={620}
              priority
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          <div className="justify-self-end flex items-center gap-4 sm:gap-5">
            <Link href="/a-propos" className={`hidden lg:inline ${navLink}`}>
              {t("aProposUs")}
            </Link>
            <LocaleSwitcher />
            <Link
              href="/postuler"
              className="press hidden sm:inline-flex items-center rounded-full bg-brand-gold px-4 sm:px-5 py-2 text-sm text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {t("postulerNow")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
