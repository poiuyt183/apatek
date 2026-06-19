import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Apatek Vietnam products and services: DMS, Inspection Software, Security & System Integration, and Maritime VTS.",
};

const PRODUCT_FEATURES: Record<string, string[]> = {
  "product-4": [
    "Maritime traffic monitoring",
    "Real-time vessel tracking",
    "Port authority integration",
  ],
  "product-1": [
    "Supply chain optimization",
    "Real-time channel tracking",
    "FMCG industry focus",
    "Sales force automation",
  ],
  "product-2": [
    "Inspection plan management",
    "Asset management module",
    "Complaints & denunciations",
    "Government sector ready",
  ],
  "product-3": [
    "Sophos security solutions",
    "Video conferencing systems",
    "Security surveillance",
    "System integration",
  ],
};

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <div className="products-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/cang-bien.jpg"
            alt="Apatek Vietnam Products & Services"
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
          <div className="products-detail-grid">
            {SERVICES.map((product) => (
              <article
                key={product.anchorId}
                id={product.anchorId}
                className={`product-detail-card${product.featured ? " featured" : ""}`}
              >
                <div className="product-detail-icon">
                  <product.Icon size={22} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <span className="service-tag">{t(product.tagKey)}</span>
                <h2 className="product-detail-title">{t(product.titleKey)}</h2>
                <p className="product-detail-body">{t(product.bodyKey)}</p>
                <ul className="product-features">
                  {PRODUCT_FEATURES[product.anchorId].map((feature) => (
                    <li key={feature} className="product-feature-item">
                      <CheckCircle2
                        size={14}
                        color="var(--color-primary)"
                        strokeWidth={2}
                        style={{ flexShrink: 0 }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
