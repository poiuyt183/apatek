import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { NEWS_ARTICLES, getNewsHref } from "@/data/news";

export const metadata: Metadata = {
  title: "Tin tức & Sự kiện",
  description:
    "Tin tức mới nhất từ Apatek Vietnam — công nghệ hàng hải, chuyển đổi số và các giải pháp doanh nghiệp.",
};

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("news");
  const tc = await getTranslations("common");
  const articles = [...NEWS_ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="news-page">
      <section className="about-hero">
        <div className="about-hero-left">
          <span className="section-label">{t("section_label")}</span>
          <h1 className="about-hero-title">{t("title")}</h1>
          <p className="about-body-text">{t("description")}</p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/hero-team.png"
            alt="Apatek Vietnam News"
            fill
            sizes="52vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <span className="about-hero-badge">{t("hero_badge")}</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-grid news-grid-page">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={getNewsHref(locale, article.slug)}
                className="news-card"
              >
                <div className="news-card-image">
                  <Image
                    src={article.image}
                    alt={t(`articles.${article.slug}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <span className="news-card-category">{t(`categories.${article.category}`)}</span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString(
                        locale === "vi" ? "vi-VN" : "en-US",
                        { year: "numeric", month: "short", day: "numeric" },
                      )}
                    </time>
                  </div>
                  <h2 className="news-card-title">{t(`articles.${article.slug}.title`)}</h2>
                  <p className="news-card-excerpt">{t(`articles.${article.slug}.excerpt`)}</p>
                  <span className="news-card-link">
                    {tc("read_more")}
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
