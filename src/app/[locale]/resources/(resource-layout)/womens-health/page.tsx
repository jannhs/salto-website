"use client";

import { useLocale, useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { womensHealthResources } from "@/data/womensHealthResources";

export default function WomensHealthPage() {
  const t = useTranslations("Resources.sectionWomensHealth");

  const { contraception, pregnancy, breastfeeding } = womensHealthResources;

  return (
    <>
      <Text pt="xl" size="18px" fw="bolder" c="#4a4a49">
        {t("contraception")}
      </Text>
      <div className="p-5">
        <ThirdPartyResourcesSection videos={contraception.videos} />
      </div>

      <Text pt="xs" size="18px" fw="bolder" c="#4a4a49">
        {t("pregnancy")}
      </Text>
      <div className="p-5">
        <ThirdPartyResourcesSection brochures={pregnancy.brochures} videos={pregnancy.videos} />
      </div>

      {breastfeeding.brochures.length > 0 && (
        <Text pt="xs" size="18px" fw="bolder" c="#4a4a49">
          {t("breastfeeding")}
        </Text>
      )}
      <div className="p-5">
        <ThirdPartyResourcesSection brochures={breastfeeding.brochures} />
      </div>
    </>
  );
}
