export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  project?: string;
}

export const testimonials: Testimonial[] = [
  // [PLACEHOLDER — awaiting client testimonial]
  {
    id: "t-1",
    quote: "Barryham International Limited delivered top-grade sanitary fittings for the LASU New Senate Building. Their supply schedule was exact and the product quality exceeded our strict project guidelines. Highly recommended for public infrastructure projects.",
    name: "Engr. O. Adebayo",
    role: "Project Director",
    project: "LASU New Senate Building",
  },
  // [PLACEHOLDER — awaiting client testimonial]
  {
    id: "t-2",
    quote: "We partnered with BIL for the tiling and plumbing fittings at Centrion Heights. The workmanship during installation was immaculate, and their competitive pricing made a massive difference to our bottom line.",
    name: "Arch. Chioma Nwachukwu",
    role: "Lead Architect, Royal Sanderton Groups",
    project: "Centrion Heights",
  },
  // [PLACEHOLDER — awaiting client testimonial]
  {
    id: "t-3",
    quote: "Their prompt delivery of premium electrical cables and lighting accessories for our office complex refurbishment was exceptional. The team has a strong grip on supply chain logistics across Nigeria.",
    name: "Mr. Femi Olayinka",
    role: "Facilities Director, Basscom/Palmyra",
    project: "Multi Agency Office Complex",
  },
];
