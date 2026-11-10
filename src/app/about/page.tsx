import type { Metadata } from "next";
import { SectionTitle } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the AURO CAFE feeling: warm corners, good coffee and moments worth slowing down for in Pale Gaon, Ambernath.",
  alternates: { canonical: "/about" }
};

export default function About() {
  return <>
    <section className="page-hero">
      <span className="eyebrow">A LITTLE MEDITERRANEAN SOUL</span>
      <h1>Earthy by nature.<br/><em>Golden by feeling.</em></h1>
      <p className="body-copy" style={{ maxWidth: 650, margin: "auto" }}>A neighbourhood café made for good food, warm light and conversations that take their time.</p>
    </section>
    <section className="section">
      <div className="wrap split">
        <div className="split-image" style={{ backgroundImage: "url(/images/auro-interior-wide-2.webp)" }}/>
        <div>
          <SectionTitle eyebrow="SLOW DOWN. STAY A WHILE." title="The beauty is in the little moments."/>
          <p className="body-copy">We believe a café should be more than a quick stop. It can be the place where a conversation runs longer, a familiar coffee becomes a ritual, and an ordinary afternoon turns into a memory.</p>
          <p className="body-copy">The AURO mood is warm and grounded: earthy shades, natural textures, soft pendant lighting and a relaxed setting that feels easy to settle into. Come by for a catch-up, a bite or simply a little time for yourself.</p>
        </div>
      </div>
    </section>
    <section className="section" style={{ background: "var(--ivory)" }}>
      <div className="wrap">
        <SectionTitle eyebrow="WHAT MATTERS HERE" title="Good food. Warm hospitality. Room to connect."/>
        <div className="features">
          <article className="feature"><h3>Thoughtful flavours</h3><p>Café favourites and comforting plates for every craving.</p></article>
          <article className="feature"><h3>Everyday rituals</h3><p>From that first sip of coffee to a sweet treat at the end.</p></article>
          <article className="feature"><h3>Time together</h3><p>A welcoming setting for friends, families and celebrations.</p></article>
          <article className="feature"><h3>Natural warmth</h3><p>Soft lights, earthy details and a cosy, unhurried mood.</p></article>
        </div>
      </div>
    </section>
  </>;
}