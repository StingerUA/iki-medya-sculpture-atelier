import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getSculpture, sculptures } from "../shared/catalog";

describe("sunum kataloğu", () => {
  it("benzersiz bağlantılar sunar ve her çalışmayı yapılandırılabilir tutar", () => {
    expect(new Set(sculptures.map(sculpture => sculpture.slug)).size).toBe(sculptures.length);
    expect(sculptures.every(sculpture => sculpture.dimensions === "Her kurulum için belirlenir")).toBe(true);
    expect(getSculpture("form-01")?.title).toBe("FORM / 01");
  });

  it("FORM / 01 için açıkça etiketlenmiş GLB ve USDZ test modelleri sunar", () => {
    const sculpture = getSculpture("form-01");
    expect(sculpture?.arModelUrl).toMatch(/\.glb$/);
    expect(sculpture?.arIosModelUrl).toMatch(/\.usdz$/);
    expect(sculpture?.sourceAsset?.title).toBe("Astronaut");
    expect(sculpture?.sourceAsset?.role).toBe("technical-demo");
  });

  it("üç doğrulanmış açık lisanslı heykel modeli sunar", () => {
    const openModels = sculptures.filter(sculpture => sculpture.sourceAsset?.role === "open-catalog");
    expect(openModels).toHaveLength(3);
    for (const sculpture of openModels) {
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
