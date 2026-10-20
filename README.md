<div align="center">

# Barryham International Limited (BIL) Website

**Premium sanitary ware, plumbing and electrical fittings in Lagos, Nigeria.**

The company website and product catalogue for Barryham International Limited, a direct distributor and certified installer of Ideal Standard, Armitage Shanks, Geberit, Grohe, Villeroy & Boch, Roca, Ariston and Coleman CTIL.

[**Live Site**](https://barryham-intl.vercel.app) · [**Catalogue**](https://barryham-intl.vercel.app/products) · [**Request a Quote**](https://barryham-intl.vercel.app/request-quote) · [**Brands**](https://barryham-intl.vercel.app/brands) · [**Projects**](https://barryham-intl.vercel.app/projects)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

</div>

---

## Overview

Barryham International Limited has supplied and installed genuine European sanitary, plumbing and electrical products in Nigeria since 2018, with 30+ completed projects across Lagos, Rivers, Delta and Abuja. Clients include institutional and commercial names such as the Central Bank of Nigeria, Polaris Bank and the LASU New Senate Building.

This site exists to do three jobs:

1. **Turn search traffic into quote requests.** Contractors, architects and homeowners search for specific products and categories in Lagos. Each category has its own landing page built to rank for that intent.
2. **Show the catalogue.** A browsable, in-stock product catalogue with brand-level organisation.
3. **Build trust.** Authorised brand partners, a project portfolio, testimonials, and two physical showrooms people can visit.

Every important page funnels to one of two actions: **Request a Quote** or **Chat on WhatsApp**, which matches how buyers in this market actually transact.

## Features

- **Product catalogue** with individual product pages (`/products/[id]`) showing brand, model code and price
- **Category landing pages** targeting local search intent: sanitary ware, bathroom fittings, plumbing fittings, electrical cables and fittings, and Ariston water heaters
- **Authorised brands directory** covering Ideal Standard, Armitage Shanks, Geberit, Grohe, Kohler, Reigner, Roca, Vado, hansgrohe, Ariston, Coleman CTIL, Villeroy & Boch, Varmora, Twyford and SANIT
- **Trade and contractor pages**: bulk supply, BOQ fulfilment, phased deliveries
- **Delivery and installation** service pages
- **Two showroom pages**: Dopemu-Agege and Alimosho (LASU-Isheri Road), with addresses and opening hours
- **Project portfolio**, **client testimonials**, **buying guides/blog** and **FAQ**
- **Quote request flow** plus a pre-filled WhatsApp deep link on every key page
- **SEO foundations**: per-page metadata, Open Graph and Twitter cards, canonical URL, and keyword-targeted page structure
- **Motion and polish** with Framer Motion, kept subtle so the catalogue stays fast

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React 18, Tailwind CSS 3.4 |
| Language | TypeScript 5 |
| Motion | Framer Motion 12 |
| Icons | lucide-react |
| Class utilities | clsx, tailwind-merge |
| Image processing | sharp |
| Linting | ESLint 8 with `eslint-config-next` |
| Hosting | Vercel |

## Getting started

**Requirements:** Node.js 18.17+ (required by Next.js 14) and npm.

```bash
# clone (default branch is master)
git clone https://github.com/Alqaasimee-jr2/BARRYHAM-INTL.git
cd BARRYHAM-INTL

# install
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run `next lint` |

## Project structure

```
BARRYHAM-INTL/
├── app/              # Routes and pages (Next.js App Router)
├── components/       # Reusable UI components
├── context/          # React context providers
├── data/             # Catalogue and site content data
├── lib/              # Helpers and shared utilities
├── public/           # Static assets: product imagery, brand logos, OG image
├── LOGO FILES/       # Source brand assets for Barryham
├── docs/             # Internal working notes
├── convert.mjs       # Data and asset prep scripts
├── parse.mjs         #   (run with node, outside the Next.js build)
├── update_images.mjs #
├── create_og.js      # Open Graph image generation
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── CHANGELOG.md      # Release history
```

### Key routes

| Route | Purpose |
|---|---|
| `/` | Home: brands, categories, in-stock products, testimonials |
| `/products`, `/products/[id]` | Catalogue and product detail |
| `/sanitary-ware-lagos` | Sanitary ware category page |
| `/bathroom-fittings-nigeria` | Bathroom fit-out category page |
| `/plumbing-fittings-lagos` | Plumbing category page |
| `/electrical-fittings-lagos` | Electrical cables and fittings |
| `/water-heaters-nigeria` | Ariston water heaters |
| `/brands` | Authorised brand partners |
| `/services`, `/bulk-supply-contractors`, `/delivery-installation` | Services and trade supply |
| `/dopemu-showroom`, `/alimosho-showroom` | Showroom locations and hours |
| `/projects`, `/blog`, `/about`, `/faq`, `/contact` | Credibility and support content |
| `/request-quote` | Quote request form |

## Contact and locations

**Barryham International Limited**

- **Dopemu-Agege showroom:** Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu-Agege, Lagos
- **Alimosho / Igando showroom and office:** Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, along LASU-Isheri/Igando Road, Alimosho, Lagos
- **Hours:** Monday to Saturday, 8:00 AM to 6:00 PM
- **WhatsApp / phone:** +234 803 475 0270
- **Sales email:** bihl.sales@gmail.com
- **Instagram:** [@barryhamintl](https://www.instagram.com/barryhamintl/)

## Deployment

The site is deployed on Vercel at [barryham-intl.vercel.app](https://barryham-intl.vercel.app), with `https://barryham.site` set as the canonical domain in page metadata. Pushes to `master` deploy through Vercel's Git integration. For a self-hosted setup, run `npm run build` then `npm run start` on any Node host.

## Contributing

This is a client project, so changes are scoped and reviewed before they ship. Bug reports and small fixes are welcome. Open an issue first for anything larger. Pull requests should pass `npm run lint` and `npm run build` before review.

## Author

Built and maintained by **Abdullah Qaasim-Falade**, [NIT7ER Studio](https://nit7er.vercel.app), Lagos, Nigeria.

[GitHub](https://github.com/Alqaasimee-jr2) · [LinkedIn](https://www.linkedin.com/in/abdullahqaasimf001)

## License

© 2026 Barryham International Limited. All rights reserved. Brand names, logos and product imagery belong to their respective manufacturers and are used to identify authorised products.
