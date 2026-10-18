"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trackConversion } from "@/lib/analytics";
import { getProductSchema } from "@/lib/schema";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.image,
    });
    trackConversion("product_enquiry", {
      action: "add_to_quote_cart",
      sku: product.id,
      productName: product.name,
      brand: product.brand,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const formattedPrice =
    product.priceMode === "request"
      ? "Request Price"
      : new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
          maximumFractionDigits: 0,
        }).format(product.price);

  const productJsonLd = getProductSchema(product);
  const encodedId = encodeURIComponent(product.id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-navy/10 overflow-hidden flex flex-col group transition-all">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="relative w-full aspect-square bg-offwhite flex items-center justify-center overflow-hidden">
        <Link
          href={`/products/${encodedId}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        />
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} — ${product.brand} supplied by Barryham Int'l Ltd`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-navy/5 flex items-center justify-center text-navy/20 font-heading text-xl">
            {product.category.toUpperCase()}
          </div>
        )}

        {/* Availability Badge */}
        <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5">
          <span
            className={`font-ui text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
              product.availability === "In Stock"
                ? "bg-emerald-600 text-white"
                : "bg-amber-500 text-white"
            }`}
          >
            {product.availability}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-ui text-xs font-bold text-gold uppercase tracking-wider">
            {product.brand}
          </span>
          <span className="font-ui text-[10px] text-charcoal/50">
            SKU: {product.id}
          </span>
        </div>

        <Link
          href={`/products/${encodedId}`}
          className="hover:text-gold transition-colors group-hover:text-gold"
        >
          <h3 className="font-heading font-semibold text-base md:text-lg text-navy mb-2 line-clamp-2 transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="font-ui text-xs text-charcoal/70 mb-4 line-clamp-2 flex-grow leading-relaxed">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-navy/10 gap-2">
          <div>
            <span className="font-heading font-bold text-lg text-navy block">
              {formattedPrice}
            </span>
            {product.priceMode === "request" && (
              <span className="font-ui text-[10px] text-charcoal/60">
                Est. {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(product.price)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 relative z-20">
            <a
              href={product.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackConversion("product_enquiry", {
                  action: "whatsapp_card_enquiry",
                  sku: product.id,
                  productName: product.name,
                  brand: product.brand,
                })
              }
              title="Enquire on WhatsApp"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="min-h-[40px] px-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#1ebe5d] hover:text-white font-ui text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Enquire</span>
            </a>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAdd();
              }}
              disabled={added}
              className={`min-h-[40px] min-w-[40px] rounded-full flex items-center justify-center transition-all duration-300 ${
                added
                  ? "bg-gold text-white border border-gold"
                  : "bg-transparent text-navy border border-navy/20 hover:border-gold hover:text-gold"
              }`}
              title="Add to Quote Request"
              aria-label={`Add ${product.name} to Quote Request`}
            >
              {added ? <Check size={17} /> : <ShoppingCart size={17} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
