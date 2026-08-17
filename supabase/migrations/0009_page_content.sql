-- Generic editorial content overrides, keyed like the next-intl namespaces they shadow.
-- One row per (page_key, field_key). Each locale column is nullable: null/empty means
-- "no override yet, fall back to the static translation" (see src/lib/content/get-page-content.ts).

create table page_content (
  id           uuid primary key default gen_random_uuid(),
  page_key     text not null,        -- e.g. 'home', 'about', 'germanCourses'
  field_key    text not null,        -- e.g. 'heroTitle', 'fullTraining.levelA1'
  value_fr     text,
  value_de     text,
  value_en     text,
  updated_at   timestamptz not null default now(),
  updated_by   uuid references profiles(id),
  unique (page_key, field_key)
);

alter table page_content enable row level security;

create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger page_content_set_updated_at
  before update on page_content
  for each row execute function set_updated_at();

-- page_content: public read of everything (no draft/publish state — a field is either
-- overridden or falls back to the static translation, there's no "hidden" state);
-- admin-only write. Mirrors occupations_select_published_or_admin / occupations_write_admin_only.
create policy "page_content_select_public" on page_content for select
  using (true);
create policy "page_content_insert_admin_only" on page_content for insert
  with check (is_admin());
create policy "page_content_update_admin_only" on page_content for update
  using (is_admin());
create policy "page_content_delete_admin_only" on page_content for delete
  using (is_admin());
