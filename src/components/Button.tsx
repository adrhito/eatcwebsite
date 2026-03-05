"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "carolina";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-200";

  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary:
      "border border-border bg-transparent text-foreground hover:border-carolina-border hover:text-carolina",
    carolina:
      "bg-carolina text-white hover:bg-carolina-dim",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
