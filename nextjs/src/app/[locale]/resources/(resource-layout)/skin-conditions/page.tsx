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
      <Text pt="xl" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
        {t("SCABIES")}
      </Text>
      <div className="pt-5">
        <ThirdPartyResourcesSection brochures={brochures} />
      </div>
    </>
  );
}
