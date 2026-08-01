import { MetadataRoute } from 'next';
import { products } from '@/data/products';

const blogSlugs = [
  "best-bathroom-fittings-lagos",
  "roca-vs-local-brands",
  "plumbing-installation-checklist",
  "cable-selection-guide",
  "sanitary-ware-maintenance"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes: MetadataRoute.Sitemap = products.map(p => ({
    url: `https://barryham.site/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `https://barryham.site/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    { url: 'https://barryham.site', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://barryham.site/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://barryham.site/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://barryham.site/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://barryham.site/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://barryham.site/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://barryham.site/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://barryham.site/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...productRoutes,
    ...blogRoutes,
  ];
}
