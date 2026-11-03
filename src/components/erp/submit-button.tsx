"use client";

import { useFormStatus } from "react-dom";

// Forms and admin keep the filled gold button; the outline style is for public CTAs only.
export function SubmitButton({
  children,
  variant = "primary",
  confirm,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  confirm?: string;
}) {
  const { pending } = useFormStatus();
  const styles = {
    primary: "bg-brand-gold text-brand-black hover:bg-brand-gold-light",
    secondary: "border border-brand-grid bg-white text-brand-black hover:border-brand-gold",
    danger: "border border-red-200 bg-white text-red-700 hover:bg-red-50",
  }[variant];

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={(e) => {
        if (confirm && !window.confirm(confirm)) e.preventDefault();
      }}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 ${styles}`}
    >
      {pending ? "Enregistrement..." : children}
    </button>
  );
}
