import { getLocale } from "next-intl/server";
import { redirect } from "../../../i18n/navigation";
import { requireRole } from "./require-role";
import { createClient } from "@/lib/supabase/server";

export async function requireValidatedEmployer() {
  const locale = await getLocale();
  const current = await requireRole("employer");
  const supabase = await createClient();

  const { data: employer } = await supabase
    .from("employers")
    .select("*")
    .eq("id", current.user.id)
    .single();

  if (employer?.status !== "validated") {
    redirect({ href: "/employer/pending", locale });
  }

  return { ...current, employer: employer! };
}
