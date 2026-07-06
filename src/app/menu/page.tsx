import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MenuContent from "@/components/MenuContent";

export const metadata: Metadata = {
  title: "Full Menu",
  description:
    "Full menu for Brisa Cove beach cafe at Haviksanden, Lista. Smoothie bowls, pizza, nachos, fries, drinks and more — fresh and simple.",
  openGraph: {
    title: "Full Menu | Brisa Cove",
    description:
      "Smoothie bowls, pizza, nachos, fries, and drinks at Brisa Cove beach cafe, Haviksanden.",
    images: [{ url: "/images/Sunset.jpg", width: 1200, height: 630, alt: "Sunset at Haviksanden beach" }],
  },
};

export default function MenuPage() {
  return (
    <main className="relative min-h-screen px-6 py-16 sm:px-10">
      <Image
        src="/images/Sunset.jpg"
        alt="Sunset at Haviksanden beach"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-deepteal/40" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_rgba(16,96,94,0.18)] backdrop-blur-sm">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-deepteal/70"
          >
            Back to home
          </Link>
          <MenuContent />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="cta-secondary">
            Visit Brisa Cove
          </Link>
          <a
            href="/menu/print"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            aria-label="Download full menu PDF"
          >
            Download PDF menu
          </a>
        </div>
      </div>
    </main>
  );
}
