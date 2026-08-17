"use client";

import { useState, useTransition } from "react";
import { upsertPageContentField } from "@/actions/content-actions";
import type { ContentPageKey } from "@/lib/content/content-schema";

const LONG_FIELD_HINTS = ["body", "subtitle", "note", "intro"];

function isLongField(fieldKey: string) {
  const lower = fieldKey.toLowerCase();
  return LONG_FIELD_HINTS.some((hint) => lower.includes(hint));
}

export function ContentFieldForm({
  pageKey,
  fieldKey,
  staticFr,
  staticDe,
  staticEn,
  dbFr,
  dbDe,
  dbEn,
}: {
  pageKey: ContentPageKey;
  fieldKey: string;
  staticFr: string;
  staticDe: string;
  staticEn: string;
  dbFr: string;
  dbDe: string;
  dbEn: string;
}) {
  const [valueFr, setValueFr] = useState(dbFr);
  const [valueDe, setValueDe] = useState(dbDe);
  const [valueEn, setValueEn] = useState(dbEn);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  const long = isLongField(fieldKey);

  const onSave = () => {
    setSaved(false);
    startTransition(async () => {
      const result = await upsertPageContentField({
        pageKey,
        fieldKey,
        valueFr,
        valueDe,
        valueEn,
      });
      setSaved(result.ok);
    });
  };

  return (
    <fieldset className="rounded-lg border border-brand-grid p-4">
      <legend className="text-sm font-medium text-brand-black px-1">{fieldKey}</legend>
      <div className="grid gap-3 sm:grid-cols-3 mt-2">
        {(
          [
            ["FR", valueFr, staticFr, setValueFr],
            ["DE", valueDe, staticDe, setValueDe],
            ["EN", valueEn, staticEn, setValueEn],
          ] as const
        ).map(([label, value, placeholder, setValue]) => (
          <div key={label}>
            <label className="block text-xs text-brand-ink-muted mb-1">{label}</label>
            {long ? (
              <textarea
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                rows={3}
                className="w-full rounded border border-brand-grid px-2 py-1.5 text-sm"
              />
            ) : (
              <input
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="w-full rounded border border-brand-grid px-2 py-1.5 text-sm"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-3">
        <button
          type="button"
          disabled={isPending}
          onClick={onSave}
          className="text-xs rounded-full bg-brand-gold px-4 py-1.5 font-medium text-brand-black hover:bg-brand-gold-light transition-colors disabled:opacity-50"
        >
          Enregistrer
        </button>
        {saved && <span className="text-xs text-brand-good">Enregistré.</span>}
      </div>
    </fieldset>
  );
}
