import "server-only";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getLocale } from "next-intl/server";
import { createClient } from "@/lib/supabase/server";
import type { StaffRole } from "@/types/database.types";

type Supabase = Awaited<ReturnType<typeof createClient>>;

export type TeamMember = {
  id: string;
  full_name: string | null;
  email: string | null;
  role: string;
  staff_role: StaffRole | null;
  staff_active: boolean;
};

// Admin + staff profiles, used for owner/assignee/trainer pickers and for turning ids into
// names without ambiguous PostgREST embeds (several columns point at profiles).
export async function getTeam(supabase: Supabase) {
  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, email, role, staff_role, staff_active")
    .in("role", ["admin", "staff"])
    .order("full_name");
  return (data ?? []) as TeamMember[];
}

export function nameOf(team: TeamMember[], id: string | null) {
  if (!id) return "";
  const m = team.find((t) => t.id === id);
  return m?.full_name || m?.email || "";
}

export type CandidateOption = { id: string; name: string };

export async function getCandidateOptions(supabase: Supabase) {
  const { data } = await supabase
    .from("candidates")
    .select("id, profiles(full_name, email)")
    .returns<{ id: string; profiles: { full_name: string | null; email: string | null } | null }[]>();
  return (data ?? [])
    .map((c) => ({ id: c.id, name: c.profiles?.full_name || c.profiles?.email || c.id }))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

export async function getEmployerOptions(supabase: Supabase) {
  const { data } = await supabase
    .from("employers")
    .select("id, company_name")
    .order("company_name");
  return (data ?? []).map((e) => ({ id: e.id, name: e.company_name || e.id }));
}

// ERP routes are identical in every locale, so a plain prefixed path is safe here.
export async function erpRedirect(path: string, params?: Record<string, string>): Promise<never> {
  const locale = await getLocale();
  const qs = params ? "?" + new URLSearchParams(params).toString() : "";
  redirect(`/${locale}${path}${qs}`);
}

export const fail = (path: string, message: string) => erpRedirect(path, { erreur: message });

export function text(fd: FormData, key: string) {
  const v = fd.get(key);
  const s = typeof v === "string" ? v.trim() : "";
  return s === "" ? null : s;
}

export function number(fd: FormData, key: string) {
  const s = text(fd, key);
  if (s === null) return null;
  const n = Number(s.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

// Every ERP page reads live data; after a mutation, refresh the whole ERP subtree (the
// pages sit under [locale], so plain "/erp/..." paths would not match).
export function refreshErp() {
  revalidatePath("/[locale]/erp", "layout");
}
