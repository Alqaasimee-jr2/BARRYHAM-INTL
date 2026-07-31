# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **2026-07-29**: Started project initialization.
- **2026-07-29**: Scaffolded Next.js 14 project with Tailwind and TypeScript.
- **2026-07-29**: Configured static export and unoptimized images in `next.config.mjs`.
- **2026-07-29**: Added custom colors and fonts to `tailwind.config.ts`.
- **2026-07-29**: Created `lib/whatsapp.ts` for standardized WhatsApp links.
- **2026-07-29**: Added `CartContext.tsx` with localStorage persistence.
- **2026-07-29**: Built responsive `Nav` and `Footer` components.
- **2026-07-29**: Assembled `Home` page (`app/page.tsx`) with `Hero`, `TrustMarquee`, and animated sections using Framer Motion.
- **2026-07-29**: Created stub pages for `/about`, `/products`, `/services`, and `/contact`.
- **2026-07-29**: Updated `layout.tsx` to include Google fonts (Playfair Display, Poppins) and context providers.
- **2026-07-29**: Read company profile PDF and extracted real content for About page.
- **2026-07-29**: Created `/data/projects.ts` (30 real projects) and `/data/products.ts` (15 placeholder items).
- **2026-07-29**: Built `/app/about/page.tsx` with real copy, dynamic `StatCounter`, and filterable `ProjectCard` grid.
- **2026-07-29**: Built `/app/products/page.tsx` with sticky category tabs and `ProductCard` grid.
- **2026-07-29**: Created `CartDrawer` and `FloatingCart` components to complete the Quote Request via WhatsApp flow.
- **2026-07-29**: Added `total` calculation to `CartContext.tsx`.
- **2026-07-31**: Fixed `TrustMarquee` section label font — changed from Playfair Display to Poppins SemiBold per spec.
- **2026-07-31**: Added internal `[PLACEHOLDER — awaiting client testimonial]` comments to all 3 entries in `data/testimonials.ts`.
- **2026-07-31**: Rebuilt `/app/services/page.tsx` — replaced text-label image placeholders with 3 AI-generated service photos (`service-plumbing.png`, `service-tiles.png`, `service-interior.png`); strengthened hero copy to emphasise supply-and-installation (not just retail).
- **2026-07-31**: Created `/public/` directory and added 3 AI-generated service images.
- **2026-07-31**: Updated `/app/contact/page.tsx` — added all 3 phone numbers as `tel:` click-to-call links (0803 475 0270, 0808 444 6319, 0909 038 1508); replaced map placeholder divs with Google Maps `<iframe>` embeds (approximate coordinates; TODO: replace with client-provided exact embed URLs).
- **2026-07-31**: Updated `components/Footer.tsx` — replaced all placeholder phone numbers and WhatsApp link with real BIL numbers.
- **2026-07-31**: Removed unused `Quote` import from `app/page.tsx` (ESLint fix).
- **2026-07-31**: Verified clean production build — all 5 routes compile as static pages, zero errors.
- **2026-07-31**: Fetched and analysed 4 Stitch design variants for BIL Home page (Elevated, Updated Copy, Authentically Nigerian, Locally Rooted).
- **2026-07-31**: Rewrote `app/page.tsx` — full premium Home page redesign synthesising best elements from all 4 Stitch variants. Sections: asymmetric split-screen hero with navy/gold data chips, Statement Wall institutional trust (CBN, NRS, Polaris Bank, CCECC, LSDPC, CIPM, WACS), brand constellation cluster (Grohe, Ideal Standard, Villeroy & Boch, Varmora, Armitage Shanks, Twyford, Vado), 12-col asymmetric "What We Do" with bento image grid, horizontal-scroll product card track (real data from `data/products.ts`), 3-column testimonial cards with expanding gold hairline animations, full-width navy CTA band with WhatsApp + contact CTAs.
- **2026-07-31**: Generated 3 AI photography assets: `hero-main.png` (luxury bathroom), `bento-foyer.png` (grand corporate foyer), `bento-detail.png` (brushed gold faucet macro).
- **2026-07-31**: Added `scrollbar-hide` and `transition-ambient` utilities to `app/globals.css`.
- **2026-07-31**: Build verified clean — Home page 5.45 kB, all 5 routes static, zero errors.
