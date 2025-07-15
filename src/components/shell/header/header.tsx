import classes from "./header.module.css";
import { Menu, Container, Group, Title, Burger } from "@mantine/core";
import logo_salto from "@/public/logo_salto.png";
import Image from "next/image";
import { LanguageSwitch } from "./language-switch";
import { SearchBar } from "./search-bar";
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
          <Link
            key={link.label}
            href={link.link}
            className={`${classes.link} ${pathname == link.link ? classes.active : ""}`}
          >
            {link.label}
          </Link>
        </Menu.Target>
        <Menu.Dropdown>
          {link.dropdown.map((sublink) => (
            <Menu.Item
              key={sublink.link}
              component={Link}
              href={sublink.link}
              className={`${classes.sublink} ${pathname == sublink.link ? classes.active : ""}`}
            >
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
    //size="1152px"
    <Container size="62em" className={classes.inner} bg="#fff">
      <Group
        component={"a"}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Image
          src={logo_salto}
          alt="SALTO Logo"
          width={60}
          height={60}
          className={classes.logo}
          priority
          style={{
            marginTop: "2px",
          }}
        />
        <Title order={2} visibleFrom="xs" className="text-[#005350]">
          SALTO
        </Title>
      </Group>

      <Group h="100%" m="0" p="0">
        <Group ml={50} gap={5} visibleFrom="sm" h="100%" pt="7px" pb="7px">
          {items}
        </Group>
        <LanguageSwitch locale={locale} />
        <SearchBar />
        <Burger opened={opened} onClick={toggle} size="md" hiddenFrom="sm" />
      </Group>
    </Container>
  );
}
