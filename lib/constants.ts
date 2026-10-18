export const BUSINESS_INFO = {
  name: "Barryham International Limited",
  shortName: "Barryham Int'l Ltd",
  brandCode: "BIL",
  url: "https://barryham.site",
  canonicalUrl: "https://barryham.site/",
  email: "bihl.sales@gmail.com",
  whatsappNumber: "2348034750270",
  whatsappDisplay: "+234 803 475 0270",
  primaryPhone: "+2348034750270",
  primaryPhoneDisplay: "0803 475 0270",
  phones: [
    { raw: "+2348034750270", display: "0803 475 0270", label: "Sales & WhatsApp" },
    { raw: "+2348084446319", display: "0808 444 6319", label: "Trade & Projects" },
    { raw: "+2349090381508", display: "0909 038 1508", label: "Showroom Desk" },
  ],
  openingHours: {
    display: "Mon – Sat: 8:00 AM – 6:00 PM",
    shortDisplay: "Mon–Sat, 8am–6pm",
    schema: "Mo-Sa 08:00-18:00",
    days: "Monday – Saturday",
    time: "8:00 AM – 6:00 PM (Closed Sundays)",
  },
  socials: {
    instagram: "https://www.instagram.com/barryhamintl/",
    instagramHandle: "@barryhamintl",
  },
  showrooms: [
    {
      id: "dopemu",
      name: "Dopemu-Agege Main Showroom",
      shortName: "Dopemu Showroom",
      slug: "/dopemu-showroom",
      streetAddress:
        "Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu",
      locality: "Agege",
      region: "Lagos",
      country: "NG",
      fullAddress:
        "Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu-Agege, Lagos.",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=6.6072661,3.318393&z=17&output=embed",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Association+Plaza+Cement+Bus+Stop+Dopemu+Agege+Lagos",
      landmarks: "Directly at Cement Bus Stop along Lagos-Abeokuta Expressway, Dopemu-Agege",
    },
    {
      id: "alimosho",
      name: "Alimosho / Igando Showroom & Office",
      shortName: "Alimosho Showroom",
      slug: "/alimosho-showroom",
      streetAddress:
        "Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho",
      locality: "Igando, Alimosho",
      region: "Lagos",
      country: "NG",
      fullAddress:
        "Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho, Lagos.",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=6.5734884,3.2559822&z=17&output=embed",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Petrocam+Gas+Station+Odo+Eran+Bus+Stop+LASU+Isheri+Road+Alimosho+Lagos",
      landmarks: "Inside Petrocam Gas Station at Odo Eran / Hotel Bus-Stop, LASU-Isheri Road",
    },
  ],
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Barryham+International+Limited+Lagos",
} as const;

export const STICKY_WHATSAPP_LINK =
  "https://wa.me/2348034750270?text=Hello%20Barryham,%20I%20need%20a%20quote%20for...";

export const TRUST_BADGES = [
  {
    label: "Genuine brands",
    detail: "100% manufacturer-certified European & global fittings",
  },
  {
    label: "Lagos delivery",
    detail: "Fast dispatch across Lagos & nationwide site delivery",
  },
  {
    label: "Installation support",
    detail: "Expert plumbing, sanitary & electrical installation teams",
  },
  {
    label: "Trade supply available",
    detail: "Bulk contractor, developer & institutional pricing",
  },
] as const;

export const PROJECT_TYPES = [
  "Home",
  "Estate",
  "Hotel",
  "School",
  "Office",
  "Contractor/Bulk",
] as const;

export type ProjectUseCase = (typeof PROJECT_TYPES)[number];
