"use client";

import { useState, useRef } from "react";

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 text-brand-ink-secondary hover:text-brand-gold-text transition-colors duration-150"
      >
        {label}
        <span className={`text-[10px] transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      <div
        role="menu"
        className={`absolute left-0 top-full pt-3 transition-[opacity,transform] duration-150 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="min-w-[240px] rounded-lg border border-brand-grid bg-brand-white shadow-lg p-2">
          {items.map((item) => (
            <a
              key={item.href}
              role="menuitem"
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-brand-ink-secondary hover:bg-brand-card hover:text-brand-gold-text transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
