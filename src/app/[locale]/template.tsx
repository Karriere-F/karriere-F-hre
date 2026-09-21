// A Next.js App Router `template` re-mounts on every navigation, so wrapping the
// page in a CSS entrance animation replays a soft fade + rise on each page
// change — a site-wide page transition. Kept as a Server Component with a plain
// CSS class (no hooks, no framer-motion) so server and client render identically
// (no hydration mismatch) and there is no SSR-blank. The `.page-enter` keyframes
// live in globals.css and are disabled under prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
