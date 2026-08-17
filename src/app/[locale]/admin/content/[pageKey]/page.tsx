import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { CONTENT_PAGES, type ContentPageKey } from "@/lib/content/content-schema";
import { getStaticValue } from "@/lib/content/static-messages";
import { ContentFieldForm } from "@/components/admin/content-field-form";

export default async function AdminContentEditPage({
  params,
}: {
  params: Promise<{ pageKey: string }>;
}) {
  const { pageKey } = await params;
  const page = CONTENT_PAGES[pageKey as ContentPageKey];

  if (!page) {
    notFound();
  }

  const supabase = await createClient();
  const { data: overrides } = await supabase
    .from("page_content")
    .select("field_key, value_fr, value_de, value_en")
    .eq("page_key", pageKey);

  const overrideByField = new Map((overrides ?? []).map((row) => [row.field_key, row]));

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-1">{page.label}</h1>
      <p className="text-sm text-brand-ink-muted mb-6">
        Un champ vide affiche le texte de référence (indiqué en filigrane) sur le site.
      </p>
      <div className="flex flex-col gap-4">
        {page.fields.map((fieldKey) => {
          const override = overrideByField.get(fieldKey);
          return (
            <ContentFieldForm
              key={fieldKey}
              pageKey={pageKey as ContentPageKey}
              fieldKey={fieldKey}
              staticFr={getStaticValue(pageKey, fieldKey, "fr")}
              staticDe={getStaticValue(pageKey, fieldKey, "de")}
              staticEn={getStaticValue(pageKey, fieldKey, "en")}
              dbFr={override?.value_fr ?? ""}
              dbDe={override?.value_de ?? ""}
              dbEn={override?.value_en ?? ""}
            />
          );
        })}
      </div>
    </div>
  );
}
