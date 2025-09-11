"use client";

import { usePathname } from "@/i18n/navigation";
import { Breadcrumbs, Anchor } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./CustomBreadcrumbs.module.css";

export default function CustomBreadcrumbs() {
  const t = useTranslations("Navigation");
  const pathName = usePathname();
  const pageTitle = pathName.split("/").pop() || "";

  const parentPath = pathName.split("/").slice(0, -1).join("/");
  const parentTitle = t(`${parentPath.split("/").pop() || ""}`);

  const items = [
    {
      title: parentTitle,
      href: parentPath,
    },
    {
      title: t(`${pageTitle}`),
      href: pathName,
    },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} fw="600" size="lg" c="#2e8297">
      {item.title}
    </Anchor>
  ));
  return (
    <Breadcrumbs classNames={classes} separator=">">
      {items}
    </Breadcrumbs>
  );
}
