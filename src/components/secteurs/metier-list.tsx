import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import type { Locale } from "@i18n/routing";
import { tr, type LocalizedText } from "@/lib/localized";

export type Metier = { slug: string; name: LocalizedText; note: LocalizedText };
type LinkHref = ComponentProps<typeof Link>["href"];

// Server-rendered list of professions for a sector path. Each row links to the
// profession's fiche ("Voir la fiche"); the candidate reads it first, and the
// "Postuler" call to action lives at the bottom of the fiche. Sector-agnostic:
// the caller supplies which slugs have a fiche, how to build the fiche link,
// and the label.
export function MetierList({
  metiers,
  locale,
  hasFiche,
  ficheHref,
  labels,
}: {
  metiers: Metier[];
  locale: Locale;
  hasFiche: (slug: string) => boolean;
  ficheHref: (slug: string) => LinkHref;
  labels: { viewFiche: LocalizedText };
}) {
  return (
    <ul className="divide-y divide-brand-grid overflow-hidden rounded-2xl border border-brand-grid bg-brand-white">
      {metiers.map((m) => {
        const note = tr(m.note, locale);
        return (
          <li
            key={m.slug + tr(m.name, locale)}
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-4"
          >
            <span className="min-w-0">
              <span className="block font-medium text-brand-black">{tr(m.name, locale)}</span>
              {note && <span className="block text-sm text-brand-ink-secondary">{note}</span>}
            </span>
            {hasFiche(m.slug) && (
              <Link
                href={ficheHref(m.slug)}
                className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
              >
                {tr(labels.viewFiche, locale)}
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
