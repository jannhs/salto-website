import { Container, Text, Title } from "@mantine/core";
import classes from "./HeroSection.module.css";
import { useLocale, useTranslations } from "next-intl";
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
              <Text
                size="50px"
                mt="4px"
                variant="gradient"
                gradient={{ from: "rgba(38, 75, 36, 1)", to: "rgba(45, 90, 81, 1)", deg: 237 }}
              >
                {t("secondLineTitle")}
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              {t("description")}
            </Text>
            {/* <Button
              variant="light"
              color="white"
              size="xl"
              className={classes.control}
              rightSection={<IconArrowRight />}
              mt={40}
            >
              Esplora
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
