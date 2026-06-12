import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the leadership and technical specialists at Apatek Vietnam.",
};

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

export default function TeamPage() {
  const t = useTranslations("team");

  const getMember = (key: TeamMemberKey) => {
    return {
      name: t(`members.${key}.name`),
      role: t(`members.${key}.role`),
      exp: t(`members.${key}.exp`),
    };
  };

  const COLORS = [
    "linear-gradient(135deg,#EE1C27,#CC1821)",
    "linear-gradient(135deg,#1A1A1A,#333)",
    "linear-gradient(135deg,#EE1C27,#F24A52)",
    "linear-gradient(135deg,#222,#444)",
  ];

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

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">{t("leadership_title")}</span>
            <h2 className="section-title">{t("leadership_title")}</h2>
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
                  {/* Avatar */}
                  <div
                    className="team-avatar"
                    style={{ background: COLORS[i % COLORS.length] }}
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
                    <div className="team-exp-badge">{m.exp} {t("years_exp")}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">{t("staff_title")}</span>
            <h2 className="section-title">{t("staff_title")}</h2>
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
