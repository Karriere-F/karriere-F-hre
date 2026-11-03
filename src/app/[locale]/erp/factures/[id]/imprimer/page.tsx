/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { formatDate, formatMoney, methodLabel } from "@/lib/erp/labels";
import { PrintButton } from "@/components/erp/print-button";
import type { InvoiceLineRow, InvoiceSummaryRow, PaymentRow } from "@/types/database.types";

// Legal details of the issuing company (same as the imprint page).
const COMPANY = {
  name: "Karriere Fähre SARL",
  address: "Bonamoussadi, immeuble en face de Super U, 3e étage, Douala, Cameroun",
  postal: "BP 8414, Douala, Cameroun",
  rccm: "RCCM CM-DLA-01-2025-B13-00504",
  contact: "karrierefaehre.com",
};

export default async function InvoicePrintPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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

  return (
    <div>
      {/* Only the invoice sheet prints: site chrome, ERP sidebar and banners are hidden. */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #invoice-sheet, #invoice-sheet * { visibility: visible; }
          #invoice-sheet { position: absolute; inset: 0; margin: 0; border: 0; box-shadow: none; }
          @page { size: A4; margin: 16mm; }
        }
      `}</style>
      <div className="mb-4 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <article id="invoice-sheet" className="mx-auto max-w-3xl rounded-xl border border-brand-grid bg-white p-10 text-sm text-brand-black">
        <header className="flex items-start justify-between gap-6">
          <div>
            <img src="/logo-kf.png" alt="Karriere Fähre" className="h-14 w-auto" />
            <p className="mt-3 font-medium">{COMPANY.name}</p>
            <p className="text-brand-ink-secondary">{COMPANY.address}</p>
            <p className="text-brand-ink-secondary">{COMPANY.postal}</p>
            <p className="text-brand-ink-secondary">{COMPANY.rccm}</p>
            <p className="text-brand-ink-secondary">{COMPANY.contact}</p>
          </div>
          <div className="text-right">
            <p className="font-serif text-3xl">{inv.status === "cancelled" ? "Facture annulée" : "Facture"}</p>
            <p className="mt-1 font-medium">{inv.number}</p>
            <p className="mt-3 text-brand-ink-secondary">Date : {formatDate(inv.issue_date)}</p>
            {inv.due_date && <p className="text-brand-ink-secondary">Échéance : {formatDate(inv.due_date)}</p>}
          </div>
        </header>

        <section className="mt-10 rounded-lg bg-brand-black/[0.03] p-4">
          <p className="text-xs uppercase tracking-wide text-brand-ink-muted">Facturé à</p>
          <p className="mt-1 font-medium">{inv.client_name}</p>
          {inv.client_address && <p className="whitespace-pre-line text-brand-ink-secondary">{inv.client_address}</p>}
        </section>

        <table className="mt-8 w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-brand-black text-left text-xs uppercase tracking-wide">
              <th className="py-2">Désignation</th>
              <th className="py-2 text-right">Qté</th>
              <th className="py-2 text-right">Prix unitaire</th>
              <th className="py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {((lines ?? []) as InvoiceLineRow[]).map((l) => (
              <tr key={l.id} className="border-b border-brand-grid">
                <td className="py-2.5">{l.description}</td>
                <td className="py-2.5 text-right">{Number(l.quantity)}</td>
                <td className="py-2.5 text-right">{formatMoney(l.unit_price, inv.currency)}</td>
                <td className="py-2.5 text-right">{formatMoney(Number(l.quantity) * Number(l.unit_price), inv.currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <dl className="ml-auto mt-6 grid max-w-xs grid-cols-2 gap-y-1">
          <dt>Total</dt>
          <dd className="text-right font-medium">{formatMoney(inv.total, inv.currency)}</dd>
          {Number(inv.paid) > 0 && (
            <>
              <dt className="text-brand-ink-secondary">Déjà réglé</dt>
              <dd className="text-right">{formatMoney(inv.paid, inv.currency)}</dd>
              <dt className="font-medium">Reste à payer</dt>
              <dd className="text-right font-medium">{formatMoney(Math.max(due, 0), inv.currency)}</dd>
            </>
          )}
        </dl>

        {(payments ?? []).length > 0 && (
          <section className="mt-8">
            <p className="text-xs uppercase tracking-wide text-brand-ink-muted">Règlements reçus</p>
            <ul className="mt-2 text-brand-ink-secondary">
              {((payments ?? []) as PaymentRow[]).map((p) => (
                <li key={p.id}>
                  {formatDate(p.paid_on)}, {methodLabel(p.method)}
                  {p.reference && ` (réf. ${p.reference})`} : {formatMoney(p.amount, inv.currency)}
                </li>
              ))}
            </ul>
          </section>
        )}

        {inv.notes && <p className="mt-8 whitespace-pre-line text-brand-ink-secondary">{inv.notes}</p>}

        <footer className="mt-12 border-t border-brand-grid pt-4 text-center text-xs text-brand-ink-muted">
          {COMPANY.name}, {COMPANY.rccm}. Merci de votre confiance.
        </footer>
      </article>
    </div>
  );
}
