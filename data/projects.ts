export type ProjectSector =
  | "Government"
  | "Hospital"
  | "Residential"
  | "Corporate";

export interface Project {
  id: string;
  name: string;
  location: string;
  client: string;
  sector: ProjectSector;
}

export const projects: Project[] = [
  // Government
  {
    id: "gov-1",
    name: "Lagos State University New Senate Building",
    location: "IBA, Lagos",
    client: "CCECC",
    sector: "Government",
  },
  {
    id: "gov-2",
    name: "Lagos Homs (Mass Housing Scheme)",
    location: "Sogunro, Ogba, Lagos",
    client: "LSDPC",
    sector: "Government",
  },
  {
    id: "gov-3",
    name: "Agbowa Housing Scheme",
    location: "Agbowa, Ikorodu, Lagos",
    client: "Min. Of Physical Planning & Urban Dev.",
    sector: "Government",
  },
  {
    id: "gov-4",
    name: "Federal Inland Revenue Service",
    location: "Akowonjo, Lagos",
    client: "Forstech Nig. Ltd.",
    sector: "Government",
  },
  {
    id: "gov-5",
    name: "Federal Inland Revenue Services New Office",
    location: "Moscow Road, Port-Hacourt, Rivers",
    client: "Customs Realities",
    sector: "Government",
  },
  {
    id: "gov-6",
    name: "Central Bank Of Nigeria Refurbishment",
    location: "Owerri, Imo",
    client: "Sermatech Nig. Ltd.",
    sector: "Government",
  },
  {
    id: "gov-7",
    name: "Agege Stadium",
    location: "Agege, Lagos",
    client: "Fak Construction Nig. Ltd",
    sector: "Government",
  },
  {
    id: "gov-8",
    name: "Abesan Sports Complex",
    location: "Abesan Estate Ipaja, Lagos",
    client: "Plycon Ltd.",
    sector: "Government",
  },
  {
    id: "gov-9",
    name: "New Protocol And Pilot Lounge",
    location: "Ph Int. Airport, Omagwa, Port Harcourt, Rivers",
    client: "Faan-Petmoz Nig. Ltd",
    sector: "Government",
  },

  // Hospital
  {
    id: "hosp-1",
    name: "Maternal And Child Center (Hospital)",
    location: "Lekki, Lagos",
    client: "Deux Project Ltd.",
    sector: "Hospital",
  },
  {
    id: "hosp-2",
    name: "Maternal And Child Center (Hospital)",
    location: "Ogombo Road, Lekki, Lagos",
    client: "Deux Project Ltd.",
    sector: "Hospital",
  },
  {
    id: "hosp-3",
    name: "Maternal And Child Center (Hospital)",
    location: "Warri, Delta",
    client: "Nego Construction Ltd.",
    sector: "Hospital",
  },
  {
    id: "hosp-4",
    name: "School Of Nursing Hostel",
    location: "Alimosho General Hospital, Lagos",
    client: "Aron Nig. Ltd.",
    sector: "Hospital",
  },
  {
    id: "hosp-5",
    name: "West African College Of Surgeon Building",
    location: "Yaba, Lagos",
    client: "Debour Nig. Ltd.",
    sector: "Hospital",
  },

  // Residential
  {
    id: "res-1",
    name: "Centrion Heights (Luxury Terrace)",
    location: "Ladoke & Esugbayi Street, Ikeja GRA, Lagos",
    client: "Royal Sanderton Groups",
    sector: "Residential",
  },
  {
    id: "res-2",
    name: "Rainbow Town Estate (15 Floors)",
    location: "Trans Amadi, Port- Harcourt, Rivers",
    client: "Debour Nig. Ltd.",
    sector: "Residential",
  },
  {
    id: "res-3",
    name: "Residential Development",
    location: "Okota, Lagos",
    client: "Penniel Capitals Ltd",
    sector: "Residential",
  },
  {
    id: "res-4",
    name: "Luxury Block Of Flats (13-Floors)",
    location: "Isale Igangan, Lagos Island, Lagos",
    client: "Anatolia Construction Ltd.",
    sector: "Residential",
  },

  // Corporate
  {
    id: "corp-1",
    name: "Multi Agency Office Complex",
    location: "Alausa, Ikeja, Lagos",
    client: "Basscom/Palmyra",
    sector: "Corporate",
  },
  {
    id: "corp-2",
    name: "Jubilee-Life Savings & Loans Ltd Office",
    location: "Bishop Oluwolle Street, V.I, Lagos",
    client: "Fast Approach Konstruction (Fak) Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-3",
    name: "Chartered Institute Of Personal Management House",
    location: "Cipm Avenue, Alausa, Lagos",
    client: "Debour Nig. Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-4",
    name: "Nigerian Insitute Of Journalism Hq",
    location: "Idowu Taylor Street, V.I, Lagos",
    client: "Debour Nig. Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-5",
    name: "A.R Smith Place (Office Complex)",
    location: "Omoleye Street, Yaba, Lagos",
    client: "Hos Consult Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-6",
    name: "Oracle Office Development",
    location: "Maitama, Abuja",
    client: "Mayssa Int Nig. Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-7",
    name: "Asiyahu Abewon Place",
    location: "Obanikoro, Ikorodu Road, Lagos",
    client: "W.a Kareem & Associates",
    sector: "Corporate",
  },
  {
    id: "corp-8",
    name: "Ptdf Skill Acquisition Centre",
    location: "Omagwa, Port-Harcourt, Rivers",
    client: "Keat Palms Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-9",
    name: "Lighthouse Christian Centre",
    location: "Kudirat Abiola Way, Oregun, Lagos",
    client: "Lcc Building Committee",
    sector: "Corporate",
  },
  {
    id: "corp-10",
    name: "La Casera Factory",
    location: "Coker-Orile, Lagos",
    client: "Palmyra Construction Nig. Ltd.",
    sector: "Corporate",
  },
  {
    id: "corp-11",
    name: "Skye Bank",
    location: "Minna, Niger",
    client: "Oshea Projects Ltd.",
    sector: "Corporate",
  },
];
