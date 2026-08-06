import { getLocale, getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { getPathname } from "../../../i18n/navigation";
import type { Locale } from "../../../i18n/routing";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { NewsletterForm } from "./newsletter-form";

const EMAIL = "kontakt@karrierefaehre.com";

// Brand icons (lucide dropped its brand set) — kept minimal and monochrome.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    viewBox: "0 0 24 24",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.5v14H.24V8zm7.5 0h4.3v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22h-4.5V8z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591838923560",
    viewBox: "0 0 24 24",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.68 4.53-4.68 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.95.93-1.95 1.88v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/karrierefaehre",
    viewBox: "0 0 24 24",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.94c-3.14 0-3.52.01-4.76.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.62-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.62.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.62.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.62-.07-4.76-.07zm0 3.3a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 7.58a2.98 2.98 0 1 0 0-5.96 2.98 2.98 0 0 0 0 5.96zm5.86-7.8a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/OEKSTADYIJ4QM1",
    viewBox: "0 0 32 32",
    path: "M16.001 3C9.373 3 4 8.373 4 15c0 2.34.66 4.52 1.8 6.38L4 29l7.83-1.75A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.9c-1.99 0-3.86-.55-5.46-1.5l-.39-.23-4.65 1.04 1-4.53-.25-.4A9.9 9.9 0 0 1 5.1 15c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9s-4.44 9.9-9.9 9.9Zm5.47-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z",
  },
];

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();

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
  ];

  const legalLinks = [
    { href: path("/mentions-legales"), label: t("imprint") },
    { href: path("/confidentialite"), label: t("privacy") },
    { href: path("/cgu"), label: t("terms") },
    { href: path("/plan-du-site"), label: t("sitemap") },
  ];

  return (
    <footer className="bg-brand-black text-brand-white/65">
      {/* Newsletter band */}
      <div className="border-b border-brand-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <h2 className="font-serif text-2xl text-brand-white sm:text-3xl">{t("newsletterTitle")}</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed">{t("newsletterText")}</p>
          </div>
          <div className="lg:justify-self-end">
            <NewsletterForm
              placeholder={t("newsletterPlaceholder")}
              cta={t("newsletterCta")}
              success={t("newsletterSuccess")}
              error={t("newsletterError")}
            />
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-10">
        {/* Brand */}
        <div className="lg:col-span-4">
          <p className="font-serif text-2xl text-brand-white">Karriere Fähre</p>
          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold-light">
            {t("tagline")}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{t("brandDesc")}</p>

          <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-brand-white/45">
            {t("followUs")}
          </p>
          <div className="mt-3 flex gap-2.5">
            {SOCIALS.filter((s) => s.href !== "#").map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-white/15 text-brand-white/70 transition-colors duration-200 hover:border-brand-gold hover:text-brand-gold"
              >
                <svg viewBox={s.viewBox} width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation columns */}
        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h3 className="mb-3 text-sm font-semibold text-brand-white">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-brand-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold text-brand-white">{t("columnContact")}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-light" />
              <span>
                {t("addr1")}
                <br />
                {t("addr2")}
              </span>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 transition-colors duration-200 hover:text-brand-gold-light">
                <Mail size={16} strokeWidth={2} aria-hidden="true" className="shrink-0 text-brand-gold-light" />
                {EMAIL}
              </a>
            </li>
            {WHATSAPP_NUMBERS.map((n) => (
              <li key={n.e164}>
                <a
                  href={whatsappLink(n.e164)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors duration-200 hover:text-brand-gold-light"
                >
                  <Phone size={16} strokeWidth={2} aria-hidden="true" className="shrink-0 text-brand-gold-light" />
                  +{n.e164.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-brand-white/45 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © {year} Karriere Fähre SARL, {t("rccm")}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors duration-200 hover:text-brand-gold-light">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
