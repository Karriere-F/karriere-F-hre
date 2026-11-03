"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-md bg-brand-gold px-4 py-2 text-sm font-medium text-brand-black hover:bg-brand-gold-light"
    >
      Imprimer ou enregistrer en PDF
    </button>
  );
}
