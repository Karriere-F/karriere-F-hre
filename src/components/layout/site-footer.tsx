import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { getPathname } from "../../../i18n/navigation";
import type { Locale } from "../../../i18n/routing";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const locale = (await getLocale()) as Locale;
  const year = 2026;

  const path = (href: Parameters<typeof getPathname>[0]["href"], hash?: string) =>
    getPathname({ href, locale }) + (hash ? `#${hash}` : "");

  const columns = [
    {
      title: t("columnCandidats"),
      links: [
        { href: path("/candidats", "voies"), label: t("linkHowItWorks") },
        { href: path("/candidats", "eligibilite"), label: t("linkEligibility") },
        { href: path("/metiers"), label: t("linkOccupations") },
        { href: path("/candidats", "formations"), label: t("linkTrainings") },
        { href: path("/candidats", "faq"), label: t("linkFaq") },
      ],
    },
    {
      title: t("columnEntreprises"),
      links: [
        { href: path("/entreprises", "services"), label: t("linkEntServices") },
        { href: path("/entreprises", "profils"), label: t("linkEntProfiles") },
        { href: path("/entreprises", "processus"), label: t("linkEntProcess") },
        { href: path("/entreprises/partenariat"), label: t("linkEntPartner") },
        { href: path("/entreprises", "contact"), label: t("linkEntRequest") },
      ],
    },
    {
      title: t("columnCompany"),
      links: [
        { href: path("/a-propos"), label: t("linkAbout") },
        { href: path("/a-propos/notre-histoire"), label: t("linkFounder") },
        { href: path("/partenaires"), label: t("linkPartners") },
        { href: path("/temoignages"), label: t("linkTestimonials") },
        { href: path("/blog"), label: t("linkBlog") },
      ],
    },
    {
      title: t("columnLegal"),
      links: [
        { href: path("/mentions-legales"), label: t("imprint") },
        { href: path("/confidentialite"), label: t("privacy") },
        { href: path("/cgu"), label: t("terms") },
        { href: path("/contact"), label: t("contactDouala") },
      ],
    },
  ];

  return (
    <footer className="bg-brand-white text-brand-ink-secondary mt-16 border-t border-brand-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Image src="/logo.png" alt="Karriere Fähre" width={1024} height={1024} className="h-14 w-auto mb-3" />
            <p className="text-xs text-brand-ink-muted">{t("tagline")}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-brand-black font-medium text-sm mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm hover:text-brand-gold-text transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-brand-ink-muted mt-10 pt-6 border-t border-brand-grid">
          © {year} Karriere Fähre SARL. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
