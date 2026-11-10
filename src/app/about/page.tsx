import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/site-shell";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the AURO CAFE feeling: warm corners, good coffee and moments worth slowing down for in Pale Gaon, Ambernath.",
  alternates: { canonical: "/about" }
};

const values = [
  ["Thoughtful flavours", "Café favourites and comforting plates for every craving."],
  ["Everyday rituals", "From that first sip of coffee to a sweet treat at the end."],
  ["Time together", "A welcoming setting for friends, families and celebrations."],
  ["Natural warmth", "Soft lights, earthy details and a cosy, unhurried mood."]
];

export default function About() {
  return (
    <>
      <section className="page-hero story-hero">
        <span className="eyebrow">A LITTLE MEDITERRANEAN SOUL</span>
        <h1>Earthy by nature.<br /><em>Golden by feeling.</em></h1>
        <p className="body-copy">A neighbourhood café made for good food, warm light and conversations that take their time.</p>
        <span className="page-hero-mark" aria-hidden="true">✳</span>
      </section>
      <section className="section story-intro">
        <div className="wrap split">
          <Reveal className="story-photo">
            <div className="split-image" style={{ backgroundImage: "url(/images/auro-interior-wide-2.webp)" }} />
            <span className="image-stamp">SLOW DOWN<br />STAY AWHILE</span>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionTitle eyebrow="SLOW DOWN. STAY A WHILE." title="The beauty is in the little moments." />
            <p className="body-copy">We believe a café should be more than a quick stop. It can be the place where a conversation runs longer, a familiar coffee becomes a ritual, and an ordinary afternoon turns into a memory.</p>
            <p className="body-copy">The AURO mood is warm and grounded: earthy shades, natural textures, soft pendant lighting and a relaxed setting that feels easy to settle into. Come by for a catch-up, a bite or simply a little time for yourself.</p>
            <Link className="text-link" href="/menu">Find your favourite <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
      <section className="section story-values">
        <div className="wrap">
          <Reveal><SectionTitle eyebrow="WHAT MATTERS HERE" title="Good food. Warm hospitality. Room to connect." /></Reveal>
          <RevealGroup className="features">
            {values.map(([title, copy], index) => (
              <RevealItem key={title}>
                <article className="feature">
                  <span className="feature-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <section className="story-end">
        <span className="eyebrow">YOUR LITTLE ESCAPE IN PALE GAON</span>
        <p>Come for a coffee.<br /><em>Stay for the feeling.</em></p>
        <Link className="btn" href="/contact">Come find AURO <ArrowUpRight size={15} /></Link>
      </section>
    </>
  );
}