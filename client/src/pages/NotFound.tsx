import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() { return <main className="not-found"><p className="eyebrow">404</p><h1>Nothing here<br /><em>yet.</em></h1><p>The piece or page you requested is not part of the current collection.</p><Link href="/" className="text-link"><ArrowLeft size={17} /> Return home</Link></main>; }
