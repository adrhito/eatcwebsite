"use client";

import { siteConfig } from "../../config/siteConfig";
import { HeroReveal, ScrollReveal } from "../../components/ScrollReveal";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

const phases = [
  {
    title: "Ideation",
    description:
      "Develop your concept with mentorship, workshops, and peer feedback sessions across disciplines.",
  },
  {
    title: "Prototyping",
    description:
      "Turn ideas into working prototypes with access to tools, labs, and technical guidance.",
  },
  {
    title: "Launch",
    description:
      "Present your project, get feedback from industry professionals, and ship it to the world.",
  },
];

export default function Accelerator() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-carolina/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <HeroReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-carolina">
              Program
            </p>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1
              className="text-gradient-carolina text-6xl tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Accelerator
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A semester-long program that takes your project from concept to
              reality. Open to all disciplines — engineering, design, research,
              and beyond.
            </p>
          </HeroReveal>
        </div>
      </section>

      <div className="mx-auto h-px max-w-7xl accent-line-carolina opacity-40" />

      {/* How It Works */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-carolina">
              The Process
            </p>
            <h2
              className="mt-4 text-center text-3xl tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Three Phases.{" "}
              <span className="text-gradient-blue">One Semester.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.title} delay={i * 0.1} className="flex">
                <Card className="flex h-full w-full flex-col">
                  <p className="text-2xl font-semibold text-carolina/40">
                    0{i + 1}
                  </p>
                  <h3
                    className="mt-3 text-xl tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {phase.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {phase.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-carolina-border bg-surface p-10 md:p-16 glow-carolina">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carolina to-transparent" />
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-carolina">
                  Open to All
                </p>
                <h2
                  className="mt-4 text-3xl tracking-tight text-foreground md:text-4xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Who It&apos;s For
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  Any UNC student with an idea — whether you&apos;re in
                  engineering, medicine, business, law, or the sciences.
                  We welcome diverse perspectives and talents. Just bring
                  curiosity and drive.
                </p>
                <div className="mt-8">
                  <Button href={siteConfig.linktree} variant="carolina">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
