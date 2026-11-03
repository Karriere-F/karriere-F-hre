/* eslint-disable @next/next/no-img-element */
import { requireStaff } from "@/lib/erp/auth";
import { staffRoleLabel } from "@/lib/erp/labels";
import { ErpNav, type NavGroup } from "@/components/erp-nav";
import { signOut } from "@/actions/auth-actions";

// The public website's own admin (site content, images, contact messages).
const SITE_ADMIN_URL = "https://www.karrierefaehre.com/fr/admin";

export default async function ErpLayout({ children }: { children: React.ReactNode }) {
  const { profile, isAdmin, can } = await requireStaff();

  const groups: NavGroup[] = [
    { title: "Pilotage", items: [{ href: "/", label: "Tableau de bord" }, { href: "/taches", label: "Tâches" }] },
    {
      title: "Recrutement",
      items: [
        { href: "/dossiers", label: "Dossiers candidats" },
        { href: "/placements", label: "Placements" },
      ],
    },
    {
      title: "École d'allemand",
      items: [
        { href: "/ecole", label: "Classes" },
        { href: "/examens", label: "Examens" },
      ],
    },
  ];
  if (can("finance")) {
    groups.push({
      title: "Finances",
      items: [
        { href: "/factures", label: "Factures" },
        { href: "/depenses", label: "Dépenses" },
      ],
    });
  }
  groups.push(
    isAdmin
      ? {
          title: "Administration",
          items: [
            { href: "/equipe", label: "Équipe et accès" },
            { href: SITE_ADMIN_URL, label: "Admin du site web", external: true },
          ],
        }
      : { title: "Compte", items: [{ href: "/equipe", label: "Mon compte" }] }
  );

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside className="erp-sidebar shrink-0 border-b border-brand-grid bg-white px-4 py-6 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <div className="mb-8 flex items-center gap-3 px-3">
          <img src="/logo-kf-transparent.png" alt="" className="h-10 w-auto" />
          <div>
            <p className="font-serif text-lg leading-tight text-brand-black">Karriere Fähre</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-brand-ink-muted">ERP</p>
          </div>
        </div>
        <ErpNav groups={groups} />
        <div className="mt-8 border-t border-brand-grid px-3 pt-4">
          <p className="text-xs text-brand-black">{profile.full_name || profile.email}</p>
          <p className="text-xs text-brand-ink-muted">{staffRoleLabel(isAdmin ? null : profile.staff_role)}</p>
          <form action={signOut} className="mt-3">
            <button className="text-xs text-brand-ink-secondary hover:text-brand-black">Se déconnecter</button>
          </form>
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:py-10">{children}</main>
    </div>
  );
}
