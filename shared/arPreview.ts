export type ARAssetInput = { arModelUrl?: string; arIosModelUrl?: string };
export type ARPreviewAvailability =
  | { available: false; reason: "missing-model" }
  | { available: true; supportsQuickLook: boolean };

export function getARPreviewAvailability(asset: ARAssetInput): ARPreviewAvailability {
  if (!asset.arModelUrl) return { available: false, reason: "missing-model" };
  return { available: true, supportsQuickLook: Boolean(asset.arIosModelUrl) };
}
