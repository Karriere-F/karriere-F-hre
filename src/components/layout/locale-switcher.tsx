"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
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
  const params = useParams();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() =>
            router.replace(
              // next-intl can't statically prove pathname/params pair up (pathname is a
              // broad union of every registered route); the runtime behavior is correct.
              { pathname, params } as Parameters<typeof router.replace>[0],
              { locale: loc }
            )
          }
          className={`px-2 py-1 rounded transition-colors ${
            loc === locale
              ? "text-brand-gold-text font-semibold"
              : "text-brand-ink-muted hover:text-brand-gold-text"
          }`}
          aria-current={loc === locale}
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
