"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "../../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  candidateSignupSchema,
  type CandidateSignupInput,
} from "@/lib/validation/candidate-schema";
import { PageHero } from "@/components/marketing/page-hero";

const inputClass =
  "w-full rounded border border-brand-grid px-3 py-2 text-sm transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20";

export default function CandidateSignupPage() {
  const t = useTranslations("candidate.signup");
  const tLogin = useTranslations("login");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CandidateSignupInput>({ resolver: zodResolver(candidateSignupSchema) });

  const onSubmit = async (data: CandidateSignupInput) => {
    setError(null);
    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          intended_role: "candidate",
          full_name: data.fullName,
          needs_training: data.needsTraining === "true",
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    router.push("/candidate/dashboard");
  };

  return (
    <div>
      <PageHero title={t("title")} />
      <div className="animate-fade-up mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {t("fullNameLabel")}
            </label>
            <input
              {...register("fullName")}
              className={inputClass}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {tLogin("email")}
            </label>
            <input
              type="email"
              {...register("email")}
              className={inputClass}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {tLogin("password")}
            </label>
            <input
              type="password"
              {...register("password")}
              className={inputClass}
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-2">
              {t("germanLevelLabel")}
            </label>
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" value="false" {...register("needsTraining")} />
                {t("fastTrackOption")}
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="true" {...register("needsTraining")} defaultChecked />
                {t("fullTrainingOption")}
              </label>
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150 disabled:opacity-50"
          >
            {t("title")}
          </button>
        </form>
      </div>
    </div>
  );
}
