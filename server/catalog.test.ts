import { describe, expect, it } from "vitest";
import { getSculpture, sculptures } from "../shared/catalog";

describe("presentation catalogue", () => {
  it("exposes unique links and keeps every unverified work configurable", () => {
    expect(new Set(sculptures.map(sculpture => sculpture.slug)).size).toBe(sculptures.length);
    expect(sculptures.every(sculpture => sculpture.dimensions === "Specified for each installation")).toBe(true);
    expect(getSculpture("form-01")?.title).toBe("FORM / 01");
  });
});
