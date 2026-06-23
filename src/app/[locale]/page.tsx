import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsBar from "@/components/sections/StatsBar";
import ClientsPreview from "@/components/sections/ClientsPreview";
import NewsPreview from "@/components/sections/NewsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import { HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/lib/hero-media";

export const metadata: Metadata = {
  title: {
    absolute: "Apatek — Kiến tạo tương lai hàng hải",
  },
  description:
    "Apatek Vietnam — công ty công nghệ chuyên sâu về hàng hải và chuyển đổi số. Triển khai VTS, DMS, AIS cho cảng vụ, cơ quan hàng hải và doanh nghiệp Việt Nam.",
  openGraph: {
    title: "Apatek — Kiến tạo tương lai hàng hải",
    description:
      "Công ty công nghệ chuyên sâu về hàng hải và chuyển đổi số. Triển khai VTS, DMS, AIS cho cảng vụ và doanh nghiệp Việt Nam.",
  },
  twitter: {
    title: "Apatek — Kiến tạo tương lai hàng hải",
  },
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      <link rel="preload" as="image" href={HERO_VIDEO_POSTER} />
      <link rel="preload" as="video" href={HERO_VIDEO_URL} type="video/mp4" />
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <ClientsPreview />
      <NewsPreview locale={locale} />
      <ContactCTA />
    </>
  );
}
