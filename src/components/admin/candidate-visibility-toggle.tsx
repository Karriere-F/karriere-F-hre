"use client";

import { useTransition } from "react";
import { toggleCandidateVisibility } from "@/actions/admin-actions";

export function CandidateVisibilityToggle({
  candidateId,
  visible,
}: {
  candidateId: string;
  visible: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await toggleCandidateVisibility(candidateId, !visible);
        })
      }
      className={`text-xs rounded-full px-3 py-1.5 font-medium transition-colors disabled:opacity-50 ${
        visible
          ? "bg-brand-good/10 text-brand-good border border-brand-good"
          : "bg-brand-grid/50 text-brand-ink-muted border border-brand-grid"
      }`}
    >
      {visible ? "Visible aux employeurs" : "Masqué"}
    </button>
  );
}
