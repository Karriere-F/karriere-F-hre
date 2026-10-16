"use client";

import { useState } from "react";
import { getUploadSignedUrl } from "@/actions/admin-actions";

// Scans a contact message for Fast Track document paths (stored as plain storage paths, not
// URLs) and renders a button per document. Clicking mints a fresh 5-minute signed URL via an
// admin-only server action and opens it — so CVs/diplomas are never exposed by a long-lived URL.
export function UploadedDocLinks({ message }: { message: string }) {
  const paths = [...new Set([...message.matchAll(/fast-track\/[A-Za-z0-9._-]+\/(?:cv|diplomes)\.pdf/g)].map((m) => m[0]))];
  const [loading, setLoading] = useState<string | null>(null);

  if (paths.length === 0) return null;

  async function open(path: string) {
    setLoading(path);
    const res = await getUploadSignedUrl(path);
    setLoading(null);
    if (res.ok) {
      window.open(res.url, "_blank", "noopener,noreferrer");
    } else {
      alert("Lien indisponible.");
    }
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {paths.map((path) => {
        const label = path.endsWith("/cv.pdf")
          ? "Ouvrir le CV"
          : path.endsWith("/diplomes.pdf")
            ? "Ouvrir les diplômes"
            : "Ouvrir le document";
        return (
          <button
            key={path}
            type="button"
            onClick={() => open(path)}
            disabled={loading === path}
            className="press inline-flex items-center gap-1.5 rounded-md border border-brand-gold px-3 py-1.5 text-xs font-semibold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black disabled:opacity-60"
          >
            {loading === path ? "Génération…" : label}
          </button>
        );
      })}
    </div>
  );
}
