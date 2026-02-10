"use client";

import { MenuLanguage } from "@/data/menu";

const options: { label: string; value: MenuLanguage }[] = [
  { label: "English", value: "en" },
  { label: "Norsk", value: "no" },
];

export default function LanguageToggle({
  value,
  onChange,
}: {
  value: MenuLanguage;
  onChange: (value: MenuLanguage) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-deepteal/20 bg-white/70 p-1 text-xs uppercase tracking-[0.2em]">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded-full px-4 py-2 font-semibold transition ${
            value === option.value
              ? "bg-deepteal text-sand"
              : "text-deepteal/70 hover:text-deepteal"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
