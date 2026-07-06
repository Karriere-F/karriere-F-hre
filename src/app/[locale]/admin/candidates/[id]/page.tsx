import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { CandidateVisibilityToggle } from "@/components/admin/candidate-visibility-toggle";
import { CandidateAdminForm } from "@/components/admin/candidate-admin-form";
import type { Database } from "@/types/database.types";

type CandidateWithProfile = Database["public"]["Tables"]["candidates"]["Row"] & {
  profiles: { full_name: string | null; phone: string | null } | null;
};

export default async function AdminCandidateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: candidate } = await supabase
    .from("candidates")
    .select("*, profiles(full_name, phone)")
    .eq("id", id)
    .returns<CandidateWithProfile[]>()
    .single();

  if (!candidate) {
    notFound();
  }

  const profile = candidate.profiles;

  let cvUrl: string | null = null;
  if (candidate.cv_storage_path) {
    const { data: signed } = await supabase.storage
      .from("cv-uploads")
      .createSignedUrl(candidate.cv_storage_path, 300);
    cvUrl = signed?.signedUrl ?? null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif text-brand-black">
          {profile?.full_name ?? candidate.id}
        </h1>
        <CandidateVisibilityToggle
          candidateId={candidate.id}
          visible={candidate.is_visible_to_employers}
        />
      </div>

      <dl className="grid gap-3 text-sm mb-8">
        <div>
          <dt className="text-brand-ink-muted">Téléphone</dt>
          <dd className="text-brand-black">{profile?.phone ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">Parcours</dt>
          <dd className="text-brand-black">
            {candidate.needs_training ? "Full Training" : "Fast Track"}
          </dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">Niveau d&apos;allemand</dt>
          <dd className="text-brand-black uppercase">{candidate.german_level}</dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">CV</dt>
          <dd>
            {cvUrl ? (
              <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                Télécharger
              </a>
            ) : (
              <span className="text-brand-ink-muted">Non fourni</span>
            )}
          </dd>
        </div>
        {candidate.bio && (
          <div>
            <dt className="text-brand-ink-muted">Bio</dt>
            <dd className="text-brand-black">{candidate.bio}</dd>
          </div>
        )}
      </dl>

      <CandidateAdminForm
        candidateId={candidate.id}
        defaultNotes={candidate.admin_notes ?? ""}
        defaultStatus={candidate.status}
      />
    </div>
  );
}
