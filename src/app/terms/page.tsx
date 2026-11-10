import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms" } };
export default function Terms() {
  return <section className="section legal-section"><div className="wrap legal-page">
    <span className="eyebrow">THE IMPORTANT DETAILS</span>
    <h1>Terms &amp; Conditions</h1>
    <p className="body-copy legal-lead">This website is an informational café website. The menu and prices currently shown are proposed examples and are not a confirmed offer for sale.</p>
    <h2>Menu and availability</h2><p className="body-copy">Items, descriptions, prices and availability are subject to confirmation by AURO CAFE. Please check with the café before placing an order.</p>
    <h2>Enquiries</h2><p className="body-copy">Opening WhatsApp or another contact service sends an enquiry only. An order is not accepted or confirmed until the café confirms it directly.</p>
    <h2>External links</h2><p className="body-copy">Third-party websites and map services are provided for convenience and are governed by their own terms.</p>
    <h2>Updates</h2><p className="body-copy">The café may update website content, menu details and these terms. Have this document reviewed before launch.</p>
  </div></section>;
}