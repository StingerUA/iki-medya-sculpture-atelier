export type Sculpture = { id: string; slug: string; index: string; title: string; category: string; description: string; dimensions: string; material: string; finish: string; production: string; arReady: boolean; arModelUrl?: string; arIosModelUrl?: string; visual: "arch" | "column" | "loop"; };

/** Presentation-only records. The source has no verified sculpture catalogue. */
export const sculptures: Sculpture[] = [
  { id: "form-01", slug: "form-01", index: "01", title: "FORM / 01", category: "Spatial object", description: "A configurable architectural form developed for generous interior and public settings.", dimensions: "Specified for each installation", material: "Large-format 3D-printed composite, to be specified", finish: "Matte monochrome finish, selected per project", production: "Produced to brief after spatial and technical review", arReady: false, visual: "arch" },
  { id: "volume-02", slug: "volume-02", index: "02", title: "VOLUME / 02", category: "Interior sculpture", description: "A vertical study in volume, proportion and quiet surface rhythm for tailored environments.", dimensions: "Specified for each installation", material: "Large-format 3D-printed composite, to be specified", finish: "Matte monochrome finish, selected per project", production: "Produced to brief after spatial and technical review", arReady: false, visual: "column" },
  { id: "void-03", slug: "void-03", index: "03", title: "VOID / 03", category: "Statement piece", description: "A continuous loop designed as a focal point for lobbies, retail spaces and exhibition contexts.", dimensions: "Specified for each installation", material: "Large-format 3D-printed composite, to be specified", finish: "Matte monochrome finish, selected per project", production: "Produced to brief after spatial and technical review", arReady: false, visual: "loop" },
];

export function getSculpture(slug: string) { return sculptures.find(sculpture => sculpture.slug === slug); }
