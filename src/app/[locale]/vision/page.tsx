import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import { Lightbulb, Users, Zap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Apatek Vietnam's vision to become Vietnam's leading technology company, our mission and core values.",
};

const CORE_VALUES: { numKey: string; titleKey: string; bodyKey: string; Icon: LucideIcon }[] = [
  { numKey: "01", titleKey: "value1_title", bodyKey: "value1_body", Icon: Lightbulb },
  { numKey: "02", titleKey: "value2_title", bodyKey: "value2_body", Icon: Users },
  { numKey: "03", titleKey: "value3_title", bodyKey: "value3_body", Icon: Zap },
  { numKey: "04", titleKey: "value4_title", bodyKey: "value4_body", Icon: Trophy },
];

export default function VisionPage() {
  const t = useTranslations("vision");
  const tf = useTranslations("footer");

  const missionItems = [
    t("mission_items.0"),
    t("mission_items.1"),
    t("mission_items.2"),
  ] as string[];

  return (
    <div className="vision-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
        </div>
        <div className="about-hero-right">
          <Image
            src="/cang-bien.jpg"
            alt="Apatek Vietnam"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">Apatek Vietnam</span>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section">
        <div className="container">
          <div className="vision-vm-grid">
            <div className="vision-vm-panel vision-vm-vision">
              <span className="vision-vm-label">{t("vision_label")}</span>
              <p className="vision-vm-text">{t("vision_body")}</p>
            </div>
            <div className="vision-vm-panel vision-vm-mission">
              <span className="vision-vm-label">{t("mission_label")}</span>
              <ul className="vision-mission-list">
                {missionItems.map((item, i) => (
                  <li key={item} className="vision-mission-item">
                    <span className="vision-mission-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-light">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("values_section_label")}</span>
            <h2 className="section-title">{t("values_title")}</h2>
          </div>

          <div className="vision-values-grid">
            {CORE_VALUES.map((v) => (
              <div key={v.numKey} className="vision-value-card" id={`value-${v.numKey}`}>
                <div className="vision-value-icon">
                  <v.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <span className="vision-value-num">{v.numKey}</span>
                <h3 className="vision-value-title">{t(v.titleKey as "value1_title")}</h3>
                <p className="vision-value-body">{t(v.bodyKey as "value1_body")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="vision-slogan">
        <div className="container">
          <p className="vision-slogan-text">&ldquo;{tf("slogan")}&rdquo;</p>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
