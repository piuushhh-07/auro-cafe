"use client";
import { useState } from "react";
import { siteConfig } from "@/data/site-config";
export function ContactEnquiry() {
  const [name,setName] = useState(""); const [email,setEmail] = useState(""); const [message,setMessage] = useState(""); const [error,setError] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.trim().length < 10) { setError("Please enter your name, a valid email and a message of at least 10 characters."); return; }
    if (!siteConfig.email) { setError("Email enquiries are not configured yet. Please use the verified contact details when they are added."); return; }
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setError("Your email app should open with the enquiry. Sending is completed from your email app.");
  };
  return <section className="section" style={{ background: "var(--ivory)" }}><div className="wrap" style={{ maxWidth: 780 }}><span className="eyebrow">SAY HELLO</span><h2>Send an enquiry.</h2><p className="body-copy">Share a note with the café. This form opens your email app; it does not submit information to a website server.</p><form onSubmit={submit} className="form-grid"><input required minLength={2} value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" aria-label="Your name"/><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" aria-label="Your email"/><textarea required minLength={10} value={message} onChange={e=>setMessage(e.target.value)} placeholder="How can we help?" aria-label="Your message"/><div style={{ gridColumn: "1/-1" }}><button className="btn" type="submit">Prepare enquiry</button>{error&&<p className="body-copy" role="status">{error}</p>}</div></form></div></section>;
}