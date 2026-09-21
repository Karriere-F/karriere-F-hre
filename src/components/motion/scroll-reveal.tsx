"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate } from "framer-motion";

// Progressive-enhancement scroll reveals, powered by framer-motion.
//
// Mounted once in the root layout. It upgrades every element that already carries
// the `.animate-fade-up` class (used across the whole site) so that, instead of
// all fading in at once on load, elements below the fold rise + fade in as they
// scroll into view.
//
// Safety / SSR: content is visible by default. We ONLY touch elements that are
// currently below the fold — those are off-screen, so hiding them causes no
// flash, and if JS never runs (crawler, no-JS) everything stays visible via the
// CSS fallback. Reduced-motion and missing IntersectionObserver are respected.
// Hover transforms are preserved: the inline transform is cleared once the
// reveal finishes, so CSS `:hover` lifts keep working.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const EASE = [0.23, 1, 0.32, 1] as const;
    const cleanups: Array<() => void> = [];

    // Wait a frame so freshly-navigated page content is in the DOM.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".animate-fade-up"),
      ).filter((el) => !el.dataset.revealed);

      const reveal = (el: HTMLElement) => {
        el.dataset.revealed = "1";
        const delayMs = parseFloat(el.style.animationDelay || "0") || 0;
        const controls = animate(
          el,
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.5, delay: delayMs / 1000, ease: EASE },
        );
        controls.finished
          .then(() => {
            // Clear the inline transform so CSS :hover lifts keep working.
            el.style.transform = "";
            el.style.opacity = "";
            el.style.willChange = "";
          })
          .catch(() => {});
      };

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              io.unobserve(entry.target);
              reveal(entry.target as HTMLElement);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
      );

      for (const el of els) {
        const rect = el.getBoundingClientRect();
        // Only touch elements that are ENTIRELY below the viewport — those are
        // off-screen, so hiding them is invisible and never blanks visible
        // content. Anything already on screen (or scrolled past) is left as-is.
        const fullyBelow = rect.top >= window.innerHeight;
        if (!fullyBelow) {
          el.dataset.revealed = "1";
          continue;
        }
        // Below the fold: hand it to framer-motion for a scroll reveal.
        el.style.animation = "none";
        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        el.style.willChange = "opacity, transform";
        io.observe(el);
      }

      cleanups.push(() => io.disconnect());
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
