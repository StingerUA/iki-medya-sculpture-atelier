import { describe, expect, it } from "vitest";
import { getSculpture, sculptures } from "../shared/catalog";
describe("sunum kataloğu", () => { it("benzersiz bağlantılar sunar ve her onaysız çalışmayı yapılandırılabilir tutar", () => { expect(new Set(sculptures.map(sculpture => sculpture.slug)).size).toBe(sculptures.length); expect(sculptures.every(sculpture => sculpture.dimensions === "Her kurulum için belirlenir")).toBe(true); expect(getSculpture("form-01")?.title).toBe("FORM / 01"); }); });
