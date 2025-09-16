import type { Event } from "@/utils/types";

export const eventsByLocale: Record<
  string,
  {
    september: {
      events: Event[];
    };
  }
> = {
  it: {
    september: {
      events: [
        {
          id: "1",
          date: "2025-09-26",
          day: "26",
          title: "Notte Europea dei Ricercatori 2025",
          description:
            "Un’esperienza immersiva nel mondo della ricerca attraverso laboratori, esperimenti, incontri e performance per scoprire come ricercatori e ricercatrici stanno affrontando le sfide della società.",
          url: "https://unightproject.eu/it/eventi/torino",
        },
      ],
    },
  },
  en: {
    september: {
      events: [
        {
          id: "1",
          date: "2025-09-26",
          day: "26",
          title: "European Researchers' Night 2025",
          description:
            "An immersive experience in the world of research through laboratories, experiments, meetings, and performances to discover how researchers are tackling society’s challenges.",
          url: "https://unightproject.eu/it/eventi/torino",
        },
      ],
    },
  },
  es: {
    september: {
      events: [
        {
          id: "1",
          date: "2025-09-26",
          day: "26 ",
          title: "Noche Europea de los Investigadores 2025",
          description:
            "Una experiencia inmersiva en el mundo de la investigación a través de laboratorios, experimentos, encuentros y actuaciones para descubrir cómo los investigadores e investigadoras afrontan los retos de la sociedad.",
          url: "https://unightproject.eu/it/eventi/torino",
        },
      ],
    },
  },
  fr: {
    september: {
      events: [
        {
          id: "1",
          date: "2025-09-26",
          day: "26",
          title: "Nuit Européenne des Chercheurs 2025",
          description:
            "Une expérience immersive dans le monde de la recherche à travers des laboratoires, des expériences, des rencontres et des performances pour découvrir comment les chercheurs et chercheuses relèvent les défis de la société.",
          url: "https://unightproject.eu/it/eventi/torino",
        },
      ],
    },
  },
  ar: {
    september: {
      events: [
        {
          id: "1",
          date: "2025-09-26",
          day: "26",
          title: "ليلة الباحثين الأوروبيين",
          description:
            "تجربة غامرة في عالم البحث العلمي من خلال المختبرات والتجارب واللقاءات والعروض لاكتشاف كيفية تصدي الباحثين والباحثات لتحديات المجتمع.",
          url: "https://unightproject.eu/it/eventi/torino",
        },
      ],
    },
  },
};
