import { Tabs, Text, Stack, Title, Box, Card, Grid } from "@mantine/core";
import Image from "next/image";
import { useTranslations } from "next-intl";
import classes from "./Panel.module.css";

type Partner = {
  key: string;
  logo: string;
  logoWidth: number | string;
  logoHeight: number | string;
  name: string;
  url: string;
  description?: string;
  contacts: string[];
};

type GroupedPartners = {
  [type: string]: Partner[];
};

type PartnersPanelProps = {
  isMobile: boolean;
  type: string;
  grouped: GroupedPartners;
};

export function PartnersPanel({ isMobile, type, grouped }: PartnersPanelProps) {
  const t = useTranslations("PartnersPage");
  return (
    <Tabs.Panel value={type} pt={isMobile ? "md" : ""} pl={isMobile ? "" : "md"}>
      <Stack>
        {(
          grouped[type] as Array<{
            key: string;
            logo: string;
            logoWidth: number | string;
            logoHeight: number | string;
            name: string;
            url: string;
            description?: string;
            contacts: string[];
          }>
        ).map((p) => (
          <Card
            key={p.key}
            withBorder
            radius="md"
            p="md"
            component="a"
            href={p.url}
            target="_blank"
            className={classes.card}
            // className="transition-all duration-200 ease-in-out hover:scale-103 hover:shadow-lg bg-[#31465a]"
          >
            <Grid key={p.key}>
              <Grid.Col
                span={isMobile ? 12 : 3}
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <Image src={p.logo} alt={`${p.name}`} width={Number(p.logoWidth)} height={Number(p.logoHeight)} />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 9} className="align-items-center" ta={isMobile ? "center" : "left"}>
                <Box key={p.key}>
                  <Title order={4}>{p.name}</Title>
                  {p.description && <Text size="sm">{p.description}</Text>}
                  {p.contacts[0] !== "" && (
                    <Text size="sm" mt={4}>
                      <strong>{t("titleContacts")}:</strong> {p.contacts.join(", ")}
                    </Text>
                  )}
                </Box>
              </Grid.Col>
            </Grid>
          </Card>
        ))}
      </Stack>
    </Tabs.Panel>
  );
}
