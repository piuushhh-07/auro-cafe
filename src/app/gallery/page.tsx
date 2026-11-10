import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";

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
  return <>
    <section className="page-hero">
      <span className="eyebrow">INSIDE AURO CAFE</span>
      <h1>The real AURO, in pictures.</h1>
      <p className="body-copy">A look at the actual spaces, details and atmosphere of our café.</p>
    </section>
    <section className="section">
      <div className="wrap">
        <GalleryGrid images={imgs}/>
      </div>
    </section>
  </>;
}