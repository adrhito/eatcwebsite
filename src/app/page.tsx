"use client";

import { siteConfig } from "../config/siteConfig";
import { HeroReveal, ScrollReveal } from "../components/ScrollReveal";
import { Card } from "../components/Card";
import { SpotlightSection } from "../components/SpotlightSection";
import { Button } from "../components/Button";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const OldWell = dynamic(() => import("../components/OldWell"), { ssr: false });

const pillars = [
  {
    title: "Professional Growth",
    description:
      "Regional industrial connections, networking events, and mentorship opportunities that bridge campus and career.",
  },
  {
    title: "Hands-On Building",
    description:
      "Design challenges, research projects, and practical activities where you turn ideas into impact.",
  },
  {
    title: "Engineers Week",
    description:
      "Our flagship week of demos, booths, and showcases — organized in collaboration with companies and campus organizations.",
  },
  {
    title: "STEM Outreach",
    description:
      "Service events focused on teaching STEM concepts and inspiring the next generation of innovators.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-16">
        {/* Top text */}
        <div className="relative mx-auto max-w-4xl text-center">
          <HeroReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-carolina">
              {siteConfig.org.name}
            </p>
          </HeroReveal>
          <h1
            className="text-gradient-carolina text-6xl tracking-tight md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {["Build.", "Learn.", "Connect."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + i * 0.5,
                }}
                className="inline-block mr-[0.3em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* 3D Old Well */}
        <div className="pointer-events-none -my-30 h-[350px] w-[350px] md:h-[600px] md:w-[600px]">
          <OldWell />
        </div>

        {/* Bottom text + buttons */}
        <div className="relative mx-auto max-w-4xl text-center">
          <HeroReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
              Empowering innovative thinkers in engineering, medicine, business,
              the sciences, and beyond — through a collaborative academic,
              professional, and social community at UNC.
            </p>
          </HeroReveal>
          <HeroReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={siteConfig.linktree} variant="carolina">
                Get Involved
              </Button>
              <Button href="/accelerator" variant="secondary">
                Learn More
              </Button>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* Blue gradient divider */}
      <div className="mx-auto h-px max-w-7xl accent-line-carolina opacity-40" />

      {/* Mission */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-carolina">
              Our Mission
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Innovation for{" "}
              <span className="text-gradient-blue">Impact</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              We connect students who share an interest in innovation —
              whether through technology, design, or research. We promote
              interdisciplinary collaboration, sustainability, and the
              Department of Applied Physical Sciences on campus and in the
              broader community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="mx-auto h-px max-w-7xl accent-line-carolina opacity-20" />

      {/* What We Do — with spotlight effect */}
      <SpotlightSection>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-carolina">
                What We Do
              </p>
              <h2
                className="mt-4 text-center text-3xl tracking-tight text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Four Pillars
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8">
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 0.08}>
                  <Card>
                    <h3
                      className="text-xl tracking-tight text-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </SpotlightSection>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-carolina-border bg-surface p-10 text-center md:p-16 glow-carolina">
              {/* Blue accent at top of card */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carolina to-transparent" />
              <h2
                className="text-3xl tracking-tight text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to build something?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-muted md:text-lg">
                Join a community of engineers, designers, and innovators
                equipped with the problem-solving skills and resources to become
                creative leaders.
              </p>
              <div className="mt-8">
                <Button href={siteConfig.linktree} variant="carolina">
                  Get Involved
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
