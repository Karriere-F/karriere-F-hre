import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { EXPENSE_CATEGORIES, PAYMENT_METHODS, formatDate, formatMoney, methodLabel, todayIso } from "@/lib/erp/labels";
import { createExpense, deleteExpense } from "@/actions/finance-actions";
import { Card, Empty, ErrorBanner, Field, PageHeader, Select, Stat, Table, ghostButtonClass, inputClass, tdClass } from "@/components/ui";
import { SubmitButton } from "@/components/submit-button";
import type { Currency, ExpenseRow } from "@/types/database.types";

export default async function ExpensesPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string; mois?: string }>;
}) {
  await requireStaff("finance");
  const { erreur, mois } = await searchParams;
  const supabase = await createClient();
  const month = /^\d{4}-\d{2}$/.test(mois ?? "") ? mois! : todayIso().slice(0, 7);
  const [y, m] = month.split("-").map(Number);
  const start = `${month}-01`;
  const end = new Date(Date.UTC(y, m, 1)).toISOString().slice(0, 10);

  const [{ data }, { data: pays }] = await Promise.all([
    supabase.from("expenses").select("*").gte("spent_on", start).lt("spent_on", end).order("spent_on", { ascending: false }),
    supabase
      .from("payments")
      .select("amount, invoices(currency)")
      .gte("paid_on", start)
      .lt("paid_on", end)
      .returns<{ amount: number; invoices: { currency: Currency } | null }[]>(),
  ]);
  const expenses = (data ?? []) as ExpenseRow[];

  const totals = (cur: Currency) => ({
    out: expenses.filter((e) => e.currency === cur).reduce((n, e) => n + Number(e.amount), 0),
    in: (pays ?? []).filter((p) => p.invoices?.currency === cur).reduce((n, p) => n + Number(p.amount), 0),
  });
  const xaf = totals("XAF");
  const eur = totals("EUR");
  const byCategory = new Map<string, number>();
  for (const e of expenses.filter((x) => x.currency === "XAF")) byCategory.set(e.category, (byCategory.get(e.category) ?? 0) + Number(e.amount));
  const monthLabel = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(Date.UTC(y, m - 1, 1)));

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dépenses et trésorerie"
        subtitle={`Mois de ${monthLabel}`}
        actions={
          <form className="flex gap-2">
            <input name="mois" type="month" defaultValue={month} className={inputClass} />
            <button className={ghostButtonClass}>Afficher</button>
          </form>
        }
      />
      <ErrorBanner message={erreur} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Encaissé" value={<span className="text-2xl">{formatMoney(xaf.in, "XAF")}</span>} hint={eur.in ? `+ ${formatMoney(eur.in, "EUR")}` : undefined} />
        <Stat label="Dépensé" value={<span className="text-2xl">{formatMoney(xaf.out, "XAF")}</span>} hint={eur.out ? `+ ${formatMoney(eur.out, "EUR")}` : undefined} />
        <Stat
          label="Résultat du mois (FCFA)"
          value={<span className={`text-2xl ${xaf.in - xaf.out < 0 ? "text-red-700" : ""}`}>{formatMoney(xaf.in - xaf.out, "XAF")}</span>}
          hint="Encaissements moins dépenses"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card title="Dépenses du mois" className="xl:col-span-2">
          {expenses.length === 0 ? (
            <Empty>Aucune dépense ce mois-ci.</Empty>
          ) : (
            <Table head={["Date", "Catégorie", "Détail", "Moyen", "Montant", ""]}>
              {expenses.map((e) => (
                <tr key={e.id}>
                  <td className={tdClass}>{formatDate(e.spent_on)}</td>
                  <td className={tdClass}>{e.category}</td>
                  <td className={`${tdClass} text-brand-ink-secondary`}>
                    {e.description}
                    {e.vendor && <span className="block text-xs">{e.vendor}</span>}
                  </td>
                  <td className={tdClass}>{methodLabel(e.method)}</td>
                  <td className={tdClass}>{formatMoney(e.amount, e.currency)}</td>
                  <td className={tdClass}>
                    <form action={deleteExpense.bind(null, e.id)}>
                      <SubmitButton variant="danger" confirm="Supprimer cette dépense ?">
                        Supprimer
                      </SubmitButton>
                    </form>
                  </td>
                </tr>
              ))}
            </Table>
          )}
        </Card>

        <Card title="Par catégorie (FCFA)">
          {byCategory.size === 0 ? (
            <Empty>Rien à afficher.</Empty>
          ) : (
            <ul className="flex flex-col gap-3 text-sm">
              {[...byCategory.entries()]
                .sort((a, b) => b[1] - a[1])
                .map(([cat, amount]) => (
                  <li key={cat}>
                    <div className="flex justify-between">
                      <span>{cat}</span>
                      <span className="text-brand-ink-secondary">{formatMoney(amount, "XAF")}</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-brand-black/5">
                      <div className="h-full rounded-full bg-brand-gold" style={{ width: `${(amount / xaf.out) * 100}%` }} />
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </Card>
      </div>

      <Card title="Nouvelle dépense">
        <form action={createExpense} className="grid gap-3 sm:grid-cols-4">
          <Field label="Date">
            <input name="spent_on" type="date" defaultValue={todayIso()} className={inputClass} />
          </Field>
          <Field label="Catégorie *">
            <Select name="category" options={EXPENSE_CATEGORIES.map((c) => ({ key: c, label: c }))} />
          </Field>
          <Field label="Montant *">
            <input name="amount" required inputMode="decimal" className={inputClass} />
          </Field>
          <Field label="Devise">
            <select name="currency" className={inputClass}>
              <option value="XAF">FCFA</option>
              <option value="EUR">EUR</option>
            </select>
          </Field>
          <Field label="Détail" className="sm:col-span-2">
            <input name="description" className={inputClass} />
          </Field>
          <Field label="Fournisseur">
            <input name="vendor" className={inputClass} />
          </Field>
          <Field label="Moyen de paiement">
            <Select name="method" options={PAYMENT_METHODS} />
          </Field>
          <div>
            <SubmitButton>Ajouter</SubmitButton>
          </div>
        </form>
      </Card>
    </div>
  );
}
