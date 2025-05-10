
'use client'

import { AppShell, Burger, Container, Group, Skeleton, Title } from "@mantine/core";
import { Drawer, ScrollArea, NavLink, Stack } from '@mantine/core';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Header, Footer, SideNavbar } from '@/components'
import { useTranslations } from 'next-intl';




export default function Shell({ children, locale }: { children: React.ReactNode, locale: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [opened, { toggle }] = useDisclosure();
    const t = useTranslations('Navigation');

    const links = [
        { link: '/resources', label: t('resources') },
        { link: '/project', label: t('about') },
        { link: '/partners', label: t('partners') },
    ];

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            label={link.label}

            href={link.link}
            active={active === link.link}
            onClick={() => setActive(link.link)}
        // className='navlink'
        />
    ));

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            aside={{ width: 200, breakpoint: 'md', collapsed: { desktop: true, mobile: !opened } }}
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
                <Stack h='100%' pt='lg' >
                    {items}
                </Stack>
            </AppShell.Aside>
            <AppShell.Footer p="md">Footer</AppShell.Footer>
        </AppShell>
    );
}