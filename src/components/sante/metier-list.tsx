import { Link } from "@i18n/navigation";
import type { Locale } from "@i18n/routing";
import { SANTE_FICHES, SANTE_UI, tr, type SanteMetier } from "@/lib/sante-metiers";

// Server-rendered list of health professions: each row offers "Voir la fiche"
// (when a fiche exists) and "Postuler".
export function MetierList({ metiers, locale }: { metiers: SanteMetier[]; locale: Locale }) {
  return (
    <ul className="divide-y divide-brand-grid overflow-hidden rounded-2xl border border-brand-grid bg-brand-white">
      {metiers.map((m) => {
        const hasFiche = Boolean(SANTE_FICHES[m.slug]);
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
            <span className="flex shrink-0 items-center gap-4 text-sm font-medium">
              {hasFiche && (
                <Link
                  href={{ pathname: "/metiers/sante/[slug]", params: { slug: m.slug } }}
                  className="text-brand-gold-text hover:underline"
                >
                  {tr(SANTE_UI.viewFiche, locale)}
                </Link>
              )}
              <Link
                href="/postuler"
                className="press rounded-md bg-brand-gold px-4 py-1.5 text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
              >
                {tr(SANTE_UI.apply, locale)}
              </Link>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
