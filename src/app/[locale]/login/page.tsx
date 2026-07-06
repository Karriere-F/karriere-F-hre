"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { useRouter } from "../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/client";
import { PageHero } from "@/components/marketing/page-hero";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
type LoginInput = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const t = useTranslations("login");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginInput) => {
    setError(null);
    const supabase = createClient();
    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword(data);

    if (signInError || !signInData.user) {
      setError(signInError?.message ?? "login_failed");
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", signInData.user.id)
      .single();

    if (profile?.role === "admin") {
      router.push("/admin");
    } else if (profile?.role === "employer") {
      router.push("/employer/dashboard");
    } else {
      router.push("/candidate/dashboard");
    }
  };

  return (
    <div>
      <PageHero title={t("title")} />
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-brand-ink-secondary mb-1">
              {t("email")}
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
              {t("password")}
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
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
