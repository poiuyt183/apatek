import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Rocket, TrendingUp, Building2, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "History",
  description: "Apatek Vietnam company history from founding in 2019 to AI & Big Data adoption in 2025.",
};

const TIMELINE: { year: string; titleKey: string; bodyKey: string; Icon: LucideIcon }[] = [
  { year: "2019", titleKey: "2019_title", bodyKey: "2019_body", Icon: Rocket },
  { year: "2020–2023", titleKey: "2020_title", bodyKey: "2020_body", Icon: TrendingUp },
  { year: "2024", titleKey: "2024_title", bodyKey: "2024_body", Icon: Building2 },
  { year: "2025", titleKey: "2025_title", bodyKey: "2025_body", Icon: Bot },
];

export default function HistoryPage() {
  const t = useTranslations("history");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white">{t("title")}</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 560, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            {t("description")}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.Icon size={12} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{t(item.titleKey as "2019_title")}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-text-muted)" }}>
                      {t(item.bodyKey as "2019_body")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners mentioned */}
      <section className="section section-light">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">TECHNOLOGY PARTNERS SINCE INCEPTION</span>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Built on Global Technology</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            {["Acumatica", "Fortinet", "Cisco", "Microsoft", "JRC", "IBM", "HP"].map((p) => (
              <div
                key={p}
                style={{
                  padding: "12px 24px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--color-text-muted)",
                  background: "white",
                  transition: "all 0.25s",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
