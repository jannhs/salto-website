"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Sidebar } from "./sidebar/Sidebar";
import { useTranslations } from "next-intl";
import ScrollToTopAffix from "./footer/scroll-to-top-affix";
import { usePathname } from "@/i18n/navigation";

export default function Shell({ children, locale }: { children: React.ReactNode; locale: string }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 10 });
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const links = [
    {
      link: "/resources",
      label: t("resources"),
      dropdown: [
        { link: "/resources/healthy-diet", label: t("healthy-diet") },
        { link: "/resources/lifestyle-and-prevention", label: t("lifestyle-and-prevention") },
        { link: "/resources/womens-health", label: t("womens-health") },
        { link: "/resources/childrens-health", label: t("childrens-health") },
        { link: "/resources/correct-use-of-meds", label: t("correct-use-of-meds") },
        { link: "/resources/skin-conditions", label: t("skin-issues") },
      ],
    },
    { link: "/resources-for-professionals", label: t("resources-for-professionals"), dropdown: [] },

    { link: "/project", label: t("about"), dropdown: [{ link: "/partners", label: t("partners") }] },
    // { link: "/partners", label: t("partners"), dropdown: [] },
  ];

  return (
    <AppShell
      layout="alt"
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
      transitionDuration={400}
      transitionTimingFunction="ease"
    >
      <AppShell.Header withBorder={false} style={{ backgroundColor: "transparent" }}>
        <Header links={links} opened={opened} toggle={toggle} locale={locale} pathname={pathname} />
      </AppShell.Header>
      <AppShell.Main style={{ paddingBottom: "0px", minHeight: "calc(100vh - 250px)" }}>{children}</AppShell.Main>
      <AppShell.Aside>
        <Sidebar links={links} toggle={toggle} opened={opened} pathname={pathname} />
      </AppShell.Aside>
      <AppShell.Footer withBorder={false} style={{ position: "static", height: "100px" }}>
        <Footer />
      </AppShell.Footer>
      <ScrollToTopAffix />
    </AppShell>
  );
}
