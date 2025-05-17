"use client";

import { AppShell, Container } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { Header, SideNavbar, Footer } from "@/components";
import { useTranslations } from "next-intl";

export default function Shell({ children, locale }: { children: React.ReactNode; locale: string }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const t = useTranslations("Navigation");

  const links = [
    { link: "/resources", label: t("resources") },
    { link: "/project", label: t("about") },
    { link: "/partners", label: t("partners") },
  ];

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      footer={{ height: 60 }}
      aside={{ width: 200, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header withBorder={false}>
        <Header links={links} opened={opened} toggle={toggle} locale={locale} />
      </AppShell.Header>
      <AppShell.Main pt="60">
        <Container size="lg" h="100%">
          {children}
        </Container>
      </AppShell.Main>
      <AppShell.Aside>
        <SideNavbar links={links} />
      </AppShell.Aside>
      <AppShell.Footer p="md" withBorder={false} className="footer">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
