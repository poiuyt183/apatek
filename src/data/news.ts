export type NewsArticle = {
  slug: string;
  date: string;
  category: "maritime" | "technology" | "innovation";
  image: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "vts-port-authorities-2025",
    date: "2025-03-12",
    category: "maritime",
    image: "/cang-bien.jpg",
  },
  {
    slug: "digital-transformation-tax",
    date: "2025-01-28",
    category: "technology",
    image: "/hero-team.png",
  },
  {
    slug: "ai-big-data-enterprise",
    date: "2024-11-15",
    category: "innovation",
    image: "/cang-bien.jpg",
  },
];

export function getNewsBasePath(locale: string) {
  return locale === "vi" ? "/tin-tuc" : "/news";
}

export function getNewsHref(locale: string, slug?: string) {
  const base = getNewsBasePath(locale);
  if (!slug) return `/${locale}${base}`;
  return `/${locale}${base}/${slug}`;
}

export function getArticleBySlug(slug: string) {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}

export function getLatestArticles(limit = 3) {
  return [...NEWS_ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
