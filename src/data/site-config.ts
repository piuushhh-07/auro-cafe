export const siteConfig = {
  name: "AURO CAFE",
  tagline: "Escape the Ordinary. Taste the Mediterranean.",
  description: "Discover beautiful flavours, freshly brewed coffee, delicious bites, and moments worth sharing at AURO CAFE in Pale Gaon, Ambernath.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://auro-cafe.vercel.app",
  address: "Pale Rd, next to Royal Flora, behind Anand Sagar Resort & water park, Pale Gaon, Ambernath, Maharashtra 421506, India",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
  openingHours: process.env.NEXT_PUBLIC_OPENING_HOURS || "",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=AURO+CAFE%2C+Pale+Rd%2C+Pale+Gaon%2C+Ambernath%2C+Maharashtra+421506",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=AURO+CAFE%2C+Pale+Rd%2C+Pale+Gaon%2C+Ambernath%2C+Maharashtra+421506"
} as const;