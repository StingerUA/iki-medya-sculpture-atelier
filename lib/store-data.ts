export type Locale = "tr" | "en";

export type GalleryImage = {
  src: string;
  sourceUrl: string;
  credit: string;
};

export type Product = {
  slug: string;
  name: string;
  style: "ancient" | "renaissance" | "neoclassical" | "modern" | "decorative" | "vase";
  height: number;
  price: number;
  model: string;
  poster: string;
  gallery: GalleryImage[];
  orientation?: string;
  initialBackground?: "studio" | "stone" | "night";
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

const commonsImage = (file: string, credit: string): GalleryImage => ({
  src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}?width=1200`,
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`,
  credit,
});

const polyHavenImage = (asset: string, view: "primary" | "clay" | "orth_front", credit: string): GalleryImage => ({
  src: view === "primary"
    ? `https://cdn.polyhaven.com/asset_img/primary/${asset}.png?height=1200&quality=95`
    : `https://cdn.polyhaven.com/asset_img/renders/${asset}/${view}.png?height=1200&quality=95`,
  sourceUrl: `https://polyhaven.com/a/${asset}`,
  credit,
});

export const products: Product[] = [
  {
    slug: "venus-de-milo",
    name: "Venus de Milo — CLASSICS / 01",
    style: "ancient",
    height: 195,
    price: 128000,
    model: modelUrl("venus-de-milo.glb"),
    poster: commonsImage("Venus de Milo Louvre Ma399 n4.jpg", "Jastrow · Wikimedia Commons").src,
    gallery: [
      commonsImage("Venus de Milo Louvre Ma399 n4.jpg", "Jastrow · Wikimedia Commons"),
      commonsImage("Venus de Milo Louvre Ma399.jpg", "Jastrow · Wikimedia Commons"),
      commonsImage("Venus de Milo Louvre Ma399 n13.jpg", "Jastrow · Wikimedia Commons"),
    ],
    initialBackground: "night",
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
    slug: "the-thinker",
    name: "The Thinker — MODERN ART / 02",
    style: "modern",
    height: 145,
    price: 98000,
    model: modelUrl("the-thinker.glb"),
    poster: commonsImage("Le Penseur Musée Rodin Paris S.1295.jpg", "Musée Rodin · Wikimedia Commons").src,
    gallery: [
      commonsImage("Le Penseur Musée Rodin Paris S.1295.jpg", "Musée Rodin · Wikimedia Commons"),
      commonsImage("The Thinker Rodin Phila.JPG", "Sdwelch1031 · Wikimedia Commons"),
      commonsImage("Maryhill Museum - Rodin - The Thinker - 01.jpg", "Joe Mabel · Wikimedia Commons"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
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
    slug: "laocoon-group",
    name: "Laocoön Group — CLASSICS / 03",
    style: "ancient",
    height: 210,
    price: 168000,
    model: modelUrl("laocoon-group.glb"),
    poster: commonsImage("Laocoön and His Sons in Vatican museum.jpg", "Wikimedia Commons").src,
    gallery: [
      commonsImage("Laocoön and His Sons in Vatican museum.jpg", "Wikimedia Commons"),
      commonsImage("Laocoon group sculpture.jpg", "Dom Crossley · Wikimedia Commons"),
      commonsImage("Laocoon and His Sons.jpg", "Wikimedia Commons"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Müze beyazı / Museum white",
    material: "PETG + mineral mermer kaplama / PETG + mineral marble coating",
    leadTime: "36–48 gün / days",
    description: {
      tr: "Laocoön ve oğullarının yılanlarla mücadelesini anlatan ünlü Helenistik kompozisyonun yüksek detaylı müze taraması. Çok figürlü anatomisi ve dramatik hareketi, büyük galeriler ve anıtsal girişler için güçlü bir merkez eser oluşturur.",
      en: "A high-detail museum scan of the celebrated Hellenistic composition depicting Laocoön and his sons struggling with serpents. Its multi-figure anatomy and dramatic movement create a commanding centrepiece for galleries and monumental entrances.",
    },
    source: {
      title: "Laocoön Group — printable museum scan",
      creator: "Scan the World",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Scan_the_World_-_Laocoon_Group.stl",
    },
  },
  {
    slug: "gothic-guardian",
    name: "Gothic Guardian — DECOR / 04",
    style: "decorative",
    height: 170,
    price: 112000,
    model: modelUrl("gothic-guardian.glb"),
    poster: polyHavenImage("gothic_statue", "primary", "Benny Weimer · Poly Haven").src,
    gallery: [
      polyHavenImage("gothic_statue", "primary", "Benny Weimer · Poly Haven"),
      polyHavenImage("gothic_statue", "clay", "Benny Weimer · Poly Haven"),
      polyHavenImage("gothic_statue", "orth_front", "Benny Weimer · Poly Haven"),
    ],
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
    name: "Caesar Marble Bust — DECOR / 05",
    style: "decorative",
    height: 80,
    price: 68500,
    model: modelUrl("marble-bust.glb"),
    poster: polyHavenImage("marble_bust_01", "primary", "Rico Cilliers · Poly Haven").src,
    gallery: [
      polyHavenImage("marble_bust_01", "primary", "Rico Cilliers · Poly Haven"),
      polyHavenImage("marble_bust_01", "clay", "Rico Cilliers · Poly Haven"),
      polyHavenImage("marble_bust_01", "orth_front", "Rico Cilliers · Poly Haven"),
    ],
    initialBackground: "night",
    color: "Damarlı mermer / Veined marble",
    material: "PETG + mermer efektli epoksi / PETG + marble-effect epoxy",
    leadTime: "18–26 gün / days",
    description: {
      tr: "Sezar portrelerinin anıtsal karakterinden esinlenen; ince yüz hatları, hafif aşınma ve doğal taş damarları içeren 17 bin üçgenli mermer büst. Konut, otel ve seçkin mağaza dekorasyonu için dengeli bir sanat objesidir.",
      en: "A 17K-triangle marble bust inspired by the monumental character of Caesar portraits, with finely carved features, subtle weathering and natural stone veining. A balanced art object for residences, hospitality and premium retail interiors.",
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
    slug: "greek-column-krater",
    name: "Greek Column Krater — VESSEL / 06",
    style: "vase",
    height: 110,
    price: 49500,
    model: modelUrl("greek-column-krater.glb"),
    poster: commonsImage("Terracotta column-krater (bowl for mixing wine and water) MET DP118157.jpg", "The Metropolitan Museum of Art").src,
    gallery: [
      commonsImage("Terracotta column-krater (bowl for mixing wine and water) MET DP118157.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Terracotta column-krater (vase for mixing wine and water) MET DP233560.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Terracotta column-krater (bowl for mixing wine and water) MET DP145998.jpg", "The Metropolitan Museum of Art"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Tek renk antik bronz / Monochrome antique bronze",
    material: "PETG + tek renk mineral yüzey / PETG + monochrome mineral finish",
    leadTime: "16–24 gün / days",
    description: {
      tr: "Antik Yunan symposiumlarında şarap ve suyu karıştırmak için kullanılan sütun kulplu krater formunun tek renkli, baskıya hazır yorumu. Otel lobileri, restoranlar ve kültür temalı mekânlar için anıtsal ölçekte üretilebilir.",
      en: "A monochrome, print-ready interpretation of the column-handled krater used to mix wine and water at ancient Greek symposia. Scalable for hotel lobbies, restaurants and culture-led interiors.",
    },
    source: {
      title: "3D Model Column Krater",
      creator: "Noedlh",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:3D_Model_Column_Krater.stl",
    },
  },
  {
    slug: "venus-with-the-apple",
    name: "Venus with the Apple — NEOCLASSIC / 07",
    style: "neoclassical",
    height: 165,
    price: 116000,
    model: modelUrl("venus-with-the-apple.glb"),
    poster: commonsImage("Thorvaldsens Venus.jpg", "Gunnar Bach Pedersen · Wikimedia Commons").src,
    gallery: [
      commonsImage("Thorvaldsens Venus.jpg", "Gunnar Bach Pedersen · Wikimedia Commons"),
      commonsImage("Venus with Apple by Bertel Thorvaldsen - Statens Museum for Kunst, Copenhagen - DSC08241.JPG", "Wikimedia Commons"),
      commonsImage("Bertel Thorvaldsen, Venus med æblet, 1809, KMS6004, Statens Museum for Kunst.jpg", "Statens Museum for Kunst"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Porselen beyazı / Porcelain white",
    material: "PLA Pro + mat mineral kaplama / PLA Pro + matte mineral coating",
    leadTime: "26–36 gün / days",
    description: {
      tr: "Bertel Thorvaldsen'in 1809 tarihli Venüs yorumunun ayrıntılı müze taraması. Yumuşak kontrapost, kumaş kıvrımları ve elma motifi zarif konut ve konaklama mekânları için dengeli bir odak oluşturur.",
      en: "A detailed museum scan of Bertel Thorvaldsen's 1809 interpretation of Venus. Its gentle contrapposto, drapery and apple motif form an elegant focal point for residential and hospitality interiors.",
    },
    source: {
      title: "Venus with the Apple — museum scan",
      creator: "Bertel Thorvaldsen / Scan the World / SMK",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Venus_med_apple_(SMK_KMS6004,_Scan_the_World).stl",
    },
  },
  {
    slug: "resting-hercules-torso",
    name: "Resting Hercules Torso — ANTIQUITY / 08",
    style: "ancient",
    height: 115,
    price: 84000,
    model: modelUrl("resting-hercules-torso.glb"),
    poster: commonsImage("(Toulouse) Hercule au repos - Musée Saint-Raymond, Ra 115.jpg", "Musée Saint-Raymond · Wikimedia Commons").src,
    gallery: [
      commonsImage("(Toulouse) Hercule au repos - Musée Saint-Raymond, Ra 115.jpg", "Musée Saint-Raymond · Wikimedia Commons"),
      commonsImage("MSR-ra-115-2-DM.jpg", "Musée Saint-Raymond · Wikimedia Commons"),
      commonsImage("MSR-ra-115-3-DM.jpg", "Musée Saint-Raymond · Wikimedia Commons"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Kum taşı / Sandstone",
    material: "PLA Pro + tek renk mineral yüzey / PLA Pro + monochrome mineral finish",
    leadTime: "20–30 gün / days",
    description: {
      tr: "Nemea aslanı postuyla betimlenen, Farnese tipindeki dinlenen Herkül gövdesinin ayrıntılı müze taraması. Heykelsi kırık yüzeyleriyle galeri, otel ve seçkin iç mekânlarda güçlü bir tek renkli odak oluşturur.",
      en: "A detailed museum scan of a resting Hercules torso of the Farnese type, depicted with the Nemean lion skin. Its sculptural fragmented surfaces create a strong monochrome focal point for galleries, hospitality and refined interiors.",
    },
    source: {
      title: "Resting Hercules, Ra 115 — 3D scan",
      creator: "Scan the World / Musée Saint-Raymond",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:40-msr-hercules-body-10.stl",
    },
  },
  {
    slug: "greek-neck-amphora",
    name: "Greek Neck Amphora — VESSEL / 09",
    style: "vase",
    height: 125,
    price: 54000,
    model: modelUrl("greek-neck-amphora.glb"),
    poster: commonsImage("Neck-amphora MET DP-1487-002.jpg", "The Metropolitan Museum of Art").src,
    gallery: [
      commonsImage("Neck-amphora MET DP-1487-002.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Terracotta neck-amphora (jar) MET DT202045.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Neck-amphora MET DP-2916-002.jpg", "The Metropolitan Museum of Art"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Tek renk terrakota / Monochrome terracotta",
    material: "PLA Pro + mat seramik yüzey / PLA Pro + matte ceramic finish",
    leadTime: "16–24 gün / days",
    description: {
      tr: "Boyun ile gövdeyi belirgin biçimde ayıran klasik Yunan amforası. Dengeli kulpları ve uzun silueti, tek renk terrakota ya da taş etkili büyük format üretime uygundur.",
      en: "A classical Greek amphora with a clearly articulated neck and body. Its balanced handles and tall silhouette suit large-format production in monochrome terracotta or stone finishes.",
    },
    source: {
      title: "3D Model Neck Amphora",
      creator: "Noedlh",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:3D_Model_Neck_Amphora.stl",
    },
  },
  {
    slug: "greek-hydria",
    name: "Greek Hydria — VESSEL / 10",
    style: "vase",
    height: 105,
    price: 51000,
    model: modelUrl("greek-hydria.glb"),
    poster: commonsImage("Terracotta hydria (water jar) MET DP229433.jpg", "The Metropolitan Museum of Art").src,
    gallery: [
      commonsImage("Terracotta hydria (water jar) MET DP229433.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Terracotta hydria (water jar) MET DT5872.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Terracotta hydria (water jar) MET DP273724.jpg", "The Metropolitan Museum of Art"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Tek renk taş beyazı / Monochrome stone white",
    material: "PETG + mineral taş kaplama / PETG + mineral stone coating",
    leadTime: "15–23 gün / days",
    description: {
      tr: "Su taşımak için tasarlanmış üç kulplu antik Yunan hydria formu. Geniş omuzları ve heykelsi profili, galeri ve konaklama projelerinde bağımsız bir dekor objesi oluşturur.",
      en: "A three-handled ancient Greek hydria originally designed for carrying water. Its broad shoulders and sculptural profile create a standalone decorative object for galleries and hospitality projects.",
    },
    source: {
      title: "3D Model Hydria",
      creator: "Noedlh",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:3D_Model_Hydria.stl",
    },
  },
  {
    slug: "greek-loutrophoros",
    name: "Greek Loutrophoros — VESSEL / 11",
    style: "vase",
    height: 150,
    price: 62500,
    model: modelUrl("greek-loutrophoros.glb"),
    poster: commonsImage("Terracotta loutrophoros (ceremonial vase for water) MET DT3849.jpg", "The Metropolitan Museum of Art").src,
    gallery: [
      commonsImage("Terracotta loutrophoros (ceremonial vase for water) MET DT3849.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Terracotta loutrophoros (ceremonial vase for water) MET DT7201.jpg", "The Metropolitan Museum of Art"),
      commonsImage("Fragmentary terracotta loutrophoros (ceremonial vase for water) MET DP145793.jpg", "The Metropolitan Museum of Art"),
    ],
    orientation: "0deg -90deg 0deg",
    initialBackground: "night",
    color: "Tek renk fildişi / Monochrome ivory",
    material: "PLA Pro + mat mineral kaplama / PLA Pro + matte mineral coating",
    leadTime: "18–28 gün / days",
    description: {
      tr: "Düğün ve anma ritüellerinde su taşımak için kullanılan, uzun boyunlu ve zarif kulplu Yunan loutrophoros formu. Dikey oranları anıtsal giriş ve vitrin düzenleri için güçlüdür.",
      en: "A long-necked Greek loutrophoros with elegant handles, historically used to carry water in wedding and memorial rituals. Its vertical proportions suit monumental entrances and showcases.",
    },
    source: {
      title: "3D Model Loutrophoros",
      creator: "H. Noedl",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:3D_Model_Loutrophoros.stl",
    },
  },
];

export const styles: Product["style"][] = ["ancient", "renaissance", "neoclassical", "modern", "decorative", "vase"];

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
