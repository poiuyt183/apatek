import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Apatek Vietnam",
    default: "Apatek Vietnam — Pioneer Technology, Build the Future",
  },
  description:
    "Apatek Vietnam provides leading digital transformation solutions, information security, and enterprise operation optimization. Partner of Viettel, Samsung, Ministry of Finance.",
  keywords: [
    "Apatek Vietnam",
    "digital transformation",
    "information security",
    "DMS",
    "VTS",
    "enterprise software",
    "Vietnam tech company",
  ],
  openGraph: {
    siteName: "Apatek Vietnam",
    locale: "en_US",
    type: "website",
  },
};

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

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
