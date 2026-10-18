# Barryham Int'l Ltd — Lead-Generation & Local-SEO Upgrade Design Spec

**Date:** 2026-10-18  
**Project:** Barryham International Limited (`https://barryham.site/`)  
**Scope:** Client-facing conversion optimization, local SEO, structured schema, 11 new landing pages, expanded product catalogue, credibility pages, conversion-focused blog, and Vercel Analytics event tracking.

---

## 1. Goals & Constraints

- **Primary Goal:** Turn `https://barryham.site/` into a measurable lead-generation and local-SEO machine in Lagos and across Nigeria, built in strict priority order.
- **Client-Facing Only:** No `/admin` dashboard or login-gated routes. All pages are public, fast, and conversion-focused.
- **100% WhatsApp-Routed Lead Capture:**
  - Every enquiry that needs to reach the Barryham team (`/request-quote`, `/contact`, product enquiries, service enquiries, cart checkout) is formatted into a clean, structured message and routed directly to Barryham's WhatsApp (`+234 803 475 0270`), while displaying the on-screen auto-reply confirmation: *"Thank you. Our team will contact you shortly."*
- **Vercel Built-In Analytics:**
  - Analytics and conversion events (`whatsapp_click`, `quote_submitted`, `call_click`, `product_enquiry`) are powered by Vercel's built-in Analytics (`@vercel/analytics`), plus Google Search Console verification metadata support.
- **Consistent NAP (Name, Address, Phone) & Hours:**
  - **Legal Name:** Barryham International Limited (Barryham Int'l Ltd)
  - **Website URL:** `https://barryham.site/`
  - **Primary WhatsApp & Phone:** `+234 803 475 0270` (`0803 475 0270`)
  - **Additional Phones:** `+234 808 444 6319` (`0808 444 6319`), `+234 909 038 1508` (`0909 038 1508`)
  - **Email:** `bihl.sales@gmail.com`
  - **Dopemu Showroom:** Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu-Agege, Lagos
  - **Alimosho Showroom:** Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos
  - **Opening Hours:** Monday – Saturday, 8:00 AM – 6:00 PM (`Mo-Sa 08:00-18:00`)

---

## 2. Priority Build Order & Architecture

### Phase 1: Conversion Fixes & Consistent Contact Details (Directives 1 & 3)

1. **Centralized Business Config (`lib/constants.ts`):**
   - Exports canonical NAP, WhatsApp links (`https://wa.me/2348034750270?text=Hello%20Barryham,%20I%20need%20a%20quote%20for...`), showroom coordinates/map URLs, opening hours, and the 4 core trust badges.
2. **Global Sticky WhatsApp Button (`components/StickyWhatsApp.tsx`):**
   - Rendered in `app/layout.tsx` on every page (especially mobile).
   - Links to `https://wa.me/2348034750270?text=Hello%20Barryham,%20I%20need%20a%20quote%20for...`
   - Fires `whatsapp_click` conversion event on click.
   - Coordinated with `components/FloatingCart.tsx` so floating buttons stack cleanly without overlapping.
3. **Inline Section WhatsApp CTAs & Trust Badges (`components/SectionWhatsAppCTA.tsx`, `components/TrustBadges.tsx`):**
   - Added after every product section, service section, and blog article.
   - Displays the 4 trust badges near CTAs: *"Genuine brands"*, *"Lagos delivery"*, *"Installation support"*, *"Trade supply available"*.
4. **Header, Footer & Contact Page NAP Upgrade (`components/Nav.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`):**
   - `Nav.tsx`: Top info bar showing phone numbers, WhatsApp, email, showrooms (Dopemu & Alimosho), and opening hours (`Mon–Sat: 8am–6pm`), plus a **Request a Quote** CTA button and WhatsApp action.
   - `Footer.tsx`: Complete, non-duplicated NAP with both full showroom addresses, all 3 clickable `tel:` numbers, WhatsApp number, email, opening hours, and links to all new SEO landing pages.
   - `app/contact/page.tsx`: Displays complete NAP + opening hours, Google Maps embeds + Google Business Profile directions links, and routes contact form submissions directly through WhatsApp with on-screen confirmation.
5. **Request a Quote Page (`app/request-quote/page.tsx`):**
   - Fields (strictly limited to directive):
     - Full name (required)
     - Phone/WhatsApp number (required)
     - Project type: `Home`, `Estate`, `Hotel`, `School`, `Office`, `Contractor/Bulk` (required)
     - Products needed (required — pre-filled if user has items in their quote cart)
     - Location (required)
     - Budget range (optional)
     - Message / specification upload (optional file attachment name/reference + notes)
   - Submission flow:
     - Fires `quote_submitted` conversion event via Vercel Analytics.
     - Displays immediate confirmation auto-reply: *"Thank you. Our team will contact you shortly."*
     - Opens WhatsApp (`https://wa.me/2348034750270?text=...`) with the formatted quote details ready to send to the Barryham team (with a manual re-open button in the confirmation screen in case popups are blocked).

---

### Phase 2: Local SEO, Metadata & Schema Architecture (Directive 2)

1. **Per-Page Metadata & Server Component Refactor:**
   - Refactor client-rendered pages (`app/page.tsx`, `app/contact/page.tsx`, `app/products/page.tsx`, `app/services/page.tsx`, `app/about/page.tsx`) into Server Component `page.tsx` files exporting unique `Metadata` (`title`, `description`, `alternates.canonical`, `openGraph`) that render interactive client sub-components.
   - Exact titles implemented:
     - Home (`/`): `Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd`
     - Contact (`/contact`): `Contact Barryham Int’l Ltd | Sanitary Ware & Electrical Fittings Lagos`
     - Every other page receives a unique, keyword-targeted `<title>` and `description`.
2. **Structured JSON-LD Schema (`lib/schema.ts`):**
   - `LocalBusiness` schema on Home (`/`) and Contact (`/contact`) matching the exact directive format (`@context`, `@type`, `name: "Barryham International Limited"`, `url: "https://barryham.site/"`, `telephone`, `address`, `openingHours`, `sameAs`).
   - `Product` schema on `/products/[id]` and product listings.
   - `FAQPage` schema on `/faq` and all 11 landing pages.
   - `BreadcrumbList` schema on all inner pages.
   - `Article` schema on `/blog/[slug]`.
3. **Technical SEO & 404 Page:**
   - Custom `app/not-found.tsx` with links to main categories (`/sanitary-ware-lagos`, `/plumbing-fittings-lagos`, `/electrical-fittings-lagos`, `/water-heaters-nigeria`, `/products`, `/request-quote`) and WhatsApp CTA.
   - Updated `app/sitemap.ts` generating `/sitemap.xml` with all static pages, 11 new landing pages, `/request-quote`, all product detail URLs, and all blog URLs.
   - `app/robots.ts` pointing to `https://barryham.site/sitemap.xml`.
   - Heading audit ensuring exactly one `H1` per page and logical `H2`/`H3` hierarchy.

---

### Phase 3: Product Catalogue & Detail Pages (Directive 4)

1. **Enhanced Product Schema (`data/products.ts`):**
   - Categories expanded to support: `"sanitary"`, `"plumbing"`, `"cables-lighting"`, `"water-heaters"`.
   - Helper enricher providing every product with:
     - `id`, `name`, `category`, `brand`
     - `price` (numeric NGN) and `priceMode?: "fixed" | "request"`
     - `availability`: `"In Stock" | "Low Stock" | "Available on Order"`
     - `description`: concise commercial/residential summary
     - `specifications`: `Record<string, string>` (SKU, Brand, Category, Application, Warranty, Standards)
     - `useCases`: `("Home" | "Estate" | "Hotel" | "School" | "Office" | "Contractor/Bulk")[]`
     - `image` and `images?: string[]`
   - Add **Ariston Water Heaters** (Andris R 10L/15L/30L, Pro1 R 50L/80L/100L, Aures Instant Water Heater, Industrial/Hotel 200L Floor-Standing) so `/water-heaters-nigeria` and the main catalogue have dedicated water heater SKUs.
2. **Catalogue Filtering (`app/products/page.tsx`):**
   - Public, zero-login browsing.
   - 5 Filters:
     - **Category** (All, Sanitary Ware, Plumbing Fittings, Electrical & Cables, Water Heaters)
     - **Brand** (All brands dynamically derived)
     - **Price Range** (All, Under ₦100k, ₦100k–₦300k, ₦300k–₦600k, Above ₦600k, Request Price)
     - **Availability** (All, In Stock, Available on Order)
     - **Use Case** (All, Home, Estate, Hotel, School, Office, Contractor/Bulk)
3. **Product Detail Page (`app/products/[id]/page.tsx`):**
   - `Product` + `BreadcrumbList` JSON-LD schema.
   - Multi-photo gallery viewer.
   - Structured Specifications table.
   - Delivery & installation information block (Lagos 24–48hr dispatch, nationwide delivery, certified installation support).
   - Trust badges + prominent **“Chat on WhatsApp to order”** button firing `product_enquiry` and `whatsapp_click`.

---

### Phase 4: 11 Dedicated Local-SEO Landing Pages & Credibility Features (Directives 3 & 5)

1. **Dedicated Landing Pages (`data/landing-pages.ts` + `components/LandingPageTemplate.tsx`):**
   - `/sanitary-ware-lagos` (H1: *Sanitary Ware Supplier in Lagos*)
   - `/plumbing-fittings-lagos` (H1: *Plumbing Fittings Supplier in Lagos*)
   - `/electrical-fittings-lagos` (H1: *Electrical Cables & Fittings Supplier in Lagos*)
   - `/bathroom-fittings-nigeria` (H1: *Premium Bathroom Fittings Supplier in Nigeria*)
   - `/water-heaters-nigeria` (H1: *Ariston & Commercial Water Heaters in Nigeria*)
   - `/bulk-supply-contractors` (H1: *Bulk Building Materials & Trade Supply for Contractors in Nigeria*)
   - `/delivery-installation` (H1: *Sanitary, Plumbing & Electrical Delivery and Installation in Lagos & Nigeria*)
   - `/dopemu-showroom` (H1: *Barryham Dopemu-Agege Sanitary Ware & Building Materials Showroom*)
   - `/alimosho-showroom` (H1: *Barryham Alimosho (LASU-Isheri Road) Showroom & Trade Counter*)
   - Each page includes:
     - Single clear `H1` + short intro explaining who it is for
     - Product categories breakdown + live matching products from `data/products.ts`
     - Authorised brands supplied
     - Delivery & installation information
     - Trust badges + section WhatsApp CTA + link to `/request-quote`
     - Why Barryham section
     - FAQ section with `FAQPage` + `BreadcrumbList` JSON-LD
     - Internal links to related products, sibling landing pages, and relevant blog guides
2. **Credibility Pages & Sections (Directive 5):**
   - `/projects` (`app/projects/page.tsx`):
     - Featured project case studies with **Project title, Location, Client type, Products supplied, 3–6 project gallery photos, and Short result statement**.
     - Full filterable directory of all 30 real completed BIL projects from `data/projects.ts` across Government, Hospital, Residential, and Corporate sectors.
     - WhatsApp CTA after project sections.
   - `/brands` (`app/brands/page.tsx`):
     - Dedicated authorised/direct distributor showcase with all 15 partner brand logos, brand origin/specialties, product categories supplied, anti-counterfeit guarantee, and direct links to browse each brand in `/products`.
   - **Why Barryham Component (`components/WhyBarryham.tsx`):**
     - Highlights the 6 pillars: Genuine products, Lagos showroom access, Delivery, Installation support, Trade/bulk pricing, Project supply experience.
   - **Reviews Section (`components/ReviewsSection.tsx`):**
     - Displays verified project & Google-style client reviews with 5-star ratings, reviewer role/project, and direct CTA to review/view Barryham on Google Maps.

---

### Phase 5: Conversion-Focused Blog & Vercel Analytics Tracking (Directives 6 & 7)

1. **Content System (`data/blog.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`):**
   - Centralize articles in `data/blog.ts` so adding or editing an article only requires adding a simple entry in `data/blog.ts`.
   - Each article includes: `slug`, `title`, `description`, `category`, `author`, `publishedDate`, `updatedDate`, `readTime`, `relatedCategory`, `relatedLandingPage`, `relatedProductIds`, and conversion-focused content.
   - Supporting internal links baked into articles:
     - `cable-selection-guide` → `/electrical-fittings-lagos`
     - `plumbing-installation-checklist` → `/plumbing-fittings-lagos`
     - `best-bathroom-fittings-lagos` → `/bathroom-fittings-nigeria` & `/sanitary-ware-lagos`
     - `roca-vs-local-brands` → `/brands` & `/sanitary-ware-lagos`
     - `sanitary-ware-maintenance` → `/delivery-installation` & `/water-heaters-nigeria`
   - Every article ends with:
     1. **Related Products** grid (live product cards)
     2. **Related Service / Landing Page** card
     3. **WhatsApp CTA** + Trust Badges
2. **Vercel Analytics & Conversion Tracking (`lib/analytics.ts`, `components/AnalyticsProvider.tsx`):**
   - Integrates Vercel Web Analytics (`@vercel/analytics/react`) in `app/layout.tsx`.
   - Global click delegate + `trackConversion()` helper firing custom conversion events to Vercel Analytics (`track()`):
     - `whatsapp_click` (tracks clicks on any `wa.me` link across the site with page & context metadata)
     - `quote_submitted` (fired on `/request-quote` and `/contact` form submissions)
     - `call_click` (tracks clicks on any `tel:` link across the site)
     - `product_enquiry` (fired when adding a product to quote or clicking WhatsApp enquiry on a product)
