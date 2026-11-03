import { createClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/erp/auth";
import { getTeam } from "@/lib/erp/server";
import { STAFF_ROLES, staffRoleLabel } from "@/lib/erp/labels";
import { addStaffMember, changeOwnPassword, updateStaffMember } from "@/actions/erp/team-actions";
import { Badge, Card, ErrorBanner, Field, PageHeader, Select, inputClass } from "@/components/erp/ui";
import { SubmitButton } from "@/components/erp/submit-button";

export default async function TeamPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string; ajoute?: string; mdp?: string }>;
}) {
  const { isAdmin } = await requireStaff();
  const { erreur, ajoute, mdp } = await searchParams;
  const supabase = await createClient();
  const team = isAdmin ? await getTeam(supabase) : [];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title={isAdmin ? "Équipe et accès" : "Mon compte"} />
      <ErrorBanner message={erreur} />
      {(ajoute || mdp) && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {ajoute
            ? `${ajoute} a maintenant accès à l'ERP. Transmettez-lui son mot de passe provisoire : il se connecte sur la page Connexion du site.`
            : "Votre mot de passe a été changé."}
        </div>
      )}

      {isAdmin && (
        <>
          <Card title="Membres">
            <ul className="divide-y divide-brand-grid">
              {team.map((m) => (
                <li key={m.id} className="py-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-brand-black">{m.full_name || m.email}</p>
                      <p className="text-xs text-brand-ink-muted">{m.email}</p>
                    </div>
                    <Badge tone={m.role === "admin" ? "gold" : m.staff_active ? "good" : "bad"}>
                      {m.role === "admin" ? "Administrateur" : m.staff_active ? staffRoleLabel(m.staff_role) : "Désactivé"}
                    </Badge>
                  </div>
                  {m.role === "staff" && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs text-brand-ink-muted">Modifier l&apos;accès</summary>
                      <form action={updateStaffMember.bind(null, m.id)} className="mt-3 grid gap-3 rounded-lg bg-brand-black/[0.03] p-3 sm:grid-cols-4">
                        <Field label="Rôle">
                          <Select name="staff_role" options={STAFF_ROLES} defaultValue={m.staff_role} />
                        </Field>
                        <Field label="Nouveau mot de passe (optionnel)">
                          <input name="password" type="text" minLength={8} autoComplete="off" className={inputClass} />
                        </Field>
                        <label className="flex items-end gap-2 pb-2 text-sm">
                          <input type="checkbox" name="staff_active" defaultChecked={m.staff_active} className="accent-[#c39a3e]" />
                          Accès actif
                        </label>
                        <div className="flex items-end">
                          <SubmitButton>Enregistrer</SubmitButton>
                        </div>
                      </form>
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Ajouter un membre">
            <form action={addStaffMember} className="grid gap-3 sm:grid-cols-2">
              <Field label="Nom complet *">
                <input name="full_name" required className={inputClass} />
              </Field>
              <Field label="Email *">
                <input name="email" type="email" required className={inputClass} />
              </Field>
              <Field label="Rôle *">
                <Select name="staff_role" options={STAFF_ROLES.map((r) => ({ key: r.key, label: `${r.label} : ${r.hint}` }))} defaultValue="recruiter" />
              </Field>
              <Field label="Mot de passe provisoire (8 caractères min.)">
                <input name="password" type="text" minLength={8} autoComplete="off" className={inputClass} />
              </Field>
              <div>
                <SubmitButton>Donner l&apos;accès</SubmitButton>
              </div>
            </form>
          </Card>
        </>
      )}

      <Card title="Changer mon mot de passe" className="max-w-xl">
        <form action={changeOwnPassword} className="grid gap-3 sm:grid-cols-2">
          <Field label="Nouveau mot de passe">
            <input name="password" type="password" required minLength={8} autoComplete="new-password" className={inputClass} />
          </Field>
          <Field label="Confirmer">
            <input name="confirm" type="password" required minLength={8} autoComplete="new-password" className={inputClass} />
          </Field>
          <div>
            <SubmitButton>Changer</SubmitButton>
          </div>
        </form>
      </Card>
    </div>
  );
}
