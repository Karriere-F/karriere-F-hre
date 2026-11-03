import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getEmployerOptions, getTeam } from "@/lib/erp/server";
import {
  CANDIDATE_STATUSES,
  DOCUMENT_STATUSES,
  DOCUMENT_TYPES,
  GERMAN_LEVELS,
  PLACEMENT_STAGES,
  TRACKS,
  candidateStatusLabel,
  docStatus,
  enrollmentStatusLabel,
  examStatus,
  formatDate,
  formatMoney,
  isoInDays,
  invoiceStatus,
  levelLabel,
  providerLabel,
  stageLabel,
  stageTone,
  todayIso,
} from "@/lib/erp/labels";
import { createPlacement, saveDocument, updateCandidateDossier } from "@/actions/recruitment-actions";
import { Badge, Card, Empty, ErrorBanner, Field, PageHeader, Select, inputClass, linkClass } from "@/components/ui";
import { SubmitButton } from "@/components/submit-button";
import { TaskForm, TaskList } from "@/components/tasks";
import type {
  CandidateDocumentRow,
  CourseRow,
  Database,
  EnrollmentRow,
  ExamRow,
  InvoiceSummaryRow,
  PlacementRow,
  TaskRow,
} from "@/types/database.types";

export default async function DossierPage({
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
  const back = `/dossiers/${id}`;

  const { data: c } = await supabase
    .from("candidates")
    .select("*, profiles(full_name, email, phone)")
    .eq("id", id)
    .returns<
      (Database["public"]["Tables"]["candidates"]["Row"] & {
        profiles: { full_name: string | null; email: string | null; phone: string | null } | null;
      })[]
    >()
    .single();
  if (!c) notFound();

  const [team, employers, occupations, docs, placements, enrollments, exams, tasks, invoices] = await Promise.all([
    getTeam(supabase),
    getEmployerOptions(supabase),
    supabase.from("shortage_occupations").select("id, title_fr").order("title_fr"),
    supabase.from("candidate_documents").select("*").eq("candidate_id", id),
    supabase.from("placements").select("*").eq("candidate_id", id).order("created_at", { ascending: false }),
    supabase
      .from("enrollments")
      .select("*, courses(name, level, status)")
      .eq("candidate_id", id)
      .returns<(EnrollmentRow & { courses: Pick<CourseRow, "name" | "level" | "status"> | null })[]>(),
    supabase.from("exams").select("*").eq("candidate_id", id).order("exam_date", { ascending: false }),
    supabase.from("tasks").select("*").eq("candidate_id", id).order("status").order("due_date"),
    can("finance")
      ? supabase.from("invoice_summary").select("*").eq("candidate_id", id).order("issue_date", { ascending: false })
      : Promise.resolve({ data: [] as InvoiceSummaryRow[] }),
  ]);

  const docByType = new Map(((docs.data ?? []) as CandidateDocumentRow[]).map((d) => [d.doc_type, d]));
  const signed = new Map<string, string>();
  await Promise.all(
    [...docByType.values()]
      .filter((d) => d.storage_path)
      .map(async (d) => {
        const { data } = await supabase.storage.from("erp-documents").createSignedUrl(d.storage_path!, 600);
        if (data) signed.set(d.doc_type, data.signedUrl);
      })
  );
  let cvUrl: string | null = null;
  if (c.cv_storage_path) {
    const { data } = await supabase.storage.from("cv-uploads").createSignedUrl(c.cv_storage_path, 600);
    cvUrl = data?.signedUrl ?? null;
  }

  const done = DOCUMENT_TYPES.filter((t) => ["validated", "certified", "submitted"].includes(docByType.get(t.key)?.status ?? "")).length;
  const editable = can("recruitment");
  const today = todayIso();
  const soon = isoInDays(60);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={c.profiles?.full_name || "Dossier candidat"}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            <Badge tone={c.status === "placed" ? "good" : "neutral"}>{candidateStatusLabel(c.status)}</Badge>
            <span>Allemand {levelLabel(c.german_level)}</span>
            <span>{c.needs_training ? "Full Training" : "Fast Track"}</span>
            {cvUrl && (
              <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="text-brand-gold-text hover:underline">
                CV déposé sur le site
              </a>
            )}
          </span>
        }
      />
      <ErrorBanner message={erreur} />

      <div className="grid gap-6 xl:grid-cols-3">
        <Card title="Profil" className="xl:col-span-1">
          <form action={updateCandidateDossier.bind(null, id)} className="grid gap-3">
            <fieldset disabled={!editable} className="grid gap-3">
              <Field label="Nom complet">
                <input name="full_name" defaultValue={c.profiles?.full_name ?? ""} className={inputClass} />
              </Field>
              <Field label="Email (identifiant de connexion)">
                <input value={c.profiles?.email ?? ""} disabled className={`${inputClass} bg-brand-black/[0.03]`} />
              </Field>
              <Field label="Téléphone / WhatsApp">
                <input name="phone" defaultValue={c.profiles?.phone ?? ""} className={inputClass} />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Statut">
                  <Select name="status" options={CANDIDATE_STATUSES} defaultValue={c.status} />
                </Field>
                <Field label="Allemand">
                  <Select name="german_level" options={GERMAN_LEVELS} defaultValue={c.german_level} />
                </Field>
                <Field label="Parcours">
                  <Select
                    name="track"
                    options={[{ key: "full", label: "Full Training" }, { key: "fast", label: "Fast Track" }]}
                    defaultValue={c.needs_training ? "full" : "fast"}
                  />
                </Field>
                <Field label="Expérience (ans)">
                  <input name="years_experience" type="number" min={0} defaultValue={c.years_experience ?? ""} className={inputClass} />
                </Field>
              </div>
              <Field label="Métier visé">
                <Select
                  name="target_occupation_id"
                  options={(occupations.data ?? []).map((o) => ({ key: o.id, label: o.title_fr }))}
                  defaultValue={c.target_occupation_id}
                  empty="Non défini"
                />
              </Field>
              <Field label="Notes internes">
                <textarea name="admin_notes" rows={4} defaultValue={c.admin_notes ?? ""} className={inputClass} />
              </Field>
              {editable && (
                <div>
                  <SubmitButton>Enregistrer</SubmitButton>
                </div>
              )}
            </fieldset>
          </form>
        </Card>

        <Card
          title="Dossier documentaire"
          className="xl:col-span-2"
          actions={<span className="text-sm text-brand-ink-muted">{done} / {DOCUMENT_TYPES.length} prêts</span>}
        >
          <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-brand-black/5">
            <div className="h-full bg-brand-gold" style={{ width: `${(done / DOCUMENT_TYPES.length) * 100}%` }} />
          </div>
          <ul className="divide-y divide-brand-grid">
            {DOCUMENT_TYPES.map((t) => {
              const d = docByType.get(t.key);
              const st = docStatus(d?.status ?? "missing");
              const expiring = d?.expires_on && d.expires_on < soon;
              return (
                <li key={t.key} className="py-2.5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none flex-wrap items-center gap-3 text-sm">
                      <span className="min-w-0 flex-1 text-brand-black">{t.label}</span>
                      {d?.expires_on && (
                        <span className={`text-xs ${expiring ? "text-red-700" : "text-brand-ink-muted"}`}>
                          expire le {formatDate(d.expires_on)}
                        </span>
                      )}
                      {signed.get(t.key) && (
                        <a href={signed.get(t.key)} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-gold-text hover:underline">
                          Ouvrir le fichier
                        </a>
                      )}
                      <Badge tone={st.tone}>{st.label}</Badge>
                      {editable && <span className="text-xs text-brand-ink-muted group-open:hidden">Modifier</span>}
                    </summary>
                    {d?.notes && <p className="mt-1 text-xs text-brand-ink-secondary">{d.notes}</p>}
                    {editable && (
                      <form action={saveDocument.bind(null, id, t.key)} className="mt-3 grid gap-3 rounded-lg bg-brand-black/[0.03] p-3 sm:grid-cols-2">
                        <Field label="Statut">
                          <Select name="status" options={DOCUMENT_STATUSES} defaultValue={d?.status ?? "missing"} />
                        </Field>
                        <Field label="Date d'expiration">
                          <input name="expires_on" type="date" defaultValue={d?.expires_on ?? ""} className={inputClass} />
                        </Field>
                        <Field label="Fichier (PDF ou image, 5 Mo max)">
                          <input name="file" type="file" accept=".pdf,image/*" className="text-sm" />
                        </Field>
                        <Field label="Note">
                          <input name="notes" defaultValue={d?.notes ?? ""} className={inputClass} />
                        </Field>
                        <div>
                          <SubmitButton>Enregistrer</SubmitButton>
                        </div>
                      </form>
                    )}
                  </details>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Placements">
          {(placements.data ?? []).length === 0 ? (
            <Empty>Aucun placement ouvert.</Empty>
          ) : (
            <ul className="divide-y divide-brand-grid">
              {(placements.data as PlacementRow[]).map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <Link href={`/placements/${p.id}`} className={linkClass}>
                    {p.job_title}
                  </Link>
                  <Badge tone={stageTone(p.stage)}>{stageLabel(p.stage)}</Badge>
                </li>
              ))}
            </ul>
          )}
          {editable && (
            <form action={createPlacement} className="mt-4 grid gap-3 border-t border-brand-grid pt-4 sm:grid-cols-2">
              <input type="hidden" name="candidate_id" value={id} />
              <input type="hidden" name="back" value={back} />
              <Field label="Poste visé">
                <input name="job_title" required placeholder="Ex. Infirmier(ère)" className={inputClass} />
              </Field>
              <Field label="Voie">
                <Select name="track" options={TRACKS} />
              </Field>
              <Field label="Étape">
                <Select name="stage" options={PLACEMENT_STAGES} />
              </Field>
              <Field label="Employeur">
                <Select name="employer_id" options={employers.map((e) => ({ key: e.id, label: e.name }))} empty="Pas encore" />
              </Field>
              <div>
                <SubmitButton>Ouvrir un placement</SubmitButton>
              </div>
            </form>
          )}
        </Card>

        <Card title="Formation et examens">
          {(enrollments.data ?? []).length === 0 && (exams.data ?? []).length === 0 ? (
            <Empty>Pas encore inscrit à une classe ni à un examen.</Empty>
          ) : (
            <ul className="divide-y divide-brand-grid text-sm">
              {(enrollments.data ?? []).map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-3 py-2.5">
                  <Link href={`/ecole/${e.course_id}`} className={linkClass}>
                    Classe {e.courses?.name} ({levelLabel(e.courses?.level ?? "none")})
                  </Link>
                  <span className="text-brand-ink-secondary">
                    {enrollmentStatusLabel(e.status)}
                    {e.final_result && `, ${e.final_result}`}
                  </span>
                </li>
              ))}
              {((exams.data ?? []) as ExamRow[]).map((x) => (
                <li key={x.id} className="flex items-center justify-between gap-3 py-2.5">
                  <span className="text-brand-black">
                    Examen {providerLabel(x.provider)} {levelLabel(x.level)}, {formatDate(x.exam_date)}
                  </span>
                  <Badge tone={examStatus(x.status).tone}>{examStatus(x.status).label}</Badge>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Tâches liées">
          <TaskList tasks={(tasks.data ?? []) as TaskRow[]} team={team} />
          <TaskForm team={team} back={back} candidateId={id} defaultAssignee={user.id} />
        </Card>

        {can("finance") && (
          <Card
            title="Factures"
            actions={
              <Link href={`/factures/nouvelle?candidat=${id}`} className="text-sm text-brand-gold-text hover:underline">
                Nouvelle facture
              </Link>
            }
          >
            {(invoices.data ?? []).length === 0 ? (
              <Empty>Aucune facture.</Empty>
            ) : (
              <ul className="divide-y divide-brand-grid text-sm">
                {(invoices.data as InvoiceSummaryRow[]).map((i) => (
                  <li key={i.id} className="flex items-center justify-between gap-3 py-2.5">
                    <Link href={`/factures/${i.id}`} className={linkClass}>
                      {i.number}
                    </Link>
                    <span className="flex items-center gap-3">
                      <span className="text-brand-ink-secondary">{formatMoney(i.total, i.currency)}</span>
                      <Badge tone={i.status === "sent" && i.due_date && i.due_date < today ? "bad" : invoiceStatus(i.status).tone}>
                        {invoiceStatus(i.status).label}
                      </Badge>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
