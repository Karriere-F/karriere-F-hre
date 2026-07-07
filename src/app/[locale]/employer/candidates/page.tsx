import { requireValidatedEmployer } from "@/lib/auth/require-validated-employer";
import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";

export default async function EmployerCandidatesPage() {
  await requireValidatedEmployer();
  const supabase = await createClient();

  const { data: candidates } = await supabase
    .from("candidates_public_view")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-6">Vivier de candidats</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(candidates ?? []).map((c) => (
          <Link
            key={c.id}
            href={`/employer/candidates/${c.id}`}
            className="rounded-lg border border-brand-grid p-5 hover:border-brand-gold transition-colors"
          >
            <p className="text-xs uppercase text-brand-gold-text">{c.german_level}</p>
            <p className="text-brand-black font-medium mt-1">
              {c.years_experience ?? 0} an(s) d&apos;expérience
            </p>
          </Link>
        ))}
        {(!candidates || candidates.length === 0) && (
          <p className="text-brand-ink-muted text-sm col-span-full">
            Aucun candidat disponible pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}
