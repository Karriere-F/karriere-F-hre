import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";
import { CandidateVisibilityToggle } from "@/components/admin/candidate-visibility-toggle";
import type { Database } from "@/types/database.types";

type CandidateWithProfile = Database["public"]["Tables"]["candidates"]["Row"] & {
  profiles: { full_name: string | null } | null;
};

export default async function AdminCandidatesPage() {
  const supabase = await createClient();

  const { data: candidates } = await supabase
    .from("candidates")
    .select("*, profiles(full_name)")
    .order("created_at", { ascending: false })
    .returns<CandidateWithProfile[]>();

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Candidats</h1>
      <div className="flex flex-col gap-3">
        {(candidates ?? []).map((c) => (
          <div
            key={c.id}
            className="rounded-lg border border-brand-grid p-4 flex items-center justify-between"
          >
            <Link
              href={{ pathname: "/admin/candidates/[id]", params: { id: c.id } }}
              className="min-w-0"
            >
              <p className="text-brand-black font-medium">
                {c.profiles?.full_name ?? c.id}
              </p>
              <p className="text-sm text-brand-ink-muted">
                {c.needs_training ? "Full Training" : "Fast Track"} — {c.status} —{" "}
                {c.german_level.toUpperCase()}
              </p>
            </Link>
            <CandidateVisibilityToggle
              candidateId={c.id}
              visible={c.is_visible_to_employers}
            />
          </div>
        ))}
        {(!candidates || candidates.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucun candidat.</p>
        )}
      </div>
    </div>
  );
}
