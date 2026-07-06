import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Satisfy } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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

const BASE_URL = "https://brisacove.no";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Brisa Cove | Surf & Beach Cafe — Haviksanden, Lista",
    template: "%s | Brisa Cove",
  },
  description:
    "Fresh food, surf vibes, and slow beach days at Haviksanden, Lista. Open Wed–Sun. Smoothie bowls, pizza, nachos, drinks and more.",
  openGraph: {
    type: "website",
    siteName: "Brisa Cove",
    url: BASE_URL,
    title: "Brisa Cove | Surf & Beach Cafe — Haviksanden, Lista",
    description:
      "Fresh food, surf vibes, and slow beach days at Haviksanden, Lista. Open Wed–Sun. Smoothie bowls, pizza, nachos, drinks and more.",
    images: [{ url: "/images/hero-cafe.jpg", width: 1200, height: 630, alt: "Brisa Cove beach cafe entrance at Haviksanden" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brisa Cove | Surf & Beach Cafe — Haviksanden, Lista",
    description:
      "Fresh food, surf vibes, and slow beach days at Haviksanden, Lista.",
    images: ["/images/hero-cafe.jpg"],
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Brisa Cove",
              description: "Surf & Beach Cafe at Haviksanden, Lista",
              url: "https://brisacove.no",
              telephone: "+4740194390",
              email: "sondreeikeland@brisacove.no",
              servesCuisine: ["Norwegian", "International"],
              priceRange: "kr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Haviksanden",
                addressLocality: "Lista",
                addressCountry: "NO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 58.1,
                longitude: 6.55,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:30", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "11:30", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "09:30", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday",    opens: "09:30", closes: "18:00" },
              ],
              sameAs: [
                "https://www.instagram.com/brisacove/",
                "https://www.tiktok.com/@brisacove",
                "https://www.facebook.com/profile.php?id=61583727041867",
              ],
              image: "https://brisacove.no/images/hero-cafe.jpg",
              hasMenu: "https://brisacove.no/menu",
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
