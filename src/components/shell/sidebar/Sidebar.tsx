import { Box, Group, Burger } from "@mantine/core";
import { LinksGroup } from "./SidebarLinksGroup";

interface SidebarProps {
  links: { link: string; label: string; dropdown: { link: string; label: string }[] }[];
  opened: boolean;
  toggle: () => void;
  pathname: string;
}

export function Sidebar({ links, opened, toggle, pathname }: SidebarProps) {
  const items = links.map((item) => <LinksGroup item={item} key={item.label} pathname={pathname} />);

  return (
    <>
      <Group justify="right" p="md">
        <Burger opened={opened} onClick={toggle} size="md" />
      </Group>
      <Box mih={220} pt="lg">
        {items}
      </Box>
    </>
  );
}
