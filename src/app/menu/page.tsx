import Link from "next/link";
import MenuContent from "@/components/MenuContent";

export default function MenuPage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_18px_60px_rgba(16,96,94,0.12)]">
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
