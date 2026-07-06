import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = 2026;

  return (
    <footer className="bg-brand-black text-brand-white/70 mt-16 border-t border-brand-black-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-brand-white font-serif tracking-wide">
            Karriere <span className="text-brand-gold">Fähre</span>
          </p>
          <p className="text-sm mt-1">{t("tagline")}</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/legal/imprint" className="hover:text-brand-gold-light transition-colors">
            {t("imprint")}
          </Link>
          <Link href="/legal/privacy" className="hover:text-brand-gold-light transition-colors">
            {t("privacy")}
          </Link>
        </div>
        <p className="text-xs text-brand-white/50">
          © {year} Karriere Fähre SARL. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
