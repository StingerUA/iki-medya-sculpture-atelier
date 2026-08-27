import { describe, expect, it } from "vitest";
import { quoteEnquirySchema } from "./routers/enquiries";

describe("quote enquiry input", () => {
  const valid = { name: "Ada Lovelace", email: "ada@example.com", projectType: "Bespoke sculpture", message: "A large sculptural object for the lobby of a new office building.", selectedWorks: ["FORM / 01 × 2"] };
  it("accepts a structured project enquiry", () => expect(quoteEnquirySchema.parse(valid)).toMatchObject(valid));
  it("rejects a malformed email and insufficient project outline", () => expect(() => quoteEnquirySchema.parse({ ...valid, email: "invalid", message: "short" })).toThrow());
});
