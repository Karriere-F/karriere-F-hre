"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UserCheck,
  Compass,
  Languages,
  FolderCheck,
  Stamp,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";

type Step = { num: string; title: string; body: string };

// Icône par étape (ordre fixe des 7 services de l'accompagnement 360°).
const ICONS: LucideIcon[] = [UserCheck, Compass, Languages, FolderCheck, Stamp, Plane, Users];

// Connecteur courbe entre deux nœuds : il part du centre-haut, s'écarte d'un côté,
// puis revient au centre-bas. Le sens alterne (droite / gauche) d'une étape à l'autre.
function Connector({ side, animate }: { side: "right" | "left"; animate: boolean }) {
  const d =
    side === "right"
      ? "M100 0 C 188 42, 188 92, 100 134"
      : "M100 0 C 12 42, 12 92, 100 134";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 134"
      preserveAspectRatio="none"
      className="pointer-events-none mx-auto block h-24 w-56 sm:h-28"
    >
      {animate ? (
        <motion.path
          d={d}
          fill="none"
          stroke="var(--brand-gold)"
          strokeOpacity={0.4}
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      ) : (
        <path
          d={d}
          fill="none"
          stroke="var(--brand-gold)"
          strokeOpacity={0.4}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function AccompagnementPath({ steps }: { steps: Step[] }) {
  const reduce = useReducedMotion();
  const animate = !reduce;

  return (
    <ol className="mx-auto max-w-2xl">
      {steps.map((s, i) => {
        const Icon = ICONS[i] ?? UserCheck;
        return (
          <li key={s.num}>
            {i > 0 && <Connector side={i % 2 === 1 ? "right" : "left"} animate={animate} />}

            <motion.div
              className="flex flex-col items-center text-center"
              initial={animate ? { opacity: 0, y: 24 } : false}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Nœud : grand cercle avec icône + badge numéroté */}
              <div className="relative">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-white shadow-[0_8px_30px_rgba(17,17,17,0.08)] ring-1 ring-brand-gold/20 sm:h-28 sm:w-28">
                  <Icon className="h-10 w-10 text-brand-gold-text sm:h-11 sm:w-11" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold font-serif text-sm font-bold text-brand-black shadow-sm">
                  {s.num}
                </span>
              </div>

              <h3 className="mt-5 font-serif text-xl text-brand-black leading-snug sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-2.5 max-w-md text-brand-ink-secondary leading-relaxed">{s.body}</p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
