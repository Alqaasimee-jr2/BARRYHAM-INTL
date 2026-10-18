import React from "react";
import type { Metadata } from "next";
import { LANDING_PAGES } from "@/data/landing-pages";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";

const config = LANDING_PAGES["bathroom-fittings-nigeria"];

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: {
    canonical: `https://barryham.site/${config.slug}`,
  },
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: `https://barryham.site/${config.slug}`,
  },
};

export default function BathroomFittingsNigeriaPage() {
  return <LandingPageTemplate config={config} />;
}
