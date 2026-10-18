export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  readTime: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  publishedIso: string;
  updatedIso: string;
  featured: boolean;
  relatedCategory: "sanitary" | "cables-lighting" | "plumbing" | "water-heaters";
  relatedServicePage: {
    href: string;
    title: string;
    description: string;
  };
  secondaryServicePage?: {
    href: string;
    title: string;
  };
  relatedProductIds: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "best-bathroom-fittings-lagos",
    title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
    excerpt:
      "From hard water resistance to humidity tolerance, here's what to look for when selecting sanitary ware and bathroom fittings for Nigerian climates and local plumbing standards.",
    description:
      "From hard water resistance to humidity tolerance, here's what to look for when selecting sanitary ware and bathroom fittings for Nigerian climates and local plumbing standards.",
    category: "Sanitary Wares",
    readTime: "5 min read",
    author: "Barryham Technical & Showroom Team",
    publishedDate: "July 12, 2025",
    updatedDate: "October 18, 2026",
    publishedIso: "2025-07-12",
    updatedIso: "2026-10-18",
    featured: true,
    relatedCategory: "sanitary",
    relatedServicePage: {
      href: "/sanitary-ware-lagos",
      title: "Sanitary Ware Supplier in Lagos",
      description:
        "Explore genuine Roca, Ideal Standard, Kale, and Armitage Shanks WC suites, basins, mixers, and shower sets in stock at our Dopemu and Alimosho showrooms.",
    },
    secondaryServicePage: {
      href: "/bathroom-fittings-nigeria",
      title: "Luxury & Commercial Bathroom Fittings in Nigeria",
    },
    relatedProductIds: ["346627000", "342477000", "A327876000"],
  },
  {
    slug: "roca-vs-local-brands",
    title: "European Brands vs Local Alternatives: Is the Premium Worth It?",
    excerpt:
      "We compare Roca, Grohe, and Hansgrohe against popular local alternatives on durability, warranty, aesthetics, and long-term cost to help you make an informed decision.",
    description:
      "We compare Roca, Grohe, and Hansgrohe against popular local alternatives on durability, warranty, aesthetics, and long-term cost.",
    category: "Buying Guide",
    readTime: "7 min read",
    author: "Barryham Technical & Showroom Team",
    publishedDate: "June 18, 2025",
    updatedDate: "October 18, 2026",
    publishedIso: "2025-06-18",
    updatedIso: "2026-10-18",
    featured: true,
    relatedCategory: "sanitary",
    relatedServicePage: {
      href: "/brands",
      title: "Authorised & Partner Brands at Barryham",
      description:
        "Compare Roca, Ideal Standard, Armitage Shanks, Kale, Coleman, Nigerchin, and Ariston specifications with our project supply specialists.",
    },
    secondaryServicePage: {
      href: "/sanitary-ware-lagos",
      title: "Sanitary Ware Supplier in Lagos",
    },
    relatedProductIds: ["342399000", "34273700H", "346477000"],
  },
  {
    slug: "plumbing-installation-checklist",
    title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
    excerpt:
      "A room-by-room checklist for developers, contractors, and homeowners to ensure plumbing is correctly specified, installed, and tested before handover.",
    description:
      "A room-by-room checklist for developers, contractors, and homeowners for plumbing specification, installation, and testing before handover.",
    category: "Plumbing",
    readTime: "6 min read",
    author: "Barryham MEP & Plumbing Team",
    publishedDate: "May 20, 2025",
    updatedDate: "October 18, 2026",
    publishedIso: "2025-05-20",
    updatedIso: "2026-10-18",
    featured: false,
    relatedCategory: "plumbing",
    relatedServicePage: {
      href: "/plumbing-fittings-lagos",
      title: "Plumbing Pipes & Fittings Supplier in Lagos",
      description:
        "Source genuine PPR hot/cold water pipes, uPVC drainage systems, brass gate valves, water pumps, and Ariston water heaters for your build.",
    },
    secondaryServicePage: {
      href: "/delivery-installation",
      title: "Nationwide Delivery & Professional Installation",
    },
    relatedProductIds: ["PPR-001", "PPR-004", "VALVE-001"],
  },
  {
    slug: "cable-selection-guide",
    title: "Choosing the Right Electrical Cables for Commercial Projects in Nigeria",
    excerpt:
      "Understanding cable ratings, load capacity, and safety compliance for high-traffic commercial and institutional environments. What PHCN-connected projects need to know.",
    description:
      "Understanding cable ratings, load capacity, and safety compliance for high-traffic commercial and institutional environments.",
    category: "Cables & Electrical",
    readTime: "8 min read",
    author: "Barryham Electrical Engineering Team",
    publishedDate: "April 14, 2025",
    updatedDate: "October 18, 2026",
    publishedIso: "2025-04-14",
    updatedIso: "2026-10-18",
    featured: false,
    relatedCategory: "cables-lighting",
    relatedServicePage: {
      href: "/electrical-fittings-lagos",
      title: "Electrical Cables & Fittings Supplier in Lagos",
      description:
        "Get SON-certified pure copper cables (Coleman, Nigerchin, Cutix), armoured feeder cables, MCB distribution boards, and commercial LED lighting.",
    },
    secondaryServicePage: {
      href: "/bulk-supply-contractors",
      title: "Bulk Building Materials Supply for Contractors",
    },
    relatedProductIds: ["ELEC-002", "ELEC-004", "ELEC-005"],
  },
  {
    slug: "sanitary-ware-maintenance",
    title: "How to Maintain Your Sanitary Fittings: A Practical Guide",
    excerpt:
      "Extend the lifespan of your premium sanitary ware with these practical maintenance and cleaning tips — especially important in high-humidity Lagos and Port Harcourt environments.",
    description:
      "Extend the lifespan of your premium sanitary ware with these practical maintenance and cleaning tips for Nigerian climates.",
    category: "Sanitary Wares",
    readTime: "4 min read",
    author: "Barryham Technical & Showroom Team",
    publishedDate: "March 10, 2025",
    updatedDate: "October 18, 2026",
    publishedIso: "2025-03-10",
    updatedIso: "2026-10-18",
    featured: false,
    relatedCategory: "sanitary",
    relatedServicePage: {
      href: "/sanitary-ware-lagos",
      title: "Sanitary Ware Supplier in Lagos",
      description:
        "Need genuine replacement cistern internals, ceramic disc mixers, or complete WC upgrades? Visit our Lagos showrooms or order on WhatsApp.",
    },
    secondaryServicePage: {
      href: "/water-heaters-nigeria",
      title: "Ariston & Instant Water Heaters in Nigeria",
    },
    relatedProductIds: ["822091001", "89009000K", "A327111000"],
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
