"use client";

import { Text, Tabs } from "@mantine/core";
import { useTranslations } from "next-intl";
import CustomBreadcrumbs from "@/components/resources/CustomBreadcrumbs";
import TitleResourcePage from "@/components/resources/TitleResourcePage";
import classes from "./SaltoTabs.module.css";
import ComingSoonPanel from "@/components/resources/ComingSoonPanel";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Resources");

  return (
    <>
      <TitleResourcePage />
      <div className="m-auto max-w-285 px-7 pt-5 pb-10">
        <CustomBreadcrumbs />
        <div className="m-auto w-full">
          <Tabs defaultValue="3rd-party" variant="unstyled" classNames={classes}>
            <Tabs.List justify="center">
              <div className="flex flex-row items-center justify-center rounded-full bg-gray-100 px-5  py-3 mt-7 ">
                <Tabs.Tab value="salto" fw="600">
                  {t("SALTOTab")}
                </Tabs.Tab>
                <Tabs.Tab value="3rd-party" fw="600">
                  {t("3rdParty")}
                </Tabs.Tab>
              </div>
            </Tabs.List>
            <Tabs.Panel value="3rd-party" pt="xs">
              <Text pt="md" pb="md">
                {t("premiseThirdPartyResources")}
              </Text>
              {children}
            </Tabs.Panel>
            <Tabs.Panel value="salto" pt="xs">
              <ComingSoonPanel />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
