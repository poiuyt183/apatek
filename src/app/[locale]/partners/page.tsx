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
const SPECIALIZED_PARTNERS = ["Tidalis", "JRC",  "Sophos","Axis", "Terma", "IHM", "iPRO"];

const GLOBAL_PARTNERS_LOGOS: Record<string, string> = {
  IBM: "/partner/partners/logo-ibm.png",
  HP: "/partner/partners/logo-hp.png",
  "Sun Oracle": "/partner/partners/logo-sun-oracle.png",
  Cisco: "/partner/partners/logo-cisco.png",
  Microsoft: "/partner/partners/logo-microsoft.png",
  Lenovo: "/partner/partners/logo-lenovo.png",
  Kaspersky: "/partner/partners/logo-kaspersky.png",
};

const SPECIALIZED_PARTNERS_LOGOS: Record<string, string> = {
  Tidalis: "/partner/partners/logo-tidalis.svg",
  JRC: "/partner/partners/logo-jrc.png",
  Axis: "/partner/partners/logo-axis.png",
  Sophos: "/partner/partners/logo-sophos.png",
  IHM: "/partner/partners/logo-ihm.webp",
  iPRO: "/partner/partners/logo-ipro.png",
  Terma: "/partner/partners/logo-terma.png",
};

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
                <Image
                  src={GLOBAL_PARTNERS_LOGOS[partner]}
                  alt={partner}
                  width={120}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
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
                <Image
                  src={SPECIALIZED_PARTNERS_LOGOS[partner]}
                  alt={partner}
                  width={120}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
