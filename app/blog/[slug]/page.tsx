import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from "lucide-react";

const articles: Record<string, {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}> = {
  "best-bathroom-fittings-lagos": {
    title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
    description: "From hard water resistance to humidity tolerance, here's what to look for when selecting sanitary ware and bathroom fittings for Nigerian climates and local plumbing standards.",
    category: "Sanitary Wares",
    date: "July 2025",
    readTime: "5 min read",
    content: (
      <article className="prose-content">
        <p>Choosing bathroom fittings is one of the most consequential decisions in a Lagos home build or renovation. The wrong choice leads to constant maintenance, premature failure, and unsatisfied occupants. The right choice adds decades of reliable performance and elevates the perceived value of your property.</p>

        <h2>1. Prioritise Hard Water Resistance</h2>
        <p>Lagos municipal water and borehole water tend to have high mineral content. Over time, calcium and magnesium deposits build up on fixtures, leaving unsightly white stains and eventually degrading performance. When choosing taps, showerheads, and flushing mechanisms, look for:</p>
        <ul>
          <li><strong>Ceramic disc cartridges</strong> — more resistant to mineral buildup than rubber washers</li>
          <li><strong>Silicone spray nozzles</strong> (on showerheads) — allow easy cleaning by rubbing with a finger</li>
          <li><strong>Chrome finishes with hard chrome plating</strong> — not decorative chrome, which chips easily</li>
        </ul>
        <p>Brands like Roca, Grohe, and Hansgrohe are engineered to these standards by default.</p>

        <h2>2. Humidity Tolerance for WCs and Vanity Units</h2>
        <p>Lagos&apos; coastal humidity (averaging 80–90%) accelerates rust and delamination in low-grade materials. For WC cisterns and wall-hung units, opt for vitreous china or ceramic — not plastic — cisterns. For vanity cabinets, PVC-wrapped MDF outperforms raw MDF in humid environments significantly.</p>

        <h2>3. Check Water Pressure Compatibility</h2>
        <p>Many Lagos estates have variable or low water pressure. Thermostatic shower valves and certain mixer taps require a minimum pressure of 1 bar to function correctly. Always verify the minimum pressure rating of any tap or shower before purchase. Your plumber can test your supply pressure before you commit to a specification.</p>

        <h2>4. Certifications That Matter in Nigeria</h2>
        <ul>
          <li><strong>ISO 9001</strong> — quality management systems</li>
          <li><strong>WRAS (Water Regulations Advisory Scheme)</strong> — UK water system certification, widely respected</li>
          <li><strong>CE Marking</strong> — European conformity standard</li>
        </ul>
        <p>Barryham Int&apos;l Ltd only stocks products from manufacturers holding relevant international certifications.</p>

        <h2>5. Plan for Maintenance Access</h2>
        <p>The most overlooked factor. Ensure that any concealed cistern, shower valve, or in-wall plumbing has an access panel. When (not if) maintenance is needed, inaccessible components cost significantly more to service and often require breaking tiles.</p>

        <div className="cta-block">
          <p>Ready to specify your fittings? Browse our full catalog or reach out to our team for a project-specific recommendation.</p>
          <Link href="/products?category=sanitary">Browse Sanitary Wares →</Link>
        </div>
      </article>
    )
  },
  "roca-vs-local-brands": {
    title: "European Brands vs Local Alternatives: Is the Premium Worth It?",
    description: "We compare Roca, Grohe, and Hansgrohe against popular local alternatives on durability, warranty, aesthetics, and long-term cost.",
    category: "Buying Guide",
    date: "June 2025",
    readTime: "7 min read",
    content: (
      <article className="prose-content">
        <p>This is one of the most common questions we receive at Barryham Int&apos;l Ltd. The honest answer depends on your project type, occupant expectations, and — critically — your long-term cost horizon.</p>

        <h2>Upfront Cost vs. Total Cost of Ownership</h2>
        <p>A locally-branded WC pan might cost ₦18,000 versus ₦65,000 for a Roca equivalent. But the Roca unit carries a 10-year guarantee against manufacturing defects and its vitreous china is fired to a higher temperature, making it significantly harder and less porous. Over a 10-year period in a high-traffic commercial bathroom, the replacement and labour cost difference usually eliminates the initial savings from the local product.</p>

        <h2>Where Local Alternatives Perform Well</h2>
        <ul>
          <li>Low-traffic settings (guest bathrooms, staff toilets in low-footfall offices)</li>
          <li>Rental properties where replacement cost is factored into yield calculations</li>
          <li>Projects with genuine budget constraints where value engineering is required</li>
        </ul>

        <h2>Where European Brands Justify Every Naira</h2>
        <ul>
          <li>Luxury residential developments — buyers and renters expect it</li>
          <li>Hotels and hospitality — brand standards often mandate it</li>
          <li>Government and institutional buildings — long maintenance cycles mean quality matters</li>
          <li>Any application involving constant use (public restrooms, hospital wards)</li>
        </ul>

        <h2>Our Recommendation</h2>
        <p>Specify European brands for wet areas (WCs, basins, shower valves, taps) — the precision engineering of water-control components matters most here. You can often compromise on accessories (towel rails, toilet roll holders, soap dispensers) with quality local alternatives without compromising the user experience significantly.</p>

        <div className="cta-block">
          <p>Talk to us about specifying the right mix for your project budget.</p>
          <Link href="/contact">Get in Touch →</Link>
        </div>
      </article>
    )
  },
  "plumbing-installation-checklist": {
    title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
    description: "A room-by-room checklist for developers, contractors, and homeowners for plumbing specification, installation, and testing before handover.",
    category: "Plumbing",
    date: "May 2025",
    readTime: "6 min read",
    content: (
      <article className="prose-content">
        <p>Plumbing errors discovered after a building is tiled are among the most expensive remediation jobs in construction. This checklist is designed to prevent those issues by ensuring every critical decision and quality checkpoint is addressed at the right stage of the build.</p>

        <h2>Pre-Installation: Design & Specification Phase</h2>
        <ul>
          <li>Hot and cold water supply routes confirmed with architect and MEP engineer</li>
          <li>Water pressure at mains or storage tank verified (target: 1.5–3 bar)</li>
          <li>All sanitaryware sizes and rough-in dimensions confirmed with plumber before wall/floor work begins</li>
          <li>Drainage fall calculated and confirmed (minimum 1:40 for horizontal runs)</li>
          <li>Pipe material selected (PPR, UPVC, HDPE) per application type</li>
        </ul>

        <h2>First Fix: Rough-In Stage</h2>
        <ul>
          <li>All supply pipes pressure-tested to 1.5× working pressure before concealment</li>
          <li>WC rough-in positions confirmed against actual pan dimensions</li>
          <li>Shower tray or wet room former installed before wall tile substrate</li>
          <li>Hot water cylinder or boiler position confirmed with space for maintenance access</li>
        </ul>

        <h2>Second Fix: After Tiling</h2>
        <ul>
          <li>All trim and chrome faces fitted after tiling is complete (never before)</li>
          <li>Concealed cistern access panels located and marked in tile layout</li>
          <li>Final water test with all fixtures open before client handover</li>
          <li>All isolation valves confirmed operational</li>
        </ul>

        <div className="cta-block">
          <p>Need plumbing materials for your project? Browse our full plumbing range.</p>
          <Link href="/products?category=plumbing">Shop Plumbing →</Link>
        </div>
      </article>
    )
  },
  "cable-selection-guide": {
    title: "Choosing the Right Electrical Cables for Commercial Projects in Nigeria",
    description: "Understanding cable ratings, load capacity, and safety compliance for high-traffic commercial and institutional environments.",
    category: "Cables & Electrical",
    date: "April 2025",
    readTime: "8 min read",
    content: (
      <article className="prose-content">
        <p>Electrical cable selection is a life-safety issue. Underspecified cables cause overheating, insulation failure, and fires. In Nigerian commercial buildings — where load shedding and generator switching creates additional stress on electrical systems — getting this right is non-negotiable.</p>

        <h2>Understanding Cable Ratings</h2>
        <p>Every cable has two critical ratings: current-carrying capacity (ampacity) and voltage rating. For standard Nigerian commercial installations connected to 415V three-phase supply, you need cables rated to at least 600/1000V. Never use 300/500V domestic cable in commercial applications.</p>

        <h2>Conductor Material: Copper vs Aluminium</h2>
        <p>Copper is preferred for virtually all fixed installations in Nigeria due to its lower resistivity, better corrosion resistance in humid environments, and ease of termination. Aluminium is sometimes used for main feeder cables from transformer to distribution board due to its lower cost at larger cross-sections, but requires specialist termination methods.</p>

        <h2>Key Cable Types for Commercial Builds</h2>
        <ul>
          <li><strong>NYY / NYYFy</strong> — PVC insulated and sheathed, suitable for most indoor and buried applications</li>
          <li><strong>SWA (Steel Wire Armoured)</strong> — for underground and exposed external runs</li>
          <li><strong>XLPE insulated</strong> — better heat resistance for high-current feeder cables</li>
          <li><strong>Fire-resistant cable (FP200/MICC)</strong> — mandatory for fire alarm, emergency lighting, and emergency power circuits</li>
        </ul>

        <h2>Generator Integration Considerations</h2>
        <p>Buildings in Nigeria typically run generators for 8–16 hours daily. Cables between the changeover switch (ATS) and distribution boards must be sized for full generator load, not just PHCN load. This is commonly under-specified and causes premature cable degradation.</p>

        <div className="cta-block">
          <p>Browse our range of SON-certified electrical cables and accessories.</p>
          <Link href="/products?category=cables-lighting">Shop Cables →</Link>
        </div>
      </article>
    )
  },
  "sanitary-ware-maintenance": {
    title: "How to Maintain Your Sanitary Fittings: A Practical Guide",
    description: "Extend the lifespan of your premium sanitary ware with these practical maintenance and cleaning tips for Nigerian climates.",
    category: "Sanitary Wares",
    date: "March 2025",
    readTime: "4 min read",
    content: (
      <article className="prose-content">
        <p>Premium sanitary fittings are an investment. Proper maintenance can easily double their service life and keep them looking showroom-fresh for years. Here are the most impactful habits to build into your facility management routine.</p>

        <h2>Daily: Wipe, Don&apos;t Scrub</h2>
        <p>Chrome and polished finishes scratch microscopically under abrasive cleaning. Use soft cloths or microfibre towels daily to remove water droplets and soap film. This simple habit prevents 90% of hard water staining from becoming permanent.</p>

        <h2>Weekly: Descaling</h2>
        <p>In Lagos, a weekly descale is essential. Use diluted white vinegar (1:1 with water) or a proprietary descaler specifically labelled safe for chrome and ceramic. Never use bleach directly on chrome — it strips the plating over time. Soak aerator meshes in vinegar overnight when flow reduces.</p>

        <h2>Monthly: Mechanical Check</h2>
        <ul>
          <li>Check all isolation valves — exercise them (open/close fully) to prevent them seizing</li>
          <li>Inspect silicone seals around basins and baths for cracking or black mould</li>
          <li>Test WC flush mechanism — early replacement of a ₦2,000 valve avoids a flooded bathroom</li>
          <li>Check showerhead for uneven spray pattern indicating blocked nozzles</li>
        </ul>

        <h2>Annually: Professional Service</h2>
        <p>Have a qualified plumber check concealed shower valves, service any thermostatic cartridges, and inspect pipework connections behind access panels. The cost of a service call is a fraction of the cost of water damage or full fixture replacement.</p>

        <div className="cta-block">
          <p>Need replacement parts or a full fitting upgrade? Contact our team.</p>
          <Link href="/contact">Contact Us →</Link>
        </div>
      </article>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Barryham Int'l Ltd`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://barryham.site/blog/${params.slug}`,
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "author": { "@type": "Organization", "name": "Barryham Int'l Ltd" },
    "publisher": {
      "@type": "Organization",
      "name": "Barryham Int'l Ltd",
      "url": "https://barryham.site"
    }
  };

  const CATEGORY_COLORS: Record<string, string> = {
    "Sanitary Wares": "bg-blue-50 text-blue-700",
    "Buying Guide": "bg-amber-50 text-amber-700",
    "Plumbing": "bg-teal-50 text-teal-700",
    "Cables & Electrical": "bg-yellow-50 text-yellow-800",
  };

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="max-w-3xl mx-auto w-full px-6 lg:px-0 pt-12">
        <Link href="/blog" className="inline-flex items-center gap-2 font-ui text-sm text-charcoal/60 hover:text-gold transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Resources
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className={`font-ui text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[article.category] ?? "bg-navy/10 text-navy"}`}>
              {article.category}
            </span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-charcoal/50 font-ui">
            <span className="flex items-center gap-2"><Calendar size={14} />{article.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} />{article.readTime}</span>
          </div>
        </header>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-navy/5
          [&_.prose-content_p]:font-ui [&_.prose-content_p]:text-charcoal/80 [&_.prose-content_p]:leading-relaxed [&_.prose-content_p]:mb-6
          [&_.prose-content_h2]:font-heading [&_.prose-content_h2]:font-bold [&_.prose-content_h2]:text-2xl [&_.prose-content_h2]:text-navy [&_.prose-content_h2]:mt-10 [&_.prose-content_h2]:mb-4
          [&_.prose-content_ul]:list-disc [&_.prose-content_ul]:pl-6 [&_.prose-content_ul]:mb-6 [&_.prose-content_ul]:space-y-2
          [&_.prose-content_li]:font-ui [&_.prose-content_li]:text-charcoal/80 [&_.prose-content_li]:leading-relaxed
          [&_.prose-content_strong]:font-semibold [&_.prose-content_strong]:text-navy
          [&_.cta-block]:bg-navy/5 [&_.cta-block]:border [&_.cta-block]:border-navy/10 [&_.cta-block]:rounded-2xl [&_.cta-block]:p-8 [&_.cta-block]:mt-12
          [&_.cta-block_p]:text-charcoal/80 [&_.cta-block_p]:mb-4
          [&_.cta-block_a]:inline-flex [&_.cta-block_a]:items-center [&_.cta-block_a]:gap-2 [&_.cta-block_a]:text-gold [&_.cta-block_a]:font-ui [&_.cta-block_a]:font-semibold [&_.cta-block_a]:hover:underline
        ">
          {article.content}
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 bg-navy text-white rounded-3xl p-8">
          <h2 className="font-heading font-bold text-xl mb-6">Why Choose Barryham Int&apos;l Ltd?</h2>
          <ul className="space-y-3">
            {[
              "Direct manufacturer representatives — no middlemen, better pricing",
              "7+ years supplying government, commercial & residential projects in Nigeria",
              "Nationwide delivery and professional installation teams",
              "Genuine, certified products with manufacturer warranties"
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3 font-ui text-sm text-offwhite/90">
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
