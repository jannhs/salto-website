import type { Resource } from "@/utils/types";

export const womensHealthResourcesByLocale: Record<
  string,
  {
    contraception: {
      videos: Resource[];
    };
    pregnancy: {
      brochures: Resource[];
      videos: Resource[];
    };
    breastfeeding: {
      brochures: Resource[];
    };
  }
> = {
  en: {
    contraception: {
      videos: [
        {
          type: "video",
          title: "Project G-Start",
          url: "https://youtube.com/embed/wqkwkCJ1tds",
          source: "Project G-Start",
          sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
          imagePreview: "/previews/default.png",
        },
      ],
    },
    pregnancy: {
      brochures: [],
      videos: [
        {
          type: "video",
          title: "Project G-Start",
          url: "https://youtube.com/embed/UY9OnDVintY",
          source: "Project G-Start",
          sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
          imagePreview: "/previews/default.png",
        },
      ],
    },
    breastfeeding: {
      brochures: [],
    },
  },
  it: {
    contraception: {
      videos: [
        {
          type: "video",
          title: "Progetto G-Start",
          url: "https://youtube.com/embed/a0npEQsiAfk",
          source: "Progetto G-Start",
          sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
          imagePreview: "/previews/default.png",
        },
      ],
    },
    pregnancy: {
      brochures: [
        {
          type: "website",
          title: "Uso di specifici farmaci in gravidanza",
          url: "https://www.ospedalebambinogesu.it/bambino/pediatria-in-pillole/farmaci-e-allattamento-dalla-a-alla-z/?collection=opbg-internet&sourcePath=/bambino/pediatria-in-pillole/farmaci-e-allattamento-dalla-a-alla-z",
          source: "Ospedale Pediatrico Bambino Gesù",
          sourceHref: "https://www.ospedalebambinogesu.it/",
          imagePreview: "/previews/default.png",
        },
      ],
      videos: [
        {
          type: "video",
          title: "Progetto G-Start",
          url: "https://youtube.com/embed/8eV8UDvZx98",
          source: "Progetto G-Start",
          sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
          imagePreview: "/previews/default.png",
        },
      ],
    },
    breastfeeding: {
      brochures: [
        {
          type: "website",
          title: "Allattamento e farmaci",
          url: "https://www.ospedalebambinogesu.it/allattamento-materno-e-farmaci-80503/",
          source: "Ospedale Pediatrico Bambino Gesù",
          sourceHref: "https://www.ospedalebambinogesu.it/",
          imagePreview: "/previews/default.png",
        },
        {
          type: "website",
          title: "Allattamento e fumo",
          url: "https://www.ospedalebambinogesu.it/fumo-e-allattamento-rischi-per-mamma-e-neonato-96719/",
          source: "Ospedale Pediatrico Bambino Gesù",
          sourceHref: "https://www.ospedalebambinogesu.it/",
          imagePreview: "/previews/default.png",
        },
        {
          type: "website",
          title: "Come allattare",
          url: "https://www.ospedalebambinogesu.it/allattamento-al-seno-come-posizionare-e-attaccare-il-bambino-90006/",
          source: "Ospedale Pediatrico Bambino Gesù",
          sourceHref: "https://www.ospedalebambinogesu.it/",
          imagePreview: "/previews/default.png",
        },
      ],
    },
  },
};
