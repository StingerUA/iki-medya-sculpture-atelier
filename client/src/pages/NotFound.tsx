import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">404</p><h1>Burada henüz<br /><em>bir şey yok.</em></h1><p>Aradığınız çalışma veya sayfa güncel koleksiyonda yer almıyor.</p><Link href="/" className="text-link"><ArrowLeft size={17} /> Ana sayfaya dön</Link></main>; }
