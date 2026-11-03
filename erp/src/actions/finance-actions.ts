"use server";

import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { erpRedirect, fail, number, refreshErp, text } from "@/lib/erp/server";
import type { Currency, InvoiceStatus, PaymentMethod } from "@/types/database.types";

const currencyOf = (fd: FormData): Currency => (text(fd, "currency") === "EUR" ? "EUR" : "XAF");

export async function createInvoice(fd: FormData) {
  const { user } = await requireStaff("finance");
  const supabase = await createClient();
  const back = "/factures/nouvelle";

  // "c:<id>" = candidate, "e:<id>" = employer, empty = free client name only.
  const client = text(fd, "client") ?? "";
  const candidateId = client.startsWith("c:") ? client.slice(2) : null;
  const employerId = client.startsWith("e:") ? client.slice(2) : null;
  let clientName = text(fd, "client_name");
  if (!clientName && candidateId) {
    const { data } = await supabase.from("profiles").select("full_name").eq("id", candidateId).single();
    clientName = data?.full_name ?? null;
  }
  if (!clientName && employerId) {
    const { data } = await supabase.from("employers").select("company_name").eq("id", employerId).single();
    clientName = data?.company_name ?? null;
  }
  if (!clientName) return fail(back, "Indiquez le client.");

  const descriptions = fd.getAll("line_description").map((v) => String(v).trim());
  const quantities = fd.getAll("line_quantity").map(String);
  const prices = fd.getAll("line_unit_price").map(String);
  const lines = descriptions
    .map((description, i) => ({
      description,
      quantity: Number((quantities[i] || "1").replace(",", ".")) || 1,
      unit_price: Number((prices[i] || "").replace(/\s/g, "").replace(",", ".")),
      position: i,
    }))
    .filter((l) => l.description && Number.isFinite(l.unit_price));
  if (lines.length === 0) return fail(back, "Ajoutez au moins une ligne avec un montant.");

  const { data: invoice, error } = await supabase
    .from("invoices")
    .insert({
      candidate_id: candidateId,
      employer_id: employerId,
      client_name: clientName,
      client_address: text(fd, "client_address"),
      currency: currencyOf(fd),
      issue_date: text(fd, "issue_date") ?? undefined,
      due_date: text(fd, "due_date"),
      notes: text(fd, "notes"),
      created_by: user.id,
    })
    .select("id")
    .single();
  if (error || !invoice) return fail(back, "Création de la facture impossible.");

  const { error: linesError } = await supabase
    .from("invoice_lines")
    .insert(lines.map((l) => ({ ...l, invoice_id: invoice.id })));
  if (linesError) {
    await supabase.from("invoices").delete().eq("id", invoice.id);
    return fail(back, "Lignes de facture invalides.");
  }

  refreshErp();
  return erpRedirect(`/factures/${invoice.id}`);
}

export async function setInvoiceStatus(invoiceId: string, status: InvoiceStatus) {
  await requireStaff("finance");
  const supabase = await createClient();
  await supabase.from("invoices").update({ status }).eq("id", invoiceId);
  refreshErp();
}

export async function addPayment(invoiceId: string, fd: FormData) {
  const { user } = await requireStaff("finance");
  const supabase = await createClient();
  const back = `/factures/${invoiceId}`;
  const amount = number(fd, "amount");
  if (!amount || amount <= 0) return fail(back, "Montant invalide.");

  const { error } = await supabase.from("payments").insert({
    invoice_id: invoiceId,
    amount,
    paid_on: text(fd, "paid_on") ?? undefined,
    method: (text(fd, "method") ?? "cash") as PaymentMethod,
    reference: text(fd, "reference"),
    created_by: user.id,
  });
  if (error) return fail(back, "Enregistrement du paiement impossible.");

  // Fully paid invoices close themselves.
  const { data: s } = await supabase.from("invoice_summary").select("total, paid, status").eq("id", invoiceId).single();
  if (s && s.status !== "cancelled" && Number(s.paid) >= Number(s.total)) {
    await supabase.from("invoices").update({ status: "paid" }).eq("id", invoiceId);
  } else if (s?.status === "draft") {
    await supabase.from("invoices").update({ status: "sent" }).eq("id", invoiceId);
  }
  refreshErp();
}

export async function deletePayment(paymentId: string) {
  await requireStaff("finance");
  const supabase = await createClient();
  const { data } = await supabase.from("payments").delete().eq("id", paymentId).select("invoice_id").single();
  if (data) {
    await supabase.from("invoices").update({ status: "sent" }).eq("id", data.invoice_id).eq("status", "paid");
  }
  refreshErp();
}

export async function createExpense(fd: FormData) {
  const { user } = await requireStaff("finance");
  const supabase = await createClient();
  const amount = number(fd, "amount");
  const category = text(fd, "category");
  if (!amount || amount <= 0 || !category) return fail("/depenses", "Catégorie et montant sont obligatoires.");

  const { error } = await supabase.from("expenses").insert({
    spent_on: text(fd, "spent_on") ?? undefined,
    category,
    description: text(fd, "description"),
    vendor: text(fd, "vendor"),
    amount,
    currency: currencyOf(fd),
    method: (text(fd, "method") ?? "cash") as PaymentMethod,
    created_by: user.id,
  });
  if (error) return fail("/depenses", "Enregistrement de la dépense impossible.");
  refreshErp();
}

export async function deleteExpense(expenseId: string) {
  await requireStaff("finance");
  const supabase = await createClient();
  await supabase.from("expenses").delete().eq("id", expenseId);
  refreshErp();
}
