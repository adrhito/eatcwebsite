"use client";

import { siteConfig } from "../../config/siteConfig";
import { HeroReveal, ScrollReveal } from "../../components/ScrollReveal";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

const reasons = [
  {
    title: "Interdisciplinary Community",
    description:
      "Collaborate across engineering, medicine, business, law, the sciences, and beyond. Every perspective matters.",
  },
  {
    title: "Industry Connections",
    description:
      "Access regional industrial networks, attend exclusive workshops, and build relationships with professionals.",
  },
  {
    title: "Hands-On Projects",
    description:
      "Design challenges, research opportunities, and practical activities that build real problem-solving skills.",
  },
  {
    title: "Leadership & Impact",
    description:
      "Grow into roles that challenge you — organize events, lead teams, and become a creative leader.",
  },
];

export default function Recruitment() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-carolina/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <HeroReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-carolina">
              Join Us
            </p>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1
              className="text-gradient-carolina text-6xl tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Recruitment
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              We&apos;re looking for curious, driven students who want to
              innovate for impact — in all fields, not just engineering.
            </p>
          </HeroReveal>
        </div>
      </section>

      <div className="mx-auto h-px max-w-7xl accent-line-carolina opacity-40" />

      {/* Why Join */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-carolina">
              Why E@C
            </p>
            <h2
              className="mt-4 text-center text-3xl tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More than a club —{" "}
              <span className="text-gradient-blue">a launchpad.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.08}>
                <Card>
                  <h3
                    className="text-xl tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support callout */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="flex items-center gap-6 rounded-2xl border border-carolina-border bg-surface p-8">
              <div className="hidden h-12 w-1 rounded-full bg-carolina sm:block" />
              <div>
                <p
                  className="text-lg tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Academic Support
                </p>
                <p className="mt-1 text-sm text-muted">
                  We offer academic resources and peer mentorship, equipping
                  members with the problem-solving skills they need to thrive.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Join */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-carolina-border bg-surface p-10 md:p-16 glow-carolina">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carolina to-transparent" />
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-carolina">
                  Get Started
                </p>
                <h2
                  className="mt-4 text-3xl tracking-tight text-foreground md:text-4xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  How to Join
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  Follow us on our socials, attend our events, and apply when
                  recruitment opens. All majors welcome — if you&apos;re
                  passionate about innovation, you belong here.
                </p>
                <div className="mt-8">
                  <Button href={siteConfig.linktree} variant="carolina">
                    Get Started
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
