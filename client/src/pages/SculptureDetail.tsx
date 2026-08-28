import { ArrowLeft, ArrowUpRight, Check, ScanLine } from "lucide-react";
import { Link } from "wouter";
import { getSculpture } from "@shared/catalog";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import SculptureMedia from "@/components/SculptureMedia";
import ARViewer from "@/components/ARViewer";
import NotFound from "./NotFound";

export default function SculptureDetail({ slug }: { slug: string }) {
  const sculpture = getSculpture(slug);
  const { addItem, items } = useQuoteCart();
  if (!sculpture) return <NotFound />;

  const selected = items.some(item => item.id === sculpture.id);
  const isOpenModel = sculpture.sourceAsset?.role === "open-catalog";

  return <main className="page sculpture-page">
    <Link href="/collection" className="back-link"><ArrowLeft size={16} /> Koleksiyona dön</Link>
    <section className="sculpture-hero">
      <div className="sculpture-hero__title"><p className="eyebrow">No. {sculpture.index} · {sculpture.category}</p><h1>{sculpture.title}</h1><p>{sculpture.description}</p></div>
      <SculptureMedia sculpture={sculpture} className="sculpture-hero__art" interactive />
    </section>
    <section className="detail-grid">
      <div className="detail-grid__summary">
        <p className="eyebrow">{isOpenModel ? "Açık modelden üretim" : "Briefe göre üretim"}</p>
        <h2>Mekânınız için<br />tanımlandı.</h2>
        <p>{isOpenModel ? "Bu açık lisanslı dijital model, üretim için bir başlangıç noktasıdır. Son ölçek, baskı geometrisi, malzeme ve yüzey uygulaması teknik değerlendirmeden sonra belirlenir." : "Bu çalışma, mekâna özel bir siparişin başlangıç noktasıdır. Boyut, malzeme, yüzey ve üretim gereksinimleri birlikte belirlenir; ardından onaylanan proje brief’i ile belgelenir."}</p>
        <button className="button button--dark" onClick={() => addItem(sculpture)}>{selected ? <><Check size={17} /> Bir tane daha ekle</> : <>Proje listesine ekle <ArrowUpRight size={17} /></>}</button>
      </div>
      <dl className="spec-list">
        <div><dt>Boyut</dt><dd>{sculpture.dimensions}</dd></div><div><dt>Malzeme</dt><dd>{sculpture.material}</dd></div><div><dt>Yüzey</dt><dd>{sculpture.finish}</dd></div><div><dt>Üretim</dt><dd>{sculpture.production}</dd></div><div><dt>Stil</dt><dd>{sculpture.style}</dd></div><div><dt>Fiyat</dt><dd>Teklif üzerine</dd></div>
        {isOpenModel && sculpture.sourceAsset && <div><dt>Model kaynağı</dt><dd><a className="source-link" href={sculpture.sourceAsset.sourceUrl} target="_blank" rel="noreferrer">{sculpture.sourceAsset.title}</a><br />{sculpture.sourceAsset.creator} · <a className="source-link" href={sculpture.sourceAsset.licenseUrl} target="_blank" rel="noreferrer">{sculpture.sourceAsset.licenseName}</a></dd></div>}
      </dl>
    </section>
    <ARViewer sculpture={sculpture} />
    <section className="next-piece"><p className="eyebrow">Bir brief ile gelin</p><h2>Bir obje.<br />Özgün bir bağlam.</h2><Link href="/contact" className="text-link">Teklif iste <ScanLine size={17} /></Link></section>
  </main>;
}
