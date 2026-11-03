import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getEmployerOptions, getTeam, nameOf } from "@/lib/erp/server";
import { PLACEMENT_STAGES, TRACKS, stageLabel, stageTone } from "@/lib/erp/labels";
import { deletePlacement, logPlacementEvent, updatePlacement } from "@/actions/recruitment-actions";
import { Badge, Card, Empty, ErrorBanner, Field, PageHeader, Select, inputClass, linkClass } from "@/components/ui";
import { SubmitButton } from "@/components/submit-button";
import { TaskForm, TaskList } from "@/components/tasks";
import type { PlacementEventRow, PlacementRow, TaskRow } from "@/types/database.types";

export default async function PlacementPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ erreur?: string }>;
}) {
  const { id } = await params;
  const { erreur } = await searchParams;
  const { user, can } = await requireStaff();
  const supabase = await createClient();

  const { data: p } = await supabase
    .from("placements")
    .select("*, candidates(id, profiles(full_name))")
    .eq("id", id)
    .returns<(PlacementRow & { candidates: { id: string; profiles: { full_name: string | null } | null } | null })[]>()
    .single();
  if (!p) notFound();

  const [team, employers, events, tasks] = await Promise.all([
    getTeam(supabase),
    getEmployerOptions(supabase),
    supabase.from("placement_events").select("*").eq("placement_id", id).order("created_at", { ascending: false }),
    supabase.from("tasks").select("*").eq("placement_id", id).order("status").order("due_date"),
  ]);
  const editable = can("recruitment");
  const currentIndex = PLACEMENT_STAGES.findIndex((s) => s.key === p.stage);
  const steps = PLACEMENT_STAGES.filter((s) => s.key !== "dropped");

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={p.job_title}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            <Link href={`/dossiers/${p.candidate_id}`} className={linkClass}>
              {p.candidates?.profiles?.full_name ?? "Candidat"}
            </Link>
            <Badge tone={stageTone(p.stage)}>{stageLabel(p.stage)}</Badge>
          </span>
        }
      />
      <ErrorBanner message={erreur} />

      <Card>
        <ol className="flex flex-wrap gap-y-3">
          {steps.map((s, i) => {
            const reached = p.stage !== "dropped" && i <= currentIndex;
            return (
              <li key={s.key} className="flex items-center">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    s.key === p.stage ? "bg-brand-gold text-brand-black" : reached ? "bg-brand-gold/15 text-brand-black" : "bg-brand-black/5 text-brand-ink-muted"
                  }`}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && <span className="mx-1 h-px w-4 bg-brand-grid" />}
              </li>
            );
          })}
        </ol>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Avancement et historique">
          {editable && (
            <form action={logPlacementEvent.bind(null, id)} className="mb-5 grid gap-3 sm:grid-cols-3">
              <Field label="Nouvelle étape">
                <Select name="stage" options={PLACEMENT_STAGES} defaultValue={p.stage} />
              </Field>
              <Field label="Note" className="sm:col-span-2">
                <input name="note" placeholder="Ex. entretien Teams avec la clinique le 12" className={inputClass} />
              </Field>
              <div>
                <SubmitButton>Enregistrer</SubmitButton>
              </div>
            </form>
          )}
          {(events.data ?? []).length === 0 ? (
            <Empty>Pas encore d&apos;historique.</Empty>
          ) : (
            <ol className="relative border-l border-brand-grid pl-5">
              {((events.data ?? []) as PlacementEventRow[]).map((e) => (
                <li key={e.id} className="mb-4">
                  <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                  <p className="text-xs text-brand-ink-muted">
                    {new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(e.created_at))}
                    {e.created_by && `, ${nameOf(team, e.created_by)}`}
                  </p>
                  {e.stage && <p className="text-sm font-medium text-brand-black">Passage à : {stageLabel(e.stage)}</p>}
                  {e.note && <p className="text-sm text-brand-ink-secondary">{e.note}</p>}
                </li>
              ))}
            </ol>
          )}
        </Card>

        <Card title="Détails">
          <form action={updatePlacement.bind(null, id)}>
            <fieldset disabled={!editable} className="grid gap-3 sm:grid-cols-2">
              <Field label="Poste">
                <input name="job_title" defaultValue={p.job_title} className={inputClass} />
              </Field>
              <Field label="Voie">
                <Select name="track" options={TRACKS} defaultValue={p.track} />
              </Field>
              <Field label="Employeur">
                <Select name="employer_id" options={employers.map((e) => ({ key: e.id, label: e.name }))} defaultValue={p.employer_id} empty="Pas encore" />
              </Field>
              <Field label="Ville en Allemagne">
                <input name="germany_city" defaultValue={p.germany_city ?? ""} className={inputClass} />
              </Field>
              <Field label="Début de contrat visé">
                <input name="target_start_date" type="date" defaultValue={p.target_start_date ?? ""} className={inputClass} />
              </Field>
              <Field label="Responsable">
                <Select
                  name="owner_id"
                  options={team.map((m) => ({ key: m.id, label: m.full_name || m.email || m.id }))}
                  defaultValue={p.owner_id}
                  empty="Personne"
                />
              </Field>
              <Field label="Notes" className="sm:col-span-2">
                <textarea name="notes" rows={4} defaultValue={p.notes ?? ""} className={inputClass} />
              </Field>
              {editable && (
                <div>
                  <SubmitButton>Enregistrer</SubmitButton>
                </div>
              )}
            </fieldset>
          </form>
          {editable && (
            <form action={deletePlacement.bind(null, id)} className="mt-6 border-t border-brand-grid pt-4">
              <SubmitButton variant="danger" confirm="Supprimer définitivement ce placement et son historique ?">
                Supprimer le placement
              </SubmitButton>
            </form>
          )}
        </Card>

        <Card title="Tâches liées" className="xl:col-span-2">
          <TaskList tasks={(tasks.data ?? []) as TaskRow[]} team={team} />
          <TaskForm team={team} back={`/placements/${id}`} candidateId={p.candidate_id} placementId={id} defaultAssignee={p.owner_id ?? user.id} />
        </Card>
      </div>
    </div>
  );
}
