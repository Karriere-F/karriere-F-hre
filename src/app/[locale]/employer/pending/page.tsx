import { getTranslations, getLocale } from "next-intl/server";
import { requireRole } from "@/lib/auth/require-role";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "../../../../../i18n/navigation";
import { PageHero } from "@/components/marketing/page-hero";

export default async function EmployerPendingPage() {
  const t = await getTranslations("employer.pending");
  const locale = await getLocale();
  const current = await requireRole("employer");
  const supabase = await createClient();

  const { data: employer } = await supabase
    .from("employers")
    .select("status")
    .eq("id", current.user.id)
    .single();

  if (employer?.status === "validated") {
    redirect({ href: "/employer/dashboard", locale });
  }

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("body")} />
    </div>
  );
}
