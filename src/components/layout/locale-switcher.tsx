"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { routing } from "../../../i18n/routing";
import { usePathname, useRouter } from "../../../i18n/navigation";

const SHORT: Record<string, string> = { fr: "FR", de: "DE", en: "EN" };
const FULL: Record<string, string> = { fr: "Français", de: "Deutsch", en: "English" };

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Langue"
        className="press inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-sm font-medium text-brand-ink hover:text-brand-gold-text transition-colors duration-150"
      >
        {SHORT[locale]}
        <ChevronDown
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className={`text-brand-ink-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-[9.5rem] rounded-xl border border-brand-grid bg-brand-white p-1.5 shadow-lg shadow-black/5"
        >
          {routing.locales.map((loc) => (
            <li key={loc} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  router.replace(
                    // next-intl can't statically prove pathname/params pair up (pathname is a
                    // broad union of every registered route); the runtime behavior is correct.
                    { pathname, params } as Parameters<typeof router.replace>[0],
                    { locale: loc }
                  );
                  setOpen(false);
                }}
                aria-current={loc === locale}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                  loc === locale
                    ? "bg-brand-card text-brand-gold-text font-semibold"
                    : "text-brand-ink-secondary hover:bg-brand-card hover:text-brand-gold-text"
                }`}
              >
                {FULL[loc]}
                <span className="text-xs text-brand-ink-muted">{SHORT[loc]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
