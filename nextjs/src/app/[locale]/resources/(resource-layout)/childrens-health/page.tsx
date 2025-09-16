"use client";

import { useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { childrenHealthResources } from "@/data/childrensHealthResources";

export default function ChildrensHealthPage() {
  const t = useTranslations("Resources.childrensHealth");
  const { lifestyle, sleep } = childrenHealthResources;

  return (
    <>
      {(lifestyle.posters.length > 0 || lifestyle.brochures.length > 0 || lifestyle.videos.length > 0) && (
        <>
          <Text pt="xl" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("LIFESTYLE")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection
              posters={lifestyle.posters}
              brochures={lifestyle.brochures}
              videos={lifestyle.videos}
            />
          </div>
        </>
      )}
      {lifestyle.posters.length === 0 && lifestyle.brochures.length === 0 && lifestyle.videos.length === 0 && (
        <Text pt="xl" size="18px" c="dimmed">
          {">> "}
          {t("COMING_SOON")}
        </Text>
      )}

      {sleep.brochures.length > 0 && (
        <>
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("SLEEP")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={sleep.brochures} />
          </div>
        </>
      )}
    </>
  );
}
