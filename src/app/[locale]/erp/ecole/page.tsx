import { Link } from "../../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getTeam, nameOf } from "@/lib/erp/server";
import { courseStatus, formatDate, levelLabel } from "@/lib/erp/labels";
import { createCourse } from "@/actions/erp/school-actions";
import { Badge, Card, Empty, ErrorBanner, PageHeader, Table, linkClass, tdClass } from "@/components/erp/ui";
import { SubmitButton } from "@/components/erp/submit-button";
import { CourseFields } from "@/components/erp/course-fields";
import type { CourseRow } from "@/types/database.types";

export default async function SchoolPage({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  const { can } = await requireStaff();
  const { erreur } = await searchParams;
  const supabase = await createClient();

  const [{ data }, team] = await Promise.all([
    supabase
      .from("courses")
      .select("*, enrollments(count)")
      .order("start_date", { ascending: false, nullsFirst: true })
      .returns<(CourseRow & { enrollments: { count: number }[] })[]>(),
    getTeam(supabase),
  ]);
  const courses = data ?? [];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="École d'allemand" subtitle="Classes A1 à C1, inscriptions et présences." />
      <ErrorBanner message={erreur} />
      <Card>
        {courses.length === 0 ? (
          <Empty>Aucune classe pour le moment. Créez la première ci-dessous.</Empty>
        ) : (
          <Table head={["Classe", "Niveau", "Période", "Formateur", "Inscrits", "Statut"]}>
            {courses.map((c) => {
              const n = c.enrollments[0]?.count ?? 0;
              return (
                <tr key={c.id}>
                  <td className={tdClass}>
                    <Link href={{ pathname: "/erp/ecole/[id]", params: { id: c.id } }} className={linkClass}>
                      {c.name}
                    </Link>
                    {c.schedule && <span className="block text-xs text-brand-ink-muted">{c.schedule}</span>}
                  </td>
                  <td className={tdClass}>{levelLabel(c.level)}</td>
                  <td className={`${tdClass} text-brand-ink-secondary`}>
                    {formatDate(c.start_date)}
                    {c.end_date && <span className="block">au {formatDate(c.end_date)}</span>}
                  </td>
                  <td className={tdClass}>{nameOf(team, c.trainer_id)}</td>
                  <td className={tdClass}>{c.capacity ? `${n} / ${c.capacity}` : n}</td>
                  <td className={tdClass}>
                    <Badge tone={courseStatus(c.status).tone}>{courseStatus(c.status).label}</Badge>
                  </td>
                </tr>
              );
            })}
          </Table>
        )}
      </Card>

      {can("school") && (
        <Card title="Nouvelle classe">
          <form action={createCourse} className="grid gap-3 sm:grid-cols-3">
            <CourseFields team={team} />
            <div className="sm:col-span-3">
              <SubmitButton>Créer la classe</SubmitButton>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
