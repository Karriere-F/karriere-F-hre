create type german_level as enum ('none', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2');
create type candidate_status as enum ('new', 'in_training', 'ready', 'placed', 'inactive');
create type employer_status as enum ('pending', 'validated', 'rejected', 'suspended');

create table candidates (
  id                      uuid primary key references profiles(id) on delete cascade,
  german_level            german_level not null default 'none',
  target_occupation_id    uuid references shortage_occupations(id),
  -- true = "Full Training" track (needs A1->B2 course), false = "Fast Track" (already B2)
  needs_training          boolean not null default true,
  status                  candidate_status not null default 'new',
  cv_storage_path         text,
  bio                     text,
  years_experience        integer,
  is_visible_to_employers boolean not null default false,
  admin_notes             text,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

create table employers (
  id                        uuid primary key references profiles(id) on delete cascade,
  company_name              text not null,
  company_registration_no  text,
  industry                  text,
  contact_person            text,
  website                   text,
  status                    employer_status not null default 'pending',
  validated_at              timestamptz,
  validated_by              uuid references profiles(id),
  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now()
);

alter table candidates enable row level security;
alter table employers enable row level security;

create or replace function is_validated_employer() returns boolean as $$
  select exists (select 1 from employers where id = auth.uid() and status = 'validated');
$$ language sql security definer stable;

-- Employer-facing view of candidates: omits admin_notes and other internal-only fields.
-- security_invoker=true is critical here: it makes the view enforce RLS using the
-- QUERYING user's own permissions rather than the view owner's, so the
-- "candidates_select_visible_to_employers" policy (is_validated_employer() AND
-- is_visible_to_employers = true) actually applies when read through this view. Without
-- it, Postgres views run with the owner's privileges and would silently bypass RLS,
-- letting any authenticated user see every candidate's data through the view.
create view candidates_public_view
  with (security_invoker = true) as
  select id, german_level, target_occupation_id, status, bio, years_experience,
         cv_storage_path, is_visible_to_employers, created_at
  from candidates;
