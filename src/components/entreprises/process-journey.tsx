"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  Search,
  GraduationCap,
  Users,
  MessageSquare,
  PlaneLanding,
  Mic,
  BookOpen,
  Repeat,
  Route,
  FileCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  search: Search,
  cap: GraduationCap,
  users: Users,
  message: MessageSquare,
  plane: PlaneLanding,
  mic: Mic,
  book: BookOpen,
  repeat: Repeat,
  route: Route,
  file: FileCheck,
};

export type JourneyStep = { etape: string; title: string; body: string; icon: string };

export function ProcessJourney({ steps, surface = "bg-brand-white" }: { steps: JourneyStep[]; surface?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 72%", "end 62%"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setReached(Math.max(0, Math.min(steps.length - 1, Math.floor(v * steps.length))));
  });

  return (
    <ol ref={ref} className="relative mt-12 max-w-3xl">
      {/* Fil discret (fond) */}
      <span aria-hidden="true" className="pointer-events-none absolute left-[31px] top-8 bottom-8 w-0.5 rounded-full bg-brand-gold/15" />
      {/* Fil doré qui se dessine au défilement */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-[31px] top-8 bottom-8 w-0.5 origin-top rounded-full bg-brand-gold"
        style={reduce ? { scaleY: 1 } : { scaleY: scrollYProgress }}
      />

      {steps.map((step, i) => {
        const Icon = ICONS[step.icon] ?? ClipboardList;
        const on = reduce || i <= reached;
        return (
          <li key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
            <motion.span
              initial={false}
              animate={reduce ? {} : { scale: on ? 1.06 : 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              className={`relative z-10 flex h-16 w-16 shrink-0 self-start items-center justify-center rounded-full border transition-colors duration-300 ${
                on
                  ? "border-brand-gold bg-brand-gold text-brand-black shadow-[0_10px_28px_rgba(195,154,62,0.28)]"
                  : `border-brand-gold/40 ${surface} text-brand-gold-text`
              }`}
            >
              <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
            </motion.span>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                {step.etape} {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-serif text-xl text-brand-black leading-snug">{step.title}</h3>
              <p className="mt-2 text-brand-ink-secondary leading-relaxed">{step.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
