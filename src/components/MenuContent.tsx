"use client";

import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import MenuCard from "@/components/MenuCard";
import PizzaCard from "@/components/PizzaCard";
import { MenuLanguage, menuSections, nutritionLabels } from "@/data/menu";

const copy = {
  en: {
    kicker: "Full menu",
    title: "Brisa Cove menu",
    note: "Nutritional values are estimates and may vary.",
    small: "Small",
    large: "Large",
  },
  no: {
    kicker: "Full meny",
    title: "Brisa Cove meny",
    note: "Næringsverdier er estimater og kan variere.",
    small: "Liten",
    large: "Stor",
  },
  de: {
    kicker: "Vollständige Speisekarte",
    title: "Brisa Cove Speisekarte",
    note: "Nährwerte sind Schätzungen und können variieren.",
    small: "Klein",
    large: "Groß",
  },
};

export default function MenuContent() {
  const [language, setLanguage] = useState<MenuLanguage>("en");
  const labels = nutritionLabels[language];
  const text = copy[language];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">{text.kicker}</p>
            <h1 className="section-title">{text.title}</h1>
          </div>
          <LanguageToggle value={language} onChange={setLanguage} />
        </div>
      <p className="max-w-2xl text-sm text-deepteal/70">{text.note}</p>
      <div className="flex flex-col gap-10">
        {menuSections[language].map((section) => {
          const hasSmalls = section.items.some((i) => i.id.endsWith("-small"));

          if (hasSmalls) {
            const largeItems = section.items.filter((i) => !i.id.endsWith("-small"));
            return (
              <div key={section.title} className="flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-deepteal">{section.title}</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {largeItems.map((large) => (
                    <PizzaCard
                      key={large.id}
                      large={large}
                      small={section.items.find((i) => i.id === `${large.id}-small`)}
                      smallLabel={text.small}
                      largeLabel={text.large}
                    />
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={section.title} className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-deepteal">{section.title}</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <MenuCard key={item.id} item={item} labels={labels} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
