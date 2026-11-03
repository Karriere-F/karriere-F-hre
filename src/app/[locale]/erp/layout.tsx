import type { Metadata } from "next";
import { requireStaff } from "@/lib/erp/auth";
import { staffRoleLabel } from "@/lib/erp/labels";
import { ErpNav, type NavGroup } from "@/components/erp/erp-nav";

export const metadata: Metadata = {
  title: "ERP",
  robots: { index: false, follow: false },
};

export default async function ErpLayout({ children }: { children: React.ReactNode }) {
  const { profile, isAdmin, can } = await requireStaff();

  const groups: NavGroup[] = [
    { title: "Pilotage", items: [{ href: "/erp", label: "Tableau de bord" }, { href: "/erp/taches", label: "Tâches" }] },
    {
      title: "Recrutement",
      items: [
        { href: "/erp/dossiers", label: "Dossiers candidats" },
        { href: "/erp/placements", label: "Placements" },
      ],
    },
    {
      title: "École d'allemand",
      items: [
        { href: "/erp/ecole", label: "Classes" },
        { href: "/erp/examens", label: "Examens" },
      ],
    },
  ];
  if (can("finance")) {
    groups.push({
      title: "Finances",
      items: [
        { href: "/erp/factures", label: "Factures" },
        { href: "/erp/depenses", label: "Dépenses" },
      ],
    });
  }
  groups.push(
    isAdmin
      ? {
          title: "Administration",
          items: [
            { href: "/erp/equipe", label: "Équipe et accès" },
            { href: "/admin", label: "Admin du site" },
          ],
        }
      : { title: "Compte", items: [{ href: "/erp/equipe", label: "Mon compte" }] }
  );

  return (
    <div className="erp-shell mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
      <aside className="erp-sidebar shrink-0 lg:w-56">
        <div className="mb-6 px-3">
          <p className="font-serif text-xl text-brand-black">ERP</p>
          <p className="text-xs text-brand-black">{profile.full_name || profile.email}</p>
          <p className="text-xs text-brand-ink-muted">
            {staffRoleLabel(isAdmin ? null : profile.staff_role)}
          </p>
        </div>
        <ErpNav groups={groups} />
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
