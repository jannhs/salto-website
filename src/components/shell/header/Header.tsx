import classes from "./Header.module.css";
import { Menu, Container, Group, Title, Burger } from "@mantine/core";
import logo_salto from "@/public/logo_salto.png";
import Image from "next/image";
import { LanguageSwitch } from "./LanguageSwitch";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

interface HeaderProps {
  links: { link: string; label: string; dropdown: { link: string; label: string }[] }[];
  opened: boolean;
  toggle: () => void;
  locale: string;
  pathname: string;
}

export function Header({ links, opened, toggle, locale, pathname }: HeaderProps) {
  const items = links.map((link) =>
    link.dropdown.length > 0 ? (
      <Menu key={link.label} trigger="hover" withinPortal>
        <Menu.Target>
          <button
            key={link.label}
            className={`${classes.link} ${pathname.split("/")[1] == link.link.split("/")[1] ? classes.active : ""}`}
          >
            {link.label}
          </button>
        </Menu.Target>
        <Menu.Dropdown mt="11px" className={classes.dropdown}>
          {link.dropdown.map((sublink) => (
            <Menu.Item key={sublink.link} component={Link} href={sublink.link} classNames={classes}>
              {sublink.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Link
        key={link.label}
        href={link.link}
        className={`${classes.link} ${pathname == link.link ? classes.active : ""}`}
      >
        {link.label}
      </Link>
    ),
  );

  return (
    <Container size="75em" className={classes.inner} bg="#fff">
      <Group
        component={"a"}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Image src={logo_salto} alt="SALTO Logo" width={60} height={60} className={classes.logo} priority />
        <Title order={2} visibleFrom="md" className="text-[#0F4C5C] cursor-pointer">
          SALTO
        </Title>
      </Group>

      <Group h="100%" m="0" p="0">
        <Group ml={0} gap={5} visibleFrom="sm" h="100%" pt="7px" pb="7px">
          {items}
        </Group>
        <LanguageSwitch locale={locale} />
        <SearchBar />
        <Burger opened={opened} onClick={toggle} size="md" hiddenFrom="sm" />
      </Group>
    </Container>
  );
}
