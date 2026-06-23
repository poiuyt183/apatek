import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { getSolutionHref } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Client References",
  description: "Real feedback from organisations that have deployed Apatek solutions.",
};

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("solutions");
  const tr = await getTranslations("references");
  const tc = await getTranslations("common");

  const aisRaw = t.raw("items.ais-dredging.testimonials") as {
    client: string;
    author?: string;
    quote: string;
  }[];

  const aisLabel = t("items.ais-dredging.tag");
  const aisHref = getSolutionHref(locale, "ais-dredging");
  const solutionsHref = `/${locale}${locale === "vi" ? "/giai-phap" : "/solutions"}`;

  return (
    <div className="references-page">
      {/* ── Hero ── */}
      <section className="references-hero">
        <div className="container">
          <Link href={solutionsHref} className="sol-back">
            <ArrowLeft size={16} strokeWidth={2} />
            {tc("back")}
          </Link>
          <span className="section-label">{tr("section_label")}</span>
          <h1 className="references-title">{tr("title")}</h1>
          <p className="references-description">{tr("description")}</p>
        </div>
      </section>

      {/* ── AIS Testimonials ── */}
      <section className="section references-group">
        <div className="container">
          <div className="references-group-head">
            <span className="section-label">{aisLabel}</span>
            <Link href={aisHref} className="references-solution-link">
              {t("items.ais-dredging.title")} →
            </Link>
          </div>
          <div className="sol-testimonials-track">
            {aisRaw.map((item, idx) => (
              <blockquote key={item.client} className="sol-testimonial-card">
                <span className="sol-testimonial-num" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="sol-testimonial-quote">{item.quote}</p>
                <footer className="sol-testimonial-client">
                  <span className="sol-testimonial-dot" aria-hidden="true" />
                  {item.author ?? item.client}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
