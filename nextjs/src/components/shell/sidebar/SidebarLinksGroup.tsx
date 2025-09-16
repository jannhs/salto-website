import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Box, Collapse, Group, UnstyledButton, Text } from "@mantine/core";
import classes from "./SidebarLinksGroup.module.css";
import { Link, useRouter } from "@/i18n/navigation";

interface LinksGroupProps {
  item: { label: string; link: string; dropdown: { link: string; label: string }[] };
  pathname: string;
}

export function LinksGroup({ item, pathname }: LinksGroupProps) {
  const hasSublinks = item.dropdown.length > 0;
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const items = (hasSublinks ? item.dropdown : []).map((sublink) => (
    <Link
      className={`${classes.link} ${pathname.split("/")[1] == sublink.link.split("/")[1] ? classes.active : ""}`}
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
          className={`${classes.control} ${pathname.split("/")[1] == item.link.split("/")[1] ? classes.active : ""}`}
        >
          <Group justify="space-between" gap={0}>
            <div className="flex-1 ">
              <Box ml="md">
                <Text fw="bolder" size="25px">
                  {item.label}
                </Text>
              </Box>
            </div>
            {hasSublinks && (
              <div className="flex-none">
                <IconChevronDown stroke={3} size={25} style={{ transform: opened ? "rotate(-180deg)" : "none" }} />
              </div>
            )}
          </Group>
        </UnstyledButton>
      ) : (
        <UnstyledButton
          onClick={() => {
            router.push(item.link);
          }}
          className={`${classes.control} ${pathname == item.link ? classes.active : ""}`}
        >
          <Group justify="space-between" gap={0}>
            <Box className={classes["wrapper-link"]}>
              <Box ml="md">
                <Text fw="bolder" size="25px">
                  {item.label}
                </Text>
              </Box>
            </Box>
            {hasSublinks && (
              <IconChevronDown stroke={1.5} size={16} style={{ transform: opened ? "rotate(-180deg)" : "none" }} />
            )}
          </Group>
        </UnstyledButton>
      )}
      {hasSublinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
