"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireStaff } from "@/lib/erp/auth";
import { erpRedirect, fail, refreshErp, text } from "@/lib/erp/server";
import { STAFF_ROLES } from "@/lib/erp/labels";
import type { StaffRole } from "@/types/database.types";

const BACK = "/erp/equipe";

async function requireAdmin() {
  const current = await requireStaff();
  if (!current.isAdmin) throw new Error("Réservé à l'administrateur.");
  return current;
}

function staffRole(fd: FormData): StaffRole | null {
  const r = text(fd, "staff_role");
  return STAFF_ROLES.some((s) => s.key === r) ? (r as StaffRole) : null;
}

// Creates the team member's account with a temporary password the admin passes on; an
// existing site account with that email is promoted instead (its password is kept).
export async function addStaffMember(fd: FormData) {
  await requireAdmin();
  const email = text(fd, "email")?.toLowerCase();
  const fullName = text(fd, "full_name");
  const password = text(fd, "password");
  const role = staffRole(fd);
  if (!email || !fullName || !role) return fail(BACK, "Nom, email et rôle sont obligatoires.");

  const admin = createAdminClient();
  let userId: string | null = null;
  let isNew = false;

  const { data: created, error } = await admin.auth.admin.createUser({
    email,
    password: password ?? undefined,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  });
  if (created?.user) {
    if (!password || password.length < 8) {
      await admin.auth.admin.deleteUser(created.user.id);
      return fail(BACK, "Mot de passe provisoire de 8 caractères minimum requis.");
    }
    userId = created.user.id;
    isNew = true;
  } else if (error?.message.toLowerCase().includes("already")) {
    for (let page = 1; !userId && page <= 20; page++) {
      const { data } = await admin.auth.admin.listUsers({ page, perPage: 200 });
      userId = data.users.find((u) => u.email?.toLowerCase() === email)?.id ?? null;
      if (data.users.length < 200) break;
    }
  }
  if (!userId) return fail(BACK, "Impossible de créer ce compte.");

  const { data: existing } = await admin.from("profiles").select("role").eq("id", userId).single();
  if (existing?.role === "admin") return fail(BACK, "Ce compte est déjà administrateur.");
  if (existing?.role === "employer") return fail(BACK, "Cet email appartient à un compte entreprise.");

  await admin
    .from("profiles")
    .update({ role: "staff", staff_role: role, staff_active: true, full_name: fullName, email })
    .eq("id", userId);
  // The signup trigger gave the fresh account a candidate row; a team member is not one.
  if (isNew) await admin.from("candidates").delete().eq("id", userId);

  refreshErp();
  return erpRedirect(BACK, { ajoute: email });
}

export async function updateStaffMember(userId: string, fd: FormData) {
  await requireAdmin();
  const admin = createAdminClient();
  const { data: p } = await admin.from("profiles").select("role").eq("id", userId).single();
  if (p?.role !== "staff") return fail(BACK, "Seuls les membres de l'équipe sont modifiables ici.");

  await admin
    .from("profiles")
    .update({ staff_role: staffRole(fd), staff_active: fd.get("staff_active") === "on" })
    .eq("id", userId);

  const password = text(fd, "password");
  if (password) {
    if (password.length < 8) return fail(BACK, "Mot de passe de 8 caractères minimum.");
    await admin.auth.admin.updateUserById(userId, { password });
  }
  refreshErp();
}

export async function changeOwnPassword(fd: FormData) {
  await requireStaff();
  const password = text(fd, "password");
  if (!password || password.length < 8) return fail(BACK, "Mot de passe de 8 caractères minimum.");
  if (password !== text(fd, "confirm")) return fail(BACK, "Les deux mots de passe ne correspondent pas.");

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return fail(BACK, "Changement de mot de passe impossible.");
  return erpRedirect(BACK, { mdp: "1" });
}
