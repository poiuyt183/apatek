"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CONTACT_INFO: {
  Icon: LucideIcon;
  labelKey: "phone_label" | "email_label" | "website_label" | "address_label";
  valueKey?: "phone_value" | "email_value" | "address_value";
  value?: string;
  href: string | null;
}[] = [
  { Icon: Phone, labelKey: "phone_label", valueKey: "phone_value", href: "tel:0901239555" },
  { Icon: Mail, labelKey: "email_label", valueKey: "email_value", href: "mailto:Quan.nguyen@apatek.com.vn" },
  { Icon: Globe, labelKey: "website_label", value: "www.apatek.com.vn", href: "https://www.apatek.com.vn" },
  { Icon: MapPin, labelKey: "address_label", valueKey: "address_value", href: null },
];

export default function ContactPage() {
  const t = useTranslations("contact");
  const tf = useTranslations("footer");
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
    <div className="contact-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/hero-team.png"
            alt="Apatek Vietnam Contact"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">Apatek Vietnam</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-panel">
              <span className="section-label">{t("section_label")}</span>
              <h2 className="contact-panel-title">{t("cta_label")}</h2>

              <div className="contact-info-grid">
                {CONTACT_INFO.map((info, i) => (
                  <div key={info.labelKey} className="contact-info-item" id={`contact-info-${i + 1}`}>
                    <div className="contact-info-icon">
                      <info.Icon size={18} color="var(--color-primary)" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="contact-info-label">{t(info.labelKey)}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="contact-info-value contact-info-link"
                        >
                          {info.value || t(info.valueKey!)}
                        </a>
                      ) : (
                        <span className="contact-info-value">{t(info.valueKey!)}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-map-placeholder">
                <MapPin size={28} color="var(--color-primary)" strokeWidth={1.5} />
                <span>{tf("address_short")}</span>
              </div>
            </div>

            <div className="contact-form-panel" id="contact-form">
              {submitted ? (
                <div className="contact-form-success">
                  <CheckCircle2 size={48} color="var(--color-primary)" strokeWidth={1.5} />
                  <h3>{t("form_success")}</h3>
                  <p>{t("description")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-header">
                    <h3>{t("form_submit")}</h3>
                    <p>{t("description")}</p>
                  </div>

                  <div className="contact-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        {t("form_name")}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="form-input contact-input"
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
                        className="form-input contact-input"
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
                      className="form-input contact-input"
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
                      className="form-input contact-input"
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
    </div>
  );
}
