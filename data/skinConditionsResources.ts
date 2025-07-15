import type { Resource } from "@/utils/types";

export const skinConditionsResourcesByLocale: Record<
  string,
  {
    brochures: Resource[];
  }
> = {
  en: {
    brochures: [
      {
        type: "pdf",
        title: "What is scabies?",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=de42664cf7bb96c94f6f4feb841c22bf&LNG=EN",
        source: "Project ICARE",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/default.png",
      },
    ],
  },
  it: {
    brochures: [
      {
        type: "pdf",
        title: "Scabbia nei bambini",
        url: "https://www.ospedalebambinogesu.it/scabbia-89946/",
        source: "Ospedale Pediatrico Bambino Gesù",
        sourceHref: "https://www.ospedalebambinogesu.it/",
        imagePreview: "/previews/default.png",
      },
      {
        type: "pdf",
        title: "Che cos'è la scabbia",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=de42664cf7bb96c94f6f4feb841c22bf&LNG=IT",
        source: "Progetto ICARE",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/default.png",
      },
    ],
  },
};
