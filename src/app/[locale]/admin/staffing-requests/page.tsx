import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database.types";

type RequestWithEmployer = Database["public"]["Tables"]["staffing_requests"]["Row"] & {
  employers: { company_name: string } | null;
};

export default async function AdminStaffingRequestsPage() {
  const supabase = await createClient();

  const { data: requests } = await supabase
    .from("staffing_requests")
    .select("*, employers(company_name)")
    .order("created_at", { ascending: false })
    .returns<RequestWithEmployer[]>();

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">
        Besoins en main-d&apos;œuvre
      </h1>
      <div className="flex flex-col gap-3">
        {(requests ?? []).map((r) => (
          <div key={r.id} className="rounded-lg border border-brand-grid p-4">
            <p className="text-brand-black font-medium">{r.profession_title}</p>
            <p className="text-sm text-brand-ink-muted">
              {r.employers?.company_name} — {r.headcount_needed} personne(s) — {r.status}
            </p>
          </div>
        ))}
        {(!requests || requests.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucun besoin.</p>
        )}
      </div>
    </div>
  );
}
