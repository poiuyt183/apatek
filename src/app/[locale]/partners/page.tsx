import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Apatek Vietnam technology partners: IBM, HP, Cisco, Microsoft, Fortinet, JRC, and more.",
};

const GLOBAL_PARTNERS = ["IBM", "HP", "Sun Oracle", "Cisco", "Microsoft", "Lenovo", "Kaspersky"];
const SPECIALIZED_PARTNERS = ["Juniper Networks", "JRC", "EMC²", "Fortinet", "Acumatica", "Lenovo", "Kaspersky"];

export default function PartnersPage() {
  const t = useTranslations("partners");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white">{t("title")}</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 580, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            {t("description")}
          </p>
        </div>
      </section>

      {/* Global Partners */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="section-label">{t("global_title")}</span>
            <h2 className="section-title">{t("global_title")}</h2>
          </div>
          <div className="logo-grid">
            {GLOBAL_PARTNERS.map((p) => (
              <div key={p} id={`partner-${p.toLowerCase().replace(/\s/g, "-")}`} className="logo-item">
                <span className="logo-text">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Partners */}
      <section className="section section-light">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="section-label">{t("specialized_title")}</span>
            <h2 className="section-title">{t("specialized_title")}</h2>
          </div>
          <div className="logo-grid">
            {SPECIALIZED_PARTNERS.map((p) => (
              <div key={p} className="logo-item">
                <span className="logo-text">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-primary)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,48px)",
              fontWeight: 800,
              color: "white",
              marginBottom: 16,
            }}
          >
            Become a Partner
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, marginBottom: 32 }}>
            Join our growing ecosystem of technology partners
          </p>
          <a
            href="mailto:Quan.nguyen@apatek.com.vn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              color: "var(--color-primary)",
              padding: "14px 32px",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              transition: "transform 0.2s",
            }}
          >
            Contact Us <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  );
}
