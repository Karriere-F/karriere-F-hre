import { COURSE_STATUSES, GERMAN_LEVELS } from "@/lib/erp/labels";
import type { TeamMember } from "@/lib/erp/server";
import type { CourseRow } from "@/types/database.types";
import { Field, Select, inputClass } from "./ui";

export function CourseFields({ team, course }: { team: TeamMember[]; course?: CourseRow }) {
  return (
    <>
      <Field label="Nom de la classe *">
        <input name="name" required defaultValue={course?.name} placeholder="Ex. A1 soir janvier" className={inputClass} />
      </Field>
      <Field label="Niveau *">
        <Select name="level" options={GERMAN_LEVELS.filter((l) => l.key !== "none")} defaultValue={course?.level ?? "a1"} />
      </Field>
      <Field label="Statut">
        <Select name="status" options={COURSE_STATUSES} defaultValue={course?.status ?? "planned"} />
      </Field>
      <Field label="Début">
        <input name="start_date" type="date" defaultValue={course?.start_date ?? ""} className={inputClass} />
      </Field>
      <Field label="Fin">
        <input name="end_date" type="date" defaultValue={course?.end_date ?? ""} className={inputClass} />
      </Field>
      <Field label="Places">
        <input name="capacity" type="number" min={1} defaultValue={course?.capacity ?? ""} className={inputClass} />
      </Field>
      <Field label="Horaires">
        <input name="schedule" defaultValue={course?.schedule ?? ""} placeholder="Lun, mer, ven 18h à 20h" className={inputClass} />
      </Field>
      <Field label="Lieu">
        <input name="location" defaultValue={course?.location ?? ""} placeholder="Douala ou en ligne" className={inputClass} />
      </Field>
      <Field label="Formateur">
        <Select
          name="trainer_id"
          options={team.filter((m) => m.staff_active).map((m) => ({ key: m.id, label: m.full_name || m.email || m.id }))}
          defaultValue={course?.trainer_id}
          empty="Non attribué"
        />
      </Field>
    </>
  );
}
