create type staffing_request_status as enum ('open', 'in_progress', 'fulfilled', 'closed');

create table staffing_requests (
  id                     uuid primary key default gen_random_uuid(),
  employer_id            uuid not null references employers(id) on delete cascade,
  occupation_id          uuid references shortage_occupations(id),
  profession_title       text not null,
  headcount_needed       integer not null default 1,
  description            text,
  german_level_required  german_level default 'b2',
  status                 staffing_request_status not null default 'open',
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

alter table staffing_requests enable row level security;
