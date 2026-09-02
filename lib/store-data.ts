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
  exposure?: number;
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

const printablesImage = (filePath: string, credit: string): GalleryImage => ({
  src: `https://media.printables.com/${filePath}`,
  sourceUrl: "https://www.printables.com/model/1451449-ataturk-bust",
  credit,
});

const printablesModelImage = (model: string, filePath: string, credit: string): GalleryImage => ({
  src: `https://media.printables.com/${filePath}`,
  sourceUrl: `https://www.printables.com/model/${model}`,
  credit,
});

export const products: Product[] = [
  {
    slug: "mustafa-kemal-ataturk-bust",
    name: "Mustafa Kemal Atatürk Bust — HERITAGE / 12",
    style: "modern",
    height: 135,
    price: 118000,
    model: modelUrl("mustafa-kemal-ataturk-bust.glb"),
    poster: printablesImage(
      "media/prints/b2d797cf-d9c4-4f01-a7d0-abb71add54c6/images/10940750_c0a400e0-ccb4-4f91-bb65-02be73363737_62fd3815-5b01-4e1b-ba33-e6596904606e/img_20251008_113738.jpg",
      "OzzyOzil · Printables",
    ).src,
    gallery: [
      printablesImage(
        "media/prints/b2d797cf-d9c4-4f01-a7d0-abb71add54c6/images/10940750_c0a400e0-ccb4-4f91-bb65-02be73363737_62fd3815-5b01-4e1b-ba33-e6596904606e/img_20251008_113738.jpg",
        "OzzyOzil · Printables",
      ),
      printablesImage(
        "media/prints/4f6d4b94-fa96-4907-ba44-ddeb9516ad68/images/10940742_a124d34b-578c-4f7f-a663-a37a8d4df865_a3a90be3-fc58-4a4a-91ce-65e8e1f80ef7/23cb0bf819b1114ed7ece0654b303225.png",
        "OzzyOzil · Printables",
      ),
      printablesImage(
        "media/prints/6cf62745-1ecc-45e1-9fba-76135fdb280c/images/10940751_7d354999-f2c2-41c5-952d-c6b7f0f1e469_b318ce23-39fa-4d4d-899d-2bd8b1241b96/img_20251008_113619.jpg",
        "OzzyOzil · Printables",
      ),
    ],
    orientation: "0deg 90deg 0deg",
    exposure: 0.36,
    initialBackground: "night",
    color: "Mat bronz / Matte bronze",
    material: "PLA Pro + tek renk mineral yüzey / PLA Pro + monochrome mineral finish",
    leadTime: "22–32 gün / days",
    description: {
      tr: "Mustafa Kemal Atatürk'ü takım elbisesiyle betimleyen temiz siluetli, yüksek detaylı anıtsal büst. Kurumsal girişler, kültür merkezleri, restoranlar, oteller ve özel koleksiyonlar için büyük ölçekte üretilebilir.",
      en: "A high-detail monumental bust portraying Mustafa Kemal Atatürk in a formal suit with a clean architectural silhouette. Scalable for corporate entrances, cultural centres, restaurants, hotels and private collections.",
    },
    source: {
      title: "Atatürk Büst — Mustafa Kemal Atatürk Bust",
      creator: "OzzyOzil",
      licenseName: "Creative Commons Public Domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://www.printables.com/model/1451449-ataturk-bust",
    },
  },
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
      commonsImage("Venus with Apple by Bertel Thorvaldsen - Hearst Castle - DSC06186.JPG", "Daderot · Wikimedia Commons"),
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
    slug: "bronze-horse-head",
    name: "Bronze Horse Head — MODERN DECOR / 08",
    style: "modern",
    height: 120,
    price: 92000,
    model: modelUrl("bronze-horse-head.glb"),
    poster: polyHavenImage("horse_head", "primary", "Tina · Poly Haven").src,
    gallery: [
      polyHavenImage("horse_head", "primary", "Tina · Poly Haven"),
      polyHavenImage("horse_head", "clay", "Tina · Poly Haven"),
      polyHavenImage("horse_head", "orth_front", "Tina · Poly Haven"),
    ],
    orientation: "90deg 90deg 0deg",
    initialBackground: "night",
    color: "Eskitilmiş bronz / Aged bronze",
    material: "PETG + metal efektli mineral yüzey / PETG + metallic mineral finish",
    leadTime: "18–28 gün / days",
    description: {
      tr: "Akıcı yele formu ve eskitilmiş bronz görünümüyle çağdaş bir at başı heykeli. Modern restoranlar, otel lobileri, barlar ve seçkin konut projelerinde güçlü ama zarif bir odak noktası oluşturur.",
      en: "A contemporary horse-head sculpture with a flowing mane and aged-bronze appearance. It creates a strong yet refined focal point for modern restaurants, hotel lobbies, bars and premium residential interiors.",
    },
    source: {
      title: "Horse Head",
      creator: "Tina / Poly Haven",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://polyhaven.com/a/horse_head",
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
  {
    slug: "silent-dialogue",
    name: "Silent Dialogue — CONTEMPORARY / 13",
    style: "modern",
    height: 155,
    price: 106000,
    model: modelUrl("silent-dialogue.glb"),
    poster: printablesModelImage(
      "1248986-abstract-figure-decor-statue",
      "media/prints/420ced9f-ffed-4fdc-993e-76d1fee67645/images/9374317_ef10366b-4dd3-463a-9112-ebe6890b99ca_73197679-ae6d-4fbc-a525-cdf10d941db5/img_20250329_223435.jpg",
      "RUMcajz · Printables",
    ).src,
    gallery: [
      printablesModelImage(
        "1248986-abstract-figure-decor-statue",
        "media/prints/420ced9f-ffed-4fdc-993e-76d1fee67645/images/9374317_ef10366b-4dd3-463a-9112-ebe6890b99ca_73197679-ae6d-4fbc-a525-cdf10d941db5/img_20250329_223435.jpg",
        "RUMcajz · Printables",
      ),
      printablesModelImage(
        "1248986-abstract-figure-decor-statue",
        "media/prints/7933f002-5f0d-4760-befe-1d974bcff782/images/9374318_c44ad305-a37e-4e2f-81d4-3870586bd245_68b25c64-eec5-4602-b8ad-f57cc4ca230c/43.jpg",
        "RUMcajz · Printables",
      ),
      printablesModelImage(
        "1248986-abstract-figure-decor-statue",
        "media/prints/0d6e3e23-d2e8-428f-a656-305c834d0e9a/images/9374319_ac2397b9-9fb8-4792-8bcd-1966bcbd343e_942e63d6-a491-49a7-8e0e-4390301def0e/img_20250329_223450.jpg",
        "RUMcajz · Printables",
      ),
    ],
    exposure: 0.48,
    initialBackground: "night",
    color: "Fildişi beyazı / Ivory white",
    material: "PLA Pro + ipeksi mineral yüzey / PLA Pro + silky mineral finish",
    leadTime: "24–34 gün / days",
    description: {
      tr: "Tek bir akışkan hacim içinde düşünme ve içe dönüş jestini birleştiren çağdaş figür. Fine-dining restoranları, sanat otelleri ve sakin lüks konutlarda heykelsi bir odak olarak büyük ölçekte üretilebilir.",
      en: "A contemporary figure that unites contemplation and introspection within one flowing volume. Scalable as a sculptural focal point for fine-dining restaurants, art hotels and quietly luxurious residences.",
    },
    source: {
      title: "Abstract Figure Decor Statue",
      creator: "RUMcajz",
      licenseName: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourceUrl: "https://www.printables.com/model/1248986-abstract-figure-decor-statue",
    },
  },
  {
    slug: "contour-fox",
    name: "Contour Fox — MODERN DECOR / 14",
    style: "decorative",
    height: 125,
    price: 88500,
    model: modelUrl("contour-fox.glb"),
    poster: printablesModelImage(
      "1315737-fox-sculpture-minimalist-organic-design",
      "media/prints/20f2d7aa-53c9-48fe-a2c5-a1df249cd04f/images/10257761_ae2bc28f-bea1-42ce-bcb1-605359e25513_6d17cb90-fca4-4b0a-9d8e-02c203550ae7/img_9851.jpg",
      "spezialuniversal · Printables",
    ).src,
    gallery: [
      printablesModelImage(
        "1315737-fox-sculpture-minimalist-organic-design",
        "media/prints/20f2d7aa-53c9-48fe-a2c5-a1df249cd04f/images/10257761_ae2bc28f-bea1-42ce-bcb1-605359e25513_6d17cb90-fca4-4b0a-9d8e-02c203550ae7/img_9851.jpg",
        "spezialuniversal · Printables",
      ),
      printablesModelImage(
        "1315737-fox-sculpture-minimalist-organic-design",
        "media/prints/5c6150c4-2eac-4789-9925-d48ba66a51b2/previews/ded6d162-900f-4fe8-8a05-32145d55ff3c.png",
        "spezialuniversal · Printables 3D preview",
      ),
    ],
    exposure: 0.46,
    initialBackground: "night",
    color: "Saten siyah / Satin black",
    material: "PETG + saten metal yüzey / PETG + satin metallic finish",
    leadTime: "20–30 gün / days",
    description: {
      tr: "Tilkinin anatomisini akışkan dikey şeritlere dönüştüren biyomorfik, orta-yüksek detaylı dekor heykeli. Şarap barları, modern restoranlar, otel salonları ve koleksiyoner evleri için güçlü bir siluet sunar.",
      en: "A biomorphic, mid-to-high-detail decorative sculpture translating a fox anatomy into flowing vertical contours. Its assertive silhouette suits wine bars, modern restaurants, hotel lounges and collectors' homes.",
    },
    source: {
      title: "Fox Sculpture — Minimalist Organic Design",
      creator: "spezialuniversal",
      licenseName: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourceUrl: "https://www.printables.com/model/1315737-fox-sculpture-minimalist-organic-design",
    },
  },
  {
    slug: "ribbon-twist",
    name: "Ribbon Twist — CONTEMPORARY / 15",
    style: "modern",
    height: 145,
    price: 97500,
    model: modelUrl("ribbon-twist.glb"),
    poster: printablesModelImage(
      "1138685-twist-organic-sculpture-support-free",
      "media/prints/1138685/images/8592752_2d4b0cf9-6605-493f-9feb-68ce3357de15_9f9a2d0d-b92a-4f93-9cca-952f412a5e18/20250107_0648052.jpg",
      "Den · Printables",
    ).src,
    gallery: [
      printablesModelImage(
        "1138685-twist-organic-sculpture-support-free",
        "media/prints/1138685/images/8592752_2d4b0cf9-6605-493f-9feb-68ce3357de15_9f9a2d0d-b92a-4f93-9cca-952f412a5e18/20250107_0648052.jpg",
        "Den · Printables",
      ),
      printablesModelImage(
        "1138685-twist-organic-sculpture-support-free",
        "media/prints/1138685/previews/e5bd8b73898ac752ca947a9accc159cd452c593f.png",
        "Den · Printables 3D preview",
      ),
    ],
    exposure: 0.48,
    initialBackground: "night",
    color: "Mat şampanya / Matte champagne",
    material: "PLA Pro + ince metalik mineral yüzey / PLA Pro + fine metallic mineral finish",
    leadTime: "22–32 gün / days",
    description: {
      tr: "Birbirine geçen yumuşak şeritlerin negatif boşluklarla dengelendiği organik çağdaş kompozisyon. Konsol masaları, restoran karşılama alanları ve yüksek tavanlı özel konutlar için anıtsal ölçekte uygulanabilir.",
      en: "An organic contemporary composition of interlocking soft ribbons balanced by negative space. Suitable at monumental scale for console tables, restaurant reception areas and high-ceiling private residences.",
    },
    source: {
      title: "Twist Organic Sculpture",
      creator: "Den",
      licenseName: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourceUrl: "https://www.printables.com/model/1138685-twist-organic-sculpture-support-free",
    },
  },
  {
    slug: "organic-monolith",
    name: "Organic Monolith — MODERN ART / 16",
    style: "modern",
    height: 175,
    price: 132000,
    model: modelUrl("organic-monolith.glb"),
    poster: printablesModelImage(
      "1136905-organic-sculpture-support-free",
      "media/prints/1136905/images/8579195_3b232617-1cb9-4473-a37a-cc9b8e526205_49ca7197-0d2b-4fef-a075-6dac33b380f3/20250105_2324404.jpg",
      "Den · Printables",
    ).src,
    gallery: [
      printablesModelImage(
        "1136905-organic-sculpture-support-free",
        "media/prints/1136905/images/8579195_3b232617-1cb9-4473-a37a-cc9b8e526205_49ca7197-0d2b-4fef-a075-6dac33b380f3/20250105_2324404.jpg",
        "Den · Printables",
      ),
      printablesModelImage(
        "1136905-organic-sculpture-support-free",
        "media/prints/1136905/previews/40dc8fcfa25803427d24f7a6bd7bf3c749e86e30.png",
        "Den · Printables 3D preview",
      ),
    ],
    exposure: 0.44,
    initialBackground: "night",
    color: "Kömür siyahı / Charcoal black",
    material: "PETG + mikro dokulu mat yüzey / PETG + micro-textured matte finish",
    leadTime: "28–40 gün / days",
    description: {
      tr: "Oyulmuş iç boşlukları ve kesintisiz kabuğuyla taş ile akışkan metal arasında duran organik bir monolit. Özel yemek salonları, sanat odaklı ofisler ve çağdaş villalarda bağımsız merkez eser olarak tasarlanmıştır.",
      en: "An organic monolith poised between carved stone and liquid metal, defined by hollowed apertures and a continuous shell. Designed as a standalone centrepiece for private dining rooms, art-led offices and contemporary villas.",
    },
    source: {
      title: "Organic Sculpture",
      creator: "Den",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://www.printables.com/model/1136905-organic-sculpture-support-free",
    },
  },
  {
    slug: "levitation-line",
    name: "Levitation Line — CONTEMPORARY / 17",
    style: "modern",
    height: 185,
    price: 121000,
    model: modelUrl("levitation-line.glb"),
    poster: printablesModelImage(
      "485566-organic-levitation-sculpture",
      "media/prints/485566/images/3968684_6b9f606b-cd1e-4f79-9f07-4f0bd305ddd0/2023-05-19-194814dd.jpg",
      "Triple G Workshop · Printables",
    ).src,
    gallery: [
      printablesModelImage(
        "485566-organic-levitation-sculpture",
        "media/prints/485566/images/3968684_6b9f606b-cd1e-4f79-9f07-4f0bd305ddd0/2023-05-19-194814dd.jpg",
        "Triple G Workshop · Printables",
      ),
      printablesModelImage(
        "485566-organic-levitation-sculpture",
        "media/prints/485566/images/3966063_784714ee-4dd4-46d1-a051-3029c77ef252/2023-05-19-194820.jpg",
        "Triple G Workshop · Printables",
      ),
      printablesModelImage(
        "485566-organic-levitation-sculpture",
        "media/prints/485566/images/3968691_bfabf30a-51f9-408c-a98c-4a5d4eb04af4/2023-05-20-090229.jpg",
        "Triple G Workshop · Printables",
      ),
    ],
    exposure: 0.47,
    initialBackground: "night",
    color: "Fırçalanmış bronz / Brushed bronze",
    material: "PETG + bronz efektli mineral yüzey / PETG + bronze-effect mineral finish",
    leadTime: "28–40 gün / days",
    description: {
      tr: "İnsan bedenini havada asılı tek bir organik çizgiye indirgeyen çağdaş figüratif kompozisyon. Galeri duvarları, çift yükseklikli restoranlar ve özel yemek salonlarında hafif ama anıtsal bir vurgu yaratır.",
      en: "A contemporary figurative composition reducing the human body to a single organic line suspended in space. It creates a light yet monumental accent for gallery walls, double-height restaurants and private dining rooms.",
    },
    source: {
      title: "Organic Levitation Sculpture",
      creator: "Triple G Workshop",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://www.printables.com/model/485566-organic-levitation-sculpture",
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
