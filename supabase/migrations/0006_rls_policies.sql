-- profiles: own row, or admin.
create policy "profiles_select_own_or_admin" on profiles for select
  using (id = auth.uid() or is_admin());
create policy "profiles_update_own_or_admin" on profiles for update
  using (id = auth.uid() or is_admin());
create policy "profiles_delete_admin_only" on profiles for delete
  using (is_admin());
-- insert happens only via the handle_new_user trigger (security definer), no direct client insert policy.

-- shortage_occupations: public read of published rows; admin manages everything.
create policy "occupations_select_published_or_admin" on shortage_occupations for select
  using (is_published = true or is_admin());
create policy "occupations_write_admin_only" on shortage_occupations for insert
  with check (is_admin());
create policy "occupations_update_admin_only" on shortage_occupations for update
  using (is_admin());
create policy "occupations_delete_admin_only" on shortage_occupations for delete
  using (is_admin());

-- candidates: own row (candidate); admin (all); validated employers see only rows
-- flagged is_visible_to_employers, and only via candidates_public_view (grant below).
create policy "candidates_select_own_or_admin" on candidates for select
  using (id = auth.uid() or is_admin());
create policy "candidates_select_visible_to_employers" on candidates for select
  using (is_validated_employer() and is_visible_to_employers = true);
create policy "candidates_insert_own" on candidates for insert
  with check (id = auth.uid());
create policy "candidates_update_own_or_admin" on candidates for update
  using (id = auth.uid() or is_admin());

revoke all on candidates_public_view from anon, authenticated;
grant select on candidates_public_view to authenticated;

-- employers: own row (employer, limited by app-layer field checks); admin (all).
create policy "employers_select_own_or_admin" on employers for select
  using (id = auth.uid() or is_admin());
create policy "employers_insert_own" on employers for insert
  with check (id = auth.uid());
create policy "employers_update_own_or_admin" on employers for update
  using (id = auth.uid() or is_admin());

-- staffing_requests: employer sees/manages only their own rows, and only once validated;
-- admin sees/manages all. Candidates have no access at all (no job-board browsing).
create policy "staffing_requests_select_own_or_admin" on staffing_requests for select
  using (
    is_admin()
    or employer_id = auth.uid()
  );
create policy "staffing_requests_insert_validated_employer" on staffing_requests for insert
  with check (
    employer_id = auth.uid()
    and is_validated_employer()
  );
create policy "staffing_requests_update_own_or_admin" on staffing_requests for update
  using (is_admin() or employer_id = auth.uid());
create policy "staffing_requests_delete_own_or_admin" on staffing_requests for delete
  using (is_admin() or employer_id = auth.uid());

-- contact_messages: anyone can submit; only admin can read.
create policy "contact_messages_insert_public" on contact_messages for insert
  with check (true);
create policy "contact_messages_select_admin_only" on contact_messages for select
  using (is_admin());
create policy "contact_messages_update_admin_only" on contact_messages for update
  using (is_admin());

-- appointments: anyone can book; only admin can read/manage the base table (protects
-- visitor PII). Public availability is computed via appointments_availability_view instead.
create policy "appointments_insert_public" on appointments for insert
  with check (true);
create policy "appointments_select_admin_only" on appointments for select
  using (is_admin());
create policy "appointments_update_admin_only" on appointments for update
  using (is_admin());

revoke all on appointments_availability_view from anon, authenticated;
grant select on appointments_availability_view to anon, authenticated;
