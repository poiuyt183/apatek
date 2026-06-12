"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Radio,
  Radar,
  Camera,
  Mic2,
  Wind,
  Layers,
  Bell,
  FileText,
  TrendingUp,
  Server,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

// ─── Radar Animation Component ─────────────────────────────────────────────
function RadarPing({ delay = 0 }: { delay?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "1px solid rgba(238,28,39,0.5)",
        animation: `radarPing 3s ease-out ${delay}s infinite`,
      }}
    />
  );
}

function RadarDisplay() {
  const vessels = [
    { angle: 35, dist: 38, label: "MV HANOI", type: "cargo" },
    { angle: 110, dist: 60, label: "TK QUẢNG NINH", type: "tanker" },
    { angle: 200, dist: 45, label: "CV HAI PHONG", type: "container" },
    { angle: 290, dist: 55, label: "FB DANANG", type: "ferry" },
    { angle: 165, dist: 25, label: "PB 04", type: "pilot" },
  ];

  return (
    <div className="vts-radar-wrap">
      <div className="vts-radar">
        {/* Grid rings */}
        {[25, 50, 75, 100].map((r) => (
          <div
            key={r}
            style={{
              position: "absolute",
              inset: `${100 - r}%`,
              borderRadius: "50%",
              border: "1px solid rgba(238,28,39,0.12)",
              left: `${(100 - r) / 2}%`,
              top: `${(100 - r) / 2}%`,
              width: `${r}%`,
              height: `${r}%`,
            }}
          />
        ))}
        {/* Cross hairs */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", height: "1px", background: "rgba(238,28,39,0.1)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ height: "100%", width: "1px", background: "rgba(238,28,39,0.1)" }} />
        </div>
        {/* Sweep */}
        <div className="vts-radar-sweep" />
        {/* Ping rings */}
        <RadarPing delay={0} />
        <RadarPing delay={1} />
        <RadarPing delay={2} />
        {/* Vessel blips */}
        {vessels.map((v, i) => {
          const rad = (v.angle * Math.PI) / 180;
          const x = 50 + (v.dist / 2) * Math.sin(rad);
          const y = 50 - (v.dist / 2) * Math.cos(rad);
          return (
            <div
              key={i}
              className="vessel-blip"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="blip-dot" style={{ animationDelay: `${i * 0.4}s` }} />
              <div className="blip-label">{v.label}</div>
            </div>
          );
        })}
        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--color-primary)",
            boxShadow: "0 0 12px var(--color-primary)",
          }}
        />
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function VTSPage() {
  const t = useTranslations("vts");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ port: "", name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const TECH_STACK = [
    { Icon: Radio, key: "radar" as const },
    { Icon: Radar, key: "ais" as const },
    { Icon: Camera, key: "cctv" as const },
    { Icon: Mic2, key: "vhf" as const },
    { Icon: Wind, key: "env" as const },
  ];

  const CAPABILITIES = [
    { Icon: Layers, titleKey: "cap1_title" as const, bodyKey: "cap1_body" as const },
    { Icon: Bell, titleKey: "cap2_title" as const, bodyKey: "cap2_body" as const },
    { Icon: FileText, titleKey: "cap3_title" as const, bodyKey: "cap3_body" as const },
    { Icon: TrendingUp, titleKey: "cap4_title" as const, bodyKey: "cap4_body" as const },
    { Icon: Server, titleKey: "cap5_title" as const, bodyKey: "cap5_body" as const },
    { Icon: ShieldCheck, titleKey: "cap6_title" as const, bodyKey: "cap6_body" as const },
  ];

  const STATS = [
    { value: "10+", key: "stats_ports" as const },
    { value: "99.9%", key: "stats_uptime" as const },
    { value: "500+", key: "stats_vessels" as const },
    { value: "<2s", key: "stats_response" as const },
  ];

  const CLIENTS = [
    "Cục Hàng Hải Việt Nam",
    "Cảng vụ Hàng Hải Hải Phòng",
    "Cảng vụ Hàng Hải TP.HCM",
    "Cảng vụ Hàng Hải Quảng Ninh",
  ];

  return (
    <div style={{ background: "var(--color-dark)", minHeight: "100vh", color: "white" }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="vts-hero" id="vts-hero">
        <div className="vts-hero-bg" />

        <div className="container vts-hero-inner">
          {/* Left content */}
          <div
            className="vts-hero-content"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(28px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
            }}
          >
            {/* Badge */}
            <div className="vts-badge-row">
              <span className="vts-badge">{t("badge")}</span>
              <span className="vts-tag">{t("hero_tag")}</span>
            </div>

            {/* JRC Partnership */}
            <div className="vts-jrc-badge">
              <span style={{ fontSize: 11, opacity: 0.6, letterSpacing: "1.5px", fontWeight: 700 }}>
                {t("partner_label")}
              </span>
              <span className="jrc-logo">JRC</span>
              <span style={{ fontSize: 11, opacity: 0.4 }}>Japan Radio Co.</span>
            </div>

            <h1 className="vts-title">
              {t("title")}{" "}
              <span className="vts-title-highlight">{t("title_highlight")}</span>
            </h1>
            <p className="vts-subtitle">{t("subtitle")}</p>

            <div className="vts-actions">
              <button
                id="vts-cta-demo"
                className="btn-primary"
                onClick={() => document.getElementById("vts-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("cta_primary")}
                <ArrowRight size={16} strokeWidth={2} />
              </button>
              <button
                id="vts-cta-learn"
                className="btn-outline"
                onClick={() => document.getElementById("vts-overview")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("cta_secondary")}
                <ChevronDown size={16} strokeWidth={2} />
              </button>
            </div>

            {/* Quick stats */}
            <div className="vts-mini-stats">
              {STATS.map((s, i) => (
                <div key={i} className="vts-mini-stat">
                  <div className="vts-mini-stat-value">{s.value}</div>
                  <div className="vts-mini-stat-label">{t(s.key)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right radar */}
          <div
            className="vts-radar-container"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.3s",
            }}
          >
            <RadarDisplay />
            {/* Live status indicator */}
            <div className="vts-live-badge">
              <span className="vts-live-dot" />
              LIVE
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="vts-scroll-hint">
          <ChevronDown size={20} color="rgba(255,255,255,0.35)" />
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────── */}
      <section className="section" id="vts-overview" style={{ background: "var(--color-dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="vts-overview-grid">
            {/* Hero image */}
            <div className="vts-overview-image">
              <Image
                src="/vts-hero.png"
                alt="VTS Control Room"
                fill
                style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }}
              />
              <div className="vts-image-overlay" />
              <div className="vts-image-badge">
                <ShieldCheck size={16} color="var(--color-primary)" strokeWidth={2} />
                IALA Compliant · ISO27001
              </div>
            </div>

            {/* Text */}
            <div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: "var(--color-primary)",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                {t("section_label")}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px,3vw,40px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                {t("overview_title")}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 36,
                }}
              >
                {t("overview_body")}
              </p>

              {/* JRC card */}
              <div className="vts-partner-card">
                <div className="vts-partner-logo">JRC</div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "white",
                      marginBottom: 4,
                    }}
                  >
                    Japan Radio Co. (JRC)
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                    Official partner for maritime VTS hardware &amp; software integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────── */}
      <section
        className="section"
        style={{ background: "rgba(238,28,39,0.04)", borderTop: "1px solid rgba(238,28,39,0.12)", borderBottom: "1px solid rgba(238,28,39,0.12)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ color: "var(--color-primary)" }}>
              {t("section_label")}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px,2.5vw,36px)",
                fontWeight: 800,
                color: "white",
                marginBottom: 12,
              }}
            >
              {t("tech_title")}
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)" }}>{t("tech_subtitle")}</p>
          </div>

          <div className="vts-tech-grid">
            {TECH_STACK.map(({ Icon, key }, i) => (
              <div key={i} className="vts-tech-card" id={`tech-${key}`}>
                <div className="vts-tech-icon">
                  <Icon size={28} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <div className="vts-tech-name">{t(`tech_${key}` as "tech_radar")}</div>
                <div className="vts-tech-desc">{t(`tech_${key}_desc` as "tech_radar_desc")}</div>
              </div>
            ))}
          </div>

          {/* Data flow visual */}
          <div className="vts-data-flow">
            {["Radar", "AIS", "CCTV", "VHF", "ENV"].map((src, i) => (
              <div key={i} className="flow-source">{src}</div>
            ))}
            <div className="flow-arrow">
              <ArrowRight size={20} color="var(--color-primary)" />
            </div>
            <div className="flow-target">
              <div className="flow-target-dot" />
              Unified Operational Picture
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ color: "var(--color-primary)" }}>CAPABILITIES</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px,2.5vw,36px)",
                fontWeight: 800,
                color: "white",
              }}
            >
              {t("capabilities_title")}
            </h2>
          </div>

          <div className="vts-cap-grid">
            {CAPABILITIES.map(({ Icon, titleKey, bodyKey }, i) => (
              <div key={i} className="vts-cap-card" id={`cap-${i + 1}`}>
                <div className="vts-cap-num">0{i + 1}</div>
                <div className="vts-cap-icon">
                  <Icon size={22} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 className="vts-cap-title">{t(titleKey)}</h3>
                <p className="vts-cap-body">{t(bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS DEPLOYED ─────────────────────────── */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #0F1420 0%, #1A0F08 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="vts-clients-grid">
            <div>
              <span className="section-label" style={{ color: "var(--color-primary)" }}>REFERENCES</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px,2.5vw,36px)",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 20,
                  marginTop: 8,
                }}
              >
                {t("clients_title")}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", marginBottom: 36 }}>
                {t("clients_body")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CLIENTS.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <CheckCircle2 size={18} color="var(--color-primary)" strokeWidth={2} />
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="vts-stats-panel">
              {STATS.map((s, i) => (
                <div key={i} className="vts-stat-box" id={`vts-stat-${i + 1}`}>
                  <div className="vts-stat-val">{s.value}</div>
                  <div className="vts-stat-key">{t(s.key)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ─────────────────────────────────── */}
      <section
        id="vts-form"
        className="section"
        style={{
          background: "var(--color-dark)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="vts-form-grid">
            {/* CTA text */}
            <div>
              <span className="section-label" style={{ color: "var(--color-primary)" }}>GET STARTED</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px,3vw,44px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.15,
                  marginBottom: 20,
                  marginTop: 8,
                }}
              >
                {t("cta_title")}
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 36 }}>
                {t("cta_body")}
              </p>
              <a
                href="tel:0901239555"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                }}
              >
                <Phone size={18} strokeWidth={2} />
                0901 239 555
              </a>
            </div>

            {/* Form */}
            <div className="vts-demo-form">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "56px 24px" }}>
                  <CheckCircle2 size={56} color="var(--color-primary)" strokeWidth={1.5} style={{ margin: "0 auto 20px" }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "white",
                      marginBottom: 8,
                    }}
                  >
                    {t("form_success")}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>
                    We'll get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "white",
                      marginBottom: 24,
                    }}
                  >
                    {t("form_title")}
                  </h3>

                  <div className="form-group">
                    <label className="form-label" htmlFor="vts-port">{t("form_port")}</label>
                    <input
                      id="vts-port"
                      type="text"
                      className="form-input"
                      placeholder={t("form_port")}
                      value={formData.port}
                      onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vts-name">{t("form_name")}</label>
                      <input
                        id="vts-name"
                        type="text"
                        className="form-input"
                        placeholder={t("form_name")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vts-email">{t("form_email")}</label>
                      <input
                        id="vts-email"
                        type="email"
                        className="form-input"
                        placeholder="name@port.gov.vn"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="vts-message">{t("form_message")}</label>
                    <textarea
                      id="vts-message"
                      className="form-input"
                      rows={4}
                      placeholder={t("form_message")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    id="vts-submit"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px 24px" }}
                  >
                    {t("form_submit")}
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
