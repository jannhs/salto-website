import type { Resource } from "@/utils/types";

export const lifestyleResources: {
  behaviour: {
    brochures: Resource[];
    videos: Resource[];
  };
  antiSmoking: {
    brochures: Resource[];
  };
  vaccine: {
    brochures: Resource[];
  };
  teeth: {
    brochures: Resource[];
  };
} = {
  behaviour: {
    brochures: [
      {
        type: "pdf",
        title: "Programma 'Guadagnare Salute'",
        url: "https://www.epicentro.iss.it/guadagnare-salute/comunicazione/materiali/Leaflet_defalta.pdf",
        source: "Istituto Superiore di Sanità",
        sourceHref: "https://www.epicentro.iss.it/",
        imagePreview: "/previews/lifestyle-and-prevention/guadagnare-salute.png",
        altPreview: "",
        languages: ["it"],
      },
      {
        type: "pdf",
        title: "Opuscoli Sani&inForma",
        url: "https://fcrinforma.fcr.re.it/pubblicazioni/opuscoli-sani-informa/",
        source: "Farmacie Comunali Riunite",
        sourceHref: "https://fcrinforma.fcr.re.it",
        imagePreview: "/previews/lifestyle-and-prevention/sani-informa.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
    videos: [
      {
        type: "video",
        title: "Project G-Start",
        url: "https://youtube.com/embed/kwgKOcFBWFc",
        source: "Project G-Start",
        sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
        languages: ["en"],
      },
      {
        type: "video",
        title: "Projet G-Start",
        url: "https://youtube.com/embed/am3kJ5yHscM",
        source: "Projet G-Start",
        sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
        languages: ["fr"],
      },
      {
        type: "video",
        title: "Progetto 'G-Start",
        url: "https://youtube.com/embed/VypeejDrybw",
        source: "Progetto G-Start",
        sourceHref: "https://www.epicentro.iss.it/migranti/g-start",
        languages: ["it"],
      },
    ],
  },
  antiSmoking: {
    brochures: [
      {
        type: "pdf",
        title: "Opuscolo Sani&inForma",
        url: "https://www.informazionisuifarmaci.it/allegati/fumo-donna_160921041421.pdf",
        source: "Farmacie Comunali Riunite",
        sourceHref: "https://fcrinforma.fcr.re.it",
        imagePreview: "/previews/lifestyle-and-prevention/smoking-woman.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
  },
  vaccine: {
    brochures: [
      {
        type: "pdf",
        title: "Recommended vaccinations for adults",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=b8df6e9f40fef5fa0fe35ec76a3774c9&LNG=EN",
        source: "ICARE Project",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/lifestyle-and-prevention/vaccines-en.png",
        altPreview: "",
        languages: ["en"],
      },
      {
        type: "pdf",
        title: "Vaccinations recommandées pour les adultes",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=b8df6e9f40fef5fa0fe35ec76a3774c9&LNG=FR",
        source: "Projet ICARE",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/lifestyle-and-prevention/vaccines-fr.png",
        altPreview: "",
        languages: ["fr"],
      },
      {
        type: "pdf",
        title: "Vacunas recomendadas para adultos",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=b8df6e9f40fef5fa0fe35ec76a3774c9&LNG=ES",
        source: "Proyecto ICARE",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/lifestyle-and-prevention/vaccines-es.png",
        altPreview: "",
        languages: ["es"],
      },

      {
        type: "pdf",
        title: "Vaccinazioni raccomandate negli adulti",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=b8df6e9f40fef5fa0fe35ec76a3774c9&LNG=IT",
        source: "Progetto ICARE",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/lifestyle-and-prevention/vaccines-it.png",
        altPreview: "",
        languages: ["it"],
      },
      {
        type: "pdf",
        title: "التطعيمات الموصى بها للبالغين",
        url: "https://www.progettoicare.it/flex/Extensions/AppModules/AppIcareDoc/pages/serveFileIcare.php?P=248&ID=b8df6e9f40fef5fa0fe35ec76a3774c9&LNG=AR",
        source: "مشروع ICARE",
        sourceHref: "https://www.progettoicare.it/",
        imagePreview: "/previews/lifestyle-and-prevention/vaccines-ar.png",
        altPreview: "",
        languages: ["ar"],
      },
    ],
  },
  teeth: {
    brochures: [
      {
        type: "pdf",
        title: "Opuscolo Sani&inForma per i pazienti diabetici",
        url: "https://www.informazionisuifarmaci.it/allegati/FCR%20Opuscolo%20diabete%20FCR_LOW-1_191126094946.pdf",
        source: "Informazioni sui Farmaci (IsF)",
        sourceHref: "https://www.informazionisuifarmaci.it/",
        imagePreview: "/previews/lifestyle-and-prevention/teeth-diabetes.png",
        altPreview: "",
        languages: ["it"],
      },
    ],
  },
};
