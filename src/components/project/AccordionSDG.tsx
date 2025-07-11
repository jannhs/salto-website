"use client";

import { Group, Text, Accordion, Grid, GridCol } from "@mantine/core";
import classes from "./AccordionSDG.module.css";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
import { Fragment } from "react";

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Image src={image} width="90" height="90" alt={label} />
      <div className={classes.InnerLabel}>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function ColumnsObjectives(m: any, nGoal: Number) {
  let t = nGoal == 3 ? useTranslations("ProjectPage.Goal3") : useTranslations("ProjectPage.Goal10");
  const keys = nGoal == 3 ? Object.keys(m.ProjectPage.Goal3.objectives) : Object.keys(m.ProjectPage.Goal10.objectives);

  const objectives = [];

  for (let i = 0; i < keys.length; i++) {
    const description = t(`objectives.${keys[i]}.description`);
    const label = t(`objectives.${keys[i]}.title`);
    objectives.push([label, description]);
  }
  console.log(objectives);
  return objectives.map((item) => (
    <Fragment key={item[0]}>
      <GridCol span={1}>
        <Text size="lg" fw="800" ta="right">
          {item[0]}
        </Text>
      </GridCol>
      <GridCol span={11}>
        <Text>{item[1]}</Text>
      </GridCol>
    </Fragment>
  ));
}

export function AccordionSDG({ language }: { language: string }) {
  const imageLocaleSubDir = "/icons/sdg/" + language + "/";
  const t = useTranslations("ProjectPage");

  // Get objectives for each SDG
  const m = useMessages();
  const columnGridGoal3 = ColumnsObjectives(m, 3);
  const columnGridGoal10 = ColumnsObjectives(m, 10);

  const sdgs = [
    {
      id: "3",
      image: imageLocaleSubDir + "icon-03.png",
      label: t("Goal3.label"),
      description: t("Goal3.description"),
      objectives: columnGridGoal3,
    },
    {
      id: "10",
      image: imageLocaleSubDir + "icon-10.png",
      label: t("Goal10.label"),
      description: t("Goal10.description"),
      objectives: columnGridGoal10,
    },
  ];

  const items = sdgs.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control
        classNames={{
          control: classes.control,
          icon: classes.AccordionIcon,
          label: classes.label,
        }}
      >
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel className="pt-1 mt-5">
        {/* <Image
          src="/images/3_SDG_MakeEveryDayCount_Gifs_GDU.gif"
          alt="Gif 3rd objective of the SDGs"
          width={300}
          height={300}
        />

        <Image
          src="/images/10_SDG_MakeEveryDayCount_Gifs_GDU.gif"
          alt="Gif 10th objective of the SDGs"
          width={300}
          height={300}
        /> */}
        <Grid>{item.objectives}</Grid>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="separated">
      {items}
    </Accordion>
  );
}
