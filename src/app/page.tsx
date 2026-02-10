import Image from "next/image";
import Link from "next/link";
import FavoritesSection from "@/components/FavoritesSection";

const heroImages = [
  {
    src: "/images/surf-community.jpeg",
    alt: "Surf and community moments at the beach",
  },
  {
    src: "/images/cafe-outside.jpg",
    alt: "Brisa Cove cafe exterior at Haviksanden",
  },
  {
    src: "/images/seating-inside-or-outside.jpg",
    alt: "Relaxed seating inside Brisa Cove",
  },
  {
    src: "/images/Sunset.jpg",
    alt: "Sunset at Haviksanden beach",
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="px-6 pb-8 pt-6 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/70 bg-white/70">
              <Image
                src="/images/Logo.png"
                alt="Brisa Cove logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-deepteal">
                Brisa Cove
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-deepteal/60">
                Haviksanden, Lista
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-deepteal/70 md:flex">
            <a href="#experience" className="hover:text-deepteal">
              Experience
            </a>
            <a href="#favorites" className="hover:text-deepteal">
              Favorites
            </a>
            <a href="#activities" className="hover:text-deepteal">
              Surf & Activities
            </a>
            <a href="#local" className="hover:text-deepteal">
              Local
            </a>
            <a href="#visit" className="hover:text-deepteal">
              Visit
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-16 sm:px-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="section-kicker">Opening Summer 2026</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-deepteal sm:text-5xl">
              The beach cafe where surf and good vibes meet
            </h1>
            <p className="max-w-xl text-base text-deepteal/70 sm:text-lg">
              Simple and delicious food, relaxed atmosphere – a natural meeting
              point on the beach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="cta-primary">
                See menu
              </Link>
              <a href="#visit" className="cta-secondary">
                Visit us today
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.2em]">
              <a
                href="#visit"
                className="rounded-full border border-deepteal/20 bg-white/70 px-4 py-2 text-deepteal/80 transition hover:border-deepteal"
              >
                Follow us on Instagram
              </a>
              <a
                href="#visit"
                className="rounded-full border border-deepteal/20 bg-white/70 px-4 py-2 text-deepteal/80 transition hover:border-deepteal"
              >
                Book event
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className={`relative h-40 overflow-hidden rounded-3xl border border-white/70 sm:h-48 ${
                  index === 0 ? "sm:col-span-2 sm:h-56" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="section-kicker">The Brisa Cove experience</p>
            <h2 className="section-title">Surf, community, and summer made simple</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              Brisa Cove is your easy beach stop for surfers, friends, and
              families. Grab a bite, share a wave report, and stay for the
              golden-hour atmosphere that only Lista can deliver.
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
            <p className="section-kicker">Surf, beach & activities</p>
            <h2 className="section-title">Make the day a full beach ritual</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              Drop in for a surf session, refuel, and stick around. Brisa Cove is
              built for everyone who loves the coast — from first timers to
              locals who never miss a swell.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Surf friendly",
                description:
                  "Boards welcome, wetsuits drying, swell stories always on.",
              },
              {
                title: "Beach hangouts",
                description:
                  "Low-key seating, salty air, and space for slow afternoons.",
              },
              {
                title: "Summer extras",
                description:
                  "Events, merch, collabs, and takeaway rolling in soon.",
              },
            ].map((card) => (
              <div key={card.title} className="glass p-6">
                <h3 className="text-lg font-semibold text-deepteal">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-deepteal/70">{card.description}</p>
              </div>
            ))}
          </div>
          <div>
            <a href="#visit" className="cta-primary">
              Combine surf and food
            </a>
          </div>
        </div>
      </section>

      <section id="local" className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="section-kicker">Local anchoring & community</p>
            <h2 className="section-title">Locally driven. Created for summer. Built for community.</h2>
            <p className="max-w-2xl text-base text-deepteal/70">
              Rooted in Lista, Brisa Cove celebrates the people and makers who
              shape the coast. Expect collaborations with local surf crews,
              artists, and producers as the seasons roll in.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Local surf schools",
              "Regional roasters",
              "Beach creatives",
            ].map((partner) => (
              <div
                key={partner}
                className="glass flex items-center justify-center px-6 py-8 text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/70"
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
              <p className="section-kicker">Practical info</p>
              <h2 className="section-title">Plan your beach day</h2>
            </div>
            <div className="rounded-2xl border border-deepteal/10 bg-white/70 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/70">
              Coming soon: opening hours, bookings, and Instagram details
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/70">
                  Opening hours
                </h3>
                <p className="mt-2 text-base text-deepteal">
                  Coming Summer 2026. Hours announced closer to opening.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/70">
                  Find us
                </h3>
                <p className="mt-2 text-base text-deepteal">
                  Haviksanden Beach, Lista, Norway
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deepteal/70">
                  Instagram
                </h3>
                <p className="mt-2 text-base text-deepteal">
                  Handle coming soon
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="cta-secondary">
                See menu
              </Link>
              <a href="#visit" className="cta-primary">
                Book event
              </a>
              <a href="#visit" className="cta-secondary">
                Follow us on Instagram
              </a>
            </div>
            <p className="text-sm text-deepteal/60">
              We will open bookings and social channels before launch.
            </p>
          </div>
          <p className="text-center text-lg font-semibold uppercase tracking-[0.2em] text-deepteal/80">
            Good vibes. Fresh bites. Beach life.
          </p>
        </div>
      </section>
    </main>
  );
}
