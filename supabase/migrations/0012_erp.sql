-- ERP (internal back office): team roles, placement pipeline, candidate documents, tasks,
-- German school (classes, enrollments, attendance, exams) and finance (invoices, payments,
-- expenses). Everything here is internal: no anon access, no candidate/employer access.
--
-- Access model:
--   admin (founder)                  -> everything, plus team management
--   staff + staff_role = manager     -> everything except team management
--   staff + staff_role = recruiter   -> recruitment (dossiers, placements, documents)
--   staff + staff_role = trainer     -> German school
--   staff + staff_role = accountant  -> finance
--   every active staff member        -> reads recruitment + school, manages tasks
--
-- 'staff' is compared as text (role::text) below so this file can add the enum value and
-- use it in the same transaction without hitting "unsafe use of new enum value".

alter type user_role add value if not exists 'staff';

create type staff_role as enum ('manager', 'recruiter', 'trainer', 'accountant');

alter table profiles
  add column staff_role   staff_role,
  add column staff_active boolean not null default true,
  add column email        text;

create or replace function is_staff() returns boolean as $$
  select exists (
    select 1 from profiles
    where id = auth.uid()
      and (role::text = 'admin' or (role::text = 'staff' and staff_active))
  );
$$ language sql security definer stable set search_path = public;

-- area: 'recruitment' | 'school' | 'finance'
create or replace function erp_can_write(area text) returns boolean as $$
  select exists (
    select 1 from profiles
    where id = auth.uid()
      and (
        role::text = 'admin'
        or (
          role::text = 'staff' and staff_active and (
            staff_role = 'manager'
            or (area = 'recruitment' and staff_role = 'recruiter')
            or (area = 'school' and staff_role = 'trainer')
            or (area = 'finance' and staff_role = 'accountant')
          )
        )
      )
  );
$$ language sql security definer stable set search_path = public;

-- SECURITY FIX: "profiles_update_own_or_admin" lets a user update their own row with no
-- column restriction, so anyone signed in could set role = 'admin' (or become staff)
-- through the REST API. Privileged columns may now only change when an admin does it, or
-- from the service role (auth.uid() is null: provisioning scripts, ERP team actions).
create or replace function guard_profile_privileges() returns trigger as $$
begin
  if (new.role is distinct from old.role
      or new.staff_role is distinct from old.staff_role
      or new.staff_active is distinct from old.staff_active)
     and auth.uid() is not null
     and not exists (select 1 from profiles where id = auth.uid() and role::text = 'admin')
  then
    raise exception 'not allowed to change role';
  end if;
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger profiles_guard_privileges
  before update on profiles
  for each row execute function guard_profile_privileges();

-- Staff must see the existing site data the ERP builds on.
create policy "profiles_select_staff" on profiles for select using (is_staff());
create policy "candidates_select_staff" on candidates for select using (is_staff());
create policy "candidates_update_recruitment" on candidates for update
  using (erp_can_write('recruitment'));
create policy "employers_select_staff" on employers for select using (is_staff());
create policy "staffing_requests_select_staff" on staffing_requests for select
  using (is_staff());
create policy "appointments_select_staff" on appointments for select using (is_staff());
create policy "occupations_select_staff" on shortage_occupations for select
  using (is_staff());

-- ---------------------------------------------------------------------------------------
-- Recruitment: placements + history
-- ---------------------------------------------------------------------------------------

create type placement_stage as enum (
  'training', 'recognition', 'matching', 'interview', 'contract', 'visa', 'travel',
  'placed', 'dropped'
);

create table placements (
  id                   uuid primary key default gen_random_uuid(),
  candidate_id         uuid not null references candidates(id) on delete cascade,
  employer_id          uuid references employers(id) on delete set null,
  staffing_request_id  uuid references staffing_requests(id) on delete set null,
  job_title            text not null,
  track                text not null default 'fachkraft', -- fachkraft | ausbildung | chancenkarte
  stage                placement_stage not null default 'training',
  owner_id             uuid references profiles(id) on delete set null,
  target_start_date    date,
  germany_city         text,
  notes                text,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create table placement_events (
  id            uuid primary key default gen_random_uuid(),
  placement_id  uuid not null references placements(id) on delete cascade,
  stage         placement_stage,
  note          text,
  created_by    uuid references profiles(id) on delete set null,
  created_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------------------------
-- Candidate documents (passport, diplomas, translations, recognition, visa...)
-- ---------------------------------------------------------------------------------------

create type document_status as enum (
  'missing', 'received', 'translated', 'certified', 'submitted', 'validated', 'expired'
);

create table candidate_documents (
  id            uuid primary key default gen_random_uuid(),
  candidate_id  uuid not null references candidates(id) on delete cascade,
  doc_type      text not null,
  status        document_status not null default 'missing',
  storage_path  text,
  expires_on    date,
  notes         text,
  updated_by    uuid references profiles(id) on delete set null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (candidate_id, doc_type)
);

-- ---------------------------------------------------------------------------------------
-- Tasks
-- ---------------------------------------------------------------------------------------

create type task_status as enum ('todo', 'in_progress', 'done');
create type task_priority as enum ('low', 'normal', 'high');

create table tasks (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  description   text,
  status        task_status not null default 'todo',
  priority      task_priority not null default 'normal',
  due_date      date,
  assignee_id   uuid references profiles(id) on delete set null,
  candidate_id  uuid references candidates(id) on delete cascade,
  placement_id  uuid references placements(id) on delete cascade,
  employer_id   uuid references employers(id) on delete cascade,
  created_by    uuid references profiles(id) on delete set null,
  completed_at  timestamptz,
  created_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------------------------
-- German school
-- ---------------------------------------------------------------------------------------

create type course_status as enum ('planned', 'running', 'finished', 'cancelled');
create type enrollment_status as enum ('enrolled', 'completed', 'dropped');
create type exam_status as enum ('registered', 'passed', 'partial', 'failed', 'absent');

create table courses (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  level       german_level not null,
  start_date  date,
  end_date    date,
  schedule    text,
  location    text,
  capacity    integer,
  trainer_id  uuid references profiles(id) on delete set null,
  status      course_status not null default 'planned',
  notes       text,
  created_at  timestamptz not null default now()
);

create table enrollments (
  id            uuid primary key default gen_random_uuid(),
  course_id     uuid not null references courses(id) on delete cascade,
  candidate_id  uuid not null references candidates(id) on delete cascade,
  status        enrollment_status not null default 'enrolled',
  final_result  text,
  created_at    timestamptz not null default now(),
  unique (course_id, candidate_id)
);

create table attendance (
  enrollment_id  uuid not null references enrollments(id) on delete cascade,
  session_date   date not null,
  present        boolean not null,
  primary key (enrollment_id, session_date)
);

create table exams (
  id            uuid primary key default gen_random_uuid(),
  candidate_id  uuid not null references candidates(id) on delete cascade,
  provider      text not null, -- goethe | telc | osd | ecl
  level         german_level not null,
  exam_date     date,
  status        exam_status not null default 'registered',
  score         text,
  notes         text,
  created_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------------------------
-- Finance
-- ---------------------------------------------------------------------------------------

create type invoice_status as enum ('draft', 'sent', 'paid', 'cancelled');
create type payment_method as enum (
  'cash', 'orange_money', 'mtn_momo', 'bank_transfer', 'card', 'other'
);

create sequence invoice_number_seq;

create table invoices (
  id            uuid primary key default gen_random_uuid(),
  number        text not null unique
                  default 'KF-' || to_char(now(), 'YYYY') || '-'
                          || lpad(nextval('invoice_number_seq')::text, 4, '0'),
  candidate_id  uuid references candidates(id) on delete set null,
  employer_id   uuid references employers(id) on delete set null,
  client_name   text not null,
  client_address text,
  currency      text not null default 'XAF' check (currency in ('XAF', 'EUR')),
  issue_date    date not null default current_date,
  due_date      date,
  status        invoice_status not null default 'draft',
  notes         text,
  created_by    uuid references profiles(id) on delete set null,
  created_at    timestamptz not null default now()
);

create table invoice_lines (
  id          uuid primary key default gen_random_uuid(),
  invoice_id  uuid not null references invoices(id) on delete cascade,
  description text not null,
  quantity    numeric(10, 2) not null default 1,
  unit_price  numeric(14, 2) not null,
  position    integer not null default 0
);

create table payments (
  id          uuid primary key default gen_random_uuid(),
  invoice_id  uuid not null references invoices(id) on delete cascade,
  amount      numeric(14, 2) not null check (amount > 0),
  paid_on     date not null default current_date,
  method      payment_method not null default 'cash',
  reference   text,
  created_by  uuid references profiles(id) on delete set null,
  created_at  timestamptz not null default now()
);

create table expenses (
  id          uuid primary key default gen_random_uuid(),
  spent_on    date not null default current_date,
  category    text not null,
  description text,
  vendor      text,
  amount      numeric(14, 2) not null check (amount > 0),
  currency    text not null default 'XAF' check (currency in ('XAF', 'EUR')),
  method      payment_method not null default 'cash',
  created_by  uuid references profiles(id) on delete set null,
  created_at  timestamptz not null default now()
);

-- Totals per invoice. security_invoker so the finance RLS below still applies.
create view invoice_summary with (security_invoker = true) as
  select
    i.*,
    coalesce((select sum(l.quantity * l.unit_price) from invoice_lines l
              where l.invoice_id = i.id), 0)::numeric(14, 2) as total,
    coalesce((select sum(p.amount) from payments p
              where p.invoice_id = i.id), 0)::numeric(14, 2) as paid
  from invoices i;

-- ---------------------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------------------

alter table placements enable row level security;
alter table placement_events enable row level security;
alter table candidate_documents enable row level security;
alter table tasks enable row level security;
alter table courses enable row level security;
alter table enrollments enable row level security;
alter table attendance enable row level security;
alter table exams enable row level security;
alter table invoices enable row level security;
alter table invoice_lines enable row level security;
alter table payments enable row level security;
alter table expenses enable row level security;

-- Recruitment: all staff read, recruiters/managers write.
create policy "placements_read" on placements for select using (is_staff());
create policy "placements_write" on placements for all
  using (erp_can_write('recruitment')) with check (erp_can_write('recruitment'));
create policy "placement_events_read" on placement_events for select using (is_staff());
create policy "placement_events_write" on placement_events for all
  using (erp_can_write('recruitment')) with check (erp_can_write('recruitment'));
create policy "documents_read" on candidate_documents for select using (is_staff());
create policy "documents_write" on candidate_documents for all
  using (erp_can_write('recruitment')) with check (erp_can_write('recruitment'));

-- Tasks: shared by the whole team.
create policy "tasks_all_staff" on tasks for all using (is_staff()) with check (is_staff());

-- School: all staff read, trainers/managers write.
create policy "courses_read" on courses for select using (is_staff());
create policy "courses_write" on courses for all
  using (erp_can_write('school')) with check (erp_can_write('school'));
create policy "enrollments_read" on enrollments for select using (is_staff());
create policy "enrollments_write" on enrollments for all
  using (erp_can_write('school')) with check (erp_can_write('school'));
create policy "attendance_read" on attendance for select using (is_staff());
create policy "attendance_write" on attendance for all
  using (erp_can_write('school')) with check (erp_can_write('school'));
create policy "exams_read" on exams for select using (is_staff());
create policy "exams_write" on exams for all
  using (erp_can_write('school')) with check (erp_can_write('school'));

-- Finance: accountants/managers/admin only, read included.
create policy "invoices_finance" on invoices for all
  using (erp_can_write('finance')) with check (erp_can_write('finance'));
create policy "invoice_lines_finance" on invoice_lines for all
  using (erp_can_write('finance')) with check (erp_can_write('finance'));
create policy "payments_finance" on payments for all
  using (erp_can_write('finance')) with check (erp_can_write('finance'));
create policy "expenses_finance" on expenses for all
  using (erp_can_write('finance')) with check (erp_can_write('finance'));

grant usage, select on sequence invoice_number_seq to authenticated;

-- ---------------------------------------------------------------------------------------
-- Storage: private bucket for candidate dossier files, "{candidate_id}/{doc_type}-{ts}.ext"
-- ---------------------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('erp-documents', 'erp-documents', false)
on conflict (id) do nothing;

create policy "erp_documents_read_staff" on storage.objects for select
  using (bucket_id = 'erp-documents' and is_staff());
create policy "erp_documents_insert_recruitment" on storage.objects for insert
  with check (bucket_id = 'erp-documents' and erp_can_write('recruitment'));
create policy "erp_documents_update_recruitment" on storage.objects for update
  using (bucket_id = 'erp-documents' and erp_can_write('recruitment'));
create policy "erp_documents_delete_recruitment" on storage.objects for delete
  using (bucket_id = 'erp-documents' and erp_can_write('recruitment'));
