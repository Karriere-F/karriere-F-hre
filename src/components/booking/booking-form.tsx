"use client";

import { useEffect, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { getAvailableSlots, bookAppointment } from "@/actions/appointment-actions";

const inputClass =
  "w-full rounded border border-brand-grid px-3 py-2 text-sm transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20";

function todayIso() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export function BookingForm() {
  const t = useTranslations("bookAppointment");
  const [date, setDate] = useState(todayIso());
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedTime(null);
    startTransition(async () => {
      const available = await getAvailableSlots(date);
      setSlots(available);
    });
  }, [date]);

  const onSubmit = async (formData: FormData) => {
    if (!selectedTime) return;
    setError(null);
    const result = await bookAppointment({
      fullName: String(formData.get("fullName")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone") ?? ""),
      appointmentDate: date,
      appointmentTime: selectedTime,
      notes: String(formData.get("notes") ?? ""),
    });

    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return <p className="animate-fade-up text-brand-good font-medium">{t("success")}</p>;
  }

  return (
    <div className="max-w-md flex flex-col gap-6">
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("selectDate")}
        </label>
        <input
          type="date"
          value={date}
          min={todayIso()}
          onChange={(e) => setDate(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm text-brand-ink-secondary mb-2">
          {t("selectTime")}
        </label>
        <div className="grid grid-cols-4 gap-2">
          {slots.map((slot, i) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedTime(slot)}
              style={{ animationDelay: `${Math.min(i, 10) * 25}ms` }}
              className={`press animate-fade-up text-sm rounded px-2 py-1.5 border transition-colors duration-150 ${
                selectedTime === slot
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "border-brand-grid text-brand-ink-secondary hover:border-brand-gold"
              }`}
            >
              {slot}
            </button>
          ))}
          {!isPending && slots.length === 0 && (
            <p className="col-span-4 text-sm text-brand-ink-muted">{t("noSlots")}</p>
          )}
        </div>
      </div>

      {selectedTime && (
        <form action={onSubmit} className="animate-fade-up flex flex-col gap-4">
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {t("formName")}
            </label>
            <input name="fullName" required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {t("formEmail")}
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {t("formPhone")}
            </label>
            <input name="phone" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {t("formNotes")}
            </label>
            <textarea name="notes" rows={3} className={inputClass} />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="press self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {t("submit")}
          </button>
        </form>
      )}
    </div>
  );
}
