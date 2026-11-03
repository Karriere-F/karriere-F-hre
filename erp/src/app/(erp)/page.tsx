import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import {
  PLACEMENT_STAGES,
  docTypeLabel,
  formatDate,
  formatMoney,
  isoInDays,
  levelLabel,
  priority,
  providerLabel,
  todayIso,
} from "@/lib/erp/labels";
import { Badge, Card, Empty, PageHeader, Stat, linkClass } from "@/components/ui";
import type { Currency, ExamRow, InvoiceSummaryRow, TaskRow } from "@/types/database.types";

type Named = { id: string; profiles: { full_name: string | null } | null };

export default async function ErpDashboardPage() {
  const { user, profile, can } = await requireStaff();
  const supabase = await createClient();
  const today = todayIso();
  const in60 = isoInDays(60);
  const monthStart = today.slice(0, 8) + "01";

  const [placements, myTasks, missingDocs, expiringDocs, running, exams, appointments] =
    await Promise.all([
      supabase.from("placements").select("stage"),
      supabase
        .from("tasks")
        .select("*")
        .eq("assignee_id", user.id)
        .neq("status", "done")
        .order("due_date", { ascending: true, nullsFirst: false })
        .limit(8),
      supabase
        .from("candidate_documents")
        .select("id", { count: "exact", head: true })
        .eq("status", "missing"),
      supabase
        .from("candidate_documents")
        .select("id, doc_type, expires_on, candidate_id, candidates(profiles(full_name))")
        .not("expires_on", "is", null)
        .lte("expires_on", in60)
        .neq("status", "expired")
        .order("expires_on")
        .limit(6),
      supabase.from("courses").select("id, enrollments(count)").eq("status", "running")
        .returns<{ id: string; enrollments: { count: number }[] }[]>(),
      supabase
        .from("exams")
        .select("*, candidates(id, profiles(full_name))")
        .eq("status", "registered")
        .gte("exam_date", today)
        .order("exam_date")
        .limit(6)
        .returns<(ExamRow & { candidates: Named | null })[]>(),
      supabase
        .from("appointments")
        .select("id, full_name, appointment_date, appointment_time")
        .eq("status", "confirmed")
        .gte("appointment_date", today)
        .order("appointment_date")
        .order("appointment_time")
        .limit(5),
    ]);

  const stageCounts = new Map<string, number>();
  for (const p of placements.data ?? []) stageCounts.set(p.stage, (stageCounts.get(p.stage) ?? 0) + 1);
  const active = (placements.data ?? []).filter((p) => p.stage !== "placed" && p.stage !== "dropped").length;
  const learners = (running.data ?? []).reduce((n, c) => n + (c.enrollments[0]?.count ?? 0), 0);
  const tasks = (myTasks.data ?? []) as TaskRow[];
  const expiring = (expiringDocs.data ?? []) as unknown as {
    id: string;
    doc_type: string;
    expires_on: string;
    candidate_id: string;
    candidates: { profiles: { full_name: string | null } | null } | null;
  }[];

  let finance: { outstanding: Record<Currency, number>; cashed: Record<Currency, number> } | null = null;
  if (can("finance")) {
    const [{ data: open }, { data: pays }] = await Promise.all([
      supabase.from("invoice_summary").select("*").eq("status", "sent"),
      supabase.from("payments").select("amount, invoices(currency)").gte("paid_on", monthStart)
        .returns<{ amount: number; invoices: { currency: Currency } | null }[]>(),
    ]);
    finance = { outstanding: { XAF: 0, EUR: 0 }, cashed: { XAF: 0, EUR: 0 } };
    for (const i of (open ?? []) as InvoiceSummaryRow[]) finance.outstanding[i.currency] += Number(i.total) - Number(i.paid);
    for (const p of pays ?? []) if (p.invoices) finance.cashed[p.invoices.currency] += Number(p.amount);
  }

  const money = (r: Record<Currency, number>) =>
    [r.XAF ? formatMoney(r.XAF, "XAF") : null, r.EUR ? formatMoney(r.EUR, "EUR") : null]
      .filter(Boolean)
      .join(" + ") || formatMoney(0, "XAF");

  const firstName = (profile.full_name || "").split(" ")[0];

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title={firstName ? `Bonjour ${firstName}` : "Tableau de bord"}
        subtitle={new Intl.DateTimeFormat("fr-FR", { dateStyle: "full" }).format(new Date())}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Placements actifs" value={active} hint={`${stageCounts.get("placed") ?? 0} en poste au total`} />
        <Stat label="Apprenants en classe" value={learners} hint={`${running.data?.length ?? 0} classes en cours`} />
        <Stat label="Documents manquants" value={missingDocs.count ?? 0} hint="Tous dossiers confondus" />
        {finance ? (
          <Stat label="À encaisser" value={<span className="text-2xl">{money(finance.outstanding)}</span>} hint={`Encaissé ce mois : ${money(finance.cashed)}`} />
        ) : (
          <Stat label="Mes tâches ouvertes" value={tasks.length} />
        )}
      </div>

      <Card title="Pipeline des placements" actions={<Link href="/placements" className="text-sm text-brand-gold-text hover:underline">Voir le tableau</Link>}>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          {PLACEMENT_STAGES.map((s) => (
            <div key={s.key} className="rounded-lg bg-brand-black/[0.03] p-3 text-center">
              <p className="font-serif text-2xl text-brand-black">{stageCounts.get(s.key) ?? 0}</p>
              <p className="mt-1 text-[11px] leading-tight text-brand-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Mes tâches" actions={<Link href="/taches" className="text-sm text-brand-gold-text hover:underline">Toutes les tâches</Link>}>
          {tasks.length === 0 ? (
            <Empty>Aucune tâche ouverte. Bien joué.</Empty>
          ) : (
            <ul className="divide-y divide-brand-grid">
              {tasks.map((t) => (
                <li key={t.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span className="text-brand-black">{t.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    {t.due_date && (
                      <span className={t.due_date < today ? "text-red-700" : "text-brand-ink-muted"}>
                        {formatDate(t.due_date)}
                      </span>
                    )}
                    <Badge tone={priority(t.priority).tone}>{priority(t.priority).label}</Badge>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Documents qui expirent (60 jours)">
          {expiring.length === 0 ? (
            <Empty>Rien n&apos;expire prochainement.</Empty>
          ) : (
            <ul className="divide-y divide-brand-grid">
              {expiring.map((d) => (
                <li key={d.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <Link href={`/dossiers/${d.candidate_id}`} className={linkClass}>
                    {d.candidates?.profiles?.full_name ?? "Candidat"}
                  </Link>
                  <span className="text-brand-ink-secondary">
                    {docTypeLabel(d.doc_type)}, {formatDate(d.expires_on)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Prochains examens" actions={<Link href="/examens" className="text-sm text-brand-gold-text hover:underline">Tous les examens</Link>}>
          {(exams.data ?? []).length === 0 ? (
            <Empty>Aucun examen programmé.</Empty>
          ) : (
            <ul className="divide-y divide-brand-grid">
              {exams.data!.map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span className="text-brand-black">{e.candidates?.profiles?.full_name ?? "Candidat"}</span>
                  <span className="text-brand-ink-secondary">
                    {providerLabel(e.provider)} {levelLabel(e.level)}, {formatDate(e.exam_date)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Rendez-vous à venir">
          {(appointments.data ?? []).length === 0 ? (
            <Empty>Aucun rendez-vous réservé.</Empty>
          ) : (
            <ul className="divide-y divide-brand-grid">
              {appointments.data!.map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span className="text-brand-black">{a.full_name}</span>
                  <span className="text-brand-ink-secondary">
                    {formatDate(a.appointment_date)} à {a.appointment_time.slice(0, 5)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
