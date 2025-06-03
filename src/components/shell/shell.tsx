"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { Header, SideNavbar, Footer } from "@/components";
import { useTranslations } from "next-intl";
import ScrollToTopAffix from "./footer/scroll-to-top-affix";

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
      footer={{ height: 300 }}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header withBorder={false} style={{ backgroundColor: "transparent" }}>
        <Header links={links} opened={opened} toggle={toggle} locale={locale} />
      </AppShell.Header>
      <AppShell.Main style={{ paddingBottom: "0px", minHeight: "calc(100vh - 250px)" }}>{children}</AppShell.Main>
      <AppShell.Aside>
        <SideNavbar links={links} />
      </AppShell.Aside>
      <AppShell.Footer withBorder={false} style={{ position: "static", height: "100px" }}>
        <Footer />
      </AppShell.Footer>
      <ScrollToTopAffix />
    </AppShell>
  );
}
