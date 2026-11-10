import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Real photos of the AURO CAFE interior in Ambernath.",
  alternates: { canonical: "/gallery" }
};

const imgs: [string, string][] = [
  ["The café interior", "/images/auro-interior-wide-1.webp"],
  ["Seating and atmosphere", "/images/auro-interior-wide-2.webp"],
  ["The café counter", "/images/auro-counter-detail.webp"],
  ["Ceiling and décor", "/images/auro-ceiling-and-decor.webp"]
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero gallery-hero">
        <span className="eyebrow">INSIDE AURO CAFE</span>
        <h1>The real AURO,<br /><em>in little moments.</em></h1>
        <p className="body-copy">A look at the actual spaces, details and atmosphere of our café.</p>
        <span className="gallery-count">01 — 04 / THE AURO ARCHIVE</span>
      </section>
      <section className="section gallery-page">
        <div className="wrap">
          <Reveal className="gallery-intro">
            <span className="eyebrow">A FEEL FOR THE PLACE</span>
            <p className="display-quote">A little light.<br /><em>A lot of atmosphere.</em></p>
            <p className="body-copy">Explore the textures, corners and details that make AURO feel like AURO. Select any photograph to open the full gallery.</p>
          </Reveal>
          <Reveal><GalleryGrid images={imgs} /></Reveal>
        </div>
      </section>
    </>
  );
}