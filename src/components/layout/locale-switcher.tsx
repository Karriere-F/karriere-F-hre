"use client";

import { useLocale } from "next-intl";
import { routing } from "../../../i18n/routing";
import { usePathname, useRouter } from "../../../i18n/navigation";

const LABELS: Record<string, string> = {
  fr: "FR",
  de: "DE",
  en: "EN",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`px-2 py-1 rounded transition-colors ${
            loc === locale
              ? "text-brand-gold font-semibold"
              : "text-brand-grey hover:text-brand-gold-light"
          }`}
          aria-current={loc === locale}
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
