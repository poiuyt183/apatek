import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { CAREER_JOBS } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Apatek Vietnam — build maritime technology, enterprise software, and digital transformation solutions.",
};

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("careers");
  const contactHref = `/${locale}${locale === "vi" ? "/lien-he" : "/contact"}`;

  return (
    <div className="careers-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/hero-team.png"
            alt="Apatek Vietnam Careers"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">{t("hero_badge")}</span>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">{t("openings_label")}</span>
            <h2 className="section-title">{t("openings_title")}</h2>
            <p className="about-section-desc">{t("openings_desc")}</p>
          </div>

          <div className="careers-grid">
            {CAREER_JOBS.map((job) => (
              <article key={job.id} className="career-card">
                <div className="career-card-header">
                  <div className="career-card-icon">
                    <Briefcase size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="career-card-title">{t(`jobs.${job.id}.title`)}</h3>
                    <div className="career-card-tags">
                      <span>
                        <MapPin size={12} strokeWidth={2} />
                        {t(`locations.${job.location}`)}
                      </span>
                      <span>
                        <Clock size={12} strokeWidth={2} />
                        {t(`types.${job.type}`)}
                      </span>
                      <span>{t(`departments.${job.department}`)}</span>
                    </div>
                  </div>
                </div>

                <p className="career-card-summary">{t(`jobs.${job.id}.summary`)}</p>

                <ul className="career-card-requirements">
                  {[1, 2, 3].map((n) => (
                    <li key={n}>{t(`jobs.${job.id}.req${n}`)}</li>
                  ))}
                </ul>

                <Link href={contactHref} className="career-card-apply">
                  {t("apply")}
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="careers-benefits">
            <div className="careers-benefits-left">
              <span className="section-label">{t("benefits_label")}</span>
              <h2 className="section-title">{t("benefits_title")}</h2>
            </div>
            <div className="careers-benefits-grid">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="careers-benefit-item">
                  <h4>{t(`benefit${n}_title`)}</h4>
                  <p>{t(`benefit${n}_body`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
