import "server-only";
import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/lib/auth/get-current-profile";

export type ErpArea = "recruitment" | "school" | "finance";

// Mirrors erp_can_write() in 0012_erp.sql. The database is the real gate (RLS); this only
// decides what the UI shows and lets Server Actions fail early with a clear message.
export async function requireStaff(area?: ErpArea) {
  const current = await getCurrentProfile();
  const profile = current?.profile;

  const isAdmin = profile?.role === "admin";
  const isStaff = isAdmin || (profile?.role === "staff" && profile.staff_active);

  if (!current || !isStaff) {
    redirect("/login");
  }

  const can = (a: ErpArea) =>
    isAdmin ||
    profile!.staff_role === "manager" ||
    (a === "recruitment" && profile!.staff_role === "recruiter") ||
    (a === "school" && profile!.staff_role === "trainer") ||
    (a === "finance" && profile!.staff_role === "accountant");

  if (area && !can(area)) {
    throw new Error("Accès refusé pour votre rôle.");
  }

  return { user: current!.user, profile: profile!, isAdmin, can };
}
