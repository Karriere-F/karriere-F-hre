import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getCandidateOptions, getEmployerOptions } from "@/lib/erp/server";
import { isoInDays, todayIso } from "@/lib/erp/labels";
import { createInvoice } from "@/actions/erp/finance-actions";
import { Card, ErrorBanner, Field, PageHeader, inputClass } from "@/components/erp/ui";
import { SubmitButton } from "@/components/erp/submit-button";

const LINES = 6;

export default async function NewInvoicePage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string; candidat?: string }>;
}) {
  await requireStaff("finance");
  const { erreur, candidat } = await searchParams;
  const supabase = await createClient();
  const [candidates, employers] = await Promise.all([getCandidateOptions(supabase), getEmployerOptions(supabase)]);
  const in30 = isoInDays(30);

  return (
    <div className="max-w-4xl">
      <PageHeader title="Nouvelle facture" subtitle="Le numéro est attribué automatiquement (KF-année-numéro)." />
      <ErrorBanner message={erreur} />
      <form action={createInvoice} className="flex flex-col gap-6">
        <Card title="Client">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Candidat ou entreprise">
              <select name="client" defaultValue={candidat ? `c:${candidat}` : ""} className={inputClass}>
                <option value="">Autre client (saisir le nom)</option>
                <optgroup label="Candidats">
                  {candidates.map((c) => (
                    <option key={c.id} value={`c:${c.id}`}>
                      {c.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Entreprises">
                  {employers.map((e) => (
                    <option key={e.id} value={`e:${e.id}`}>
                      {e.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </Field>
            <Field label="Nom sur la facture (sinon celui du dossier)">
              <input name="client_name" className={inputClass} />
            </Field>
            <Field label="Adresse du client" className="sm:col-span-2">
              <textarea name="client_address" rows={2} className={inputClass} />
            </Field>
          </div>
        </Card>

        <Card title="Lignes">
          <div className="grid gap-2">
            <div className="hidden grid-cols-[1fr_6rem_10rem] gap-2 text-xs font-medium text-brand-ink-secondary sm:grid">
              <span>Désignation</span>
              <span>Quantité</span>
              <span>Prix unitaire</span>
            </div>
            {Array.from({ length: LINES }, (_, i) => (
              <div key={i} className="grid gap-2 sm:grid-cols-[1fr_6rem_10rem]">
                <input
                  name="line_description"
                  required={i === 0}
                  placeholder={i === 0 ? "Ex. Cours d'allemand niveau A1" : ""}
                  className={inputClass}
                />
                <input name="line_quantity" defaultValue="1" inputMode="decimal" className={inputClass} />
                <input name="line_unit_price" inputMode="decimal" required={i === 0} className={inputClass} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-brand-ink-muted">Les lignes vides sont ignorées.</p>
        </Card>

        <Card title="Conditions">
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="Devise">
              <select name="currency" className={inputClass}>
                <option value="XAF">FCFA (XAF)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </Field>
            <Field label="Date d'émission">
              <input name="issue_date" type="date" defaultValue={todayIso()} className={inputClass} />
            </Field>
            <Field label="Échéance">
              <input name="due_date" type="date" defaultValue={in30} className={inputClass} />
            </Field>
            <Field label="Mention sur la facture" className="sm:col-span-3">
              <textarea name="notes" rows={2} placeholder="Ex. paiement en deux fois accepté" className={inputClass} />
            </Field>
          </div>
        </Card>

        <div>
          <SubmitButton>Créer la facture</SubmitButton>
        </div>
      </form>
    </div>
  );
}
