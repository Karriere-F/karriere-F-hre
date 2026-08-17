"use client";

import { useTransition } from "react";
import { validateEmployer, rejectEmployer } from "@/actions/admin-actions";
import type { EmployerStatus } from "@/types/database.types";

export function EmployerValidateButton({
  employerId,
  status,
}: {
  employerId: string;
  status: EmployerStatus;
}) {
  const [isPending, startTransition] = useTransition();

  if (status === "validated") {
    return <span className="text-xs text-brand-good font-medium">Validé</span>;
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await validateEmployer(employerId);
          })
        }
        className="text-xs rounded-full bg-brand-gold px-3 py-1.5 font-medium text-brand-black hover:bg-brand-gold-light transition-colors disabled:opacity-50"
      >
        Valider
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await rejectEmployer(employerId);
          })
        }
        className="text-xs rounded-full border border-brand-grid px-3 py-1.5 font-medium text-brand-ink-muted hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
      >
        Rejeter
      </button>
    </div>
  );
}
