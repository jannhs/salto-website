"use client";

import { Card, Text, Button, Title } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { useMantineTheme } from "@mantine/core";
import classes from "./resource-highlights.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { url } from "inspector";

export default function ResourceHighlights() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const t = useTranslations("ResourceHighlights");

  const resources = [
    {
      title: t("Female reproductive health.title"),
      description: t("Female reproductive health.description"),
      image: "/icons/female-reproductive-health.png",
      url: "/resources/womens-health",
      width: 140,
      height: 140,
    },
    {
      title: t("Healthy diet.title"),
      description: t("Healthy diet.description"),
      image: "/icons/healthy-plate3.jpg",
      url: "/resources/healthy-diet",
      width: 100,
      height: 100,
    },
    {
      title: t("Correct use of medicines.title"),
      description: t("Correct use of medicines.description"),
      image: "/icons/medicines.png",
      url: "/resources/correct-use-of-meds",
      width: 100,
      height: 100,
    },
    // { // inserire dentro salute femminile
    //   title: t("Pregnancy.title"),
    //   description: t("Pregnancy.description"),
    //   image: "/icons/pregnancy.png",
    //   width: 100,
    //   height: 100,
    // },
    {
      title: t("Pediatric care.title"),
      description: t("Pediatric care.description"),
      url: "/resources/childrens-health",
      image: "/icons/pediatric-care.png",
      width: 100,
      height: 100,
    },
    {
      title: t("Skin conditions.title"),
      description: t("Skin conditions.description"),
      url: "/resources/skin-conditions",
      image: "/icons/skin-conditions.png",
      width: 100,
      height: 100,
    },
    {
      title: t("Access to healthcare.title"),
      description: t("Access to healthcare.description"),
      url: "/resources",
      image: "/icons/access-to-healthcare.png",
      width: 100,
      height: 100,
    },
    {
      title: t("Prevention.title"),
      description: t("Prevention.description"),
      url: "/resources/lifestyle-and-prevention",
      image: "/icons/prevention.png",
      width: 170,
      height: 170,
    },
  ];

  const slides = resources.map((resource) => (
    <Carousel.Slide key={resource.title}>
      <Card
        key={resource.title}
        className={classes.card}
        m={mobile ? "xs" : "md"}
        p={mobile ? "xs" : "lg"}
        h="100%"
        w={mobile ? "100%" : "350px"}
        withBorder
        radius="md"
        shadow="sm"
      >
        <Card.Section m="auto" pt="md">
          <Image src={resource.image} height={resource.height} alt={resource.title} width={resource.width} />
        </Card.Section>
        <Text fw="600" pt="sm" c="#3C776B" size="xl" ta="center">
          {resource.title}
        </Text>
        <Text size="lg" mb="xs" ta="center">
          {resource.description}
        </Text>
        <Button variant="filled" w="130px" m="auto" color="#2e6940" component="a" href={resource.url}>
          {t("learnMore")}
        </Button>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <Title size={35} ta="center" mb="xs" c="#2D5A51">
        {t("title")}
      </Title>
      <Carousel
        withIndicators
        height={400}
        withControls
        controlsOffset="xs"
        controlSize={50}
        nextControlIcon={
          <IconChevronRight
            size={40}
            color={theme.colors.darkSlateGreen[8]}
            stroke={1.5}
            className={classes.controlIcon}
          />
        }
        previousControlIcon={
          <IconChevronLeft
            size={40}
            color={theme.colors.darkSlateGreen[8]}
            stroke={1.5}
            className={classes.controlIcon}
          />
        }
        slideSize={{ base: "100%", xs: "50%", sm: "50%", md: "33%", lg: "33%" }}
        slideGap={{ base: "md", sm: "md", md: "md", lg: "md", xl: "md" }}
        emblaOptions={{ dragFree: true, align: "center" }}
        classNames={classes}
      >
        {slides}
      </Carousel>
    </div>
  );
}
