import { describe, expect, it } from "vitest";
import { filterAndSortSculptures } from "../shared/catalogFilters";
import type { Sculpture } from "../shared/catalog";

const base: Sculpture = { id: "a", slug: "a", index: "01", title: "A", category: "Object", description: "", dimensions: "", material: "", finish: "", production: "", size: "Large", style: "Architectural", priceCents: null, arReady: false, visual: "arch" };
const priced: Sculpture[] = [{ ...base, id: "one", slug: "one", title: "One", index: "01", priceCents: 350000 }, { ...base, id: "two", slug: "two", title: "Two", index: "02", size: "Extra large", style: "Organic", priceCents: 120000 }, { ...base, id: "three", slug: "three", title: "Three", index: "03", style: "Geometric", priceCents: null }];
describe("catalog filters", () => {
  it("filters by size and style together", () => expect(filterAndSortSculptures(priced, { size: "Extra large", style: "Organic", sort: "recommended" }).map(item => item.id)).toEqual(["two"]));
  it("sorts priced work and keeps price-on-request entries last", () => expect(filterAndSortSculptures(priced, { size: "all", style: "all", sort: "price-asc" }).map(item => item.id)).toEqual(["two", "one", "three"]));
});
