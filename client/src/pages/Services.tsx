import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
const services = [
  ["01", "Promotion", "Corporate gifts, agendas and calendars, pens and office supplies, custom-designed pieces and textile products."],
  ["02", "Advertising", "Social media campaigns, Google Ads management, outdoor advertising, print materials and video advertising production."],
  ["03", "Digital solutions", "Website design, e-commerce solutions, SEO optimisation, content management and social media management."],
  ["04", "Software development", "Custom software, mobile applications, ERP/CRM systems and system integrations."],
];
export default function Services() { return <main className="page process-page"><section className="page-intro page-intro--wide"><p className="eyebrow">İki Medya services</p><h1>Solutions that<br />leave a <em>mark.</em></h1><p>İki Medya brings together the services businesses need to develop an effective and differentiated digital presence. The sculpture direction complements this existing client-specific approach.</p></section><section className="process-list">{services.map(([number, title, text]) => <article key={number} className="process-row"><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="process-cta"><p className="eyebrow">A specific brief</p><h2>Let’s shape a<br />new direction.</h2><Link href="/contact" className="button button--light">Start a conversation <ArrowUpRight size={17} /></Link></section></main>; }
