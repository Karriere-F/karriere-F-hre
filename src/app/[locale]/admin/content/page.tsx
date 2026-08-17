import { Link } from "../../../../../i18n/navigation";
import { CONTENT_PAGES } from "@/lib/content/content-schema";

export default function AdminContentListPage() {
  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-2">Contenu des pages</h1>
      <p className="text-sm text-brand-ink-muted mb-6">
        Modifiez les textes affichés sur le site public, dans les 3 langues. Un champ
        laissé vide reprend le texte par défaut.
      </p>
      <div className="flex flex-col gap-3">
        {Object.entries(CONTENT_PAGES).map(([key, page]) => (
          <Link
            key={key}
            href={{ pathname: "/admin/content/[pageKey]", params: { pageKey: key } }}
            className="rounded-lg border border-brand-grid p-4 hover:border-brand-gold transition-colors flex items-center justify-between"
          >
            <span className="text-brand-black font-medium">{page.label}</span>
            <span className="text-sm text-brand-ink-muted">{page.path}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
