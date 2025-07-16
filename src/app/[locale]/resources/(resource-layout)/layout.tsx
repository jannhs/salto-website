import { Text } from "@mantine/core";

import TitleResourcePage from "@/components/resources/TitleResourcePage";
import { useTranslations } from "next-intl";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Resources");

  return (
    <div className="m-auto max-w-285 px-7 pt-5 pb-10">
      <Text pb="md">{t("premiseThirdPartyResources")}</Text>
      {children}
    </div>
  );
}
