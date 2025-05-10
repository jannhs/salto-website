import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Burger.css';

import { IconSearch } from '@tabler/icons-react';
import { AppShellHeader, Autocomplete, Burger, Group, Container, Title } from '@mantine/core';
import classes from './header.module.css';
import logo_salto from '@/public/logo_salto.png';
import Image from 'next/image';
import LanguageSwitch from '@/components/language-switch';
import { usePathname } from '@/i18n/navigation';

interface HeaderProps {
    links: { link: string; label: string }[];
    opened: boolean;
    toggle: () => void;
    locale: string;
}

export function Header({ links, opened, toggle, locale }: HeaderProps) {
    const pathname = usePathname();
    console.log('Header pathname:', pathname);
    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={`${classes.link} ${pathname == link.link ? classes.active : ''}`}
        >
            {link.label}
        </a>
    ));

    return (
        <AppShellHeader className={classes.header} withBorder={false} pt="md">
            <Container size='lg' className={classes.inner} p='0'>
                <Group component={'a'} onClick={
                    () => {
                        window.location.href = '/'
                    }
                } >
                    <Image
                        src={logo_salto}
                        alt="SALTO Logo"
                        width={50}
                        height={50}
                        className={classes.logo}
                        priority

                    />
                    <Title order={2}>
                        SALTO
                    </Title>
                </Group>

                <Group h='100%' m='0' p='0'  >
                    <Group ml={50} gap={5} visibleFrom="sm" h='100%' >
                        {items}
                    </Group>
                    <LanguageSwitch locale={locale} />
                    {/* <Menu shadow="md" >
                        <Menu.Target>
                            <LanguageSwitchTarget />
                        </Menu.Target>
                        <Menu.Dropdown defaultValue={locale}>
                            {languageItems}
                        </Menu.Dropdown>
                    </Menu> */}
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch size={16} stroke={1.5} />}
                        data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                        visibleFrom="md"
                    />
                    <Burger opened={opened} onClick={toggle} size="md" hiddenFrom="sm" />
                </Group>
            </Container>
        </AppShellHeader >
    )
}