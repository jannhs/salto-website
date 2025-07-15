import type { Resource } from "@/utils/types";

export const childrenHealthResourcesByLocale: Record<
  string,
  {
    lifestyle: {
      posters: Resource[];
      brochures: Resource[];
      videos: Resource[];
    };
    sleep: {
      brochures: Resource[];
    };
  }
> = {
  it: {
    lifestyle: {
      posters: [
        {
          type: "pdf",
          title: "Progetto Okkio alla Salute",
          url: "https://www.epicentro.iss.it/okkioallasalute/materiale/C_17_opuscoliPoster_22_allegato.pdf",
          source: "Progetto Okkio alla Salute",
          sourceHref: "https://www.epicentro.iss.it/okkioallasalute/",
          imagePreview: "/previews/default.png",
        },
      ],
      brochures: [
        {
          type: "pdf",
          title: "Progetto Okkio alla Salute",
          url: "https://www.epicentro.iss.it/okkioallasalute/materiale/C_17_opuscoliPoster_27_allegato.pdf",
          source: "Progetto Okkio alla Salute",
          sourceHref: "https://www.epicentro.iss.it/okkioallasalute/",
          imagePreview: "/previews/default.png",
        },
      ],
      videos: [
        {
          type: "video",
          title: "Progetto Okkio alla Salute",
          url: "https://www.youtube.com/embed/rt6XMtjEtHs",
          source: "Progetto Okkio alla Salute",
          sourceHref: "https://www.epicentro.iss.it/okkioallasalute/",
          imagePreview: "/previews/default.png",
        },
      ],
    },
    sleep: {
      brochures: [
        {
          type: "pdf",
          title: "Opuscolo per i genitori",
          url: "https://www.suidsidsitalia.com/wp-content/uploads/2025/03/Sonno-Pediatrico-e-Disturbi-_Info-per-Genitori-1.pdf",
          source: "SUID & SIDS Italia Onlus",
          sourceHref: "https://www.suidsidsitalia.com",
          imagePreview: "/previews/default.png",
        },
      ],
    },
  },

  en: {
    lifestyle: {
      posters: [],
      brochures: [],
      videos: [],
    },
    sleep: {
      brochures: [],
    },
  },
};
