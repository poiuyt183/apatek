import {
  Activity,
  Archive,
  BarChart3,
  BellRing,
  Building2,
  ClipboardList,
  Database,
  Eye,
  Lock,
  MapPinned,
  Maximize2,
  MousePointerClick,
  Network,
  PackageSearch,
  Route,
  Search,
  Shield,
  ShieldCheck,
  Ship,
  Smartphone,
  BadgePercent,
  LineChart,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type DetailSolutionId = "ais-dredging" | "dms" | "vts";

export type CatalogSolutionId = DetailSolutionId | "security";

type CatalogI18n =
  | { ns: "solutions"; itemId: DetailSolutionId }
  | { ns: "products"; prefix: "p3" };

type CatalogLink =
  | { kind: "detail"; slug: string }
  | { kind: "external"; path: string }
  | { kind: "anchor"; anchorId: string };

export type SolutionCatalogItem = {
  id: CatalogSolutionId;
  Icon: LucideIcon;
  image: string;
  featured?: boolean;
  link: CatalogLink;
  i18n: CatalogI18n;
};

export type DetailSolutionItem = {
  id: DetailSolutionId;
  slug: string;
  Icon: LucideIcon;
  image: string;
  featureCount: number;
  benefitCount: number;
  featureIcons: LucideIcon[];
  benefitIcons: LucideIcon[];
  featured?: boolean;
};

export const SOLUTION_CATALOG: SolutionCatalogItem[] = [
  {
    id: "vts",
    Icon: Ship,
    image: "/taubien.avif",
    featured: true,
    link: { kind: "detail", slug: "vts" },
    i18n: { ns: "solutions", itemId: "vts" },
  },
  {
    id: "dms",
    Icon: Network,
    image: "/hero-team.png",
    link: { kind: "detail", slug: "dms" },
    i18n: { ns: "solutions", itemId: "dms" },
  },
  {
    id: "ais-dredging",
    Icon: Search,
    image: "/cang-bien.jpg",
    link: { kind: "detail", slug: "ais-dredging" },
    i18n: { ns: "solutions", itemId: "ais-dredging" },
  },
  {
    id: "security",
    Icon: ShieldCheck,
    image: "/cang-bien.jpg",
    link: { kind: "anchor", anchorId: "security" },
    i18n: { ns: "products", prefix: "p3" },
  },
];

export const DETAIL_SOLUTIONS: DetailSolutionItem[] = [
  {
    id: "vts",
    slug: "vts",
    Icon: Ship,
    image: "/taubien.avif",
    featureCount: 4,
    benefitCount: 4,
    featureIcons: [Activity, Eye, BellRing, ClipboardList],
    benefitIcons: [Shield, Maximize2, Lock, MousePointerClick],
    featured: true,
  },
  {
    id: "ais-dredging",
    slug: "ais-dredging",
    Icon: Search,
    image: "/cang-bien.jpg",
    featureCount: 5,
    benefitCount: 4,
    featureIcons: [Activity, MapPinned, Route, BellRing, Archive],
    benefitIcons: [Shield, Maximize2, Lock, MousePointerClick],
  },
  {
    id: "dms",
    slug: "dms",
    Icon: Network,
    image: "/hero-team.png",
    featureCount: 6,
    benefitCount: 6,
    featureIcons: [Building2, ClipboardList, PackageSearch, Smartphone, BadgePercent, LineChart],
    benefitIcons: [Eye, Zap, PackageSearch, Database, TrendingUp, Network],
  },
];

export function getSolutionsBasePath(locale: string) {
  return locale === "vi" ? "/giai-phap" : "/solutions";
}

export function getSolutionsHref(locale: string) {
  return `/${locale}${getSolutionsBasePath(locale)}`;
}

export function getSolutionHref(locale: string, slug: string) {
  return `/${locale}${getSolutionsBasePath(locale)}/${slug}`;
}

export function getCatalogHref(locale: string, item: SolutionCatalogItem) {
  const base = `/${locale}`;
  switch (item.link.kind) {
    case "detail":
      return getSolutionHref(locale, item.link.slug);
    case "external":
      return `${base}${item.link.path}`;
    case "anchor":
      return `${base}${getSolutionsBasePath(locale)}#${item.link.anchorId}`;
  }
}

export function getSolutionBySlug(slug: string) {
  return DETAIL_SOLUTIONS.find((s) => s.slug === slug);
}
