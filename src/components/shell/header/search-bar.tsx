

import { Spotlight, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useTranslations, useMessages } from 'next-intl'

export function SearchBar() {
    const t = useTranslations('SearchBar');
    const messages = useMessages();
    const actionKeys = Object.keys(messages.SearchBar.actions);
    const actions = actionKeys.map((key) => {
        const label = t(`actions.${key}.label`);
        const description = t(`actions.${key}.description`);
        return {
            id: key,
            label: label,
            description: description,
            onClick: () => {
                window.location.href = `./${key}`;
            }
        }
    });

    return (<>
        <Button onClick={spotlight.open} variant="outline" color='dark' pl='7px' pr='7px' style={{
            borderColor: 'var(--mantine-color-default-border)',
            borderRadius: 'var(--mantine-radius-md)',
        }} >
            <IconSearch size={20} />
        </Button>
        <Spotlight
            actions={actions}
            nothingFound="Nothing found..."
            highlightQuery
            searchProps={{
                leftSection: <IconSearch size={20} stroke={1.5} />,
                placeholder: 'Search...',
            }}
        />
    </>
    );
}