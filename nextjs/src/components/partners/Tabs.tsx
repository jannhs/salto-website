"use client";

import { Grid, Tabs, Title } from "@mantine/core";
import { useMessages, useTranslations } from "next-intl";
import { useMediaQuery } from "@mantine/hooks";
import { PartnersPanel } from "./Panel";
import Image from "next/image";
import { IconAffiliate } from "@tabler/icons-react";

export default function PartnersTabs() {
  const t = useTranslations("PartnersPage");
  const messages = useMessages();
  const isMobile = useMediaQuery("(max-width: 700px)") ?? false;

  const partnerKeys = Object.keys(messages.PartnersPage.partners);
  const unitoTab = t("tabUnito");
  const externalTab = t("tabExternal");

  const partners = partnerKeys.map((key) => {
    return {
      key,
      name: t(`partners.${key}.partnerName`),
      type: t(`partners.${key}.partnerType`),
      url: t(`partners.${key}.url`),
      description: t(`partners.${key}.description`),
      contacts: t(`partners.${key}.contacts`).split(","),
      logo: t(`partners.${key}.logo`),
      logoHeight: t(`partners.${key}.logoHeight`),
      logoWidth: t(`partners.${key}.logoWidth`),
    };
  });

  const grouped = {
    UniTo: partners.filter((p) => p.type === "UniTo"),
    external: partners.filter((p) => p.type === "external"),
  };

  return (
    <Tabs defaultValue="UniTo" variant="outline" orientation={isMobile ? "horizontal" : "vertical"}>
      <Tabs.List>
        <Tabs.Tab value="UniTo">
          <Grid>
            <Grid.Col span={isMobile ? 6 : 2} style={{ alignContent: "center" }}>
              <div className="h-8 w-8 flex items-center justify-center mr-4">
                <Image src="/logos/logo_unito.png" alt="Unito logo" width={25} height={25} />
              </div>
            </Grid.Col>
            <Grid.Col span={isMobile ? 7 : 10}>
              <Title order={5} pl="3px">
                {unitoTab}
              </Title>
            </Grid.Col>
          </Grid>
        </Tabs.Tab>
        <Tabs.Tab value="external" leftSection={<IconAffiliate size={25} color="#2e6940" />}>
          <Title order={5}>{externalTab}</Title>
        </Tabs.Tab>
      </Tabs.List>

      <PartnersPanel isMobile={isMobile} type="UniTo" grouped={grouped} />
      <PartnersPanel isMobile={isMobile} type="external" grouped={grouped} />
    </Tabs>
  );
}
