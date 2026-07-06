"use client";

import { useState } from "react";
import { upsertOccupation } from "@/actions/admin-actions";
import { useRouter } from "../../../i18n/navigation";

export function OccupationForm({
  defaultValues,
}: {
  defaultValues?: {
    id: string;
    slug: string;
    category: string;
    title_fr: string;
    title_de: string;
    title_en: string;
    description_fr: string | null;
    description_de: string | null;
    description_en: string | null;
    is_published: boolean;
  };
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);
    const result = await upsertOccupation({
      id: defaultValues?.id,
      slug: String(formData.get("slug")),
      category: String(formData.get("category")),
      title_fr: String(formData.get("title_fr")),
      title_de: String(formData.get("title_de")),
      title_en: String(formData.get("title_en")),
      description_fr: String(formData.get("description_fr") ?? ""),
      description_de: String(formData.get("description_de") ?? ""),
      description_en: String(formData.get("description_en") ?? ""),
      is_published: formData.get("is_published") === "on",
    });
    setIsSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/admin/occupations");
  };

  return (
    <form action={onSubmit} className="flex flex-col gap-4 max-w-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-brand-ink-secondary mb-1">Slug</label>
          <input
            name="slug"
            defaultValue={defaultValues?.slug}
            required
            className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-brand-ink-secondary mb-1">Catégorie</label>
          <input
            name="category"
            defaultValue={defaultValues?.category}
            required
            className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
          />
        </div>
      </div>

      {(["fr", "de", "en"] as const).map((lang) => (
        <div key={lang} className="grid gap-2">
          <label className="block text-sm text-brand-ink-secondary">
            Titre ({lang.toUpperCase()})
          </label>
          <input
            name={`title_${lang}`}
            defaultValue={defaultValues?.[`title_${lang}` as "title_fr"]}
            required
            className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
          />
          <textarea
            name={`description_${lang}`}
            defaultValue={defaultValues?.[`description_${lang}` as "description_fr"] ?? ""}
            placeholder={`Description (${lang.toUpperCase()})`}
            rows={3}
            className="w-full rounded border border-brand-grid px-3 py-2 text-sm"
          />
        </div>
      ))}

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="is_published"
          defaultChecked={defaultValues?.is_published ?? true}
        />
        Publié
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors disabled:opacity-50"
      >
        Enregistrer
      </button>
    </form>
  );
}
