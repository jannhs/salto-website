import type { Resource } from "@/utils/types";

export const correctUseResources: {
  correctUse: {
    brochures: Resource[];
  };
  antibiotics: {
    brochures: Resource[];
  };
} = {
  correctUse: {
    brochures: [
      {
        type: "pdf",
        title: "10 regole per un uso corretto",
        url: "https://www.cittadinanzattiva-er.it/wp-content/uploads/2015/10/CARTOLINA_USO-CORRETTO-FARMACI_SINGOLA.pdf",
        source: "Cittadinanzattiva APS",
        sourceHref: "https://www.cittadinanzattiva-er.it",
        imagePreview: "/previews/correct-use-of-meds/cittadinanzattiva-aps.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
  },
  antibiotics: {
    brochures: [
      {
        type: "pdf",
        title: "Opuscolo Sani&inForma sull'uso degli antibiotici",
        url: "https://www.informazionisuifarmaci.it/allegati/Farmacie%20Comunali%20-%20Pieghevole%20Antibiotici%20(FCR)%20-%2017.11_180131042951.pdf",
        source: "Farmacie Comunali Riunite",
        sourceHref: "https://fcrinforma.fcr.re.it",
        imagePreview: "/previews/correct-use-of-meds/antibiotics.png",
        languages: ["it"],
        altPreview: "",
      },
      {
        type: "pdf",
        title: "Uso degli antibiotici per le infezioni delle vie urinarie",
        url: "https://www.informazionisuifarmaci.it/allegati/per%20sito%20FCR-%20Pieghevole%20Antibiotici_191126092747.pdf",
        source: "Farmacie Comunali Riunite",
        sourceHref: "https://fcrinforma.fcr.re.it",
        imagePreview: "/previews/correct-use-of-meds/antibiotics-2.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
  },
};
