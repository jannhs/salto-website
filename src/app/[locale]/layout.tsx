import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";
import React from "react";
import { Metadata } from 'next'
import siteMetadata from "@/data/siteMetadata";
import Shell from "@/components/shell/shell";
import { ColorSchemeScript, createTheme, MantineProvider, mantineHtmlProps } from "@mantine/core";


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
    url: './',
    siteName: siteMetadata.title,
    // images: [siteMetadata.socialBanner],
    type: 'website',
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
}

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Inter, sans-serif' },
  primaryColor: 'cyan'
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}  {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body >
        <NextIntlClientProvider>
          <MantineProvider theme={theme}>
            <Shell locale={locale}>
              {children}
            </Shell>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}