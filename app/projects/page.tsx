import React from "react";
import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Completed Projects Portfolio | 30+ Sanitary, Plumbing & Electrical Projects | Barryham Int’l Ltd",
  description:
    "Explore 30+ completed government, hospital, luxury residential, and corporate projects supplied and installed by Barryham International Limited across Lagos, Abuja & Port Harcourt.",
  alternates: {
    canonical: "https://barryham.site/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects Portfolio", url: "/projects" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            Proven Track Record • Government, Healthcare, Residential &amp; Corporate
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Completed Projects Across Nigeria
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto">
            From university senate buildings and maternal hospitals to luxury residential high-rises in Ikeja GRA and Lagos Island—see how Barryham International Limited delivers certified sanitary, plumbing, and electrical packages.
          </p>
        </div>
      </section>

      <ProjectsClient />
    </main>
  );
}
