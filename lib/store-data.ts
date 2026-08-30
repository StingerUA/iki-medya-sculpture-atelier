export type Locale = "tr" | "en";

export type Product = {
  slug: string;
  name: string;
  style: "portrait" | "anatomical" | "experimental" | "vase" | "decorative";
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
  {
    slug: "amphora-vase",
    name: "Amphora — VASE / 04",
    style: "vase",
    height: 95,
    price: 36500,
    model: "https://static.poly.pizza/4775a9ed-ee8a-47ba-a34c-c22c5b2531aa.glb.br",
    color: "Kemik beyaz / Bone white",
    material: "PLA Pro + mat vernik / PLA Pro + matte varnish",
    leadTime: "12–18 gün / days",
    description: {
      tr: "Amfora ve klasik küp formlarından esinlenen sade, düşük poligonlu bir vazo. Otel, restoran ve vitrin projeleri için farklı ölçek ve yüzey seçenekleriyle üretime uyarlanabilir.",
      en: "A restrained low-poly vase inspired by amphorae and classical urns. It can be adapted for production in different scales and finishes for hotels, restaurants and showcases.",
    },
    source: {
      title: "Vase",
      creator: "Poly by Google",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://poly.pizza/m/flynTOOHK_z",
    },
  },
  {
    slug: "magic-vase",
    name: "Magic Vase — VASE / 05",
    style: "vase",
    height: 110,
    price: 41800,
    model: "https://static.poly.pizza/5a89b1c0-bf60-45d6-bbec-1252e4216592.glb.br",
    color: "Grafit / Graphite",
    material: "PETG + saten kaplama / PETG + satin coating",
    leadTime: "14–20 gün / days",
    description: {
      tr: "Masalsı bir silueti çağdaş düşük poligon yüzeylerle birleştiren dekoratif vazo. Tek başına odak objesi veya ölçekli bir vitrin serisinin parçası olarak üretilebilir.",
      en: "A decorative vase combining a storybook silhouette with contemporary low-poly surfaces. It can be produced as a standalone focal object or as part of a scaled showcase series.",
    },
    source: {
      title: "Magic Vase",
      creator: "sugamo",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://poly.pizza/m/f2lsM2jLRtB",
    },
  },
  {
    slug: "glass-vase-flowers",
    name: "Glass Bloom — VASE / 06",
    style: "vase",
    height: 125,
    price: 52000,
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/GlassVaseFlowers/glTF-Binary/GlassVaseFlowers.glb",
    color: "Şeffaf buz / Clear frost",
    material: "PETG + şeffaf reçine / PETG + clear resin",
    leadTime: "18–26 gün / days",
    description: {
      tr: "Cam geçirgenliğini ve çiçek formunu birlikte sergileyen deneysel bir vazo kompozisyonu. Büyük format üretimde yarı saydam gövde ve renkli ek parçalarla yorumlanabilir.",
      en: "An experimental vase composition presenting glass transmission and floral form together. At large scale it can be interpreted with a translucent body and coloured add-on elements.",
    },
    source: {
      title: "Glass Vase with Flowers",
      creator: "Eric Chadwick & Rico Cilliers",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://github.com/KhronosGroup/glTF-Sample-Assets/tree/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/GlassVaseFlowers",
    },
  },
  {
    slug: "reclining-figure",
    name: "Reclining Figure — STATUE / 07",
    style: "decorative",
    height: 160,
    price: 62000,
    model: "https://static.poly.pizza/fa879958-e97e-4c1a-8c62-f35f4187eafe.glb.br",
    color: "Kum taşı / Sandstone",
    material: "PLA Pro + mineral doku / PLA Pro + mineral texture",
    leadTime: "20–28 gün / days",
    description: {
      tr: "Yalın geometrilerle kurulmuş uzanan figür, geniş lobiler ve çağdaş iç mekânlar için sakin bir heykelsi vurgu oluşturur. Kaide ve renk projeye göre özelleştirilebilir.",
      en: "Built from restrained geometry, the reclining figure creates a calm sculptural accent for generous lobbies and contemporary interiors. Plinth and colour can be customised per project.",
    },
    source: {
      title: "Reclining Figure",
      creator: "Justin Hsu",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://poly.pizza/m/dJjQctYp5RP",
    },
  },
  {
    slug: "anubis-statue",
    name: "Anubis — STATUE / 08",
    style: "decorative",
    height: 185,
    price: 82000,
    model: "https://static.poly.pizza/06adc9b5-bba2-4025-b51c-ff4e12688c41.glb.br",
    color: "Gece siyahı / Night black",
    material: "PETG + metalik boya / PETG + metallic paint",
    leadTime: "24–32 gün / days",
    description: {
      tr: "Anubis figürünü keskin ve çağdaş yüzeylerle yorumlayan dikey dekoratif heykel. Temalı mekânlar, etkinlik alanları ve dikkat çekici vitrin uygulamaları için ölçeklenebilir.",
      en: "A vertical decorative sculpture interpreting Anubis through crisp, contemporary surfaces. It can be scaled for themed interiors, event spaces and statement window displays.",
    },
    source: {
      title: "Anubis Statue",
      creator: "Zach Miller",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://poly.pizza/m/9iPeQxL30oq",
    },
  },
  {
    slug: "art-figure",
    name: "Art Figure — STATUE / 09",
    style: "decorative",
    height: 145,
    price: 58500,
    model: "https://static.poly.pizza/8bea46a5-f75c-46b7-91f8-4d5949936f93.glb.br",
    color: "Ham taş / Raw stone",
    material: "PLA Pro + taş efekt / PLA Pro + stone effect",
    leadTime: "18–26 gün / days",
    description: {
      tr: "Kaideyle bütünleşen stilize insan figürü, galeri ve marka alanları için güçlü ama sade bir sanat objesi sunar. Monokrom veya projeye özel renklerle uygulanabilir.",
      en: "A stylised human figure integrated with its plinth, offering a strong yet restrained art object for galleries and branded spaces. Available in monochrome or project-specific colours.",
    },
    source: {
      title: "art statue",
      creator: "Kelli Ray",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://poly.pizza/m/b3L5PKB4fsx",
    },
  },
];

export const styles: Product["style"][] = [
  "portrait",
  "anatomical",
  "experimental",
  "vase",
  "decorative",
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
