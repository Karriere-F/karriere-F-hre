import { redirect } from "../../../i18n/navigation";
import { getLocale } from "next-intl/server";
import { getCurrentProfile } from "./get-current-profile";
import type { UserRole } from "@/types/database.types";

export async function requireRole(role: UserRole) {
  const locale = await getLocale();
  const current = await getCurrentProfile();

  if (!current) {
    redirect({ href: "/login", locale });
  }
  if (current!.profile.role !== role) {
    redirect({ href: "/login", locale });
  }

  return current!;
}
