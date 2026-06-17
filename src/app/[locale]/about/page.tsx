import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import { Rocket, TrendingUp, Building2, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

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

type TeamMemberKey = "quan" | "dung" | "hoa" | "cu";

export default function AboutPage() {
  const t = useTranslations("about");
  const th = useTranslations("history");
  const tt = useTranslations("team");
  const tn = useTranslations("nav");

  const getMember = (key: TeamMemberKey) => ({
    name: tt(`members.${key}.name`),
    role: tt(`members.${key}.role`),
    exp: tt(`members.${key}.exp`),
  });

  const facts = [
    { label: t("founded_year"), value: t("founded_value") },
    { label: t("hq_label"), value: t("hq_value") },
    { label: tn("partners"), value: "15+" },
    { label: tn("clients"), value: "50+" },
  ];

  return (
    <div className="about-page">
      {/* Split hero — same language as homepage */}
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("body1")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/hero-team.png"
            alt="Apatek Vietnam Team"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">EST. 2019</span>
        </div>
      </section>

      {/* Intro + quick facts */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <p className="about-body-text">{t("body2")}</p>
            </div>
            <div>
              <div className="divider-orange" />
              <p className="about-body-text" style={{ color: "var(--color-text)" }}>
                {t("director_body")}
              </p>
            </div>
          </div>

          <div className="about-facts-grid">
            {facts.map((fact) => (
              <div key={fact.label} className="about-fact-item">
                <div className="about-fact-value">{fact.value}</div>
                <div className="about-fact-label">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director message */}
      <section className="about-director-section">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("director_title")}</span>
            <h2 className="section-title">{t("director_title")}</h2>
          </div>

          <div className="about-director-card">
            <div className="about-director-photo">
              <Image
                src="/giamdoc.jpg"
                alt={t("director_name")}
                fill
                sizes="340px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about-director-content">
              <blockquote className="about-director-quote">
                {t("director_quote")}
              </blockquote>
              <div className="about-director-meta">
                <div className="about-director-name uppercase">{t("director_name")}</div>
                <div className="about-director-role uppercase">{t("director_role")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="section">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{th("section_label")}</span>
            <h2 className="section-title">{th("title")}</h2>
            <p className="about-section-desc">{th("description")}</p>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="timeline">
              {TIMELINE.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <item.Icon size={12} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{th(item.titleKey as "2019_title")}</h3>
                    <p className="about-timeline-body">{th(item.bodyKey as "2019_body")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-light">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{tt("section_label")}</span>
            <h2 className="section-title">{tt("leadership_title")}</h2>
            <p className="about-section-desc">{tt("description")}</p>
          </div>

          <div className="about-team-grid">
            {LEADERSHIP.map((m) => {
              const member = getMember(m.key as TeamMemberKey);
              return (
                <div key={m.key} id={`leader-${m.key}`} className="about-team-card">
                  <div className="about-team-avatar">{m.initial}</div>
                  <div className="about-team-name">{member.name}</div>
                  <div className="about-team-role">{member.role}</div>
                  {m.exp && (
                    <span className="about-team-exp">
                      {m.exp} {tt("years_exp")}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
