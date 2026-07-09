"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import {
  candidateProfileSchema,
  type CandidateProfileInput,
} from "@/lib/validation/candidate-schema";
import { updateCandidateProfile } from "@/actions/candidate-actions";

const LEVELS = ["none", "a1", "a2", "b1", "b2", "c1", "c2"] as const;

export function ProfileForm({
  defaultValues,
}: {
  defaultValues: Partial<CandidateProfileInput>;
}) {
  const t = useTranslations("candidate.profile");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CandidateProfileInput>({
    resolver: zodResolver(candidateProfileSchema) as Resolver<CandidateProfileInput>,
    defaultValues,
  });

  const onSubmit = async (data: CandidateProfileInput) => {
    setSuccess(false);
    const result = await updateCandidateProfile(data);
    if (result.ok) setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("germanLevelLabel")}
        </label>
        <select
          {...register("germanLevel")}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        >
          {LEVELS.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
        {errors.germanLevel && (
          <p className="text-xs text-red-600 mt-1">{errors.germanLevel.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("yearsExperienceLabel")}
        </label>
        <input
          type="number"
          {...register("yearsExperience")}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">{t("bioLabel")}</label>
        <textarea
          {...register("bio")}
          rows={5}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
      </div>

      {success && <p className="text-sm text-brand-good">{t("updated")}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
      >
        {t("save")}
      </button>
    </form>
  );
}
