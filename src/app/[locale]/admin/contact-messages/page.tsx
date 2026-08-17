import { createClient } from "@/lib/supabase/server";
import { ContactMessageToggle } from "@/components/admin/contact-message-toggle";

export default async function AdminContactMessagesPage() {
  const supabase = await createClient();

  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Messages de contact</h1>
      <div className="flex flex-col gap-3">
        {(messages ?? []).map((m) => (
          <div key={m.id} className="rounded-lg border border-brand-grid p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-brand-black font-medium">
                {m.name} — {m.email}
              </p>
              <ContactMessageToggle messageId={m.id} handled={m.handled} />
            </div>
            <p className="text-sm text-brand-ink-secondary">{m.message}</p>
          </div>
        ))}
        {(!messages || messages.length === 0) && (
          <p className="text-brand-ink-muted text-sm">Aucun message.</p>
        )}
      </div>
    </div>
  );
}
