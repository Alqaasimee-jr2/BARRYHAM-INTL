import { ProductCategory } from "./products";

export interface LandingPageConfig {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  whoItIsFor: string;
  introParagraphs: string[];
  productCategories: {
    title: string;
    description: string;
    href: string;
  }[];
  productFilterCategory?: ProductCategory | "all";
  brandsSupplied: string[];
  deliveryAndInstallation: {
    heading: string;
    summary: string;
    bullets: string[];
  };
  showroomInfo?: {
    showroomIndex: 0 | 1;
    landmarks: string;
    areasServed: string[];
  };
  whatsappCtaMessage: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLandingLinks: {
    label: string;
    href: string;
  }[];
  relatedBlogGuides: {
    title: string;
    slug: string;
    summary: string;
  }[];
}

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  "sanitary-ware-lagos": {
    slug: "sanitary-ware-lagos",
    metaTitle:
      "Sanitary Ware Supplier in Lagos | Grohe, Ideal Standard, Villeroy & Boch | Barryham Int’l Ltd",
    metaDescription:
      "Authorised sanitary ware supplier in Lagos with showrooms in Dopemu-Agege & Alimosho. Shop genuine wall-hung WCs, close-coupled toilets, washbasins & urinals with fast delivery.",
    eyebrow: "Lagos Showroom Stock • Retail & Bulk Trade Supply",
    h1: "Sanitary Ware Supplier in Lagos",
    whoItIsFor:
      "Built for homeowners, architects, interior designers, estate developers, hoteliers, and civil contractors sourcing genuine, non-counterfeit European sanitary ware in Lagos.",
    introParagraphs: [
      "Barryham International Limited is a direct distributor and installer of certified sanitary ware in Lagos. From our showrooms in Dopemu-Agege and Alimosho (LASU-Isheri Road), we supply vitreous china WCs, washbasins, concealed cisterns, bidets, and commercial urinals engineered to withstand Lagos borehole water and coastal humidity.",
      "Whether you are fitting out a private duplex in Lekki, Ikeja GRA, or Magodo, or procuring 200+ sanitary sets for a residential estate or hospital project, we provide immediate stock access, manufacturer warranties, and professional on-site installation.",
    ],
    productCategories: [
      {
        title: "Wall-Hung WCs & Concealed Cisterns",
        description:
          "Space-saving rimless wall-hung toilets from Grohe, Villeroy & Boch, Ideal Standard, and Varmora paired with Geberit, Grohe Uniset, and Sanit concealed frames.",
        href: "/products?category=sanitary",
      },
      {
        title: "Close-Coupled & One-Piece Toilets",
        description:
          "Heavy-duty dual-flush close-coupled WC suites with soft-close seat covers for residential homes, estates, schools, and offices.",
        href: "/products?category=sanitary",
      },
      {
        title: "Countertop, Wall-Hung & Pedestal Washbasins",
        description:
          "500mm–700mm washbasins, undercounter vanity bowls, and semi-pedestal basins with hard glaze protection against mineral staining.",
        href: "/products?category=sanitary",
      },
      {
        title: "Commercial Urinals & Institutional Sanitaryware",
        description:
          "Water-saving sensor and manual urinals, ceramic division plates, and hospital-grade sanitary fixtures from Armitage Shanks, Ideal Standard, and Varmora.",
        href: "/products?category=sanitary",
      },
    ],
    productFilterCategory: "sanitary",
    brandsSupplied: [
      "Grohe",
      "Ideal Standard",
      "Villeroy & Boch",
      "Roca",
      "Armitage Shanks",
      "Geberit",
      "Varmora",
      "Twyford",
      "Kohler",
      "Sanit",
    ],
    deliveryAndInstallation: {
      heading: "Sanitary Ware Delivery & Certified Installation in Lagos",
      summary:
        "We deliver stocked sanitary ware within 24–48 hours across Lagos Mainland and Lagos Island, and provide complete first-fix and second-fix installation.",
      bullets: [
        "24–48hr delivery to Ikeja, Lekki, Victoria Island, Ikoyi, Ajah, Surulere, Agege, and Alimosho",
        "Protective palletized crating for vitreous china WCs and basins to prevent transit breakage",
        "Certified installation of wall-hung WC frames, concealed cisterns, flush plates, and silicone sealing",
        "Same-day showroom pickup available Monday–Saturday (8:00 AM – 6:00 PM)",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham, I need a quote for Sanitary Ware in Lagos...",
    faqs: [
      {
        question: "Where can I inspect your sanitary ware in Lagos before buying?",
        answer:
          "You can visit either of our two Lagos showrooms Monday through Saturday from 8:00 AM to 6:00 PM: (1) Block B, Suite 3, Association Plaza, Cement Bus Stop, Dopemu-Agege, or (2) Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, LASU-Isheri/Igando Road, Alimosho.",
      },
      {
        question: "Are your Grohe, Ideal Standard, and Villeroy & Boch toilets original?",
        answer:
          "Yes. Barryham International Limited is a direct manufacturer representative. Every WC, basin, and cistern we supply is 100% genuine and backed by official manufacturer warranty.",
      },
      {
        question: "Do wall-hung toilets come with the concealed tank and flush plate?",
        answer:
          "We supply both complete wall-hung WC sets and individual pans paired with Grohe Uniset, Villeroy & Boch ViConnect, Geberit, or Sanit concealed cisterns and flush plates. Our team ensures 100% compatibility on your quote.",
      },
      {
        question: "Do you offer bulk discounts for estate developers and contractors in Lagos?",
        answer:
          "Yes. We provide tiered trade pricing and staged site deliveries for developers, architects, and contractors ordering multiple bathroom sets.",
      },
    ],
    relatedLandingLinks: [
      { label: "Bathroom Fittings Nigeria", href: "/bathroom-fittings-nigeria" },
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Water Heaters Nigeria", href: "/water-heaters-nigeria" },
      { label: "Dopemu Showroom", href: "/dopemu-showroom" },
      { label: "Bulk Contractor Supply", href: "/bulk-supply-contractors" },
    ],
    relatedBlogGuides: [
      {
        title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
        slug: "best-bathroom-fittings-lagos",
        summary: "Hard water resistance, humidity tolerance, and pressure compatibility tips for Lagos builds.",
      },
      {
        title: "European Brands vs Local Alternatives: Is the Premium Worth It?",
        slug: "roca-vs-local-brands",
        summary: "Comparing Roca, Grohe, and Ideal Standard against local sanitary ware over a 10-year lifecycle.",
      },
      {
        title: "How to Maintain Your Sanitary Fittings: A Practical Guide",
        slug: "sanitary-ware-maintenance",
        summary: "Prevent limescale and preserve chrome and ceramic finishes in Nigerian water conditions.",
      },
    ],
  },

  "plumbing-fittings-lagos": {
    slug: "plumbing-fittings-lagos",
    metaTitle:
      "Plumbing Fittings Supplier in Lagos | Grohe Mixers, Concealed Cisterns & Valves | Barryham Int’l Ltd",
    metaDescription:
      "Shop genuine plumbing fittings in Lagos: Grohe & Villeroy & Boch mixers, concealed tanks, flush plates, angle valves, P-traps, and piping. Retail & contractor supply.",
    eyebrow: "First-Fix & Second-Fix Plumbing Supply • Lagos & Nigeria",
    h1: "Plumbing Fittings Supplier in Lagos",
    whoItIsFor:
      "Engineered for plumbing contractors, MEP engineers, facility managers, developers, and homeowners who need leak-free first-fix and second-fix plumbing fittings in Lagos.",
    introParagraphs: [
      "Plumbing failures behind tiled walls are among the costliest mistakes in Nigerian construction. At Barryham International Limited, we stock and install precision-engineered European plumbing fittings designed for high pressure tolerance, mineral-rich borehole water, and decades of trouble-free operation.",
      "From concealed cistern frames and filling mechanisms to ceramic-disc basin mixers, thermostatic shower valves, angle stop valves, and bottle traps, our Dopemu and Alimosho showrooms carry ready stock for immediate dispatch.",
    ],
    productCategories: [
      {
        title: "Concealed Cisterns, Frames & Flush Plates",
        description:
          "Grohe Uniset, Villeroy & Boch ViConnect, Sanit, and Ideal Standard in-wall tanks, dual-flush plates, and pneumatic/cable flush mechanisms.",
        href: "/products?category=plumbing",
      },
      {
        title: "Basin, Bath & Kitchen Sink Mixers",
        description:
          "Single-lever and thermostatic mixers from Grohe (Eurosmart, BauLoop, BauEdge, K7) and Villeroy & Boch with ceramic cartridges.",
        href: "/products?category=plumbing",
      },
      {
        title: "Shower Systems, Head Showers & Hand Showers",
        description:
          "Complete concealed and exposed shower systems, rain shower heads, shower arms, outlet elbows, and trigger sprays.",
        href: "/products?category=plumbing",
      },
      {
        title: "Valves, Traps, Drains & Service Mechanisms",
        description:
          "Heavy-duty 1/2\" and 3/8\" angle stop valves, chrome P-traps, universal filling valves, and Jimten linear floor drains.",
        href: "/products?category=plumbing",
      },
    ],
    productFilterCategory: "plumbing",
    brandsSupplied: [
      "Grohe",
      "Ideal Standard",
      "Villeroy & Boch",
      "Geberit",
      "Sanit",
      "Vado",
      "Hansgrohe",
      "Jimten",
      "Roca",
    ],
    deliveryAndInstallation: {
      heading: "Plumbing Materials Delivery & On-Site Installation in Lagos",
      summary:
        "We support both material-only orders and full turnkey plumbing installation across Lagos and Nigeria.",
      bullets: [
        "Pre-installation rough-in verification and pressure-testing support",
        "Genuine spare parts stocked locally (filling valves, flush plates, cartridges, angle valves)",
        "24–48hr delivery to project sites across Lagos Mainland & Island",
        "Dedicated trade desk for plumbers and MEP contractors at Dopemu & Alimosho",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham, I need a quote for Plumbing Fittings in Lagos...",
    faqs: [
      {
        question: "Do you sell replacement concealed cistern parts and flush plates in Lagos?",
        answer:
          "Yes. We stock Grohe, Sanit, Villeroy & Boch, and Ideal Standard flush plates, universal filling valves, concealed mechanisms, and connection cables at our Lagos showrooms.",
      },
      {
        question: "What water pressure is required for your Grohe and Villeroy & Boch shower mixers?",
        answer:
          "Most European single-lever mixers operate smoothly from 0.5 to 1.0 bar minimum pressure, while thermostatic rain shower systems perform best at 1.5–3.0 bar. Our technical team can advise on the right mixer for your tank height or booster pump setup.",
      },
      {
        question: "Can Barryham handle the plumbing installation as well as supply?",
        answer:
          "Yes. Our plumbing engineering team handles both first-fix (rough-in piping, concealed frames, pressure testing) and second-fix (fixtures, mixers, shower sets, testing) installations.",
      },
    ],
    relatedLandingLinks: [
      { label: "Sanitary Ware Lagos", href: "/sanitary-ware-lagos" },
      { label: "Bathroom Fittings Nigeria", href: "/bathroom-fittings-nigeria" },
      { label: "Water Heaters Nigeria", href: "/water-heaters-nigeria" },
      { label: "Delivery & Installation", href: "/delivery-installation" },
      { label: "Bulk Contractor Supply", href: "/bulk-supply-contractors" },
    ],
    relatedBlogGuides: [
      {
        title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
        slug: "plumbing-installation-checklist",
        summary: "Essential pre-installation, first-fix rough-in, and second-fix pressure testing steps.",
      },
      {
        title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
        slug: "best-bathroom-fittings-lagos",
        summary: "Selecting ceramic disc cartridges and hard-water resistant brassware.",
      },
    ],
  },

  "electrical-fittings-lagos": {
    slug: "electrical-fittings-lagos",
    metaTitle:
      "Electrical Fittings & Coleman Cables Supplier in Lagos | Barryham Int’l Ltd",
    metaDescription:
      "Buy genuine SON-certified Coleman CTIL electrical cables (1.5mm to 25mm armoured, single-core, twin & earth, flex) and lighting accessories in Lagos from Barryham Int’l Ltd.",
    eyebrow: "SON-Certified Pure Copper Cables & Electricals • Lagos",
    h1: "Electrical Cables & Fittings Supplier in Lagos",
    whoItIsFor:
      "Built for electrical engineers, M&E contractors, estate developers, facility managers, and homeowners who require 100% genuine, full-gauge SON-certified copper cables and electrical accessories in Lagos.",
    introParagraphs: [
      "Substandard or undersized electrical cables are a leading cause of overheating, voltage drop, and fire hazards—especially in Nigerian buildings switching daily between grid supply, inverters, and heavy-duty generators. Barryham International Limited supplies authentic Coleman CTIL wires and cables alongside commercial and residential lighting accessories.",
      "Every coil and metre of cable we supply from our Dopemu-Agege and Alimosho depots meets strict NIS/SON conductivity and insulation standards, giving you peace of mind from domestic wiring to three-phase armoured feeder installations.",
    ],
    productCategories: [
      {
        title: "Single-Core PVC Conduit Cables (1.5mm² – 16mm²)",
        description:
          "100m coils of Coleman CTIL pure copper single-core cables for lighting circuits (1.5mm²), power sockets (2.5mm²), AC/water heaters (4mm²–6mm²), and sub-mains (10mm²–16mm²).",
        href: "/products?category=cables-lighting",
      },
      {
        title: "Flat Twin & Earth Surface Wiring Cables",
        description:
          "Heavy-duty Coleman CTIL Flat Twin & Earth PVC-sheathed copper cables for domestic and commercial power distribution.",
        href: "/products?category=cables-lighting",
      },
      {
        title: "Steel Wire Armoured (SWA) Underground Cables",
        description:
          "25mm² and heavy-gauge armoured feeder cables sold per metre or drum for transformer, generator changeover (ATS), and underground estate runs.",
        href: "/products?category=cables-lighting",
      },
      {
        title: "Flexible Multi-Core Cables & Lighting Accessories",
        description:
          "3-core flexible cables, 16mm² welding/generator flex cables, switches, sockets, and architectural lighting fixtures.",
        href: "/products?category=cables-lighting",
      },
    ],
    productFilterCategory: "cables-lighting",
    brandsSupplied: ["Coleman CTIL", "Ariston"],
    deliveryAndInstallation: {
      heading: "Electrical Cable Delivery & M&E Project Support in Lagos",
      summary:
        "Fast dispatch of full 100m coils and cut-to-length armoured cables across Lagos and nationwide.",
      bullets: [
        "Guaranteed full-length 100m factory-sealed Coleman CTIL coils",
        "Direct wholesale pricing for electrical contractors and estate developers",
        "Same-day pickup at Dopemu-Agege or Alimosho showrooms",
        "Site delivery across Lagos within 24–48 hours",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham, I need a quote for Coleman Electrical Cables & Fittings in Lagos...",
    faqs: [
      {
        question: "Are your Coleman CTIL cables original and full 100-metre coils?",
        answer:
          "Yes. We are authorised distributors of Coleman Wires & Cables (CTIL). All coils are factory-sealed, SON-certified pure copper, and full 100m length.",
      },
      {
        question: "Which cable gauge should I use for water heaters and air conditioners in Nigeria?",
        answer:
          "Typically, 4.0mm² single-core or twin-and-earth copper cable is recommended for dedicated water heater and 1.5HP–2HP AC radial circuits, while 6.0mm²–10mm² is used for cooker units and sub-main distribution boards. Always confirm with your project electrical engineer.",
      },
      {
        question: "Do you sell armoured and flexible generator cables per metre?",
        answer:
          "Yes. We supply 25mm² Steel Wire Armoured (SWA) cables and 16mm² flexible copper cables both per metre and in bulk drums for commercial and residential generator connections.",
      },
    ],
    relatedLandingLinks: [
      { label: "Water Heaters Nigeria", href: "/water-heaters-nigeria" },
      { label: "Bulk Contractor Supply", href: "/bulk-supply-contractors" },
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Dopemu Showroom", href: "/dopemu-showroom" },
    ],
    relatedBlogGuides: [
      {
        title: "Choosing the Right Electrical Cables for Commercial Projects in Nigeria",
        slug: "cable-selection-guide",
        summary: "Ampacity ratings, copper vs aluminium, SWA armoured cables, and generator sizing.",
      },
    ],
  },

  "bathroom-fittings-nigeria": {
    slug: "bathroom-fittings-nigeria",
    metaTitle:
      "Bathroom Fittings Supplier in Nigeria | Luxury & Commercial Bathrooms | Barryham Int’l Ltd",
    metaDescription:
      "Complete bathroom fittings supplier in Nigeria: WCs, basins, bathtubs, Grohe & Villeroy & Boch taps, rain showers, towel rails & bathroom accessories. Nationwide delivery.",
    eyebrow: "Complete Bathroom Packages • Nationwide Delivery Across Nigeria",
    h1: "Premium Bathroom Fittings Supplier in Nigeria",
    whoItIsFor:
      "Designed for homeowners, luxury developers, architects, hotels, and institutional builders across Lagos, Abuja, Port Harcourt, Ibadan, and all 36 states seeking complete, coordinated bathroom packages.",
    introParagraphs: [
      "Sourcing bathroom fittings piecemeal from different vendors often leads to mismatched finishes, incompatible rough-in dimensions, and counterfeit brassware that peels within months. Barryham International Limited supplies complete, harmonised bathroom packages from Europe's finest manufacturers.",
      "From freestanding acrylic bathtubs, rimless wall-hung WCs, and vanity washbasins to thermostatic rain showers, basin mixers, and 5-in-1 chrome accessory sets, we curate and deliver complete bathroom schedules anywhere in Nigeria.",
    ],
    productCategories: [
      {
        title: "Toilets, Bidets & Washbasins",
        description:
          "Coordinated ceramic suites from Villeroy & Boch (Avento, Subway 3.0, Venticello, Architectura, O.novo), Ideal Standard (Tesi, Tonic, Connect, Space), Grohe, and Varmora.",
        href: "/products?category=sanitary",
      },
      {
        title: "Bathtubs & Shower Enclosures",
        description:
          "170x70cm Targa Style bathtubs, freestanding soaking tubs, concealed thermostatic mixers, and multi-spray rain shower systems.",
        href: "/products?category=sanitary",
      },
      {
        title: "Bathroom Taps & Mixers",
        description:
          "High-shine StarLight chrome and brushed brass basin mixers, freestanding tall mixers, bath spouts with diverters, and bidet sprays.",
        href: "/products?category=plumbing",
      },
      {
        title: "Bathroom Accessories Sets (3-in-1, 4-in-1 & 5-in-1)",
        description:
          "Grohe Essentials & Villeroy & Boch Elements towel rails, robe hooks, toilet brush sets, soap dishes, and toilet roll holders.",
        href: "/products?category=plumbing",
      },
    ],
    productFilterCategory: "sanitary",
    brandsSupplied: [
      "Villeroy & Boch",
      "Grohe",
      "Ideal Standard",
      "Roca",
      "Hansgrohe",
      "Vado",
      "Kohler",
      "Armitage Shanks",
      "Varmora",
      "Ariston",
    ],
    deliveryAndInstallation: {
      heading: "Nationwide Bathroom Fittings Delivery & Installation",
      summary:
        "From our Lagos distribution hubs, we ship complete bathroom packages to project sites across Nigeria with full installation support.",
      bullets: [
        "Room-by-room bathroom schedule packaging (labelled for Guest WC, Master Bath, Children's Bath, BQ)",
        "Safe nationwide transport to Abuja, Port Harcourt, Warri, Owerri, Ibadan, Enugu, and Kano",
        "Expert bathroom tiling, waterproofing, and sanitary installation teams available",
        "Direct manufacturer warranty on all ceramic, thermostatic, and chrome components",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham, I need a quote for complete Bathroom Fittings in Nigeria...",
    faqs: [
      {
        question: "Can you put together a complete bathroom package for a 4-bedroom or 5-bedroom duplex?",
        answer:
          "Yes! Send us the number of bathrooms (e.g., 1 Master Bathroom, 3 Ensuite Bedrooms, 1 Visitor Toilet, 1 BQ) and your preferred tier (Mid-Range, Executive, or Luxury) on WhatsApp, and we will prepare a complete itemised quote.",
      },
      {
        question: "Do you deliver bathroom fittings outside Lagos to Abuja or Port Harcourt?",
        answer:
          "Yes. We have delivered sanitary and bathroom fittings to projects in Abuja (Maitama), Port Harcourt (Trans Amadi & Moscow Road), Owerri, and Warri. All ceramics are securely crated before dispatch.",
      },
      {
        question: "Why do cheap bathroom taps peel or rust in Nigeria, and how are yours different?",
        answer:
          "Cheap taps use zinc-alloy bodies with thin decorative electroplating that corrodes in borehole water. Our Grohe, Villeroy & Boch, and Ideal Standard brassware uses solid brass bodies with multi-layer hard chrome plating and ceramic disc cartridges.",
      },
    ],
    relatedLandingLinks: [
      { label: "Sanitary Ware Lagos", href: "/sanitary-ware-lagos" },
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Water Heaters Nigeria", href: "/water-heaters-nigeria" },
      { label: "Authorised Brands", href: "/brands" },
    ],
    relatedBlogGuides: [
      {
        title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
        slug: "best-bathroom-fittings-lagos",
        summary: "What to check for hard water, humidity, and water pressure before buying.",
      },
      {
        title: "European Brands vs Local Alternatives: Is the Premium Worth It?",
        slug: "roca-vs-local-brands",
        summary: "Where to invest in European wet-area brassware and ceramics.",
      },
    ],
  },

  "water-heaters-nigeria": {
    slug: "water-heaters-nigeria",
    metaTitle:
      "Ariston Water Heaters in Nigeria | 15L, 30L, 50L, 80L, 100L & Instant | Barryham Int’l Ltd",
    metaDescription:
      "Buy genuine Ariston electric storage & instant water heaters (15L, 30L, 50L, 80L, 100L) in Lagos & Nigeria. Borehole-resistant Titanium enamel tanks, delivery & installation.",
    eyebrow: "Authorised Ariston Distributor • Lagos & Nationwide",
    h1: "Ariston & Commercial Water Heaters in Nigeria",
    whoItIsFor:
      "Ideal for homeowners, hotels, hospitals, boarding schools, estate developers, and plumbing contractors looking for genuine, energy-efficient Ariston electric water heaters in Nigeria.",
    introParagraphs: [
      "Barryham International Limited is an official distributor and installer of Ariston Water Heaters in Lagos and across Nigeria. We stock compact 15L and 30L Andris units for residential bathrooms, 50L and 80L Pro1 cylinders for master suites with bathtubs, 100L commercial units for hotels and hospitals, and tankless instant water heaters.",
      "Every Ariston water heater we supply features Titanium Plus glass-lined enamel inner tanks and oversized magnesium anodes to resist corrosion from Nigerian borehole water, alongside low-wattage heating elements compatible with domestic inverters and generators.",
    ],
    productCategories: [
      {
        title: "15L & 30L Compact Bathroom Water Heaters (Ariston Andris R)",
        description:
          "Space-saving wall-hung storage heaters (1.2kW–1.5kW) ideal for single ensuite showers, guest bathrooms, and kitchen sinks.",
        href: "/products?category=water-heaters",
      },
      {
        title: "50L & 80L Family & Master Suite Water Heaters (Ariston Pro1 R)",
        description:
          "Vertical wall-mounted cylinders with WaterPlus technology for rain shower systems, bathtubs, and multi-point bathroom supply.",
        href: "/products?category=water-heaters",
      },
      {
        title: "100L+ Commercial, Hotel & Hospital Water Heaters",
        description:
          "Heavy-duty high-capacity storage water heaters for hotels, hospital maternity wards, sports complexes, and large villas.",
        href: "/products?category=water-heaters",
      },
      {
        title: "Tankless Instant Electric Water Heaters (Ariston Aures)",
        description:
          "On-demand instant hot water units with IP25 waterproof protection where ceiling or wall space is limited.",
        href: "/products?category=water-heaters",
      },
    ],
    productFilterCategory: "water-heaters",
    brandsSupplied: ["Ariston", "Grohe", "Coleman CTIL"],
    deliveryAndInstallation: {
      heading: "Water Heater Delivery, Piping & Electrical Installation",
      summary:
        "We don't just sell the unit—our technicians install your water heater with the correct pressure relief valve, angle stop valves, and Coleman 4mm² dedicated power cable.",
      bullets: [
        "Complete installation kit support: non-return safety valve, flexible connectors, and wall brackets",
        "Paired with genuine Coleman CTIL 4mm² copper cables and 20A DP water heater switches",
        "24–48hr delivery across Lagos and nationwide shipping across Nigeria",
        "Full manufacturer warranty backed by Barryham International Limited",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham, I need a quote for Ariston Water Heaters...",
    faqs: [
      {
        question: "What size Ariston water heater do I need for my bathroom?",
        answer:
          "For a standard single overhead shower, a 15L or 30L Ariston Andris heater is ideal. For a master bathroom with a high-flow rain shower or bathtub, or where one heater supplies two adjacent bathrooms, choose a 50L or 80L Ariston Pro1 R unit.",
      },
      {
        question: "Can I run an Ariston storage water heater on my generator or inverter?",
        answer:
          "Yes. Ariston Andris 15L (1.2kW) and 30L (1.5kW) storage heaters draw far less instantaneous current than high-wattage instant heaters, making them easy to run on standard household generators or solar/inverter setups.",
      },
      {
        question: "How do I recognise a genuine Ariston water heater in Nigeria?",
        answer:
          "Genuine Ariston units come with serialised factory packaging, original pressure safety valve, Titanium Plus tank certification, and official warranty. Buying from an authorised distributor like Barryham Int'l Ltd guarantees authenticity.",
      },
    ],
    relatedLandingLinks: [
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Electrical Fittings Lagos", href: "/electrical-fittings-lagos" },
      { label: "Bathroom Fittings Nigeria", href: "/bathroom-fittings-nigeria" },
      { label: "Delivery & Installation", href: "/delivery-installation" },
    ],
    relatedBlogGuides: [
      {
        title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
        slug: "plumbing-installation-checklist",
        summary: "Hot and cold water routing, pressure testing, and maintenance access planning.",
      },
      {
        title: "Choosing the Right Electrical Cables for Commercial Projects in Nigeria",
        slug: "cable-selection-guide",
        summary: "Sizing dedicated copper cables for water heaters and high-load appliances.",
      },
    ],
  },

  "bulk-supply-contractors": {
    slug: "bulk-supply-contractors",
    metaTitle:
      "Bulk Building Materials & Trade Supply for Contractors in Nigeria | Barryham Int’l Ltd",
    metaDescription:
      "Direct wholesale & bulk project supply of sanitary ware, plumbing fittings, Ariston water heaters & Coleman cables for contractors, developers & MEP engineers in Nigeria.",
    eyebrow: "B2B Trade Desk • BOQ Fulfilment • 30+ Institutional Projects",
    h1: "Bulk Building Materials & Trade Supply for Contractors in Nigeria",
    whoItIsFor:
      "Tailored for civil construction companies, MEP contractors, real estate developers, quantity surveyors, architects, and government/hospital procurement officers.",
    introParagraphs: [
      "On multi-unit residential estates, commercial towers, hospitals, and public infrastructure projects, material delays and counterfeit supplies destroy contractor margins. Since 2018, Barryham International Limited has partnered with top construction firms—including CCECC, LSDPC, Deux Project Ltd, Debour Nig. Ltd, and Sermatech—to deliver over 30 major projects across Nigeria.",
      "As direct manufacturer representatives for 15 global sanitary, plumbing, water heating, and electrical brands, we provide rapid BOQ pricing, technical submittal sheets, volume trade discounts, and staged site call-off deliveries.",
    ],
    productCategories: [
      {
        title: "Estate & Multi-Unit Sanitary Ware Packages",
        description:
          "High-stock wall-hung and close-coupled WCs, basins, and concealed cisterns (100 to 600+ units in stock per SKU for immediate project call-off).",
        href: "/products?category=sanitary",
      },
      {
        title: "Institutional & Hospital Sanitary Fixtures",
        description:
          "Heavy-duty commercial urinals, sensor taps, hospital-grade basins, and concealed flushing systems from Armitage Shanks, Ideal Standard, and Villeroy & Boch.",
        href: "/products?category=sanitary",
      },
      {
        title: "Commercial Plumbing & Water Heating Packages",
        description:
          "Grohe brassware, Sanit/Geberit frames, angle valves in 400+ unit quantities, and Ariston 15L–100L water heaters.",
        href: "/products?category=plumbing",
      },
      {
        title: "Project Electrical Cables & Feeder Runs",
        description:
          "Bulk coils of Coleman CTIL 1.5mm²–16mm² conduit cables and 25mm² Steel Wire Armoured (SWA) cables.",
        href: "/products?category=cables-lighting",
      },
    ],
    productFilterCategory: "all",
    brandsSupplied: [
      "Ideal Standard",
      "Grohe",
      "Villeroy & Boch",
      "Armitage Shanks",
      "Geberit",
      "Roca",
      "Varmora",
      "Sanit",
      "Ariston",
      "Coleman CTIL",
    ],
    deliveryAndInstallation: {
      heading: "How Our Contractor & Developer Trade Supply Works",
      summary:
        "From tender stage to final handover, our commercial team streamlines your MEP and finishing procurement.",
      bullets: [
        "Fast BOQ Turnaround: Send your Excel/PDF BOQ on WhatsApp or via our Quote Form for line-by-line pricing within 24 hours",
        "Value Engineering Options: We provide European luxury, mid-range European, and certified commercial alternatives to match project budgets",
        "Staged Site Call-Offs: Lock in pricing and schedule phased deliveries synced with your first-fix and second-fix site milestones",
        "Subcontract Installation: Optional certified plumbing, sanitary, and tiling installation teams for large sites",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham Trade Desk, I am a contractor/developer and need a bulk BOQ quote for...",
    faqs: [
      {
        question: "How quickly can you price a contractor Bill of Quantities (BOQ)?",
        answer:
          "Standard sanitary, plumbing, and electrical BOQs are priced within 4 to 24 hours. Send your specification list via WhatsApp (+234 803 475 0270) or our Request a Quote page.",
      },
      {
        question: "Do you hold enough stock in Lagos for large estate or institutional projects?",
        answer:
          "Yes. We hold deep inventory across core project lines—for example, hundreds of Ideal Standard Space/Playa WCs, Grohe Uniset concealed tanks, angle valves, and Coleman cable coils—and handle direct factory indent orders for bespoke specifications.",
      },
      {
        question: "What major institutional projects has Barryham supplied?",
        answer:
          "Our portfolio includes the LASU New Senate Building, Lagos HOMS Mass Housing (Ogba), Agbowa Housing Scheme, FIRS Offices (Lagos & Port Harcourt), CBN Owerri Refurbishment, Maternal & Child Centers (Lekki & Warri), and Centrion Heights (Ikeja GRA).",
      },
    ],
    relatedLandingLinks: [
      { label: "Completed Projects Portfolio", href: "/projects" },
      { label: "Authorised Partner Brands", href: "/brands" },
      { label: "Delivery & Installation", href: "/delivery-installation" },
      { label: "Request a Quote", href: "/request-quote" },
    ],
    relatedBlogGuides: [
      {
        title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
        slug: "plumbing-installation-checklist",
        summary: "Quality control checkpoints for site engineers and MEP contractors.",
      },
      {
        title: "Choosing the Right Electrical Cables for Commercial Projects in Nigeria",
        slug: "cable-selection-guide",
        summary: "Commercial voltage ratings, SWA feeder cables, and ATS sizing.",
      },
    ],
  },

  "delivery-installation": {
    slug: "delivery-installation",
    metaTitle:
      "Sanitary, Plumbing & Electrical Delivery and Installation in Lagos & Nigeria | Barryham Int’l Ltd",
    metaDescription:
      "Fast 24–48hr building materials delivery in Lagos, nationwide waybill across Nigeria, and certified plumbing, sanitary ware, tiling & electrical installation services.",
    eyebrow: "End-to-End Logistics & Certified Site Technicians",
    h1: "Sanitary, Plumbing & Electrical Delivery and Installation in Lagos & Nigeria",
    whoItIsFor:
      "For homeowners, diaspora builders, project managers, and developers who want safe site delivery and professional, leak-free installation from the same trusted company that supplies the materials.",
    introParagraphs: [
      "Buying premium Grohe, Villeroy & Boch, or Ideal Standard fixtures is only half the equation—improper handling during transit or poor installation by uncertified artisans can ruin expensive fittings. Barryham International Limited bridges that gap by offering coordinated site delivery and expert on-site installation.",
      "Whether you need next-day delivery to a renovation in Lekki or full first-fix and second-fix plumbing, sanitary, and tiling installation for a new build, our in-house logistics and technical teams stay accountable until commissioning.",
    ],
    productCategories: [
      {
        title: "First-Fix Plumbing & Concealed Frame Installation",
        description:
          "Hot/cold PPR & copper pipe routing, concealed WC cistern framing, shower mixer rough-ins, and 1.5x working-pressure testing before tiling.",
        href: "/services",
      },
      {
        title: "Second-Fix Sanitary Ware & Brassware Fitting",
        description:
          "Precision mounting of wall-hung WCs, basins, freestanding tubs, thermostatic shower systems, flush plates, and Ariston water heaters.",
        href: "/services",
      },
      {
        title: "Laser-Levelled Vitrified Floor & Wall Tiling",
        description:
          "Supply and installation of large-format bathroom, foyer, and commercial tiles with proper wet-area falls and waterproofing.",
        href: "/services",
      },
      {
        title: "Lagos Dispatch & Nationwide Crated Waybill",
        description:
          "24–48hr delivery across Lagos Mainland & Island and insured inter-state delivery to Abuja, Port Harcourt, Ibadan, Warri, Owerri, and all 36 states.",
        href: "/contact",
      },
    ],
    productFilterCategory: "all",
    brandsSupplied: [
      "Grohe",
      "Ideal Standard",
      "Villeroy & Boch",
      "Roca",
      "Geberit",
      "Ariston",
      "Coleman CTIL",
      "Varmora",
    ],
    deliveryAndInstallation: {
      heading: "Our Delivery Timelines & Installation Workflow",
      summary:
        "Clear, predictable logistics and site execution so your project stays on schedule.",
      bullets: [
        "Lagos Mainland (Agege, Ikeja, Maryland, Magodo, Alimosho, Surulere, Yaba): Same-day or 24-hour delivery",
        "Lagos Island & Axis (Victoria Island, Ikoyi, Lekki, Ajah, Epe): 24–48 hour dedicated vehicle dispatch",
        "Inter-State Nationwide Delivery: 2–5 business days via vetted haulage partners with protective crating",
        "On-Site Installation Warranty: All installations are pressure-tested and inspected before client sign-off",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham, I need a quote for Delivery and Installation for my project...",
    faqs: [
      {
        question: "Do you install products if I buy them from Barryham?",
        answer:
          "Yes! When you purchase your sanitary ware, plumbing fittings, tiles, or water heaters from Barryham Int'l Ltd, our technical team can provide a complete installation quote and execute the work on-site.",
      },
      {
        question: "How do you prevent ceramic toilets and basins from breaking during delivery?",
        answer:
          "Within Lagos, deliveries are handled by our dedicated vehicles with cushioned strapping. For inter-state deliveries (e.g., Abuja, Port Harcourt, Owerri), all vitreous china items are palletized or crated before dispatch.",
      },
      {
        question: "Can I pick up my order directly from your showroom?",
        answer:
          "Yes. Immediate customer and contractor pickup is available Monday–Saturday (8:00 AM – 6:00 PM) at both our Dopemu-Agege and Alimosho showrooms.",
      },
    ],
    relatedLandingLinks: [
      { label: "Dopemu-Agege Showroom", href: "/dopemu-showroom" },
      { label: "Alimosho Showroom", href: "/alimosho-showroom" },
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Sanitary Ware Lagos", href: "/sanitary-ware-lagos" },
    ],
    relatedBlogGuides: [
      {
        title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
        slug: "plumbing-installation-checklist",
        summary: "How we verify rough-in dimensions, drainage slopes, and pressure tests.",
      },
      {
        title: "How to Maintain Your Sanitary Fittings: A Practical Guide",
        slug: "sanitary-ware-maintenance",
        summary: "Post-installation care to keep chrome and ceramics showroom-fresh.",
      },
    ],
  },

  "dopemu-showroom": {
    slug: "dopemu-showroom",
    metaTitle:
      "Dopemu-Agege Sanitary Ware, Plumbing & Electrical Showroom | Barryham Int’l Ltd Lagos",
    metaDescription:
      "Visit Barryham Int’l Ltd Main Showroom at Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Expressway, Dopemu-Agege, Lagos. Open Mon–Sat 8am–6pm.",
    eyebrow: "Main Lagos Showroom • Cement Bus Stop, Dopemu-Agege",
    h1: "Barryham Dopemu-Agege Sanitary Ware & Building Materials Showroom",
    whoItIsFor:
      "Conveniently located for homeowners, builders, plumbers, and contractors across Ikeja, Agege, Dopemu, Ogba, Magodo, Maryland, Ilupeju, Oshodi, and Sango-Ota.",
    introParagraphs: [
      "Our flagship Dopemu-Agege showroom is located at Block B, Suite 3, Association Plaza, Cement Bus Stop, along the Lagos-Abeokuta Expressway. Walk in Monday through Saturday (8:00 AM – 6:00 PM) to inspect genuine Grohe, Villeroy & Boch, Ideal Standard, Roca, and Varmora sanitary ware alongside Ariston water heaters and Coleman CTIL cables.",
      "With easy expressway access and on-site loading space, contractors and homeowners can compare WC profiles, test mixer finishes, confirm rough-in dimensions with our sales engineers, and load stocked items immediately.",
    ],
    productCategories: [
      {
        title: "On-Display WCs, Washbasins & Bathroom Suites",
        description:
          "Compare wall-hung and close-coupled toilets from Ideal Standard, Grohe, Villeroy & Boch, and Varmora side-by-side.",
        href: "/sanitary-ware-lagos",
      },
      {
        title: "Grohe & Villeroy & Boch Brassware Counter",
        description:
          "Inspect basin mixers, concealed shower systems, rain shower heads, and bathroom accessory sets in person.",
        href: "/plumbing-fittings-lagos",
      },
      {
        title: "Concealed Cisterns & Plumbing Spares",
        description:
          "Immediate pickup for Grohe Uniset tanks, Sanit frames, flush plates, angle valves, P-traps, and drains.",
        href: "/plumbing-fittings-lagos",
      },
      {
        title: "Ariston Water Heaters & Coleman CTIL Cables",
        description:
          "Stocked 15L–100L Ariston water heaters and factory-sealed 100m coils of Coleman copper cables.",
        href: "/electrical-fittings-lagos",
      },
    ],
    productFilterCategory: "all",
    brandsSupplied: [
      "Grohe",
      "Ideal Standard",
      "Villeroy & Boch",
      "Roca",
      "Varmora",
      "Sanit",
      "Ariston",
      "Coleman CTIL",
    ],
    deliveryAndInstallation: {
      heading: "Visiting & Ordering From Our Dopemu-Agege Showroom",
      summary:
        "Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu-Agege, Lagos.",
      bullets: [
        "Opening Hours: Monday – Saturday, 8:00 AM – 6:00 PM",
        "Direct Phones: 0803 475 0270, 0808 444 6319, 0909 038 1508",
        "Instant proforma invoicing and same-day vehicle loading for contractors",
        "Fast dispatch to Ikeja GRA, Ogba, Magodo, Lekki, Victoria Island, and nationwide",
      ],
    },
    showroomInfo: {
      showroomIndex: 0,
      landmarks:
        "Located inside Association Plaza right at Cement Bus Stop on the Lagos-Abeokuta Expressway, Dopemu-Agege (5 minutes from Ikeja Along / Mangoro).",
      areasServed: [
        "Dopemu",
        "Agege",
        "Ikeja & Ikeja GRA",
        "Ogba & Ojodu Berger",
        "Magodo Phase 1 & 2",
        "Maryland & Mende",
        "Oshodi & Isolo",
        "Sango-Ota & Abeokuta Axis",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham Dopemu Showroom, I would like to check stock / visit the showroom for...",
    faqs: [
      {
        question: "What is the exact address of the Dopemu-Agege showroom?",
        answer:
          "Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu-Agege, Lagos.",
      },
      {
        question: "What are the Dopemu showroom opening hours?",
        answer:
          "We are open Monday through Saturday from 8:00 AM to 6:00 PM (closed on Sundays).",
      },
      {
        question: "Can I pay and pick up items the same day at the Dopemu showroom?",
        answer:
          "Yes. You can inspect products, receive an official invoice, make payment via transfer, and load stocked items immediately or schedule delivery to your site.",
      },
    ],
    relatedLandingLinks: [
      { label: "Alimosho Showroom", href: "/alimosho-showroom" },
      { label: "Sanitary Ware Lagos", href: "/sanitary-ware-lagos" },
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Electrical Fittings Lagos", href: "/electrical-fittings-lagos" },
    ],
    relatedBlogGuides: [
      {
        title: "How to Choose the Best Bathroom Fittings for Lagos Homes",
        slug: "best-bathroom-fittings-lagos",
        summary: "Prepare your bathroom specification list before visiting our showroom.",
      },
    ],
  },

  "alimosho-showroom": {
    slug: "alimosho-showroom",
    metaTitle:
      "Alimosho Sanitary Ware, Plumbing & Electrical Showroom (LASU-Isheri Rd) | Barryham Int’l Ltd",
    metaDescription:
      "Visit Barryham Int’l Ltd Alimosho Showroom at Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos. Open Mon–Sat 8am–6pm.",
    eyebrow: "Alimosho Showroom & Trade Desk • LASU-Isheri / Igando Road",
    h1: "Barryham Alimosho (LASU-Isheri Road) Showroom & Trade Counter",
    whoItIsFor:
      "Serving homeowners, estate developers, plumbers, and electrical contractors across Alimosho, Igando, Ikotun, Egbeda, Idimu, Isheri-Olofin, Festac, Amuwo-Odofin, Ojo, and Badagry axis.",
    introParagraphs: [
      "Located at Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, along the LASU-Isheri/Igando Road in Alimosho, our second Lagos showroom brings genuine European sanitary ware, plumbing fittings, Ariston water heaters, and Coleman cables directly to fast-growing residential and commercial corridors in West Lagos.",
      "Instead of battling traffic across town for authentic Grohe mixers, Ideal Standard WCs, or factory-sealed Coleman cables, builders in Alimosho, Igando, Egbeda, Festac, and Ojo can inspect and pick up certified stock right in their neighbourhood.",
    ],
    productCategories: [
      {
        title: "Sanitary Ware for Duplexes & Residential Estates",
        description:
          "Wall-hung and close-coupled WCs, washbasins, and bathroom suites from Ideal Standard, Varmora, Grohe, and Villeroy & Boch.",
        href: "/sanitary-ware-lagos",
      },
      {
        title: "Plumbing Mixers, Concealed Tanks & Valves",
        description:
          "Genuine Grohe taps, shower columns, concealed cisterns, flush plates, angle stop valves, and floor drains.",
        href: "/plumbing-fittings-lagos",
      },
      {
        title: "Ariston Water Heaters (15L – 100L)",
        description:
          "Borehole-ready Ariston storage and instant water heaters with complete installation accessories.",
        href: "/water-heaters-nigeria",
      },
      {
        title: "Coleman CTIL Electrical Cables",
        description:
          "1.5mm², 2.5mm², 4mm², 6mm², 10mm², 16mm², twin & earth, and armoured copper cables.",
        href: "/electrical-fittings-lagos",
      },
    ],
    productFilterCategory: "all",
    brandsSupplied: [
      "Ideal Standard",
      "Grohe",
      "Varmora",
      "Villeroy & Boch",
      "Roca",
      "Sanit",
      "Ariston",
      "Coleman CTIL",
    ],
    deliveryAndInstallation: {
      heading: "Visiting & Ordering From Our Alimosho Showroom",
      summary:
        "Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos.",
      bullets: [
        "Opening Hours: Monday – Saturday, 8:00 AM – 6:00 PM",
        "Secure parking inside the Petrocam Gas Station complex at Odo Eran / Hotel Bus-Stop",
        "Same-day delivery across Igando, Ikotun, Egbeda, Idimu, Isheri, Festac, Okota, and Ojo",
        "Direct WhatsApp stock check & proforma invoices: +234 803 475 0270",
      ],
    },
    showroomInfo: {
      showroomIndex: 1,
      landmarks:
        "Inside Petrocam Gas Station complex at Odo Eran / Hotel Bus-Stop along the LASU-Isheri / Igando Road, Alimosho, Lagos.",
      areasServed: [
        "Alimosho & Igando",
        "Ikotun & Egbeda",
        "Idimu & Iyana Ipaja",
        "Isheri-Olofin & Gowon Estate",
        "Festac Town & Amuwo-Odofin",
        "Okota & Ago Palace Way",
        "Ojo, Iba & LASU Axis",
      ],
    },
    whatsappCtaMessage:
      "Hello Barryham Alimosho Showroom, I would like to check stock / get a quote for...",
    faqs: [
      {
        question: "Where exactly is the Barryham Alimosho office located?",
        answer:
          "We are at Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos.",
      },
      {
        question: "Are prices at the Alimosho showroom the same as the Dopemu-Agege showroom?",
        answer:
          "Yes! Both Lagos locations operate under unified official Barryham retail and trade price lists, and stock can also be transferred between branches for large orders.",
      },
      {
        question: "Do you deliver to sites in Igando, Ikotun, Egbeda, Festac, and Ojo?",
        answer:
          "Yes. Because our Alimosho branch is right on the LASU-Isheri Road corridor, we offer rapid same-day or next-morning delivery to sites across Alimosho, Festac, Okota, and Ojo.",
      },
    ],
    relatedLandingLinks: [
      { label: "Dopemu-Agege Showroom", href: "/dopemu-showroom" },
      { label: "Sanitary Ware Lagos", href: "/sanitary-ware-lagos" },
      { label: "Plumbing Fittings Lagos", href: "/plumbing-fittings-lagos" },
      { label: "Water Heaters Nigeria", href: "/water-heaters-nigeria" },
    ],
    relatedBlogGuides: [
      {
        title: "The Complete Plumbing Installation Checklist for New Nigerian Builds",
        slug: "plumbing-installation-checklist",
        summary: "Use this room-by-room checklist when ordering materials for your site.",
      },
    ],
  },
};
