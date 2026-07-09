import { getTranslations } from "next-intl/server";
import { requireValidatedEmployer } from "@/lib/auth/require-validated-employer";
import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";

export default async function EmployerDashboardPage() {
  const t = await getTranslations("employer.dashboard");
  const current = await requireValidatedEmployer();
  const supabase = await createClient();

  const { count: openRequests } = await supabase
    .from("staffing_requests")
    .select("id", { count: "exact", head: true })
    .eq("employer_id", current.user.id)
    .eq("status", "open");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-6">{t("title")}</h1>
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">{t("companyLabel")}</p>
          <p className="text-brand-black font-medium mt-1">{current.employer.company_name}</p>
        </div>
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">{t("openRequestsLabel")}</p>
          <p className="text-brand-black font-medium mt-1">{openRequests ?? 0}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/employer/requests" className="text-brand-gold-text hover:underline text-sm">
          {t("myRequestsLink")}
        </Link>
        <Link href="/employer/candidates" className="text-brand-gold-text hover:underline text-sm">
          {t("candidatePoolLink")}
        </Link>
      </div>
    </div>
  );
}
