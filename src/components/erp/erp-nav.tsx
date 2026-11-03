"use client";

import { Link, usePathname } from "../../../i18n/navigation";

type Href =
  | "/erp"
  | "/erp/dossiers"
  | "/erp/placements"
  | "/erp/taches"
  | "/erp/ecole"
  | "/erp/examens"
  | "/erp/factures"
  | "/erp/depenses"
  | "/erp/equipe"
  | "/admin";

export type NavGroup = { title: string; items: { href: Href; label: string }[] };

export function ErpNav({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/erp" ? pathname === "/erp" : pathname.startsWith(href);

  return (
    <nav className="flex flex-col gap-6 text-sm">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
            {g.title}
          </p>
          <div className="flex flex-col">
            {g.items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  isActive(i.href)
                    ? "bg-brand-gold/15 font-medium text-brand-black"
                    : "text-brand-ink-secondary hover:bg-brand-black/5 hover:text-brand-black"
                }`}
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
