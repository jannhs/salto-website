"use client";

import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { Resource } from "@/utils/types";
import { VideosGrid } from "./VideosGrid";
import { BrochuresGrid } from "@/components/resources/BrochuresGrid";

type ThirdPartyResourcesSectionProps = {
  posters?: Resource[];
  brochures?: Resource[];
  videos?: Resource[];
};

export default function ThirdPartyResourcesSection({ posters, brochures, videos }: ThirdPartyResourcesSectionProps) {
  const t = useTranslations("Resources");
  return (
    <>
      {posters && posters.length > 0 && (
        <>
          <Text pt="md" size="27px">
            {t("titlePosters")}
          </Text>
          <BrochuresGrid resources={posters} />
        </>
      )}

      {brochures && brochures.length > 0 && (
        <>
          <Text pt="md" size="27px">
            {t("titleBrochures")}
          </Text>
          <BrochuresGrid resources={brochures} />
        </>
      )}

      {videos && videos.length > 0 && (
        <div className="m-auto max-w-360  pb-10">
          <Text pt="md" pb="2px" size="27px">
            {t("titleVideos")}
          </Text>
          <VideosGrid videos={videos} />
        </div>
      )}
    </>
  );
}
