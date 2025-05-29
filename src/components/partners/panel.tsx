import { Tabs, Text, Stack, Title, Box, Card, Group, Grid } from "@mantine/core";
import Image from "next/image";
import { useTranslations } from "next-intl";

type PartnersPanelProps = {
  isMobile: boolean;
  type: string;
  grouped: any;
};

export function PartnersPanel({ isMobile, type, grouped }: PartnersPanelProps) {
  const t = useTranslations("PartnersPage");
  return (
    <Tabs.Panel value={type} pt={isMobile ? "md" : ""} pl={isMobile ? "" : "md"}>
      <Stack>
        {grouped[type].map((p: any) => (
          <Card key={p.key} withBorder radius="md" p="md">
            <Grid key={p.key}>
              <Grid.Col
                span={isMobile ? 12 : 3}
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <Image src={p.logo} alt={`${p.name}`} width={Number(p.logoWidth)} height={Number(p.logoHeight)} />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 9} className="align-items-center">
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
