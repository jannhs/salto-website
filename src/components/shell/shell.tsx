"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { Header, SideNavbar, Footer } from "@/components";
import { useTranslations } from "next-intl";
import { basename } from "path";

export default function Shell({ children, locale }: { children: React.ReactNode; locale: string }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 10 });
  const t = useTranslations("Navigation");

  const links = [
    { link: "/resources", label: t("resources") },
    { link: "/project", label: t("about") },
    { link: "/partners", label: t("partners") },
  ];

  return (
    <AppShell
      header={{
        height: {
          base: 64,
          lg: 80,
        },
        collapsed: !pinned,
        offset: false,
      }}
      aside={{ width: 200, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 60 }}
      transitionDuration={500}
      transitionTimingFunction="ease"
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.lightSlateGreen[1],
        },
        main: {
          backgroundColor: theme.colors.lightSlateGreen[1],
        },
      })}
    >
      <AppShell.Header
        withBorder={false}
        style={{ backgroundColor: "transparent" }}
        // style={{ borderRadius: "10px", maxWidth: "1000px", justifyContent: "center", margin: " auto", zIndex: 999 }}
      >
        <Header links={links} opened={opened} toggle={toggle} locale={locale} />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Aside>
        <SideNavbar links={links} />
      </AppShell.Aside>
      <AppShell.Footer p="md" withBorder={false} style={{ position: "static" }}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
