import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { healthyDietExtraResources } from "@/data/healthyDietResources";

export default function HealthyDietPage() {
  const { videos, brochures } = healthyDietExtraResources ?? {
    videos: [],
    brochures: [],
  };

  return <ThirdPartyResourcesSection brochures={brochures} videos={videos} />;
}
