import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { GERMAN_LEVELS } from "@/lib/erp/labels";
import { createCandidateDossier } from "@/actions/erp/recruitment-actions";
import { Card, ErrorBanner, Field, PageHeader, Select, inputClass } from "@/components/erp/ui";
import { SubmitButton } from "@/components/erp/submit-button";

export default async function NewDossierPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string }>;
}) {
  await requireStaff("recruitment");
  const { erreur } = await searchParams;
  const supabase = await createClient();
  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("id, title_fr")
    .order("title_fr");

  return (
    <div className="max-w-2xl">
      <PageHeader
        title="Nouveau dossier candidat"
        subtitle="Un compte candidat est créé avec cet email, sans mot de passe pour l'instant."
      />
      <ErrorBanner message={erreur} />
      <Card>
        <form action={createCandidateDossier} className="grid gap-4 sm:grid-cols-2">
          <Field label="Nom complet *">
            <input name="full_name" required className={inputClass} />
          </Field>
          <Field label="Email *">
            <input name="email" type="email" required className={inputClass} />
          </Field>
          <Field label="Téléphone / WhatsApp">
            <input name="phone" className={inputClass} />
          </Field>
          <Field label="Niveau d'allemand">
            <Select name="german_level" options={GERMAN_LEVELS} defaultValue="none" />
          </Field>
          <Field label="Parcours">
            <Select
              name="track"
              options={[
                { key: "full", label: "Full Training (cours A1 à B2)" },
                { key: "fast", label: "Fast Track (déjà B2)" },
              ]}
            />
          </Field>
          <Field label="Années d'expérience">
            <input name="years_experience" type="number" min={0} className={inputClass} />
          </Field>
          <Field label="Métier visé" className="sm:col-span-2">
            <Select
              name="target_occupation_id"
              options={(occupations ?? []).map((o) => ({ key: o.id, label: o.title_fr }))}
              empty="Non défini"
            />
          </Field>
          <Field label="Notes internes" className="sm:col-span-2">
            <textarea name="notes" rows={3} className={inputClass} />
          </Field>
          <div className="sm:col-span-2">
            <SubmitButton>Créer le dossier</SubmitButton>
          </div>
        </form>
      </Card>
    </div>
  );
}
