"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import {
  SOLUTION_CATALOG,
  getCatalogHref,
  getSolutionsHref,
} from "@/data/solutions";
import { getCatalogLabels } from "@/lib/solution-labels";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "solutions", href: "/solutions", hasDropdown: true },
  { key: "partners", href: "/partners" },
  { key: "clients", href: "/clients" },
  { key: "news", href: "/news" },
  { key: "careers", href: "/careers" },
  { key: "vts", href: "/vts" },
] as const;

const VI_NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/gioi-thieu" },
  { key: "solutions", href: "/giai-phap", hasDropdown: true },
  { key: "partners", href: "/doi-tac" },
  { key: "clients", href: "/khach-hang" },
  { key: "news", href: "/tin-tuc" },
  { key: "careers", href: "/tuyen-dung" },
  { key: "vts", href: "/vts" },
] as const;

const DROPDOWN_CLOSE_DELAY = 180;

export default function Navbar() {
  const t = useTranslations("nav");
  const ts = useTranslations("solutions");
  const tp = useTranslations("products");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const navLinks = locale === "vi" ? VI_NAV_LINKS : NAV_LINKS;
  const solutionsHref = getSolutionsHref(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  const getHref = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  const isActive = (href: string) => {
    const full = getHref(href);
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(full);
  };

  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const openServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, DROPDOWN_CLOSE_DELAY);
  };

  const renderSolutionsDropdown = (linkHref: string) => (
    <div
      className={`navbar-dropdown-wrap${servicesOpen ? " is-open" : ""}`}
      onMouseEnter={openServices}
      onMouseLeave={closeServices}
    >
      <Link
        href={getHref(linkHref)}
        className={`navbar-link navbar-dropdown-trigger${isActive(linkHref) ? " active" : ""}`}
        aria-expanded={servicesOpen}
        aria-haspopup="true"
      >
        {t("solutions")}
        <ChevronDown size={14} strokeWidth={2} className="navbar-dropdown-chevron" />
      </Link>

      <div className="navbar-dropdown" role="menu">
        <div className="navbar-dropdown-header">{ts("section_label")}</div>
        <div className="navbar-dropdown-grid">
          {SOLUTION_CATALOG.map((solution) => {
            const labels = getCatalogLabels(solution, ts, tp);
            return (
            <Link
              key={solution.id}
              href={getCatalogHref(locale, solution)}
              className={`navbar-dropdown-item${solution.featured ? " featured" : ""}`}
              role="menuitem"
              onClick={() => setServicesOpen(false)}
            >
              <div className="navbar-dropdown-icon">
                <solution.Icon size={18} color="var(--color-primary)" strokeWidth={1.5} />
              </div>
              <div>
                <div className="navbar-dropdown-item-title">{labels.title}</div>
                <div className="navbar-dropdown-item-tag">{labels.tag}</div>
              </div>
            </Link>
            );
          })}
        </div>
        <div className="navbar-dropdown-footer">
          <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
            {SOLUTION_CATALOG.length} {locale === "vi" ? "giải pháp" : "solutions"}
          </span>
          <Link
            href={solutionsHref}
            className="navbar-dropdown-footer-link"
            onClick={() => setServicesOpen(false)}
          >
            {tc("view_all")}
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-logo-row">
          <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo_apatek.png"
              alt="Apatek Vietnam Logo"
              width={280}
              height={100}
              style={{ objectFit: "contain", height: "auto" }}
              priority
            />
          </Link>
        </div>

        <div className="navbar-nav-row">
          <div className="container navbar-inner">
            <Link href={`/${locale}`} className="navbar-logo-mobile">
              <Image
                src="/logo_apatek.png"
                alt="Apatek Vietnam Logo"
                width={140}
                height={46}
                style={{ objectFit: "contain", height: "auto" }}
                priority
              />
            </Link>

            <div className="lang-switcher">
              <button
                type="button"
                className={`lang-btn${locale === "en" ? " active" : ""}`}
                onClick={() => switchLocale("en")}
              >
                EN
              </button>
              <span className="lang-sep" />
              <button
                type="button"
                className={`lang-btn${locale === "vi" ? " active" : ""}`}
                onClick={() => switchLocale("vi")}
              >
                VI
              </button>
            </div>

            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.key}>
                  {"hasDropdown" in link && link.hasDropdown
                    ? renderSolutionsDropdown(link.href)
                    : (
                      <Link
                        href={getHref(link.href)}
                        className={`navbar-link${isActive(link.href) ? " active" : ""}`}
                      >
                        {t(link.key)}
                      </Link>
                    )}
                </li>
              ))}
            </ul>

            <div className="navbar-right">
              <Link href={contactHref} className="navbar-link navbar-cta">
                {t("contact")}
              </Link>
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen
                  ? <X size={24} color="var(--color-dark)" strokeWidth={2} />
                  : <Menu size={24} color="var(--color-dark)" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

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
          <X size={32} color="white" strokeWidth={1.5} />
        </button>

        {navLinks.map((link) => {
          if ("hasDropdown" in link && link.hasDropdown) {
            return (
              <div key={link.key} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button
                  type="button"
                  className={`mobile-services-toggle${mobileServicesOpen ? " is-open" : ""}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  {t(link.key)}
                  <ChevronDown size={20} strokeWidth={2} className="mobile-services-chevron" />
                </button>
                <div className={`mobile-services-submenu${mobileServicesOpen ? " is-open" : ""}`}>
                  <div className="mobile-services-submenu-inner">
                    <div className="mobile-services-list">
                      {SOLUTION_CATALOG.map((solution) => {
                        const labels = getCatalogLabels(solution, ts, tp);
                        return (
                        <Link
                          key={solution.id}
                          href={getCatalogHref(locale, solution)}
                          className="mobile-services-link"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          <solution.Icon size={16} color="var(--color-primary)" strokeWidth={1.5} />
                          <span style={{ flex: 1 }}>{labels.title}</span>
                          <span className="mobile-services-link-tag">{labels.tag}</span>
                        </Link>
                        );
                      })}
                      <Link
                        href={solutionsHref}
                        className="mobile-services-link"
                        style={{ fontWeight: 700, color: "var(--color-primary)" }}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {tc("view_all")}
                        <ArrowRight size={14} strokeWidth={2} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.key}
              href={getHref(link.href)}
              className="mobile-menu-link"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </Link>
          );
        })}

        <Link
          href={contactHref}
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

        <div className="lang-switcher" style={{ marginTop: 24, display: "flex" }}>
          <button
            type="button"
            className={`lang-btn${locale === "en" ? " active" : ""}`}
            onClick={() => { switchLocale("en"); setMobileOpen(false); }}
            style={{ color: locale === "en" ? "white" : "rgba(255,255,255,0.5)" }}
          >
            EN
          </button>
          <span className="lang-sep" style={{ background: "rgba(255,255,255,0.2)" }} />
          <button
            type="button"
            className={`lang-btn${locale === "vi" ? " active" : ""}`}
            onClick={() => { switchLocale("vi"); setMobileOpen(false); }}
            style={{ color: locale === "vi" ? "white" : "rgba(255,255,255,0.5)" }}
          >
            VI
          </button>
        </div>
      </div>
    </>
  );
}
