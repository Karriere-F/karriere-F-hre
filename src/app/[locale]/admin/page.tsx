import { createClient } from "@/lib/supabase/server";

export default async function AdminOverviewPage() {
  const supabase = await createClient();

  const [{ count: pendingEmployers }, { count: candidatesTotal }, { count: openRequests }] =
    await Promise.all([
      supabase
        .from("employers")
        .select("id", { count: "exact", head: true })
        .eq("status", "pending"),
      supabase.from("candidates").select("id", { count: "exact", head: true }),
      supabase
        .from("staffing_requests")
        .select("id", { count: "exact", head: true })
        .eq("status", "open"),
    ]);

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Vue d&apos;ensemble</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">
            Entreprises en attente
          </p>
          <p className="text-2xl text-brand-black font-serif mt-1">
            {pendingEmployers ?? 0}
          </p>
        </div>
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">Candidats au total</p>
          <p className="text-2xl text-brand-black font-serif mt-1">
            {candidatesTotal ?? 0}
          </p>
        </div>
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">Besoins ouverts</p>
          <p className="text-2xl text-brand-black font-serif mt-1">{openRequests ?? 0}</p>
        </div>
      </div>
    </div>
  );
}
