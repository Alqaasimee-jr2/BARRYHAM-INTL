import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

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
  title: "Barryham Int'l Ltd | Premium Fittings & Sanitary Ware",
  description: "BIL supplies and installs genuine sanitary ware, electricals, and interior finishes across Lagos, Agege, Igando, and all of Nigeria.",
  keywords: ["sanitary ware", "fittings", "electricals", "interior finishes", "Nigeria", "Barryham", "bathroom fittings"],
  authors: [{ name: "Barryham Int'l Ltd" }],
  openGraph: {
    title: "Barryham Int'l Ltd | Premium Fittings & Sanitary Ware",
    description: "BIL supplies and installs genuine sanitary ware, electricals, and interior finishes across Lagos, Agege, Igando, and all of Nigeria.",
    url: "https://barryham.site",
    siteName: "Barryham Int'l Ltd",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barryham Int'l Ltd | Premium Fittings & Sanitary Ware",
    description: "BIL supplies and installs genuine sanitary ware, electricals, and interior finishes across Lagos, Agege, Igando, and all of Nigeria.",
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
    description: "BIL supplies and installs genuine sanitary ware, electricals, and interior finishes across Lagos, Agege, Igando, and all of Nigeria.",
    url: "https://barryham.site",
    email: "bihl.sales@gmail.com",
    telephone: ["+2348034750270", "+2348084446319", "+2349090381508"],
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
        </CartProvider>
      </body>
    </html>
  );
}
