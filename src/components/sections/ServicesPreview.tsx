"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Network, Search, ShieldCheck, Ship, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    Icon: Ship,
    titleKey: "p4_title",
    bodyKey: "p4_body",
    tagKey: "p4_tag",
    featured: true,
  },
  {
    Icon: Network,
    titleKey: "p1_title",
    bodyKey: "p1_body",
    tagKey: "p1_tag",
    featured: false,
  },
  {
    Icon: Search,
    titleKey: "p2_title",
    bodyKey: "p2_body",
    tagKey: "p2_tag",
    featured: false,
  },
  {
    Icon: ShieldCheck,
    titleKey: "p3_title",
    bodyKey: "p3_body",
    tagKey: "p3_tag",
    featured: false,
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

        {/* Unified border grid */}
        <div className="services-grid">
          {PRODUCTS.map((p) => (
            <div
              key={p.titleKey}
              className={`service-card${p.featured ? " featured" : ""}`}
            >
              <div className="service-icon">
                <p.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
              </div>
              <span className="service-tag">{t(p.tagKey as "p1_tag")}</span>
              <h3 className="service-title">{t(p.titleKey as "p1_title")}</h3>
              <p className="service-body">{t(p.bodyKey as "p1_body")}</p>
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
