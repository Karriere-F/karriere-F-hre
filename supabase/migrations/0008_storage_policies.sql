-- Private bucket for candidate CVs. Files are stored at "{candidate_id}/cv.pdf".
insert into storage.buckets (id, name, public)
values ('cv-uploads', 'cv-uploads', false)
on conflict (id) do nothing;

-- Candidate manages only files under their own uid folder.
create policy "cv_candidate_insert_own" on storage.objects for insert
  with check (
    bucket_id = 'cv-uploads'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "cv_candidate_update_own" on storage.objects for update
  using (
    bucket_id = 'cv-uploads'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "cv_candidate_delete_own" on storage.objects for delete
  using (
    bucket_id = 'cv-uploads'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "cv_select_own_or_admin_or_visible_to_employer" on storage.objects for select
  using (
    bucket_id = 'cv-uploads'
    and (
      (storage.foldername(name))[1] = auth.uid()::text
      or is_admin()
      or (
        is_validated_employer()
        and exists (
          select 1 from candidates
          where candidates.id::text = (storage.foldername(name))[1]
          and candidates.is_visible_to_employers = true
        )
      )
    )
  );
