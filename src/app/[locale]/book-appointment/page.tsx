import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { BookingForm } from "@/components/booking/booking-form";

export default async function BookAppointmentPage() {
  const t = await getTranslations("bookAppointment");

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <BookingForm />
      </div>
    </div>
  );
}
