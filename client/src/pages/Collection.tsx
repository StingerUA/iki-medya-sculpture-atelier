import { ArrowUpRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { sculptures, type SculptureSize, type SculptureStyle } from "@shared/catalog";
import { filterAndSortSculptures, type CatalogFilters, type PriceSort } from "@shared/catalogFilters";
import SculptureMedia from "@/components/SculptureMedia";

const initialFilters: CatalogFilters = { size: "all", style: "all", sort: "recommended" };
const sizes: Array<SculptureSize> = ["Büyük", "Çok büyük"];
const styles: Array<SculptureStyle> = ["Mimari", "Organik", "Geometrik"];

export default function Collection() {
  const [filters, setFilters] = useState<CatalogFilters>(initialFilters);
  const visibleWorks = useMemo(() => filterAndSortSculptures(sculptures, filters), [filters]);
  const setFilter = <Key extends keyof CatalogFilters>(key: Key, value: CatalogFilters[Key]) =>
    setFilters(current => ({ ...current, [key]: value }));
  const hasFilters = filters.size !== "all" || filters.style !== "all" || filters.sort !== "recommended";

  return (
    <main className="page collection-page">
      <section className="page-intro">
        <p className="eyebrow">Koleksiyon çalışmaları</p>
        <h1>Mekânın <em>ölçeği</em> için tasarlandı.</h1>
        <p>Kaynağı ve lisansı doğrulanmış üç açık model, farklı ölçek ve yüzey seçenekleriyle koleksiyonda sunuluyor.</p>
      </section>

      <section className="mb-12 border-y border-[#bdbdb7] py-4" aria-label="Koleksiyon filtreleri">
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
          <label className="grid min-w-[145px] gap-1.5"><span className="eyebrow">Boyut</span><select value={filters.size} onChange={event => setFilter("size", event.target.value as CatalogFilters["size"])} className="border-b border-[#6a6a66] bg-transparent py-2 text-sm outline-none focus:border-[#111110]"><option value="all">Tüm boyutlar</option>{sizes.map(size => <option key={size} value={size}>{size}</option>)}</select></label>
          <label className="grid min-w-[145px] gap-1.5"><span className="eyebrow">Stil</span><select value={filters.style} onChange={event => setFilter("style", event.target.value as CatalogFilters["style"])} className="border-b border-[#6a6a66] bg-transparent py-2 text-sm outline-none focus:border-[#111110]"><option value="all">Tüm stiller</option>{styles.map(style => <option key={style} value={style}>{style}</option>)}</select></label>
          <label className="grid min-w-[175px] gap-1.5"><span className="eyebrow">Sıralama</span><select value={filters.sort} onChange={event => setFilter("sort", event.target.value as PriceSort)} className="border-b border-[#6a6a66] bg-transparent py-2 text-sm outline-none focus:border-[#111110]"><option value="recommended">Koleksiyon sırası</option><option value="price-asc">Fiyat: düşükten yükseğe</option><option value="price-desc">Fiyat: yüksekten düşüğe</option></select></label>
          {hasFilters && <button onClick={() => setFilters(initialFilters)} className="mb-1 inline-flex items-center gap-2 border-b border-[#111110] pb-1 text-xs font-bold"><RotateCcw size={14} /> Sıfırla</button>}
        </div>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[.11em] text-[#6a6a66]">{sculptures.length} çalışmanın {visibleWorks.length} tanesi gösteriliyor · {filters.sort !== "recommended" ? "Teklif üzerindeki çalışmalar, fiyatı yayımlanmış çalışmaların ardından görünür." : "Koleksiyonu daraltmak için bir filtre seçin."}</p>
      </section>

      {visibleWorks.length === 0 ? <section className="flex min-h-80 flex-col items-start justify-center border-y border-[#bdbdb7]"><p className="eyebrow">Eşleşen çalışma yok</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.06em]">Farklı bir kombinasyon deneyin.</h2><button onClick={() => setFilters(initialFilters)} className="text-link mt-5">Filtreleri temizle <RotateCcw size={16} /></button></section> : (
        <section className="collection-list">
          {visibleWorks.map(sculpture => <Link key={sculpture.id} href={"/sculptures/" + sculpture.slug} className="collection-card">
            <div className="collection-card__meta"><span>{sculpture.index}</span><span>{sculpture.size} · {sculpture.style}</span><ArrowUpRight size={19} /></div>
            <SculptureMedia sculpture={sculpture} className="collection-card__art" />
            <div className="collection-card__caption"><h2>{sculpture.title}</h2><p>{sculpture.description}</p><span className="mt-3 block font-mono text-[10px] uppercase tracking-[.1em] text-[#6a6a66]">Fiyat teklifi üzerine</span>{sculpture.sourceAsset?.role === "open-catalog" && <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-[.09em] text-[#6a6a66]">Açık lisanslı model · {sculpture.sourceAsset.licenseName}</span>}</div>
          </Link>)}
        </section>
      )}

      <section className="collection-note"><span>Belirli bir ölçek, yüzey veya form mu arıyorsunuz?</span><Link href="/contact" className="text-link">Siparişinizi konuşalım <ArrowUpRight size={17} /></Link></section>
    </main>
  );
}
