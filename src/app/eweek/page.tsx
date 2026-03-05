"use client";

import { siteConfig } from "../../config/siteConfig";
import { HeroReveal, ScrollReveal } from "../../components/ScrollReveal";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

const details = [
  { label: "Dates", value: siteConfig.eweek.dateRange },
  { label: "Time", value: siteConfig.eweek.time },
  { label: "Location", value: siteConfig.eweek.location },
  { label: "Booth Info", value: siteConfig.eweek.boothIncludes },
];

const highlights = [
  {
    title: "Live Demos",
    description:
      "See engineering projects in action — from robotics to software to sustainable design.",
  },
  {
    title: "Student Booths",
    description:
      "Teams showcase their work, share their process, and connect with fellow builders.",
  },
  {
    title: "Open to All",
    description:
      "Whether you're an engineer or just curious, E-Week is for the entire Carolina community.",
  },
];

export default function EWeek() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-carolina/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <HeroReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-carolina">
              Annual Event
            </p>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1
              className="text-gradient-carolina text-6xl tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineers Week
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A week-long celebration of engineering at Carolina — organized in
              collaboration with other organizations and companies, right in the
              heart of campus.
            </p>
          </HeroReveal>
          <HeroReveal delay={0.3}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-carolina-border bg-carolina-glow px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-carolina" />
              <span className="text-sm font-semibold tracking-tight text-carolina">
                {siteConfig.eweek.dateRange}
              </span>
            </div>
          </HeroReveal>
        </div>
      </section>

      <div className="mx-auto h-px max-w-7xl accent-line-carolina opacity-40" />

      {/* Details */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-carolina">
              Event Info
            </p>
            <h2
              className="mt-4 text-center text-3xl tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Details
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8">
            {details.map((detail, i) => (
              <ScrollReveal key={detail.label} delay={i * 0.08}>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-widest text-carolina">
                    {detail.label}
                  </p>
                  <p
                    className="mt-2 text-lg tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {detail.value}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-carolina">
              Experience
            </p>
            <h2
              className="mt-4 text-center text-3xl tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What to{" "}
              <span className="text-gradient-blue">Expect</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1} className="flex">
                <Card className="flex h-full w-full flex-col">
                  <h3
                    className="text-xl tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-carolina-border bg-surface p-10 text-center md:p-16 glow-carolina">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carolina to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-widest text-carolina">
                Get Involved
              </p>
              <h2
                className="mt-4 text-3xl tracking-tight text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Want to participate?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-muted md:text-lg">
                Whether you want to set up a booth, demo a project, or just come
                explore — we&apos;d love to see you there.
              </p>
              <div className="mt-8">
                <Button href={siteConfig.linktree} variant="carolina">
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
