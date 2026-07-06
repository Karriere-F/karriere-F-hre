-- Enums and the profiles table, 1:1 with auth.users.

create type user_role as enum ('candidate', 'employer', 'admin');

create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  role          user_role not null default 'candidate',
  full_name     text,
  phone         text,
  locale_pref   text default 'fr',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table profiles enable row level security;

create or replace function is_admin() returns boolean as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$ language sql security definer stable;
