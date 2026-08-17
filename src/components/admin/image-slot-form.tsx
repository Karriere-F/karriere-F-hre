"use client";

import { useState, useTransition } from "react";
import { upsertSiteImage } from "@/actions/content-actions";
import type { ImageSlotKey } from "@/lib/content/content-schema";

export function ImageSlotForm({
  slotKey,
  label,
  currentUrl,
}: {
  slotKey: ImageSlotKey;
  label: string;
  currentUrl: string | null;
}) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (formData: FormData) => {
    setMessage(null);
    startTransition(async () => {
      const result = await upsertSiteImage(slotKey, formData);
      setMessage(result.ok ? "Image mise à jour." : `Erreur : ${result.error}`);
    });
  };

  return (
    <div className="rounded-lg border border-brand-grid p-4 flex items-center gap-6">
      <div className="h-20 w-20 rounded bg-brand-card border border-brand-grid flex items-center justify-center overflow-hidden shrink-0">
        {currentUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={currentUrl} alt={label} className="h-full w-full object-contain" />
        ) : (
          <span className="text-xs text-brand-ink-muted">Aucune</span>
        )}
      </div>
      <div className="flex-1">
        <p className="text-brand-black font-medium mb-2">{label}</p>
        <form action={onSubmit} className="flex items-center gap-3">
          <input type="file" name="image" accept="image/*" required />
          <button
            type="submit"
            disabled={isPending}
            className="text-xs rounded-full bg-brand-gold px-4 py-1.5 font-medium text-brand-black hover:bg-brand-gold-light transition-colors disabled:opacity-50"
          >
            Remplacer
          </button>
        </form>
        {message && <p className="text-xs text-brand-ink-secondary mt-2">{message}</p>}
      </div>
    </div>
  );
}
