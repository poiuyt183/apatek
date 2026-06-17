"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const servicesHref = `/${locale}${locale === "vi" ? "/san-pham-dich-vu" : "/products-services"}`;
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Left: Text panel */}
      <div className="hero-left">
        <div
          className="hero-content"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Slash accent label */}
          <div className="hero-slash">{t("badge")}</div>

          {/* Title */}
          <h1 className="hero-title">
            <span className="hero-title-highlight">{t("titleHighlight")}</span>
            <br />
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">{t("subtitle")}</p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link href={servicesHref} className="btn-primary" id="hero-cta-primary">
              {t("cta_primary")}
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link href={contactHref} className="btn-outline-dark" id="hero-cta-secondary">
              {t("cta_secondary")}
              <ChevronRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Image panel */}
      <div className="hero-right">
        <Image
          src="/cang-bien.jpg"
          alt="Apatek Vietnam"
          fill
          className="hero-right-img"
          priority
          sizes="52vw"
        />
        <span className="hero-right-label">Apatek Vietnam</span>
      </div>
    </section>
  );
}
