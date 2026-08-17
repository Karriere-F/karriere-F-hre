-- Named image "slots" the admin can fill/replace, backed by a public Storage bucket
-- (distinct from the private cv-uploads bucket). Empty by default; a slot with no row,
-- or a row with storage_path = null, both mean "no image set yet".

create table site_images (
  slot_key      text primary key,   -- e.g. 'site_logo'
  storage_path  text,               -- path within the 'site-images' bucket, null until uploaded
  alt_fr        text,
  alt_de        text,
  alt_en        text,
  updated_at    timestamptz not null default now(),
  updated_by    uuid references profiles(id)
);

alter table site_images enable row level security;

create trigger site_images_set_updated_at
  before update on site_images
  for each row execute function set_updated_at();

create policy "site_images_select_public" on site_images for select
  using (true);
create policy "site_images_insert_admin_only" on site_images for insert
  with check (is_admin());
create policy "site_images_update_admin_only" on site_images for update
  using (is_admin());
create policy "site_images_delete_admin_only" on site_images for delete
  using (is_admin());

-- New public bucket for CMS-managed marketing images.
insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true)
on conflict (id) do nothing;

-- Public can read (bucket is public, but explicit policy for clarity/consistency with
-- the cv-uploads storage policies).
create policy "site_images_storage_select_public" on storage.objects for select
  using (bucket_id = 'site-images');

-- Only admins may write/replace/delete objects in this bucket.
create policy "site_images_storage_insert_admin_only" on storage.objects for insert
  with check (bucket_id = 'site-images' and is_admin());
create policy "site_images_storage_update_admin_only" on storage.objects for update
  using (bucket_id = 'site-images' and is_admin());
create policy "site_images_storage_delete_admin_only" on storage.objects for delete
  using (bucket_id = 'site-images' and is_admin());
