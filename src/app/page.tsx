"use client";

import Image from "next/image";
import Link from "next/link";
import FavoritesSection from "@/components/FavoritesSection";
import NextEventSection from "@/components/NextEventSection";
import LanguageSlider from "@/components/LanguageSlider";
import { useLanguage } from "@/context/LanguageContext";


const t = {
  en: {
    nav: {
      experience: "Experience",
      favorites: "Favorites",
      activities: "Surf & Activities",
      local: "Local",
      visit: "Visit",
    },
    hero: {
      kicker: "Opening Summer 2026",
      title: "Grab a bite at the heart of Norwegian surfing",
      description:
        "Simple and delicious food, relaxed atmosphere – a natural meeting point on the beach.",
      ctaPrimary: "See menu",
      ctaSecondary: "Visit us today",
      instagram: "Follow us on Instagram",
      bookEvent: "Book event",
    },
    experience: {
      kicker: "The Brisa Cove experience",
      title: "Surf, community, and summer made simple",
      description:
        "Brisa Cove is your easy beach stop for surfers, friends, and families. Grab a bite, share a wave report, and stay for the golden-hour atmosphere that only Lista can deliver.",
    },
    activities: {
      kicker: "Surf, beach & activities",
      title: "Make the day a full beach ritual",
      description:
        "Drop in for a surf session, refuel, and stick around. Brisa Cove is built for everyone who loves the coast — from first timers to locals who never miss a swell.",
      cards: [
        {
          title: "Surf friendly",
          description: "Boards welcome, wetsuits drying, swell stories always on.",
        },
        {
          title: "Beach hangouts",
          description: "Low-key seating, salty air, and space for slow afternoons.",
        },
        {
          title: "Summer extras",
          description: "Events, merch, collabs, and takeaway rolling in soon.",
        },
      ],
      cta: "Combine surf and food",
    },
    local: {
      kicker: "Local anchoring & community",
      title: "Locally driven. Created for summer. Built for community.",
      description:
        "Rooted in Lista, Brisa Cove celebrates the people and makers who shape the coast. Expect collaborations with local surf crews, artists, and producers as the seasons roll in.",
      partners: ["Local surf schools", "Right by the beach", "Local artists"],
    },
    visit: {
      kicker: "Practical info",
      title: "Plan your beach day",
      hours: {
        label: "Opening hours",
        value: "Wednesday  11:30–20:00\nFriday  11:30–20:00\nSaturday  11:30–20:00\nSunday  09:30–20:00",
      },
      location: { label: "Find us", value: "Haviksanden Beach, Lista, Norway" },
      booking: { label: "Bookings", value: "sondreeikeland@brisacove.no" },
      social: { label: "Follow us", comingSoon: "More posts coming soon" },
      contact: { label: "Contact" },
      findUs: { label: "Find us online", tripadvisor: "TripAdvisor", maps: "Google Maps" },
      ctaMenu: "See menu",
      ctaBook: "Book event",
      tagline: "Good vibes. Fresh bites. Beach life.",
    },
    openingHours: {
      kicker: "When we're open",
      title: "Opening Hours",
      days: [
        { day: "Wednesday", time: "11:30–20:00" },
        { day: "Friday",    time: "11:30–20:00" },
        { day: "Saturday",  time: "11:30–20:00" },
        { day: "Sunday",    time: "11:30–18:00" },
      ],
    },
    followUs: { title: "Follow Us" },
    heroSlogan: "Salt air, surf, and slow days",
  },
  de: {
    nav: {
      experience: "Erlebnis",
      favorites: "Favoriten",
      activities: "Surf & Aktivitäten",
      local: "Lokal",
      visit: "Besuchen",
    },
    hero: {
      kicker: "Eröffnung Sommer 2026",
      title: "Ein Happen mitten im Herz des norwegischen Surfens",
      description:
        "Einfaches und köstliches Essen, entspannte Atmosphäre – ein natürlicher Treffpunkt am Strand.",
      ctaPrimary: "Menü ansehen",
      ctaSecondary: "Besucht uns heute",
      instagram: "Folgt uns auf Instagram",
      bookEvent: "Event buchen",
    },
    experience: {
      kicker: "Das Brisa Cove Erlebnis",
      title: "Surf, Gemeinschaft und einfacher Sommer",
      description:
        "Brisa Cove ist euer entspannter Strandstop für Surfer, Freunde und Familien. Schnappt euch einen Snack, tauscht Wellenberichte aus und bleibt für die Goldstunden-Atmosphäre, die nur Lista bieten kann.",
    },
    activities: {
      kicker: "Surf, Strand und Aktivitäten",
      title: "Mach den Tag zu einem vollständigen Strandritual",
      description:
        "Schaut vorbei für eine Surfsession, tankt auf und bleibt. Brisa Cove ist für alle gebaut, die die Küste lieben – von Erstbesuchern bis zu Einheimischen, die keine Welle verpassen.",
      cards: [
        {
          title: "Surferfreundlich",
          description: "Boards willkommen, Neoprenanzüge trocknen, Wellengeschichten immer dabei.",
        },
        {
          title: "Strandtreffen",
          description: "Entspannte Sitzplätze, salzige Luft und Raum für langsame Nachmittage.",
        },
        {
          title: "Sommerextras",
          description: "Events, Merch, Kooperationen und Takeaway kommen bald.",
        },
      ],
      cta: "Surf und Essen kombinieren",
    },
    local: {
      kicker: "Lokale Verankerung und Gemeinschaft",
      title: "Lokal getrieben. Für den Sommer geschaffen. Für die Gemeinschaft gebaut.",
      description:
        "Mit Wurzeln in Lista feiert Brisa Cove die Menschen und Macher, die die Küste prägen. Erwartet Kooperationen mit lokalen Surfclubs, Künstlern und Produzenten, wenn die Saisons kommen.",
      partners: ["Lokale Surfschulen", "Direkt am Strand", "Lokale Künstler"],
    },
    visit: {
      kicker: "Praktische Infos",
      title: "Plant euren Strandtag",
      hours: {
        label: "Öffnungszeiten",
        value: "Mittwoch  11:30–20:00\nFreitag  11:30–20:00\nSamstag  11:30–20:00\nSonntag  09:30–20:00",
      },
      location: { label: "Findet uns", value: "Haviksanden Strand, Lista, Norwegen" },
      booking: { label: "Buchungen", value: "sondreeikeland@brisacove.no" },
      social: { label: "Folgt uns", comingSoon: "Mehr Beiträge kommen bald" },
      contact: { label: "Kontakt" },
      findUs: { label: "Online finden", tripadvisor: "TripAdvisor", maps: "Google Maps" },
      ctaMenu: "Menü ansehen",
      ctaBook: "Event buchen",
      tagline: "Gute Stimmung. Frische Bissen. Strandleben.",
    },
    openingHours: {
      kicker: "Wann wir geöffnet haben",
      title: "Öffnungszeiten",
      days: [
        { day: "Mittwoch", time: "11:30–20:00" },
        { day: "Freitag",  time: "11:30–20:00" },
        { day: "Samstag",  time: "11:30–20:00" },
        { day: "Sonntag",  time: "11:30–18:00" },
      ],
    },
    followUs: { title: "Folgt uns" },
    heroSlogan: "Salzluft, Surf und langsame Tage",
  },
  no: {
    nav: {
      experience: "Opplevelse",
      favorites: "Favoritter",
      activities: "Surf & aktiviteter",
      local: "Lokalt",
      visit: "Besøk",
    },
    hero: {
      kicker: "Åpner sommeren 2026",
      title: "Få en matbit i hjertet av norsk surfing",
      description:
        "Enkel og deilig mat, avslappet atmosfære – et naturlig møtepunkt på stranden.",
      ctaPrimary: "Se meny",
      ctaSecondary: "Besøk oss i dag",
      instagram: "Følg oss på Instagram",
      bookEvent: "Book arrangement",
    },
    experience: {
      kicker: "Brisa Cove-opplevelsen",
      title: "Surf, fellesskap og enkel sommer",
      description:
        "Brisa Cove er ditt enkle strandstoppested for surfere, venner og familier. Ta en bit, del bølgerapporter, og bli for den gylne-times atmosfæren som bare Lista kan levere.",
    },
    activities: {
      kicker: "Surf, strand og aktiviteter",
      title: "Gjør dagen til et fullstendig strandritual",
      description:
        "Stikk innom for en surfsesjon, fyll på energi, og bli værende. Brisa Cove er bygget for alle som elsker kysten — fra nybegynnere til lokalkjente som aldri går glipp av en bølge.",
      cards: [
        {
          title: "Surfevenlig",
          description: "Brett velkommen, våtdrakter tørker, bølgehistorier alltid på.",
        },
        {
          title: "Strandmøter",
          description: "Rolig sitteplass, salt luft og rom for sene ettermiddager.",
        },
        {
          title: "Sommerextras",
          description: "Arrangementer, merch, samarbeid og takeaway kommer snart.",
        },
      ],
      cta: "Kombiner surf og mat",
    },
    local: {
      kicker: "Lokal forankring og fellesskap",
      title: "Lokalt drevet. Skapt for sommeren. Bygget for fellesskap.",
      description:
        "Med røtter i Lista feirer Brisa Cove menneskene og skaperne som former kysten. Forvent samarbeid med lokale surfegrupper, kunstnere og produsenter etter hvert som sesongene rulles inn.",
      partners: ["Lokale surfskoler", "Rett ved stranden", "Lokale kunstnere"],
    },
    visit: {
      kicker: "Praktisk info",
      title: "Planlegg stranddagen din",
      hours: {
        label: "Åpningstider",
        value: "Onsdag  11:30–20:00\nFredag  11:30–20:00\nLørdag  11:30–20:00\nSøndag  09:30–20:00",
      },
      location: { label: "Finn oss", value: "Haviksanden strand, Lista, Norge" },
      booking: { label: "Bestillinger", value: "sondreeikeland@brisacove.no" },
      social: { label: "Følg oss", comingSoon: "Flere innlegg kommer snart" },
      contact: { label: "Kontakt" },
      findUs: { label: "Finn oss på nett", tripadvisor: "TripAdvisor", maps: "Google Maps" },
      ctaMenu: "Se meny",
      ctaBook: "Book arrangement",
      tagline: "God stemning. Ferske biter. Strandliv.",
    },
    openingHours: {
      kicker: "Når vi er åpne",
      title: "Åpningstider",
      days: [
        { day: "Onsdag",  time: "11:30–20:00" },
        { day: "Fredag",  time: "11:30–20:00" },
        { day: "Lørdag",  time: "11:30–20:00" },
        { day: "Søndag",  time: "11:30–18:00" },
      ],
    },
    followUs: { title: "Følg oss" },
    heroSlogan: "Salt luft, surf og langsomme dager",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const copy = t[language];

  return (
    <main className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/HEADER2.png"
          alt="Havika Strandcafe entrance with teal doors and surfboard sign"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient: dark at top for header, dark at bottom for text */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/60" />

        {/* Header overlaid on image */}
        <header className="absolute inset-x-0 top-0 z-30 px-6 py-4 sm:px-10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/30">
                <Image
                  src="/images/Logo.png"
                  alt="Brisa Cove logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-white drop-shadow-sm">
                  Brisa Cove
                </p>
                <p className="text-[0.55rem] uppercase tracking-[0.2em] text-white/65">
                  Haviksanden, Lista
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/75 lg:flex">
                <a href="#experience" className="transition-colors hover:text-white">{copy.nav.experience}</a>
                <a href="#event" className="transition-colors hover:text-white">Event</a>
                <a href="#favorites" className="transition-colors hover:text-white">{copy.nav.favorites}</a>
                <a href="#activities" className="transition-colors hover:text-white">{copy.nav.activities}</a>
                <a href="#local" className="transition-colors hover:text-white">{copy.nav.local}</a>
                <a href="#visit" className="transition-colors hover:text-white">{copy.nav.visit}</a>
              </nav>
              <LanguageSlider />
            </div>
          </div>
        </header>

        {/* Hero text at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-12 sm:px-10 sm:pb-16">
          <div className="mx-auto w-full max-w-6xl">
            <h1
              lang={language}
              className="mb-3 font-display text-3xl font-semibold tracking-tight text-white [hyphens:auto] [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] sm:text-4xl md:text-5xl"
            >
              {copy.hero.title}
            </h1>
            <p className="mb-5 max-w-lg text-sm text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] sm:text-base">
              {copy.hero.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/menu"
                className="rounded-full border border-white/60 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                {copy.hero.ctaPrimary}
              </Link>
              <a
                href="#visit"
                className="rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/70 hover:text-white"
              >
                {copy.hero.ctaSecondary}
              </a>
              <a
                href="#visit"
                className="rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/70 hover:text-white"
              >
                {copy.hero.instagram}
              </a>
              <a
                href="#visit"
                className="rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/70 hover:text-white"
              >
                {copy.hero.bookEvent}
              </a>
            </div>
          </div>
        </div>
      </section>


      <NextEventSection />

      <section id="hours" className="px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-6xl grid gap-6 md:grid-cols-2">
          <div className="glass flex flex-col gap-6 p-8">
            <div>
              <p className="section-kicker">{copy.openingHours.kicker}</p>
              <h2 className="section-title">{copy.openingHours.title}</h2>
            </div>
            <div className="flex flex-col divide-y divide-deepteal/10">
              {copy.openingHours.days.map(({ day, time }) => (
                <div key={day} className="flex items-center justify-between py-3">
                  <span className="text-base font-semibold text-deepteal">{day}</span>
                  <span className="text-base font-semibold text-deepteal/70">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass flex flex-col gap-6 p-8">
            <div>
              <p className="section-kicker">Social</p>
              <h2 className="section-title">{copy.followUs.title}</h2>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/brisacove/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-deepteal hover:text-seafoam transition-colors">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-deepteal/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <span className="text-base font-medium">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@brisacove" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-deepteal hover:text-seafoam transition-colors">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-deepteal/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                  </svg>
                </span>
                <span className="text-base font-medium">TikTok</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583727041867" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-deepteal hover:text-seafoam transition-colors">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-deepteal/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <span className="text-base font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-16 sm:px-10 bg-gradient-to-b from-transparent via-seafoam/8 to-seafoam/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="section-kicker">{copy.experience.kicker}</p>
            <h2 className="section-title">{copy.experience.title}</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              {copy.experience.description}
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/70 sm:h-96">
            <Image
              src="/images/surf-community.jpeg"
              alt="Surf session and community vibes"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <FavoritesSection />

      <section id="activities" className="px-6 py-16 sm:px-10 bg-deepteal/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="section-kicker">{copy.activities.kicker}</p>
            <h2 className="section-title">{copy.activities.title}</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              {copy.activities.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.activities.cards.map((card) => (
              <div key={card.title} className="glass p-6 border-l-4 border-l-seafoam">
                <h3 className="text-lg font-semibold text-deepteal">{card.title}</h3>
                <p className="mt-2 text-sm text-deepteal/70">{card.description}</p>
              </div>
            ))}
          </div>
          <div>
            <a href="#visit" className="cta-primary">
              {copy.activities.cta}
            </a>
          </div>
        </div>
      </section>

      <section id="local" className="px-6 py-16 sm:px-10 bg-gradient-to-br from-deepteal/8 to-seafoam/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="section-kicker">{copy.local.kicker}</p>
            <h2 className="section-title">{copy.local.title}</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              {copy.local.description}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {copy.local.partners.map((partner) => (
              <div
                key={partner}
                className="glass flex items-center justify-center px-4 py-8 text-center text-sm font-semibold text-deepteal bg-seafoam/10"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="px-6 pb-20 pt-16 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="glass flex flex-col gap-8 p-8">
            <div>
              <p className="section-kicker">{copy.visit.kicker}</p>
              <h2 className="section-title">{copy.visit.title}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.location.label}
                </h3>
                <p className="mt-2 text-base text-deepteal">{copy.visit.location.value}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.booking.label}
                </h3>
                <a href="mailto:sondreeikeland@brisacove.no" className="mt-2 block text-base text-deepteal hover:text-seafoam transition-colors">
                  {copy.visit.booking.value}
                </a>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.contact.label}
                </h3>
                <div className="mt-2 flex flex-col gap-1 text-base text-deepteal">
                  <a href="tel:+4740194390" className="hover:text-seafoam transition-colors">+47 401 94 390</a>
                  <a href="tel:+4748438319" className="hover:text-seafoam transition-colors">+47 484 38 319</a>
                  <a href="mailto:sondreeikeland@brisacove.no" className="hover:text-seafoam transition-colors">sondreeikeland@brisacove.no</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.findUs.label}
                </h3>
                <div className="mt-2 flex flex-col gap-1 text-base text-deepteal">
                  <a href="https://www.tripadvisor.com/Restaurant_Review-g668811-d34442354-Reviews-Brisa_Cove-Farsund_Vest_Agder_Southern_Norway.html" target="_blank" rel="noopener noreferrer" className="hover:text-seafoam transition-colors">
                    {copy.visit.findUs.tripadvisor}
                  </a>
                  <a href="https://www.google.com/maps/place/Brisa+Cove/@58.1278988,6.9563334,10.9z/data=!4m6!3m5!1s0x4637650018f1a137:0xc0991b5cb018e217!8m2!3d58.0705667!4d6.7260905!16s%2Fg%2F11z8gnfqtm?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-seafoam transition-colors">
                    {copy.visit.findUs.maps}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="cta-secondary">
                {copy.visit.ctaMenu}
              </Link>
              <a href="mailto:sondreeikeland@brisacove.no" className="cta-primary">
                {copy.visit.ctaBook}
              </a>
            </div>
          </div>
          <p className="text-center text-lg font-semibold uppercase tracking-[0.2em] text-seafoam">
            {copy.visit.tagline}
          </p>
        </div>
      </section>
    </main>
  );
}
