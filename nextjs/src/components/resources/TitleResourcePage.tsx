"use client";

import { usePathname } from "@/i18n/navigation";
import { Space, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TitleResourcePage() {
  const pathname = usePathname();
  const topic = pathname.split("/").pop();
  const imageUrl = "/images/resources-bgs/" + topic + ".jpeg";

  const t = useTranslations("Navigation");
  return (
    <div className="relative m-auto w-full pb-10 overflow-hidden">
      <Image src={imageUrl} alt="" fill className="object-cover object-top" priority />

      <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.527),rgba(0,0,0,0.5))]" />

      <div className="relative z-20">
        <Space className="h-60 lg:h-95" />
        <Title size="3.4rem" ta="center" c="white">
          {t(`${topic}`)}
        </Title>
      </div>
    </div>
  );
}
