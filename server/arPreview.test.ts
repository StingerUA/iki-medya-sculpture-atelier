import { describe, expect, it } from "vitest";
import { getARPreviewAvailability } from "../shared/arPreview";

describe("AR model availability", () => {
  it("returns a clear fallback when no web 3D model is provided", () => {
    expect(getARPreviewAvailability({})).toEqual({ available: false, reason: "missing-model" });
  });
  it("enables AR preview and identifies an iOS Quick Look asset", () => {
    expect(getARPreviewAvailability({ arModelUrl: "https://example.com/work.glb", arIosModelUrl: "https://example.com/work.usdz" })).toEqual({ available: true, supportsQuickLook: true });
  });
});
