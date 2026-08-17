"use client";

import { useState } from "react";
import { Link } from "../../../i18n/navigation";
import { useAudience } from "./use-audience";

type NavLink = { href: string; label: string; items?: { href: string; label: string }[] };

// The mobile nav drawer, opened from the menu button on the left of the header below lg
// (desktop shows the audience links inline). The pill flips audience, and the list below
// shows that audience's links plus the company links; a switch link carries a full page
// navigation, which also closes the drawer.
export function MobileNav({
  candidatsSwitch,
  entreprisesSwitch,
  candidateLinks,
  employerLinks,
  companyLinks,
  postulerLabel,
  employerCtaLabel,
  loginLabel,
}: {
  candidatsSwitch: NavLink;
  entreprisesSwitch: NavLink;
  candidateLinks: NavLink[];
  employerLinks: NavLink[];
  companyLinks: NavLink[];
  postulerLabel: string;
  employerCtaLabel: string;
  loginLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const audience = useAudience();
  const primary = audience === "candidate" ? candidateLinks : employerLinks;

  const pill = "flex-1 text-center px-3 py-2 rounded-full text-sm font-medium transition-colors";
  const pillActive = "bg-brand-black text-brand-white";
  const pillIdle = "text-brand-ink-secondary";

  return (
    <div>
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
        className={`fixed inset-x-0 top-20 sm:top-24 z-30 bg-brand-white border-b border-brand-grid shadow-lg transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="mx-auto w-full max-w-6xl flex flex-col px-4 sm:px-6 lg:px-8 py-4 gap-1">
          <div
            className="flex rounded-full border border-brand-grid bg-brand-card p-0.5 mb-2"
            role="tablist"
            aria-label={`${candidatsSwitch.label} / ${entreprisesSwitch.label}`}
          >
            <a
              href={candidatsSwitch.href}
              role="tab"
              aria-selected={audience === "candidate"}
              className={`${pill} ${audience === "candidate" ? pillActive : pillIdle}`}
            >
              {candidatsSwitch.label}
            </a>
            <a
              href={entreprisesSwitch.href}
              role="tab"
              aria-selected={audience === "employer"}
              className={`${pill} ${audience === "employer" ? pillActive : pillIdle}`}
            >
              {entreprisesSwitch.label}
            </a>
          </div>

          {[...primary, ...companyLinks].map((link, i) => (
            <div key={link.href} style={open ? { animationDelay: `${i * 40}ms` } : undefined} className={open ? "animate-fade-up" : ""}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2.5 text-brand-ink-secondary hover:text-brand-gold-text hover:bg-brand-card transition-colors"
              >
                {link.label}
              </a>
              {link.items && (
                <div className="ml-4 flex flex-col border-l border-brand-grid pl-3">
                  {link.items.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="rounded px-2 py-2 text-sm text-brand-ink-muted hover:text-brand-gold-text hover:bg-brand-card transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {audience === "employer" ? (
            <Link
              href="/employer/signup"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-gold px-3 py-2 text-center text-brand-black font-medium"
            >
              {employerCtaLabel}
            </Link>
          ) : (
            <Link
              href="/postuler"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-gold px-3 py-2 text-center text-brand-black font-medium"
            >
              {postulerLabel}
            </Link>
          )}
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
