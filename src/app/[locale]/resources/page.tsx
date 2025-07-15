"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Box, Text, List } from "@mantine/core";

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
    <div className="py-20 m-auto max-w-100">
      <Text pt="xl" pb="sm" size="18px" fw="bolder" c="#4a4a49">
        RISORSE ESTERNE A SALTO:
      </Text>
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
  );
}
