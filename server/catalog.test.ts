import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getSculpture, sculptures } from "../shared/catalog";

describe("sunum kataloğu", () => {
  it("yalnızca yeni açık lisanslı heykelleri sıralı ve benzersiz sunar", () => {
    expect(sculptures.map(sculpture => sculpture.slug)).toEqual([
      "portrait-04",
      "skull-05",
      "iridescence-06",
    ]);
    expect(sculptures.map(sculpture => sculpture.index)).toEqual(["01", "02", "03"]);
    expect(new Set(sculptures.map(sculpture => sculpture.slug)).size).toBe(sculptures.length);
    expect(sculptures.every(sculpture => sculpture.dimensions === "Her kurulum için belirlenir")).toBe(true);
    expect(sculptures.every(sculpture => sculpture.sourceAsset?.role === "open-catalog")).toBe(true);
    expect(getSculpture("portrait-04")?.title).toBe("PORTRAIT / 01");
  });

  it("eski konsept çalışmalarını katalogdan kaldırır", () => {
    expect(getSculpture("form-01")).toBeUndefined();
    expect(getSculpture("volume-02")).toBeUndefined();
    expect(getSculpture("void-03")).toBeUndefined();
  });

  it("üç doğrulanmış açık lisanslı heykel modelini yerel dosyalarla sunar", () => {
    expect(sculptures).toHaveLength(3);
    for (const sculpture of sculptures) {
      expect(sculpture.catalogModelUrl).toBe(sculpture.arModelUrl);
      expect(sculpture.arModelUrl).toMatch(/^\/models\/.*\.glb$/);
      expect(sculpture.arScale).toBe("auto");
      expect(sculpture.sourceAsset?.sourceUrl).toMatch(/^https:\/\/github\.com\//);
      expect(sculpture.sourceAsset?.licenseUrl).toMatch(/^https:\/\/creativecommons\.org\//);
      const localPath = join(process.cwd(), "client", "public", sculpture.arModelUrl!.replace(/^\//, ""));
      expect(existsSync(localPath), localPath + " bulunamadı").toBe(true);
    }
  });
});
