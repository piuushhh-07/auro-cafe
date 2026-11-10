"use client";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
type GalleryImage = [string, string];
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive(i => i === null ? null : (i + 1) % images.length);
      if (event.key === "ArrowLeft") setActive(i => i === null ? null : (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);
  return <>
    <div className="gallery-grid">{images.map(([label, id], index) => <button key={id} type="button" onClick={() => setActive(index)} aria-label={`Open ${label} photo`} style={{ backgroundImage: `url(${id})`, backgroundSize: "cover", backgroundPosition: "center", border: 0, cursor: "zoom-in" }} />)}</div>
    {active !== null && <div role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setActive(null)} style={{ position: "fixed", inset: 0, zIndex: 80, background: "#081b2beF", display: "grid", placeItems: "center", padding: 24 }}>
      <button type="button" onClick={() => setActive(null)} aria-label="Close gallery" style={{ position: "absolute", right: 22, top: 22, color: "white", background: "transparent", border: 0 }}><X size={28}/></button>
      <button type="button" aria-label="Previous image" onClick={e => { e.stopPropagation(); setActive(i => i === null ? null : (i - 1 + images.length) % images.length); }} style={{ position: "absolute", left: 18, color: "white", background: "transparent", border: 0 }}><ChevronLeft size={32}/></button>
      <div onClick={e => e.stopPropagation()} style={{ width: "min(100%,1000px)", height: "min(72vh,680px)", backgroundImage: `url(${images[active][1]})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} role="img" aria-label={`${images[active][0]} photo`}/>
      <p style={{ color: "white", position: "absolute", bottom: 18 }}>{images[active][0]} · {active + 1} / {images.length}</p>
      <button type="button" aria-label="Next image" onClick={e => { e.stopPropagation(); setActive(i => i === null ? null : (i + 1) % images.length); }} style={{ position: "absolute", right: 18, color: "white", background: "transparent", border: 0 }}><ChevronRight size={32}/></button>
    </div>}
  </>;
}