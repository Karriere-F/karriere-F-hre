"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireStaff } from "@/lib/erp/auth";
import { erpRedirect, fail, number, refreshErp, text } from "@/lib/erp/server";
import type { CourseStatus, EnrollmentStatus, ExamStatus, GermanLevel } from "@/types/database.types";

function courseFields(fd: FormData) {
  return {
    name: text(fd, "name") ?? undefined,
    level: (text(fd, "level") ?? undefined) as GermanLevel | undefined,
    start_date: text(fd, "start_date"),
    end_date: text(fd, "end_date"),
    schedule: text(fd, "schedule"),
    location: text(fd, "location"),
    capacity: number(fd, "capacity"),
    trainer_id: text(fd, "trainer_id"),
    status: (text(fd, "status") ?? undefined) as CourseStatus | undefined,
    notes: text(fd, "notes"),
  };
}

export async function createCourse(fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  const fields = courseFields(fd);
  if (!fields.name || !fields.level) return fail("/ecole", "Nom et niveau sont obligatoires.");

  const { data, error } = await supabase
    .from("courses")
    .insert({ ...fields, name: fields.name, level: fields.level })
    .select("id")
    .single();
  if (error || !data) return fail("/ecole", "Création de la classe impossible.");
  refreshErp();
  return erpRedirect(`/ecole/${data.id}`);
}

export async function updateCourse(courseId: string, fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  const { error } = await supabase.from("courses").update(courseFields(fd)).eq("id", courseId);
  if (error) return fail(`/ecole/${courseId}`, "Mise à jour impossible.");
  refreshErp();
}

export async function enrollCandidate(courseId: string, fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  const candidateId = text(fd, "candidate_id");
  if (!candidateId) return;

  const { error } = await supabase.from("enrollments").insert({ course_id: courseId, candidate_id: candidateId });
  if (error) return fail(`/ecole/${courseId}`, "Ce candidat est déjà inscrit dans cette classe.");
  // Trainers cannot write candidates under RLS; the school role was checked above.
  await createAdminClient().from("candidates").update({ status: "in_training" }).eq("id", candidateId).eq("status", "new");
  refreshErp();
}

export async function updateEnrollment(enrollmentId: string, fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  await supabase
    .from("enrollments")
    .update({ status: text(fd, "status") as EnrollmentStatus, final_result: text(fd, "final_result") })
    .eq("id", enrollmentId);
  refreshErp();
}

// One roll call: every enrollment of the class gets a row for that date; checked boxes are
// present, the rest absent.
export async function saveAttendance(courseId: string, fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  const date = text(fd, "session_date");
  if (!date) return fail(`/ecole/${courseId}`, "Choisissez la date de la séance.");

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("id")
    .eq("course_id", courseId)
    .eq("status", "enrolled");
  const present = new Set(fd.getAll("present").map(String));
  const rows = (enrollments ?? []).map((e) => ({ enrollment_id: e.id, session_date: date, present: present.has(e.id) }));
  if (rows.length) {
    const { error } = await supabase.from("attendance").upsert(rows, { onConflict: "enrollment_id,session_date" });
    if (error) return fail(`/ecole/${courseId}`, "Enregistrement des présences impossible.");
  }
  refreshErp();
}

export async function createExam(fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  const back = text(fd, "back") ?? "/examens";
  const candidateId = text(fd, "candidate_id");
  const provider = text(fd, "provider");
  const level = text(fd, "level") as GermanLevel | null;
  if (!candidateId || !provider || !level) return fail(back, "Candidat, organisme et niveau sont obligatoires.");

  const { error } = await supabase.from("exams").insert({
    candidate_id: candidateId,
    provider,
    level,
    exam_date: text(fd, "exam_date"),
    notes: text(fd, "notes"),
  });
  if (error) return fail(back, "Inscription à l'examen impossible.");
  refreshErp();
}

// A passed exam also raises the candidate's recorded German level.
export async function updateExam(examId: string, fd: FormData) {
  await requireStaff("school");
  const supabase = await createClient();
  const status = text(fd, "status") as ExamStatus;
  const { data: exam } = await supabase
    .from("exams")
    .update({ status, score: text(fd, "score") })
    .eq("id", examId)
    .select("candidate_id, level")
    .single();

  if (exam && status === "passed") {
    const order = ["none", "a1", "a2", "b1", "b2", "c1", "c2"];
    const { data: c } = await supabase.from("candidates").select("german_level").eq("id", exam.candidate_id).single();
    if (c && order.indexOf(exam.level) > order.indexOf(c.german_level)) {
      await createAdminClient().from("candidates").update({ german_level: exam.level }).eq("id", exam.candidate_id);
    }
  }
  refreshErp();
}
