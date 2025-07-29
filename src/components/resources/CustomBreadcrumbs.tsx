"use client";

import { usePathname } from "@/i18n/navigation";
import { Breadcrumbs, Anchor } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./CustomBreadcrumbs.module.css";

export default function CustomBreadcrumbs() {
  const t = useTranslations("Navigation");
  const pathName = usePathname();
  const pageTitle = pathName.split("/").pop() || "";

  const items = [
    {
      title: t("resources"),
      href: "/resources",
    },
    {
      title: t(`${pageTitle}`),
      href: pathName,
    },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} fw="600">
      {item.title}
    </Anchor>
  ));
  return <Breadcrumbs classNames={classes}>{items}</Breadcrumbs>;
}
