import { requireValidatedEmployer } from "@/lib/auth/require-validated-employer";
import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";

export default async function EmployerRequestsPage() {
  const current = await requireValidatedEmployer();
  const supabase = await createClient();

  const { data: requests } = await supabase
    .from("staffing_requests")
    .select("*")
    .eq("employer_id", current.user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif text-brand-black">
          Mes besoins en main-d&apos;œuvre
        </h1>
        <Link
          href="/employer/requests/new"
          className="rounded-full bg-brand-gold px-5 py-2.5 text-brand-black font-medium hover:bg-brand-gold-light transition-colors text-sm"
        >
          Nouveau besoin
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {(requests ?? []).map((r) => (
          <Link
            key={r.id}
            href={`/employer/requests/${r.id}`}
            className="rounded-lg border border-brand-grid p-4 flex items-center justify-between hover:border-brand-gold transition-colors"
          >
            <div>
              <p className="text-brand-black font-medium">{r.profession_title}</p>
              <p className="text-sm text-brand-ink-muted">
                {r.headcount_needed} personne(s) — {r.status}
              </p>
            </div>
          </Link>
        ))}
        {(!requests || requests.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucun besoin pour le moment.</p>
        )}
      </div>
    </div>
  );
}
