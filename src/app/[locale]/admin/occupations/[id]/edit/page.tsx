import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { OccupationForm } from "@/components/admin/occupation-form";

export default async function EditOccupationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: occupation } = await supabase
    .from("shortage_occupations")
    .select("*")
    .eq("id", id)
    .single();

  if (!occupation) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Modifier le métier</h1>
      <OccupationForm defaultValues={occupation} />
    </div>
  );
}
