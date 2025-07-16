import { useLocale } from "next-intl";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { healthyDietExtraResourcesByLocale } from "@/data/healthyDietResources";

export default function HealthyDietPage() {
  const locale = useLocale();

  const { videos, brochures } = healthyDietExtraResourcesByLocale[locale] ?? {
    videos: [],
    brochures: [],
  };

  return <ThirdPartyResourcesSection brochures={brochures} videos={videos} />;
}
