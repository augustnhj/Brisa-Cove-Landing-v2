"use client";

import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import MenuCard from "@/components/MenuCard";
import { MenuLanguage, menuSections, nutritionLabels } from "@/data/menu";

const copy = {
  en: {
    kicker: "Full menu",
    title: "Brisa Cove menu",
    note: "Nutritional values are estimates and may vary. Menu defaults to English, with Norsk available via the toggle.",
  },
  no: {
    kicker: "Full meny",
    title: "Brisa Cove meny",
    note: "Næringsverdier er estimater og kan variere. Menyen åpner på engelsk, med Norsk tilgjengelig.",
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
        {menuSections[language].map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-deepteal">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <MenuCard key={item.id} item={item} labels={labels} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
