"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl border border-carolina-border bg-surface p-6 md:p-8 glow-carolina transition-colors duration-300 ${className}`}
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-carolina to-transparent" />
      {children}
    </motion.div>
  );
}
