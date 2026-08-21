"use client";

import { useTransition } from "react";
import { markEvaluationHandled } from "@/actions/admin-actions";

export function EvaluationToggle({
  evaluationId,
  handled,
}: {
  evaluationId: string;
  handled: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await markEvaluationHandled(evaluationId, !handled);
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
