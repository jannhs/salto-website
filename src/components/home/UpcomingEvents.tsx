"use client";

import "@mantine/core/styles/Timeline.css";
import { Divider, Title, Group, useMantineTheme, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";
import type { Event } from "@/utils/types";
import { getLangDir } from "rtl-detect";
import classes from "./UpcomingEvents.module.css";
import { eventsByLocale } from "@/data/upcomingEvents";
import Image from "next/image";

export default function UpcomingEvents() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const t = useTranslations("UpcomingEvents");
  const locale = useLocale();
  const direction = getLangDir(locale);
  const septemberEventsByLocale = eventsByLocale[locale].september.events;

  const septemberEvents = septemberEventsByLocale.map((event) => (
    <div key={event.id} className="flex flex-row gap-4 flex-wrap sm:flex-nowrap justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl md:text-4xl font-bold text-amber-700 uppercase">{t("Friday")}</div>
        <div className="text-4xl md:text-5xl font-bold text-amber-700">{event.day}</div>
      </div>
      <div></div>
      <div className="content-center">
        <div className="text-xl font-semibold grow">{event.title}</div>
        <div className="text-gray-700">{event.description}</div>
        <Button
          variant="outline"
          color="#2D5A51"
          size="md"
          mt="lg"
          mb="lg"
          rightSection={direction == "rtl" ? <IconArrowLeft /> : <IconArrowRight />}
          component="a"
          href={event.url}
          target="_blank"
        >
          {t("DiscoverMore")}
        </Button>
      </div>
      <Image src="/images/unight-2024.jpg" alt="UNIGHT 2024" width="400" height="300" />
    </div>
  ));

  return (
    <div className="bg-white pt-5 pb-15">
      <div className="w-full max-w-7xl m-auto px-5">
        <Group justify="space-between" mt="lg">
          <Title size={35} c="#0F4C5C" mb="sm">
            {t("title")}
          </Title>
        </Group>
        {septemberEvents.length > 0 ? (
          <div className="flex flex-col gap-4">
            <Divider size="md" label={t("September")} labelPosition="left" classNames={classes} mt="sm" />
            {septemberEvents}
          </div>
        ) : (
          <div className="text-gray-500 text-center mt-10">{t("noEvents")}</div>
        )}
      </div>
    </div>
  );
}
