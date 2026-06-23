import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  BarChart3,
  BellRing,
  ClipboardList,
  Eye,
  Route,
  MapPinned,
  Shield,
  Maximize2,
  Lock,
  MousePointerClick,
} from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { getSolutionsHref } from "@/data/solutions";

function getReferencesHref(locale: string) {
  return `/${locale}/references`;
}

const PORTS_ICONS = [Activity, BarChart3, BellRing, ClipboardList];
const MARITIME_ICONS = [Eye, Route, MapPinned, ClipboardList];
const BENEFIT_ICONS = [Shield, Maximize2, Lock, MousePointerClick];

type Props = {
  locale: string;
};

export default async function VTSDetail({ locale }: Props) {
  const t = await getTranslations("solutions");
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tr = await getTranslations("references");
  const p = "items.vts";
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  const portsFeatures = Array.from({ length: 4 }, (_, i) => ({
    num: String(i + 1).padStart(2, "0"),
    Icon: PORTS_ICONS[i],
    title: t(`${p}.ports_feature${i + 1}_title`),
    body: t(`${p}.ports_feature${i + 1}_body`),
  }));

  const maritimeFeatures = Array.from({ length: 4 }, (_, i) => ({
    num: String(i + 1).padStart(2, "0"),
    Icon: MARITIME_ICONS[i],
    title: t(`${p}.maritime_feature${i + 1}_title`),
    body: t(`${p}.maritime_feature${i + 1}_body`),
  }));

  const benefits = Array.from({ length: 4 }, (_, i) => ({
    Icon: BENEFIT_ICONS[i],
    title: t(`${p}.benefit${i + 1}_title`),
    body: t(`${p}.benefit${i + 1}_body`),
  }));

  const testimonials = t.raw(`${p}.testimonials`) as { client: string; author?: string; quote: string }[];

  return (
    <div className="solution-detail-page solution-detail-page--vts">
      {/* ── Hero ── */}
      <section className="sol-hero sol-hero--vts">
        <div className="sol-hero-media">
          <Image
            src="/taubien.avif"
            alt={t(`${p}.title`)}
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
          <span className="sol-hero-tag">{t(`${p}.tag`)}</span>
          <h1 className="sol-hero-title">{t(`${p}.title`)}</h1>
          <p className="sol-hero-subtitle">{t(`${p}.subtitle`)}</p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="section sol-overview">
        <div className="container">
          <div className="sol-overview-grid">
            <div className="sol-overview-lead">
              <span className="section-label">{t("section_label")}</span>
              <p>{t(`${p}.intro1`)}</p>
            </div>
            <div className="sol-overview-rest">
              <p>{t(`${p}.intro2`)}</p>
              <p>{t(`${p}.intro3`)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section className="sol-statement sol-statement--dark">
        <div className="container">
          <blockquote className="sol-statement-inner">
            <p>{t(`${p}.tagline1`)}</p>
            <p className="sol-statement-accent">{t(`${p}.tagline2`)}</p>
          </blockquote>
        </div>
      </section>

      {/* ── Sub-solution 1: VTS for Ports ── */}
      <section className="section vts-subsection vts-subsection--ports">
        <div className="container">
          <div className="vts-sub-head">
            <div className="vts-sub-head-text">
              <span className="section-label">{t(`${p}.ports_label`)}</span>
              <h2 className="section-title">{t(`${p}.ports_title`)}</h2>
              <p className="vts-sub-intro">{t(`${p}.ports_intro`)}</p>
            </div>
          </div>
          <div className="vts-features-grid">
            {portsFeatures.map((f) => (
              <article key={f.num} className="vts-feature-card">
                <div className="vts-feature-head">
                  <span className="vts-feature-num">{f.num}</span>
                  <div className="vts-feature-icon">
                    <f.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="vts-feature-title">{f.title}</h3>
                <p className="vts-feature-body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sub-solution 2: VTS for Maritime Authorities ── */}
      <section className="section section-light vts-subsection vts-subsection--maritime">
        <div className="container">
          <div className="vts-sub-head">
            <div className="vts-sub-head-text">
              <span className="section-label">{t(`${p}.maritime_label`)}</span>
              <h2 className="section-title">{t(`${p}.maritime_title`)}</h2>
              <p className="vts-sub-intro">{t(`${p}.maritime_intro`)}</p>
            </div>
          </div>
          <div className="vts-features-grid">
            {maritimeFeatures.map((f) => (
              <article key={f.num} className="vts-feature-card vts-feature-card--alt">
                <div className="vts-feature-head">
                  <span className="vts-feature-num">{f.num}</span>
                  <div className="vts-feature-icon">
                    <f.Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="vts-feature-title">{f.title}</h3>
                <p className="vts-feature-body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Benefits ── */}
      <section className="section sol-benefits">
        <div className="container">
          <div className="sol-section-head">
            <span className="section-label">{t(`${p}.benefits_label`)}</span>
            <h2 className="section-title">{t(`${p}.benefits_title`)}</h2>
          </div>
          <div className="sol-benefits-grid sol-benefits-grid--ais">
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

      {/* ── Testimonials ── */}
      {testimonials.length > 0 && (
        <section className="sol-testimonials">
          <div className="sol-testimonials-header">
            <div className="container">
              <span className="section-label section-label--light">{t(`${p}.testimonials_label`)}</span>
              <h2 className="sol-testimonials-title">{t(`${p}.testimonials_title`)}</h2>
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

      {/* ── View All References ── */}
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

      {/* ── Closing CTA ── */}
      <section className="sol-closing">
        <div className="container">
          <div className="sol-closing-grid">
            <div>
              <span className="sol-closing-tag">{t(`${p}.tag`)}</span>
              <h2 className="sol-closing-title">{t(`${p}.closing_title`)}</h2>
            </div>
            <div>
              <p className="sol-closing-body">{t(`${p}.closing_body`)}</p>
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
