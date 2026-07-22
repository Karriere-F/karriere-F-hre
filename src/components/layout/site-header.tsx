import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link, getPathname } from "../../../i18n/navigation";
import type { Locale } from "../../../i18n/routing";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { HeaderNav } from "./header-nav";
import { HeaderCta } from "./header-cta";

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

  const candidateLinks = [
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
        { href: path("/ausbildung-allemagne/salaire"), label: t("ausSalaire") },
        { href: path("/ausbildung-allemagne/conditions"), label: t("ausConditions") },
        { href: path("/ausbildung-allemagne/apres-ausbildung"), label: t("ausApres") },
      ],
    },
    {
      href: path("/visa-allemagne"),
      label: t("visa"),
      items: [
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
    { href: path("/partir-en-allemagne"), label: t("partir") },
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

  return (
    <header className="bg-brand-white text-brand-ink sticky top-0 z-40 border-b border-brand-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Karriere Fähre"
              width={1024}
              height={1024}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <HeaderNav
            candidatsSwitch={candidatsSwitch}
            entreprisesSwitch={entreprisesSwitch}
            candidateLinks={candidateLinks}
            employerLinks={employerLinks}
            companyLinks={companyLinks}
          />

          <div className="flex items-center gap-3">
            <HeaderCta
              postulerLabel={t("postuler")}
              employerCtaLabel={tEnt("contactCta")}
              loginLabel={t("login")}
            />
            <LocaleSwitcher />
            <MobileNav
              candidatsSwitch={candidatsSwitch}
              entreprisesSwitch={entreprisesSwitch}
              candidateLinks={candidateLinks}
              employerLinks={employerLinks}
              companyLinks={companyLinks}
              postulerLabel={t("postuler")}
              employerCtaLabel={tEnt("contactCta")}
              loginLabel={t("login")}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
