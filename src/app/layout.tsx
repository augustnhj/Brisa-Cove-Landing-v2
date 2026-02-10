import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces } from "next/font/google";
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
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
