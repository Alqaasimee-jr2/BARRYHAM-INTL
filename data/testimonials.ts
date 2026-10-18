export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  project?: string;
  rating: number;
  source: "Google Review" | "Verified Project Client";
  categoryLink?: { label: string; href: string };
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Barryham International Limited delivered top-grade sanitary fittings for the LASU New Senate Building. Their supply schedule was exact and the product quality exceeded our strict project guidelines. Highly recommended for public infrastructure projects.",
    name: "Engr. O. Adebayo",
    role: "Project Director",
    project: "LASU New Senate Building, Ojo",
    rating: 5,
    source: "Verified Project Client",
    categoryLink: { label: "Sanitary Ware Lagos", href: "/sanitary-ware-lagos" },
  },
  {
    id: "t-2",
    quote:
      "We partnered with BIL for the tiling and plumbing fittings at Centrion Heights in Ikeja GRA. The workmanship during installation was immaculate, and their competitive trade pricing made a massive difference to our bottom line.",
    name: "Arch. Chioma Nwachukwu",
    role: "Lead Architect, Royal Sanderton Groups",
    project: "Centrion Heights Luxury Terrace",
    rating: 5,
    source: "Verified Project Client",
    categoryLink: { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
  },
  {
    id: "t-3",
    quote:
      "Their prompt delivery of genuine Coleman CTIL electrical cables and lighting accessories for our Alausa office complex refurbishment was exceptional. The team has a strong grip on supply chain logistics across Nigeria.",
    name: "Mr. Femi Olayinka",
    role: "Facilities Director, Basscom/Palmyra",
    project: "Multi Agency Office Complex, Alausa",
    rating: 5,
    source: "Verified Project Client",
    categoryLink: { label: "Electrical Fittings Lagos", href: "/electrical-fittings-lagos" },
  },
  {
    id: "t-4",
    quote:
      "Visited the Dopemu-Agege showroom to pick wall-hung WCs, Grohe basin mixers, and Ariston water heaters for my duplex in Magodo. Everything was 100% original and delivered the next morning.",
    name: "Alhaji Kunle Balogun",
    role: "Homeowner & Developer",
    project: "Duplex Build, Magodo Phase 2",
    rating: 5,
    source: "Google Review",
    categoryLink: { label: "Dopemu Showroom", href: "/dopemu-showroom" },
  },
  {
    id: "t-5",
    quote:
      "Finding genuine hospital-grade Armitage Shanks and Ideal Standard sanitary ware in Lagos can be tough, but Barryham supplied our Maternal & Child Center project on schedule with complete manufacturer documentation.",
    name: "Engr. D. Okafor",
    role: "MEP Procurement Lead",
    project: "Maternal & Child Center, Lekki",
    rating: 5,
    source: "Verified Project Client",
    categoryLink: { label: "Bulk Contractor Supply", href: "/bulk-supply-contractors" },
  },
  {
    id: "t-6",
    quote:
      "The Alimosho showroom along LASU-Isheri Road saved our site team days of delay. We got our concealed cisterns, PPR plumbing valves, and Ariston water heaters in one single trip at wholesale prices.",
    name: "Bldr. Segun Adeyemi",
    role: "Principal Contractor",
    project: "Residential Estate, Igando-Ikotun",
    rating: 5,
    source: "Google Review",
    categoryLink: { label: "Alimosho Showroom", href: "/alimosho-showroom" },
  },
];
