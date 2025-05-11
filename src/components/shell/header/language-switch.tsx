import { Menu, Button, Group, Title, Space, Skeleton } from '@mantine/core';
import { routing } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { forwardRef, useTransition } from 'react';
import { IconChevronDown, IconWorld } from '@tabler/icons-react';

export function LanguageSwitch({ locale }: { locale: string }) {
    const t = useTranslations('LanguageSwitch');
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();

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
                        {locale}
                    </Title>
                    <Space w={5} />
                    <IconChevronDown size={14} />
                </Group>
            </Button>
        </div>
    ));
    LanguageSwitchTarget.displayName = 'LanguageSwitchTarget';


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
        <Menu shadow="md" >
            <Menu.Target>
                <LanguageSwitchTarget />
            </Menu.Target>
            <Menu.Dropdown defaultValue={locale}>
                {languageItems}
            </Menu.Dropdown>
        </Menu>
    )
}