"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin, ChevronRight } from "lucide-react";

const EN_LINKS = [
  { key: "about", href: "/en/about" },
  { key: "solutions", href: "/en/solutions" },
  { key: "partners", href: "/en/partners" },
  { key: "clients", href: "/en/clients" },
  { key: "contact", href: "/en/contact" },
];

const SOCIAL_ICONS = [
  { Icon: Phone, href: "tel:0901239555", label: "Phone" },
  { Icon: Mail, href: "mailto:Quan.nguyen@apatek.com.vn", label: "Email" },
  { Icon: Globe, href: "https://www.apatek.com.vn", label: "Website" },
];

const ICON_COLOR = "rgba(255,255,255,0.35)";

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
            <div style={{ marginBottom: 16 }}>
              <Image
                src="/logo_apatek.png"
                alt="Apatek Vietnam Logo"
                width={130}
                height={38}
                style={{ objectFit: "contain", height: "auto" }}
                priority
              />
            </div>
            <p className="footer-slogan">"{t("slogan")}"</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
              {t("address_short")}
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  <Icon size={15} strokeWidth={1.5} />
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
                    <ChevronRight size={11} strokeWidth={2} style={{ color: ICON_COLOR, flexShrink: 0 }} />
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
                <Phone size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 3, color: ICON_COLOR }} />
                <span>{tc("phone_value")}</span>
              </li>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <Mail size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 3, color: ICON_COLOR }} />
                <a href={`mailto:${tc("email_value")}`} className="footer-link">
                  {tc("email_value")}
                </a>
              </li>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <Globe size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 3, color: ICON_COLOR }} />
                <a href="https://www.apatek.com.vn" target="_blank" rel="noopener noreferrer" className="footer-link">
                  www.apatek.com.vn
                </a>
              </li>
              <li style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: "14px", alignItems: "flex-start" }}>
                <MapPin size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 3, color: ICON_COLOR }} />
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
