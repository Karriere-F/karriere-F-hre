"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type HeroSlide = { src: string; alt: string };

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 3800);
    return () => clearInterval(id);
  }, [reduce, slides.length]);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <Image
            src={slides[i].src}
            alt={slides[i].alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Fondu dans l'arrière-plan sur les 4 bords */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-card to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-card to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-card to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-card to-transparent" />

      {/* Indicateurs */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, k) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Voir la photo ${k + 1} sur ${slides.length}`}
            aria-current={k === i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              k === i ? "w-7 bg-brand-gold" : "w-1.5 bg-brand-black/25 hover:bg-brand-black/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
