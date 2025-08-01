"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { correctUseResourcesByLocale } from "@/data/correctUseResources";

export default function CorrectUseOfMedsPage() {
  const locale = useLocale();
  const t = useTranslations("Resources.correctUseOfMeds");

  const { correctUse, antibiotics } = correctUseResourcesByLocale[locale] || {
    correctUse: { brochures: [] },
    antibiotics: { brochures: [] },
  };

  return (
    <>
      {correctUse.brochures.length == 0 && antibiotics.brochures.length == 0 && (
        <Text pt="xl" size="18px" c="dimmed">
          {">> "}
          {t("COMING_SOON")}
        </Text>
      )}
      {correctUse.brochures.length > 0 && (
        <>
          <Text pt="xl" size="18px" fw="bolder" c="#4a4a49">
            {t("CORRECT_USE")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={correctUse.brochures} />
          </div>
        </>
      )}

      {antibiotics.brochures.length > 0 && (
        <>
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49">
            {t("ANTIBIOTICS")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={antibiotics.brochures} />
          </div>
        </>
      )}
    </>
  );
}
