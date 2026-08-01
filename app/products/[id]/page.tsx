import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailActions } from "@/components/ProductDetailActions";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | ${product.brand} | Barryham Int'l Ltd Nigeria`,
    description: `Shop ${product.name} by ${product.brand}. Premium ${product.category} fittings from Barryham Int'l Ltd.`,
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding this one)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <main className="flex flex-col min-h-screen bg-offwhite pt-24 pb-32">
      {/* Product Detail Section */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-ui text-sm text-charcoal/60 hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Catalog
        </Link>

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-navy/5 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Image Gallery (Single image for now) */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square bg-offwhite rounded-2xl overflow-hidden border border-navy/5">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
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
              <div className="absolute top-4 left-4 z-10">
                <span className="font-ui text-xs font-semibold tracking-wider uppercase bg-white border border-navy/10 text-navy/60 px-3 py-1.5 rounded-full shadow-sm">
                  {product.category === "sanitary"
                    ? "Sanitary"
                    : product.category === "plumbing"
                    ? "Plumbing"
                    : "Cables & Lighting"}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-ui text-sm font-bold text-gold uppercase tracking-wider mb-3">
              {product.brand}
            </h2>
            <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="font-heading font-bold text-3xl text-navy mb-8">
              {formattedPrice}
            </p>

            <div className="w-full h-px bg-navy/10 mb-8" />

            <div className="mb-10 space-y-4">
              <h3 className="font-ui text-sm font-semibold uppercase tracking-wider text-charcoal">
                Product Details
              </h3>
              <p className="font-ui text-charcoal/70 leading-relaxed">
                {product.description ||
                  `Premium ${product.brand} ${product.category} fitting. Ideal for luxury residential and commercial developments. Ensure lasting quality with Barryham Int'l Ltd.`}
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3 font-ui text-sm text-charcoal/80">
                  <CheckCircle2 size={16} className="text-gold" /> Guaranteed Authenticity
                </li>
                <li className="flex items-center gap-3 font-ui text-sm text-charcoal/80">
                  <CheckCircle2 size={16} className="text-gold" /> Nationwide Delivery (Nigeria)
                </li>
                <li className="flex items-center gap-3 font-ui text-sm text-charcoal/80">
                  <CheckCircle2 size={16} className="text-gold" /> Professional Installation Available
                </li>
              </ul>
            </div>

            <ProductDetailActions product={product} formattedPrice={formattedPrice} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-6 lg:px-20 max-w-7xl mx-auto w-full mt-32">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-10">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
