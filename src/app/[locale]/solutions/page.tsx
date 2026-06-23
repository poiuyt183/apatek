import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { SOLUTION_CATALOG, getCatalogHref } from "@/data/solutions";
import { getListingAnchorId, getListingLabels } from "@/lib/solution-labels";

export const metadata: Metadata = {
  title: "Giải pháp",
  description:
    "Các giải pháp công nghệ của Apatek: VTS giám sát giao thông hàng hải, DMS quản lý kênh phân phối, AIS giám sát nạo vét và tích hợp hệ thống an ninh.",
  openGraph: {
    description:
      "VTS giám sát giao thông hàng hải, DMS quản lý kênh phân phối, AIS giám sát nạo vét và tích hợp hệ thống an ninh.",
  },
};

function SolutionCard({
  className,
  id,
  href,
  children,
}: {
  className: string;
  id?: string;
  href?: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} className={className} style={{ textDecoration: "none", color: "inherit" }}>
        {children}
      </Link>
    );
  }

  return (
    <article id={id} className={className}>
      {children}
    </article>
  );
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("solutions");
  const tp = await getTranslations("products");

  return (
    <div className="products-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/cang-bien.jpg"
            alt="Apatek Vietnam Solutions"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">Apatek Vietnam</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-detail-grid">
            {SOLUTION_CATALOG.map((solution) => {
              const labels = getListingLabels(solution, tp);
              const anchorId = getListingAnchorId(solution);
              const href =
                solution.link.kind === "anchor"
                  ? undefined
                  : getCatalogHref(locale, solution);

              return (
                <SolutionCard
                  key={solution.id}
                  href={href}
                  id={solution.link.kind === "anchor" ? anchorId : undefined}
                  className={`product-detail-card${solution.featured ? " featured" : ""}`}
                >
                  <div className="product-detail-icon">
                    <solution.Icon size={22} color="var(--color-primary)" strokeWidth={1.5} />
                  </div>
                  <span className="service-tag">{labels.tag}</span>
                  <h2 className="product-detail-title">{labels.title}</h2>
                  <p className="product-detail-body">{labels.body}</p>
                  <ul className="product-features">
                    {labels.features.map((feature) => (
                      <li key={feature} className="product-feature-item">
                        <CheckCircle2
                          size={14}
                          color="var(--color-primary)"
                          strokeWidth={2}
                          style={{ flexShrink: 0 }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </SolutionCard>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
