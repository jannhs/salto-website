import type { Resource } from "@/utils/types";

export const childrenHealthResources: {
  lifestyle: {
    posters: Resource[];
    brochures: Resource[];
    videos: Resource[];
  };
  sleep: {
    brochures: Resource[];
  };
} = {
  lifestyle: {
    posters: [
      {
        type: "poster",
        title: "Progetto Okkio alla Salute",
        url: "https://www.epicentro.iss.it/okkioallasalute/materiale/C_17_opuscoliPoster_22_allegato.pdf",
        source: "Progetto Okkio alla Salute",
        sourceHref: "https://www.epicentro.iss.it/okkioallasalute/",
        imagePreview: "/previews/childrens-health/okkio-alla-salute-22.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
    brochures: [
      {
        type: "pdf",
        title: "Progetto Okkio alla Salute",
        url: "https://www.epicentro.iss.it/okkioallasalute/materiale/C_17_opuscoliPoster_27_allegato.pdf",
        source: "Progetto Okkio alla Salute",
        sourceHref: "https://www.epicentro.iss.it/okkioallasalute/",
        imagePreview: "/previews/childrens-health/okkio-alla-salute-27.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
    videos: [
      {
        type: "video",
        title: "Progetto Okkio alla Salute",
        url: "https://www.youtube.com/embed/rt6XMtjEtHs",
        source: "Progetto Okkio alla Salute",
        sourceHref: "https://www.epicentro.iss.it/okkioallasalute/",
        altPreview: "",
        languages: ["it"],
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
        imagePreview: "/previews/childrens-health/suids-italia-sleep.png",
        languages: ["it"],
        altPreview: "",
      },
    ],
  },
};
