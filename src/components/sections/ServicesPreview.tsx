"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTION_CATALOG, getCatalogHref, getSolutionsHref } from "@/data/solutions";
import { getCatalogLabels } from "@/lib/solution-labels";

export default function ServicesPreview() {
  const t = useTranslations("solutions");
  const tp = useTranslations("products");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const allHref = getSolutionsHref(locale);

  return (
    <section className="section" id="solutions-preview">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">{t("section_label")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 560, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
            {t("description")}
          </p>
        </div>

        <div className="services-grid">
          {SOLUTION_CATALOG.map((solution) => {
            const labels = getCatalogLabels(solution, t, tp);
            return (
              <Link
                key={solution.id}
                href={getCatalogHref(locale, solution)}
                className={`service-card${solution.featured ? " featured" : ""}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="service-icon">
                  <solution.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <span className="service-tag">{labels.tag}</span>
                <h3 className="service-title">{labels.title}</h3>
                <p className="service-body">{labels.excerpt}</p>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href={allHref} className="btn-primary" id="solutions-view-all">
            {tc("view_all")}
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
