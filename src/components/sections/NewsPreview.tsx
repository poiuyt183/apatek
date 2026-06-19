import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestArticles, getNewsHref } from "@/data/news";

export default function NewsPreview({ locale }: { locale: string }) {
  const t = useTranslations("news");
  const tc = useTranslations("common");
  const articles = getLatestArticles(3);
  const newsHref = getNewsHref(locale);

  return (
    <section className="section" id="news-preview">
      <div className="container">
        <div className="news-preview-header">
          <span className="section-label">{t("section_label")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p className="news-preview-desc">{t("description")}</p>
        </div>

        <div className="news-grid">
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
                  <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
                </div>
                <h3 className="news-card-title">{t(`articles.${article.slug}.title`)}</h3>
                <p className="news-card-excerpt">{t(`articles.${article.slug}.excerpt`)}</p>
                <span className="news-card-link">
                  {tc("read_more")}
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="news-preview-footer">
          <Link href={newsHref} className="btn-outline-dark">
            {tc("view_all")}
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
