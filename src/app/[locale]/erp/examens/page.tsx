import { Link } from "../../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getCandidateOptions } from "@/lib/erp/server";
import { EXAM_PROVIDERS, EXAM_STATUSES, GERMAN_LEVELS, examStatus, formatDate, levelLabel, providerLabel } from "@/lib/erp/labels";
import { createExam, updateExam } from "@/actions/erp/school-actions";
import { Badge, Card, Empty, ErrorBanner, Field, PageHeader, Select, Stat, Table, inputClass, linkClass, tdClass } from "@/components/erp/ui";
import { SubmitButton } from "@/components/erp/submit-button";
import type { ExamRow } from "@/types/database.types";

type Row = ExamRow & { candidates: { profiles: { full_name: string | null } | null } | null };

export default async function ExamsPage({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  const { can } = await requireStaff();
  const { erreur } = await searchParams;
  const supabase = await createClient();
  const editable = can("school");

  const [{ data }, candidates] = await Promise.all([
    supabase
      .from("exams")
      .select("*, candidates(profiles(full_name))")
      .order("exam_date", { ascending: false, nullsFirst: true })
      .limit(300)
      .returns<Row[]>(),
    editable ? getCandidateOptions(supabase) : Promise.resolve([]),
  ]);
  const exams = data ?? [];
  const decided = exams.filter((e) => ["passed", "partial", "failed"].includes(e.status));
  const passed = exams.filter((e) => e.status === "passed").length;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Examens de langue" subtitle="Goethe, telc, ÖSD et ECL : inscriptions et résultats." />
      <ErrorBanner message={erreur} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="À venir" value={exams.filter((e) => e.status === "registered").length} />
        <Stat label="Réussis" value={passed} />
        <Stat label="Taux de réussite" value={decided.length ? `${Math.round((passed / decided.length) * 100)} %` : "Pas encore"} />
      </div>

      <Card>
        {exams.length === 0 ? (
          <Empty>Aucun examen enregistré.</Empty>
        ) : (
          <Table head={["Candidat", "Examen", "Date", "Résultat"]}>
            {exams.map((e) => (
              <tr key={e.id}>
                <td className={tdClass}>
                  <Link href={{ pathname: "/erp/dossiers/[id]", params: { id: e.candidate_id } }} className={linkClass}>
                    {e.candidates?.profiles?.full_name ?? "Candidat"}
                  </Link>
                </td>
                <td className={tdClass}>
                  {providerLabel(e.provider)} {levelLabel(e.level)}
                </td>
                <td className={`${tdClass} text-brand-ink-secondary`}>{formatDate(e.exam_date)}</td>
                <td className={tdClass}>
                  {editable ? (
                    <form action={updateExam.bind(null, e.id)} className="flex flex-wrap gap-2">
                      <div className="w-44">
                        <Select name="status" options={EXAM_STATUSES} defaultValue={e.status} />
                      </div>
                      <input name="score" defaultValue={e.score ?? ""} placeholder="Score" className={`${inputClass} w-24`} />
                      <SubmitButton variant="secondary">OK</SubmitButton>
                    </form>
                  ) : (
                    <Badge tone={examStatus(e.status).tone}>
                      {examStatus(e.status).label}
                      {e.score && `, ${e.score}`}
                    </Badge>
                  )}
                </td>
              </tr>
            ))}
          </Table>
        )}
      </Card>

      {editable && (
        <Card title="Inscrire à un examen">
          <form action={createExam} className="grid gap-3 sm:grid-cols-5">
            <Field label="Candidat *" className="sm:col-span-2">
              <Select name="candidate_id" options={candidates.map((c) => ({ key: c.id, label: c.name }))} empty="Choisir" required />
            </Field>
            <Field label="Organisme *">
              <Select name="provider" options={EXAM_PROVIDERS} />
            </Field>
            <Field label="Niveau *">
              <Select name="level" options={GERMAN_LEVELS.filter((l) => l.key !== "none")} defaultValue="b1" />
            </Field>
            <Field label="Date">
              <input name="exam_date" type="date" className={inputClass} />
            </Field>
            <div>
              <SubmitButton>Inscrire</SubmitButton>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
