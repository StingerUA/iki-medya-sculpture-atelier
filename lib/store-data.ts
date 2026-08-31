export type Locale = "tr" | "en";

export type Product = {
  slug: string;
  name: string;
  style: "ancient" | "renaissance" | "neoclassical" | "modern" | "decorative" | "vase";
  height: number;
  price: number;
  model: string;
  poster: string;
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

export const products: Product[] = [
  {
    slug: "venus-de-milo",
    name: "Venus de Milo — CLASSICS / 01",
    style: "ancient",
    height: 195,
    price: 128000,
    model: modelUrl("venus-de-milo.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Scan_the_World_-_Venus_de_Milo.stl/960px-Scan_the_World_-_Venus_de_Milo.stl.png",
    orientation: "0deg 90deg 0deg",
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
    slug: "discobolus",
    name: "Discobolus — CLASSICS / 02",
    style: "ancient",
    height: 175,
    price: 124000,
    model: modelUrl("discobolus.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Diskoskasteren_%28Discobolos%29_-_KAS1549.stl/960px-Diskoskasteren_%28Discobolos%29_-_KAS1549.stl.png",
    orientation: "-90deg 0deg 0deg",
    initialBackground: "night",
    color: "Müze beyazı / Museum white",
    material: "PLA Pro + taş-mineral kaplama / PLA Pro + stone-mineral coating",
    leadTime: "28–38 gün / days",
    description: {
      tr: "Myron'un MÖ 5. yüzyıla tarihlenen Disk Atan Adam kompozisyonunun yüksek detaylı müze taraması. Gerilmiş anatomi ve güçlü hareket çizgisi büyük format baskıda anıtsal bir siluet oluşturur.",
      en: "A high-detail museum scan of Myron's fifth-century BCE Discobolus. Its tense anatomy and powerful line of movement create a monumental silhouette in large-format production.",
    },
    source: {
      title: "Discobolus — digitised museum replica",
      creator: "Myron / Statens Museum for Kunst",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Diskoskasteren_(Discobolos)_-_KAS1549.stl",
    },
  },
  {
    slug: "the-thinker",
    name: "The Thinker — MODERN ART / 03",
    style: "modern",
    height: 145,
    price: 98000,
    model: modelUrl("the-thinker.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Scan_the_World_-_The_Thinker_%28Auguste_Rodin%29.stl/960px-Scan_the_World_-_The_Thinker_%28Auguste_Rodin%29.stl.png",
    orientation: "-90deg 0deg 0deg",
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
    name: "Laocoön Group — CLASSICS / 04",
    style: "ancient",
    height: 210,
    price: 168000,
    model: modelUrl("laocoon-group.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Scan_the_World_-_Laocoon_Group.stl/960px-Scan_the_World_-_Laocoon_Group.stl.png",
    orientation: "-90deg 0deg 0deg",
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
    name: "Gothic Guardian — DECOR / 05",
    style: "decorative",
    height: 170,
    price: 112000,
    model: modelUrl("gothic-guardian.glb"),
    poster: "https://cdn.polyhaven.com/asset_img/thumbs/gothic_statue.png?format=png",
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
    poster: "https://cdn.polyhaven.com/asset_img/thumbs/marble_bust_01.png?format=png",
    initialBackground: "night",
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
    slug: "greek-column-krater",
    name: "Greek Column Krater — VESSEL / 07",
    style: "vase",
    height: 110,
    price: 49500,
    model: modelUrl("greek-column-krater.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/3D_Model_Column_Krater.stl/960px-3D_Model_Column_Krater.stl.png",
    orientation: "-90deg 0deg 0deg",
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
    name: "Venus with the Apple — NEOCLASSIC / 08",
    style: "neoclassical",
    height: 165,
    price: 116000,
    model: modelUrl("venus-with-the-apple.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Venus_med_apple_%28SMK_KMS6004%2C_Scan_the_World%29.stl/960px-Venus_med_apple_%28SMK_KMS6004%2C_Scan_the_World%29.stl.png",
    orientation: "-90deg 0deg 0deg",
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
    slug: "socrates-bust",
    name: "Socrates Bust — CLASSICS / 09",
    style: "ancient",
    height: 85,
    price: 72000,
    model: modelUrl("socrates-bust.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Scan-the-World-msr-socrates-5.stl/960px-Scan-the-World-msr-socrates-5.stl.png",
    orientation: "-90deg 0deg 0deg",
    initialBackground: "night",
    color: "Antik beyaz / Antique white",
    material: "PETG + ince taş dokusu / PETG + fine stone texture",
    leadTime: "18–28 gün / days",
    description: {
      tr: "Musée Saint-Raymond koleksiyonundaki antik Sokrates portresinin yüksek detaylı taraması. Keskin yüz karakteri ve yoğun saç-sakal yüzeyi kütüphane, ofis ve kültür mekânları için güçlü bir sanat objesidir.",
      en: "A high-detail scan of the ancient Socrates portrait in the Musée Saint-Raymond collection. Its incisive character and dense hair-and-beard surface make a powerful art object for libraries, offices and cultural spaces.",
    },
    source: {
      title: "Socrates Ra 351 — 3D scan",
      creator: "Scan the World / Musée Saint-Raymond",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Scan-the-World-msr-socrates-5.stl",
    },
  },
  {
    slug: "cleopatra-v-portrait",
    name: "Cleopatra V Portrait — ANTIQUITY / 10",
    style: "ancient",
    height: 90,
    price: 76000,
    model: modelUrl("cleopatra-v-portrait.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ra80-HDD-b.jpg/1000px-Ra80-HDD-b.jpg",
    orientation: "-90deg 0deg 0deg",
    initialBackground: "night",
    color: "Kum taşı / Sandstone",
    material: "PLA Pro + tek renk mineral yüzey / PLA Pro + monochrome mineral finish",
    leadTime: "20–30 gün / days",
    description: {
      tr: "MÖ 1. yüzyıla tarihlenen ve Kleopatra V ile ilişkilendirilen antik portre başının ayrıntılı taraması. Müze sergileri, tarih temalı oteller ve seçkin iç mekânlar için tek renkli olarak üretilir.",
      en: "A detailed scan of a first-century BCE portrait head associated with Cleopatra V. Produced as a monochrome statement piece for museum displays, history-led hospitality and refined interiors.",
    },
    source: {
      title: "Portrait associated with Cleopatra V — 3D scan",
      creator: "Scan the World / Musée Saint-Raymond",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:25-msr-cleopatre-v-5.stl",
    },
  },
  {
    slug: "greek-neck-amphora",
    name: "Greek Neck Amphora — VESSEL / 11",
    style: "vase",
    height: 125,
    price: 54000,
    model: modelUrl("greek-neck-amphora.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/3D_Model_Neck_Amphora.stl/960px-3D_Model_Neck_Amphora.stl.png",
    orientation: "-90deg 0deg 0deg",
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
    name: "Greek Hydria — VESSEL / 12",
    style: "vase",
    height: 105,
    price: 51000,
    model: modelUrl("greek-hydria.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/3D_Model_Hydria.stl/960px-3D_Model_Hydria.stl.png",
    orientation: "-90deg 0deg 0deg",
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
    name: "Greek Loutrophoros — VESSEL / 13",
    style: "vase",
    height: 150,
    price: 62500,
    model: modelUrl("greek-loutrophoros.glb"),
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/3D_Model_Loutrophoros.stl/960px-3D_Model_Loutrophoros.stl.png",
    orientation: "-90deg 0deg 0deg",
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
