import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { blogArticles } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "https://barryham.site", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: "https://barryham.site/request-quote", lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: "https://barryham.site/products", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barryham.site/sanitary-ware-lagos", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barryham.site/plumbing-fittings-lagos", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barryham.site/electrical-fittings-lagos", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barryham.site/bathroom-fittings-nigeria", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barryham.site/water-heaters-nigeria", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barryham.site/bulk-supply-contractors", lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://barryham.site/delivery-installation", lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://barryham.site/projects", lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://barryham.site/brands", lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://barryham.site/dopemu-showroom", lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://barryham.site/alimosho-showroom", lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://barryham.site/services", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://barryham.site/about", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://barryham.site/blog", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://barryham.site/faq", lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: "https://barryham.site/contact", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `https://barryham.site/products/${encodeURIComponent(p.id)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `https://barryham.site/blog/${article.slug}`,
    lastModified: new Date(article.updatedIso),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
