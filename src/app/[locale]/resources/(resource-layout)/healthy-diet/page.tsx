import type { Resource } from "@/utils/types";
import { useLocale } from "next-intl";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { healthyDietExtraResourcesByLocale } from "@/data/healthyDietResources";

// Videos to be displayed only in English version of the site
const enVideos: Resource[] = [
  {
    type: "video",
    title: "Project 'G-Start",
    url: "https://youtube.com/embed/2-4X6wdzsHM",
    source: "Project G-Start",
    sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
  },
];

// Brochures and video to be displayed only in Italian version of the site
const brochures: Resource[] = [
  {
    type: "pdf",
    title: "Raccomandazioni per una sana alimentazione",
    url: "https://www.aou-careggi.toscana.it/internet/wp-content/uploads/2023/08/i_3005_04_AlimCarat.pdf",
    source: "Azienda Ospedaliera Universitaria Careggi",
    sourceHref: "https://www.aou-careggi.toscana.it",
    imagePreview: "/previews/raccomandazioni-alimentazione.png",
    altPreview: "Preview dell'opuscolo 'Guida al percorso di assistenza nutrizionale in riabilitazione cardiologica",
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
];

const videos: Resource[] = [
  {
    type: "video",
    title: "Progetto 'G-Start",
    url: "https://youtube.com/embed/8GPfRJit7eU",
    source: "Progetto G-Start",
    sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
  },
];

export default function HealthyDietPage() {
  const locale = useLocale();

  const { videos, brochures } = healthyDietExtraResourcesByLocale[locale] ?? {
    videos: [],
    brochures: [],
  };

  return <ThirdPartyResourcesSection brochures={brochures} videos={videos} />;
}
