# AURO CAFE — Mediterranean-inspired café website

A Next.js App Router website for AURO CAFE, Pale Gaon, Ambernath.

## Before publishing
- Menu items, descriptions and INR prices are proposed starter content, not a verified live menu. Confirm every item and price with the café.
- Current Unsplash images are illustrative stock photography, not actual AURO CAFE venue or product photos. Replace them with café-owned or appropriately licensed images.
- No official phone, WhatsApp, email, Instagram handle or opening hours are configured. Add verified values to `.env.local`.
- Confirm the exact Google Maps pin and have the legal pages reviewed before launch.
- WhatsApp opens a prefilled enquiry only. It does not confirm an order or process payment.

## Local development
Requires Node.js 20.9+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Quality checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel
1. Import `piuushhh-07/auro-cafe` in Vercel.
2. Select the Next.js framework preset (auto-detected).
3. Add verified values from `.env.example` under Project Settings → Environment Variables.
4. Deploy. The site builds with blank contact configuration; WhatsApp ordering remains disabled until a verified number is configured.

## Editing the menu
Edit `src/data/menu.ts`. It is the centralized source of truth for category, name, suggested INR price, vegetarian status, description, availability, bestseller status, spice indicator and image.

## Editing business details
Edit `src/data/site-config.ts` or use the matching environment variables. Never publish unverified contact information or opening hours.

## Photography
The current remote Unsplash images are editorial placeholders. Replace them with original AURO CAFE photos or images licensed for commercial use. Do not describe stock imagery as the café's real interior or food.