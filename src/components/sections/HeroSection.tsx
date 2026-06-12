"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const servicesHref = `/${locale}${locale === "vi" ? "/san-pham-dich-vu" : "/products-services"}`;
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      <div className="container" style={{ paddingTop: 72, paddingBottom: 80 }}>
        <div
          className="hero-content"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {t("badge")}
          </div>

          {/* Title */}
          <h1 className="hero-title">
            {t("title")}
            <span className="hero-title-highlight">{t("titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">{t("subtitle")}</p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link href={servicesHref} className="btn-primary" id="hero-cta-primary">
              {t("cta_primary")}
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link href={contactHref} className="btn-outline" id="hero-cta-secondary">
              {t("cta_secondary")}
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">{t("stat1_value")}</div>
              <div className="hero-stat-label">{t("stat1_label")}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{t("stat2_value")}</div>
              <div className="hero-stat-label">{t("stat2_label")}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{t("stat3_value")}</div>
              <div className="hero-stat-label">{t("stat3_label")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: "11px", color: "white", letterSpacing: "2px", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, white, transparent)",
            animation: "fadeIn 1s ease infinite alternate",
          }}
        />
      </div>
    </section>
  );
}
