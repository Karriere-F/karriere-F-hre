"use client";

import { useState, useTransition } from "react";
import { updateCandidateAdminFields } from "@/actions/admin-actions";
import type { CandidateStatus } from "@/types/database.types";

const STATUSES: CandidateStatus[] = ["new", "in_training", "ready", "placed", "inactive"];

export function CandidateAdminForm({
  candidateId,
  defaultNotes,
  defaultStatus,
}: {
  candidateId: string;
  defaultNotes: string;
  defaultStatus: CandidateStatus;
}) {
  const [notes, setNotes] = useState(defaultNotes);
  const [status, setStatus] = useState<CandidateStatus>(defaultStatus);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  const onSave = () => {
    setSaved(false);
    startTransition(async () => {
      const result = await updateCandidateAdminFields(candidateId, {
        adminNotes: notes,
        status,
      });
      setSaved(result.ok);
    });
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">Statut</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as CandidateStatus)}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-brand-ink-secondary mb-1">
          Notes internes (jamais visibles des employeurs)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={5}
          className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
        />
      </div>
      <button
        type="button"
        disabled={isPending}
        onClick={onSave}
        className="self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
      >
        Enregistrer
      </button>
      {saved && <p className="text-sm text-brand-good">Enregistré.</p>}
    </div>
  );
}
