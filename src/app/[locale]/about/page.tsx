import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apatek Vietnam — pioneer technology company providing digital transformation, security, and enterprise optimization since 2019.",
};

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white" style={{ maxWidth: 640 }}>
            {t("title")}
          </h1>
        </div>
      </section>

      {/* About Body */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            {/* Text */}
            <div>
              <div className="divider-orange" />
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--color-text)", marginBottom: 24 }}>
                {t("body1")}
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-text-muted)" }}>
                {t("body2")}
              </p>

              {/* Quick facts */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginTop: 40,
                }}
              >
                {[
                  { label: t("founded_year"), value: t("founded_value") },
                  { label: t("hq_label"), value: t("hq_value") },
                  { label: "Partners", value: "15+" },
                  { label: "Clients", value: "50+" },
                ].map((fact, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "20px",
                      background: "var(--color-bg-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--color-primary)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 24,
                        fontWeight: 800,
                        color: "var(--color-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {fact.value}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--color-text-muted)", fontWeight: 500 }}>
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div
              style={{
                background: "var(--color-dark)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "4/3",
                position: "relative",
              }}
            >
              <Image
                src="/hero-team.png"
                alt="Apatek Vietnam Team"
                fill
                style={{ objectFit: "cover", opacity: 0.7 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.9) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "white",
                    marginBottom: 8,
                  }}
                >
                  Công ty Cổ phần Apatek Việt Nam
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--color-primary)",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    letterSpacing: "1px",
                  }}
                >
                  EST. 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director message */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">{t("director_title")}</span>
            <h2 className="section-title">{t("director_title")}</h2>
          </div>

          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              display: "grid",
              gridTemplateColumns: "280px 1fr",
            }}
          >
            {/* Photo */}
            <div
              style={{
                position: "relative",
                background: "var(--color-dark)",
                minHeight: 320,
              }}
            >
              <Image
                src="/director.png"
                alt={t("director_name")}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Quote */}
            <div style={{ padding: "48px 40px" }}>
              <div
                style={{
                  fontSize: 64,
                  lineHeight: 1,
                  color: "var(--color-primary)",
                  fontFamily: "Georgia, serif",
                  marginBottom: 16,
                  opacity: 0.4,
                }}
              >
                "
              </div>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: "var(--color-dark)",
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                {t("director_quote")}
              </blockquote>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-text-muted)", marginBottom: 32 }}>
                {t("director_body")}
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--color-dark)",
                  }}
                >
                  {t("director_name")}
                </div>
                <div style={{ fontSize: 13, color: "var(--color-primary)", fontWeight: 600, marginTop: 4 }}>
                  {t("director_role")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
