import { BUSINESS_INFO } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://barryham.site/#localbusiness",
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.shortName,
    url: BUSINESS_INFO.canonicalUrl,
    telephone: BUSINESS_INFO.primaryPhone,
    email: BUSINESS_INFO.email,
    image: "https://barryham.site/og-image.png",
    priceRange: "₦₦ - ₦₦₦",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.showrooms[0].streetAddress,
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    openingHours: BUSINESS_INFO.openingHours.schema,
    sameAs: [BUSINESS_INFO.socials.instagram],
    department: BUSINESS_INFO.showrooms.map((s) => ({
      "@type": "HomeAndConstructionBusiness",
      name: `${BUSINESS_INFO.shortName} — ${s.name}`,
      telephone: BUSINESS_INFO.primaryPhone,
      openingHours: BUSINESS_INFO.openingHours.schema,
      address: {
        "@type": "PostalAddress",
        streetAddress: s.streetAddress,
        addressLocality: "Lagos",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://barryham.site${item.url}`,
    })),
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getProductSchema(product: {
  id: string;
  name: string;
  brand: string;
  price: number;
  priceMode?: "fixed" | "request";
  availability?: string;
  description?: string;
  image?: string;
}) {
  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `https://barryham.site${product.image}`
    : "https://barryham.site/og-image.png";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.id,
    mpn: product.id,
    image: [imageUrl],
    description:
      product.description ||
      `Genuine ${product.brand} ${product.name} supplied and installed by Barryham International Limited across Lagos and Nigeria.`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://barryham.site/products/${encodeURIComponent(product.id)}`,
      priceCurrency: "NGN",
      price: product.price,
      availability:
        product.availability === "Available on Order"
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: BUSINESS_INFO.name,
      },
    },
  };
}

export function getArticleSchema(article: {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedIso: string;
  updatedIso: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: article.author || BUSINESS_INFO.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: "https://barryham.site/icon.svg",
      },
    },
    datePublished: article.publishedIso,
    dateModified: article.updatedIso,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://barryham.site/blog/${article.slug}`,
    },
  };
}
