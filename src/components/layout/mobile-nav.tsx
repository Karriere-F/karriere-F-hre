"use client";

import { useState, type ComponentProps } from "react";
import { Link } from "../../../i18n/navigation";

export function MobileNav({
  links,
  postulerLabel,
  loginLabel,
}: {
  links: { href: ComponentProps<typeof Link>["href"]; label: string }[];
  postulerLabel: string;
  loginLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="press relative h-9 w-9 flex items-center justify-center"
      >
        <span
          className={`absolute h-0.5 w-6 bg-brand-ink transition-transform duration-200 ease-out ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-brand-ink transition-opacity duration-150 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-brand-ink transition-transform duration-200 ease-out ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      <div
        className={`fixed inset-x-0 top-20 z-30 bg-brand-white border-b border-brand-grid shadow-lg transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={open ? { animationDelay: `${i * 40}ms` } : undefined}
              className={`rounded px-2 py-2.5 text-brand-ink-secondary hover:text-brand-gold-text hover:bg-brand-card transition-colors ${
                open ? "animate-fade-up" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/postuler"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-gold px-3 py-2 text-center text-brand-black font-medium"
          >
            {postulerLabel}
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="rounded px-2 py-2 text-center text-brand-ink-muted"
          >
            {loginLabel}
          </Link>
        </nav>
      </div>
    </div>
  );
}
