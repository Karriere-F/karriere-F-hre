-- SECURITY FIX (privilege escalation): the previous handle_new_user() trigger derived the
-- profile role from `raw_user_meta_data->>'intended_role'`, which is supplied by the client
-- in supabase.auth.signUp({ options: { data: {...} } }) and is fully attacker-controlled.
-- Anyone could self-register with intended_role = 'admin' and obtain a profiles row with
-- role = 'admin', bypassing every RLS policy, requireRole("admin") check and the admin UI.
--
-- This migration replaces the function so that a privileged role can NEVER be self-assigned:
-- client metadata may only request 'employer'; anything else (including 'admin') becomes
-- 'candidate'. Admins must be provisioned out-of-band (manual SQL / service-role script).

create or replace function handle_new_user() returns trigger as $$
declare
  requested text := new.raw_user_meta_data->>'intended_role';
  final_role user_role;
begin
  -- Never trust a privileged role from client-supplied signup metadata.
  if requested = 'employer' then
    final_role := 'employer';
  else
    final_role := 'candidate';
  end if;

  insert into public.profiles (id, role, full_name)
  values (new.id, final_role, new.raw_user_meta_data->>'full_name');

  if final_role = 'employer' then
    insert into public.employers (id, company_name)
    values (new.id, coalesce(new.raw_user_meta_data->>'company_name', ''));
  else
    insert into public.candidates (id, needs_training)
    values (
      new.id,
      coalesce((new.raw_user_meta_data->>'needs_training')::boolean, true)
    );
  end if;

  return new;
end;
$$ language plpgsql security definer set search_path = public;

-- The trigger itself (on_auth_user_created) already points at handle_new_user(); replacing
-- the function body is sufficient.
