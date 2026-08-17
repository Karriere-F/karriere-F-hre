"use client";

import { useTransition } from "react";
import { markContactMessageHandled } from "@/actions/admin-actions";

export function ContactMessageToggle({
  messageId,
  handled,
}: {
  messageId: string;
  handled: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await markContactMessageHandled(messageId, !handled);
        })
      }
      className={`text-xs rounded-full px-3 py-1.5 font-medium transition-colors disabled:opacity-50 ${
        handled
          ? "bg-brand-good/10 text-brand-good border border-brand-good"
          : "bg-brand-grid/50 text-brand-ink-muted border border-brand-grid"
      }`}
    >
      {handled ? "Traité" : "À traiter"}
    </button>
  );
}
