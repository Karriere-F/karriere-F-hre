import { requireRole } from "@/lib/auth/require-role";
import { createClient } from "@/lib/supabase/server";
import { ProfileForm } from "@/components/candidate/profile-form";

export default async function CandidateProfilePage() {
  const current = await requireRole("candidate");
  const supabase = await createClient();

  const { data: candidate } = await supabase
    .from("candidates")
    .select("*")
    .eq("id", current.user.id)
    .single();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-serif text-brand-black mb-6">Mon profil</h1>
      <ProfileForm
        defaultValues={{
          germanLevel: candidate?.german_level ?? "none",
          yearsExperience: candidate?.years_experience ?? undefined,
          bio: candidate?.bio ?? "",
        }}
      />
    </div>
  );
}
