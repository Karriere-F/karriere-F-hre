import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { CANDIDATE_STATUSES, candidateStatusLabel, formatDate, levelLabel } from "@/lib/erp/labels";
import { Badge, Card, Empty, PageHeader, Select, Table, buttonClass, ghostButtonClass, inputClass, linkClass, tdClass } from "@/components/ui";
import type { CandidateStatus, GermanLevel } from "@/types/database.types";

type Row = {
  id: string;
  status: CandidateStatus;
  german_level: GermanLevel;
  needs_training: boolean;
  created_at: string;
  profiles: { full_name: string | null; email: string | null; phone: string | null };
};

export default async function DossiersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; statut?: string }>;
}) {
  const { can } = await requireStaff();
  const { q, statut } = await searchParams;
  const supabase = await createClient();

  let query = supabase
    .from("candidates")
    .select("id, status, german_level, needs_training, created_at, profiles!inner(full_name, email, phone)")
    .order("created_at", { ascending: false })
    .limit(200);
  if (q) query = query.ilike("profiles.full_name", `%${q}%`);
  if (statut) query = query.eq("status", statut as CandidateStatus);
  const { data } = await query.returns<Row[]>();
  const rows = data ?? [];

  return (
    <div>
      <PageHeader
        title="Dossiers candidats"
        subtitle={`${rows.length} dossier${rows.length > 1 ? "s" : ""}`}
        actions={
          can("recruitment") && (
            <Link href="/dossiers/nouveau" className={buttonClass}>
              Nouveau dossier
            </Link>
          )
        }
      />
      <Card>
        <form className="mb-4 flex flex-wrap gap-3">
          <input name="q" defaultValue={q} placeholder="Rechercher un nom" className={`${inputClass} max-w-xs`} />
          <div className="w-48">
            <Select name="statut" options={CANDIDATE_STATUSES} defaultValue={statut} empty="Tous les statuts" />
          </div>
          <button className={ghostButtonClass}>Filtrer</button>
        </form>
        {rows.length === 0 ? (
          <Empty>Aucun dossier ne correspond.</Empty>
        ) : (
          <Table head={["Nom", "Contact", "Allemand", "Parcours", "Statut", "Créé le"]}>
            {rows.map((c) => (
              <tr key={c.id}>
                <td className={tdClass}>
                  <Link href={`/dossiers/${c.id}`} className={linkClass}>
                    {c.profiles.full_name || "Sans nom"}
                  </Link>
                </td>
                <td className={`${tdClass} text-brand-ink-secondary`}>
                  {c.profiles.email}
                  {c.profiles.phone && <span className="block">{c.profiles.phone}</span>}
                </td>
                <td className={tdClass}>{levelLabel(c.german_level)}</td>
                <td className={tdClass}>{c.needs_training ? "Full Training" : "Fast Track"}</td>
                <td className={tdClass}>
                  <Badge tone={c.status === "placed" ? "good" : c.status === "inactive" ? "bad" : "neutral"}>
                    {candidateStatusLabel(c.status)}
                  </Badge>
                </td>
                <td className={`${tdClass} text-brand-ink-muted`}>{formatDate(c.created_at)}</td>
              </tr>
            ))}
          </Table>
        )}
      </Card>
    </div>
  );
}
