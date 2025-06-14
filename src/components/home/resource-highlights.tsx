"use client";

import { Card, Text, Button, Title } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { useMantineTheme } from "@mantine/core";
import classes from "./resource-highlights.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function ResourceHighlights() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const t = useTranslations("ResourceHighlights");

  const resources = [
    {
      title: t("Female reproductive health.title"),
      description: t("Female reproductive health.description"),
      image: "/icons/female-reproductive-health.png",
    },
    {
      title: t("Healthy diet.title"),
      description: t("Healthy diet.description"),
      image: "/icons/healthy-diet.png",
    },
    {
      title: t("Correct use of medicines.title"),
      description: t("Correct use of medicines.description"),
      image: "/icons/medicines.png",
    },
    {
      title: t("Pregnancy.title"),
      description: t("Pregnancy.description"),
      image: "/icons/pregnancy.png",
    },
    {
      title: t("Pediatric care.title"),
      description: t("Pediatric care.description"),
      image: "/icons/pediatric-care.png",
    },
    {
      title: t("Skin conditions.title"),
      description: t("Skin conditions.description"),
      image: "/icons/skin-conditions.png",
    },
    {
      title: t("Access to healthcare.title"),
      description: t("Access to healthcare.description"),
      image: "/icons/access-to-healthcare.png",
    },
  ];

  // const resources = [
  //   {
  //     title: "Female reproductive health",
  //     description: "Learn about female reproductive health.",
  //     image: "/icons/female-reproductive-health.png",
  //   },
  //   {
  //     title: "Healthy diet",
  //     description: "Discover the importance of a balanced diet.",
  //     image: "/icons/healthy-diet.png",
  //   },
  //   {
  //     title: "Correct use of medicines",
  //     description: "Understand how to use medicines safely.",
  //     image: "/icons/medicines.png",
  //   },
  //   {
  //     title: "Pregnancy",
  //     description: "Get information on pregnancy and childbirth.",
  //     image: "/icons/pregnancy.png",
  //   },
  //   {
  //     title: "Pediatric care",
  //     description: "Learn about pediatric care and child health.",
  //     image: "/icons/pediatric-care.png",
  //   },
  //   {
  //     title: "Skin conditions",
  //     description: "Explore common skin conditions and treatments.",
  //     image: "/icons/skin-conditions.png",
  //   },
  //   {
  //     title: "Access to healthcare",
  //     description: "Learn about healthcare access and services.",
  //     image: "/icons/access-to-healthcare.png",
  //   },
  // ];

  const slides = resources.map((resource) => (
    <Carousel.Slide key={resource.title}>
      <Card key={resource.title} className={classes.card} m={mobile ? "xs" : "md"} p={mobile ? "xs" : "lg"}>
        <Card.Section m="auto" pt="md">
          <Image src={resource.image} height={100} alt={resource.title} width={100} />
        </Card.Section>
        <Text fw="600" pt="sm" c="#3C776B" size="lg" ta="center">
          {resource.title}
        </Text>
        <Text size="md" mb="sm" ta="center">
          {resource.description}
        </Text>
        <Button variant="filled" w="130px" m="auto" color="#2e6940">
          {t("learnMore")}
        </Button>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <Title order={2} ta="center" mb="xs" c="#2D5A51">
        {t("title")}
      </Title>
      <Carousel
        withIndicators
        height={345}
        withControls
        controlsOffset="sm"
        controlSize={36}
        nextControlIcon={
          <IconChevronRight
            size={24}
            color={theme.colors.darkSlateGreen[8]}
            stroke={1.5}
            className={classes.controlIcon}
          />
        }
        previousControlIcon={
          <IconChevronLeft
            size={24}
            color={theme.colors.darkSlateGreen[8]}
            stroke={1.5}
            className={classes.controlIcon}
          />
        }
        slideSize={{ base: "100%", xs: "50%", sm: "50%", md: "33%", lg: "33%" }}
        slideGap={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
        emblaOptions={{ dragFree: true, align: "center" }}
        classNames={classes}
      >
        {slides}
      </Carousel>
    </div>
  );
}
