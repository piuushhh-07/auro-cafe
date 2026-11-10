import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };
export default function Privacy() {
  return <section className="section legal-section"><div className="wrap legal-page">
    <span className="eyebrow">THE IMPORTANT DETAILS</span>
    <h1>Privacy Policy</h1>
    <p className="body-copy legal-lead">This page is a starter policy for the AURO CAFE website. It must be reviewed and adapted by the business before launch.</p>
    <h2>Information you provide</h2><p className="body-copy">If you contact the café by phone, email or WhatsApp, the information you share may be used to respond to your enquiry. This website does not currently process payments or create customer accounts.</p>
    <h2>Cookies and analytics</h2><p className="body-copy">No analytics or advertising trackers are intentionally configured in this starter project. Add a clear notice if analytics, advertising or other tracking tools are introduced.</p>
    <h2>Third-party services</h2><p className="body-copy">Links and embedded maps may direct you to third-party services that have their own privacy practices.</p>
    <h2>Contact</h2><p className="body-copy">For privacy questions, use the café&apos;s verified contact details once configured.</p>
  </div></section>;
}