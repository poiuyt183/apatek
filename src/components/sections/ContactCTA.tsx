"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactCTA() {
  const t = useTranslations("contact");
  const tf = useTranslations("footer");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  return (
    <section className="cta-section">
      {/* No .container — inner grid stretches full width */}
      <div className="cta-inner">

        {/* Left: white panel — text + CTA */}
        <div className="cta-content">
          <span className="cta-label">{t("section_label")}</span>
          <h2 className="cta-heading">{t("cta_label")}</h2>
          <p className="cta-sub">{t("description")}</p>
          <div className="cta-actions">
            <Link href={contactHref} className="btn-primary" id="cta-contact-btn">
              {t("form_submit")}
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a href="tel:0901239555" className="btn-outline-dark" id="cta-phone-btn">
              <Phone size={15} strokeWidth={1.5} />
              0901 239 555
            </a>
          </div>
        </div>

        {/* Right: red panel — contact details */}
        <div className="cta-panel">
          <div className="cta-panel-item">
            <Phone size={18} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.7)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", marginBottom: 6, letterSpacing: "1.5px", fontWeight: 700 }}>
                HOTLINE
              </div>
              <a href="tel:0901239555" style={{ color: "white", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "0.5px" }}>
                0901 239 555
              </a>
            </div>
          </div>

          <div className="cta-panel-divider" />

          <div className="cta-panel-item">
            <Mail size={18} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.7)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", marginBottom: 6, letterSpacing: "1.5px", fontWeight: 700 }}>
                EMAIL
              </div>
              <a href="mailto:Quan.nguyen@apatek.com.vn" style={{ color: "white", fontWeight: 600, fontSize: 13, textDecoration: "none", lineHeight: 1.5 }}>
                Quan.nguyen@apatek.com.vn
              </a>
            </div>
          </div>

          <div className="cta-panel-divider" />

          <div className="cta-panel-item">
            <MapPin size={18} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.7)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", marginBottom: 6, letterSpacing: "1.5px", fontWeight: 700 }}>
                ĐỊA CHỈ
              </div>
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, lineHeight: 1.6 }}>
                {tf("address_short")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
