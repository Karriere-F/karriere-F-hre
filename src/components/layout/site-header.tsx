import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  const links = [
    { href: "/about", label: t("about") },
    { href: "/services/candidates", label: t("servicesCandidates") },
    { href: "/services/companies", label: t("servicesCompanies") },
    { href: "/german-courses", label: t("germanCourses") },
    { href: "/shortage-occupations", label: t("shortageOccupations") },
    { href: "/partners", label: t("partners") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-brand-black text-brand-white sticky top-0 z-40 border-b border-brand-black-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Karriere Fähre"
              width={1536}
              height={1024}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-gold-light transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="press hidden md:inline-flex items-center rounded-full border border-brand-gold px-3 py-1.5 text-sm text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-colors duration-150"
            >
              {t("bookAppointment")}
            </Link>
            <Link
              href="/login"
              className="hidden lg:inline text-sm text-brand-white/80 hover:text-brand-gold-light transition-colors duration-150"
            >
              {t("login")}
            </Link>
            <LocaleSwitcher />
            <MobileNav
              links={links}
              bookAppointmentLabel={t("bookAppointment")}
              loginLabel={t("login")}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
