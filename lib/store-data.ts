export type Locale = "tr" | "en";

export type Product = {
  slug: string;
  name: string;
  style: "ancient" | "modern" | "decorative" | "vase";
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

const modelBase = "https://stingerua.github.io/iki-medya-sculpture-atelier/models";
const modelUrl = (file: string) => `${modelBase}/${file}`;

export const products: Product[] = [
  {
    slug: "venus-de-milo",
    name: "Venus de Milo — CLASSICS / 01",
    style: "ancient",
    height: 195,
    price: 128000,
    model: modelUrl("venus-de-milo.glb"),
    color: "Carrara beyazı / Carrara white",
    material: "PETG + mineral mermer yüzey / PETG + mineral marble finish",
    leadTime: "28–38 gün / days",
    description: {
      tr: "Antik Yunan heykel sanatının en tanınmış eserlerinden Afrodit'in tam hacimli, orta-yüksek detaylı dijital yorumu. Anıtsal iç mekânlar, otel lobileri ve sergi düzenleri için ölçeklenebilir.",
      en: "A full-volume, mid-to-high-detail digital interpretation of Aphrodite, one of the most recognisable works of ancient Greek sculpture. Scalable for monumental interiors, hotel lobbies and exhibitions.",
    },
    source: {
      title: "Venus de Milo — preserved 3D scan",
      creator: "Cosmo Wenman / Pirate Museum",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://github.com/edent/PirateMuseum#3d-models",
    },
  },
  {
    slug: "apollo-belvedere",
    name: "Apollo Belvedere — CLASSICS / 02",
    style: "ancient",
    height: 185,
    price: 118000,
    model: modelUrl("apollo-belvedere.glb"),
    color: "Müze beyazı / Museum white",
    material: "PLA Pro + taş-mineral kaplama / PLA Pro + stone-mineral coating",
    leadTime: "26–36 gün / days",
    description: {
      tr: "Klasik Yunan idealini temsil eden Apollon Belvedere'nin yüksek detaylı müze taraması. İnce anatomi, kıvrım ve saç detaylarını büyük format baskıda korumaya yönelik hazırlanır.",
      en: "A high-detail museum scan of the Apollo Belvedere, an icon of the classical Greek ideal. Prepared to preserve its anatomy, drapery and hair detail in large-format printing.",
    },
    source: {
      title: "Apollo Belvedere — 3D model",
      creator: "Statens Museum for Kunst",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ubekendt,_Apollon_Belvedere,_,_KAS353,_Statens_Museum_for_Kunst,_3D_model.stl",
    },
  },
  {
    slug: "the-thinker",
    name: "The Thinker — MODERN ART / 03",
    style: "modern",
    height: 145,
    price: 98000,
    model: modelUrl("the-thinker.glb"),
    color: "Patinalı bronz / Patinated bronze",
    material: "PETG + metalik epoksi yüzey / PETG + metallic epoxy finish",
    leadTime: "24–34 gün / days",
    description: {
      tr: "Rodin'in modern heykel tarihinin simgelerinden Düşünen Adam'ının yoğun anatomik yüzeyini koruyan yüksek detaylı tarama. Galeri, kütüphane ve kurumsal mekânlar için güçlü bir odak eseridir.",
      en: "A high-detail scan preserving the dense anatomical surface of Rodin's Thinker, an icon of modern sculpture. A commanding focal work for galleries, libraries and corporate interiors.",
    },
    source: {
      title: "The Thinker (Auguste Rodin) — 3D scan",
      creator: "Scan the World",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Scan_the_World_-_The_Thinker_(Auguste_Rodin).stl",
    },
  },
  {
    slug: "age-of-bronze",
    name: "The Age of Bronze — MODERN ART / 04",
    style: "modern",
    height: 200,
    price: 134000,
    model: modelUrl("age-of-bronze.glb"),
    color: "Koyu bronz / Dark bronze",
    material: "PETG + çok katmanlı metal efekt / PETG + multilayer metal effect",
    leadTime: "30–42 gün / days",
    description: {
      tr: "Auguste Rodin'in 1877 tarihli figürünün ayrıntılı, tam boy taraması. Doğal beden ağırlığı ve hassas yüzey geçişleri sayesinde çağdaş sanat mekânlarında anıtsal bir etki oluşturur.",
      en: "A detailed full-figure scan of Auguste Rodin's 1877 sculpture. Its natural sense of weight and subtle surface transitions create a monumental presence in contemporary art spaces.",
    },
    source: {
      title: "The Age of Bronze (Auguste Rodin) — 3D scan",
      creator: "Scan the World",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Age_Of_Bronze_(Auguste_Rodin).stl",
    },
  },
  {
    slug: "gothic-guardian",
    name: "Gothic Guardian — DECOR / 05",
    style: "decorative",
    height: 170,
    price: 112000,
    model: modelUrl("gothic-guardian.glb"),
    color: "Eskitilmiş taş / Weathered stone",
    material: "PLA Pro + mineral doku / PLA Pro + mineral texture",
    leadTime: "24–34 gün / days",
    description: {
      tr: "Taç, zincir, kitap ve kılıç ayrıntılarını koruyan 28 bin üçgenli, foto-taranmış anıtsal dekoratif figür. Temalı oteller, sahne tasarımları ve etkileyici vitrinler için uygundur.",
      en: "A photogrammetry-based monumental decorative figure with 28K triangles, preserving its crown, chains, book and sword. Suited to themed hospitality, stage design and statement showcases.",
    },
    source: {
      title: "Gothic Statue",
      creator: "Benny Weimer / Poly Haven",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://polyhaven.com/a/gothic_statue",
    },
  },
  {
    slug: "marble-bust",
    name: "Marble Bust — DECOR / 06",
    style: "decorative",
    height: 80,
    price: 68500,
    model: modelUrl("marble-bust.glb"),
    color: "Damarlı mermer / Veined marble",
    material: "PETG + mermer efektli epoksi / PETG + marble-effect epoxy",
    leadTime: "18–26 gün / days",
    description: {
      tr: "İnce yüz hatları, hafif aşınma ve doğal taş damarları içeren 17 bin üçgenli Rönesans üslubunda büst. Konut, otel ve seçkin mağaza dekorasyonu için dengeli bir sanat objesidir.",
      en: "A 17K-triangle Renaissance-style bust with finely carved features, subtle weathering and natural stone veining. A balanced art object for residences, hospitality and premium retail interiors.",
    },
    source: {
      title: "Marble Bust 01",
      creator: "Rico Cilliers / Poly Haven",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://polyhaven.com/a/marble_bust_01",
    },
  },
  {
    slug: "antique-ceramic-vase",
    name: "Antique Ceramic Vase — VESSEL / 07",
    style: "vase",
    height: 95,
    price: 42500,
    model: modelUrl("antique-ceramic-vase.glb"),
    color: "Mavi-beyaz sır / Blue-and-white glaze",
    material: "PETG + seramik efektli vernik / PETG + ceramic-effect varnish",
    leadTime: "14–22 gün / days",
    description: {
      tr: "Mavi çiçek desenini, çatlak sırını ve hafif yaşlanma izlerini koruyan 9 bin üçgenli dekoratif vazo. Büyük ölçekte lobi, restoran ve vitrin düzenleri için üretilebilir.",
      en: "A 9K-triangle decorative vase preserving its blue floral transfer pattern, crackle glaze and subtle ageing. Available at large scale for lobbies, restaurants and showcase installations.",
    },
    source: {
      title: "Antique Ceramic Vase 01",
      creator: "James Ray Cock / Poly Haven",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://polyhaven.com/a/antique_ceramic_vase_01",
    },
  },
];

export const styles: Product["style"][] = ["ancient", "modern", "decorative", "vase"];

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
