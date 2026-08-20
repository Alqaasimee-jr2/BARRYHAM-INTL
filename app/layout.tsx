import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { FloatingCart } from "@/components/FloatingCart";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barryham.site"),
  title: "Barryham Int'l Ltd | Premium Sanitary Ware & Electrical Fittings",
  description: "Direct distributor for Ideal Standard, Armitage Shanks, Geberit, Grohe, Kohler, Reigner, Roca, Vado, Hansgrohe, Ariston Water Heater, and Coleman CTIL across Lagos and Nigeria.",
  keywords: [
    "Ideal Standard Nigeria",
    "Armitage Shanks Lagos",
    "Geberit distributor",
    "Grohe taps Nigeria",
    "Kohler sanitary ware",
    "Ariston water heater Nigeria",
    "Roca sanitary fittings",
    "Vado brassware Lagos",
    "sanitary ware supplier Lagos",
    "Barryham International",
  ],
  authors: [{ name: "Barryham Int'l Ltd" }],
  alternates: {
    canonical: "https://barryham.site",
  },
  openGraph: {
    title: "Barryham Int'l Ltd | Premium Sanitary Ware & Building Materials",
    description: "Official direct supplier for leading European & global sanitary, plumbing, and electrical manufacturers in Nigeria.",
    url: "https://barryham.site",
    siteName: "Barryham Int'l Ltd",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barryham Int'l Ltd Official Distributor",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barryham Int'l Ltd | Premium Sanitary Ware & Building Materials",
    description: "Official direct supplier for leading European & global sanitary, plumbing, and electrical manufacturers in Nigeria.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Barryham Int'l Ltd",
    description: "Direct distributor & installer for Ideal Standard, Armitage Shanks, Geberit, Grohe, Kohler, Reigner, Roca, Vado, Hansgrohe, Ariston Water Heater, and Coleman CTIL.",
    url: "https://barryham.site",
    email: "bihl.sales@gmail.com",
    telephone: ["+2348034750270", "+2348084446319", "+2349090381508"],
    sameAs: [
      "https://www.instagram.com/barryhamintl/"
    ],
    location: [
      {
        "@type": "Place",
        "name": "Main Showroom",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Block B, Suite 3, Association Plaza, Cement Bus Stop, Lagos-Abeokuta Express Way, Dopemu",
          "addressLocality": "Agege",
          "addressRegion": "Lagos",
          "addressCountry": "NG"
        }
      },
      {
        "@type": "Place",
        "name": "Alimosho Office",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop, Along LASU-Isheri/Igando Road, Alimosho",
          "addressLocality": "Igando",
          "addressRegion": "Lagos",
          "addressCountry": "NG"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} antialiased bg-offwhite text-charcoal min-h-screen flex flex-col`}>
        <CartProvider>
          <Nav />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <FloatingCart />
        </CartProvider>
      </body>
    </html>
  );
}
