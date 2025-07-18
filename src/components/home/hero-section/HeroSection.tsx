import { Button, Container, Text, Title } from "@mantine/core";
import classes from "./HeroSection.module.css";
import { useTranslations } from "next-intl";
import { IconArrowRight } from "@tabler/icons-react";

export default function NewHeroSection() {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <div className={classes.root}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
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

            <Button
              variant="light"
              color="white"
              size="xl"
              className={classes.control}
              rightSection={<IconArrowRight />}
              mt={40}
            >
              Esplora
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
