import Link from "next/link";
import { nextEvent } from "@/data/events";

export default function NextEventSection() {
  return (
    <section id="event" className="px-6 pb-16 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-seafoam/30 bg-white/80 p-6 shadow-glow sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-seafoam/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-deepteal/15 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3">
              <p className="section-kicker">Next event</p>
              <h2 className="font-display text-3xl font-semibold text-deepteal sm:text-4xl">
                {nextEvent.title}
              </h2>
              <p className="max-w-2xl text-base text-deepteal/70">
                {nextEvent.description}
              </p>
              {nextEvent.location ? (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/60">
                  {nextEvent.location}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-deepteal/15 bg-sand px-6 py-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deepteal/60">
                  {nextEvent.date}
                </p>
                <p className="mt-2 text-2xl font-semibold text-deepteal">
                  {nextEvent.time}
                </p>
              </div>
              <Link href={nextEvent.ctaHref} className="cta-primary">
                {nextEvent.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
