import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsBar from "@/components/sections/StatsBar";
import ClientsPreview from "@/components/sections/ClientsPreview";
import NewsPreview from "@/components/sections/NewsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import { HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "@/lib/hero-media";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Apatek Vietnam — Pioneer technology company providing digital transformation, information security and enterprise management solutions.",
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
