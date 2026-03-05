"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useCallback } from "react";

interface SpotlightSectionProps {
  children: ReactNode;
  className?: string;
}

function playFlashlightSound() {
  try {
    const ctx = new AudioContext();

    const clickDuration = 0.04;
    const clickBuffer = ctx.createBuffer(
      1,
      ctx.sampleRate * clickDuration,
      ctx.sampleRate
    );
    const clickData = clickBuffer.getChannelData(0);
    for (let i = 0; i < clickData.length; i++) {
      const t = i / ctx.sampleRate;
      const envelope = Math.exp(-t * 150);
      clickData[i] = (Math.random() * 2 - 1) * envelope * 0.4;
    }

    const clickSource = ctx.createBufferSource();
    clickSource.buffer = clickBuffer;

    const clickFilter = ctx.createBiquadFilter();
    clickFilter.type = "bandpass";
    clickFilter.frequency.value = 3000;
    clickFilter.Q.value = 2;

    const clickGain = ctx.createGain();
    clickGain.gain.value = 0.6;

    clickSource.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickSource.start(ctx.currentTime);

    const thudDuration = 0.06;
    const thudBuffer = ctx.createBuffer(
      1,
      ctx.sampleRate * thudDuration,
      ctx.sampleRate
    );
    const thudData = thudBuffer.getChannelData(0);
    for (let i = 0; i < thudData.length; i++) {
      const t = i / ctx.sampleRate;
      const envelope = Math.exp(-t * 80);
      thudData[i] = Math.sin(2 * Math.PI * 200 * t) * envelope * 0.3;
    }

    const thudSource = ctx.createBufferSource();
    thudSource.buffer = thudBuffer;

    const thudGain = ctx.createGain();
    thudGain.gain.value = 0.4;

    thudSource.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudSource.start(ctx.currentTime + 0.005);

    setTimeout(() => ctx.close(), 500);
  } catch {
    // Silently fail if audio is blocked
  }
}

export function SpotlightSection({
  children,
  className = "",
}: SpotlightSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastSoundTime = useRef(0);
  const prevInView = useRef(false);

  const isInView = useInView(sectionRef, {
    margin: "-50% 0px -50% 0px",
  });

  const handleViewChange = useCallback(() => {
    if (prefersReducedMotion) return;

    if (isInView && !prevInView.current) {
      const now = Date.now();
      if (now - lastSoundTime.current > 1500) {
        playFlashlightSound();
        lastSoundTime.current = now;
      }
    }
    prevInView.current = isInView;
  }, [isInView, prefersReducedMotion]);

  useEffect(() => {
    handleViewChange();
  }, [handleViewChange]);

  if (prefersReducedMotion) {
    return (
      <div ref={sectionRef} className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {/* ── Fixed full-screen dark overlay ──
          Dims the entire viewport when the section is in view.
          z-40 sits below the navbar (z-50) but above all other content. */}
      <motion.div
        data-testid="spotlight-overlay"
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 40,
          background: "rgba(0,0,0,0.92)",
        }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 0.1 : 0.15 }}
      />

      {/* ── Spotlight glow ──
          Radial gradient behind the content creating an illuminated circle feel.
          z-44 sits between overlay (z-40) and content (z-45). */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 44,
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(75,156,211,0.12) 30%, rgba(75,156,211,0.04) 55%, transparent 75%)",
        }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 0.1 : 0.15 }}
      />

      {/* ── Content ──
          Lifted above the overlay (z-45) when active so it appears illuminated.
          Falls back to normal stacking when inactive. */}
      <div
        className="relative"
        style={{ zIndex: isInView ? 45 : "auto" }}
      >
        {children}
      </div>
    </div>
  );
}
