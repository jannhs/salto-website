'use client';

import { Drawer, ScrollArea, NavLink } from '@mantine/core';
import { useState } from 'react';
import classes from './side-navbar.module.css';

interface SideNavbarProps {
    links: { link: string; label: string }[];
    opened: boolean;
    toggle: () => void;
}

export function SideNavbar({ links, opened, toggle }: SideNavbarProps) {
    const [active, setActive] = useState<string | null>(null);

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            label={link.label}
            href={link.link}
            active={active === link.link}
            onClick={() => setActive(link.link)}
            className='navlink'
        />
    ));

    return (
        <Drawer
            opened={opened}
            onClose={toggle}
            position="right"
            padding="md"
            size="md"
            title="Menu"
        >
            <ScrollArea style={{ height: '100%' }}>
                {items}
            </ScrollArea>
        </Drawer>
    );
}