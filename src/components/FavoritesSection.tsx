"use client";

import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import { favorites, MenuLanguage, nutritionLabels } from "@/data/menu";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    kicker: "Selected favorites",
    title: "A few crowd-pleasers to start with",
    note: "Full menu opens in English by default with Norsk toggle.",
    cta: "See full menu",
  },
  no: {
    kicker: "Utvalgte favoritter",
    title: "Noen publikumsfavoritter å starte med",
    note: "Full meny åpner på engelsk, med Norsk-valg.",
    cta: "Se hele menyen",
  },
  de: {
    kicker: "Ausgewählte Favoriten",
    title: "Ein paar Publikumslieblinge zum Einstieg",
    note: "Vollständiges Menü öffnet auf Englisch.",
    cta: "Vollständiges Menü ansehen",
  },
};

export default function FavoritesSection() {
  const { language } = useLanguage();
  // Menu data only has EN/NO; fall back to English for German
  const lang: MenuLanguage = language === "de" ? "en" : language;
  const labels = nutritionLabels[lang];
  const text = copy[language];

  return (
    <section id="favorites" className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="section-kicker">{text.kicker}</p>
          <h2 className="section-title">{text.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {favorites[lang].map((item) => (
            <MenuCard key={item.id} item={item} labels={labels} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/menu" className="cta-primary">
            {text.cta}
          </Link>
          <p className="text-sm text-deepteal/70">{text.note}</p>
        </div>
      </div>
    </section>
  );
}
