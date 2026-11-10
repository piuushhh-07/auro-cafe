import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Utensils, CakeSlice, Sun, ArrowUpRight, MapPin, type LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/site-shell";
import { menuItems, categories } from "@/data/menu";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "AURO CAFE | Coffee, Comfort & Good Company in Ambernath",
  description: "Step into the warm, earthy world of AURO CAFE in Pale Gaon, Ambernath. Discover coffee, comfort food and a cosy space to slow down.",
  alternates: { canonical: "/" }
};

const picks = menuItems.filter(i => i.bestseller).slice(0, 6);
const photos = ["/images/auro-interior-wide-1.webp", "/images/auro-interior-wide-2.webp", "/images/auro-counter-detail.webp"];
const features: { Icon: LucideIcon; title: string; copy: string }[] = [
  { Icon: Coffee, title: "Coffee, Slowly", copy: "Take a pause with a freshly brewed favourite." },
  { Icon: Utensils, title: "Comfort on a Plate", copy: "Familiar cravings, deliciously taken care of." },
  { Icon: CakeSlice, title: "A Little Sweetness", copy: "Make room for dessert and one more conversation." },
  { Icon: Sun, title: "A Cosy Corner", copy: "Warm lights, natural textures and time well spent." }
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-inner">
        <span className="eyebrow">A LITTLE HIDEAWAY IN PALE GAON</span>
        <h1>Come in.<br/><em>Slow down.</em><br/>Stay awhile.</h1>
        <p>Good coffee, comforting plates and the kind of cosy corner that makes you forget to check the time. Welcome to AURO.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
          <Link className="btn" href="/menu">Explore the menu <ArrowUpRight size={15}/></Link>
          <Link className="btn btn-light" href="/contact">Find your way here</Link>
        </div>
      </div>
    </section>

    <div className="boho-ribbon" aria-hidden="true">
      <div className="boho-ribbon-track">
        {Array.from({ length: 4 }).map((_, i) => <span key={i}>SLOW MORNINGS <b>✳</b> GOOD COFFEE <b>✳</b> WARM COMPANY <b>✳</b> LITTLE MOMENTS <b>✳</b></span>)}
      </div>
    </div>

    <section className="section">
      <div className="wrap split">
        <div className="split-image" style={{ backgroundImage: "url(/images/auro-interior-wide-1.webp)" }}/>
        <div>
          <span className="eyebrow">A SPACE TO FEEL AT HOME</span>
          <h2>Warm corners.<br/><em>Wandering conversations.</em></h2>
          <p className="body-copy">Think soft, earthy tones, warm pendant lights, natural textures and a table that invites you to stay a little longer. AURO is your neighbourhood pause for coffee dates, catch-ups and everyday little celebrations.</p>
          <Link className="btn btn-light" href="/about">A little about AURO <ArrowUpRight size={14}/></Link>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--ivory)" }}>
      <div className="wrap">
        <SectionTitle eyebrow="THE AURO MOOD" title="A little something for every kind of day." copy="Come as you are. There is always room for a coffee, a bite and a moment to yourself."/>
        <div className="features">{features.map(({ Icon, title, copy }) => <article className="feature" key={title}><Icon color="var(--clay)" size={25}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, flexWrap: "wrap", marginBottom: 35 }}>
          <SectionTitle eyebrow="FROM THE MENU" title="Good things, worth gathering for." copy="A preview of our proposed café menu. Please ask the team to confirm today's availability."/>
          <Link className="btn btn-light" href="/menu">See everything <ArrowUpRight size={14}/></Link>
        </div>
        <div className="menu-grid">{picks.map(item => <article className="food-card" key={item.id}><div className="food-photo" style={{ backgroundImage: `url(${item.image})` }}/><div className="food-info"><span className="tag">A suggested favourite</span><h3>{item.name}</h3><p>{item.description}</p><span className="price">₹{item.price}</span></div></article>)}</div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--ivory)" }}>
      <div className="wrap">
        <SectionTitle eyebrow="FOLLOW YOUR CRAVING" title="Find your kind of comfort."/>
        <div className="category-grid" style={{ marginTop: 34 }}>{categories.map((c, i) => <Link className="category-tile" href="/menu" key={c}>{c}<span style={{ marginLeft: "auto", font: "10px var(--sans)", letterSpacing: ".12em" }}>0{i + 1}</span></Link>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <SectionTitle eyebrow="MAKE YOURSELF COMFORTABLE" title="Little moments look good here." copy="An easy coffee catch-up, a long lunch or an evening with your favourite people. Make AURO part of your story."/>
        <div className="experience" style={{ marginTop: 38 }}>{photos.map((p, i) => <div className="experience-card" key={p} style={{ backgroundImage: `url(${p})` }}><h3>{["Coffee & Catch-ups", "Gather Around", "Evenings at AURO"][i]}</h3></div>)}</div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--ivory)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, marginBottom: 30, flexWrap: "wrap" }}>
          <SectionTitle eyebrow="A FEEL FOR THE PLACE" title="Earthy, easy, inviting." copy="Real moments and details from inside AURO CAFE."/>
          <Link className="btn btn-light" href="/gallery">View gallery</Link>
        </div>
        <div className="gallery-grid">{["/images/auro-interior-wide-1.webp", "/images/auro-interior-wide-2.webp", "/images/auro-counter-detail.webp", "/images/auro-ceiling-and-decor.webp"].map((src, i) => <div key={src} role="img" aria-label={["AURO CAFE interior", "AURO CAFE seating area", "AURO CAFE counter", "AURO CAFE ceiling and decor"][i]} style={{ backgroundImage: `url(${src})` }}/>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="wrap split">
        <div>
          <span className="eyebrow">YOUR TABLE IS WAITING</span>
          <h2>Find your way<br/>to AURO.</h2>
          <p className="body-copy">{siteConfig.address}</p>
          <Link className="btn" href="/contact">Get directions <MapPin size={15}/></Link>
        </div>
        <div className="location-panel">
          <span className="eyebrow">A NEIGHBOURHOOD HIDEAWAY</span>
          <h3 className="serif" style={{ fontSize: 34, margin: "18px 0 12px" }}>AURO CAFE</h3>
          <p className="body-copy">Pale Gaon, Ambernath<br/>Maharashtra 421506, India</p>
          <p className="muted" style={{ fontSize: 10, marginTop: 20 }}>Please check directly with the café for current opening hours and availability.</p>
        </div>
      </div>
    </section>
  </>;
}