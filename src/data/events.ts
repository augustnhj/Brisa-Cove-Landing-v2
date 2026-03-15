export type EventInfo = {
  title: string;
  date: string;
  time: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  location?: string;
};

export const nextEvent: EventInfo = {
  title: "Sunset Surf Social",
  date: "June 21, 2026",
  time: "16:00–20:00",
  description:
    "Group surf session, beach bites, and a live acoustic set as the sun goes down.",
  ctaLabel: "RSVP for the event",
  ctaHref: "#visit",
  location: "Haviksanden Beach, Lista",
};
