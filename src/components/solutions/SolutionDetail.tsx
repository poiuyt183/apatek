import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import type { DetailSolutionItem } from "@/data/solutions";
import { getSolutionsHref } from "@/data/solutions";

function getReferencesHref(locale: string) {
  return `/${locale}/references`;
}

type Props = {
  locale: string;
  solution: DetailSolutionItem;
};

export default async function SolutionDetail({ locale, solution }: Props) {
  const t = await getTranslations("solutions");
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tr = await getTranslations("references");
  const id = solution.id;
  const prefix = `items.${id}`;
  const isAis = id === "ais-dredging";
  const isVts = id === "vts";
  const hasCinematicHero = isAis || isVts;
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const features = Array.from({ length: solution.featureCount }, (_, i) => ({
    num: String(i + 1).padStart(2, "0"),
    Icon: solution.featureIcons[i],
    title: t(`${prefix}.feature${i + 1}_title`),
    body: t(`${prefix}.feature${i + 1}_body`),
  }));

  const benefits = Array.from({ length: solution.benefitCount }, (_, i) => ({
    Icon: solution.benefitIcons[i],
    title: t(`${prefix}.benefit${i + 1}_title`),
    body: t(`${prefix}.benefit${i + 1}_body`),
  }));

  const testimonials = t.raw(`${prefix}.testimonials`) as { client: string; author?: string; quote: string }[];

  return (
    <div className={`solution-detail-page solution-detail-page--${id}`}>
      {hasCinematicHero ? (
        <section className={`sol-hero ${isAis ? "sol-hero--ais" : "sol-hero--vts"}`}>
          <div className="sol-hero-media">
            <Image
              src={solution.image}
              alt={t(`${prefix}.title`)}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="sol-hero-overlay" />
            <div className="sol-hero-grid" aria-hidden="true" />
          </div>
          <div className="sol-hero-content">
            <Link href={getSolutionsHref(locale)} className="sol-back sol-back--light">
              <ArrowLeft size={16} strokeWidth={2} />
              {tc("back")}
            </Link>
            <span className="sol-hero-tag">{t(`${prefix}.tag`)}</span>
            <h1 className="sol-hero-title">{t(`${prefix}.title`)}</h1>
            <p className="sol-hero-subtitle">{t(`${prefix}.subtitle`)}</p>
          </div>
        </section>
      ) : (
        <section className="sol-hero sol-hero--dms">
          <div className="sol-hero-dms-left">
            <Link href={getSolutionsHref(locale)} className="sol-back">
              <ArrowLeft size={16} strokeWidth={2} />
              {tc("back")}
            </Link>
            <span className="section-label">{t(`${prefix}.tag`)}</span>
            <h1 className="sol-hero-title sol-hero-title--dark">{t(`${prefix}.title`)}</h1>
            <p className="sol-hero-subtitle sol-hero-subtitle--dark">{t(`${prefix}.subtitle`)}</p>
            <Link href={contactHref} className="sol-hero-cta">
              {tn("contact")}
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          <div className="sol-hero-dms-right">
            <Image
              src={solution.image}
              alt={t(`${prefix}.title`)}
              fill
              sizes="52vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <span className="sol-hero-stripe" aria-hidden="true" />
          </div>
        </section>
      )}

      <section className="section sol-overview">
        <div className="container">
          <div className="sol-overview-grid">
            <div className="sol-overview-lead">
              <span className="section-label">{t("section_label")}</span>
              <p>{t(`${prefix}.intro1`)}</p>
            </div>
            <div className="sol-overview-rest">
              <p>{t(`${prefix}.intro2`)}</p>
              <p>{t(`${prefix}.intro3`)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`sol-statement${hasCinematicHero ? " sol-statement--dark" : ""}`}>
        <div className="container">
          <blockquote className="sol-statement-inner">
            <p>{t(`${prefix}.tagline1`)}</p>
            <p className="sol-statement-accent">{t(`${prefix}.tagline2`)}</p>
          </blockquote>
        </div>
      </section>

      <section className={`section${hasCinematicHero ? " section-light" : ""} sol-value`}>
        <div className="container">
          <div className="sol-value-card">
            <div className="sol-value-icon">
              <solution.Icon size={24} color="var(--color-primary)" strokeWidth={1.5} />
            </div>
            <div className="sol-value-text">
              <p>{t(`${prefix}.section1`)}</p>
              <p>{t(`${prefix}.section2`)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section${hasCinematicHero ? "" : " section-light"} sol-features`}>
        <div className="container">
          <div className="sol-section-head">
            <span className="section-label">{t(`${prefix}.features_label`)}</span>
            <h2 className="section-title">{t(`${prefix}.features_title`)}</h2>
          </div>

          {isAis ? (
            <div className="sol-timeline">
              {features.map((f) => (
                <article key={f.num} className="sol-timeline-item">
                  <div className="sol-timeline-marker">
                    <f.Icon size={18} color="var(--color-primary)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="sol-timeline-num">{f.num}</span>
                    <h3 className="sol-timeline-title">{f.title}</h3>
                    <p className="sol-timeline-body">{f.body}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="sol-features-grid">
              {features.map((f) => (
                <article key={f.num} className="sol-feature-card">
                  <div className="sol-feature-head">
                    <span className="sol-feature-num">{f.num}</span>
                    <div className="sol-feature-icon">
                      <f.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="sol-feature-title">{f.title}</h3>
                  <p className="sol-feature-body">{f.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={`section${hasCinematicHero ? " section-light" : ""} sol-benefits`}>
        <div className="container">
          <div className="sol-section-head">
            <span className="section-label">{t(`${prefix}.benefits_label`)}</span>
            <h2 className="section-title">{t(`${prefix}.benefits_title`)}</h2>
          </div>

          <div className={`sol-benefits-grid${hasCinematicHero ? " sol-benefits-grid--ais" : " sol-benefits-grid--dms"}`}>
            {benefits.map((b, i) => (
              <div key={i} className="sol-benefit-card">
                <div className="sol-benefit-icon">
                  <b.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 className="sol-benefit-title">{b.title}</h3>
                <p className="sol-benefit-body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!isAis && testimonials.length > 0 && (
        <section className="sol-testimonials">
          <div className="sol-testimonials-header">
            <div className="container">
              <span className="section-label section-label--light">{t(`${prefix}.testimonials_label`)}</span>
              <h2 className="sol-testimonials-title">{t(`${prefix}.testimonials_title`)}</h2>
            </div>
          </div>
          <div className="container">
          <div className="sol-testimonials-track">
            {testimonials.map((item, idx) => (
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
      )}

      {isAis && (
        <section className="sol-ref-cta">
          <div className="container">
            <div className="sol-ref-cta-inner">
              <div>
                <span className="sol-ref-cta-label">{tr("cta_label")}</span>
                <h2 className="sol-ref-cta-title">{tr("cta_title")}</h2>
                <p className="sol-ref-cta-body">{tr("cta_body")}</p>
              </div>
              <Link href={getReferencesHref(locale)} className="sol-ref-cta-btn">
                {tr("cta_button")}
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="sol-closing">
        <div className="container">
          <div className="sol-closing-grid">
            <div>
              <span className="sol-closing-tag">{t(`${prefix}.tag`)}</span>
              <h2 className="sol-closing-title">{t(`${prefix}.closing_title`)}</h2>
            </div>
            <div>
              <p className="sol-closing-body">{t(`${prefix}.closing_body`)}</p>
              {id === "dms" && (
                <p className="sol-closing-body">{t(`${prefix}.closing_extra`)}</p>
              )}
              <Link href={contactHref} className="sol-closing-cta">
                {tn("contact")}
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
