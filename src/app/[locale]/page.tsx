import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsBar from "@/components/sections/StatsBar";
import ClientsPreview from "@/components/sections/ClientsPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Apatek Vietnam — Pioneer technology company providing digital transformation, information security and enterprise management solutions.",
};

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <ClientsPreview />
      <ContactCTA />
    </>
  );
}
