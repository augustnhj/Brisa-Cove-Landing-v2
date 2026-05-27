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
    title: "Sunset Surf Social",
    description:
      "Group surf session, beach bites, and a live acoustic set as the sun goes down.",
    ctaLabel: "RSVP for the event",
    kickerLabel: "Next event",
  },
  no: {
    title: "Solnedgang Surf Social",
    description:
      "Felles surfsesjon, strandmat og et live akustisk sett mens solen går ned.",
    ctaLabel: "Meld deg på arrangementet",
    kickerLabel: "Neste arrangement",
  },
  de: {
    title: "Sonnenuntergang Surf Social",
    description:
      "Gemeinsame Surfsession, Strandsnacks und ein Live-Akustikset, während die Sonne untergeht.",
    ctaLabel: "Für das Event anmelden",
    kickerLabel: "Nächstes Event",
  },
  date: "June 21, 2026",
  time: "16:00–20:00",
  ctaHref: "#visit",
  location: "Haviksanden Beach, Lista",
};
