"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatPrice, products, type Locale, type Product } from "@/lib/store-data";

type RouteInfo = {
  locale: Locale;
  slug?: string;
  basePath: string;
  isProduct: boolean;
};

const orientationByModelFile: Record<string, string> = {
  "mustafa-kemal-ataturk-bust.glb": "0deg 180deg 0deg",
  "contour-fox.glb": "0deg 90deg 0deg",
  "bronze-horse-head.glb": "90deg 180deg 0deg",
  "silent-dialogue.glb": "0deg 90deg 0deg",
  "ribbon-twist.glb": "0deg 90deg 0deg",
  "organic-monolith.glb": "0deg 90deg 0deg",
  "the-thinker.glb": "0deg -90deg 90deg",
};

function routeInfoFromLocation(): RouteInfo | null {
  if (typeof window === "undefined") return null;
  const segments = window.location.pathname.split("/").filter(Boolean);
  const localeIndex = segments.findIndex((segment) => segment === "tr" || segment === "en");
  if (localeIndex < 0) return null;

  const locale = segments[localeIndex] as Locale;
  const page = segments[localeIndex + 1];
  const isProduct = page === "urun" || page === "product";
  const baseSegments = segments.slice(0, localeIndex);
  const basePath = baseSegments.length ? `/${baseSegments.join("/")}` : "";

  return {
    locale,
    slug: isProduct ? segments[localeIndex + 2] : undefined,
    basePath,
    isProduct,
  };
}

function productHref(route: RouteInfo, slug: string) {
  const segment = route.locale === "tr" ? "urun" : "product";
  return `${route.basePath}/${route.locale}/${segment}/${slug}`;
}

function shuffleProducts(items: Product[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function modelFileFromSrc(src: string | null) {
  if (!src) return "";
  return src.split("/").pop()?.split(/[?#]/)[0] ?? "";
}

function correctedOrientation(product: Product) {
  const file = modelFileFromSrc(product.model);
  return orientationByModelFile[file] ?? product.orientation ?? "0deg 0deg 0deg";
}

function applyOrientation(viewer: Element) {
  const file = modelFileFromSrc(viewer.getAttribute("src"));
  const orientation = orientationByModelFile[file];
  if (orientation && viewer.getAttribute("orientation") !== orientation) {
    viewer.setAttribute("orientation", orientation);
  }
}

function MiniProductCarousel({ product, locale }: { product: Product; locale: Locale }) {
  const [slide, setSlide] = React.useState(0);
  const slideCount = product.gallery.length + 1;
  const isModelSlide = slide === product.gallery.length;
  const image = !isModelSlide ? product.gallery[slide] : undefined;

  React.useEffect(() => setSlide(0), [product.slug]);

  function previous() {
    setSlide((value) => (value - 1 + slideCount) % slideCount);
  }

  function next() {
    setSlide((value) => (value + 1) % slideCount);
  }

  const model = isModelSlide
    ? React.createElement("model-viewer", {
        src: product.model,
        alt: product.name,
        poster: product.poster,
        loading: "lazy",
        reveal: "auto",
        orientation: correctedOrientation(product),
        exposure: String(product.exposure ?? 0.72),
        "camera-controls": true,
        "interaction-prompt": "none",
        "shadow-intensity": "1.05",
        "shadow-softness": "0.8",
        "environment-image": "neutral",
        className: "block h-full w-full",
        style: { touchAction: "pan-y" },
      })
    : null;

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-white">
      {image ? (
        <>
          <img src={image.src} alt={`${product.name} ${slide + 1}`} loading="lazy" className="h-full w-full object-cover" />
          <a
            href={image.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-2 left-2 max-w-[70%] truncate bg-black/75 px-2 py-1 text-[9px] font-bold tracking-wide text-white"
            onClick={(event) => event.stopPropagation()}
          >
            {image.credit}
          </a>
        </>
      ) : model}

      <button
        type="button"
        onClick={previous}
        aria-label={locale === "tr" ? "Önceki görünüm" : "Previous view"}
        className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center border border-black bg-[#f4f4f0]/95 hover:bg-black hover:text-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label={locale === "tr" ? "Sonraki görünüm" : "Next view"}
        className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center border border-black bg-[#f4f4f0]/95 hover:bg-black hover:text-white"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-[#f4f4f0]/95 px-2 py-1">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSlide(index)}
            aria-label={locale === "tr" ? `${index + 1}. görünüme git` : `Go to view ${index + 1}`}
            className={`h-1.5 w-1.5 rounded-full border border-black ${slide === index ? "bg-black" : "bg-transparent"}`}
          />
        ))}
      </div>

      {isModelSlide ? (
        <span className="absolute left-2 top-2 bg-black px-2 py-1 text-[9px] font-extrabold tracking-[.12em] text-white">3D</span>
      ) : null}
    </div>
  );
}

function Recommendations({ route, items }: { route: RouteInfo; items: Product[] }) {
  const title = route.locale === "tr" ? "Bunlar da ilginizi çekebilir" : "You may also like";
  const details = route.locale === "tr" ? "Detayları gör" : "View details";

  return (
    <section className="mt-16 border border-black bg-[#f4f4f0]">
      <div className="flex items-end justify-between gap-6 border-b border-black px-5 py-6 sm:px-8">
        <div>
          <p className="m-0 text-[.65rem] font-extrabold uppercase tracking-[.18em]">04 / {route.locale === "tr" ? "ÖNERİLER" : "RECOMMENDATIONS"}</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-.035em] sm:text-3xl">{title}</h2>
        </div>
        <span className="text-xs font-extrabold tracking-[.14em]">04</span>
      </div>

      <div className="grid grid-cols-1 gap-px bg-black sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.slug} className="min-w-0 bg-[#f4f4f0]">
            <MiniProductCarousel product={item} locale={route.locale} />
            <a href={productHref(route, item.slug)} className="block border-t border-black p-4 no-underline hover:bg-black hover:text-white">
              <p className="m-0 text-[10px] font-extrabold uppercase tracking-[.13em] opacity-70">{item.height} cm</p>
              <h3 className="mt-2 text-sm font-black leading-tight tracking-[-.02em]">{item.name}</h3>
              <div className="mt-3 flex items-center justify-between gap-3 text-xs font-extrabold">
                <span>{formatPrice(item.price, route.locale)}</span>
                <span className="uppercase tracking-[.08em]">{details} →</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StoreEnhancements() {
  const [route, setRoute] = React.useState<RouteInfo | null>(null);
  const [portalTarget, setPortalTarget] = React.useState<HTMLElement | null>(null);
  const [recommendations, setRecommendations] = React.useState<Product[]>([]);
  const lastPath = React.useRef("");

  React.useEffect(() => {
    const sync = () => {
      const path = window.location.pathname;
      if (path === lastPath.current && portalTarget?.isConnected) return;
      lastPath.current = path;
      const nextRoute = routeInfoFromLocation();
      setRoute(nextRoute);
      requestAnimationFrame(() => {
        setPortalTarget(document.querySelector<HTMLElement>(".product-page"));
      });
    };

    sync();
    const timer = window.setInterval(sync, 250);
    window.addEventListener("popstate", sync);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("popstate", sync);
    };
  }, [portalTarget]);

  React.useEffect(() => {
    if (!route?.isProduct || !route.slug) {
      setRecommendations([]);
      return;
    }
    const candidates = products.filter((item) => item.slug !== route.slug);
    setRecommendations(shuffleProducts(candidates).slice(0, 4));
  }, [route?.isProduct, route?.slug]);

  React.useEffect(() => {
    const applyAll = (root: ParentNode) => {
      if (root instanceof Element && root.matches("model-viewer")) applyOrientation(root);
      root.querySelectorAll?.("model-viewer").forEach(applyOrientation);
    };

    applyAll(document);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.target instanceof Element) {
          applyOrientation(mutation.target);
        }
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) applyAll(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["src"] });
    return () => observer.disconnect();
  }, []);

  if (!route?.isProduct || !route.slug || !portalTarget || recommendations.length === 0) return null;
  return createPortal(<Recommendations route={route} items={recommendations} />, portalTarget);
}
