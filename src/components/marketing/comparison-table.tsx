"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: string[]; highlight?: boolean }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="overflow-x-auto rounded-xl border border-brand-grid shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="bg-brand-black px-4 py-3 text-left font-serif font-medium text-brand-white">
              {columns[0]}
            </th>
            {columns.slice(1).map((col) => (
              <th key={col} className="bg-brand-black px-4 py-3 text-left font-serif font-medium text-brand-white">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <motion.tr
              key={row.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
              className={`transition-colors duration-150 hover:bg-brand-gold/[0.08] ${
                row.highlight ? "bg-brand-gold/10" : "odd:bg-brand-card even:bg-brand-white"
              }`}
            >
              <th className="whitespace-nowrap border-b border-brand-grid px-4 py-3 text-left font-semibold text-brand-black">
                {row.label}
              </th>
              {row.values.map((v, j) => (
                <td key={j} className="border-b border-brand-grid px-4 py-3 text-brand-ink-secondary">
                  {v}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
