import type { Resource } from "@/utils/types";
export const professionalResources: {
  statistics: { resources: Resource[] };
  guides: { resources: Resource[] };
  guidelines: { resources: Resource[] };
} = {
  statistics: {
    resources: [
      {
        type: "website",
        title: "Dati sull'immigrazione",
        imagePreview: "/previews/dati-immigrazione.png",
        url: "https://www.epicentro.iss.it/migranti/numeri-italia",
        source: "Istituto Superiore di Sanità",
        sourceHref: "https://www.epicentro.iss.it",
        altPreview: "Preview del sito dell'Istituto Superiore di Sanità",
        languages: ["it"],
      },
      {
        type: "website",
        title: "Stato di salute dei migranti",
        imagePreview: "/previews/stato-salute-migranti.png",
        url: "http://www.epiprev.it/pubblicazione/epidemiol-prev-2017-41-3-4-suppl-1",
        source: "Epidemiologia & Prevenzione - Rivista dell'Associazione italiana di epidemiologia",
        sourceHref: "https://epiprev.it/",
        altPreview: "Preview del sito di Epidemiologia & Prevenzione",
        languages: ["it"],
      },
    ],
  },
  guides: {
    resources: [
      {
        type: "pdf",
        title: "Tutela della salute",
        imagePreview: "/previews/tutela-salute.png",
        url: "http://www.sprar.it/wp-content/uploads/2018/03/Dossier-TUTELA-DELLA-SALUTE-2018.pdf",
        source: "Rete Sistema Accoglienza Integrazione (SAI)",
        sourceHref: "https://epiprev.it/",
        altPreview: "Preview del sito della rete SAI",
        languages: ["it"],
      },
      {
        type: "pdf",
        title: "Guida ai servizi di emergenza",
        imagePreview: "/previews/guida-servizi-emergenza.png",
        url: "https://www.epicentro.iss.it/migranti/pdf/Guida_ai_servizi_di_emergenza.pdf",
        source: "Istituto Superiore di Sanità",
        sourceHref: "https://www.epicentro.iss.it",
        altPreview: "Preview del sito dell'Istituto Superiore di Sanità",
        languages: ["it", "en", "fr", "ar", "es", "rum", "run", "cn"],
      },
    ],
  },
  guidelines: {
    resources: [
      {
        type: "website",
        title: "Controlli sanitari all'arrivo",
        imagePreview: "/previews/controlli-sanitari-arrivo.png",
        url: "https://www.epicentro.iss.it/migranti/controlli-sanitari",
        source: "Istituto Superiore di Sanità",
        sourceHref: "https://www.epicentro.iss.it",
        altPreview: "Preview del sito dell'Istituto Superiore di Sanità",
        languages: ["it"],
      },
      {
        type: "pdf",
        title: "Assistenza e riabilitazione per i rifugiati",
        imagePreview: "/previews/assistenza-riabilitazione.png",
        url: "http://www.salute.gov.it/imgs/C_17_pubblicazioni_2599_allegato.pdf",
        source: "Ministero della Salute",
        sourceHref: "http://www.salute.gov.it",
        altPreview: "Preview del sito del Ministero della Salute",
        languages: ["it"],
      },
    ],
  },
};
