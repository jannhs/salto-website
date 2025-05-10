import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Burger.css';

import { IconChevronDown, IconSearch, IconWorld } from '@tabler/icons-react';
import { AppShellHeader, Autocomplete, Burger, Group, Container, Menu, Button, Skeleton, Title, Space } from '@mantine/core';
import classes from './header.module.css';
import logo_salto from '@/public/logo_salto.png';
import Image from 'next/image';
import { forwardRef, useTransition } from 'react';

import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import LocaleSwitcherSelect from './switcher-select';
import { usePathname, useRouter } from '@/i18n/navigation';




interface HeaderProps {
    links: { link: string; label: string }[];
    opened: boolean;
    toggle: () => void;
    locale: string;
}




export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
            {routing.locales.map((cur) => (
                <option key={cur} value={cur}>
                    {t('locale', { locale: cur })}
                </option>
            ))}
        </LocaleSwitcherSelect>
    );
}

export function Header({ links, opened, toggle, locale }: HeaderProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const t = useTranslations('Header');
    const pathname = usePathname();


    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}

        >
            {link.label}
        </a>
    ));


    const LanguageSwitchTarget = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => (
        <div ref={ref} {...props} >
            <Button variant="outline" color="dark" p='5px' style={{
                borderColor: 'var(--mantine-color-default-border)',
                borderRadius: 'var(--mantine-radius-md)',
            }} >
                <Group gap='0'>
                    {isPending ? (
                        <Skeleton height={20} width={20} radius="xl" />
                    ) : (
                        <IconWorld size={20} />
                    )}
                    <Title visibleFrom='md' order={5} pl='xs' pr='xs'>
                        {locale}</Title>
                    <Space w={5} />
                    <IconChevronDown size={14} />
                </Group>
            </Button>
        </div>
    ));




    const languageItems = routing.locales
        .filter((lang) => lang !== locale)
        .map((lang) => (
            <Menu.Item
                key={lang}
                onClick={() => {
                    startTransition(() => {
                        router.replace({ pathname }, { locale: lang });
                    });
                }}
            >
                {t('locale', { locale: lang })}
            </Menu.Item>
        ));

    return (
        <AppShellHeader className={classes.header} withBorder={false} pt="md">
            <Container size='lg' className={classes.inner}>
                <Group>
                    <Image
                        src={logo_salto}
                        alt="Salto Logo"
                        width={50}
                        height={50}
                        className={classes.logo}
                        priority
                    />
                    <a href="/" className={classes.logo}>
                        SALTO
                    </a>
                </Group>

                <Group h='100%'>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Menu shadow="md" >
                        <Menu.Target>
                            <LanguageSwitchTarget />
                        </Menu.Target>
                        <Menu.Dropdown defaultValue={locale}>
                            {languageItems}
                        </Menu.Dropdown>
                    </Menu>
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