import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

// Service-role client — bypasses RLS. Server-only, never import from client components.
// Used for privileged operations like admin-provisioning scripts and Server Actions that
// must act across roles (e.g. validating an employer, toggling candidate visibility) after
// the caller's own role has already been checked.
export function createAdminClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
