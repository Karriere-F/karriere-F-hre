import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = 2026;

  const columns = [
    {
      title: t("columnCandidats"),
      links: [
        { href: "/candidats/comment-ca-marche", label: t("linkHowItWorks") },
        { href: "/candidats/eligibilite", label: t("linkEligibility") },
        { href: "/candidats/metiers", label: t("linkOccupations") },
        { href: "/candidats/formations", label: t("linkTrainings") },
        { href: "/candidats/faq", label: t("linkFaq") },
      ],
    },
    {
      title: t("columnEntreprises"),
      links: [
        { href: "/entreprises/services", label: t("linkEntServices") },
        { href: "/entreprises/profils", label: t("linkEntProfiles") },
        { href: "/entreprises/processus", label: t("linkEntProcess") },
        { href: "/entreprises/partenariat", label: t("linkEntPartner") },
        { href: "/entreprises/demande", label: t("linkEntRequest") },
      ],
    },
    {
      title: t("columnCompany"),
      links: [
        { href: "/a-propos", label: t("linkAbout") },
        { href: "/a-propos/notre-histoire", label: t("linkFounder") },
        { href: "/partenaires", label: t("linkPartners") },
        { href: "/temoignages", label: t("linkTestimonials") },
        { href: "/blog", label: t("linkBlog") },
      ],
    },
    {
      title: t("columnLegal"),
      links: [
        { href: "/mentions-legales", label: t("imprint") },
        { href: "/confidentialite", label: t("privacy") },
        { href: "/cgu", label: t("terms") },
        { href: "/contact", label: t("contactDouala") },
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
                    <Link
                      href={link.href}
                      className="text-sm hover:text-brand-gold-text transition-colors"
                    >
                      {link.label}
                    </Link>
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
