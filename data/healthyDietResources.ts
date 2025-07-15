import type { Resource } from "@/utils/types";

export const healthyDietExtraResourcesByLocale: Record<string, { videos: Resource[]; brochures: Resource[] }> = {
  en: {
    videos: [
      {
        type: "video",
        title: "Project 'G-Start",
        url: "https://youtube.com/embed/2-4X6wdzsHM",
        source: "Project G-Start",
        sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
      },
    ],
    brochures: [],
  },
  it: {
    videos: [
      {
        type: "video",
        title: "Progetto 'G-Start",
        url: "https://youtube.com/embed/8GPfRJit7eU",
        source: "Progetto G-Start",
        sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
      },
    ],
    brochures: [
      {
        type: "pdf",
        title: "Raccomandazioni per una sana alimentazione",
        url: "https://www.aou-careggi.toscana.it/internet/wp-content/uploads/2023/08/i_3005_04_AlimCarat.pdf",
        source: "Azienda Ospedaliera Universitaria Careggi",
        sourceHref: "https://www.aou-careggi.toscana.it",
        imagePreview: "/previews/raccomandazioni-alimentazione.png",
        altPreview:
          "Preview dell'opuscolo 'Guida al percorso di assistenza nutrizionale in riabilitazione cardiologica",
      },
      {
        type: "pdf",
        title: "Consigli per una sana alimentazione",
        url: "https://www.aou-careggi.toscana.it/internet/wp-content/uploads/2023/08/i_3005_05_AlimStrategie.pdf",
        source: "Azienda Ospedaliera Universitaria Careggi",
        sourceHref: "https://www.aou-careggi.toscana.it",
        imagePreview: "/previews/consigli-alimentazione.png",
        altPreview:
          "Preview dell'opuscolo 'Guida al percorso di assistenza nutrizionale in riabilitazione cardiologica - Consigli e strategie'",
      },
      {
        type: "pdf",
        title: "Opuscolo “Sani&inForma” sul corretto consumo di sale",
        url: "https://www.informazionisuifarmaci.it/allegati/sale_160921043718.pdf",
        source: "Informazioni sui Farmaci (IsF)",
        sourceHref: "https://www.informazionisuifarmaci.it/",
        imagePreview: "/previews/abbasso-sale.png",
        altPreview: "Preview dell'opuscolo 'Abbasso il sale!'",
      },
    ],
  },
};
