import { notFound } from "next/navigation";
import { requireValidatedEmployer } from "@/lib/auth/require-validated-employer";
import { createClient } from "@/lib/supabase/server";

export default async function StaffingRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const current = await requireValidatedEmployer();
  const supabase = await createClient();

  const { data: request } = await supabase
    .from("staffing_requests")
    .select("*")
    .eq("id", id)
    .eq("employer_id", current.user.id)
    .single();

  if (!request) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-2">
        {request.profession_title}
      </h1>
      <p className="text-sm text-brand-ink-muted mb-6">Statut : {request.status}</p>
      <dl className="grid gap-4 text-sm">
        <div>
          <dt className="text-brand-ink-muted">Nombre de personnes</dt>
          <dd className="text-brand-black">{request.headcount_needed}</dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">Niveau d&apos;allemand requis</dt>
          <dd className="text-brand-black uppercase">
            {request.german_level_required}
          </dd>
        </div>
        {request.description && (
          <div>
            <dt className="text-brand-ink-muted">Description</dt>
            <dd className="text-brand-black">{request.description}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
