import { useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import ThirdPartyResourcesSection from "@/components/resources/ThirdPartyResourcesSection";
import { lifestyleResources } from "@/data/lifestyleResources";

export default function LifestylePage() {
  const t = useTranslations("Resources");
  const resources = lifestyleResources ?? {
    behaviour: { brochures: [], videos: [] },
    antiSmoking: { brochures: [] },
    vaccine: { brochures: [] },
    teeth: { brochures: [] },
  };

  return (
    <>
      {resources.behaviour.brochures.length > 0 && (
        <>
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("sectionLifestyle.behaviour")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={resources.behaviour.brochures} videos={resources.behaviour.videos} />
          </div>
        </>
      )}

      {resources.antiSmoking.brochures.length > 0 && (
        <>
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("sectionLifestyle.antiSmoking")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={resources.antiSmoking.brochures} />
          </div>
        </>
      )}

      {resources.vaccine.brochures.length > 0 && (
        <>
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("sectionLifestyle.vaccine")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={resources.vaccine.brochures} />
          </div>
        </>
      )}

      {resources.teeth.brochures.length > 0 && (
        <>
          <Text pt="xs" size="18px" fw="bolder" c="#4a4a49" className="uppercase">
            {t("sectionLifestyle.teeth")}
          </Text>
          <div className="p-5">
            <ThirdPartyResourcesSection brochures={resources.teeth.brochures} />
          </div>
        </>
      )}
    </>
  );
}
