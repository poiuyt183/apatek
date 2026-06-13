import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import { Rocket, TrendingUp, Building2, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apatek Vietnam — pioneer technology company providing digital transformation, security, and enterprise optimization since 2019.",
};

const TIMELINE: { year: string; titleKey: string; bodyKey: string; Icon: LucideIcon }[] = [
  { year: "2019", titleKey: "2019_title", bodyKey: "2019_body", Icon: Rocket },
  { year: "2020–2023", titleKey: "2020_title", bodyKey: "2020_body", Icon: TrendingUp },
  { year: "2024", titleKey: "2024_title", bodyKey: "2024_body", Icon: Building2 },
  { year: "2025", titleKey: "2025_title", bodyKey: "2025_body", Icon: Bot },
];

const LEADERSHIP = [
  { key: "quan", initial: "Q", exp: "16" },
  { key: "dung", initial: "D", exp: "16" },
  { key: "hoa", initial: "H", exp: "11" },
  { key: "cu", initial: "C", exp: "15" },
];

const STAFF = [
  { key: "lam", initial: "L" },
  { key: "anh", initial: "A" },
  { key: "tuan", initial: "T" },
  { key: "binh", initial: "B" },
  { key: "thuc", initial: "T" },
  { key: "ha", initial: "H" },
  { key: "phi", initial: "P" },
  { key: "phuoc", initial: "P" },
];

type TeamMemberKey = "quan" | "dung" | "hoa" | "cu" | "lam" | "anh" | "tuan" | "binh" | "thuc" | "ha" | "phi" | "phuoc";

const AVATAR_COLORS = [
  "linear-gradient(135deg,#EE1C27,#CC1821)",
  "linear-gradient(135deg,#1A1A1A,#333)",
  "linear-gradient(135deg,#EE1C27,#F24A52)",
  "linear-gradient(135deg,#222,#444)",
];

export default function AboutPage() {
  const t = useTranslations("about");
  const th = useTranslations("history");
  const tt = useTranslations("team");

  const getMember = (key: TeamMemberKey) => ({
    name: tt(`members.${key}.name`),
    role: tt(`members.${key}.role`),
    exp: tt(`members.${key}.exp`),
  });

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label-white">{t("section_label")}</span>
          <h1 className="section-title section-title-white" style={{ maxWidth: 640 }}>
            {t("title")}
          </h1>
        </div>
      </section>

      {/* ── ABOUT BODY ──────────────────────────────── */}
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

      {/* ── DIRECTOR MESSAGE ─────────────────────────── */}
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
                &ldquo;
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

      {/* ── HISTORY TIMELINE ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">{th("section_label")}</span>
            <h2 className="section-title">{th("title")}</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: 560, margin: "16px auto 0", fontSize: 15, lineHeight: 1.7 }}>
              {th("description")}
            </p>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.Icon size={12} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{th(item.titleKey as "2019_title")}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-text-muted)" }}>
                      {th(item.bodyKey as "2019_body")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────── */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">{tt("section_label")}</span>
            <h2 className="section-title">{tt("leadership_title")}</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: 560, margin: "16px auto 0", fontSize: 15, lineHeight: 1.7 }}>
              {tt("description")}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {LEADERSHIP.map((m, i) => {
              const member = getMember(m.key as TeamMemberKey);
              return (
                <div key={m.key} id={`leader-${m.key}`} className="card team-card">
                  <div
                    className="team-avatar"
                    style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                  >
                    {m.initial}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--color-dark)",
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--color-primary)", fontWeight: 600 }}>
                    {member.role}
                  </p>
                  {m.exp && (
                    <div className="team-exp-badge">{m.exp} {tt("years_exp")}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STAFF ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">{tt("staff_title")}</span>
            <h2 className="section-title">{tt("staff_title")}</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {STAFF.map((m, i) => {
              const member = getMember(m.key as TeamMemberKey);
              return (
                <div key={m.key} id={`staff-${m.key}`} className="card team-card">
                  <div
                    className="team-avatar"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg,#EE1C27,#CC1821)"
                        : "linear-gradient(135deg,#1A1A1A,#333)",
                      width: 72,
                      height: 72,
                      fontSize: 24,
                    }}
                  >
                    {m.initial}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--color-dark)",
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.4 }}>
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
