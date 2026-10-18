# Barryham Int'l Ltd Lead-Generation & Local-SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform `https://barryham.site/` into a high-converting lead-generation and local-SEO website with sticky and inline WhatsApp CTAs, a WhatsApp-routed `/request-quote` page, consistent NAP + opening hours, full JSON-LD structured data, an enriched 5-filter product catalogue, 11 dedicated local-SEO/showroom/credibility landing pages, conversion-focused blog articles, and Vercel Analytics event tracking.

**Architecture:** Next.js 14 App Router deployed on Vercel (`next.config.mjs` configured for standard Vercel build), using Server Components for page-level SEO metadata and JSON-LD schema injection, paired with interactive Client Components for filtering, quote cart pre-filling, and WhatsApp lead routing. All enquiries route directly to Barryham's WhatsApp (`+234 803 475 0270`) and track conversion events via `@vercel/analytics`.

**Tech Stack:** Next.js 14.2, React 18, TypeScript 5, Tailwind CSS 3.4, Framer Motion, Lucide React, `@vercel/analytics`.

---

## File Structure Map

- **Configuration & Core Utilities:**
  - Modify: `next.config.mjs` (remove static export block so Vercel analytics/server metadata/images work seamlessly)
  - Modify: `package.json` (add `@vercel/analytics`)
  - Create: `lib/constants.ts` (canonical NAP, phones, WhatsApp links, showroom details, opening hours, trust badges)
  - Modify: `lib/whatsapp.ts` (add exact directive sticky link helper + structured quote formatter)
  - Create: `lib/schema.ts` (JSON-LD builders for `LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`, `Article`)
  - Create: `lib/analytics.ts` (Vercel Analytics `trackConversion` wrapper for `whatsapp_click`, `quote_submitted`, `call_click`, `product_enquiry`)
- **Conversion & Credibility Components:**
  - Create: `components/AnalyticsProvider.tsx` (mounts `<Analytics />` + global click listener for `wa.me` and `tel:` links)
  - Create: `components/StickyWhatsApp.tsx` (sticky "Chat on WhatsApp" button on every page)
  - Create: `components/TrustBadges.tsx` ("Genuine brands", "Lagos delivery", "Installation support", "Trade supply available")
  - Create: `components/SectionWhatsAppCTA.tsx` (inline WhatsApp + Request Quote CTA block placed after product, service, project, and blog sections)
  - Create: `components/WhyBarryham.tsx` (6-pillar credibility section)
  - Create: `components/ReviewsSection.tsx` (client/Google reviews section with 5-star ratings and Google review CTA)
  - Modify: `components/Nav.tsx` (top utility bar with phone, WhatsApp, email, showrooms, opening hours + "Request a Quote" CTA)
  - Modify: `components/Footer.tsx` (complete NAP, opening hours, showroom links, landing page links)
  - Modify: `components/FloatingCart.tsx` (adjust positioning so it never overlaps `StickyWhatsApp`)
- **Pages — Priority 1 & 2 (Conversion, Quote, SEO, Core Pages):**
  - Modify: `app/layout.tsx` (global metadata, `LocalBusiness` schema, `StickyWhatsApp`, `AnalyticsProvider`)
  - Create: `app/request-quote/page.tsx` + `components/RequestQuoteClient.tsx` (7-field quote form routing to WhatsApp + auto-reply message)
  - Create: `components/HomeClient.tsx` & Modify: `app/page.tsx` (exact Home `<title>`, `LocalBusiness` JSON-LD, section WhatsApp CTAs, `WhyBarryham`, `ReviewsSection`)
  - Create: `components/ContactClient.tsx` & Modify: `app/contact/page.tsx` (exact Contact `<title>`, `LocalBusiness` JSON-LD, opening hours, WhatsApp-routed contact form)
  - Create: `components/ServicesClient.tsx` & Modify: `app/services/page.tsx` (server metadata + section WhatsApp CTAs after each service)
  - Create: `components/AboutClient.tsx` & Modify: `app/about/page.tsx` (server metadata + `WhyBarryham` + section WhatsApp CTA)
  - Create: `app/not-found.tsx` (custom 404 page with category links and WhatsApp CTA)
- **Pages — Priority 4 (Product Catalogue & Detail):**
  - Modify: `data/products.ts` (add Ariston Water Heaters + electrical fittings, enrich with `availability`, `priceMode`, `specifications`, `useCases`, `images`)
  - Modify: `components/ProductCard.tsx` (support `"Request price"` mode, availability badge, WhatsApp enquiry button, `product_enquiry` event)
  - Create: `components/ProductsClient.tsx` & Modify: `app/products/page.tsx` (5 filters: category, brand, price range, availability, use case + section WhatsApp CTA)
  - Modify: `app/products/[id]/page.tsx` & `components/ProductDetailActions.tsx` (`Product` + `BreadcrumbList` schema, multi-photo gallery, specifications table, delivery info, trust badges, "Chat on WhatsApp to order")
- **Pages — Priority 5 & 6 (11 Landing Pages & Credibility Pages):**
  - Create: `data/landing-pages.ts` (structured content, FAQs, categories, brands, internal links for the 9 category/service/showroom pages)
  - Create: `components/LandingPageTemplate.tsx` (reusable SEO landing page component with H1, intro, product grid, brands, delivery/installation, trust badges, WhatsApp CTA, FAQs with `FAQPage` schema, internal links)
  - Create:
    - `app/sanitary-ware-lagos/page.tsx`
    - `app/plumbing-fittings-lagos/page.tsx`
    - `app/electrical-fittings-lagos/page.tsx`
    - `app/bathroom-fittings-nigeria/page.tsx`
    - `app/water-heaters-nigeria/page.tsx`
    - `app/bulk-supply-contractors/page.tsx`
    - `app/delivery-installation/page.tsx`
    - `app/dopemu-showroom/page.tsx`
    - `app/alimosho-showroom/page.tsx`
    - `app/brands/page.tsx`
  - Modify: `data/projects.ts` & `app/projects/page.tsx` + `components/ProjectsClient.tsx` (featured case studies with 3–6 photos, products supplied, client type, result statement + all 30 real projects filterable by sector)
- **Pages — Priority 7 (Blog Conversion Upgrades & Sitemap):**
  - Create: `data/blog.ts` (centralized conversion-focused articles with author, publishedDate, updatedDate, readTime, related products, related landing page links)
  - Modify: `app/blog/page.tsx` & `app/blog/[slug]/page.tsx` (`Article` + `BreadcrumbList` schema, internal links to `/electrical-fittings-lagos` and `/plumbing-fittings-lagos`, end-of-article Related Products + Related Service Page + WhatsApp CTA)
  - Modify: `app/sitemap.ts` (include all 11 landing pages, `/request-quote`, products, and blog posts)

---

### Task 1: Configure Build, Analytics & Centralized Business Constants

**Files:**
- Modify: `next.config.mjs`
- Modify: `package.json`
- Create: `lib/constants.ts`
- Modify: `lib/whatsapp.ts`
- Create: `lib/analytics.ts`
- Create: `components/AnalyticsProvider.tsx`

- [ ] **Step 1: Install `@vercel/analytics` and update `next.config.mjs`**
  Run `npm install @vercel/analytics` and update `next.config.mjs` so the app builds cleanly for Vercel while allowing remote product/project images.

- [ ] **Step 2: Create `lib/constants.ts` and update `lib/whatsapp.ts`**
  Define canonical NAP (`Barryham International Limited`), phones (`0803 475 0270`, `0808 444 6319`, `0909 038 1508`), WhatsApp number (`2348034750270`), default sticky WhatsApp URL (`https://wa.me/2348034750270?text=Hello%20Barryham,%20I%20need%20a%20quote%20for...`), email (`bihl.sales@gmail.com`), opening hours (`Mon–Sat: 8:00 AM – 6:00 PM`), and showroom metadata.

- [ ] **Step 3: Create `lib/analytics.ts` and `components/AnalyticsProvider.tsx`**
  Wire `@vercel/analytics/react` and global click listeners for `whatsapp_click`, `call_click`, `quote_submitted`, and `product_enquiry`.

---

### Task 2: Build Sticky WhatsApp CTA, Section CTAs, Trust Badges & Full Header/Footer NAP

**Files:**
- Create: `components/StickyWhatsApp.tsx`
- Create: `components/TrustBadges.tsx`
- Create: `components/SectionWhatsAppCTA.tsx`
- Modify: `components/FloatingCart.tsx`
- Modify: `components/Nav.tsx`
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Create `StickyWhatsApp.tsx`, `TrustBadges.tsx`, and `SectionWhatsAppCTA.tsx`**
  Ensure `StickyWhatsApp` renders on every page with the exact link `https://wa.me/2348034750270?text=Hello%20Barryham,%20I%20need%20a%20quote%20for...` and coordinates with `FloatingCart.tsx`.

- [ ] **Step 2: Update `Nav.tsx` and `Footer.tsx` with full NAP + Opening Hours**
  Add top contact/hours utility bar in `Nav.tsx` (plus "Request a Quote" button and landing page links under Products/Services) and full non-duplicated NAP + opening hours + SEO page links in `Footer.tsx`.

---

### Task 3: Build `/request-quote` Page & Upgrade `/contact` Page

**Files:**
- Create: `components/RequestQuoteClient.tsx`
- Create: `app/request-quote/page.tsx`
- Create: `components/ContactClient.tsx`
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Create `/request-quote` with the exact 7 fields and WhatsApp routing**
  Fields: Full name, Phone/WhatsApp number, Project type (`Home`, `Estate`, `Hotel`, `School`, `Office`, `Contractor/Bulk`), Products needed (auto-populated if cart has items), Location, Budget range (optional), Message/upload (optional). On submit: fires `quote_submitted`, displays *"Thank you. Our team will contact you shortly."*, and routes the structured quote to WhatsApp.

- [ ] **Step 2: Refactor `app/contact/page.tsx` for exact SEO Metadata, `LocalBusiness` JSON-LD, Opening Hours, and WhatsApp routing**
  Set `<title>` to `Contact Barryham Int’l Ltd | Sanitary Ware & Electrical Fittings Lagos`, add `LocalBusiness` schema, display opening hours (`Mon–Sat: 8:00 AM – 6:00 PM`) and both showroom maps/directions, and route contact submissions through WhatsApp.

---

### Task 4: Implement JSON-LD Schema Generators, Home/Services/About Metadata & 404 Page

**Files:**
- Create: `lib/schema.ts`
- Create: `components/WhyBarryham.tsx`
- Create: `components/ReviewsSection.tsx`
- Create: `components/HomeClient.tsx` & Modify: `app/page.tsx`
- Create: `components/ServicesClient.tsx` & Modify: `app/services/page.tsx`
- Create: `components/AboutClient.tsx` & Modify: `app/about/page.tsx`
- Modify: `app/layout.tsx`
- Create: `app/not-found.tsx`

- [ ] **Step 1: Create `lib/schema.ts`, `WhyBarryham.tsx`, and `ReviewsSection.tsx`**
  Build reusable schema helpers (`getLocalBusinessSchema`, `getProductSchema`, `getFAQSchema`, `getBreadcrumbSchema`, `getArticleSchema`) and the credibility sections.

- [ ] **Step 2: Refactor `app/page.tsx`, `app/services/page.tsx`, `app/about/page.tsx`, `app/layout.tsx`, and `app/not-found.tsx`**
  Set Home `<title>` to `Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd`, inject `LocalBusiness` JSON-LD, add inline WhatsApp CTAs after product and service sections, and create the custom 404 page (`app/not-found.tsx`).

---

### Task 5: Upgrade Product Catalogue, Filters & Product Detail Pages (Directive 4)

**Files:**
- Modify: `data/products.ts`
- Modify: `components/ProductCard.tsx`
- Create: `components/ProductsClient.tsx`
- Modify: `app/products/page.tsx`
- Modify: `app/products/[id]/page.tsx`
- Modify: `components/ProductDetailActions.tsx`

- [ ] **Step 1: Enrich `data/products.ts` with Ariston Water Heaters, Electrical items, and new fields**
  Add `water-heaters` category (Ariston residential/commercial water heaters), `availability`, `priceMode` (`"fixed" | "request"`), `specifications`, `useCases`, `images`, and helper functions.

- [ ] **Step 2: Upgrade `ProductCard.tsx`, `app/products/page.tsx`, and `app/products/[id]/page.tsx`**
  Add 5 filters on `/products` (Category, Brand, Price Range, Availability, Use Case), multi-photo gallery + specifications + delivery info + `Product` schema + "Chat on WhatsApp to order" button on `/products/[id]`.

---

### Task 6: Build the 11 Dedicated Landing Pages & Credibility Pages (`/projects`, `/brands`)

**Files:**
- Create: `data/landing-pages.ts`
- Create: `components/LandingPageTemplate.tsx`
- Create: `app/sanitary-ware-lagos/page.tsx`
- Create: `app/plumbing-fittings-lagos/page.tsx`
- Create: `app/electrical-fittings-lagos/page.tsx`
- Create: `app/bathroom-fittings-nigeria/page.tsx`
- Create: `app/water-heaters-nigeria/page.tsx`
- Create: `app/bulk-supply-contractors/page.tsx`
- Create: `app/delivery-installation/page.tsx`
- Create: `app/dopemu-showroom/page.tsx`
- Create: `app/alimosho-showroom/page.tsx`
- Create: `app/brands/page.tsx`
- Modify: `data/projects.ts`, Create: `components/ProjectsClient.tsx`, Modify: `app/projects/page.tsx`

- [ ] **Step 1: Create `data/landing-pages.ts`, `components/LandingPageTemplate.tsx`, and the 9 category/service/showroom route pages**
  Each page includes a single clear H1, target-audience intro, product categories + live product cards, brands supplied, delivery & installation info, WhatsApp CTA + trust badges, `WhyBarryham`, FAQ section (`FAQPage` schema), and internal links to related products and blog guides.

- [ ] **Step 2: Build `/brands` and upgrade `/projects`**
  Create `app/brands/page.tsx` showcasing authorised brand partnerships and direct catalogue links. Upgrade `app/projects/page.tsx` with featured multi-photo case studies (3–6 photos, products supplied, client type, result statement) plus all 30 real projects filterable by sector.

---

### Task 7: Upgrade Blog for Conversion, Update Sitemap & Run Full Build Verification

**Files:**
- Create: `data/blog.ts`
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Centralize blog articles in `data/blog.ts` and upgrade `app/blog/page.tsx` & `app/blog/[slug]/page.tsx`**
  Add reading time, author, published date, updated date, `Article` + `BreadcrumbList` JSON-LD, contextual links (`cable-selection-guide` → `/electrical-fittings-lagos`, `plumbing-installation-checklist` → `/plumbing-fittings-lagos`), and end every article with Related Products, Related Service/Landing Page, and a WhatsApp CTA.

- [ ] **Step 2: Update `app/sitemap.ts` and run `npm run lint` + `npm run build`**
  Include all 11 landing pages, `/request-quote`, products, and blog posts in `/sitemap.xml`. Verify zero TypeScript, ESLint, or Next.js build errors.
