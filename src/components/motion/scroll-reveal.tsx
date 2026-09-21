"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate } from "framer-motion";

// Progressive-enhancement scroll reveals, powered by framer-motion.
//
// Mounted once in the root layout. It upgrades every element that already carries
// the `.animate-fade-up` class (used across the whole site) so that, instead of
// all fading in at once on load, elements below the fold rise + sharpen (blur →
// crisp) as they scroll into view, and siblings in the same group cascade with a
// gentle stagger.
//
// Safety / SSR: content is visible by default. We ONLY touch elements that are
// currently below the fold — those are off-screen, so hiding them causes no
// flash, and if JS never runs (crawler, no-JS) everything stays visible via the
// CSS fallback. Reduced-motion and missing IntersectionObserver are respected.
// Hover transforms are preserved: the inline transform/filter are cleared once
// the reveal finishes, so CSS `:hover` lifts keep working.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const EASE = [0.16, 1, 0.3, 1] as const;
    const cleanups: Array<() => void> = [];

    // Wait a frame so freshly-navigated page content is in the DOM.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".animate-fade-up"),
      ).filter((el) => !el.dataset.revealed);

      const reveal = (el: HTMLElement) => {
        el.dataset.revealed = "1";
        const delayMs = parseFloat(el.dataset.revealDelay || "0") || 0;
        const controls = animate(
          el,
          { opacity: [0, 1], y: [18, 0], filter: ["blur(8px)", "blur(0px)"] },
          { duration: 0.6, delay: delayMs / 1000, ease: EASE },
        );
        controls.finished
          .then(() => {
            // Clear inline styles so CSS :hover lifts and normal painting resume.
            el.style.transform = "";
            el.style.opacity = "";
            el.style.filter = "";
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

      // Per-parent counter so a grid of cards cascades instead of popping at once.
      const staggerByParent = new Map<Element, number>();

      for (const el of els) {
        const rect = el.getBoundingClientRect();
        // Only touch elements ENTIRELY below the viewport — off-screen, so hiding
        // them is invisible and never blanks visible content.
        const fullyBelow = rect.top >= window.innerHeight;
        if (!fullyBelow) {
          el.dataset.revealed = "1";
          continue;
        }
        // Stagger: keep an author-set animationDelay if present, otherwise derive
        // one from the element's order among its revealable siblings (capped).
        // Inline animationDelay is authored in ms (e.g. "60ms"), so parseFloat
        // already yields milliseconds.
        const inline = parseFloat(el.style.animationDelay || "0") || 0;
        let delayMs = inline;
        if (!inline && el.parentElement) {
          const n = staggerByParent.get(el.parentElement) ?? 0;
          staggerByParent.set(el.parentElement, n + 1);
          delayMs = Math.min(n, 6) * 70;
        }
        el.dataset.revealDelay = String(delayMs);

        el.style.animation = "none";
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        el.style.filter = "blur(8px)";
        el.style.willChange = "opacity, transform, filter";
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
