-- Removes the first ERP attempt (0012_erp.sql) at the founder's request; the ERP will be
-- rebuilt step by step. All ERP tables were empty when this ran.
--
-- KEPT on purpose: the security trigger guard_profile_privileges, which stops a signed-in
-- user from setting their own profiles.role (e.g. to 'admin') through the REST API. It is
-- rewritten below to check only the role column, since the staff columns go away.
-- The 'staff' value stays in the user_role enum (Postgres cannot drop enum values); no
-- profile uses it.

drop view if exists invoice_summary;

drop table if exists
  payments, invoice_lines, invoices, expenses,
  attendance, enrollments, exams, courses,
  tasks, candidate_documents, placement_events, placements
  cascade;

drop sequence if exists invoice_number_seq;

drop policy if exists "erp_documents_read_staff" on storage.objects;
drop policy if exists "erp_documents_insert_recruitment" on storage.objects;
drop policy if exists "erp_documents_update_recruitment" on storage.objects;
drop policy if exists "erp_documents_delete_recruitment" on storage.objects;

drop policy if exists "profiles_select_staff" on profiles;
drop policy if exists "candidates_select_staff" on candidates;
drop policy if exists "candidates_update_recruitment" on candidates;
drop policy if exists "employers_select_staff" on employers;
drop policy if exists "staffing_requests_select_staff" on staffing_requests;
drop policy if exists "appointments_select_staff" on appointments;
drop policy if exists "occupations_select_staff" on shortage_occupations;

create or replace function guard_profile_privileges() returns trigger as $$
begin
  if new.role is distinct from old.role
     and auth.uid() is not null
     and not exists (select 1 from profiles where id = auth.uid() and role::text = 'admin')
  then
    raise exception 'not allowed to change role';
  end if;
  return new;
end;
$$ language plpgsql security definer set search_path = public;

drop function if exists erp_can_write(text);
drop function if exists is_staff();

alter table profiles
  drop column if exists staff_role,
  drop column if exists staff_active,
  drop column if exists email;

drop type if exists
  staff_role, placement_stage, document_status, task_status, task_priority,
  course_status, enrollment_status, exam_status, invoice_status, payment_method;

notify pgrst, 'reload schema';
