import { Container, Title, Text, Overlay } from "@mantine/core";
import classes from "./hero.module.css";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HomePage.HeroSection");
  const title = t("firstLineTitle") + " -\n" + t("secondLineTitle");
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title} style={{ whiteSpace: "pre-line" }}>
          {title}
        </Title>

        <Container size={640}>
          <Text size="xl" className={classes.description}>
            {t("description")}
          </Text>
        </Container>
      </div>
    </div>
  );
}
