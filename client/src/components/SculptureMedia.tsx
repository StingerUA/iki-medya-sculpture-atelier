import "@google/model-viewer";
import { createElement } from "react";
import type { Sculpture } from "@shared/catalog";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/assetUrl";
import SculptureArt from "./SculptureArt";

export default function SculptureMedia({
  sculpture,
  className,
  interactive = false,
}: {
  sculpture: Sculpture;
  className?: string;
  interactive?: boolean;
}) {
  if (!sculpture.catalogModelUrl) {
    return <SculptureArt visual={sculpture.visual} className={className} />;
  }

  return (
    <div className={cn("sculpture-model", interactive && "sculpture-model--interactive", className)}>
      {createElement("model-viewer", {
        src: withBasePath(sculpture.catalogModelUrl),
        alt: sculpture.title + " açık lisanslı 3D model önizlemesi",
        loading: "lazy",
        reveal: "auto",
        "camera-controls": interactive ? true : undefined,
        "auto-rotate": true,
        "auto-rotate-delay": "700",
        "rotation-per-second": "18deg",
        "interaction-prompt": interactive ? "auto" : "none",
        "disable-zoom": interactive ? undefined : true,
        "shadow-intensity": "0.9",
        exposure: "1.08",
        "environment-image": "neutral",
      })}
      {sculpture.sourceAsset && (
        <span className="sculpture-model__badge">
          {sculpture.sourceAsset.licenseName} · {sculpture.sourceAsset.creator}
        </span>
      )}
    </div>
  );
}
