export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: string[]; highlight?: boolean }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-brand-grid shadow-sm">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="bg-brand-black text-brand-white font-serif font-medium text-left px-4 py-3">
              {columns[0]}
            </th>
            {columns.slice(1).map((col) => (
              <th
                key={col}
                className="bg-brand-black text-brand-white font-serif font-medium text-left px-4 py-3"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className={row.highlight ? "bg-brand-gold/10" : "odd:bg-brand-card even:bg-brand-white"}
            >
              <th className="text-left font-semibold text-brand-black px-4 py-3 whitespace-nowrap border-b border-brand-grid">
                {row.label}
              </th>
              {row.values.map((v, i) => (
                <td key={i} className="text-brand-ink-secondary px-4 py-3 border-b border-brand-grid">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
