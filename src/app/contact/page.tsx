import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Instagram, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { ContactEnquiry } from "@/components/contact-enquiry";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: "Find AURO CAFE at Pale Road, Pale Gaon, Ambernath, Maharashtra 421506.",
  alternates: { canonical: "/contact" }
};

export default function Contact() {
  return (
    <>
      <section className="page-hero contact-hero">
        <span className="eyebrow">WE&apos;D LOVE TO WELCOME YOU</span>
        <h1>Come find<br /><em>your AURO.</em></h1>
        <p className="body-copy">Your next coffee break might be closer than you think.</p>
        <span className="gallery-count">PALE GAON · AMBERNATH · MAHARASHTRA</span>
      </section>
      <section className="section contact-main">
        <div className="wrap contact-layout">
          <Reveal className="contact-copy">
            <span className="eyebrow">YOUR NEXT LITTLE ESCAPE</span>
            <h2>Find your way<br /><em>to something lovely.</em></h2>
            <p className="body-copy">{siteConfig.address}</p>
            <a className="btn" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a>
            <div className="contact-details">
              {siteConfig.phone && <a href={`tel:${siteConfig.phone}`}><Phone size={17} /><span><small>GIVE US A CALL</small>{siteConfig.phone}</span></a>}
              {siteConfig.instagram && <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /><span><small>FOLLOW THE MOMENTS</small>Instagram</span></a>}
              <div><Clock3 size={17} /><span><small>OPENING HOURS</small>{siteConfig.openingHours || "Please check with the café"}</span></div>
            </div>
          </Reveal>
          <Reveal className="contact-card" delay={0.12}>
            <span className="eyebrow">A NEIGHBOURHOOD HIDEAWAY</span>
            <h3>AURO CAFE</h3>
            <p className="body-copy">Pale Rd, next to Royal Flora, behind Anand Sagar Resort &amp; water park, Pale Gaon, Ambernath, Maharashtra 421506, India.</p>
            <a className="text-link" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">Open map search <MapPin size={15} /></a>
            <span className="contact-card-mark" aria-hidden="true">✳</span>
          </Reveal>
        </div>
      </section>
      <section className="contact-map-section">
        <div className="wrap">
          <iframe className="map-frame" title="Map showing AURO CAFE address area" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`} />
          <p className="muted map-caption">Map search is based on the supplied address. Confirm the exact pin before publishing.</p>
        </div>
      </section>
      <ContactEnquiry />
    </>
  );
}
