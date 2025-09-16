import { Container, Text, Title, Button } from "@mantine/core";
import classes from "./HeroSection.module.css";
import { useLocale, useTranslations } from "next-intl";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { getLangDir } from "rtl-detect";

export default function NewHeroSection() {
  const t = useTranslations("HomePage.HeroSection");
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div className={`${direction === "rtl" ? classes.rtl : ""} ${classes.root}`}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={`${classes.content} ${direction === "rtl" ? classes.rtl : ""}`}>
            <Title className={classes.title}>
              {t("firstLineTitle")}
              <Text size="50px" mt="7px" c="rgba(255, 255, 255, 0.9)">
                {t("secondLineTitle")}
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              {t("description")}
            </Text>
            <Button
              variant="light"
              color="white"
              size="xl"
              className={classes.control}
              rightSection={direction == "ltr" ? <IconArrowRight /> : <IconArrowLeft />}
              mt={40}
              component="a"
              href="/about/project"
            >
              {t("exploreButton")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
