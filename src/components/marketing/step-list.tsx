export function StepList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2">
      {steps.map((s) => (
        <li key={s.title} className="rounded-lg border border-brand-grid p-6">
          <h3 className="text-brand-gold font-semibold mb-2">{s.title}</h3>
          <p className="text-brand-ink-secondary text-sm leading-relaxed">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
