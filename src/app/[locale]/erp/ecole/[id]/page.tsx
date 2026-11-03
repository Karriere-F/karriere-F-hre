import { notFound } from "next/navigation";
import { Link } from "../../../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getCandidateOptions, getTeam, nameOf } from "@/lib/erp/server";
import { ENROLLMENT_STATUSES, courseStatus, formatDate, levelLabel, todayIso } from "@/lib/erp/labels";
import { enrollCandidate, saveAttendance, updateCourse, updateEnrollment } from "@/actions/erp/school-actions";
import { Badge, Card, Empty, ErrorBanner, Field, PageHeader, Select, Table, inputClass, linkClass, tdClass } from "@/components/erp/ui";
import { SubmitButton } from "@/components/erp/submit-button";
import { CourseFields } from "@/components/erp/course-fields";
import type { AttendanceRow, CourseRow, EnrollmentRow } from "@/types/database.types";

type Enrollment = EnrollmentRow & {
  candidates: { profiles: { full_name: string | null; phone: string | null } | null } | null;
  attendance: AttendanceRow[];
};

export default async function CoursePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ erreur?: string; seance?: string }>;
}) {
  const { id } = await params;
  const { erreur, seance } = await searchParams;
  const { can } = await requireStaff();
  const supabase = await createClient();

  const { data: course } = await supabase.from("courses").select("*").eq("id", id).single();
  if (!course) notFound();
  const c = course as CourseRow;

  const editable = can("school");
  const [{ data }, team, candidates] = await Promise.all([
    supabase
      .from("enrollments")
      .select("*, candidates(profiles(full_name, phone)), attendance(*)")
      .eq("course_id", id)
      .order("created_at")
      .returns<Enrollment[]>(),
    getTeam(supabase),
    editable ? getCandidateOptions(supabase) : Promise.resolve([]),
  ]);
  const enrollments = data ?? [];
  const sessionDate = seance || todayIso();
  const enrolledIds = new Set(enrollments.map((e) => e.candidate_id));
  const sessions = new Set(enrollments.flatMap((e) => e.attendance.map((a) => a.session_date)));

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={c.name}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            <Badge tone={courseStatus(c.status).tone}>{courseStatus(c.status).label}</Badge>
            <span>Niveau {levelLabel(c.level)}</span>
            {c.trainer_id && <span>Formateur : {nameOf(team, c.trainer_id)}</span>}
            <span>{sessions.size} séance{sessions.size > 1 ? "s" : ""} pointée{sessions.size > 1 ? "s" : ""}</span>
          </span>
        }
      />
      <ErrorBanner message={erreur} />

      <Card title={`Apprenants (${enrollments.length}${c.capacity ? ` / ${c.capacity}` : ""})`}>
        {enrollments.length === 0 ? (
          <Empty>Aucun inscrit pour l&apos;instant.</Empty>
        ) : (
          <Table head={["Apprenant", "Assiduité", "Statut et résultat"]}>
            {enrollments.map((e) => {
              const total = e.attendance.length;
              const present = e.attendance.filter((a) => a.present).length;
              const rate = total ? Math.round((present / total) * 100) : null;
              return (
                <tr key={e.id}>
                  <td className={tdClass}>
                    <Link href={{ pathname: "/erp/dossiers/[id]", params: { id: e.candidate_id } }} className={linkClass}>
                      {e.candidates?.profiles?.full_name ?? "Candidat"}
                    </Link>
                    {e.candidates?.profiles?.phone && <span className="block text-xs text-brand-ink-muted">{e.candidates.profiles.phone}</span>}
                  </td>
                  <td className={tdClass}>
                    {rate === null ? (
                      <span className="text-brand-ink-muted">Pas de séance</span>
                    ) : (
                      <Badge tone={rate >= 80 ? "good" : rate >= 60 ? "warn" : "bad"}>
                        {rate} % ({present}/{total})
                      </Badge>
                    )}
                  </td>
                  <td className={tdClass}>
                    <form action={updateEnrollment.bind(null, e.id)} className="flex flex-wrap gap-2">
                      <fieldset disabled={!editable} className="flex flex-wrap gap-2">
                        <div className="w-32">
                          <Select name="status" options={ENROLLMENT_STATUSES} defaultValue={e.status} />
                        </div>
                        <input name="final_result" defaultValue={e.final_result ?? ""} placeholder="Note finale" className={`${inputClass} w-32`} />
                        {editable && <SubmitButton variant="secondary">OK</SubmitButton>}
                      </fieldset>
                    </form>
                  </td>
                </tr>
              );
            })}
          </Table>
        )}
        {editable && (
          <form action={enrollCandidate.bind(null, id)} className="mt-4 flex flex-wrap items-end gap-3 border-t border-brand-grid pt-4">
            <Field label="Inscrire un candidat" className="w-72">
              <Select
                name="candidate_id"
                options={candidates.filter((x) => !enrolledIds.has(x.id)).map((x) => ({ key: x.id, label: x.name }))}
                empty="Choisir"
                required
              />
            </Field>
            <SubmitButton>Inscrire</SubmitButton>
          </form>
        )}
      </Card>

      {editable && enrollments.some((e) => e.status === "enrolled") && (
        <Card title="Faire l'appel">
          <form method="get" className="mb-4 flex items-end gap-3">
            <Field label="Date de la séance">
              <input name="seance" type="date" defaultValue={sessionDate} className={inputClass} />
            </Field>
            <button className="rounded-md border border-brand-grid px-4 py-2 text-sm hover:border-brand-gold">Charger</button>
          </form>
          <form action={saveAttendance.bind(null, id)}>
            <input type="hidden" name="session_date" value={sessionDate} />
            <p className="mb-3 text-sm text-brand-ink-secondary">Séance du {formatDate(sessionDate)} : cochez les présents.</p>
            <div className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {enrollments
                .filter((e) => e.status === "enrolled")
                .map((e) => {
                  const rec = e.attendance.find((a) => a.session_date === sessionDate);
                  return (
                    <label key={e.id} className="flex items-center gap-2 rounded-md border border-brand-grid px-3 py-2 text-sm">
                      <input type="checkbox" name="present" value={e.id} defaultChecked={rec ? rec.present : true} className="accent-[#c39a3e]" />
                      {e.candidates?.profiles?.full_name ?? "Candidat"}
                    </label>
                  );
                })}
            </div>
            <SubmitButton>Enregistrer l&apos;appel</SubmitButton>
          </form>
        </Card>
      )}

      <Card title="Informations de la classe">
        <form action={updateCourse.bind(null, id)}>
          <fieldset disabled={!editable} className="grid gap-3 sm:grid-cols-3">
            <CourseFields team={team} course={c} />
            <Field label="Notes" className="sm:col-span-3">
              <textarea name="notes" rows={3} defaultValue={c.notes ?? ""} className={inputClass} />
            </Field>
            {editable && (
              <div>
                <SubmitButton>Enregistrer</SubmitButton>
              </div>
            )}
          </fieldset>
        </form>
      </Card>
    </div>
  );
}
