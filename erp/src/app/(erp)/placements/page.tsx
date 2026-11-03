import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getCandidateOptions, getEmployerOptions, getTeam, nameOf } from "@/lib/erp/server";
import { PLACEMENT_STAGES, TRACKS, formatDate, trackLabel } from "@/lib/erp/labels";
import { createPlacement } from "@/actions/recruitment-actions";
import { Card, ErrorBanner, Field, PageHeader, Select, ghostButtonClass, inputClass } from "@/components/ui";
import { SubmitButton } from "@/components/submit-button";
import type { PlacementRow } from "@/types/database.types";

type Row = PlacementRow & {
  candidates: { profiles: { full_name: string | null } | null } | null;
  employers: { company_name: string } | null;
};

export default async function PlacementsPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string; moi?: string; archives?: string }>;
}) {
  const { user, can } = await requireStaff();
  const { erreur, moi, archives } = await searchParams;
  const supabase = await createClient();

  let query = supabase
    .from("placements")
    .select("*, candidates(profiles(full_name)), employers(company_name)")
    .order("updated_at", { ascending: false });
  if (moi) query = query.eq("owner_id", user.id);
  const [{ data }, team, candidates, employers] = await Promise.all([
    query.returns<Row[]>(),
    getTeam(supabase),
    can("recruitment") ? getCandidateOptions(supabase) : Promise.resolve([]),
    can("recruitment") ? getEmployerOptions(supabase) : Promise.resolve([]),
  ]);
  const rows = data ?? [];
  const columns = PLACEMENT_STAGES.filter((s) => archives || s.key !== "dropped");

  return (
    <div>
      <PageHeader
        title="Placements"
        subtitle="Chaque carte suit un candidat, de la formation jusqu'à la prise de poste en Allemagne."
        actions={
          <>
            <Link href={moi ? "/placements" : "/placements?moi=1"} className={ghostButtonClass}>
              {moi ? "Tous les placements" : "Mes placements"}
            </Link>
            <Link href={archives ? "/placements" : "/placements?archives=1"} className={ghostButtonClass}>
              {archives ? "Masquer les abandons" : "Voir les abandons"}
            </Link>
          </>
        }
      />
      <ErrorBanner message={erreur} />

      <div className="-mx-4 overflow-x-auto px-4 pb-4">
        <div className="flex gap-3" style={{ minWidth: columns.length * 230 }}>
          {columns.map((s) => {
            const items = rows.filter((r) => r.stage === s.key);
            return (
              <div key={s.key} className="w-56 shrink-0 rounded-xl bg-brand-black/[0.03] p-2.5">
                <p className="mb-2 flex items-center justify-between px-1 text-xs font-semibold uppercase tracking-wide text-brand-ink-muted">
                  {s.label}
                  <span className="rounded-full bg-white px-2 py-0.5 text-brand-black">{items.length}</span>
                </p>
                <div className="flex flex-col gap-2">
                  {items.map((p) => (
                    <Link
                      key={p.id}
                      href={`/placements/${p.id}`}
                      className="block rounded-lg border border-brand-grid bg-white p-3 text-sm transition-colors hover:border-brand-gold"
                    >
                      <p className="font-medium text-brand-black">{p.candidates?.profiles?.full_name ?? "Candidat"}</p>
                      <p className="mt-0.5 text-brand-ink-secondary">{p.job_title}</p>
                      <p className="mt-2 text-xs text-brand-ink-muted">
                        {p.employers?.company_name || trackLabel(p.track)}
                        {p.target_start_date && <span className="block">Début visé {formatDate(p.target_start_date)}</span>}
                        {p.owner_id && <span className="block">Suivi par {nameOf(team, p.owner_id)}</span>}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {can("recruitment") && (
        <Card title="Ouvrir un placement" className="mt-6">
          <form action={createPlacement} className="grid gap-3 sm:grid-cols-3">
            <Field label="Candidat *">
              <Select name="candidate_id" options={candidates.map((c) => ({ key: c.id, label: c.name }))} empty="Choisir" required />
            </Field>
            <Field label="Poste visé *">
              <input name="job_title" required className={inputClass} />
            </Field>
            <Field label="Voie">
              <Select name="track" options={TRACKS} />
            </Field>
            <Field label="Étape de départ">
              <Select name="stage" options={PLACEMENT_STAGES} />
            </Field>
            <Field label="Employeur">
              <Select name="employer_id" options={employers.map((e) => ({ key: e.id, label: e.name }))} empty="Pas encore" />
            </Field>
            <Field label="Responsable">
              <Select
                name="owner_id"
                options={team.filter((m) => m.staff_active).map((m) => ({ key: m.id, label: m.full_name || m.email || m.id }))}
                defaultValue={user.id}
              />
            </Field>
            <div>
              <SubmitButton>Créer</SubmitButton>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
