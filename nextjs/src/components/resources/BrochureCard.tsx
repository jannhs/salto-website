"use client";

import { Card, Text, Menu, Grid, GridCol, Anchor, Center, ActionIcon, Pill, Title } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconCopy,
  IconShare,
  IconFileTypePdf,
  IconLink,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useClipboard } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import classes from "./BrochureCard.module.css";
import type { Resource } from "@/utils/types";

export function BrochureCard(resource: Resource) {
  const t = useTranslations("Resources");
  const clipboard = useClipboard({ timeout: 500 });
  const shareUrlOnWhatsapp = `https://wa.me/?text=${encodeURI(resource.url)}`;
  const shareUrlOnFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(resource.url)}`;

  return (
    <Card withBorder shadow="sm" h="fit">
      <Card.Section className="relative h-59">
        <Center
          component="a"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-full"
        >
          <Image src={resource.imagePreview!} alt={resource.altPreview!} fill style={{ objectFit: "cover" }} />
        </Center>
        <Menu withinPortal position="bottom-end" shadow="sm">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" radius="xl" className={classes.shareIcon}>
              <IconShare size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconCopy size={14} />}
              onClick={() => {
                clipboard.copy(`${resource.url}`);
                notifications.show({
                  position: "bottom-center",
                  title: "Copiato!",
                  message: "",
                });
              }}
            >
              {t("CopyLink")}
            </Menu.Item>
            <Menu.Item
              leftSection={<IconBrandWhatsapp size={14} />}
              component="a"
              href={shareUrlOnWhatsapp}
              target="_blank"
            >
              {t("ShareOnWhatsapp")}
            </Menu.Item>
            <Menu.Item
              leftSection={<IconBrandFacebook size={14} />}
              component="a"
              href={shareUrlOnFacebook}
              target="_blank"
            >
              {t("ShareOnFacebook")}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Card.Section>

      <Card.Section inheritPadding py="xs">
        <Grid justify="center" align="center" overflow="">
          <GridCol span={2}>
            {resource.type == "poster" && <Image src="/icons/poster.jpg" alt="Poster icon" width="30" height="30" />}
            {resource.type == "pdf" && <IconFileTypePdf size={28} color="gray" />}
            {resource.type == "website" && <IconLink size={25} color="gray" />}
          </GridCol>
          <GridCol span={10} px="0">
            <Title order={5} className="text-wrap">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </Title>
          </GridCol>
          {/* <GridCol span={2}>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray" radius="xl">
                  <IconShare size={18} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconCopy size={14} />}
                  onClick={() => {
                    clipboard.copy(`${resource.url}`);
                    notifications.show({
                      position: "bottom-center",
                      title: "Copiato!",
                      message: "",
                    });
                  }}
                >
                  {t("CopyLink")}
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconBrandWhatsapp size={14} />}
                  component="a"
                  href={shareUrlOnWhatsapp}
                  target="_blank"
                >
                  {t("ShareOnWhatsapp")}
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconBrandFacebook size={14} />}
                  component="a"
                  href={shareUrlOnFacebook}
                  target="_blank"
                >
                  {t("ShareOnFacebook")}
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </GridCol> */}
        </Grid>
      </Card.Section>
      <div className="mt-3 flex flex-col-2 gap-1">
        <div className="flex-none">
          <Text mt="2" c="dimmed" size="sm">
            {t("Languages")}
            {":"}
          </Text>
        </div>
        <div className="flex-2 flex-row flex-wrap gap-0.8">
          {resource.languages.includes("it") && <Pill classNames={classes}>{t("ItalianTag")}</Pill>}
          {resource.languages.includes("en") && <Pill classNames={classes}>{t("EnglishTag")}</Pill>}
          {resource.languages.includes("ar") && <Pill classNames={classes}>{t("ArabTag")}</Pill>}
          {resource.languages.includes("fr") && <Pill classNames={classes}>{t("FrenchTag")}</Pill>}
          {resource.languages.includes("es") && <Pill classNames={classes}>{t("SpanishTag")}</Pill>}
        </div>
      </div>
      <div className="mt-2 flex flex-col-2 gap-3">
        <div className="flex-none">
          <Text mt="2" c="dimmed" size="sm">
            {t("Source")}
            {":"}
          </Text>
        </div>
        <div className="flex-2">
          <Anchor size="sm" c="#2e8297" component="a" href={resource.sourceHref} target="_blank" rel="noopener">
            {resource.source}
          </Anchor>
        </div>
      </div>
    </Card>
  );
}
