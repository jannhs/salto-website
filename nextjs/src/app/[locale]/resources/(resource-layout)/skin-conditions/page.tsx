"use client";

import { useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { skinConditionsResources } from "@/data/skinConditionsResources";

export default function SkinConditionsPage() {
  const t = useTranslations("Resources.skinConditions");

  const { brochures } = skinConditionsResources;

  return (
    <>
      {brochures.length > 0 ? (
        <>
          <Text pt="xl" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("SCABIES")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={brochures} />
          </div>
        </>
      ) : (
        <Text pt="xl" size="18px" c="dimmed">
          {t("COMING_SOON")}
        </Text>
      )}
    </>
  );
}
