"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "../../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  employerSignupSchema,
  type EmployerSignupInput,
} from "@/lib/validation/employer-schema";
import { PageHero } from "@/components/marketing/page-hero";

export default function EmployerSignupPage() {
  const t = useTranslations("employer.signup");
  const tLogin = useTranslations("login");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmployerSignupInput>({ resolver: zodResolver(employerSignupSchema) });

  const onSubmit = async (data: EmployerSignupInput) => {
    setError(null);
    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          intended_role: "employer",
          full_name: data.fullName,
          company_name: data.companyName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    router.push("/employer/pending");
  };

  return (
    <div>
      <PageHero title={t("title")} />
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              Nom du contact
            </label>
            <input
              {...register("fullName")}
              className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              Nom de l&apos;entreprise
            </label>
            <input
              {...register("companyName")}
              className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
            />
            {errors.companyName && (
              <p className="text-xs text-red-600 mt-1">{errors.companyName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {tLogin("email")}
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
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
              className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
          >
            {t("title")}
          </button>
        </form>
      </div>
    </div>
  );
}
