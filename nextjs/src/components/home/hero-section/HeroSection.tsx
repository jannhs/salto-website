import { Container, Text, Title, Button } from "@mantine/core";
import classes from "./HeroSection.module.css";
import { useLocale, useTranslations } from "next-intl";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { getLangDir } from "rtl-detect";
import Image from "next/image";

export default function NewHeroSection() {
  const t = useTranslations("HomePage.HeroSection");
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div className={`${direction === "rtl" ? classes.rtl : ""} ${classes.root}`}>
      <Container size="xl" pt="35px" p="0">
        <div className={classes.inner}>
          <Image
            src="/images/hs-muslim-woman-and-child.jpg"
            alt="Muslim woman and child attended by doctor"
            width="0"
            height="0"
            sizes="50vw"
            className="w-full h-auto visible lg:hidden"
          />
          <div className={`${classes.content} ${direction === "rtl" ? classes.rtl : ""}`}>
            <Title className={classes.title}>
              {t("firstLineTitle")}
              <Text className={classes.subtitle}>{t("secondLineTitle")}</Text>
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
