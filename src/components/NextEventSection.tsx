"use client";

import Link from "next/link";
import { nextEvent } from "@/data/events";
import { useLanguage } from "@/context/LanguageContext";

export default function NextEventSection() {
  const { language } = useLanguage();
  const copy = nextEvent[language];

  return (
    <section id="event" className="px-6 pb-16 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-seafoam/30 bg-white/80 p-8 shadow-glow sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-seafoam/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-deepteal/15 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <p className="section-kicker">{copy.kickerLabel}</p>
              <h2
                className="text-5xl text-deepteal sm:text-6xl md:text-7xl"
                style={{ fontFamily: "'BrushyStrokes', cursive", lineHeight: 1.35 }}
              >
                {copy.title}
              </h2>
              <p className="max-w-2xl text-base text-deepteal/70">
                {copy.description}
              </p>
              {nextEvent.location ? (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/50">
                  {nextEvent.location}
                </p>
              ) : null}
            </div>
            <div className="flex shrink-0 flex-col gap-4">
              <div className="rounded-2xl border border-deepteal/15 bg-sand px-8 py-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deepteal/60">
                  {nextEvent.date}
                </p>
                <p className="mt-2 text-2xl font-semibold text-deepteal">
                  {nextEvent.time}
                </p>
              </div>
              <a href={nextEvent.ctaHref} target="_blank" rel="noopener noreferrer" className="cta-primary text-center">
                {copy.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
