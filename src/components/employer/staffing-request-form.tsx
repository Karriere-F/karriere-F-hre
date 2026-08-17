"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import {
  staffingRequestSchema,
  type StaffingRequestInput,
} from "@/lib/validation/staffing-request-schema";
import { createStaffingRequest } from "@/actions/employer-actions";
import { useRouter } from "../../../i18n/navigation";

const LEVELS = ["none", "a1", "a2", "b1", "b2", "c1", "c2"] as const;

export function StaffingRequestForm() {
  const t = useTranslations("employer.requestForm");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StaffingRequestInput>({
    resolver: zodResolver(staffingRequestSchema) as Resolver<StaffingRequestInput>,
  });

  const onSubmit = async (data: StaffingRequestInput) => {
    setError(null);
    const result = await createStaffingRequest(data);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/employer/requests");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("professionLabel")}
        </label>
        <input
          {...register("professionTitle")}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
        {errors.professionTitle && (
          <p className="text-xs text-red-600 mt-1">{errors.professionTitle.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("headcountLabel")}
        </label>
        <input
          type="number"
          {...register("headcountNeeded")}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
        {errors.headcountNeeded && (
          <p className="text-xs text-red-600 mt-1">{errors.headcountNeeded.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("germanLevelLabel")}
        </label>
        <select
          {...register("germanLevelRequired")}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        >
          {LEVELS.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("descriptionLabel")}
        </label>
        <textarea
          {...register("description")}
          rows={5}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
      >
        {t("submit")}
      </button>
    </form>
  );
}
