import { Card, Group, Text, Menu, Grid, GridCol, Center, ActionIcon } from "@mantine/core";
import { IconCopy, IconDotsVertical, IconFileTypePdf, IconLink } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useClipboard } from "@mantine/hooks";

interface LinkCardProps {
  type: string;
  title: string;
  link: string;
  source: string;
  sourceHref: string;
  imagePreview: string;
  altPreview: string;
}

export function LinkCard({ type, title, link, source, sourceHref, imagePreview, altPreview }: LinkCardProps) {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card withBorder shadow="sm" radius="md" h="362px">
      <Card.Section withBorder inheritPadding py="xs">
        <Grid justify="space-between">
          <GridCol span={10}>
            <Group mt="2px">
              {type == "pdf" && <IconFileTypePdf size={22} color="gray" />}
              {type == "website" && <IconLink size={22} color="gray" />}
              <Text fw={500} component="a" href={link} target="_blank">
                {title}
              </Text>
            </Group>
          </GridCol>
          <GridCol span="content">
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
                    clipboard.copy(`${link}`);
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

      <Card.Section component="a" href={link} target="_blank">
        <Center>
          <Image src={imagePreview} width="515" height="350" alt={altPreview} />
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
