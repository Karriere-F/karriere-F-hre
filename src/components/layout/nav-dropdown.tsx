import { ChevronDown } from "lucide-react";

type Item = { href: string; label: string };

// Desktop header dropdown. The label itself is a link to the section hub; hovering (or
// keyboard-focusing) the group reveals the menu of pages beneath it. Pure CSS via
// group-hover / group-focus-within, so no client JS. The hrefs are already-localized
// path strings, so this uses plain <a>, not the typed <Link>.
export function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: Item[];
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-ink hover:text-brand-gold-text transition-colors duration-150"
      >
        {label}
        <ChevronDown
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className="text-brand-ink-muted transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </a>

      <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-150 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul
          role="menu"
          className="min-w-[13rem] rounded-xl border border-brand-grid bg-brand-white p-1.5 shadow-lg shadow-black/5"
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                className="block rounded-lg px-3 py-2 text-sm text-brand-ink-secondary transition-colors hover:bg-brand-card hover:text-brand-gold-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
