"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { List } from "@mantine/core";
import { Space, Title } from "@mantine/core";

export default function ResourcesPage() {
  const t = useTranslations("Navigation");

  const sublinks = [
    { link: "/resources/healthy-diet", label: t("healthy-diet") },
    { link: "/resources/lifestyle-and-prevention", label: t("lifestyle-and-prevention") },
    { link: "/resources/womens-health", label: t("womens-health") },
    { link: "/resources/childrens-health", label: t("childrens-health") },
    { link: "/resources/correct-use-of-meds", label: t("correct-use-of-meds") },
    { link: "/resources/skin-conditions", label: t("skin-conditions") },
  ];

  return (
    <>
      <div className="relative m-auto w-full pb-10 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[#ffaa00]" />

        <div className="relative z-20">
          <Space className="h-60 lg:h-95" />
          <Title size="3.4rem" ta="center" c="white">
            Indice delle risorse
          </Title>
        </div>
      </div>
      <div className="py-20 m-auto max-w-100">
        <List spacing="md" size="lg" withPadding>
          {sublinks.map((item) => (
            <List.Item key={item.link}>
              <Link
                href={item.link}
                className="transition-all duration-200 border-b-2 border-transparent hover:border-current"
                style={{ textUnderlineOffset: 4 }}
              >
                {item.label}
              </Link>
            </List.Item>
          ))}
        </List>
      </div>
    </>
  );
}
