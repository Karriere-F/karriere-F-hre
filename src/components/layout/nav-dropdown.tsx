import { ChevronDown } from "lucide-react";

type Item = { href: string; label: string };
type Group = { href: string; label: string; items?: Item[] };

// Desktop header dropdown. The label itself links to the section hub; hovering (or
// keyboard-focusing) the group reveals the menu. Two shapes:
//   - `items`  -> a simple single-column list (e.g. Entreprises).
//   - `groups` -> a mega-menu, one column per section with its sub-pages beneath
//                 (e.g. Candidats: Cours d'allemand / Ausbildung / Visa / Travailler).
// Pure CSS via group-hover / group-focus-within, so it opens on keyboard focus too and
// needs no client JS. The hrefs are already-localized path strings, hence plain <a>.
export function NavDropdown({
  label,
  href,
  items,
  groups,
}: {
  label: string;
  href: string;
  items?: Item[];
  groups?: Group[];
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
        {groups ? (
          <div className="flex gap-7 rounded-xl border border-brand-grid bg-brand-white p-5 shadow-lg shadow-black/5">
            {groups.map((section) => (
              <div key={section.href} className="w-44">
                <a
                  href={section.href}
                  className="block border-b border-brand-grid pb-2 font-serif text-sm text-brand-black transition-colors hover:text-brand-gold-text"
                >
                  {section.label}
                </a>
                {section.items && (
                  <ul role="menu" className="mt-2 flex flex-col gap-0.5">
                    {section.items.map((item) => (
                      <li key={item.href} role="none">
                        <a
                          href={item.href}
                          role="menuitem"
                          className="block rounded-lg px-2 py-1.5 text-sm leading-snug text-brand-ink-secondary transition-colors hover:bg-brand-card hover:text-brand-gold-text"
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
            className="min-w-[13rem] rounded-xl border border-brand-grid bg-brand-white p-1.5 shadow-lg shadow-black/5"
          >
            {items?.map((item) => (
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
        )}
      </div>
    </div>
  );
}
