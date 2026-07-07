import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

export async function SiteHeader() {
  const t = await getTranslations("nav");

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
            <Link href="/about" className="hover:text-brand-gold-light transition-colors">
              {t("about")}
            </Link>
            <Link
              href="/services/candidates"
              className="hover:text-brand-gold-light transition-colors"
            >
              {t("servicesCandidates")}
            </Link>
            <Link
              href="/services/companies"
              className="hover:text-brand-gold-light transition-colors"
            >
              {t("servicesCompanies")}
            </Link>
            <Link
              href="/german-courses"
              className="hover:text-brand-gold-light transition-colors"
            >
              {t("germanCourses")}
            </Link>
            <Link
              href="/shortage-occupations"
              className="hover:text-brand-gold-light transition-colors"
            >
              {t("shortageOccupations")}
            </Link>
            <Link href="/partners" className="hover:text-brand-gold-light transition-colors">
              {t("partners")}
            </Link>
            <Link href="/contact" className="hover:text-brand-gold-light transition-colors">
              {t("contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="hidden md:inline-flex items-center rounded-full border border-brand-gold px-3 py-1.5 text-sm text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-colors"
            >
              {t("bookAppointment")}
            </Link>
            <Link
              href="/login"
              className="text-sm text-brand-white/80 hover:text-brand-gold-light transition-colors"
            >
              {t("login")}
            </Link>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
