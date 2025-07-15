import { Text } from "@mantine/core";

import TitleResourcePage from "@/components/resources/TitleResourcePage";
import { useTranslations } from "next-intl";

export default function IndexResourcesLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Resources");

  return (
    <div className="m-auto w-full">
      <TitleResourcePage />
      {children}
    </div>
  );
}
