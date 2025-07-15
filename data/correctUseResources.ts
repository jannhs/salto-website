import type { Resource } from "@/utils/types";

export const correctUseResourcesByLocale: Record<
  string,
  {
    correctUse: {
      brochures: Resource[];
    };
    antibiotics: {
      brochures: Resource[];
    };
  }
> = {
  it: {
    correctUse: {
      brochures: [
        {
          type: "pdf",
          title: "10 regole per un uso corretto",
          url: "https://www.cittadinanzattiva-er.it/wp-content/uploads/2015/10/CARTOLINA_USO-CORRETTO-FARMACI_SINGOLA.pdf",
          source: "Cittadinanzattiva APS",
          sourceHref: "https://www.cittadinanzattiva-er.it",
          imagePreview: "/previews/default.png",
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
          imagePreview: "/previews/default.png",
        },
        {
          type: "pdf",
          title: "Uso degli antibiotici per le infezioni delle vie urinarie",
          url: "https://www.informazionisuifarmaci.it/allegati/per%20sito%20FCR-%20Pieghevole%20Antibiotici_191126092747.pdf",
          source: "Farmacie Comunali Riunite",
          sourceHref: "https://fcrinforma.fcr.re.it",
          imagePreview: "/previews/default.png",
        },
      ],
    },
  },

  en: {
    correctUse: {
      brochures: [],
    },
    antibiotics: {
      brochures: [],
    },
  },
};
