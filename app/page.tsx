import React from "react";
import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";
import { getLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd",
  description:
    "Direct distributor & installer of genuine Grohe, Ideal Standard, Villeroy & Boch, Roca, Armitage Shanks, Ariston Water Heaters & Coleman CTIL cables in Lagos & Nigeria. Visit our Dopemu & Alimosho showrooms.",
  alternates: {
    canonical: "https://barryham.site/",
  },
  openGraph: {
    title:
      "Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd",
    description:
      "Shop genuine European sanitary ware, plumbing fittings, Ariston water heaters, and Coleman electrical cables in Lagos. Retail, trade & bulk contractor supply.",
    url: "https://barryham.site/",
  },
};

export default function HomePage() {
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
