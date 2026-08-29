import { ArrowUpRight, Minus, Plus, X } from "lucide-react";
import { Link } from "wouter";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import SculptureArt from "./SculptureArt";

const whatsappNumber = "905079458321";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useQuoteCart();
  if (!isOpen) return null;

  const message = [
    "Merhaba, aşağıdaki heykeller için sipariş teklifi almak istiyorum:",
    "",
    ...items.map(item => `• ${item.title} × ${item.quantity}`),
    "",
    "Lütfen üretim, fiyat ve teslimat detaylarını paylaşır mısınız?",
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return <div className="cart-layer" role="dialog" aria-modal="true" aria-label="Proje listeniz"><button className="cart-layer__backdrop" aria-label="Proje listesini kapat" onClick={closeCart} /><aside className="cart-drawer"><div className="cart-drawer__head"><div><p className="eyebrow">Proje listesi</p><h2>Seçtiğiniz çalışmalar</h2></div><button className="icon-button" onClick={closeCart} aria-label="Proje listesini kapat"><X size={20} /></button></div><div className="cart-drawer__body">{items.length === 0 ? <div className="drawer-empty"><p>Proje listeniz boş.</p><span>Özel bir teklif talebi oluşturmak için bir çalışma seçin.</span><Link href="/collection" onClick={closeCart} className="text-link">Koleksiyonu keşfet <ArrowUpRight size={16} /></Link></div> : <ul className="cart-items">{items.map(item => <li key={item.id} className="cart-item"><SculptureArt visual={item.visual} className="cart-item__art" /><div><p className="eyebrow">No. {item.index}</p><h3>{item.title}</h3><div className="quantity-control"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`${item.title} adedini azalt`}><Minus size={12} /></button><span>{String(item.quantity).padStart(2, "0")}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`${item.title} adedini artır`}><Plus size={12} /></button></div></div><button className="icon-button icon-button--small" onClick={() => removeItem(item.id)} aria-label={`${item.title} çalışmasını kaldır`}><X size={15} /></button></li>)}</ul>}</div><div className="cart-drawer__footer"><p>Fiyat, üretim süresi ve montaj; brief’iniz incelendikten sonra netleştirilir.</p>{items.length > 0 ? <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeCart} className="button button--dark button--full">WhatsApp ile teklif iste <ArrowUpRight size={17} /></a> : <Link href="/collection" onClick={closeCart} className="button button--dark button--full">Koleksiyona dön <ArrowUpRight size={17} /></Link>}</div></aside></div>;
}
