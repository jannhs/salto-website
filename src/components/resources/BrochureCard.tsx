import { Card, Text, Menu, Grid, GridCol, Center, ActionIcon } from "@mantine/core";
import { IconCopy, IconDotsVertical, IconFileTypePdf, IconLink } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useClipboard } from "@mantine/hooks";

interface LinkCardProps {
  type: string;
  title: string;
  url: string;
  source: string;
  sourceHref: string;
  imagePreview: string;
  altPreview: string;
}

export function BrochureCard({ type, title, url, source, sourceHref, imagePreview, altPreview }: LinkCardProps) {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card withBorder shadow="sm" radius="md" h="fit">
      <Card.Section withBorder inheritPadding py="xs">
        <Grid justify="space-between" overflow="">
          <GridCol span={2}>
            {type == "pdf" && <IconFileTypePdf size={22} color="gray" />}
            {type == "website" && <IconLink size={22} color="gray" />}
          </GridCol>
          <GridCol span={9}>
            <Text fw={500} component="a" href={url} target="_blank" className="text-wrap">
              {title}
            </Text>
          </GridCol>
          <GridCol span={1}>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconDotsVertical size={18} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconCopy size={14} />}
                  onClick={() => {
                    clipboard.copy(`${url}`);
                    notifications.show({
                      position: "bottom-center",
                      title: "Copiato!",
                      message: "",
                    });
                  }}
                >
                  Copia collegamento
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </GridCol>
        </Grid>
      </Card.Section>

      <Card.Section component="a" href={url} target="_blank">
        <Center>
          <Image src={imagePreview} width="455" height="250" alt={altPreview} />
        </Center>
      </Card.Section>
      <Text mt="sm" c="dimmed" size="sm">
        Fonte:{" "}
        <Text span inherit c="var(--mantine-color-anchor)" component="a" href={sourceHref} target="_blank">
          {source}
        </Text>
      </Text>
    </Card>
  );
}
