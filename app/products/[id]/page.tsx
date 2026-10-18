import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Truck,
  Wrench,
  Store,
  ShieldCheck,
} from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailActions } from "@/components/ProductDetailActions";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const decodedId = decodeURIComponent(params.id);
  const product = products.find(
    (p) => p.id === decodedId || p.id === params.id
  );
  if (!product) {
    return { title: "Product Not Found | Barryham Int’l Ltd" };
  }
  return {
    title: `${product.name} (${product.brand}) in Lagos | Barryham Int’l Ltd`,
    description: `Buy genuine ${product.brand} ${product.name} (SKU: ${product.id}) in Lagos & Nigeria. ${product.availability}. Fast Lagos delivery, installation support & trade pricing from Barryham Int’l Ltd.`,
    alternates: {
      canonical: `https://barryham.site/products/${encodeURIComponent(
        product.id
      )}`,
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const decodedId = decodeURIComponent(params.id);
  const product = products.find(
    (p) => p.id === decodedId || p.id === params.id
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formattedPrice =
    product.priceMode === "request"
      ? "Request Price"
      : new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
          maximumFractionDigits: 0,
        }).format(product.price);

  const productJsonLd = getProductSchema(product);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    {
      name: product.name,
      url: `/products/${encodeURIComponent(product.id)}`,
    },
  ]);

  const categoryLandingLink =
    product.category === "sanitary"
      ? { label: "Sanitary Ware in Lagos", href: "/sanitary-ware-lagos" }
      : product.category === "plumbing"
      ? { label: "Plumbing Fittings in Lagos", href: "/plumbing-fittings-lagos" }
      : product.category === "water-heaters"
      ? { label: "Water Heaters in Nigeria", href: "/water-heaters-nigeria" }
      : {
          label: "Electrical Fittings in Lagos",
          href: "/electrical-fittings-lagos",
        };

  return (
    <main className="flex flex-col min-h-screen bg-offwhite pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Product Detail Section */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-ui text-sm text-charcoal/70 hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Product Catalogue
          </Link>

          <Link
            href={categoryLandingLink.href}
            className="font-ui text-xs font-semibold text-navy hover:text-gold uppercase tracking-wider"
          >
            More {categoryLandingLink.label} →
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-navy/10 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Multi-Photo Gallery (Directive 4.3) */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="relative w-full aspect-square bg-offwhite rounded-2xl overflow-hidden border border-navy/10">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.brand} main product photo`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-navy/20 font-heading text-2xl">
                  NO IMAGE
                </div>
              )}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="font-ui text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm bg-white/95 text-navy border border-navy/10">
                  {product.availability}
                </span>
                <span className="font-ui text-xs font-semibold tracking-wider uppercase bg-white border border-navy/10 text-navy px-3 py-1.5 rounded-full shadow-sm">
                  {product.brand}
                </span>
              </div>
            </div>

            {/* Secondary Gallery Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((imgUrl, idx) => (
                <div
                  key={`${imgUrl}-${idx}`}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-navy/10 bg-offwhite"
                >
                  <Image
                    src={imgUrl}
                    alt={`${product.name} view ${idx + 1} — Barryham Lagos showroom`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details, Specifications & Delivery */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Link
                href={`/products?brand=${encodeURIComponent(product.brand)}`}
                className="font-ui text-xs font-bold text-gold uppercase tracking-wider hover:underline"
              >
                {product.brand} Official Supply
              </Link>
              <span className="text-charcoal/30">•</span>
              <span className="font-ui text-xs text-charcoal/60">
                SKU: {product.id}
              </span>
            </div>

            <h1 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <p className="font-heading font-bold text-3xl text-navy">
                {formattedPrice}
              </p>
              <span className="font-ui text-xs text-charcoal/60">
                (Trade &amp; bulk discounts available on WhatsApp)
              </span>
            </div>

            <p className="font-ui text-sm md:text-base text-charcoal/80 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Primary CTA Actions */}
            <div className="mb-8">
              <ProductDetailActions
                product={product}
                formattedPrice={formattedPrice}
              />
            </div>

            {/* Specifications Table (Directive 4.3) */}
            <div className="mb-8 bg-offwhite/70 rounded-2xl p-5 border border-navy/10">
              <h2 className="font-heading font-semibold text-lg text-navy mb-3">
                Technical Specifications
              </h2>
              <dl className="divide-y divide-navy/10 font-ui text-xs md:text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="py-2.5 flex items-center justify-between gap-4"
                  >
                    <dt className="text-charcoal/65 font-medium">{key}</dt>
                    <dd className="text-navy font-semibold text-right">
                      {value}
                    </dd>
                  </div>
                ))}
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-charcoal/65 font-medium">
                    Recommended Project Types
                  </dt>
                  <dd className="text-navy font-semibold text-right">
                    {product.useCases.join(", ")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Delivery & Installation Info Block (Directive 4.3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-ui">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-navy/10">
                <Truck size={17} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy block">
                    Lagos &amp; Nationwide Delivery
                  </span>
                  <span className="text-charcoal/70">
                    24–48hr delivery across Lagos; nationwide waybill to all 36 states.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-navy/10">
                <Store size={17} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy block">
                    Showroom Pickup Available
                  </span>
                  <span className="text-charcoal/70">
                    Inspect in Dopemu-Agege or Alimosho ({BUSINESS_INFO.openingHours.shortDisplay}).
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-navy/10">
                <Wrench size={17} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy block">
                    Installation Support
                  </span>
                  <span className="text-charcoal/70">
                    Professional plumbing, sanitary &amp; electrical fitting available.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-navy/10">
                <ShieldCheck size={17} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy block">
                    100% Genuine Brand Guarantee
                  </span>
                  <span className="text-charcoal/70">
                    Direct manufacturer supply with full warranty coverage.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-6 lg:px-20 max-w-7xl mx-auto w-full mt-20">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-8">
            Related {product.brand} &amp; Category Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <section className="px-6 lg:px-20 max-w-7xl mx-auto w-full mt-16">
        <SectionWhatsAppCTA
          title={`Need Bulk Pricing or Installation for ${product.name}?`}
          subtitle="Chat with our Lagos sales engineers on WhatsApp for quantity discounts and delivery timelines."
          whatsappMessage={`Hello Barryham, I need a quote and availability check for ${product.name} (SKU: ${product.id}).`}
          contextLabel="product_detail_bottom_cta"
        />
      </section>
    </main>
  );
}
