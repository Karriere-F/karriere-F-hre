import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";
import { EmployerValidateButton } from "@/components/admin/employer-validate-button";

export default async function AdminEmployersPage() {
  const supabase = await createClient();

  const { data: employers } = await supabase
    .from("employers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Entreprises</h1>
      <div className="flex flex-col gap-3">
        {(employers ?? []).map((e) => (
          <div
            key={e.id}
            className="rounded-lg border border-brand-grid p-4 flex items-center justify-between"
          >
            <Link href={`/admin/employers/${e.id}`} className="min-w-0">
              <p className="text-brand-black font-medium">{e.company_name}</p>
              <p className="text-sm text-brand-ink-muted">{e.status}</p>
            </Link>
            <EmployerValidateButton employerId={e.id} status={e.status} />
          </div>
        ))}
        {(!employers || employers.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucune entreprise.</p>
        )}
      </div>
    </div>
  );
}
