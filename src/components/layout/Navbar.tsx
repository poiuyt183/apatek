"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "history", href: "/history" },
  { key: "vision", href: "/vision" },
  { key: "products", href: "/products-services" },
  { key: "team", href: "/team" },
  { key: "partners", href: "/partners" },
  { key: "clients", href: "/clients" },
];

const VI_NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/gioi-thieu" },
  { key: "history", href: "/lich-su" },
  { key: "vision", href: "/tam-nhin" },
  { key: "products", href: "/san-pham-dich-vu" },
  { key: "team", href: "/doi-ngu" },
  { key: "partners", href: "/doi-tac" },
  { key: "clients", href: "/khach-hang" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const navLinks = locale === "vi" ? VI_NAV_LINKS : NAV_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    // Simple locale swap — redirect to home when switching
    router.push(`/${newLocale}`);
  };

  const getHref = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  const isActive = (href: string) => {
    const full = getHref(href);
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(full);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link href={`/${locale}`} className="navbar-logo" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo_apatek.png"
              alt="Apatek Vietnam Logo"
              width={180}
              height={60}
              style={{ objectFit: "contain", height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={getHref(link.href)}
                  className={`navbar-link${isActive(link.href) ? " active" : ""}`}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: lang switcher + CTA */}
          <div className="navbar-right">
            <div className="lang-switcher">
              <button
                type="button"
                className={`lang-btn${locale === "en" ? " active" : ""}`}
                onClick={() => switchLocale("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn${locale === "vi" ? " active" : ""}`}
                onClick={() => switchLocale("vi")}
              >
                VI
              </button>
            </div>
            <Link
              href={`/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`}
              className="navbar-link navbar-cta"
            >
              {t("contact")}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X size={24} color="white" strokeWidth={2} />
                : <Menu size={24} color="white" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close menu"
        >
          {/* <X size={32} color="white" strokeWidth={1.5} /> */}
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={getHref(link.href)}
            className="mobile-menu-link"
            onClick={() => setMobileOpen(false)}
          >
            {t(link.key)}
          </Link>
        ))}

        <Link
          href={`/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`}
          onClick={() => setMobileOpen(false)}
          style={{
            marginTop: 16,
            background: "var(--color-primary)",
            color: "white",
            padding: "14px 32px",
            borderRadius: "var(--radius)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          {t("contact")}
        </Link>

        <div className="lang-switcher" style={{ marginTop: 24 }}>
          <button
            type="button"
            className={`lang-btn${locale === "en" ? " active" : ""}`}
            onClick={() => { switchLocale("en"); setMobileOpen(false); }}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn${locale === "vi" ? " active" : ""}`}
            onClick={() => { switchLocale("vi"); setMobileOpen(false); }}
          >
            VI
          </button>
        </div>
      </div>
    </>
  );
}
