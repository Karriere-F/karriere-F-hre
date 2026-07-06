"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactSchema, type ContactInput } from "@/lib/validation/contact-schema";
import { submitContactMessage } from "@/actions/contact-actions";

export function ContactForm() {
  const t = useTranslations("contact");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    const result = await submitContactMessage(data);
    if (result.ok) {
      setSuccess(true);
      reset();
    }
  };

  if (success) {
    return <p className="text-brand-good font-medium">{t("formSuccess")}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("formName")}
        </label>
        <input
          {...register("name")}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
        {errors.name && (
          <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          {t("formEmail")}
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
          {t("formMessage")}
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
      >
        {t("formSubmit")}
      </button>
    </form>
  );
}
