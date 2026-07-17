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
    { href: path("/cours-allemand"), label: t("coursAllemand") },
    { href: path("/ausbildung-allemagne"), label: t("ausbildung") },
    { href: path("/visa-allemagne"), label: t("visa") },
    { href: path("/travailler-en-allemagne"), label: t("travailler") },
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
