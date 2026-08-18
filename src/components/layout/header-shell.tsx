"use client";

import { useEffect, useState } from "react";

// Transparent over the hero at the top of the page; on scroll it settles into a
// solid, slightly blurred white bar with a hairline and a soft shadow so it
// separates from the content passing beneath it. The nav is dark on both states
// (every hero on the site is light), so no colour toggle is needed.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 text-brand-ink border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-brand-white/85 backdrop-blur-md border-brand-grid shadow-[0_1px_24px_rgba(17,17,17,0.06)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {children}
    </header>
  );
}
