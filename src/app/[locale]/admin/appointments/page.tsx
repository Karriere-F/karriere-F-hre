import { createClient } from "@/lib/supabase/server";
import { CancelAppointmentButton } from "@/components/admin/cancel-appointment-button";

export default async function AdminAppointmentsPage() {
  const supabase = await createClient();

  const { data: appointments } = await supabase
    .from("appointments")
    .select("*")
    .order("appointment_date", { ascending: true })
    .order("appointment_time", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Rendez-vous</h1>
      <div className="flex flex-col gap-3">
        {(appointments ?? []).map((a) => (
          <div
            key={a.id}
            className="rounded-lg border border-brand-grid p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-brand-black font-medium">
                {a.appointment_date} — {a.appointment_time.slice(0, 5)}
              </p>
              <p className="text-sm text-brand-ink-muted">
                {a.full_name} — {a.email} {a.phone ? `— ${a.phone}` : ""}
              </p>
              {a.notes && <p className="text-sm text-brand-ink-secondary mt-1">{a.notes}</p>}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-brand-ink-muted">{a.status}</span>
              {a.status === "confirmed" && (
                <CancelAppointmentButton appointmentId={a.id} />
              )}
            </div>
          </div>
        ))}
        {(!appointments || appointments.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucun rendez-vous.</p>
        )}
      </div>
    </div>
  );
}
