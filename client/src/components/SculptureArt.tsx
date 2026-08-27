import type { Sculpture } from "@shared/catalog";
import { cn } from "@/lib/utils";

export default function SculptureArt({ visual, className, inverse = false }: { visual: Sculpture["visual"]; className?: string; inverse?: boolean }) {
  return <div className={cn("sculpture-art", `sculpture-art--${visual}`, inverse && "sculpture-art--inverse", className)} aria-hidden="true"><div className="sculpture-art__floor" /><div className="sculpture-art__form sculpture-art__form--one" /><div className="sculpture-art__form sculpture-art__form--two" /><div className="sculpture-art__form sculpture-art__form--three" /><span className="sculpture-art__grain" /></div>;
}
