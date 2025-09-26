"use client";

import "@mantine/core/styles/Timeline.css";
import { Divider, Title, Group, Button } from "@mantine/core";
import React from "react";
import { IconArrowLeft, IconArrowRight, IconClock, IconMapPin } from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";
import classes from "./UpcomingEvents.module.css";
import { eventsByLocale } from "@/data/upcomingEvents";
import Image from "next/image";

export default function UpcomingEvents() {
  const t = useTranslations("UpcomingEvents");
  const tResources = useTranslations("Resources");
  const locale = useLocale();
  const direction = getLangDir(locale);
  const septemberEventsByLocale = eventsByLocale[locale].september.events;

  const septemberEvents = septemberEventsByLocale.map((event) => (
    <div key={event.id} className="flex flex-row gap-4 flex-wrap sm:flex-nowrap justify-center my-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl md:text-4xl font-bold text-amber-700 uppercase">{t("Saturday")}</div>
        <div className="text-4xl md:text-5xl font-bold text-amber-700">{event.day}</div>
      </div>
      <div></div>
      <div className="content-center text-center sm:text-start">
        <div className="grow">
          <div className="text-xl font-semibold">{event.title}</div>
          {/* <Button
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
          </Button> */}
        </div>
        <div className="text-gray-700">{event.description}</div>
        <div className="flex content-center items-center my-2">
          <IconMapPin className="text-gray-700  mr-2" />
          <div className="text-gray-700 content-end items-end underline">
            {" "}
            <a href="https://maps.app.goo.gl/i3CkqkUMGscH8fCf7" target="_blank">
              Castello del Valentino e Orto Botanico Viale Mattioli, 39 – Torino (TO){" "}
            </a>
          </div>
        </div>
        <div className="flex content-center items-center my-2">
          <IconClock className="text-gray-700  mr-2" />
          <div className="text-gray-700 content-end items-end">10.00 - 18.00</div>
        </div>
        <div className="rounded-lg overflow-hidden mt-3 mr-4">
          <div className="bg-[#ffaa00] flex flex-row ">
            <div className="px-4 lg:px-8 py-4">
              <Title order={4} c="white">
                {t("QuizIntro")}
              </Title>
            </div>
            <div className="bg-amber-700 py-2 content-center">
              <Button
                c="white"
                variant="subtle"
                rightSection={direction == "rtl" ? <IconArrowLeft /> : <IconArrowRight />}
                component="a"
                href="https://tally.so/r/mBNZqN"
              >
                {tResources("ItalianTag")}
              </Button>
              <Button
                c="white"
                variant="subtle"
                rightSection={direction == "rtl" ? <IconArrowLeft /> : <IconArrowRight />}
                component="a"
                href="https://tally.so/r/m6oMO5"
              >
                {tResources("EnglishTag")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image src="/images/unight-2024.jpg" alt="UNIGHT 2024" width="400" height="300" className="hidden lg:inline" />
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
