import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { EmployerValidateButton } from "@/components/admin/employer-validate-button";
import type { Database } from "@/types/database.types";

type EmployerWithProfile = Database["public"]["Tables"]["employers"]["Row"] & {
  profiles: { full_name: string | null; phone: string | null } | null;
};

export default async function AdminEmployerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: employer } = await supabase
    .from("employers")
    .select("*, profiles(full_name, phone)")
    .eq("id", id)
    .returns<EmployerWithProfile[]>()
    .single();

  if (!employer) {
    notFound();
  }

  const profile = employer.profiles;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif text-brand-black">{employer.company_name}</h1>
        <EmployerValidateButton employerId={employer.id} status={employer.status} />
      </div>
      <dl className="grid gap-3 text-sm">
        <div>
          <dt className="text-brand-ink-muted">Contact</dt>
          <dd className="text-brand-black">
            {profile?.full_name ?? "—"} {profile?.phone ? `— ${profile.phone}` : ""}
          </dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">Secteur</dt>
          <dd className="text-brand-black">{employer.industry ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">Site web</dt>
          <dd className="text-brand-black">{employer.website ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-brand-ink-muted">Numéro d&apos;immatriculation</dt>
          <dd className="text-brand-black">{employer.company_registration_no ?? "—"}</dd>
        </div>
      </dl>
    </div>
  );
}
