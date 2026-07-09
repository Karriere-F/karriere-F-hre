import { Link } from "../../../i18n/navigation";

export function SubNavLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          className="lift-on-hover animate-fade-up flex items-center justify-between gap-3 rounded-lg border border-brand-grid bg-brand-white px-5 py-4 text-brand-black font-medium hover:border-brand-gold transition-colors duration-150"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          {link.label}
          <span className="text-brand-gold-text" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
