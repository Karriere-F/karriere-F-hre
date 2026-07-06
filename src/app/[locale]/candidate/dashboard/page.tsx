import { getTranslations } from "next-intl/server";
import { getCurrentProfile } from "@/lib/auth/get-current-profile";
import { createClient } from "@/lib/supabase/server";
import { Link } from "../../../../../i18n/navigation";

export default async function CandidateDashboardPage() {
  const t = await getTranslations("candidate.dashboard");
  const current = await getCurrentProfile();
  const supabase = await createClient();

  const { data: candidate } = await supabase
    .from("candidates")
    .select("*")
    .eq("id", current!.user.id)
    .single();

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">{t("title")}</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">Parcours</p>
          <p className="text-brand-black font-medium mt-1">
            {candidate?.needs_training ? "Full Training" : "Fast Track"}
          </p>
        </div>
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">Statut</p>
          <p className="text-brand-black font-medium mt-1">{candidate?.status}</p>
        </div>
        <div className="rounded-lg border border-brand-grid p-5">
          <p className="text-xs uppercase text-brand-ink-muted">Niveau d&apos;allemand</p>
          <p className="text-brand-black font-medium mt-1 uppercase">
            {candidate?.german_level}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <Link href="/candidate/profile" className="text-brand-gold hover:underline text-sm">
          Modifier mon profil
        </Link>
        <Link href="/candidate/cv" className="text-brand-gold hover:underline text-sm">
          Gérer mon CV
        </Link>
      </div>
    </div>
  );
}
