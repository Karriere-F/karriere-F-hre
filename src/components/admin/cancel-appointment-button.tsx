"use client";

import { useTransition } from "react";
import { cancelAppointment } from "@/actions/admin-actions";

export function CancelAppointmentButton({ appointmentId }: { appointmentId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await cancelAppointment(appointmentId);
        })
      }
      className="text-xs rounded-full border border-brand-grid px-3 py-1.5 font-medium text-brand-ink-muted hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
    >
      Annuler
    </button>
  );
}
