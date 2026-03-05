"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Accelerator", href: "/accelerator" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "E-Week", href: "/eweek" },
];

export function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {siteConfig.org.shortName}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-tight transition-colors duration-200 ${
                pathname === link.href
                  ? "text-carolina"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href={siteConfig.linktree}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="rounded-full bg-carolina px-5 py-2 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-carolina-dim"
          >
            Get Involved
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium tracking-tight transition-colors ${
                  pathname === link.href
                    ? "bg-surface text-carolina"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-carolina px-5 py-3 text-center text-sm font-semibold tracking-tight text-white"
            >
              Get Involved
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
