import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A warm, earthy visual moodboard inspired by the AURO CAFE interior in Ambernath.",
  alternates: { canonical: "/gallery" }
};

const imgs: [string, string][] = [
  ["The café mood", "photo-1554118811-1e0d58224f24"],
  ["Coffee moments", "photo-1445116572660-236099ec97a0"],
  ["Gather around", "photo-1517248135467-4c7edcad34c4"],
  ["Natural textures", "photo-1493857671505-72967e2e2760"],
  ["Warm evenings", "photo-1559339352-11d035aa65de"],
  ["A little coffee break", "photo-1509042239860-f550ce710b93"],
  ["Fresh plates", "photo-1540189549336-e6e99c3679fe"]
];

export default function Gallery() {
  return <>
    <section className="page-hero">
      <span className="eyebrow">A FEEL FOR THE PLACE</span>
      <h1>Little glimpses of AURO.</h1>
      <p className="body-copy">Warm tones, slow moments and a little inspiration for your next visit.</p>
    </section>
    <section className="section">
      <div className="wrap">
        <GalleryGrid images={imgs}/>
        <p className="body-copy" style={{ marginTop: 24 }}>These are illustrative editorial photographs, not verified photos of AURO CAFE. Replace them with original café, menu and team photographs before publishing as a real venue gallery.</p>
      </div>
    </section>
  </>;
}