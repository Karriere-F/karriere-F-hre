import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

// Plain anon client with no cookie/session dependency -- safe to use in contexts without
// a request scope (sitemap.ts, generateStaticParams) where next/headers' cookies() throws.
// Only ever reads publicly-readable, RLS-permitted rows (e.g. published occupations).
export function createPublicClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
