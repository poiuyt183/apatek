import { Network, Search, ShieldCheck, Ship, type LucideIcon } from "lucide-react";

export type ServiceItem = {
  anchorId: string;
  Icon: LucideIcon;
  titleKey: "p1_title" | "p2_title" | "p3_title" | "p4_title";
  tagKey: "p1_tag" | "p2_tag" | "p3_tag" | "p4_tag";
  bodyKey: "p1_body" | "p2_body" | "p3_body" | "p4_body";
  featured?: boolean;
};

export const SERVICES: ServiceItem[] = [
  {
    anchorId: "product-4",
    Icon: Ship,
    titleKey: "p4_title",
    tagKey: "p4_tag",
    bodyKey: "p4_body",
    featured: true,
  },
  {
    anchorId: "product-1",
    Icon: Network,
    titleKey: "p1_title",
    tagKey: "p1_tag",
    bodyKey: "p1_body",
  },
  {
    anchorId: "product-2",
    Icon: Search,
    titleKey: "p2_title",
    tagKey: "p2_tag",
    bodyKey: "p2_body",
  },
  {
    anchorId: "product-3",
    Icon: ShieldCheck,
    titleKey: "p3_title",
    tagKey: "p3_tag",
    bodyKey: "p3_body",
  },
];

export function getProductsBasePath(locale: string) {
  return locale === "vi" ? "/san-pham-dich-vu" : "/products-services";
}

export function getServiceHref(locale: string, anchorId: string) {
  return `/${locale}${getProductsBasePath(locale)}#${anchorId}`;
}
