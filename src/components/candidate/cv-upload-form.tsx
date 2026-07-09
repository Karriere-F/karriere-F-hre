"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { uploadCandidateCv } from "@/actions/candidate-actions";

export function CvUploadForm({ currentPath }: { currentPath: string | null }) {
  const t = useTranslations("candidate.cv");
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (formData: FormData) => {
    setMessage(null);
    startTransition(async () => {
      const result = await uploadCandidateCv(formData);
      setMessage(result.ok ? t("success") : `${t("errorPrefix")} ${result.error}`);
    });
  };

  return (
    <div className="max-w-md">
      {currentPath && (
        <p className="text-sm text-brand-ink-secondary mb-4">{t("alreadyUploaded")}</p>
      )}
      <form action={onSubmit} className="flex flex-col gap-4">
        <input type="file" name="cv" accept="application/pdf" required />
        <button
          type="submit"
          disabled={isPending}
          className="self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
        >
          {t("upload")}
        </button>
        {message && <p className="text-sm text-brand-ink-secondary">{message}</p>}
      </form>
    </div>
  );
}
