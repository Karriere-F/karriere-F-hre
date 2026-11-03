"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavGroup = {
  title: string;
  items: { href: string; label: string; external?: boolean }[];
};

export function ErpNav({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav className="flex flex-col gap-6 text-sm">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
            {g.title}
          </p>
          <div className="flex flex-col">
            {g.items.map((i) => {
              const className = `rounded-md px-3 py-1.5 transition-colors ${
                !i.external && isActive(i.href)
                  ? "bg-brand-gold/15 font-medium text-brand-black"
                  : "text-brand-ink-secondary hover:bg-brand-black/5 hover:text-brand-black"
              }`;
              return i.external ? (
                <a key={i.href} href={i.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {i.label}
                </a>
              ) : (
                <Link key={i.href} href={i.href} className={className}>
                  {i.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
