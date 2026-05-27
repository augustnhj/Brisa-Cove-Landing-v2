"use client";

import Image from "next/image";
import Link from "next/link";
import FavoritesSection from "@/components/FavoritesSection";
import NextEventSection from "@/components/NextEventSection";
import LanguageSlider from "@/components/LanguageSlider";
import { useLanguage } from "@/context/LanguageContext";

const experienceImages = [
  {
    src: "/images/choose-between-inside.jpg",
    alt: "Beach cafe hangout atmosphere",
  },
  {
    src: "/images/surf-community.jpeg",
    alt: "Surf session and community vibes",
  },
  {
    src: "/images/cafe-outside.jpg",
    alt: "Brisa Cove cafe front in summer light",
  },
];

const t = {
  en: {
    nav: {
      experience: "Experience",
      nextEvent: "Next Event",
      favorites: "Favorites",
      activities: "Surf & Activities",
      local: "Local",
      visit: "Visit",
    },
    hero: {
      kicker: "Opening Summer 2026",
      title: "The beach cafe where surf and good vibes meet",
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
      partners: ["Local surf schools", "Regional roasters", "Beach creatives"],
    },
    visit: {
      kicker: "Practical info",
      title: "Plan your beach day",
      comingSoon: "Coming soon: opening hours, bookings, and Instagram details",
      hours: {
        label: "Opening hours",
        value: "Coming Summer 2026. Hours announced closer to opening.",
      },
      location: { label: "Find us", value: "Haviksanden Beach, Lista, Norway" },
      instagram: { label: "Instagram", value: "Handle coming soon" },
      ctaMenu: "See menu",
      ctaBook: "Book event",
      ctaInstagram: "Follow us on Instagram",
      note: "We will open bookings and social channels before launch.",
      tagline: "Good vibes. Fresh bites. Beach life.",
    },
    heroSlogan: "Salt air, surf, and slow days",
  },
  de: {
    nav: {
      experience: "Erlebnis",
      nextEvent: "Nächstes Event",
      favorites: "Favoriten",
      activities: "Surf & Aktivitäten",
      local: "Lokal",
      visit: "Besuchen",
    },
    hero: {
      kicker: "Eröffnung Sommer 2026",
      title: "Das Strandcafé, wo Surf und gute Stimmung aufeinandertreffen",
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
      partners: ["Lokale Surfschulen", "Regionale Röster", "Strandkreative"],
    },
    visit: {
      kicker: "Praktische Infos",
      title: "Plant euren Strandtag",
      comingSoon: "Demnächst: Öffnungszeiten, Buchungen und Instagram-Details",
      hours: {
        label: "Öffnungszeiten",
        value: "Kommt Sommer 2026. Zeiten werden näher zur Eröffnung bekannt gegeben.",
      },
      location: { label: "Findet uns", value: "Haviksanden Strand, Lista, Norwegen" },
      instagram: { label: "Instagram", value: "Handle kommt bald" },
      ctaMenu: "Menü ansehen",
      ctaBook: "Event buchen",
      ctaInstagram: "Folgt uns auf Instagram",
      note: "Wir öffnen Buchungen und soziale Kanäle vor der Eröffnung.",
      tagline: "Gute Stimmung. Frische Bissen. Strandleben.",
    },
    heroSlogan: "Salzluft, Surf und langsame Tage",
  },
  no: {
    nav: {
      experience: "Opplevelse",
      nextEvent: "Neste arrangement",
      favorites: "Favoritter",
      activities: "Surf & aktiviteter",
      local: "Lokalt",
      visit: "Besøk",
    },
    hero: {
      kicker: "Åpner sommeren 2026",
      title: "Strandcafeen der surf og god stemning møtes",
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
      partners: ["Lokale surfskoler", "Regionale brennerier", "Strandkreative"],
    },
    visit: {
      kicker: "Praktisk info",
      title: "Planlegg stranddagen din",
      comingSoon: "Kommer snart: åpningstider, bestillinger og Instagram-detaljer",
      hours: {
        label: "Åpningstider",
        value: "Kommer sommeren 2026. Timer kunngjøres nærmere åpning.",
      },
      location: { label: "Finn oss", value: "Haviksanden strand, Lista, Norge" },
      instagram: { label: "Instagram", value: "Brukernavn kommer snart" },
      ctaMenu: "Se meny",
      ctaBook: "Book arrangement",
      ctaInstagram: "Følg oss på Instagram",
      note: "Vi åpner bestillinger og sosiale kanaler før lansering.",
      tagline: "God stemning. Ferske biter. Strandliv.",
    },
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
          src="/images/hero-cafe.jpg"
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
                <a href="#event" className="transition-colors hover:text-white">{copy.nav.nextEvent}</a>
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
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/75 drop-shadow-sm">
              {copy.hero.kicker}
            </p>
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

      <section id="experience" className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="section-kicker">{copy.experience.kicker}</p>
            <h2 className="section-title">{copy.experience.title}</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              {copy.experience.description}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {experienceImages.map((image) => (
              <div
                key={image.src}
                className="relative h-48 overflow-hidden rounded-3xl border border-white/70 md:h-56"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FavoritesSection />

      <section id="activities" className="px-6 py-16 sm:px-10">
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
              <div key={card.title} className="glass p-6">
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

      <section id="local" className="px-6 py-16 sm:px-10">
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
                className="glass flex items-center justify-center px-4 py-8 text-center text-sm font-semibold text-deepteal/70"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="px-6 pb-20 pt-16 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="glass flex flex-col gap-6 p-8">
            <div>
              <p className="section-kicker">{copy.visit.kicker}</p>
              <h2 className="section-title">{copy.visit.title}</h2>
            </div>
            <div className="rounded-2xl border border-deepteal/10 bg-white/70 px-5 py-4 text-sm font-medium text-deepteal/70">
              {copy.visit.comingSoon}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.hours.label}
                </h3>
                <p className="mt-2 text-base text-deepteal">{copy.visit.hours.value}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.location.label}
                </h3>
                <p className="mt-2 text-base text-deepteal">{copy.visit.location.value}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-deepteal/70">
                  {copy.visit.instagram.label}
                </h3>
                <p className="mt-2 text-base text-deepteal">{copy.visit.instagram.value}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="cta-secondary">
                {copy.visit.ctaMenu}
              </Link>
              <a href="#visit" className="cta-primary">
                {copy.visit.ctaBook}
              </a>
              <a href="#visit" className="cta-secondary">
                {copy.visit.ctaInstagram}
              </a>
            </div>
            <p className="text-sm text-deepteal/60">{copy.visit.note}</p>
          </div>
          <p className="text-center text-lg font-semibold uppercase tracking-[0.2em] text-deepteal/80">
            {copy.visit.tagline}
          </p>
        </div>
      </section>
    </main>
  );
}
