import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import CustomBreadcrumbs from "@/components/resources/CustomBreadcrumbs";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Resources");

  return (
    <div className="m-auto max-w-285 px-7 pt-5 pb-10">
      <CustomBreadcrumbs />
      <Text pt="md" pb="md">
        {t("premiseThirdPartyResources")}
      </Text>
      {children}
    </div>
  );
}
