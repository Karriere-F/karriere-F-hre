import { requireRole } from "@/lib/auth/require-role";
import { Link } from "../../../../i18n/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireRole("admin");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 w-full flex gap-10">
      <nav className="w-48 shrink-0 flex flex-col gap-2 text-sm">
        <Link href="/admin" className="text-brand-ink-secondary hover:text-brand-gold">
          Vue d&apos;ensemble
        </Link>
        <Link
          href="/admin/candidates"
          className="text-brand-ink-secondary hover:text-brand-gold"
        >
          Candidats
        </Link>
        <Link
          href="/admin/employers"
          className="text-brand-ink-secondary hover:text-brand-gold"
        >
          Entreprises
        </Link>
        <Link
          href="/admin/staffing-requests"
          className="text-brand-ink-secondary hover:text-brand-gold"
        >
          Besoins en main-d&apos;œuvre
        </Link>
        <Link
          href="/admin/occupations"
          className="text-brand-ink-secondary hover:text-brand-gold"
        >
          Métiers en pénurie
        </Link>
        <Link
          href="/admin/contact-messages"
          className="text-brand-ink-secondary hover:text-brand-gold"
        >
          Messages de contact
        </Link>
        <Link
          href="/admin/appointments"
          className="text-brand-ink-secondary hover:text-brand-gold"
        >
          Rendez-vous
        </Link>
      </nav>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
