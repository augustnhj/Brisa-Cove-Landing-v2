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
    title: "Friday Nights at Brisa Cove",
    description:
      "From July 1st we're (pending permission) serving alcohol every Friday — and we'll be running events and arrangements to make your beach Fridays something to look forward to. Stay tuned.",
    ctaLabel: "Follow us for updates",
    kickerLabel: "Coming up",
  },
  no: {
    title: "Fredagskvelder på Brisa Cove",
    description:
      "Fra 1. juli serverer vi (under forutsetning av tillatelse) alkohol hver fredag — og vi planlegger arrangementer for å gjøre fredagene dine på stranden til noe å glede seg til. Følg med!",
    ctaLabel: "Følg oss for oppdateringer",
    kickerLabel: "Kommer snart",
  },
  de: {
    title: "Freitagsabende bei Brisa Cove",
    description:
      "Ab dem 1. Juli servieren wir (vorbehaltlich Genehmigung) jeden Freitag Alkohol — und wir planen Events, um eure Freitage am Strand zu etwas Besonderem zu machen. Bleibt dran!",
    ctaLabel: "Folgt uns für Updates",
    kickerLabel: "Demnächst",
  },
  date: "From 1 July 2026",
  time: "Every Friday",
  ctaHref: "https://www.instagram.com/brisacove/",
  location: "Haviksanden Beach, Lista",
};
