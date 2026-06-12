"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Phone, Mail, Globe, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CONTACT_INFO: { Icon: LucideIcon; labelKey: string; valueKey?: string; value?: string; href: string | null }[] = [
  { Icon: Phone, labelKey: "phone_label", valueKey: "phone_value", href: "tel:0901239555" },
  { Icon: Mail, labelKey: "email_label", valueKey: "email_value", href: "mailto:Quan.nguyen@apatek.com.vn" },
  { Icon: Globe, labelKey: "website_label", value: "www.apatek.com.vn", href: "https://www.apatek.com.vn" },
  { Icon: MapPin, labelKey: "address_label", valueKey: "address_value", href: null },
];

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white">{t("title")}</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            {t("description")}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* Contact Info */}
            <div>
              <span className="section-label">{t("section_label")}</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px,3vw,36px)",
                  fontWeight: 800,
                  color: "var(--color-dark)",
                  marginBottom: 32,
                }}
              >
                {t("cta_label")}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {CONTACT_INFO.map((info, i) => (
                    <div className="contact-card" key={i} id={`contact-info-${i + 1}`}>
                      <div className="contact-icon">
                        <info.Icon size={22} strokeWidth={1.5} />
                      </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "var(--color-text-muted)",
                          marginBottom: 4,
                        }}
                      >
                        {t(info.labelKey as "phone_label")}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 15,
                            fontWeight: 600,
                            color: "var(--color-dark)",
                            transition: "color 0.2s",
                            textDecoration: "none",
                          }}
                        >
                          {info.value || t(info.valueKey as "phone_value")}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "var(--color-dark)",
                            lineHeight: 1.5,
                          }}
                        >
                          {t(info.valueKey as "address_value")}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 32,
                  height: 200,
                  background: "var(--color-bg-light)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <MapPin size={36} color="var(--color-primary)" strokeWidth={1.5} />
                <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
                  Vinhomes Gardenia, Nam Từ Liêm, Hà Nội
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form" id="contact-form">
              {submitted ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "48px 0",
                    }}
                  >
                    <CheckCircle size={56} color="var(--color-primary)" strokeWidth={1.5} style={{ margin: "0 auto 16px" }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "white",
                      marginBottom: 8,
                    }}
                  >
                    {t("form_success")}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 28 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "white",
                        marginBottom: 4,
                      }}
                    >
                      Send a Message
                    </h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
                      We respond within 24 business hours
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        {t("form_name")}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="form-input"
                        placeholder={t("form_name")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        {t("form_email")}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="form-input"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">
                      {t("form_company")}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="form-input"
                      placeholder={t("form_company")}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      {t("form_message")}
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-input"
                      placeholder={t("form_message")}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    id="contact-submit"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                  {t("form_submit")}
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
