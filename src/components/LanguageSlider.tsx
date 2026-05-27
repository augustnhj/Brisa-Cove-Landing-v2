"use client";

import { useLanguage, Language } from "@/context/LanguageContext";

function FlagUK() {
  return (
    <svg viewBox="0 0 28 28" width="26" height="26" aria-hidden="true">
      <defs>
        <clipPath id="uk-clip">
          <circle cx="14" cy="14" r="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#uk-clip)">
        <rect width="28" height="28" fill="#012169" />
        {/* White saltire */}
        <line x1="-2" y1="-2" x2="30" y2="30" stroke="white" strokeWidth="7" />
        <line x1="30" y1="-2" x2="-2" y2="30" stroke="white" strokeWidth="7" />
        {/* Red saltire */}
        <line x1="-2" y1="-2" x2="30" y2="30" stroke="#C8102E" strokeWidth="4" />
        <line x1="30" y1="-2" x2="-2" y2="30" stroke="#C8102E" strokeWidth="4" />
        {/* White cross */}
        <rect x="11" y="-2" width="6" height="32" fill="white" />
        <rect x="-2" y="11" width="32" height="6" fill="white" />
        {/* Red cross */}
        <rect x="12" y="-2" width="4" height="32" fill="#C8102E" />
        <rect x="-2" y="12" width="32" height="4" fill="#C8102E" />
      </g>
      <circle cx="14" cy="14" r="13.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  );
}

function FlagNO() {
  return (
    <svg viewBox="0 0 28 28" width="26" height="26" aria-hidden="true">
      <defs>
        <clipPath id="no-clip">
          <circle cx="14" cy="14" r="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#no-clip)">
        <rect width="28" height="28" fill="#EF2B2D" />
        {/* White cross */}
        <rect x="8" y="0" width="5" height="28" fill="white" />
        <rect x="0" y="11.5" width="28" height="5" fill="white" />
        {/* Blue cross */}
        <rect x="9.5" y="0" width="2" height="28" fill="#002868" />
        <rect x="0" y="13" width="28" height="2" fill="#002868" />
      </g>
      <circle cx="14" cy="14" r="13.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  );
}

function FlagDE() {
  return (
    <svg viewBox="0 0 28 28" width="26" height="26" aria-hidden="true">
      <defs>
        <clipPath id="de-clip">
          <circle cx="14" cy="14" r="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#de-clip)">
        <rect width="28" height="9.34" fill="#000000" />
        <rect y="9.34" width="28" height="9.32" fill="#DD0000" />
        <rect y="18.66" width="28" height="9.34" fill="#FFCE00" />
      </g>
      <circle cx="14" cy="14" r="13.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  );
}

const options: { flag: React.ReactNode; value: Language; label: string }[] = [
  { flag: <FlagUK />, value: "en", label: "English" },
  { flag: <FlagNO />, value: "no", label: "Norsk" },
  { flag: <FlagDE />, value: "de", label: "Deutsch" },
];

const thumbOffset: Record<Language, number> = { en: 0, no: 40, de: 80 };

import React from "react";

export default function LanguageSlider() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="relative inline-flex h-10 w-[8.25rem] shrink-0 items-center rounded-full border border-white/25 bg-black/25 p-1.5 backdrop-blur-sm"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1.5 h-7 w-10 rounded-full bg-white/20 ring-1 ring-white/40 transition-transform duration-200"
        style={{ transform: `translateX(${thumbOffset[language]}px)` }}
      />
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLanguage(opt.value)}
          aria-label={opt.label}
          aria-pressed={language === opt.value}
          className="relative z-10 flex flex-1 items-center justify-center transition-opacity duration-200"
          style={{ opacity: language === opt.value ? 1 : 0.38 }}
        >
          {opt.flag}
        </button>
      ))}
    </div>
  );
}
