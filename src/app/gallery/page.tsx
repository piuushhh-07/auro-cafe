import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
export const metadata: Metadata = { title: "Gallery", description: "Explore the AURO CAFE visual moodboard. Photography is illustrative and replaceable with café-owned images." };
const imgs = [
  ["Food", "photo-1540189549336-e6e99c3679fe"], ["Coffee", "photo-1495474472287-4d71bcdd2085"],
  ["Desserts", "photo-1565958011703-44f9829ba187"], ["Ambience", "photo-1493857671505-72967e2e2760"],
  ["Mediterranean Inspiration", "photo-1533105079780-92b9be482077"], ["Coffee Moments", "photo-1509042239860-f550ce710b93"],
  ["Fresh Plates", "photo-1512621776951-a57141f2eefd"]
];
export default function Gallery() {
  return <><section className="page-hero"><span className="eyebrow">A LITTLE VISUAL ESCAPE</span><h1>The AURO Gallery</h1><p className="body-copy">An editorial moodboard inspired by Mediterranean café culture. These are stock demonstration images, not actual AURO CAFE photographs.</p></section><section className="section"><div className="wrap"><GalleryGrid images={imgs}/><p className="body-copy" style={{ marginTop: 24 }}>Replace this moodboard with original café, menu and team photographs before presenting the gallery as AURO's real venue.</p></div></section></>;
}