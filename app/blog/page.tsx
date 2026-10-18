import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogArticles } from "@/data/blog";
import { getBreadcrumbSchema } from "@/lib/schema";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";

export const metadata: Metadata = {
  title: "Building Materials Blog & Technical Guides | Barryham Int'l Ltd",
  description:
    "Expert guides on choosing sanitary wares, plumbing fittings, water heaters, and electrical cables for Nigerian homes and commercial projects. Tips from Barryham Int'l Ltd.",
  alternates: {
    canonical: "https://barryham.site/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Sanitary Wares": "bg-blue-50 text-blue-700",
  "Buying Guide": "bg-amber-50 text-amber-700",
  Plumbing: "bg-teal-50 text-teal-700",
  "Cables & Electrical": "bg-yellow-50 text-yellow-800",
};

export default function BlogPage() {
  const featured = blogArticles.filter((a) => a.featured);
  const rest = blogArticles.filter((a) => !a.featured);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources & Guides", url: "/blog" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-ui text-xs uppercase tracking-widest text-gold font-bold mb-3 block">
            Expert Knowledge Base
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Building Materials Guides & Resources
          </h1>
          <p className="font-ui text-lg text-offwhite/90">
            Practical, Nigeria-tested advice on sourcing, specifying, installing, and maintaining genuine sanitary ware, plumbing, and electrical fittings.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="pt-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <h2 className="font-heading font-semibold text-2xl text-navy mb-8">
          Featured Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="h-3 bg-gradient-to-r from-navy to-gold" />
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`font-ui text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        CATEGORY_COLORS[article.category] ??
                        "bg-navy/10 text-navy"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="font-ui text-xs text-charcoal/50 flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-ui text-charcoal/70 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-navy/5 flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal/60 font-ui">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 font-medium text-navy">
                    <User size={12} className="text-gold" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    Published {article.publishedDate} · Updated {article.updatedDate}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-gold font-semibold group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All Articles */}
        <h2 className="font-heading font-semibold text-2xl text-navy mb-8">
          All Technical Guides
        </h2>
        <div className="space-y-4">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 md:p-8 border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`font-ui text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      CATEGORY_COLORS[article.category] ?? "bg-navy/10 text-navy"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="font-ui text-xs text-charcoal/60 flex items-center gap-1">
                    <User size={12} className="text-gold" />
                    {article.author}
                  </span>
                  <span className="font-ui text-xs text-charcoal/50 flex items-center gap-1">
                    <Calendar size={12} />
                    Published {article.publishedDate} (Updated {article.updatedDate})
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg md:text-xl text-navy mb-2 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="font-ui text-charcoal/70 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between shrink-0 gap-4">
                <span className="font-ui text-xs text-charcoal/50 flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1 text-gold font-ui text-sm font-semibold group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Conversion CTA */}
        <div className="mt-16">
          <SectionWhatsAppCTA
            title="Need technical advice or a project quote?"
            subtitle="Send your BOQ, plumbing schedule, or electrical load list to our team on WhatsApp for fast product recommendations and current Naira pricing."
            whatsappMessage="Hello Barryham, I read your technical guides and need product advice / a quote for my project."
            contextLabel="blog_index_cta"
          />
        </div>
      </section>
    </main>
  );
}
