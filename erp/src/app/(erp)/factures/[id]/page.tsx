import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { PAYMENT_METHODS, formatDate, formatMoney, invoiceStatus, methodLabel, todayIso } from "@/lib/erp/labels";
import { addPayment, deletePayment, setInvoiceStatus } from "@/actions/finance-actions";
import { Badge, Card, Empty, ErrorBanner, Field, PageHeader, Select, Table, ghostButtonClass, inputClass, linkClass, tdClass } from "@/components/ui";
import { SubmitButton } from "@/components/submit-button";
import type { InvoiceLineRow, InvoiceSummaryRow, PaymentRow } from "@/types/database.types";

export default async function InvoicePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ erreur?: string }>;
}) {
  const { id } = await params;
  const { erreur } = await searchParams;
  await requireStaff("finance");
  const supabase = await createClient();

  const { data } = await supabase.from("invoice_summary").select("*").eq("id", id).single();
  if (!data) notFound();
  const inv = data as InvoiceSummaryRow;
  const [{ data: lines }, { data: payments }] = await Promise.all([
    supabase.from("invoice_lines").select("*").eq("invoice_id", id).order("position"),
    supabase.from("payments").select("*").eq("invoice_id", id).order("paid_on"),
  ]);
  const due = Number(inv.total) - Number(inv.paid);
  const st = invoiceStatus(inv.status);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={`Facture ${inv.number}`}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            <Badge tone={st.tone}>{st.label}</Badge>
            {inv.candidate_id ? (
              <Link href={`/dossiers/${inv.candidate_id}`} className={linkClass}>
                {inv.client_name}
              </Link>
            ) : (
              <span>{inv.client_name}</span>
            )}
            <span>émise le {formatDate(inv.issue_date)}</span>
            {inv.due_date && <span>échéance {formatDate(inv.due_date)}</span>}
          </span>
        }
        actions={
          <>
            <Link href={`/factures/${id}/imprimer`} className={ghostButtonClass} target="_blank">
              Imprimer / PDF
            </Link>
            {inv.status === "draft" && (
              <form action={setInvoiceStatus.bind(null, id, "sent")}>
                <SubmitButton>Marquer comme envoyée</SubmitButton>
              </form>
            )}
            {inv.status !== "cancelled" && inv.status !== "paid" && (
              <form action={setInvoiceStatus.bind(null, id, "cancelled")}>
                <SubmitButton variant="danger" confirm="Annuler cette facture ?">
                  Annuler
                </SubmitButton>
              </form>
            )}
          </>
        }
      />
      <ErrorBanner message={erreur} />

      <Card>
        <Table head={["Désignation", "Quantité", "Prix unitaire", "Total"]}>
          {((lines ?? []) as InvoiceLineRow[]).map((l) => (
            <tr key={l.id}>
              <td className={tdClass}>{l.description}</td>
              <td className={tdClass}>{Number(l.quantity)}</td>
              <td className={tdClass}>{formatMoney(l.unit_price, inv.currency)}</td>
              <td className={tdClass}>{formatMoney(Number(l.quantity) * Number(l.unit_price), inv.currency)}</td>
            </tr>
          ))}
        </Table>
        <dl className="ml-auto mt-4 grid max-w-xs grid-cols-2 gap-y-1 text-sm">
          <dt className="text-brand-ink-secondary">Total</dt>
          <dd className="text-right font-medium">{formatMoney(inv.total, inv.currency)}</dd>
          <dt className="text-brand-ink-secondary">Déjà payé</dt>
          <dd className="text-right">{formatMoney(inv.paid, inv.currency)}</dd>
          <dt className="font-medium text-brand-black">Reste dû</dt>
          <dd className="text-right font-serif text-lg">{formatMoney(Math.max(due, 0), inv.currency)}</dd>
        </dl>
        {inv.notes && <p className="mt-4 text-sm text-brand-ink-secondary">{inv.notes}</p>}
      </Card>

      <Card title="Paiements">
        {(payments ?? []).length === 0 ? (
          <Empty>Aucun paiement reçu.</Empty>
        ) : (
          <Table head={["Date", "Moyen", "Référence", "Montant", ""]}>
            {((payments ?? []) as PaymentRow[]).map((p) => (
              <tr key={p.id}>
                <td className={tdClass}>{formatDate(p.paid_on)}</td>
                <td className={tdClass}>{methodLabel(p.method)}</td>
                <td className={`${tdClass} text-brand-ink-secondary`}>{p.reference}</td>
                <td className={tdClass}>{formatMoney(p.amount, inv.currency)}</td>
                <td className={tdClass}>
                  <form action={deletePayment.bind(null, p.id)}>
                    <SubmitButton variant="danger" confirm="Supprimer ce paiement ?">
                      Supprimer
                    </SubmitButton>
                  </form>
                </td>
              </tr>
            ))}
          </Table>
        )}
        {inv.status !== "cancelled" && due > 0 && (
          <form action={addPayment.bind(null, id)} className="mt-4 grid gap-3 border-t border-brand-grid pt-4 sm:grid-cols-5">
            <Field label={`Montant (${inv.currency === "XAF" ? "FCFA" : "EUR"})`}>
              <input name="amount" required inputMode="decimal" defaultValue={due} className={inputClass} />
            </Field>
            <Field label="Date">
              <input name="paid_on" type="date" defaultValue={todayIso()} className={inputClass} />
            </Field>
            <Field label="Moyen">
              <Select name="method" options={PAYMENT_METHODS} />
            </Field>
            <Field label="Référence">
              <input name="reference" placeholder="N° de transaction" className={inputClass} />
            </Field>
            <div className="flex items-end">
              <SubmitButton>Enregistrer le paiement</SubmitButton>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
}
