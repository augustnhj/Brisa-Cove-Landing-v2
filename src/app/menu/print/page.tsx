"use client";
import { useEffect } from "react";
import { menuSections, nutritionLabels, itemAllergens, MenuLanguage } from "@/data/menu";

const languages: { lang: MenuLanguage; label: string; menuTitle: string }[] = [
  { lang: "en", label: "English",  menuTitle: "Brisa Cove Menu" },
  { lang: "no", label: "Norsk",    menuTitle: "Brisa Cove Meny" },
  { lang: "de", label: "Deutsch",  menuTitle: "Brisa Cove Speisekarte" },
];

const SIMPLE_IDS = new Set(["soda", "coffee"]);

export default function MenuPrintPage() {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white px-10 py-12 print:p-8">

      {languages.map(({ lang, label, menuTitle }, i) => (
        <section
          key={lang}
          className={i > 0 ? "mt-20 print:mt-0 print:break-before-page" : ""}
        >
          <div className="mb-8 border-b-2 border-deepteal pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deepteal/50">{label}</p>
            <h1 className="mt-1 font-display text-3xl font-semibold text-deepteal">{menuTitle}</h1>
            <p className="mt-1 text-xs text-deepteal/40">Haviksanden, Lista</p>
          </div>

          <div className="columns-2 gap-12">
            {menuSections[lang].map((section) => (
              <div key={section.title} className="mb-8 break-inside-avoid">
                <h2 className="mb-3 border-b border-deepteal/15 pb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-deepteal/60">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {section.items.map((item) => {
                    const allergens =
                      !item.comingSoon && !SIMPLE_IDS.has(item.id)
                        ? itemAllergens[item.id]
                        : undefined;
                    const translatedAllergens =
                      allergens && allergens.length > 0
                        ? allergens.map((a) => nutritionLabels[lang].allergenNames[a] ?? a).join(", ")
                        : null;

                    return (
                      <div key={item.id} className="flex items-baseline justify-between gap-3">
                        <div className="min-w-0">
                          <span
                            className={`text-sm font-medium text-deepteal ${
                              item.comingSoon ? "line-through decoration-red-500 decoration-[1.5px]" : ""
                            }`}
                          >
                            {item.name}
                          </span>
                          {item.comingSoon && (
                            <span className="ml-2 text-[0.6rem] font-bold uppercase tracking-widest text-red-500">
                              Coming soon
                            </span>
                          )}
                          {translatedAllergens && (
                            <span className="ml-1 text-[0.65rem] text-deepteal/40">
                              ({translatedAllergens})
                            </span>
                          )}
                        </div>
                        {!item.comingSoon && (
                          <span className="shrink-0 text-sm font-semibold text-deepteal">
                            {item.price}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
