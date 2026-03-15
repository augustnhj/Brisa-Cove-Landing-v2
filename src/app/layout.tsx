import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Satisfy } from "next/font/google";
import "./globals.css";

const bodyFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const waveFont = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wave",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brisa Cove | Surf & Beach Cafe at Haviksanden, Lista",
  description:
    "Brisa Cove is the beach cafe where surf and good vibes meet. Simple bites, relaxed atmosphere, and a community hub at Haviksanden, Lista.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${waveFont.variable}`}
    >
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
