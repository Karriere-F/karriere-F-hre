import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";

export default async function AdminOccupationsPage() {
  const supabase = await createClient();

  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif text-brand-black">Métiers en pénurie</h1>
        <Link
          href="/admin/occupations/new"
          className="rounded-full bg-brand-gold px-5 py-2.5 text-brand-black font-medium hover:bg-brand-gold-light transition-colors text-sm"
        >
          Nouveau métier
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {(occupations ?? []).map((o) => (
          <Link
            key={o.id}
            href={`/admin/occupations/${o.id}/edit`}
            className="rounded-lg border border-brand-grid p-4 flex items-center justify-between hover:border-brand-gold transition-colors"
          >
            <div>
              <p className="text-brand-black font-medium">{o.title_fr}</p>
              <p className="text-sm text-brand-ink-muted">{o.category}</p>
            </div>
            {!o.is_published && (
              <span className="text-xs text-brand-ink-muted">Non publié</span>
            )}
          </Link>
        ))}
        {(!occupations || occupations.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucun métier renseigné.</p>
        )}
      </div>
    </div>
  );
}
