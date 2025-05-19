import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import React from "react";
import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import Shell from "@/components/shell/shell";
import { ColorSchemeScript, createTheme, MantineProvider, mantineHtmlProps, MantineColorsTuple } from "@mantine/core";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    // images: [siteMetadata.socialBanner],
    type: "website",
  },
  // alternates: {
  //   canonical: './',
  //   types: {
  //     'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
  //   },w
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
};

// const palette = [
//   "#F7BA2C",
//   "#DCAF30",
//   "#C0A334",
//   "#A59838",
//   "#898C3C",
//   "#6E8140",
//   "#527544",
//   "#376A48",
//   "#1B5E4C",
//   "#005350",
// ];

const darkSlateGrey: MantineColorsTuple = [
  "#f1f9f7",
  "#e4efed",
  "#c3dfd9",
  "#9fcec5",
  "#82c0b3",
  "#6fb7a8",
  "#63b3a3",
  "#529d8e",
  "#468c7e",
  "#173630",
];

// https://mantine.dev/colors-generator/?color=dce9e2
const lightSlateGreen: MantineColorsTuple = [
  "#eef9f3",
  "#dce9e2",
  "#c4d8cd",
  "#a4c2b2",
  "#88b09a",
  "#76a58b",
  "#6c9f83",
  "#5a8b70",
  "#4e7c63",
  "#3e6b53",
];

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
  colors: { darkSlateGrey, lightSlateGreen: lightSlateGreen },
  primaryColor: "darkSlateGrey",
  primaryShade: 6,
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider>
          <MantineProvider theme={theme}>
            <Shell locale={locale}>{children}</Shell>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
