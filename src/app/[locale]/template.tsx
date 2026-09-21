"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// A Next.js App Router `template` re-mounts on every navigation, so this is the
// natural place for a site-wide page-enter transition. Each time the visitor
// moves to a new page, its content fades and rises in with a soft ease.
//
// SSR / SEO safe: the very first page load (and reduced-motion users) render the
// content directly, with no opacity:0 wrapper — so server HTML is fully visible
// and crawlers never see a blank page. Only client-side navigations animate.
let firstRender = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  // Capture whether this is the initial page load exactly once per mount.
  const [isInitial] = useState(() => {
    const wasFirst = firstRender;
    firstRender = false;
    return wasFirst;
  });

  if (reduceMotion || isInitial) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
