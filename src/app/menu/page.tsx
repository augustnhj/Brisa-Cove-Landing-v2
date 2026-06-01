import Image from "next/image";
import Link from "next/link";
import MenuContent from "@/components/MenuContent";

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
            href="/menu.pdf"
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
