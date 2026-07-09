import { getTranslations } from "next-intl/server";
import { requireValidatedEmployer } from "@/lib/auth/require-validated-employer";
import { StaffingRequestForm } from "@/components/employer/staffing-request-form";

export default async function NewStaffingRequestPage() {
  const t = await getTranslations("employer.requests");
  await requireValidatedEmployer();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-6">{t("newButton")}</h1>
      <StaffingRequestForm />
    </div>
  );
}
