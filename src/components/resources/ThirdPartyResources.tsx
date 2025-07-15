"use client";

import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { Resource } from "@/utils/types";
import { VideosGrid } from "./VideosGrid";
import { BrochuresGrid } from "@/components/resources/BrochuresGrid";

type ThirdPartyResourcesProps = {
  brochures: Resource[];
  videos: Resource[];
};

export default function ThirdPartyResources({ brochures, videos }: ThirdPartyResourcesProps) {
  const t = useTranslations("Resources");
  return (
    <div className="m-auto max-w-285 px-7 pt-10">
      <Text>{t("premiseThirdPartyResources")}</Text>
      <Text pt="xl" size="30px">
        {t("titleBrochures")}
      </Text>
      <BrochuresGrid resources={brochures} />
      <div className="m-auto max-w-360  py-10">
        <Text pt="md" pb="2px" size="30px">
          {t("titleVideos")}
        </Text>
        <VideosGrid videos={videos} />
      </div>
    </div>
  );
}
