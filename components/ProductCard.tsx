"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, qty: 1, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(product.price);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image ? `https://barryham.site${product.image}` : undefined,
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    offers: {
      "@type": "Offer",
      url: `https://barryham.site/products`,
      priceCurrency: "NGN",
      price: product.price,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-navy/5 overflow-hidden flex flex-col group transition-all">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="relative w-full aspect-square bg-offwhite flex items-center justify-center overflow-hidden">
        <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-navy/5 flex items-center justify-center text-navy/20 font-heading text-xl">
            {product.category.toUpperCase()}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-ui text-xs font-bold text-gold uppercase tracking-wider mb-2">
          {product.brand}
        </span>
        <Link href={`/products/${product.id}`} className="hover:text-gold transition-colors group-hover:text-gold">
          <h3 className="font-heading font-semibold text-lg text-navy mb-2 line-clamp-2 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {product.description && (
          <p className="font-ui text-sm text-charcoal/70 mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy/5">
          <span className="font-heading font-bold text-xl text-navy">
            {formattedPrice}
          </span>
          
          <button
            onClick={(e) => { e.preventDefault(); handleAdd(); }}
            disabled={added}
            className={`relative z-20 min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center transition-all duration-300 ${
              added 
                ? "bg-gold text-white border border-gold" 
                : "bg-transparent text-gold border border-gold hover:bg-gold/10"
            }`}
            aria-label="Add to Request"
          >
            {added ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
