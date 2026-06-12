"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Network, Search, ShieldCheck, Ship, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    Icon: Network,
    bgDark: true,
    titleKey: "p1_title",
    bodyKey: "p1_body",
    tagKey: "p1_tag",
  },
  {
    Icon: Search,
    bgDark: false,
    titleKey: "p2_title",
    bodyKey: "p2_body",
    tagKey: "p2_tag",
  },
  {
    Icon: ShieldCheck,
    bgDark: false,
    titleKey: "p3_title",
    bodyKey: "p3_body",
    tagKey: "p3_tag",
  },
  {
    Icon: Ship,
    bgDark: true,
    titleKey: "p4_title",
    bodyKey: "p4_body",
    tagKey: "p4_tag",
  },
];

export default function ServicesPreview() {
  const t = useTranslations("products");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const allHref = `/${locale}${locale === "vi" ? "/san-pham-dich-vu" : "/products-services"}`;

  return (
    <section className="section" id="services-preview">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">{t("section_label")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 560, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
            {t("description")}
          </p>
        </div>

        {/* Products grid */}
        <div className="grid-4">
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className={`card product-card${p.bgDark ? " card-dark" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              id={`product-card-${i + 1}`}
            >
              <div
                className="product-icon"
                style={{
                  background: p.bgDark
                    ? "rgba(238,28,39,0.15)"
                    : "rgba(238,28,39,0.08)",
                }}
              >
                <p.Icon
                  size={28}
                  color="var(--color-primary)"
                  strokeWidth={1.5}
                />
              </div>
              <div className="product-tag">{t(p.tagKey as "p1_tag")}</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 12,
                  color: p.bgDark ? "white" : "var(--color-dark)",
                }}
              >
                {t(p.titleKey as "p1_title")}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: p.bgDark ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)",
                }}
              >
                {t(p.bodyKey as "p1_body")}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href={allHref} className="btn-primary" id="services-view-all">
            View All Services
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
