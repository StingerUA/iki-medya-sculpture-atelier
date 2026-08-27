import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Sculpture } from "@shared/catalog";

export type QuoteCartItem = Pick<Sculpture, "id" | "slug" | "title" | "index" | "visual"> & { quantity: number };
type QuoteCartContextValue = { items: QuoteCartItem[]; isOpen: boolean; addItem: (sculpture: Sculpture) => void; updateQuantity: (id: string, quantity: number) => void; removeItem: (id: string) => void; clearCart: () => void; openCart: () => void; closeCart: () => void; };
const QuoteCartContext = createContext<QuoteCartContextValue | undefined>(undefined);
const storageKey = "sculpture-atelier:quote-cart";

export function QuoteCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>([]); const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { try { const saved = window.localStorage.getItem(storageKey); if (saved) setItems(JSON.parse(saved) as QuoteCartItem[]); } catch { window.localStorage.removeItem(storageKey); } }, []);
  useEffect(() => { window.localStorage.setItem(storageKey, JSON.stringify(items)); }, [items]);
  const value = useMemo<QuoteCartContextValue>(() => ({
    items, isOpen,
    addItem: sculpture => { setItems(current => { const saved = current.find(item => item.id === sculpture.id); return saved ? current.map(item => item.id === sculpture.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { id: sculpture.id, slug: sculpture.slug, title: sculpture.title, index: sculpture.index, visual: sculpture.visual, quantity: 1 }]; }); setIsOpen(true); },
    updateQuantity: (id, quantity) => setItems(current => quantity < 1 ? current.filter(item => item.id !== id) : current.map(item => item.id === id ? { ...item, quantity: Math.min(20, quantity) } : item)),
    removeItem: id => setItems(current => current.filter(item => item.id !== id)), clearCart: () => setItems([]), openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
  }), [isOpen, items]);
  return <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>;
}
export function useQuoteCart() { const context = useContext(QuoteCartContext); if (!context) throw new Error("useQuoteCart must be used inside QuoteCartProvider"); return context; }
