import type { Metadata } from "next";
import { MenuBrowser } from "@/components/menu-browser";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the proposed AURO CAFE menu: coffee, shakes, mocktails, pizza, pasta, Mediterranean-inspired plates and desserts.",
  alternates: { canonical: "/menu" }
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero menu-hero">
        <span className="eyebrow">A TABLE FULL OF LITTLE JOYS</span>
        <h1>Gather around<br /><em>the table.</em></h1>
        <p className="body-copy">A menu concept for coffee breaks, comfort cravings and Mediterranean-inspired moments.</p>
        <span className="gallery-count">THE AURO MENU · EXPLORE AT YOUR PACE</span>
      </section>
      <section className="section menu-page-section">
        <div className="wrap">
          <Reveal className="menu-intro">
            <span className="eyebrow">SOMETHING FOR EVERY CRAVING</span>
            <p className="display-quote">Find your next<br /><em>little favourite.</em></p>
            <p className="body-copy">Browse the menu, explore the details and build an enquiry selection. Items, prices and availability are illustrative until confirmed by the café.</p>
          </Reveal>
          <MenuBrowser />
        </div>
      </section>
    </>
  );
}
