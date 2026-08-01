import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Materials Blog & Guides | Barryham Int'l Ltd",
  description: "Expert guides on choosing sanitary wares, plumbing fittings, and electrical materials for Nigerian homes and commercial projects. Tips from Barryham Int'l Ltd.",
};

const articles = [
  {
    slug: "best-bathroom-fittings-lagos",
    title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
    excerpt: "From hard water resistance to humidity tolerance, here's what to look for when selecting sanitary ware and bathroom fittings for Nigerian climates and local plumbing standards.",
    category: "Sanitary Wares",
    readTime: "5 min read",
    date: "July 2025",
    author: "BIL Editorial",
    featured: true,
  },
  {
    slug: "roca-vs-local-brands",
    title: "European Brands vs Local Alternatives: Is the Premium Worth It?",
    excerpt: "We compare Roca, Grohe, and Hansgrohe against popular local alternatives on durability, warranty, aesthetics, and long-term cost to help you make an informed decision.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "June 2025",
    author: "BIL Editorial",
    featured: true,
  },
  {
    slug: "plumbing-installation-checklist",
    title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
    excerpt: "A room-by-room checklist for developers, contractors, and homeowners to ensure plumbing is correctly specified, installed, and tested before handover.",
    category: "Plumbing",
    readTime: "6 min read",
    date: "May 2025",
    author: "BIL Editorial",
    featured: false,
  },
  {
    slug: "cable-selection-guide",
    title: "Choosing the Right Electrical Cables for Commercial Projects in Nigeria",
    excerpt: "Understanding cable ratings, load capacity, and safety compliance for high-traffic commercial and institutional environments. What PHCN-connected projects need to know.",
    category: "Cables & Electrical",
    readTime: "8 min read",
    date: "April 2025",
    author: "BIL Editorial",
    featured: false,
  },
  {
    slug: "sanitary-ware-maintenance",
    title: "How to Maintain Your Sanitary Fittings: A Practical Guide",
    excerpt: "Extend the lifespan of your premium sanitary ware with these practical maintenance and cleaning tips — especially important in high-humidity Lagos and Port Harcourt environments.",
    category: "Sanitary Wares",
    readTime: "4 min read",
    date: "March 2025",
    author: "BIL Editorial",
    featured: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Sanitary Wares": "bg-blue-50 text-blue-700",
  "Buying Guide": "bg-amber-50 text-amber-700",
  "Plumbing": "bg-teal-50 text-teal-700",
  "Cables & Electrical": "bg-yellow-50 text-yellow-800",
};

export default function BlogPage() {
  const featured = articles.filter(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Resources & Guides
          </h1>
          <p className="font-ui text-lg text-offwhite/90">
            Expert advice on sourcing, installing, and maintaining premium building materials for Nigerian projects.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="pt-16 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <h2 className="font-heading font-semibold text-2xl text-navy mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Colour band instead of image */}
              <div className="h-3 bg-gradient-to-r from-navy to-gold" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-ui text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[article.category] ?? "bg-navy/10 text-navy"}`}>
                    {article.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="font-ui text-charcoal/70 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-charcoal/50 font-ui">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar size={12} />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{article.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-gold font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Articles */}
        <h2 className="font-heading font-semibold text-2xl text-navy mb-8">All Articles</h2>
        <div className="space-y-4">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-ui text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[article.category] ?? "bg-navy/10 text-navy"}`}>
                    {article.category}
                  </span>
                  <span className="font-ui text-xs text-charcoal/40">{article.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="font-ui text-charcoal/70 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-between shrink-0 gap-4">
                <span className="font-ui text-xs text-charcoal/40 flex items-center gap-1">
                  <Clock size={12} />{article.readTime}
                </span>
                <span className="flex items-center gap-1 text-gold font-ui text-sm font-semibold group-hover:gap-2 transition-all">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
