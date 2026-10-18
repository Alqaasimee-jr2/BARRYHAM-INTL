import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { FloatingCart } from "@/components/FloatingCart";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { getLocalBusinessSchema } from "@/lib/schema";

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
  title:
    "Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd",
  description:
    "Direct distributor for Ideal Standard, Armitage Shanks, Geberit, Grohe, Kohler, Reigner, Roca, Vado, Hansgrohe, Ariston Water Heater, and Coleman CTIL across Lagos and Nigeria.",
  keywords: [
    "sanitary ware supplier Lagos",
    "plumbing fittings Lagos",
    "electrical fittings Lagos",
    "bathroom fittings Nigeria",
    "water heaters Nigeria",
    "Ideal Standard Nigeria",
    "Armitage Shanks Lagos",
    "Geberit distributor Nigeria",
    "Grohe taps Nigeria",
    "Villeroy and Boch Lagos",
    "Ariston water heater Nigeria",
    "Coleman cables distributor Lagos",
    "Barryham International Limited",
  ],
  authors: [{ name: "Barryham International Limited" }],
  alternates: {
    canonical: "https://barryham.site/",
  },
  openGraph: {
    title:
      "Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd",
    description:
      "Official direct supplier for leading European & global sanitary, plumbing, water heating, and electrical manufacturers in Lagos and Nigeria.",
    url: "https://barryham.site/",
    siteName: "Barryham International Limited",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barryham International Limited — Sanitary Ware, Plumbing & Electrical Fittings Lagos",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Premium Sanitary Ware, Plumbing & Electrical Fittings in Lagos | Barryham Int’l Ltd",
    description:
      "Official direct supplier for leading European & global sanitary, plumbing, and electrical manufacturers in Nigeria.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-offwhite text-charcoal min-h-screen flex flex-col`}
      >
        <CartProvider>
          <AnalyticsProvider />
          <Nav />
          <div className="flex-grow">{children}</div>
          <Footer />
          <FloatingCart />
          <StickyWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
