"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signIn(_: string | null, fd: FormData) {
  const email = String(fd.get("email") ?? "").trim();
  const password = String(fd.get("password") ?? "");
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) return "Email ou mot de passe incorrect.";

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, staff_active")
    .eq("id", data.user.id)
    .single();
  const allowed = profile?.role === "admin" || (profile?.role === "staff" && profile.staff_active);
  if (!allowed) {
    await supabase.auth.signOut();
    return "Ce compte n'a pas accès à l'ERP.";
  }

  redirect("/");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
