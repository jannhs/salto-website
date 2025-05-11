'use client';

import { Stack, NavLink } from '@mantine/core';
import { usePathname } from '@/i18n/navigation';
import classes from './side-navbar.module.css';

interface SideNavbarProps {
    links: { link: string; label: string }[];
}

export function SideNavbar({ links }: SideNavbarProps) {
    const pathname = usePathname();

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            label={link.label}
            pl='xl'
            h="20%"
            variant='subtle'
            styles={
                (theme) => ({
                    label: {
                        fontSize: '20px',
                        fontWeight: 500,
                    },
                })
            }
            active={pathname == link.link}
            // className='link'
            href={link.link} />
    ));

    return (
        <Stack h={300} pt='xl' gap='0' justify='flex-start' align='stretch' >
            {items}
        </Stack>
    );
}