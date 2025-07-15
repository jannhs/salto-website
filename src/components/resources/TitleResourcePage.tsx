"use client";

import { usePathname } from "@/i18n/navigation";
import { Space, Title } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function TitleResourcePage() {
  const pathname = usePathname();
  const topic = pathname.split("/").pop();

  console.log("Pathname: ", pathname);
  console.log("Topic: ", topic);

  const t = useTranslations("Navigation");
  return (
    <div className="m-auto w-full pb-4 bg-[#11630a] ">
      <Space h="100px" />
      <Title ta="center" c="white">
        {t(`${topic}`)}
      </Title>
    </div>
  );
}
