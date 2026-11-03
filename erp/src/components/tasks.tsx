import { createTask, deleteTask, setTaskStatus } from "@/actions/task-actions";
import { TASK_PRIORITIES, formatDate, priority, todayIso } from "@/lib/erp/labels";
import { nameOf, type TeamMember } from "@/lib/erp/server";
import type { TaskRow } from "@/types/database.types";
import { Badge, Empty, Field, Select, inputClass } from "./ui";
import { SubmitButton } from "./submit-button";

export function TaskList({ tasks, team }: { tasks: TaskRow[]; team: TeamMember[] }) {
  if (tasks.length === 0) return <Empty>Aucune tâche.</Empty>;
  const today = todayIso();

  return (
    <ul className="divide-y divide-brand-grid">
      {tasks.map((t) => {
        const done = t.status === "done";
        const late = !done && t.due_date && t.due_date < today;
        return (
          <li key={t.id} className="flex flex-wrap items-start gap-3 py-3">
            <form action={setTaskStatus.bind(null, t.id, done ? "todo" : "done")}>
              <button
                aria-label={done ? "Rouvrir la tâche" : "Marquer comme terminée"}
                className={`mt-0.5 h-5 w-5 rounded border transition-colors ${
                  done ? "border-brand-gold bg-brand-gold" : "border-brand-grid bg-white hover:border-brand-gold"
                }`}
              />
            </form>
            <div className="min-w-0 flex-1">
              <p className={`text-sm ${done ? "text-brand-ink-muted line-through" : "text-brand-black"}`}>{t.title}</p>
              {t.description && <p className="mt-0.5 text-xs text-brand-ink-secondary">{t.description}</p>}
              <p className="mt-1 text-xs text-brand-ink-muted">
                {nameOf(team, t.assignee_id) || "Non assignée"}
                {t.due_date && (
                  <span className={late ? "ml-2 text-red-700" : "ml-2"}>échéance {formatDate(t.due_date)}</span>
                )}
              </p>
            </div>
            <Badge tone={priority(t.priority).tone}>{priority(t.priority).label}</Badge>
            {!done && t.status === "todo" && (
              <form action={setTaskStatus.bind(null, t.id, "in_progress")}>
                <button className="text-xs text-brand-ink-muted hover:text-brand-black">Commencer</button>
              </form>
            )}
            {t.status === "in_progress" && <Badge tone="gold">En cours</Badge>}
            <form action={deleteTask.bind(null, t.id)}>
              <button aria-label="Supprimer" className="text-xs text-brand-ink-muted hover:text-red-700">
                Supprimer
              </button>
            </form>
          </li>
        );
      })}
    </ul>
  );
}

export function TaskForm({
  team,
  back,
  candidateId,
  placementId,
  defaultAssignee,
}: {
  team: TeamMember[];
  back: string;
  candidateId?: string;
  placementId?: string;
  defaultAssignee?: string;
}) {
  return (
    <form action={createTask} className="mt-4 grid gap-3 border-t border-brand-grid pt-4 sm:grid-cols-4">
      <input type="hidden" name="back" value={back} />
      {candidateId && <input type="hidden" name="candidate_id" value={candidateId} />}
      {placementId && <input type="hidden" name="placement_id" value={placementId} />}
      <Field label="Nouvelle tâche" className="sm:col-span-4">
        <input name="title" required placeholder="Ex. relancer la traduction du diplôme" className={inputClass} />
      </Field>
      <Field label="Assignée à">
        <Select
          name="assignee_id"
          options={team.filter((m) => m.staff_active).map((m) => ({ key: m.id, label: m.full_name || m.email || m.id }))}
          defaultValue={defaultAssignee}
        />
      </Field>
      <Field label="Échéance">
        <input name="due_date" type="date" className={inputClass} />
      </Field>
      <Field label="Priorité">
        <Select name="priority" options={TASK_PRIORITIES} defaultValue="normal" />
      </Field>
      <div className="flex items-end">
        <SubmitButton>Ajouter</SubmitButton>
      </div>
    </form>
  );
}
