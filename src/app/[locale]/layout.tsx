import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import { bodyFont, displayFont } from "@/lib/fonts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apatek.com.vn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Apatek Vietnam",
    default: "Kiến tạo tương lai hàng hải — Apatek Vietnam",
  },
  description:
    "Apatek Vietnam — công ty công nghệ chuyên sâu về hàng hải và chuyển đổi số. Triển khai VTS, DMS, AIS cho cảng vụ và doanh nghiệp Việt Nam.",
  keywords: [
    "Apatek Vietnam",
    "VTS",
    "DMS",
    "AIS",
    "hàng hải",
    "maritime technology",
    "chuyển đổi số",
    "phần mềm doanh nghiệp",
    "cảng vụ",
    "vessel traffic services",
    "distribution management",
  ],
  openGraph: {
    title: {
      template: "%s | Apatek Vietnam",
      default: "Kiến tạo tương lai hàng hải — Apatek Vietnam",
    },
    description:
      "Apatek Vietnam — công ty công nghệ chuyên sâu về hàng hải và chuyển đổi số. Triển khai VTS, DMS, AIS cho cảng vụ và doanh nghiệp Việt Nam.",
    siteName: "Apatek Vietnam",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/logo_apatek.png",
        width: 800,
        height: 400,
        alt: "Apatek Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | Apatek Vietnam",
      default: "Kiến tạo tương lai hàng hải — Apatek Vietnam",
    },
    description:
      "Apatek Vietnam — công ty công nghệ chuyên sâu về hàng hải và chuyển đổi số.",
    images: ["/logo_apatek.png"],
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
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
