"use client";

import { Spotlight, spotlight, SpotlightActionData, SpotlightActionGroupData } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { useTranslations, useMessages } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export function SearchBar() {
  const t = useTranslations("SearchBar");
  const messages = useMessages();
  const groupKeys = Object.keys(messages.SearchBar.results);
  const router = useRouter();
  const actions: (SpotlightActionData | SpotlightActionGroupData)[] = groupKeys.map((groupKey) => {
    const groupLabel = t(`results.${groupKey}.group`);
    const actionsKeys = Object.keys(messages.SearchBar.results[groupKey].actions);

    return {
      group: groupLabel,
      actions: actionsKeys.map((actionKey) => {
        const actionHref = t(`results.${groupKey}.actions.${actionKey}.href`);
        return {
          id: actionKey,
          label: t(`results.${groupKey}.actions.${actionKey}.label`),
          description: t(`results.${groupKey}.actions.${actionKey}.description`),
          onClick: () => {
            router.push({
              pathname: actionHref,
            });
          },
        };
      }),
    };
  });

  return (
    <>
      <Button
        onClick={spotlight.open}
        variant="outline"
        color="dark"
        pl="7px"
        pr="7px"
        style={{
          borderColor: "var(--mantine-color-default-border)",
          borderRadius: "var(--mantine-radius-md)",
        }}
      >
        <IconSearch size={20} />
      </Button>
      <Spotlight
        size="lg"
        scrollable
        actions={actions}
        nothingFound={t("nothingFound")}
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: t("searchPlaceholder"),
        }}
      />
    </>
  );
}
