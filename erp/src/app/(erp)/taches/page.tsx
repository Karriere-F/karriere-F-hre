import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getTeam } from "@/lib/erp/server";
import { Card, ErrorBanner, PageHeader, ghostButtonClass } from "@/components/ui";
import { TaskForm, TaskList } from "@/components/tasks";
import type { TaskRow } from "@/types/database.types";

export default async function TasksPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string; vue?: string }>;
}) {
  const { user } = await requireStaff();
  const { erreur, vue } = await searchParams;
  const supabase = await createClient();

  let query = supabase.from("tasks").select("*").order("due_date", { ascending: true, nullsFirst: false });
  if (vue !== "equipe" && vue !== "terminees") query = query.eq("assignee_id", user.id);
  query = vue === "terminees" ? query.eq("status", "done").limit(100) : query.neq("status", "done");
  const [{ data }, team] = await Promise.all([query, getTeam(supabase)]);
  const tasks = (data ?? []) as TaskRow[];

  const views = [
    { key: undefined, label: "Mes tâches" },
    { key: "equipe", label: "Toute l'équipe" },
    { key: "terminees", label: "Terminées" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Tâches"
        actions={views.map((v) => (
          <Link
            key={v.label}
            href={v.key ? `/taches?vue=${v.key}` : "/taches"}
            className={`${ghostButtonClass} ${vue === v.key ? "border-brand-gold" : ""}`}
          >
            {v.label}
          </Link>
        ))}
      />
      <ErrorBanner message={erreur} />
      <Card>
        <TaskList tasks={tasks} team={team} />
        <TaskForm team={team} back="/taches" defaultAssignee={user.id} />
      </Card>
    </div>
  );
}
