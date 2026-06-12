import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Lightbulb, Users, Zap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Apatek Vietnam's vision to become Vietnam's leading technology company, our mission and core values.",
};

const CORE_VALUES: { numKey: string; titleKey: string; bodyKey: string; Icon: LucideIcon }[] = [
  { numKey: "01", titleKey: "value1_title", bodyKey: "value1_body", Icon: Lightbulb },
  { numKey: "02", titleKey: "value2_title", bodyKey: "value2_body", Icon: Users },
  { numKey: "03", titleKey: "value3_title", bodyKey: "value3_body", Icon: Zap },
  { numKey: "04", titleKey: "value4_title", bodyKey: "value4_body", Icon: Trophy },
];

export default function VisionPage() {
  const t = useTranslations("vision");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white">{t("title")}</h1>
        </div>
      </section>

      {/* Vision / Mission Split */}
      <div className="vm-split">
        {/* Vision — orange panel */}
        <div className="vm-panel vm-panel-orange">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 24,
            }}
          >
            — {t("vision_label")}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "white",
              marginBottom: 24,
            }}
          >
            {t("vision_body")}
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "rgba(255,255,255,0.4)",
              marginTop: 16,
            }}
          />
        </div>

        {/* Mission — dark panel */}
        <div className="vm-panel vm-panel-dark">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              marginBottom: 24,
            }}
          >
            — {t("mission_label")}
          </div>
          <ul className="mission-list">
            {([t("mission_items.0"), t("mission_items.1"), t("mission_items.2")] as string[]).map(
              (item, i) => (
                <li key={i} className="mission-item">
                  <div className="mission-bullet" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">{t("values_section_label")}</span>
            <h2 className="section-title">{t("values_title")}</h2>
          </div>

          <div className="grid-2" style={{ gap: 32 }}>
            {CORE_VALUES.map((v, i) => (
              <div
                key={i}
                className="value-item"
                style={{
                  padding: "32px",
                  background: "var(--color-bg-light)",
                  borderRadius: "var(--radius-md)",
                  position: "relative",
                  overflow: "hidden",
                }}
                id={`value-${i + 1}`}
              >
                {/* Background number */}
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: 16,
                    fontFamily: "var(--font-display)",
                    fontSize: 80,
                    fontWeight: 900,
                    color: "var(--color-primary)",
                    opacity: 0.06,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {v.numKey}
                </div>

                {/* Content */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "var(--color-primary)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <v.Icon size={24} color="white" strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--color-dark)",
                      marginBottom: 12,
                    }}
                  >
                    {t(v.titleKey as "value1_title")}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-text-muted)" }}>
                    {t(v.bodyKey as "value1_body")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan banner */}
      <section style={{ background: "var(--color-dark)", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px,3vw,36px)",
              fontWeight: 800,
              color: "white",
              fontStyle: "italic",
              opacity: 0.85,
            }}
          >
            "Công nghệ tiên phong –{" "}
            <span style={{ color: "var(--color-primary)" }}>Kiến tạo tương lai.</span>"
          </p>
        </div>
      </section>
    </>
  );
}
