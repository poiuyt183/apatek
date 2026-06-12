"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  const t = useTranslations("contact");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  return (
    <section
      style={{
        background: "var(--color-dark)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-40%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(238,28,39,0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "1px solid rgba(238,28,39,0.07)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <span className="section-label section-label-white">{t("section_label")}</span>
        <h2
          className="section-title section-title-white"
          style={{ maxWidth: 640, margin: "0 auto 20px" }}
        >
          {t("cta_label")}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 480, margin: "0 auto 40px" }}>
          {t("description")}
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={contactHref} className="btn-primary" id="cta-contact-btn">
            {t("form_submit")}
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <a
            href="tel:0901239555"
            className="btn-outline"
            id="cta-phone-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <Phone size={15} strokeWidth={1.5} />
            0901 239 555
          </a>
        </div>
      </div>
    </section>
  );
}
