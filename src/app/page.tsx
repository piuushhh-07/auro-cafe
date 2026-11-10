import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Coffee, Utensils, CakeSlice, Sun, MapPin, type LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/site-shell";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { menuItems, categories } from "@/data/menu";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "AURO CAFE | Coffee, Comfort & Good Company in Ambernath",
  description: "Step into the warm, Mediterranean-inspired world of AURO CAFE in Pale Gaon, Ambernath. Discover coffee, comfort food and a cosy space to slow down.",
  alternates: { canonical: "/" }
};

const picks = menuItems.filter(item => item.bestseller).slice(0, 6);
const photos = [
  { src: "/images/auro-interior-wide-1.webp", title: "Coffee & catch-ups", note: "A corner for the everyday." },
  { src: "/images/auro-interior-wide-2.webp", title: "Gather around", note: "Good things are better shared." },
  { src: "/images/auro-counter-detail.webp", title: "The little details", note: "Made for lingering a little." }
];
const features: { Icon: LucideIcon; title: string; copy: string }[] = [
  { Icon: Coffee, title: "Coffee, slowly", copy: "Take a pause with a freshly brewed favourite." },
  { Icon: Utensils, title: "Comfort on a plate", copy: "Familiar cravings, deliciously taken care of." },
  { Icon: CakeSlice, title: "A little sweetness", copy: "Make room for dessert and one more conversation." },
  { Icon: Sun, title: "A cosy corner", copy: "Warm lights, natural textures and time well spent." }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">A LITTLE MEDITERRANEAN HIDEAWAY · PALE GAON</span>
          <h1>Come in.<br /><em>Slow down.</em><br />Stay awhile.</h1>
          <p>Good coffee, comforting plates and the kind of cosy corner that makes you forget to check the time. Welcome to AURO.</p>
          <div className="hero-actions">
            <Link className="btn" href="/menu">Explore the menu <ArrowUpRight size={15} /></Link>
            <Link className="btn btn-light" href="/contact">Find your way here</Link>
          </div>
        </div>
        <a className="hero-scroll" href="#the-auro-feeling" aria-label="Scroll to discover AURO"><span>SCROLL TO DISCOVER</span><ArrowDown size={14} /></a>
        <span className="hero-index" aria-hidden="true">01 — 06</span>
      </section>

      <div className="boho-ribbon" aria-hidden="true">
        <div className="boho-ribbon-track">
          {Array.from({ length: 4 }).map((_, index) => <span key={index}>SLOW MORNINGS <b>✳</b> GOOD COFFEE <b>✳</b> WARM COMPANY <b>✳</b> LITTLE MOMENTS <b>✳</b></span>)}
        </div>
      </div>

      <section className="section intro-section" id="the-auro-feeling">
        <div className="wrap split">
          <Reveal className="intro-visual">
            <div className="split-image" style={{ backgroundImage: "url(/images/auro-interior-wide-1.webp)" }} />
            <span className="image-stamp">A PLACE TO<br />PAUSE ✳</span>
          </Reveal>
          <Reveal className="intro-copy" delay={0.12}>
            <span className="eyebrow">A SPACE TO FEEL AT HOME</span>
            <p className="display-quote">Not just a coffee stop.<br /><em>A change of pace.</em></p>
            <p className="body-copy">Think soft, earthy tones, warm pendant lights, natural textures and a table that invites you to stay a little longer. AURO is your neighbourhood pause for coffee dates, catch-ups and everyday little celebrations.</p>
            <Link className="text-link" href="/about">A little about AURO <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section mood-section">
        <div className="wrap">
          <Reveal><SectionTitle eyebrow="THE AURO MOOD" title="A little something for every kind of day." copy="Come as you are. There is always room for a coffee, a bite and a moment to yourself." /></Reveal>
          <RevealGroup className="features">
            {features.map(({ Icon, title, copy }, index) => (
              <RevealItem key={title}>
                <article className="feature">
                  <span className="feature-number">0{index + 1}</span>
                  <Icon color="var(--auro-blue)" size={25} strokeWidth={1.4} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section menu-preview">
        <div className="wrap">
          <Reveal className="section-heading-row">
            <SectionTitle eyebrow="FROM THE MENU" title="Good things, worth gathering for." copy="A preview of our proposed café menu. Please ask the team to confirm today's availability." />
            <Link className="text-link" href="/menu">Explore everything <ArrowUpRight size={15} /></Link>
          </Reveal>
          <RevealGroup className="menu-grid">
            {picks.map((item, index) => (
              <RevealItem key={item.id}>
                <article className="food-card">
                  <div className="food-photo" style={{ backgroundImage: `url(${item.image})` }}>
                    <span className="food-index">0{index + 1}</span>
                  </div>
                  <div className="food-info">
                    <span className="tag">A suggested favourite</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="price">₹{item.price}</span>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section category-section">
        <div className="wrap">
          <Reveal><SectionTitle eyebrow="FOLLOW YOUR CRAVING" title="Find your kind of comfort." copy="A little something for every mood, from the first sip to the last bite." /></Reveal>
          <RevealGroup className="category-grid">
            {categories.map((category, index) => (
              <RevealItem key={category}>
                <Link className="category-tile" href="/menu">
                  <span className="category-number">0{index + 1}</span>
                  <span>{category}</span>
                  <ArrowUpRight size={17} />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section moments-section">
        <div className="wrap">
          <Reveal className="moments-heading">
            <span className="eyebrow">MAKE YOURSELF COMFORTABLE</span>
            <h2>Little moments.<br /><em>Longer memories.</em></h2>
            <p className="body-copy">An easy coffee catch-up, a long lunch or an evening with your favourite people. Make AURO part of your story.</p>
          </Reveal>
          <RevealGroup className="experience">
            {photos.map((photo, index) => (
              <RevealItem key={photo.src}>
                <article className={`experience-card experience-card-${index + 1}`} style={{ backgroundImage: `url(${photo.src})` }}>
                  <span className="experience-note">{photo.note}</span>
                  <h3>{photo.title}</h3>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="moments-link"><Link className="text-link" href="/gallery">Step inside the gallery <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section gallery-teaser">
        <div className="wrap">
          <Reveal className="section-heading-row">
            <SectionTitle eyebrow="A FEEL FOR THE PLACE" title="Earthy, easy, inviting." copy="Real details and spaces from inside AURO CAFE." />
            <Link className="text-link" href="/gallery">View all moments <ArrowUpRight size={15} /></Link>
          </Reveal>
          <Reveal className="gallery-grid">
            {["/images/auro-interior-wide-1.webp", "/images/auro-interior-wide-2.webp", "/images/auro-counter-detail.webp", "/images/auro-ceiling-and-decor.webp"].map((src, index) => (
              <div key={src} role="img" aria-label={["AURO CAFE interior", "AURO CAFE seating area", "AURO CAFE counter", "AURO CAFE ceiling and decor"][index]} style={{ backgroundImage: `url(${src})` }} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section visit-section">
        <div className="wrap visit-layout">
          <Reveal>
            <span className="eyebrow">YOUR TABLE IS WAITING</span>
            <h2>Find your way<br /><em>to AURO.</em></h2>
            <p className="body-copy">{siteConfig.address}</p>
            <Link className="btn" href="/contact">Plan your visit <MapPin size={15} /></Link>
          </Reveal>
          <Reveal className="location-panel" delay={0.12}>
            <span className="eyebrow">A NEIGHBOURHOOD HIDEAWAY</span>
            <h3 className="serif">AURO CAFE</h3>
            <p className="body-copy">Pale Gaon, Ambernath<br />Maharashtra 421506, India</p>
            <span className="location-note">COME AS YOU ARE · STAY A LITTLE LONGER</span>
            <p className="muted">Please check directly with the café for current opening hours and availability.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
