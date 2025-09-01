"use client";
import { Container, Grid, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image from "next/image";
import image from "@/public/images/wip.jpg";

export default function ComingSoonPanel() {
  const t = useTranslations("Resources");
  return (
    <div className="py-10">
      <Container size="lg">
        <Grid id="faq-grid" gutter={50} justify="center" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={image.src}
              alt="Frequently Asked Questions"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title fs="30px" mb={20} c="gray" className="tracking-wide" ta="center">
              {t("comingSoon")}
              {"..."}
            </Title>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
