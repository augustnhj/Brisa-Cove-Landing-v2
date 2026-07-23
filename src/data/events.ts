export type EventInfo = {
  en: {
    title: string;
    description: string;
    ctaLabel: string;
    kickerLabel: string;
    notice?: string;
  };
  no: {
    title: string;
    description: string;
    ctaLabel: string;
    kickerLabel: string;
    notice?: string;
  };
  de: {
    title: string;
    description: string;
    ctaLabel: string;
    kickerLabel: string;
    notice?: string;
  };
  date: string;
  time: string;
  ctaHref: string;
  location?: string;
};

export const nextEvent: EventInfo = {
  en: {
    title: "LILLE CAESAR X BRISA COVE",
    description:
      "We're teaming up with Lille Caesar for a special night at Haviksanden. Good music, good food, and great vibes by the beach.",
    ctaLabel: "GET TICKETS",
    kickerLabel: "Next event",
  },
  no: {
    title: "LILLE CAESAR X BRISA COVE",
    description:
      "Vi slår oss sammen med Lille Caesar for en spesiell kveld på Haviksanden. God musikk, god mat og gode vibes ved stranden.",
    ctaLabel: "GET TICKETS",
    kickerLabel: "Neste arrangement",
  },
  de: {
    title: "LILLE CAESAR X BRISA COVE",
    description:
      "Wir tun uns mit Lille Caesar für einen besonderen Abend am Haviksanden zusammen. Gute Musik, gutes Essen und tolle Stimmung am Strand.",
    ctaLabel: "GET TICKETS",
    kickerLabel: "Nächstes Event",
  },
  date: "July 31, 2026",
  time: "Haviksanden Beach",
  ctaHref: "https://brisa-cove.hoopla.no/event/870535212",
  location: "Haviksanden Beach, Lista",
};
