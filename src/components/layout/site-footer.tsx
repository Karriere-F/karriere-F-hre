import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = 2026;

  return (
    <footer className="bg-brand-white text-brand-ink-secondary mt-16 border-t border-brand-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Image src="/logo.png" alt="Karriere Fähre" width={1024} height={1024} className="h-16 w-auto" />
        <div className="flex gap-6 text-sm">
          <Link href="/legal/imprint" className="hover:text-brand-gold-text transition-colors">
            {t("imprint")}
          </Link>
          <Link href="/legal/privacy" className="hover:text-brand-gold-text transition-colors">
            {t("privacy")}
          </Link>
        </div>
        <p className="text-xs text-brand-ink-muted">
          © {year} Karriere Fähre SARL. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
