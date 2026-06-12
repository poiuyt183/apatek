"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ChevronRight } from "lucide-react";

const EN_LINKS = [
  { key: "about", href: "/en/about" },
  { key: "history", href: "/en/history" },
  { key: "vision", href: "/en/vision" },
  { key: "products", href: "/en/products-services" },
  { key: "team", href: "/en/team" },
  { key: "partners", href: "/en/partners" },
  { key: "clients", href: "/en/clients" },
  { key: "contact", href: "/en/contact" },
];

const SOCIAL_ICONS = [
  { Icon: Phone, href: "tel:0901239555", label: "Phone" },
  { Icon: Mail, href: "mailto:Quan.nguyen@apatek.com.vn", label: "Email" },
  { Icon: Globe, href: "https://www.apatek.com.vn", label: "Website" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tc = useTranslations("contact");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo">
              <span>APATEK</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400, fontSize: "16px" }}>
                {" "}VIETNAM
              </span>
            </div>
            <p className="footer-slogan">"{t("slogan")}"</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              {t("address_short")}
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.25s, background 0.25s",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">{t("quick_links")}</div>
            <ul className="footer-links">
              {EN_LINKS.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="footer-link" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <ChevronRight size={12} strokeWidth={2.5} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                    {tn(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-heading">{t("contact_info")}</div>
            <ul className="footer-links" style={{ gap: 14 }}>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <Phone size={15} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2, color: "var(--color-primary)" }} />
                <span>{tc("phone_value")}</span>
              </li>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <Mail size={15} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2, color: "var(--color-primary)" }} />
                <a href={`mailto:${tc("email_value")}`} className="footer-link">
                  {tc("email_value")}
                </a>
              </li>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <Globe size={15} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2, color: "var(--color-primary)" }} />
                <a href="https://www.apatek.com.vn" target="_blank" rel="noopener noreferrer" className="footer-link">
                  www.apatek.com.vn
                </a>
              </li>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <MapPin size={15} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2, color: "var(--color-primary)" }} />
                <span style={{ lineHeight: 1.5 }}>{t("address_short")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">{t("copyright")}</p>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/en" className="footer-link" style={{ fontSize: "13px" }}>English</a>
            <a href="/vi" className="footer-link" style={{ fontSize: "13px" }}>Tiếng Việt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
