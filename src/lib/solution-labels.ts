import type { CatalogSolutionId, SolutionCatalogItem } from "@/data/solutions";

type SolutionsT = (key: string) => string;
type ProductsT = {
  (key: string): string;
  raw(key: string): unknown;
};

const CATALOG_PRODUCT_PREFIX: Record<CatalogSolutionId, "p1" | "p2" | "p3" | "p4"> = {
  vts: "p4",
  dms: "p1",
  "ais-dredging": "p2",
  security: "p3",
};

export function getCatalogLabels(
  item: SolutionCatalogItem,
  tSolutions: SolutionsT,
  tProducts: ProductsT,
) {
  if (item.i18n.ns === "solutions") {
    const id = item.i18n.itemId;
    return {
      tag: tSolutions(`items.${id}.tag`),
      title: tSolutions(`items.${id}.title`),
      excerpt: tSolutions(`items.${id}.subtitle`),
    };
  }

  const p = item.i18n.prefix;
  return {
    tag: tProducts(`${p}_tag`),
    title: tProducts(`${p}_title`),
    excerpt: tProducts(`${p}_body`),
  };
}

export function getListingLabels(item: SolutionCatalogItem, tProducts: ProductsT) {
  const p = CATALOG_PRODUCT_PREFIX[item.id];
  return {
    tag: tProducts(`${p}_tag`),
    title: tProducts(`${p}_title`),
    body: tProducts(`${p}_body`),
    features: tProducts.raw(`${p}_features`) as string[],
  };
}

export function getListingAnchorId(item: SolutionCatalogItem) {
  const p = CATALOG_PRODUCT_PREFIX[item.id];
  return `product-${p.slice(1)}`;
}
