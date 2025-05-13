
'use client'

import { AppShell, Container } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header, SideNavbar, Footer } from '@/components'
import { useTranslations } from 'next-intl';

export default function Shell({ children, locale }: { children: React.ReactNode, locale: string }) {
    const [opened, { toggle }] = useDisclosure();

    const t = useTranslations('Navigation');

    const links = [
        { link: '/resources', label: t('resources') },
        { link: '/project', label: t('about') },
        { link: '/partners', label: t('partners') },
    ];

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            aside={{ width: 200, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
            transitionDuration={500}
            transitionTimingFunction="ease"
        >
            <Header links={links} opened={opened} toggle={toggle} locale={locale} />
            <AppShell.Main >
                <Container size="lg">
                    {children}
                </Container>
            </AppShell.Main>
            <AppShell.Aside>
                <SideNavbar links={links} />
            </AppShell.Aside>
            <AppShell.Footer p="md" withBorder={false}><Footer/></AppShell.Footer>
        </AppShell>
    );
}