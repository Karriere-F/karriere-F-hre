"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { href: string; label: string };
type Group = { href: string; label: string; items?: Item[] };

// Desktop header dropdown. Opens on CLICK (not hover) so the panel is stable and the
// trigger never navigates by accident — clicking the label reveals the menu, clicking
// away or Escape closes it. Two shapes:
//   - `items`  -> a simple single-column list (e.g. Entreprises).
//   - `groups` -> a mega-menu, one column per section (highlighted header linking to the
//                 hub) with its sub-pages listed plainly beneath (e.g. Candidats).
// The hrefs are already-localized path strings, hence plain <a>.
export function NavDropdown({
  label,
  items,
  groups,
}: {
  label: string;
  items?: Item[];
  groups?: Group[];
}) {
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

  const close = () => setOpen(false);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-ink hover:text-brand-gold-text transition-colors duration-150"
      >
        {label}
        <ChevronDown
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className={`text-brand-ink-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open &&
        (groups ? (
          <div className="absolute left-0 top-full z-50 mt-3 flex w-max max-w-[calc(100vw-5rem)] flex-wrap gap-x-6 gap-y-4 rounded-xl border border-brand-grid bg-brand-white p-4 shadow-xl shadow-black/10">
            {groups.map((section) => (
              <div key={section.href} className="w-44">
                <a
                  href={section.href}
                  onClick={close}
                  className="block rounded-lg bg-brand-card px-3 py-2 font-serif text-sm font-semibold text-brand-black transition-colors hover:text-brand-gold-text"
                >
                  {section.label}
                </a>
                {section.items && (
                  <ul role="menu" className="mt-1.5 flex flex-col gap-0.5">
                    {section.items.map((item) => (
                      <li key={item.href} role="none">
                        <a
                          href={item.href}
                          onClick={close}
                          role="menuitem"
                          className="block rounded-lg px-3 py-1.5 text-sm leading-snug text-brand-ink-secondary transition-colors hover:bg-brand-card hover:text-brand-gold-text"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <ul
            role="menu"
            className="absolute left-0 top-full z-50 mt-3 min-w-[13rem] rounded-xl border border-brand-grid bg-brand-white p-1.5 shadow-xl shadow-black/10"
          >
            {items?.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  onClick={close}
                  role="menuitem"
                  className="block rounded-lg px-3 py-2 text-sm text-brand-ink-secondary transition-colors hover:bg-brand-card hover:text-brand-gold-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}
