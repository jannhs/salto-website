"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { childrenHealthResourcesByLocale } from "@/data/childrensHealthResources";

export default function ChildrensHealthPage() {
  const locale = useLocale();
  const t = useTranslations("Resources.childrensHealth");
  const { lifestyle, sleep } = childrenHealthResourcesByLocale[locale] || {
    lifestyle: { posters: [], brochures: [], videos: [] },
    sleep: { brochures: [] },
  };

  return (
    <>
      {(lifestyle.posters.length > 0 || lifestyle.brochures.length > 0 || lifestyle.videos.length > 0) && (
        <>
          <Text pt="xl" size="18px" fw="bolder" c="#4a4a49">
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
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49">
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
