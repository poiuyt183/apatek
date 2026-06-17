import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Apatek Vietnam technology partners: IBM, HP, Cisco, Microsoft, Fortinet, JRC, and more.",
};

const GLOBAL_PARTNERS = ["IBM", "HP", "Sun Oracle", "Cisco", "Microsoft", "Lenovo", "Kaspersky"];
const SPECIALIZED_PARTNERS = ["Juniper Networks", "JRC", "EMC²", "Fortinet", "Acumatica"];

export default function PartnersPage() {
  const t = useTranslations("partners");

  return (
    <div className="partners-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/cang-bien.jpg"
            alt="Apatek Vietnam Partners"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">Technology Partners</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("global_title")}</span>
            <h2 className="section-title">{t("global_title")}</h2>
          </div>
          <div className="name-grid">
            {GLOBAL_PARTNERS.map((partner) => (
              <div key={partner} id={`partner-${partner.toLowerCase().replace(/\s/g, "-")}`} className="name-grid-cell">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("specialized_title")}</span>
            <h2 className="section-title">{t("specialized_title")}</h2>
          </div>
          <div className="name-grid name-grid-3">
            {SPECIALIZED_PARTNERS.map((partner) => (
              <div key={partner} className="name-grid-cell">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
