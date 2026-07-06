-- Assigns role + creates the matching candidates/employers row at signup time, driven by
-- metadata the signup form passes via supabase.auth.signUp({ options: { data: {...} } }).
-- Role is never trusted from client state after the fact — this trigger is the only path
-- that can create a profiles row, and it runs as security definer.

create or replace function handle_new_user() returns trigger as $$
begin
  insert into public.profiles (id, role, full_name)
  values (
    new.id,
    coalesce((new.raw_user_meta_data->>'intended_role')::user_role, 'candidate'),
    new.raw_user_meta_data->>'full_name'
  );

  if (new.raw_user_meta_data->>'intended_role') = 'employer' then
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

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
