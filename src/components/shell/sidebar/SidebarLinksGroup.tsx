import { useState } from "react";
import { IconChevronUp } from "@tabler/icons-react";
import { Box, Collapse, Group, UnstyledButton, Text } from "@mantine/core";
import classes from "./SidebarLinksGroup.module.css";
import Link from "next/link";

interface LinksGroupProps {
  item: { label: string; link: string; dropdown: { link: string; label: string }[] };
  pathname: string;
}

export function LinksGroup({ item, pathname }: LinksGroupProps) {
  const hasSublinks = item.dropdown.length > 0;
  const [opened, setOpened] = useState(false);
  const items = (hasSublinks ? item.dropdown : []).map((sublink) => (
    <Link
      className={`${classes.link} ${pathname == sublink.link ? classes.active : ""}`}
      href={sublink.link}
      key={sublink.label}
    >
      {sublink.label}
    </Link>
  ));

  return (
    <>
      {hasSublinks ? (
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          className={`${classes.control} ${pathname == item.link ? classes.active : ""}`}
        >
          <Group justify="space-between" gap={0}>
            <Box className={classes["wrapper-link"]}>
              <Box ml="md">
                <Text fw="bolder" size="30px">
                  {item.label}
                </Text>
              </Box>
            </Box>
            {hasSublinks && (
              <IconChevronUp
                className={classes.chevron}
                stroke={3}
                size={25}
                style={{ transform: opened ? "rotate(-180deg)" : "none" }}
              />
            )}
          </Group>
        </UnstyledButton>
      ) : (
        <UnstyledButton
          component="a"
          href={item.link}
          className={`${classes.control} ${pathname == item.link ? classes.active : ""}`}
        >
          <Group justify="space-between" gap={0}>
            <Box className={classes["wrapper-link"]}>
              <Box ml="md">
                <Text fw="bolder" size="30px">
                  {item.label}
                </Text>
              </Box>
            </Box>
            {hasSublinks && (
              <IconChevronUp
                className={classes.chevron}
                stroke={1.5}
                size={16}
                style={{ transform: opened ? "rotate(-180deg)" : "none" }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}
      {hasSublinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
