"use client";

import * as React from "react";
import {
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  Globe2,
  LogOut,
  Menu,
  Minus,
  Plus,
  Scan,
  ShoppingBag,
  Trash2,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  formatPrice,
  isLocale,
  products,
  styles,
  type Locale,
  type Product,
} from "@/lib/store-data";

type CartLine = { slug: string; quantity: number };
type PublicUser = { id: string; email: string; name: string | null };

const copy = {
  tr: {
    home: "Ana sayfa", catalog: "Koleksiyon", about: "Hakkımızda", contact: "İletişim", account: "Hesap", cart: "Sepet",
    heroKicker: "BÜYÜK FORMAT 3D ÜRETİM / ADANA", heroTitle: "ÖLÇEĞİ\nDEĞİŞTİR.",
    heroText: "Mekânlar, vitrinler ve markalar için dijitalden fiziksele uzanan heykeller. Seçili eserleri satın almadan önce bulunduğunuz yerde AR ile deneyimleyin.",
    seeCollection: "Koleksiyonu incele", custom: "Özel üretim konuşalım", arReady: "AR ile görüntülenebilir",
    collection: "SEÇİLİ KOLEKSİYON", collectionText: "Boyut, malzeme ve bitiş her proje için yeniden ölçeklenebilir.",
    process: "FİKİRDEN MEKÂNA", steps: ["Modelleme", "Büyük format baskı", "Yüzey ve teslimat"],
    processText: ["Hazır modelinizi üretime hazırlıyor veya fikrinizi sıfırdan üç boyutlu tasarlıyoruz.", "Parçalama, iç yapı ve malzeme seçimini eserin ölçeğine göre planlıyoruz.", "Zımpara, boya ve koruyucu katman sonrası teslimat planını birlikte netleştiriyoruz."],
    filters: "FİLTRELER", height: "Yükseklik", allStyles: "Tüm stiller", sort: "Sıralama",
    randomOrder: "Her açılışta rastgele", priceLow: "Fiyat: düşükten yükseğe", priceHigh: "Fiyat: yüksekten düşüğe", sizeHigh: "Boyut: büyükten küçüğe", results: "eser",
    add: "Sepete ekle", details: "Detaylar", noResults: "Bu filtrelere uygun eser bulunamadı.", reset: "Filtreleri sıfırla",
    specs: "TEKNİK ÖZELLİKLER", dimensions: "Yükseklik", material: "Malzeme", finish: "Renk / bitiş", leadTime: "Tahmini üretim",
    arTitle: "MEKÂNINIZDA GÖRÜN", arText: "Telefonunuzda AR düğmesine dokunarak heykeli mekânınıza yerleştirin ve boyutunu ayarlayın.", arUnavailable: "Bu eser için AR modeli yakında eklenecek.",
    modelSource: "3D model kaynağı ve lisansı",
    cartTitle: "Sepetiniz", cartDescription: "Ödeme alınmaz. Talebiniz WhatsApp üzerinden iletilir.", emptyCart: "Sepetiniz henüz boş.", total: "Tahmini toplam", orderWhatsapp: "WhatsApp ile sipariş talebi", continueShopping: "Alışverişe devam et",
    login: "Giriş yap", register: "Kayıt ol", name: "Ad soyad", email: "E-posta", password: "Şifre", loginButton: "E-posta ile giriş", registerButton: "Hesap oluştur", google: "Google ile devam et", authDescription: "Favorilerinizi ve iletişim bilgilerinizi tek yerde tutun.", logout: "Çıkış yap", authSuccess: "Hesabınıza giriş yapıldı.", authError: "Giriş bilgilerinizi kontrol edin.",
    aboutTitle: "FİKİRLERİ\nNESNEYE DÖNÜŞTÜRÜYORUZ.", aboutText: "İki Medya; promosyon, reklam, dijital çözümler ve üretimi aynı yaratıcı süreçte buluşturur. Bu koleksiyon, büyük format 3D baskıyı iç mekân, vitrin ve kurumsal projelere taşıyan yeni üretim hattımızdır.", aboutNote: "Her çalışma; ölçek, kullanım alanı ve yüzey beklentisine göre tekliflendirilir.",
    contactTitle: "PROJENİZİ\nANLATIN.", contactText: "Hazır STL/OBJ dosyanızı, referans görselinizi veya yalnızca fikrinizi paylaşabilirsiniz.", address: "Reşatbey Mh., 62017. Sk. 36/B Seyhan/Adana", emailValue: "ikimedyapromosyon@gmail.com", whatsapp: "WhatsApp üzerinden yazın",
    policies: "Gizlilik ve teslimat", policyTitle: "ALIŞVERİŞ BİLGİLERİ", policyText: "Sitede çevrimiçi ödeme alınmaz. Sepet, talep listenizi oluşturur; kesin fiyat, üretim süresi, teslimat ve iade koşulları WhatsApp görüşmesinde ürün ölçüsü ve kişiselleştirme kapsamına göre yazılı olarak onaylanır.", footerLine: "Büyük format 3D baskı heykeller ve özel üretim.",
  },
  en: {
    home: "Home", catalog: "Collection", about: "About", contact: "Contact", account: "Account", cart: "Cart",
    heroKicker: "LARGE-FORMAT 3D PRODUCTION / ADANA", heroTitle: "CHANGE\nTHE SCALE.",
    heroText: "Sculptures for spaces, showcases and brands—from digital form to physical object. Preview selected works in your space with AR before ordering.",
    seeCollection: "Explore the collection", custom: "Discuss a custom piece", arReady: "Available in AR",
    collection: "SELECTED COLLECTION", collectionText: "Size, material and finish can be rescaled for each project.",
    process: "FROM IDEA TO SPACE", steps: ["3D modelling", "Large-format printing", "Finish and delivery"],
    processText: ["We prepare your model for production or design your idea in 3D from the ground up.", "Part splitting, internal structure and material are planned around the final scale.", "After sanding, paint and protective coating, we confirm the delivery plan together."],
    filters: "FILTERS", height: "Height", allStyles: "All styles", sort: "Sort",
    randomOrder: "Random on each visit", priceLow: "Price: low to high", priceHigh: "Price: high to low", sizeHigh: "Size: large to small", results: "works",
    add: "Add to cart", details: "Details", noResults: "No works match these filters.", reset: "Reset filters",
    specs: "SPECIFICATIONS", dimensions: "Height", material: "Material", finish: "Colour / finish", leadTime: "Estimated production",
    arTitle: "VIEW IT IN YOUR SPACE", arText: "Tap the AR button on your phone to place the sculpture in your space and adjust its scale.", arUnavailable: "An AR model for this piece is coming soon.",
    modelSource: "3D model source and licence",
    cartTitle: "Your cart", cartDescription: "No online payment. Your request is sent through WhatsApp.", emptyCart: "Your cart is empty.", total: "Estimated total", orderWhatsapp: "Request order via WhatsApp", continueShopping: "Continue shopping",
    login: "Sign in", register: "Register", name: "Full name", email: "Email", password: "Password", loginButton: "Sign in with email", registerButton: "Create account", google: "Continue with Google", authDescription: "Keep your favourites and contact details in one place.", logout: "Sign out", authSuccess: "You are signed in.", authError: "Please check your sign-in details.",
    aboutTitle: "WE TURN IDEAS\nINTO OBJECTS.", aboutText: "İki Medya brings promotion, advertising, digital solutions and production into one creative process. This collection is our new production line bringing large-format 3D printing to interiors, showcases and corporate projects.", aboutNote: "Every work is quoted according to its scale, use case and finish requirements.",
    contactTitle: "TELL US ABOUT\nYOUR PROJECT.", contactText: "Share a ready STL/OBJ file, a reference image, or simply your idea.", address: "Reşatbey Mh., 62017. Sk. 36/B Seyhan/Adana, Türkiye", emailValue: "ikimedyapromosyon@gmail.com", whatsapp: "Message us on WhatsApp",
    policies: "Privacy and delivery", policyTitle: "SHOPPING INFORMATION", policyText: "No online payment is collected. The cart creates an enquiry list; final price, production time, delivery and return terms are confirmed in writing on WhatsApp according to the dimensions and customisation scope.", footerLine: "Large-format 3D-printed sculpture and custom production.",
  },
} as const;

const styleLabels: Record<Locale, Record<Product["style"], string>> = {
  tr: { ancient: "Antik klasik", renaissance: "Rönesans", neoclassical: "Neoklasik", modern: "Modern sanat", decorative: "Dekoratif heykel", vase: "Vazo" },
  en: { ancient: "Ancient classics", renaissance: "Renaissance", neoclassical: "Neoclassical", modern: "Modern art", decorative: "Decorative sculpture", vase: "Vase" },
};

const modelBackgrounds = [
  { id: "studio", label: { tr: "Açık stüdyo", en: "Light studio" } },
  { id: "stone", label: { tr: "Taş zemin", en: "Stone setting" } },
  { id: "night", label: { tr: "Koyu galeri", en: "Dark gallery" } },
] as const;

type ModelBackground = (typeof modelBackgrounds)[number]["id"];

function apiUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
  return `${base}${path}`;
}

function pathFor(locale: Locale, page: "home" | "catalog" | "about" | "contact" | "policies") {
  if (page === "home") return `/${locale}`;
  const localized = {
    tr: { catalog: "koleksiyon", about: "hakkimizda", contact: "iletisim", policies: "bilgiler" },
    en: { catalog: "collection", about: "about", contact: "contact", policies: "information" },
  }[locale];
  return `/${locale}/${localized[page]}`;
}

function productPath(locale: Locale, slug: string) {
  return `/${locale}/${locale === "tr" ? "urun" : "product"}/${slug}`;
}

type IkiWindow = Window & { __IKI_BASE_PATH__?: string };

function basePath() {
  if (typeof window === "undefined") return "";
  return ((window as IkiWindow).__IKI_BASE_PATH__ ?? "").replace(/\/$/, "");
}

function routeFromLocation(pathname: string) {
  const base = basePath();
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return pathname.slice(base.length) || "/";
  }
  return pathname;
}

function browserPath(route: string) {
  return `${basePath()}${route}` || "/";
}

function useRoute(initialPath: string) {
  const [currentPath, setCurrentPath] = React.useState(() => {
    if (typeof window === "undefined") return initialPath;
    const route = routeFromLocation(window.location.pathname);
    return route === "/" ? initialPath : route;
  });
  React.useEffect(() => {
    if (routeFromLocation(window.location.pathname) === "/") {
      window.history.replaceState({}, "", browserPath(initialPath));
    }
    const onPop = () => setCurrentPath(routeFromLocation(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [initialPath]);
  const navigate = React.useCallback((path: string) => {
    window.history.pushState({}, "", browserPath(path));
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return { currentPath, navigate };
}

export function StoreApp({ initialPath }: { initialPath: string }) {
  const { currentPath, navigate } = useRoute(initialPath);
  const segments = currentPath.split("/").filter(Boolean);
  const locale: Locale = isLocale(segments[0]) ? segments[0] : "tr";
  const pageSegment = segments[1];
  const isCatalog = pageSegment === "koleksiyon" || pageSegment === "collection";
  const isProduct = pageSegment === "urun" || pageSegment === "product";
  const isAbout = pageSegment === "hakkimizda" || pageSegment === "about";
  const isContact = pageSegment === "iletisim" || pageSegment === "contact";
  const isPolicies = pageSegment === "bilgiler" || pageSegment === "information";
  const product = isProduct ? products.find((item) => item.slug === segments[2]) : undefined;

  const [cart, setCart] = React.useState<CartLine[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = window.localStorage.getItem("iki-cart");
    if (!saved) return [];
    try { return JSON.parse(saved) as CartLine[]; } catch { return []; }
  });
  const [cartOpen, setCartOpen] = React.useState(false);
  const [authOpen, setAuthOpen] = React.useState(false);
  const [user, setUser] = React.useState<PublicUser | null>(null);
  React.useEffect(() => {
    fetch(apiUrl("/api/auth/me"), { credentials: "include" })
      .then((response) => response.ok ? response.json() : null)
      .then((data: { user?: PublicUser | null } | null) => setUser(data?.user ?? null))
      .catch(() => null);
  }, []);
  React.useEffect(() => { window.localStorage.setItem("iki-cart", JSON.stringify(cart)); }, [cart]);

  function addToCart(slug: string) {
    setCart((lines) => {
      const existing = lines.find((line) => line.slug === slug);
      return existing
        ? lines.map((line) => line.slug === slug ? { ...line, quantity: line.quantity + 1 } : line)
        : [...lines, { slug, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function switchLocale() {
    const next: Locale = locale === "tr" ? "en" : "tr";
    if (product) return navigate(productPath(next, product.slug));
    if (isCatalog) return navigate(pathFor(next, "catalog"));
    if (isAbout) return navigate(pathFor(next, "about"));
    if (isContact) return navigate(pathFor(next, "contact"));
    if (isPolicies) return navigate(pathFor(next, "policies"));
    navigate(pathFor(next, "home"));
  }

  return (
    <div className="site-frame">
      <SiteHeader locale={locale} currentPath={currentPath} navigate={navigate} cartCount={cart.reduce((sum, line) => sum + line.quantity, 0)} onCart={() => setCartOpen(true)} onAuth={() => setAuthOpen(true)} onLocale={switchLocale} user={user} />
      <main>
        {product ? <ProductView locale={locale} product={product} navigate={navigate} onAdd={addToCart} />
          : isCatalog ? <CatalogView locale={locale} navigate={navigate} onAdd={addToCart} />
          : isAbout ? <AboutView locale={locale} />
          : isContact ? <ContactView locale={locale} />
          : isPolicies ? <PolicyView locale={locale} />
          : <HomeView locale={locale} navigate={navigate} onAdd={addToCart} />}
      </main>
      <SiteFooter locale={locale} navigate={navigate} />
      <CartDrawer locale={locale} open={cartOpen} onOpen={setCartOpen} cart={cart} setCart={setCart} navigate={navigate} />
      <AuthModal locale={locale} open={authOpen} onOpen={setAuthOpen} user={user} setUser={setUser} />
    </div>
  );
}

function LinkButton({ href, navigate, className, children }: { href: string; navigate: (path: string) => void; className?: string; children: React.ReactNode }) {
  return <a href={href} className={className} onClick={(event) => { event.preventDefault(); navigate(href); }}>{children}</a>;
}

function SiteHeader({ locale, currentPath, navigate, cartCount, onCart, onAuth, onLocale, user }: {
  locale: Locale; currentPath: string; navigate: (path: string) => void; cartCount: number; onCart: () => void; onAuth: () => void; onLocale: () => void; user: PublicUser | null;
}) {
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = [[t.catalog, pathFor(locale, "catalog")], [t.about, pathFor(locale, "about")], [t.contact, pathFor(locale, "contact")]];
  function mobileNavigate(path: string) {
    setMenuOpen(false);
    navigate(path);
  }
  return <header className="site-header">
    <LinkButton href={pathFor(locale, "home")} navigate={navigate} className="brand-mark"><span>İKİ</span><span>3D</span></LinkButton>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <LinkButton key={href} href={href} navigate={navigate} className={currentPath.startsWith(href) ? "active" : ""}>{label}</LinkButton>)}</nav>
    <div className="header-actions">
      <button className="text-action" onClick={onLocale} aria-label={locale === "tr" ? "Switch to English" : "Türkçeye geç"}><Globe2 /> {locale === "tr" ? "EN" : "TR"}</button>
      <button className="icon-action" onClick={onAuth} aria-label={t.account} title={user?.email ?? t.account}><UserRound /></button>
      <button className="cart-action" onClick={onCart} aria-label={`${t.cart}: ${cartCount}`}><ShoppingBag /><span>{cartCount.toString().padStart(2, "0")}</span></button>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <button className="mobile-menu-trigger" onClick={() => setMenuOpen(true)} aria-label={locale === "tr" ? "Menüyü aç" : "Open menu"} aria-expanded={menuOpen}><Menu /></button>
        <SheetContent side="left" className="mobile-menu-sheet">
          <SheetHeader><SheetTitle>İKİ / 3D</SheetTitle><SheetDescription>{locale === "tr" ? "Menü" : "Menu"}</SheetDescription></SheetHeader>
          <nav className="mobile-nav" aria-label={locale === "tr" ? "Mobil navigasyon" : "Mobile navigation"}>
            <a href={pathFor(locale, "home")} className={currentPath === `/${locale}` ? "active" : ""} onClick={(event) => { event.preventDefault(); mobileNavigate(pathFor(locale, "home")); }}>{t.home}<span>00</span></a>
            {links.map(([label, href], index) => <a key={href} href={href} className={currentPath.startsWith(href) ? "active" : ""} onClick={(event) => { event.preventDefault(); mobileNavigate(href); }}>{label}<span>0{index + 1}</span></a>)}
          </nav>
          <div className="mobile-menu-footer"><span>İKİ MEDYA</span><span>ADANA / TÜRKİYE</span></div>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}

function shuffleProducts(items: Product[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function HomeView({ locale, navigate, onAdd }: { locale: Locale; navigate: (path: string) => void; onAdd: (slug: string) => void }) {
  const t = copy[locale];
  const homeProducts = React.useMemo(() => shuffleProducts(products), []);
  const featuredProduct = products.find((product) => product.slug === "gothic-guardian")
    ?? products.find((product) => product.slug === "marble-bust")
    ?? products[0];
  return <>
    <section className="hero-section"><div className="hero-copy"><p className="eyebrow">{t.heroKicker}</p><h1>{t.heroTitle.split("\n").map((line) => <span className="hero-title-line" key={line}>{line}</span>)}</h1><p className="hero-text">{t.heroText}</p><div className="hero-buttons"><Button className="square-button" onClick={() => navigate(pathFor(locale, "catalog"))}>{t.seeCollection}<ArrowRight /></Button><Button variant="outline" className="square-button" onClick={() => navigate(pathFor(locale, "contact"))}>{t.custom}</Button></div></div><div className="hero-art"><ProductGallery product={featuredProduct} locale={locale} priority /><div className="hero-art-label"><Scan />{t.arReady}</div></div></section>
    <section className="collection-preview section-pad"><div className="section-heading"><div><p className="eyebrow">01 / {t.collection}</p><h2>{t.collection}</h2></div><p>{t.collectionText}</p></div><div className="featured-grid">{homeProducts.slice(0, 3).map((product, index) => <ProductCard key={product.slug} product={product} locale={locale} index={index + 1} navigate={navigate} onAdd={onAdd} />)}</div><button className="wide-link" onClick={() => navigate(pathFor(locale, "catalog"))}>{t.seeCollection}<ChevronRight /></button></section>
    <section className="process-section section-pad"><p className="eyebrow">02 / {t.process}</p><div className="process-grid">{t.steps.map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{t.processText[index]}</p></article>)}</div></section>
  </>;
}

function CatalogView({ locale, navigate, onAdd }: { locale: Locale; navigate: (path: string) => void; onAdd: (slug: string) => void }) {
  const t = copy[locale];
  const randomProducts = React.useMemo(() => shuffleProducts(products), []);
  const [height, setHeight] = React.useState([40, 240]);
  const [style, setStyle] = React.useState("all");
  const [sort, setSort] = React.useState("random");
  const filtered = React.useMemo(() => {
    const result = randomProducts.filter((product) => product.height >= height[0] && product.height <= height[1] && (style === "all" || product.style === style));
    if (sort === "random") return result;
    return [...result].sort((a, b) => sort === "price-desc" ? b.price - a.price : sort === "size-desc" ? b.height - a.height : a.price - b.price);
  }, [height, randomProducts, style, sort]);
  return <section className="catalog-page section-pad"><div className="catalog-title"><p className="eyebrow">01 / {t.catalog}</p><h1>{t.catalog}</h1><span>{filtered.length.toString().padStart(2, "0")} {t.results}</span></div><div className="catalog-layout"><aside className="filter-panel"><p className="eyebrow">{t.filters}</p><div className="filter-block"><label>{t.height}</label><strong>{height[0]}–{height[1]} cm</strong><Slider min={40} max={240} step={5} value={height} onValueChange={setHeight} aria-label={t.height} /></div><div className="filter-block"><label>{locale === "tr" ? "Stil" : "Style"}</label><Select value={style} onValueChange={setStyle}><SelectTrigger className="filter-select"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">{t.allStyles}</SelectItem>{styles.map((value) => <SelectItem key={value} value={value}>{styleLabels[locale][value]}</SelectItem>)}</SelectContent></Select></div><div className="filter-block"><label>{t.sort}</label><Select value={sort} onValueChange={setSort}><SelectTrigger className="filter-select"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="random">{t.randomOrder}</SelectItem><SelectItem value="price-asc">{t.priceLow}</SelectItem><SelectItem value="price-desc">{t.priceHigh}</SelectItem><SelectItem value="size-desc">{t.sizeHigh}</SelectItem></SelectContent></Select></div><Button variant="outline" className="square-button" onClick={() => { setHeight([40, 240]); setStyle("all"); setSort("random"); }}>{t.reset}</Button></aside><div className="catalog-grid">{filtered.length ? filtered.map((product, index) => <ProductCard key={product.slug} product={product} locale={locale} index={index + 1} navigate={navigate} onAdd={onAdd} priority={index < 2} />) : <div className="empty-state"><Box /><p>{t.noResults}</p></div>}</div></div></section>;
}

function ProductCard({ product, locale, index, navigate, onAdd, priority = true }: { product: Product; locale: Locale; index: number; navigate: (path: string) => void; onAdd: (slug: string) => void; priority?: boolean }) {
  const t = copy[locale];
  return <article className="product-card"><div className="product-image"><ProductGallery product={product} locale={locale} priority={priority} /><span className="product-index">{index.toString().padStart(2, "0")}</span><span className="ar-badge"><Scan />AR</span></div><div className="product-meta"><div><p>{styleLabels[locale][product.style]} / {product.height} cm</p><h3>{product.name}</h3></div><strong>{formatPrice(product.price, locale)}</strong></div><div className="product-actions"><Button variant="outline" className="square-button" onClick={() => navigate(productPath(locale, product.slug))}>{t.details}</Button><Button className="square-button" onClick={() => onAdd(product.slug)}>{t.add}<Plus /></Button></div></article>;
}

function ProductGallery({ product, locale, priority }: { product: Product; locale: Locale; priority: boolean }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [modelProgress, setModelProgress] = React.useState<{ percentage: number; status: ModelLoadState["status"] }>({ percentage: 0, status: "loading" });
  const slideCount = product.gallery.length + 1;

  React.useEffect(() => {
    if (!api) return;
    const syncSelection = () => setSelected(api.selectedScrollSnap());
    syncSelection();
    api.on("select", syncSelection);
    api.on("reInit", syncSelection);
    return () => {
      api.off("select", syncSelection);
      api.off("reInit", syncSelection);
    };
  }, [api]);

  return <div className="product-gallery">
    <Carousel setApi={setApi} opts={{ align: "start", watchDrag: (_api, event) => !(event.target as Element).closest("model-viewer") }} className="product-gallery-carousel" aria-label={locale === "tr" ? `${product.name} görsel galerisi` : `${product.name} image gallery`}>
      <CarouselContent className="product-gallery-track">
        {product.gallery.map((image, imageIndex) => <CarouselItem key={image.src} className="product-gallery-slide">
          <img src={image.src} alt={locale === "tr" ? `${product.name}, görünüm ${imageIndex + 1}` : `${product.name}, view ${imageIndex + 1}`} loading={priority && imageIndex === 0 ? "eager" : "lazy"} />
          <a className="gallery-credit" href={image.sourceUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>{image.credit}</a>
        </CarouselItem>)}
        <CarouselItem className="product-gallery-slide product-gallery-model-slide">
          <ModelPreview src={product.model} alt={product.name} className="card-model" locale={locale} poster={product.poster} loading={priority ? "eager" : "lazy"} showLoadingOverlay={false} onLoadStateChange={setModelProgress} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="gallery-arrow gallery-arrow--previous" aria-label={locale === "tr" ? "Önceki görünüm" : "Previous view"} />
      <CarouselNext className="gallery-arrow gallery-arrow--next" aria-label={locale === "tr" ? "Sonraki görünüm" : "Next view"} />
    </Carousel>
    {modelProgress.status !== "loaded" ? <div className={`model-loading gallery-model-loading${modelProgress.status === "error" ? " model-loading--error" : ""}`} role="status" aria-live="polite">
      <div className="model-loading-label"><span>{modelProgress.status === "error" ? (locale === "tr" ? "Model yüklenemedi" : "Model failed to load") : (locale === "tr" ? "3D model arka planda yükleniyor" : "3D model loading in background")}</span><strong>{modelProgress.status === "error" ? "!" : `${modelProgress.percentage}%`}</strong></div>
      <Progress value={modelProgress.status === "error" ? 0 : modelProgress.percentage} className="model-loading-progress" aria-label={locale === "tr" ? `Model yükleme yüzde ${modelProgress.percentage}` : `Model loading ${modelProgress.percentage} percent`} />
    </div> : null}
    <div className="gallery-pagination" aria-label={locale === "tr" ? "Galeri sayfaları" : "Gallery pages"}>
      {Array.from({ length: slideCount }, (_, slideIndex) => <button key={slideIndex} type="button" aria-label={locale === "tr" ? `${slideIndex + 1}. görünüme git` : `Go to view ${slideIndex + 1}`} aria-current={selected === slideIndex ? "true" : undefined} onClick={() => api?.scrollTo(slideIndex)}><span /></button>)}
    </div>
    <span className="gallery-counter">{String(selected + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}{selected === slideCount - 1 ? " · 3D" : ""}</span>
  </div>;
}

function ProductView({ locale, product, navigate, onAdd }: { locale: Locale; product: Product; navigate: (path: string) => void; onAdd: (slug: string) => void }) {
  const t = copy[locale];
  const specs = [[t.dimensions, `${product.height} cm`], [t.material, product.material], [t.finish, product.color], [t.leadTime, product.leadTime]];
  return <section className="product-page section-pad"><button className="back-link" onClick={() => navigate(pathFor(locale, "catalog"))}>← {t.catalog}</button><div className="product-detail-grid"><div className="detail-image"><ProductGallery product={product} locale={locale} priority /><span className="ar-badge"><Scan />AR</span></div><div className="detail-copy"><p className="eyebrow">{styleLabels[locale][product.style]} / {product.height} cm</p><h1>{product.name}</h1><p className="detail-price">{formatPrice(product.price, locale)}</p><p className="detail-description">{product.description[locale]}</p><Button className="square-button add-large" onClick={() => onAdd(product.slug)}>{t.add}<ShoppingBag /></Button><div className="spec-list"><p className="eyebrow">{t.specs}</p>{specs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></div><div className="ar-section"><div><p className="eyebrow">03 / AR</p><h2>{t.arTitle}</h2><p>{t.arText}</p><p className="model-source"><span>{t.modelSource}</span><a href={product.source.sourceUrl} target="_blank" rel="noreferrer">{product.source.title}</a><small>{product.source.creator} · <a href={product.source.licenseUrl} target="_blank" rel="noreferrer">{product.source.licenseName}</a></small></p></div><ModelViewer src={product.model} alt={product.name} arLabel={locale === "tr" ? "AR'da Gör" : "View in AR"} locale={locale} /></div></section>;
}

function useModelViewerScript() {
  React.useEffect(() => {
    if (document.getElementById("model-viewer-script")) return;
    const script = document.createElement("script");
    script.id = "model-viewer-script"; script.type = "module"; script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js"; document.head.appendChild(script);
  }, []);
}

type ModelViewerElement = HTMLElement & {
  activateAR?: () => Promise<void>;
  canActivateAR?: boolean;
  loaded?: boolean;
};

type ModelLoadState = {
  src: string;
  progress: number;
  status: "loading" | "loaded" | "error";
};

function ModelStage({ src, alt, className, locale, ar = false, arLabel, poster, loading = "eager", showLoadingOverlay = true, onLoadStateChange }: { src: string; alt: string; className: string; locale: Locale; ar?: boolean; arLabel?: string; poster?: string; loading?: "eager" | "lazy"; showLoadingOverlay?: boolean; onLoadStateChange?: (state: { percentage: number; status: ModelLoadState["status"] }) => void }) {
  useModelViewerScript();
  const presentation = products.find((product) => product.model === src);
  const resolvedPoster = poster ?? presentation?.poster;
  const preferredBackground = presentation?.initialBackground ?? "studio";
  const [backgroundSelection, setBackgroundSelection] = React.useState<{ src: string; value: ModelBackground }>({ src, value: preferredBackground });
  const background = backgroundSelection.src === src ? backgroundSelection.value : preferredBackground;
  const [arError, setArError] = React.useState("");
  const [viewerReady, setViewerReady] = React.useState(false);
  const [loadState, setLoadState] = React.useState<ModelLoadState>({ src, progress: 0, status: "loading" });
  const viewerRef = React.useRef<ModelViewerElement | null>(null);
  const currentLoadState = loadState.src === src ? loadState : { src, progress: 0, status: "loading" as const };
  const loadPercentage = Math.min(100, Math.max(0, Math.round(currentLoadState.progress * 100)));

  React.useEffect(() => {
    onLoadStateChange?.({ percentage: loadPercentage, status: currentLoadState.status });
  }, [currentLoadState.status, loadPercentage, onLoadStateChange]);

  React.useEffect(() => {
    let mounted = true;
    window.customElements.whenDefined("model-viewer").then(() => {
      if (mounted) setViewerReady(true);
    });
    return () => { mounted = false; };
  }, []);

  React.useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleProgress = (event: Event) => {
      const totalProgress = (event as CustomEvent<{ totalProgress?: number }>).detail?.totalProgress ?? 0;
      const boundedProgress = Math.min(1, Math.max(0, totalProgress));
      setLoadState({ src, progress: boundedProgress, status: boundedProgress >= 0.999 ? "loaded" : "loading" });
    };
    const handleLoad = () => setLoadState({ src, progress: 1, status: "loaded" });
    const handleError = () => setLoadState({ src, progress: 0, status: "error" });

    viewer.addEventListener("progress", handleProgress);
    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", handleError);
    if (viewer.loaded) handleLoad();
    return () => {
      viewer.removeEventListener("progress", handleProgress);
      viewer.removeEventListener("load", handleLoad);
      viewer.removeEventListener("error", handleError);
    };
  }, [src]);

  function activateAR() {
    setArError("");
    const viewer = viewerRef.current;
    if (!viewer || typeof viewer.activateAR !== "function" || viewer.canActivateAR === false) {
      setArError(locale === "tr"
        ? "AR bu cihazda başlatılamadı. Android'de Chrome veya iPhone'da Safari kullanın."
        : "AR could not start on this device. Use Chrome on Android or Safari on iPhone.");
      return;
    }
    try {
      void viewer.activateAR().catch(() => {
        setArError(locale === "tr"
          ? "AR açılamadı. Kamera iznini ve tarayıcı desteğini kontrol edin."
          : "AR could not open. Check camera permission and browser support.");
      });
    } catch {
      setArError(locale === "tr"
        ? "AR açılamadı. Kamera iznini ve tarayıcı desteğini kontrol edin."
        : "AR could not open. Check camera permission and browser support.");
    }
  }

  const viewer = React.createElement(
    "model-viewer",
    {
      ref: viewerRef,
      src,
      alt,
      poster: resolvedPoster,
      loading,
      reveal: resolvedPoster ? "auto" : undefined,
      orientation: presentation?.orientation ?? "0deg 0deg 0deg",
      exposure: String(presentation?.exposure ?? 0.72),
      ar,
      "ar-modes": ar ? "scene-viewer webxr quick-look" : undefined,
      "ar-scale": ar ? "auto" : undefined,
      "ar-placement": ar ? "floor" : undefined,
      "xr-environment": ar ? true : undefined,
      "camera-controls": true,
      "interaction-prompt": "none",
      "shadow-intensity": "1.15",
      "shadow-softness": "0.8",
      "environment-image": "neutral",
      "min-camera-orbit": "auto auto 45%",
      "max-camera-orbit": "auto auto 260%",
      style: { touchAction: "pan-y" },
      className,
    },
  );

  return <div className={`model-stage ${className}-stage model-stage--${background}`}>
    {viewer}
    {showLoadingOverlay && currentLoadState.status !== "loaded" ? <div className={`model-loading${currentLoadState.status === "error" ? " model-loading--error" : ""}`} role="status" aria-live="polite">
      <div className="model-loading-label"><span>{currentLoadState.status === "error" ? (locale === "tr" ? "Model yüklenemedi" : "Model failed to load") : (locale === "tr" ? "3D model yükleniyor" : "Loading 3D model")}</span><strong>{currentLoadState.status === "error" ? "!" : `${loadPercentage}%`}</strong></div>
      <Progress value={currentLoadState.status === "error" ? 0 : loadPercentage} className="model-loading-progress" aria-label={locale === "tr" ? `Model yükleme yüzde ${loadPercentage}` : `Model loading ${loadPercentage} percent`} />
    </div> : null}
    <div className="model-background-switcher" role="group" aria-label={locale === "tr" ? "Model arka planı" : "Model background"}>
      {modelBackgrounds.map((option) => <button key={option.id} type="button" className={`background-swatch background-swatch--${option.id}`} aria-label={option.label[locale]} title={option.label[locale]} aria-pressed={background === option.id} onClick={() => setBackgroundSelection({ src, value: option.id })}><span /></button>)}
    </div>
    {ar && arLabel ? <button type="button" className="ar-button" onClick={activateAR} disabled={!viewerReady}><Scan />{arLabel}</button> : null}
    {arError ? <span className="ar-error" role="status">{arError}</span> : null}
    <span className="model-interaction-hint">{locale === "tr" ? "Döndür · Yakınlaştır" : "Rotate · Zoom"}</span>
  </div>;
}

function ModelPreview({ src, alt, className, locale, poster, loading, showLoadingOverlay, onLoadStateChange }: { src: string; alt: string; className: string; locale: Locale; poster?: string; loading?: "eager" | "lazy"; showLoadingOverlay?: boolean; onLoadStateChange?: (state: { percentage: number; status: ModelLoadState["status"] }) => void }) {
  return <ModelStage src={src} alt={alt} className={className} locale={locale} poster={poster} loading={loading} showLoadingOverlay={showLoadingOverlay} onLoadStateChange={onLoadStateChange} />;
}

function ModelViewer({ src, alt, arLabel, locale }: { src: string; alt: string; arLabel: string; locale: Locale }) {
  return <ModelStage src={src} alt={alt} className="model-viewer" locale={locale} ar arLabel={arLabel} />;
}

function AboutView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="editorial-page section-pad"><p className="eyebrow">02 / {t.about}</p><h1>{t.aboutTitle.split("\n").map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h1><div className="editorial-columns"><p>{t.aboutText}</p><aside><span>İKİ MEDYA / 2026</span><strong>{t.aboutNote}</strong></aside></div><div className="about-image"><ModelPreview src={products[1].model} alt={products[1].name} className="about-model" locale={locale} /></div></section>;
}

function ContactView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const message = encodeURIComponent(locale === "tr" ? "Merhaba, büyük format 3D heykel projem için bilgi almak istiyorum." : "Hello, I would like information about a large-format 3D sculpture project.");
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const whatsapp = `https://wa.me/${number}?text=${message}`;
  return <section className="editorial-page contact-page section-pad"><p className="eyebrow">03 / {t.contact}</p><h1>{t.contactTitle.split("\n").map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h1><p className="contact-lead">{t.contactText}</p><div className="contact-grid"><a href={`mailto:${t.emailValue}`}><span>E-MAIL</span><strong>{t.emailValue}</strong><ArrowRight /></a><div><span>{locale === "tr" ? "ATÖLYE" : "STUDIO"}</span><strong>{t.address}</strong></div><a href={whatsapp} target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>{t.whatsapp}</strong><ArrowRight /></a></div></section>;
}

function PolicyView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="policy-page section-pad"><p className="eyebrow">04 / {t.policies}</p><h1>{t.policyTitle}</h1><div><h2>{locale === "tr" ? "Sipariş ve ödeme" : "Order and payment"}</h2><p>{t.policyText}</p><h2>{locale === "tr" ? "Kişisel veriler" : "Personal data"}</h2><p>{locale === "tr" ? "Hesap bilgileri yalnızca oturum ve talep deneyimi için kullanılır. Şifreler geri döndürülemeyen güçlü özetleme ile saklanır; ödeme verisi toplanmaz." : "Account details are used only for sign-in and enquiry handling. Passwords are stored using strong non-reversible hashing; no payment data is collected."}</p></div></section>;
}

function CartDrawer({ locale, open, onOpen, cart, setCart, navigate }: { locale: Locale; open: boolean; onOpen: (open: boolean) => void; cart: CartLine[]; setCart: React.Dispatch<React.SetStateAction<CartLine[]>>; navigate: (path: string) => void }) {
  const t = copy[locale];
  const lines = cart.map((line) => ({ ...line, product: products.find((product) => product.slug === line.slug)! })).filter((line) => line.product);
  const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  function update(slug: string, quantity: number) { setCart((items) => quantity <= 0 ? items.filter((item) => item.slug !== slug) : items.map((item) => item.slug === slug ? { ...item, quantity } : item)); }
  const message = [locale === "tr" ? "Merhaba, aşağıdaki heykeller için sipariş teklifi almak istiyorum:" : "Hello, I would like an order quote for the following sculptures:", "", ...lines.map((line) => `• ${line.product.name} × ${line.quantity} — ${formatPrice(line.product.price * line.quantity, locale)}`), "", `${t.total}: ${formatPrice(total, locale)}`, locale === "tr" ? "Lütfen üretim ve teslimat detaylarını paylaşır mısınız?" : "Please share production and delivery details."].join("\n");
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return <Sheet open={open} onOpenChange={onOpen}><SheetContent className="cart-sheet"><SheetHeader><SheetTitle>{t.cartTitle}</SheetTitle><SheetDescription>{t.cartDescription}</SheetDescription></SheetHeader><div className="cart-lines">{lines.length ? lines.map((line) => <div className="cart-line" key={line.slug}><ModelPreview src={line.product.model} alt={line.product.name} className="cart-model" locale={locale} /><div><strong>{line.product.name}</strong><span>{formatPrice(line.product.price, locale)}</span><div className="quantity"><button onClick={() => update(line.slug, line.quantity - 1)} aria-label="Decrease"><Minus /></button><span>{line.quantity}</span><button onClick={() => update(line.slug, line.quantity + 1)} aria-label="Increase"><Plus /></button><button onClick={() => update(line.slug, 0)} aria-label="Remove"><Trash2 /></button></div></div></div>) : <div className="empty-cart"><ShoppingBag /><p>{t.emptyCart}</p><Button variant="outline" className="square-button" onClick={() => { onOpen(false); navigate(pathFor(locale, "catalog")); }}>{t.continueShopping}</Button></div>}</div>{lines.length > 0 && <SheetFooter><div className="cart-total"><span>{t.total}</span><strong>{formatPrice(total, locale)}</strong></div><Button asChild className="square-button whatsapp-button"><a href={whatsapp} target="_blank" rel="noreferrer">{t.orderWhatsapp}<ArrowRight /></a></Button><p className="cart-note">{t.cartDescription}</p></SheetFooter>}</SheetContent></Sheet>;
}

function AuthModal({ locale, open, onOpen, user, setUser }: { locale: Locale; open: boolean; onOpen: (open: boolean) => void; user: PublicUser | null; setUser: (user: PublicUser | null) => void }) {
  const t = copy[locale];
  const [status, setStatus] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>, mode: "login" | "register") {
    event.preventDefault(); setBusy(true); setStatus("");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch(apiUrl(`/api/auth/${mode}`), { method: "POST", headers: { "content-type": "application/json" }, credentials: "include", body: JSON.stringify(data) });
      const payload = await response.json() as { user?: PublicUser };
      if (!response.ok || !payload.user) throw new Error();
      setUser(payload.user); setStatus(t.authSuccess);
    } catch { setStatus(t.authError); } finally { setBusy(false); }
  }
  async function logout() { await fetch(apiUrl("/api/auth/logout"), { method: "POST", credentials: "include" }); setUser(null); setStatus(""); }
  function google() { window.location.href = apiUrl(`/api/auth/google?return_to=${encodeURIComponent(window.location.pathname)}&return_origin=${encodeURIComponent(window.location.origin)}`); }
  return <Dialog open={open} onOpenChange={onOpen}><DialogContent className="auth-dialog"><DialogHeader><DialogTitle>{user ? (user.name || user.email) : t.account}</DialogTitle><DialogDescription>{user ? user.email : t.authDescription}</DialogDescription></DialogHeader>{user ? <div className="signed-in"><div className="account-avatar">{(user.name || user.email).slice(0, 1).toUpperCase()}</div><p><Check />{t.authSuccess}</p><Button variant="outline" className="square-button" onClick={logout}><LogOut />{t.logout}</Button></div> : <Tabs defaultValue="login"><TabsList className="auth-tabs"><TabsTrigger value="login">{t.login}</TabsTrigger><TabsTrigger value="register">{t.register}</TabsTrigger></TabsList><TabsContent value="login"><AuthForm locale={locale} mode="login" busy={busy} onSubmit={(event) => submit(event, "login")} /></TabsContent><TabsContent value="register"><AuthForm locale={locale} mode="register" busy={busy} onSubmit={(event) => submit(event, "register")} /></TabsContent><div className="or-line"><span>{locale === "tr" ? "veya" : "or"}</span></div><Button variant="outline" className="square-button google-button" onClick={google}><span className="google-g">G</span>{t.google}</Button></Tabs>}{status && <p className="auth-status">{status}</p>}</DialogContent></Dialog>;
}

function AuthForm({ locale, mode, busy, onSubmit }: { locale: Locale; mode: "login" | "register"; busy: boolean; onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
  const t = copy[locale];
  return <form className="auth-form" onSubmit={onSubmit}>{mode === "register" && <label>{t.name}<Input name="name" autoComplete="name" required /></label>}<label>{t.email}<Input type="email" name="email" autoComplete="email" required /></label><label>{t.password}<Input type="password" name="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={8} required /></label><Button className="square-button" disabled={busy}>{mode === "login" ? t.loginButton : t.registerButton}<ArrowRight /></Button></form>;
}

function SiteFooter({ locale, navigate }: { locale: Locale; navigate: (path: string) => void }) {
  const t = copy[locale];
  return <footer className="site-footer"><div className="footer-brand"><span>İKİ / OBJECTS</span><h2>3D</h2></div><p>{t.footerLine}</p><div className="footer-links"><LinkButton href={pathFor(locale, "catalog")} navigate={navigate}>{t.catalog}</LinkButton><LinkButton href={pathFor(locale, "about")} navigate={navigate}>{t.about}</LinkButton><LinkButton href={pathFor(locale, "contact")} navigate={navigate}>{t.contact}</LinkButton><LinkButton href={pathFor(locale, "policies")} navigate={navigate}>{t.policies}</LinkButton></div><div className="footer-bottom"><span>© 2026 İki Medya</span><span>Adana / Türkiye</span></div></footer>;
}
