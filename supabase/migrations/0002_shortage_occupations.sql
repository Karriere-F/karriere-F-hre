-- Admin-editable content: shortage occupations, multilingual (fr/de/en columns).
-- Created before candidates/employers since both reference it.

create table shortage_occupations (
  id             uuid primary key default gen_random_uuid(),
  slug           text not null unique,
  category       text not null,
  title_fr       text not null,
  title_de       text not null,
  title_en       text not null,
  description_fr text,
  description_de text,
  description_en text,
  icon           text,
  is_published   boolean not null default true,
  display_order  integer default 0,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

alter table shortage_occupations enable row level security;
