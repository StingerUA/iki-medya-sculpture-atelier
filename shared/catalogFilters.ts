import type { Sculpture, SculptureSize, SculptureStyle } from "./catalog";

export type PriceSort = "recommended" | "price-asc" | "price-desc";
export type CatalogFilters = { size: SculptureSize | "all"; style: SculptureStyle | "all"; sort: PriceSort; };

function byPrice(a: Sculpture, b: Sculpture, direction: "asc" | "desc") {
  if (a.priceCents === null && b.priceCents === null) return a.index.localeCompare(b.index);
  if (a.priceCents === null) return 1;
  if (b.priceCents === null) return -1;
  return direction === "asc" ? a.priceCents - b.priceCents : b.priceCents - a.priceCents;
}

export function filterAndSortSculptures(items: Sculpture[], filters: CatalogFilters) {
  const filtered = items.filter(item => (filters.size === "all" || item.size === filters.size) && (filters.style === "all" || item.style === filters.style));
  if (filters.sort === "price-asc") return [...filtered].sort((a, b) => byPrice(a, b, "asc"));
  if (filters.sort === "price-desc") return [...filtered].sort((a, b) => byPrice(a, b, "desc"));
  return filtered;
}
