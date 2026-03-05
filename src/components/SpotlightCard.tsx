"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function SpotlightCard({
  children,
  className = "",
  index,
}: SpotlightCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(ref.current ? ref.current.offsetWidth / 2 : 150);
    mouseY.set(ref.current ? ref.current.offsetHeight / 2 : 100);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease, delay: index * 0.1 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={prefersReducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.2, ease }}
        className={`group relative h-full overflow-hidden rounded-2xl border border-carolina-border bg-surface p-6 md:p-8 transition-colors duration-300 ${className}`}
      >
        {/* Blue accent line at top */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-carolina to-transparent" />

        {/* Spotlight glow that follows cursor */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: prefersReducedMotion
              ? "none"
              : `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(75, 156, 211, 0.12), transparent 60%)`,
          }}
        />

        {/* Scroll-triggered ambient glow */}
        <motion.div
          className="pointer-events-none absolute -inset-4 z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease, delay: index * 0.15 + 0.2 }}
        >
          <div className="h-full w-full rounded-3xl bg-carolina/[0.04] blur-xl" />
        </motion.div>

        {/* Outer glow ring on scroll reveal */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease, delay: index * 0.15 + 0.3 }}
          style={{
            boxShadow:
              "0 0 40px rgba(75, 156, 211, 0.08), 0 0 80px rgba(75, 156, 211, 0.04), inset 0 0 20px rgba(75, 156, 211, 0.02)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
}
