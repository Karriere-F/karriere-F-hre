"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// A drop-in replacement for a `<Image fill>` inside an already-positioned,
// overflow-hidden hero container. As the section scrolls through the viewport,
// the photo drifts vertically at a slightly different rate than the page,
// giving the hero depth. The image layer is over-sized so the drift never
// exposes an edge.
//
// SSR-safe: the ref'd wrapper is always present (so framer-motion's useScroll
// always has a hydrated target), and the server + first client paint both render
// the plain static image — only after mount does the parallax layer take over,
// so there is no hydration mismatch. Reduced-motion users stay static.
export function ParallaxImage({
  src,
  alt,
  sizes,
  priority,
  imgClassName,
  objectPosition,
  strength = 44,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
  objectPosition?: string;
  /** Max vertical drift in px (image moves from +strength to -strength). */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  // Canonical "is this the client, after hydration?" flag — runs once on mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  const img = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={imgClassName}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {mounted && !reduceMotion ? (
        <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[10%]">
          {img}
        </motion.div>
      ) : (
        img
      )}
    </div>
  );
}
