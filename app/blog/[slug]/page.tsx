import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  User,
  RefreshCw,
} from "lucide-react";
import { blogArticles, getBlogArticleBySlug } from "@/data/blog";
import { products } from "@/data/products";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { ProductCard } from "@/components/ProductCard";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";

const articleBodies: Record<string, React.ReactNode> = {
  "best-bathroom-fittings-lagos": (
    <article className="prose-content">
      <p>
        Choosing bathroom fittings is one of the most consequential decisions in a{" "}
        <Link href="/sanitary-ware-lagos" className="text-gold font-semibold hover:underline">
          Lagos home build or commercial renovation
        </Link>
        . The wrong choice leads to constant maintenance, premature failure, and unsatisfied occupants. The right choice adds decades of reliable performance and elevates the perceived value of your property.
      </p>

      <h2>1. Prioritise Hard Water Resistance</h2>
      <p>
        Lagos municipal water and borehole water tend to have high mineral and iron content. Over time, calcium and magnesium deposits build up on fixtures, leaving unsightly stains and eventually degrading performance. When choosing{" "}
        <Link href="/bathroom-fittings-nigeria" className="text-gold font-semibold hover:underline">
          taps, showerheads, and flushing mechanisms
        </Link>
        , look for:
      </p>
      <ul>
        <li>
          <strong>Ceramic disc cartridges</strong> — far more resistant to mineral buildup than rubber washers
        </li>
        <li>
          <strong>Silicone spray nozzles</strong> (on showerheads) — allow easy descaling by rubbing with a finger
        </li>
        <li>
          <strong>Hard chrome plating</strong> — multi-layer electroplated chrome that resists pitting and peeling
        </li>
      </ul>
      <p>
        European brands like{" "}
        <Link href="/brands" className="text-gold font-semibold hover:underline">
          Roca, Ideal Standard, and Armitage Shanks
        </Link>{" "}
        are engineered to these standards by default.
      </p>

      <h2>2. Humidity Tolerance for WCs and Vanity Units</h2>
      <p>
        Lagos&apos; coastal humidity (averaging 80–90%) accelerates rust and delamination in low-grade materials. For WC cisterns and wall-hung units, opt for high-density vitreous china ceramic and genuine concealed frames. For vanity cabinets, moisture-resistant PVC-wrapped or treated finishes outperform raw MDF in humid environments significantly.
      </p>

      <h2>3. Check Water Pressure Compatibility & Water Heating</h2>
      <p>
        Many Lagos estates rely on overhead tank gravity feed or booster pumps with variable water pressure. Thermostatic shower valves and high-flow rain showers require adequate pressure (typically 1.0–3.0 bar) to function correctly. Pair your bathroom fittings with a pressure-tested{" "}
        <Link href="/water-heaters-nigeria" className="text-gold font-semibold hover:underline">
          Ariston water heater
        </Link>{" "}
        and genuine safety non-return valves.
      </p>

      <h2>4. Certifications That Matter in Nigeria</h2>
      <ul>
        <li>
          <strong>ISO 9001</strong> — quality management systems
        </li>
        <li>
          <strong>WRAS (Water Regulations Advisory Scheme)</strong> — UK water system certification
        </li>
        <li>
          <strong>CE & SONCAP Marking</strong> — European and Nigerian conformity standards
        </li>
      </ul>
      <p>
        Barryham Int&apos;l Ltd only stocks genuine products from manufacturers holding relevant international certifications.
      </p>

      <h2>5. Plan for Maintenance Access</h2>
      <p>
        The most overlooked factor: ensure that any concealed cistern, shower valve, or in-wall plumbing has a serviceable access panel or flush plate opening. When maintenance is needed, accessible components save you from breaking expensive bathroom tiles.
      </p>

      <div className="cta-block">
        <p>
          Ready to specify your bathroom fittings? Explore our dedicated{" "}
          <Link href="/sanitary-ware-lagos">Sanitary Ware in Lagos page</Link> or browse our{" "}
          <Link href="/bathroom-fittings-nigeria">Bathroom Fittings Nigeria guide</Link>.
        </p>
        <Link href="/sanitary-ware-lagos">Explore Sanitary Ware in Lagos →</Link>
      </div>
    </article>
  ),

  "roca-vs-local-brands": (
    <article className="prose-content">
      <p>
        This is one of the most common questions we receive at Barryham Int&apos;l Ltd. The honest answer depends on your project type, occupant expectations, and — critically — your long-term total cost of ownership.
      </p>

      <h2>Upfront Cost vs. Total Cost of Ownership</h2>
      <p>
        An unbranded WC pan might cost less upfront than a{" "}
        <Link href="/brands" className="text-gold font-semibold hover:underline">
          genuine Roca or Ideal Standard equivalent
        </Link>
        . However, genuine European vitreous china is fired at higher kiln temperatures, making the glaze denser, stain-resistant, and virtually non-porous. Over a 10-year period in a residential estate, hotel, or office complex, avoiding flush-valve failures, water leakage, and tile-breaking replacements easily outweighs the initial price difference.
      </p>

      <h2>Where Budget/Economy Lines Perform Well</h2>
      <ul>
        <li>Low-traffic auxiliary guest restrooms and service quarters</li>
        <li>Short-horizon rental upgrades with strict initial capex limits</li>
        <li>Projects where value engineering combines mid-tier ceramics with heavy-duty valves</li>
      </ul>

      <h2>Where European Brands Justify Every Naira</h2>
      <ul>
        <li>Luxury residential developments in Lekki, Victoria Island, Ikoyi, and Ikeja GRA</li>
        <li>Hotels, serviced apartments, and hospitality projects</li>
        <li>Hospitals, universities, and government complexes with high daily footfall</li>
        <li>Any concealed in-wall cistern or mixer installation where failure requires breaking tiles</li>
      </ul>

      <h2>Our Specification Recommendation</h2>
      <p>
        Always specify certified European or top-tier brands for{" "}
        <Link href="/sanitary-ware-lagos" className="text-gold font-semibold hover:underline">
          WCs, concealed cisterns, basins, and shower mixers
        </Link>{" "}
        — the precision engineering of water-control cartridges and flush mechanisms matters most here. For large contractor developments, our{" "}
        <Link href="/bulk-supply-contractors" className="text-gold font-semibold hover:underline">
          Bulk Supply for Contractors programme
        </Link>{" "}
        allows you to mix flagship suites for master bathrooms with durable commercial lines for standard units.
      </p>

      <div className="cta-block">
        <p>Talk to us about specifying the right brand mix for your project budget.</p>
        <Link href="/brands">Compare Our Authorised Brands →</Link>
      </div>
    </article>
  ),

  "plumbing-installation-checklist": (
    <article className="prose-content">
      <p>
        Plumbing errors discovered after a building is tiled are among the most expensive remediation jobs in Nigerian construction. This room-by-room checklist prevents those issues by ensuring every critical specification and quality checkpoint is addressed using genuine{" "}
        <Link href="/plumbing-fittings-lagos" className="text-gold font-semibold hover:underline">
          plumbing pipes and fittings in Lagos
        </Link>
        .
      </p>

      <h2>Pre-Installation: Design & Specification Phase</h2>
      <ul>
        <li>Hot and cold water supply routes confirmed with architect and MEP engineer</li>
        <li>Water pressure at mains or overhead tank/booster pump verified (target: 1.5–3.0 bar)</li>
        <li>
          All{" "}
          <Link href="/sanitary-ware-lagos" className="text-gold font-semibold hover:underline">
            sanitary ware rough-in dimensions
          </Link>{" "}
          confirmed with plumber before blockwork chasing and floor screeding begin
        </li>
        <li>Drainage fall calculated and confirmed (minimum 1:40 for horizontal waste runs)</li>
        <li>
          Correct pipe material selected: <strong>PN20 PPR pipes</strong> for hot and cold pressurised supply, heavy-gauge <strong>uPVC pressure/drainage pipes</strong> for soil and waste lines
        </li>
      </ul>

      <h2>First Fix: Rough-In Stage</h2>
      <ul>
        <li>All PPR fusion joints inspected and supply pipes pressure-tested to 1.5× working pressure before wall plastering</li>
        <li>Concealed cistern frames bolted securely to structural blockwork/slab and levelled</li>
        <li>Floor drain traps and shower channel drains set to final tile thickness level</li>
        <li>
          Dedicated power and hot-water feed lines installed for{" "}
          <Link href="/water-heaters-nigeria" className="text-gold font-semibold hover:underline">
            Ariston water heaters
          </Link>{" "}
          with brass isolation and pressure-relief valves
        </li>
      </ul>

      <h2>Second Fix: After Tiling & Handover</h2>
      <ul>
        <li>Chrome angle valves, basin mixers, and shower trim fitted only after tiling and grouting are complete</li>
        <li>Concealed cistern flush plates mounted and dual-flush volume calibrated</li>
        <li>Final 24-hour flood and flow test with all fixtures open before client handover</li>
        <li>All brass gate valves, ball valves, and non-return check valves confirmed operational</li>
      </ul>

      <div className="cta-block">
        <p>
          Sourcing pipes, valves, pumps, and fittings for a new build? Visit our dedicated{" "}
          <Link href="/plumbing-fittings-lagos">Plumbing Fittings in Lagos page</Link> or schedule{" "}
          <Link href="/delivery-installation">Professional Delivery & Installation</Link>.
        </p>
        <Link href="/plumbing-fittings-lagos">Explore Plumbing Fittings in Lagos →</Link>
      </div>
    </article>
  ),

  "cable-selection-guide": (
    <article className="prose-content">
      <p>
        Electrical cable selection is a life-safety issue. Underspecified or copper-clad aluminium (CCA) cables cause overheating, voltage drop, insulation failure, and electrical fires. When sourcing{" "}
        <Link href="/electrical-fittings-lagos" className="text-gold font-semibold hover:underline">
          electrical cables and fittings in Lagos
        </Link>{" "}
        for residential estates, commercial offices, or institutional facilities, getting cable sizing right is non-negotiable.
      </p>

      <h2>1. Understanding Cable Ratings & Cross-Sections</h2>
      <p>
        Every cable has two critical ratings: current-carrying capacity (ampacity) and voltage rating:
      </p>
      <ul>
        <li>
          <strong>1.5mm² Single-Core / Twin & Earth:</strong> Lighting circuits and low-wattage switching loops (typically protected by 10A MCB)
        </li>
        <li>
          <strong>2.5mm² Single-Core / Twin & Earth:</strong> 13A ring and radial socket outlets (typically protected by 16A–20A MCB)
        </li>
        <li>
          <strong>4.0mm² – 6.0mm² Pure Copper:</strong> Split air-conditioners, kitchen cookers, and{" "}
          <Link href="/water-heaters-nigeria" className="text-gold font-semibold hover:underline">
            electric water heaters
          </Link>{" "}
          (protected by 25A–32A MCB/RCBO)
        </li>
        <li>
          <strong>10mm² – 25mm²+ & SWA Armoured Cables:</strong> Sub-main distribution boards, borehole pumps, and generator-to-changeover feeders
        </li>
      </ul>

      <h2>2. Conductor Material: 100% Pure Copper vs Substandard Alternatives</h2>
      <p>
        Always insist on SON-certified 99.9% electrolytic copper cables from trusted Nigerian manufacturers such as{" "}
        <Link href="/brands" className="text-gold font-semibold hover:underline">
          Coleman, Nigerchin, and Cutix
        </Link>
        . Genuine pure copper offers lower resistivity, superior heat dissipation in Lagos&apos; warm ambient temperatures, and reliable termination inside MCB distribution boards.
      </p>

      <h2>3. Key Cable Types for Commercial & Estate Builds</h2>
      <ul>
        <li>
          <strong>PVC Insulated Conduit Wire (Single Core):</strong> Standard for concealed PVC conduit installations in block walls and concrete slabs
        </li>
        <li>
          <strong>Flat Twin with Earth:</strong> Ideal for surface or trunking runs
        </li>
        <li>
          <strong>SWA (Steel Wire Armoured) Cable:</strong> Mandatory for underground trench runs between transformers, generators, and main distribution panels
        </li>
      </ul>

      <h2>4. Generator, Inverter & Changeover Integration</h2>
      <p>
        Buildings in Nigeria frequently cycle between utility power, diesel generators, and solar-inverter banks. Ensure feeder cables between the changeover switch (ATS) and distribution boards are rated for continuous peak load and paired with surge protection devices (SPDs).
      </p>

      <div className="cta-block">
        <p>
          Need factory-sealed coils of SON-certified cables, switchgear, and LED lighting? Visit our{" "}
          <Link href="/electrical-fittings-lagos">Electrical Fittings in Lagos page</Link>.
        </p>
        <Link href="/electrical-fittings-lagos">Explore Electrical Fittings in Lagos →</Link>
      </div>
    </article>
  ),

  "sanitary-ware-maintenance": (
    <article className="prose-content">
      <p>
        Premium{" "}
        <Link href="/sanitary-ware-lagos" className="text-gold font-semibold hover:underline">
          sanitary ware and bathroom fittings
        </Link>{" "}
        are a long-term property investment. Proper maintenance can double their service life and keep them looking showroom-fresh for decades — especially in Lagos and coastal Nigerian environments.
      </p>

      <h2>Daily: Wipe, Don&apos;t Scrub</h2>
      <p>
        Hard chrome and vitreous china glazes scratch microscopically under abrasive scouring powders or steel wool. Use soft microfibre cloths daily to wipe away water droplets and soap film. This simple habit prevents 90% of borehole mineral staining from bonding to the surface.
      </p>

      <h2>Weekly: Gentle Descaling</h2>
      <p>
        In Lagos, a weekly descale keeps mixer aerators and shower nozzles flowing freely. Use diluted white vinegar (1:1 with warm water) or a pH-neutral bathroom cleaner safe for chrome and ceramic. Never pour harsh acid or undiluted bleach into WC cisterns — it degrades internal rubber seals and flush valves prematurely.
      </p>

      <h2>Monthly: Mechanical & Plumbing Check</h2>
      <ul>
        <li>Exercise brass angle valves (turn fully closed and back open) so mineral deposits do not seize the spindle</li>
        <li>Inspect sanitary silicone seals around basins, bathtubs, and shower trays</li>
        <li>Check WC dual-flush buttons for smooth return and zero continuous water trickle into the bowl</li>
        <li>
          Check your{" "}
          <Link href="/water-heaters-nigeria" className="text-gold font-semibold hover:underline">
            Ariston water heater
          </Link>{" "}
          temperature dial and pressure-relief valve
        </li>
      </ul>

      <h2>Annually: Professional Servicing</h2>
      <p>
        Have a qualified technician inspect concealed cistern mechanisms, clean inlet filter meshes on thermostatic mixers, and check sacrificial magnesium anodes in storage water heaters.
      </p>

      <div className="cta-block">
        <p>
          Need genuine replacement cistern mechanisms, mixers, or a bathroom upgrade? Explore our{" "}
          <Link href="/sanitary-ware-lagos">Sanitary Ware in Lagos page</Link>.
        </p>
        <Link href="/sanitary-ware-lagos">Browse Sanitary Ware in Lagos →</Link>
      </div>
    </article>
  ),
};

const CATEGORY_COLORS: Record<string, string> = {
  "Sanitary Wares": "bg-blue-50 text-blue-700",
  "Buying Guide": "bg-amber-50 text-amber-700",
  Plumbing: "bg-teal-50 text-teal-700",
  "Cables & Electrical": "bg-yellow-50 text-yellow-800",
};

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getBlogArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Barryham Int'l Ltd`,
    description: article.description,
    alternates: {
      canonical: `https://barryham.site/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://barryham.site/blog/${article.slug}`,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getBlogArticleBySlug(params.slug);
  const body = articleBodies[params.slug];
  if (!article || !body) notFound();

  const articleSchema = getArticleSchema({
    slug: article.slug,
    title: article.title,
    description: article.description,
    author: article.author,
    publishedIso: article.publishedIso,
    updatedIso: article.updatedIso,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources & Guides", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ]);

  const relatedProducts = products
    .filter((p) => article.relatedProductIds.includes(p.id))
    .slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto w-full px-6 pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-ui text-sm text-charcoal/60 hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft size={16} /> Back to Resources & Guides
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`font-ui text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                CATEGORY_COLORS[article.category] ?? "bg-navy/10 text-navy"
              }`}
            >
              {article.category}
            </span>
            <span className="font-ui text-xs text-charcoal/60 flex items-center gap-1.5">
              <Clock size={14} className="text-gold" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author, Published Date, Updated Date */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-charcoal/65 font-ui bg-white border border-navy/5 rounded-2xl px-5 py-3.5 shadow-sm">
            <span className="flex items-center gap-2 font-semibold text-navy">
              <User size={14} className="text-gold" />
              By {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-gold" />
              Published: <time dateTime={article.publishedIso}>{article.publishedDate}</time>
            </span>
            <span className="flex items-center gap-2">
              <RefreshCw size={14} className="text-gold" />
              Updated: <time dateTime={article.updatedIso}>{article.updatedDate}</time>
            </span>
          </div>
        </header>

        <div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-navy/5
          [&_.prose-content_p]:font-ui [&_.prose-content_p]:text-charcoal/80 [&_.prose-content_p]:leading-relaxed [&_.prose-content_p]:mb-6
          [&_.prose-content_h2]:font-heading [&_.prose-content_h2]:font-bold [&_.prose-content_h2]:text-2xl [&_.prose-content_h2]:text-navy [&_.prose-content_h2]:mt-10 [&_.prose-content_h2]:mb-4
          [&_.prose-content_ul]:list-disc [&_.prose-content_ul]:pl-6 [&_.prose-content_ul]:mb-6 [&_.prose-content_ul]:space-y-2
          [&_.prose-content_li]:font-ui [&_.prose-content_li]:text-charcoal/80 [&_.prose-content_li]:leading-relaxed
          [&_.prose-content_strong]:font-semibold [&_.prose-content_strong]:text-navy
          [&_.cta-block]:bg-navy/5 [&_.cta-block]:border [&_.cta-block]:border-navy/10 [&_.cta-block]:rounded-2xl [&_.cta-block]:p-8 [&_.cta-block]:mt-12
          [&_.cta-block_p]:text-charcoal/80 [&_.cta-block_p]:mb-4
          [&_.cta-block_a]:inline-flex [&_.cta-block_a]:items-center [&_.cta-block_a]:gap-2 [&_.cta-block_a]:text-gold [&_.cta-block_a]:font-ui [&_.cta-block_a]:font-semibold [&_.cta-block_a]:hover:underline
        "
        >
          {body}
        </div>

        {/* 1. Related Service / Landing Page Block (Directive 6.2 & 6.3) */}
        <section className="mt-10 bg-navy text-white rounded-3xl p-8 md:p-10 border border-gold/20">
          <span className="font-ui text-xs uppercase tracking-widest text-gold font-bold block mb-2">
            Related Supply & Service Hub
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3">
            {article.relatedServicePage.title}
          </h2>
          <p className="font-ui text-sm md:text-base text-offwhite/80 mb-6 max-w-2xl">
            {article.relatedServicePage.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={article.relatedServicePage.href}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui text-sm font-bold px-6 py-3.5 rounded-full transition-colors"
            >
              Visit {article.relatedServicePage.title} <ArrowRight size={16} />
            </Link>
            {article.secondaryServicePage && (
              <Link
                href={article.secondaryServicePage.href}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-ui text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                {article.secondaryServicePage.title} <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </section>

        {/* 2. Related Products Block (Directive 6.2) */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-ui text-xs uppercase tracking-widest text-gold font-bold block mb-1">
                  Genuine Stock in Lagos
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy">
                  Related Products for Your Project
                </h2>
              </div>
              <Link
                href={`/products?category=${article.relatedCategory}`}
                className="font-ui text-sm font-semibold text-gold hover:underline inline-flex items-center gap-1"
              >
                View Full Catalogue <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Why Choose Barryham Key Takeaways */}
        <div className="mt-12 bg-white border border-navy/10 rounded-3xl p-8">
          <h2 className="font-heading font-bold text-xl text-navy mb-5">
            Why Specify with Barryham Int&apos;l Ltd?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Direct manufacturer representatives — genuine products, no counterfeits",
              "Two physical Lagos showrooms in Dopemu/Agege & Igando/Alimosho",
              "Fast Lagos & nationwide delivery plus certified installation support",
              "Dedicated contractor & bulk project pricing on WhatsApp",
            ].map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-ui text-sm text-charcoal/80"
              >
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <SectionWhatsAppCTA
            title={`Need a quote after reading "${article.title}"?`}
            subtitle="Chat directly with our technical sales desk on WhatsApp for specification advice, stock availability, and immediate Naira pricing."
            whatsappMessage={`Hello Barryham, I just read your guide "${article.title}" and need a quote / recommendation.`}
            contextLabel={`blog_${article.slug}`}
          />
        </div>
      </div>
    </main>
  );
}
