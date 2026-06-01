export type EventInfo = {
  en: {
    title: string;
    description: string;
    ctaLabel: string;
    kickerLabel: string;
  };
  no: {
    title: string;
    description: string;
    ctaLabel: string;
    kickerLabel: string;
  };
  de: {
    title: string;
    description: string;
    ctaLabel: string;
    kickerLabel: string;
  };
  date: string;
  time: string;
  ctaHref: string;
  location?: string;
};

export const nextEvent: EventInfo = {
  en: {
    title: "Opening Day",
    description:
      "Join us for the grand opening of Brisa Cove — food, surf, and good vibes at Haviksanden beach.",
    ctaLabel: "Join us",
    kickerLabel: "Next event",
  },
  no: {
    title: "Åpningsdag",
    description:
      "Bli med på den store åpningen av Brisa Cove — mat, surf og god stemning på Haviksanden.",
    ctaLabel: "Bli med",
    kickerLabel: "Neste arrangement",
  },
  de: {
    title: "Eröffnungstag",
    description:
      "Feiert mit uns die Eröffnung von Brisa Cove — Essen, Surfen und gute Stimmung am Haviksanden-Strand.",
    ctaLabel: "Dabei sein",
    kickerLabel: "Nächstes Event",
  },
  date: "June 6, 2026",
  time: "11:30–23:30",
  ctaHref: "#visit",
  location: "Haviksanden Beach, Lista",
};
