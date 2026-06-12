import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Network, Search, ShieldCheck, Ship, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Apatek Vietnam products and services: DMS, Inspection Software, Security & System Integration, and Maritime VTS.",
};

const PRODUCTS: {
  Icon: LucideIcon;
  titleKey: string;
  bodyKey: string;
  tagKey: string;
  dark: boolean;
  features: string[];
}[] = [
  {
    Icon: Network,
    titleKey: "p1_title",
    bodyKey: "p1_body",
    tagKey: "p1_tag",
    dark: true,
    features: ["Supply chain optimization", "Real-time channel tracking", "FMCG industry focus", "Sales force automation"],
  },
  {
    Icon: Search,
    titleKey: "p2_title",
    bodyKey: "p2_body",
    tagKey: "p2_tag",
    dark: false,
    features: ["Inspection plan management", "Asset management module", "Complaints & denunciations", "Government sector ready"],
  },
  {
    Icon: ShieldCheck,
    titleKey: "p3_title",
    bodyKey: "p3_body",
    tagKey: "p3_tag",
    dark: false,
    features: ["Fortinet security solutions", "Video conferencing systems", "Security surveillance", "System integration"],
  },
  {
    Icon: Ship,
    titleKey: "p4_title",
    bodyKey: "p4_body",
    tagKey: "p4_tag",
    dark: true,
    features: ["Maritime traffic monitoring", "Real-time vessel tracking", "Port authority integration", "JRC partnership"],
  },
];

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white">{t("title")}</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 540, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            {t("description")}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
          >
            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                id={`product-${i + 1}`}
                style={{
                  background: p.dark ? "var(--color-dark)" : "var(--color-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "40px",
                  border: p.dark ? "1px solid var(--color-border-dark)" : "1px solid var(--color-border)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                className="card"
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "var(--radius-md)",
                    background: "rgba(242,99,34,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <p.Icon size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>

                {/* Tag */}
                <div className="product-tag">{t(p.tagKey as "p1_tag")}</div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: p.dark ? "white" : "var(--color-dark)",
                    marginBottom: 12,
                  }}
                >
                  {t(p.titleKey as "p1_title")}
                </h2>

                {/* Body */}
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: p.dark ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)",
                    marginBottom: 24,
                  }}
                >
                  {t(p.bodyKey as "p1_body")}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.features.map((f, fi) => (
                    <li
                      key={fi}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: p.dark ? "rgba(255,255,255,0.65)" : "var(--color-text)",
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        color="var(--color-primary)"
                        strokeWidth={2}
                        style={{ flexShrink: 0 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "var(--color-primary)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
