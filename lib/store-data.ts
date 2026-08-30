export type Locale = "tr" | "en";

export type Product = {
  slug: string;
  name: string;
  style: "portrait" | "anatomical" | "experimental";
  height: number;
  price: number;
  model: string;
  color: string;
  material: string;
  leadTime: string;
  description: Record<Locale, string>;
  source: {
    title: string;
    creator: string;
    licenseName: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

export const products: Product[] = [
  {
    slug: "lee-perry-smith",
    name: "Lee Perry-Smith — PORTRAIT / 01",
    style: "portrait",
    height: 140,
    price: 48900,
    model: "https://raw.githubusercontent.com/mrdoob/three.js/3744db754b77106a4b2921fcc0a77f0964b823a7/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb",
    color: "Mat beyaz / Matte white",
    material: "PETG + mineral dolgu / PETG + mineral fill",
    leadTime: "18–24 gün / days",
    description: {
      tr: "Gerçekçi yüzey ve oran çalışmaları için seçilen dijital portre formu. Büyük format baskıda mat, metalik veya projeye özel boyalı yüzeylerle üretilebilir.",
      en: "A digital portrait selected for studies in realistic surface and proportion. It can be produced at large scale with matte, metallic or project-specific painted finishes.",
    },
    source: {
      title: "Infinite, 3D Head Scan",
      creator: "Lee Perry-Smith / Triplegangers",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://github.com/mrdoob/three.js/tree/3744db754b77106a4b2921fcc0a77f0964b823a7/examples/models/gltf/LeePerrySmith",
    },
  },
  {
    slug: "scattering-skull",
    name: "Scattering Skull — SKULL / 02",
    style: "anatomical",
    height: 95,
    price: 42500,
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/ScatteringSkull/glTF-Binary/ScatteringSkull.glb",
    color: "Mat siyah / Matte black",
    material: "PLA Pro + akrilik kaplama / PLA Pro + acrylic coating",
    leadTime: "14–20 gün / days",
    description: {
      tr: "Katmanlı yüzey ve yarı saydam malzeme denemelerine uygun anatomik bir heykel formu. Vitrin, galeri ve çağdaş iç mekânlar için güçlü bir odak noktasıdır.",
      en: "An anatomical sculpture suited to layered surfaces and translucent material studies. It creates a strong focal point for showcases, galleries and contemporary interiors.",
    },
    source: {
      title: "Scattering Skull",
      creator: "Vladimir Petkovic",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://github.com/KhronosGroup/glTF-Sample-Assets/tree/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/ScatteringSkull",
    },
  },
  {
    slug: "iridescence-suzanne",
    name: "Iridescence Suzanne — IRIDESCENCE / 03",
    style: "experimental",
    height: 180,
    price: 76500,
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/IridescenceSuzanne/glTF-Binary/IridescenceSuzanne.glb",
    color: "Taş gri / Stone grey",
    material: "PETG + epoksi yüzey / PETG + epoxy finish",
    leadTime: "24–32 gün / days",
    description: {
      tr: "Üçlü Suzanne formunu farklı yüzey karakterleriyle bir araya getiren deneysel bir kompozisyon. Otel lobileri, vitrinler ve kurumsal alanlar için ölçeklenebilir.",
      en: "An experimental composition that brings together three Suzanne forms with distinct surface characters, scalable for hotel lobbies, showcases and corporate spaces.",
    },
    source: {
      title: "Iridescence Suzanne",
      creator: "Mathias Kanzler & Pascal Schoen / UX3D",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://github.com/KhronosGroup/glTF-Sample-Assets/tree/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/IridescenceSuzanne",
    },
  },
];

export const styles: Product["style"][] = [
  "portrait",
  "anatomical",
  "experimental",
];

export function formatPrice(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "tr" ? "tr-TR" : "en-US", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "tr" || value === "en";
}
