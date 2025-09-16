"use client";

import { Title, Text, Space, Grid, GridCol } from "@mantine/core";
import { BrochureCard } from "@/components/resources/BrochureCard";
import { professionalResources } from "@/data/professionalResources";
import { useTranslations } from "next-intl";

export default function ResourcesForProfessionalsPage() {
  const { statistics, guides, guidelines } = professionalResources;
  const t1 = useTranslations("SearchBar.results.resources-for-professionals");
  const t2 = useTranslations("ResourcesForProfessionals");
  return (
    <div className="m-auto w-full">
      <div className="m-auto w-full pb-10 bg-[linear-gradient(rgba(0,0,0,0.527),rgba(0,0,0,0.5)),url('/images/resources-bgs/resources-for-professionals.jpeg')] bg-cover bg-center">
        <Space h="260px" />
        <Title ta="center" c="white">
          {t1("actions.resources-for-professionals.label")}
        </Title>
      </div>
      <div className="m-auto max-w-250 px-4 py-10">
        <Text>{t2("preamble")}</Text>
      </div>

      <div className="m-auto w-full  pt-7 py-5 ">
        <Title ta="center" order={2} c="#" py="xs">
          {t2("statistics")}
        </Title>
        <div className="px-5 m-auto max-w-240 ">
          <Grid gutter="lg">
            {statistics.resources.map((item) => (
              <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }} key={item.title}>
                <BrochureCard {...item} />
              </GridCol>
            ))}
          </Grid>
        </div>
        <Title ta="center" order={2} mt="lg">
          {t2("guides")}
        </Title>
        <div className="px-5 py-5 m-auto max-w-240">
          <Grid gutter="xl">
            {guides.resources.map((item) => (
              <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }} key={item.title}>
                <BrochureCard {...item} />
              </GridCol>
            ))}
          </Grid>
        </div>
        <Title ta="center" order={2} mt="sm">
          {t2("guidelines")}
        </Title>
        <div className="px-5 pt-5 pb-12 m-auto max-w-260">
          <Grid gutter="lg">
            {guidelines.resources.map((item) => (
              <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }} key={item.title}>
                <BrochureCard {...item} />
              </GridCol>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
