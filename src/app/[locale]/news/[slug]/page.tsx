import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { NEWS_ARTICLES, getArticleBySlug, getNewsHref } from "@/data/news";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return NEWS_ARTICLES.flatMap((article) =>
    ["en", "vi"].map((locale) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "News" };
  return { title: slug.replace(/-/g, " ") };
}

export default async function NewsDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations("news");
  const tc = await getTranslations("common");

  return (
    <div className="news-detail-page">
      <section className="news-detail-hero">
        <div className="container">
          <Link href={getNewsHref(locale)} className="news-detail-back">
            <ArrowLeft size={16} strokeWidth={2} />
            {tc("back")}
          </Link>
          <div className="news-detail-meta">
            <span className="news-card-category">{t(`categories.${article.category}`)}</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString(
                locale === "vi" ? "vi-VN" : "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </time>
          </div>
          <h1 className="news-detail-title">{t(`articles.${slug}.title`)}</h1>
        </div>
      </section>

      <section className="news-detail-cover">
        <div className="container">
          <div className="news-detail-image">
            <Image
              src={article.image}
              alt={t(`articles.${slug}.title`)}
              fill
              sizes="(max-width: 960px) 100vw, 960px"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-detail-body">
            <p className="about-body-text">{t(`articles.${slug}.body1`)}</p>
            <p className="about-body-text">{t(`articles.${slug}.body2`)}</p>
            <p className="about-body-text">{t(`articles.${slug}.body3`)}</p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
