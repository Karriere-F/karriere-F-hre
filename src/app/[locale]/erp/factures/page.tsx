import { Link } from "../../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { INVOICE_STATUSES, formatDate, formatMoney, invoiceStatus, todayIso } from "@/lib/erp/labels";
import { Badge, Card, Empty, PageHeader, Select, Stat, Table, buttonClass, ghostButtonClass, linkClass, tdClass } from "@/components/erp/ui";
import type { Currency, InvoiceStatus, InvoiceSummaryRow } from "@/types/database.types";

export default async function InvoicesPage({ searchParams }: { searchParams: Promise<{ statut?: string }> }) {
  await requireStaff("finance");
  const { statut } = await searchParams;
  const supabase = await createClient();
  const today = todayIso();

  let query = supabase.from("invoice_summary").select("*").order("issue_date", { ascending: false }).limit(300);
  if (statut === "retard") query = query.eq("status", "sent").lt("due_date", today);
  else if (statut) query = query.eq("status", statut as InvoiceStatus);
  const [{ data }, { data: open }] = await Promise.all([
    query,
    supabase.from("invoice_summary").select("*").eq("status", "sent"),
  ]);
  const invoices = (data ?? []) as InvoiceSummaryRow[];

  const sum = (rows: InvoiceSummaryRow[], cur: Currency) =>
    rows.filter((r) => r.currency === cur).reduce((n, r) => n + Number(r.total) - Number(r.paid), 0);
  const openRows = (open ?? []) as InvoiceSummaryRow[];
  const lateRows = openRows.filter((r) => r.due_date && r.due_date < today);
  const fmt = (rows: InvoiceSummaryRow[]) =>
    [formatMoney(sum(rows, "XAF"), "XAF"), sum(rows, "EUR") ? formatMoney(sum(rows, "EUR"), "EUR") : null].filter(Boolean).join(" + ");

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Factures"
        actions={
          <Link href="/erp/factures/nouvelle" className={buttonClass}>
            Nouvelle facture
          </Link>
        }
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Reste à encaisser" value={<span className="text-2xl">{fmt(openRows)}</span>} hint={`${openRows.length} factures envoyées`} />
        <Stat label="En retard" value={<span className="text-2xl">{fmt(lateRows)}</span>} hint={`${lateRows.length} factures après échéance`} />
        <Stat label="Factures payées" value={invoices.filter((i) => i.status === "paid").length} hint="Dans la liste affichée" />
      </div>
      <Card>
        <form className="mb-4 flex gap-3">
          <div className="w-56">
            <Select name="statut" options={[...INVOICE_STATUSES.map(({ key, label }) => ({ key, label })), { key: "retard", label: "En retard" }]} defaultValue={statut} empty="Toutes" />
          </div>
          <button className={ghostButtonClass}>Filtrer</button>
        </form>
        {invoices.length === 0 ? (
          <Empty>Aucune facture.</Empty>
        ) : (
          <Table head={["Numéro", "Client", "Émise le", "Échéance", "Montant", "Reste dû", "Statut"]}>
            {invoices.map((i) => {
              const due = Number(i.total) - Number(i.paid);
              const late = i.status === "sent" && i.due_date && i.due_date < today;
              return (
                <tr key={i.id}>
                  <td className={tdClass}>
                    <Link href={{ pathname: "/erp/factures/[id]", params: { id: i.id } }} className={linkClass}>
                      {i.number}
                    </Link>
                  </td>
                  <td className={tdClass}>{i.client_name}</td>
                  <td className={`${tdClass} text-brand-ink-secondary`}>{formatDate(i.issue_date)}</td>
                  <td className={`${tdClass} ${late ? "text-red-700" : "text-brand-ink-secondary"}`}>{formatDate(i.due_date)}</td>
                  <td className={tdClass}>{formatMoney(i.total, i.currency)}</td>
                  <td className={tdClass}>{i.status === "cancelled" ? "" : formatMoney(due, i.currency)}</td>
                  <td className={tdClass}>
                    <Badge tone={late ? "bad" : invoiceStatus(i.status).tone}>{late ? "En retard" : invoiceStatus(i.status).label}</Badge>
                  </td>
                </tr>
              );
            })}
          </Table>
        )}
      </Card>
    </div>
  );
}
