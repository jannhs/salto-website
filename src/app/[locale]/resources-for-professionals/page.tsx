"use client";

import { Title, Text, Space, Grid, GridCol } from "@mantine/core";
import { LinkCard } from "@/components/resources-for-professionals/LinkCard";

export default function ResourcesForProfessionalsPage() {
  return (
    <div className="m-auto w-full">
      <div className="m-auto w-full pb-4 bg-[#dce9e2] ">
        <Space h="100px" />
        <Title ta="center">Link utili per operatori</Title>
      </div>
      <div className="m-auto max-w-250 px-4 py-10">
        <Text>
          In questa pagina è possibile scaricare documenti creati al di fuori del progetto SALTO su temi riguardanti
          migranti e salute destinati agli operatori che lavorano a stretto contatto con i cittadini di origine non
          italiana.
        </Text>
      </div>

      <div className="m-auto w-full bg-[#eef9f3] pt-7">
        <Title ta="center" order={2}>
          Statistiche sui migranti
        </Title>
        <div className="px-5 py-5 m-auto max-w-240 ">
          <Grid gutter="lg">
            <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <LinkCard
                type="website"
                title="Dati sull'immigrazione"
                imagePreview="/previews/dati-immigrazione.png"
                url="https://www.epicentro.iss.it/migranti/numeri-italia"
                source="Istituto Superiore di Sanità"
                sourceHref="https://www.epicentro.iss.it"
                altPreview="Preview del sito dell'Istituto Superiore di Sanità"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <LinkCard
                type="website"
                title="Stato di salute dei migranti"
                imagePreview="/previews/stato-salute-migranti.png"
                url="http://www.epiprev.it/pubblicazione/epidemiol-prev-2017-41-3-
4-suppl-1"
                source="Epidemiologia & Prevenzione - Rivista dell'Associazione italiana di epidemologia"
                sourceHref="https://epiprev.it/"
                altPreview="Preview del sito di Epidemiologia & Prevenzione"
              />
            </GridCol>
            {/* <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="pdf"
                title="Tutela della salute"
                imagePreview="/previews/tutela-salute.png"
                link="http://www.sprar.it/wp-content/uploads/2018/03/Dossier-TUTELA-DELLA-SALUTE-2018.pdf"
                source="Rete Sistema Accoglienza Integrazione (SAI)"
                sourceHref="https://epiprev.it/"
                altPreview="Preview del sito della rete SAI"
              />
            </GridCol> 
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="pdf"
                title="Guida ai servizi di emergenza"
                imagePreview="/previews/guida-servizi-emergenza.png"
                link="https://www.epicentro.iss.it/migranti/pdf/Guida_ai_servizi_di_emergenza.pdf"
                source="Istituto Superiore di Sanità"
                sourceHref="https://www.epicentro.iss.it"
                altPreview="Preview del sito dell'Istituto Superiore di Sanità"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="website"
                title="Controlli sanitari all'arrivo"
                imagePreview="/previews/controlli-sanitari-arrivo.png"
                link="https://www.epicentro.iss.it/migranti/LGFrontiere"
                source="Istituto Superiore di Sanità"
                sourceHref="https://www.epicentro.iss.it"
                altPreview="Preview del sito dell'Istituto Superiore di Sanità"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="pdf"
                title="Assistenza e riabilitazione per i rifugiati"
                imagePreview="/previews/assistenza-riabilitazione.png"
                link="http://www.salute.gov.it/imgs/C_17_pubblicazioni_2599_allegato.pdf"
                source="Ministero della Salute"
                sourceHref="http://www.salute.gov.it"
                altPreview="Preview del sito del Ministero della Salute"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="website"
                title="Controllo della tubercolosi"
                imagePreview="/previews/controllo-tubercolosi.png"
                link="https://www.epicentro.iss.it/migranti/LGTubercolosi"
                source="Ministero della Salute"
                sourceHref="http://www.salute.gov.it"
                altPreview="Preview del sito del Ministero della Salute"
              />
            </GridCol>*/}
          </Grid>
        </div>
        <Title ta="center" order={2} mt="sm">
          Guida ai servizi destinati ai migranti
        </Title>
        <div className="px-5 py-5 m-auto max-w-240">
          <Grid gutter="xl">
            <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <LinkCard
                type="pdf"
                title="Tutela della salute"
                imagePreview="/previews/tutela-salute.png"
                url="http://www.sprar.it/wp-content/uploads/2018/03/Dossier-TUTELA-DELLA-SALUTE-2018.pdf"
                source="Rete Sistema Accoglienza Integrazione (SAI)"
                sourceHref="https://epiprev.it/"
                altPreview="Preview del sito della rete SAI"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <LinkCard
                type="pdf"
                title="Guida ai servizi di emergenza"
                imagePreview="/previews/guida-servizi-emergenza.png"
                url="https://www.epicentro.iss.it/migranti/pdf/Guida_ai_servizi_di_emergenza.pdf"
                source="Istituto Superiore di Sanità"
                sourceHref="https://www.epicentro.iss.it"
                altPreview="Preview del sito dell'Istituto Superiore di Sanità"
              />
            </GridCol>
          </Grid>
        </div>
        <Title ta="center" order={2} mt="sm">
          Linee guida per la salute dei migranti
        </Title>
        <div className="px-5 pt-5 pb-12 m-auto max-w-360">
          <Grid gutter="lg">
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="website"
                title="Controlli sanitari all'arrivo"
                imagePreview="/previews/controlli-sanitari-arrivo.png"
                url="https://www.epicentro.iss.it/migranti/LGFrontiere"
                source="Istituto Superiore di Sanità"
                sourceHref="https://www.epicentro.iss.it"
                altPreview="Preview del sito dell'Istituto Superiore di Sanità"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="pdf"
                title="Assistenza e riabilitazione per i rifugiati"
                imagePreview="/previews/assistenza-riabilitazione.png"
                url="http://www.salute.gov.it/imgs/C_17_pubblicazioni_2599_allegato.pdf"
                source="Ministero della Salute"
                sourceHref="http://www.salute.gov.it"
                altPreview="Preview del sito del Ministero della Salute"
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <LinkCard
                type="website"
                title="Controllo della tubercolosi"
                imagePreview="/previews/controllo-tubercolosi.png"
                url="https://www.epicentro.iss.it/migranti/LGTubercolosi"
                source="Ministero della Salute"
                sourceHref="http://www.salute.gov.it"
                altPreview="Preview del sito del Ministero della Salute"
              />
            </GridCol>
          </Grid>
        </div>
      </div>
    </div>
  );
}
