"use client";

import "@mantine/core/styles/Timeline.css";
import { Button, Divider, Title, Group, useMantineTheme } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useTranslations } from "next-intl";

type Event = {
  id: string;
  date: string;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    id: "1",
    date: "2025-10-01",
    title: "Event 1",
    description: "Description for event 1",
  },
  {
    id: "2",
    date: "2025-10-02",
    title: "Event 2",
    description: "Description for event 2",
  },
  {
    id: "3",
    date: "2025-10-03",
    title: "Event 3",
    description: "Description for event 3",
  },
];
const upcomingEvents = events.map((event) => (
  <React.Fragment key={event.id}>
    <div key={event.id} className="flex flex-col items-start">
      <div className="text-sm text-gray-500">{event.date}</div>
      <div className="text-lg font-semibold">{event.title}</div>
      <div className="text-gray-700">{event.description}</div>
    </div>
    <Divider c="dark" />
  </React.Fragment>
));

export default function UpcomingEvents() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const t = useTranslations("UpcomingEvents");

  return (
    <div className="bg-white pt-5 pb-15">
      <div className="w-full max-w-7xl m-auto px-5">
        <Group justify="space-between">
          <Title size={35} c="#2D5A51">
            {t("title")}
          </Title>
          <Button variant="outline" color="#2D5A51" size="md" mt="lg" mb="lg" rightSection={<IconArrowRight />}>
            {isMobile ? t("allButton") : t("allButtonExtra")}
          </Button>
        </Group>
        <div className="flex flex-col gap-4">{upcomingEvents}</div>
      </div>
    </div>
  );
}
