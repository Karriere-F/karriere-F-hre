import { createAdminClient } from "@/lib/supabase/admin";
import { DOMAINES, frLabel } from "@/lib/evaluation";
import { EvaluationToggle } from "@/components/admin/evaluation-toggle";
import { Link } from "@i18n/navigation";

const ORIENTATIONS = ["ausbildung", "emploi", "preparation"] as const;

type Search = { orientation?: string; domaine?: string };

function chipClass(active: boolean) {
  return `text-xs rounded-full px-3 py-1.5 font-medium transition-colors ${
    active
      ? "bg-brand-gold text-brand-black border border-brand-gold"
      : "border border-brand-grid text-brand-ink-secondary hover:border-brand-gold"
  }`;
}

export default async function AdminEvaluationsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { orientation, domaine } = await searchParams;
  const admin = createAdminClient();

  let query = admin
    .from("profile_evaluations")
    .select("*")
    .order("created_at", { ascending: false });
  if (orientation) query = query.eq("orientation", orientation);
  if (domaine) query = query.eq("domaine", domaine);
  const { data: rows, error } = await query;

  // The dedicated table may not have been created yet.
  const tableMissing = !!error;

  const hrefWith = (patch: Search) => {
    const q: Search = { orientation, domaine, ...patch };
    const query: Record<string, string> = {};
    if (q.orientation) query.orientation = q.orientation;
    if (q.domaine) query.domaine = q.domaine;
    return { pathname: "/admin/evaluations" as const, query };
  };

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-serif text-brand-black">Évaluations profil</h1>
        {!tableMissing && (
          <span className="text-sm text-brand-ink-muted">{rows?.length ?? 0} résultat(s)</span>
        )}
      </div>

      {tableMissing ? (
        <div className="rounded-lg border border-brand-grid bg-brand-card p-5 text-sm leading-relaxed text-brand-ink-secondary">
          <p className="font-medium text-brand-black">La table « profile_evaluations » n’existe pas encore.</p>
          <p className="mt-2">
            En attendant, les évaluations soumises arrivent dans{" "}
            <Link href="/admin/contact-messages" className="text-brand-gold-text underline">
              Messages de contact
            </Link>{" "}
            (préfixe « [Évaluation de profil] »). Créez la table dans Supabase pour retrouver ici
            chaque évaluation, structurée et filtrable.
          </p>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="mb-6 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-ink-muted">
                Orientation
              </span>
              <Link href={hrefWith({ orientation: undefined })} className={chipClass(!orientation)}>
                Toutes
              </Link>
              {ORIENTATIONS.map((o) => (
                <Link key={o} href={hrefWith({ orientation: o })} className={chipClass(orientation === o)}>
                  {frLabel("path", o)}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-ink-muted">
                Secteur
              </span>
              <Link href={hrefWith({ domaine: undefined })} className={chipClass(!domaine)}>
                Tous
              </Link>
              {DOMAINES.map((d) => (
                <Link key={d} href={hrefWith({ domaine: d })} className={chipClass(domaine === d)}>
                  {frLabel("domaine", d)}
                </Link>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-3">
            {(rows ?? []).map((r) => (
              <div key={r.id} className="rounded-lg border border-brand-grid p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-brand-black">
                      {r.prenom} {r.nom}
                    </p>
                    <p className="mt-0.5 text-sm text-brand-ink-secondary">
                      {r.email} · {r.whatsapp} · {r.pays}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold-text">
                      {frLabel("path", r.orientation)} · {frLabel("compat", r.compat)}
                    </span>
                    <EvaluationToggle evaluationId={r.id} handled={r.handled} />
                  </div>
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3">
                  <Field label="Objectif" value={frLabel("objectif", r.objectif)} />
                  <Field label="Secteur" value={frLabel("domaine", r.domaine)} />
                  <Field label="Études" value={frLabel("etudes", r.etudes)} />
                  <Field label="Qualification" value={frLabel("qualification", r.qualification)} />
                  <Field label="Expérience" value={frLabel("experience", r.experience)} />
                  <Field label="Allemand" value={frLabel("allemand", r.allemand)} />
                  <Field label="Certificat" value={r.certificat === "oui" ? "Oui" : r.certificat === "non" ? "Non" : "—"} />
                  <Field label="Âge" value={r.age ?? "—"} />
                  <Field
                    label="Reçu le"
                    value={new Date(r.created_at).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  />
                </dl>
              </div>
            ))}
            {(!rows || rows.length === 0) && (
              <p className="text-sm text-brand-ink-muted">Aucune évaluation pour ce filtre.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-1.5">
      <dt className="text-brand-ink-muted">{label} :</dt>
      <dd className="text-brand-black">{value}</dd>
    </div>
  );
}
