import classes from "./header.module.css";
import { AppShellHeader, Burger, Group, Container, Title } from "@mantine/core";
import logo_salto from "@/public/logo_salto.png";
import Image from "next/image";
import { LanguageSwitch, SearchBar } from "@/components";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";

interface HeaderProps {
  links: { link: string; label: string }[];
  opened: boolean;
  toggle: () => void;
  locale: string;
}

export function Header({ links, opened, toggle, locale }: HeaderProps) {
  const pathname = usePathname();
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={`${classes.link} ${pathname == link.link ? classes.active : ""}`}
    >
      {link.label}
    </Link>
  ));

  return (
    <Container size="lg" className={classes.inner} p="xs">
      <Group
        component={"a"}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Image src={logo_salto} alt="SALTO Logo" width={50} height={50} className={classes.logo} priority />
        <Title order={2} visibleFrom="xs">
          SALTO
        </Title>
      </Group>

      <Group h="100%" m="0" p="0">
        <Group ml={50} gap={5} visibleFrom="sm" h="100%">
          {items}
        </Group>
        <LanguageSwitch locale={locale} />
        <SearchBar />
        <Burger opened={opened} onClick={toggle} size="md" hiddenFrom="sm" />
      </Group>
    </Container>
  );
}
