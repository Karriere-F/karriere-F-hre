"use server";

import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { fail, text, refreshErp } from "@/lib/erp/server";
import type { TaskPriority, TaskStatus } from "@/types/database.types";

export async function createTask(fd: FormData) {
  const { user } = await requireStaff();
  const supabase = await createClient();
  const back = text(fd, "back") ?? "/taches";
  const title = text(fd, "title");
  if (!title) return fail(back, "Le titre de la tâche est obligatoire.");

  const { error } = await supabase.from("tasks").insert({
    title,
    description: text(fd, "description"),
    priority: (text(fd, "priority") ?? "normal") as TaskPriority,
    due_date: text(fd, "due_date"),
    assignee_id: text(fd, "assignee_id") ?? user.id,
    candidate_id: text(fd, "candidate_id"),
    placement_id: text(fd, "placement_id"),
    employer_id: text(fd, "employer_id"),
    created_by: user.id,
  });
  if (error) return fail(back, "Création de la tâche impossible.");

  refreshErp();
}

export async function setTaskStatus(taskId: string, status: TaskStatus) {
  await requireStaff();
  const supabase = await createClient();
  await supabase
    .from("tasks")
    .update({ status, completed_at: status === "done" ? new Date().toISOString() : null })
    .eq("id", taskId);
  refreshErp();
}

export async function deleteTask(taskId: string) {
  await requireStaff();
  const supabase = await createClient();
  await supabase.from("tasks").delete().eq("id", taskId);
  refreshErp();
}
