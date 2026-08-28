export type SculptureSize = "Büyük" | "Çok büyük";
export type SculptureStyle = "Mimari" | "Organik" | "Geometrik";
export type SourceAssetRole = "technical-demo" | "open-catalog";

export type SculptureSourceAsset = {
  title: string;
  creator: string;
  licenseName: string;
  licenseUrl: string;
  sourceUrl: string;
  role: SourceAssetRole;
};

export type Sculpture = {
  id: string;
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  dimensions: string;
  material: string;
  finish: string;
  production: string;
  size: SculptureSize;
  style: SculptureStyle;
  priceCents: number | null;
  arReady: boolean;
  arModelUrl?: string;
  arIosModelUrl?: string;
  arScale?: "fixed" | "auto";
  catalogModelUrl?: string;
  sourceAsset?: SculptureSourceAsset;
  visual: "arch" | "column" | "loop";
};

/**
 * Sunum kayıtlarıdır. Açık lisanslı modeller kaynak ve lisans bilgileriyle
 * açıkça işaretlenir; stüdyo tarafından üretilmiş portfolyo işi sayılmaz.
 */
export const sculptures: Sculpture[] = [
  {
    id: "form-01",
    slug: "form-01",
    index: "01",
    title: "FORM / 01",
    category: "Mekânsal obje",
    description: "Geniş iç mekânlar ve kamusal alanlar için geliştirilen yapılandırılabilir mimari bir form.",
    dimensions: "Her kurulum için belirlenir",
    material: "Büyük ölçekli 3D baskı kompoziti; projeye göre belirlenir",
    finish: "Projeye göre seçilen mat monokrom yüzey",
    production: "Mekânsal ve teknik değerlendirme sonrasında, briefe göre üretilir",
    size: "Büyük",
    style: "Mimari",
    priceCents: null,
    arReady: true,
    arModelUrl: "/manus-storage/astronaut-demo_9589fd88.glb",
    arIosModelUrl: "/manus-storage/astronaut-demo_1be360d6.usdz",
    arScale: "fixed",
    sourceAsset: {
      title: "Astronaut",
      creator: "Google model-viewer demo varlığı",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://github.com/google/model-viewer/blob/master/packages/shared-assets/models/Astronaut.glb",
      role: "technical-demo",
    },
    visual: "arch",
  },
  {
    id: "volume-02",
    slug: "volume-02",
    index: "02",
    title: "VOLUME / 02",
    category: "İç mekân heykeli",
    description: "Özel mekânlar için hacim, oran ve sakin yüzey ritmi üzerine dikey bir çalışma.",
    dimensions: "Her kurulum için belirlenir",
    material: "Büyük ölçekli 3D baskı kompoziti; projeye göre belirlenir",
    finish: "Projeye göre seçilen mat monokrom yüzey",
    production: "Mekânsal ve teknik değerlendirme sonrasında, briefe göre üretilir",
    size: "Çok büyük",
    style: "Organik",
    priceCents: null,
    arReady: false,
    visual: "column",
  },
  {
    id: "void-03",
    slug: "void-03",
    index: "03",
    title: "VOID / 03",
    category: "Odak parçası",
    description: "Lobiler, perakende alanları ve sergi mekânları için odak noktası olarak tasarlanmış süreklilik arz eden form.",
    dimensions: "Her kurulum için belirlenir",
    material: "Büyük ölçekli 3D baskı kompoziti; projeye göre belirlenir",
    finish: "Projeye göre seçilen mat monokrom yüzey",
    production: "Mekânsal ve teknik değerlendirme sonrasında, briefe göre üretilir",
    size: "Büyük",
    style: "Geometrik",
    priceCents: null,
    arReady: false,
    visual: "loop",
  },
  {
    id: "portrait-04",
    slug: "portrait-04",
    index: "04",
    title: "PORTRAIT / 04",
    category: "Açık lisanslı büst",
    description: "Gerçekçi yüzey ve oran çalışmaları için seçilen, açık lisanslı dijital portre formu.",
    dimensions: "Her kurulum için belirlenir",
    material: "Büyük ölçekli 3D baskı kompoziti; baskı ayarları projeye göre belirlenir",
    finish: "Mat monokrom, metalik veya özel boyalı yüzey",
    production: "CC BY 3.0 atfı korunarak, seçilen ölçek ve yüzeye göre üretilir",
    size: "Büyük",
    style: "Organik",
    priceCents: null,
    arReady: true,
    arModelUrl: "/models/lee-perry-smith.glb",
    arScale: "auto",
    catalogModelUrl: "/models/lee-perry-smith.glb",
    sourceAsset: {
      title: "Infinite, 3D Head Scan",
      creator: "Lee Perry-Smith / Triplegangers",
      licenseName: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://github.com/mrdoob/three.js/tree/3744db754b77106a4b2921fcc0a77f0964b823a7/examples/models/gltf/LeePerrySmith",
      role: "open-catalog",
    },
    visual: "column",
  },
  {
    id: "skull-05",
    slug: "skull-05",
    index: "05",
    title: "SKULL / 05",
    category: "Açık lisanslı anatomik form",
    description: "Katmanlı yüzey ve yarı saydam malzeme denemelerine uygun anatomik bir heykel formu.",
    dimensions: "Her kurulum için belirlenir",
    material: "Büyük ölçekli 3D baskı kompoziti; baskı ayarları projeye göre belirlenir",
    finish: "Mat, yarı saydam veya özel boyalı yüzey",
    production: "CC0 kaynak model; baskı geometrisi ve yüzeyi proje öncesinde doğrulanır",
    size: "Büyük",
    style: "Organik",
    priceCents: null,
    arReady: true,
    arModelUrl: "/models/scattering-skull.glb",
    arScale: "auto",
    catalogModelUrl: "/models/scattering-skull.glb",
    sourceAsset: {
      title: "Scattering Skull",
      creator: "Vladimir Petkovic",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://github.com/KhronosGroup/glTF-Sample-Assets/tree/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/ScatteringSkull",
      role: "open-catalog",
    },
    visual: "arch",
  },
  {
    id: "iridescence-06",
    slug: "iridescence-06",
    index: "06",
    title: "IRIDESCENCE / 06",
    category: "Açık lisanslı kompozisyon",
    description: "Üçlü Suzanne formunu farklı yüzey karakterleriyle bir araya getiren deneysel bir kompozisyon.",
    dimensions: "Her kurulum için belirlenir",
    material: "Büyük ölçekli 3D baskı kompoziti; baskı ayarları projeye göre belirlenir",
    finish: "İridyum etkili, metalik veya mat monokrom yüzey",
    production: "CC0 kaynak model; seçilen ölçek ve üretim tekniğine göre hazırlanır",
    size: "Çok büyük",
    style: "Geometrik",
    priceCents: null,
    arReady: true,
    arModelUrl: "/models/iridescence-suzanne.glb",
    arScale: "auto",
    catalogModelUrl: "/models/iridescence-suzanne.glb",
    sourceAsset: {
      title: "Iridescence Suzanne",
      creator: "Mathias Kanzler ve Pascal Schoen / UX3D",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://github.com/KhronosGroup/glTF-Sample-Assets/tree/2d97dcc2463db123ed5203598cffedf8b6cf1683/Models/IridescenceSuzanne",
      role: "open-catalog",
    },
    visual: "loop",
  },
];

export function getSculpture(slug: string) {
  return sculptures.find(sculpture => sculpture.slug === slug);
}
