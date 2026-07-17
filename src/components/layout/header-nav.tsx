"use client";

import { useAudience } from "./use-audience";

type NavLink = { href: string; label: string };

// Desktop primary nav. The switch sets the audience; the row below shows that audience's
// destinations flat, then the audience-neutral company links. Both audiences are
// symmetric -- no dropdown -- and the /candidats and /entreprises hubs are reached by the
// switch itself. All hrefs are pre-localized server-side (plain <a>, full navigation).
export function HeaderNav({
  candidatsSwitch,
  entreprisesSwitch,
  candidateLinks,
  employerLinks,
  companyLinks,
}: {
  candidatsSwitch: NavLink;
  entreprisesSwitch: NavLink;
  candidateLinks: NavLink[];
  employerLinks: NavLink[];
  companyLinks: NavLink[];
}) {
  const audience = useAudience();
  const primary = audience === "candidate" ? candidateLinks : employerLinks;

  const pill = "px-3.5 py-1.5 rounded-full transition-colors duration-150";
  const pillActive = "bg-brand-black text-brand-white";
  const pillIdle = "text-brand-ink-secondary hover:text-brand-gold-text";

  return (
    <div className="hidden lg:flex items-center gap-6">
      <div
        className="flex rounded-full border border-brand-grid bg-brand-card p-0.5 text-sm font-medium"
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

      <nav className="flex items-center gap-5 text-sm">
        {[...primary, ...companyLinks].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-brand-ink-secondary hover:text-brand-gold-text transition-colors duration-150 whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
