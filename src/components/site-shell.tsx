"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const links = [["Home", "/"], ["Our Story", "/about"], ["Menu", "/menu"], ["Gallery", "/gallery"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar">Good coffee · Warm corners · Pale Gaon, Ambernath</div>
    <header className="nav">
      <Link className="logo" href="/" aria-label="Auro Cafe home"><img className="logo-sign" src="/images/auro-logo-photo.svg" alt="Auro" /><small>COFFEE · FOOD · MOMENTS</small></Link>
      <nav className="navlinks">{links.map(([n, h]) => <Link key={h} href={h}>{n}</Link>)}</nav>
      <div className="nav-actions">
        <Link className="btn btn-light" href="/menu">View Menu</Link>
        <Link className="btn" href="/contact">Find Us <ArrowUpRight size={14}/></Link>
      </div>
      <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      {open && <nav className="mobile-menu">{links.map(([n, h]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{n}</Link>)}<Link className="btn" href="/menu" onClick={() => setOpen(false)}>Explore Menu</Link></nav>}
    </header>
  </>;
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-grid">
      <div><div className="logo footer-logo"><img className="logo-sign" src="/images/auro-logo-photo.svg" alt="Auro" /><small>COFFEE · FOOD · MOMENTS</small></div><p>{siteConfig.tagline}</p><p>Good food. Warm hospitality. Beautiful moments.</p>{siteConfig.instagram && <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a>}</div>
      <div><h4>Explore</h4>{links.map(([n, h]) => <p key={h}><Link href={h}>{n}</Link></p>)}</div>
      <div><h4>Discover</h4>{["Privacy Policy", "Terms & Conditions"].map((n, i) => <p key={n}><Link href={i ? "/terms" : "/privacy"}>{n}</Link></p>)}<p><Link href="/menu">Full Menu</Link></p></div>
      <div><h4>Find AURO</h4><p>{siteConfig.address}</p><p><a href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">Get directions ↗</a></p>{siteConfig.phone && <p><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p>}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} AURO CAFE. All rights reserved.</span><span>Illustrative photos are placeholders until replaced with café-owned photography.</span></div>
  </footer>;
}

export function Shell({ children }: { children: React.ReactNode }) { return <><Header/>{children}<Footer/></>; }

export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div style={{ maxWidth: 700 }}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p className="body-copy">{copy}</p>}</div>;
}