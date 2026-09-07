import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://autouranium.com"),
  title: {
    default: "Auto Uranium | Best Auto Detailing Studio & PPF in Prayagraj",
    template: "%s | Auto Uranium Prayagraj",
  },
  description:
    "AutoUranium (Viraj Trading - Est. 2006). Prayagraj's #1 auto detailing studio for PPF Paint Protection Film, 9H Ceramic Coating, Paint Correction, Custom Painting & Glass Tinting in Civil Lines.",
  keywords: [
    "Auto Uranium",
    "Auto Uranium Prayagraj",
    "Auto Detailing Studio Prayagraj",
    "Car Modification Prayagraj",
    "PPF Paint Protection Film Allahabad",
    "PPF Installation Prayagraj",
    "Ceramic Coating Prayagraj",
    "9H Ceramic Coating Allahabad",
    "Car Paint Restoration Civil Lines",
    "AutoUranium Viraj Trading",
    "Fix Auto Prayagraj",
    "Car Detailing Studio Maharshi Dayanand Marg",
  ],
  authors: [{ name: "Auto Uranium", url: "https://autouranium.com" }],
  creator: "DevFoxx Labs",
  publisher: "Viraj Trading",
  alternates: {
    canonical: "https://autouranium.com",
  },
  icons: {
    icon: "/images/auto_uranium_logo.jpg",
    shortcut: "/images/auto_uranium_logo.jpg",
    apple: "/images/auto_uranium_logo.jpg",
  },
  openGraph: {
    title: "Auto Uranium | Best Auto Detailing Studio & PPF in Prayagraj",
    description:
      "AutoUranium (Viraj Trading - Est. 2006). Prayagraj's premier auto detailing studio for PPF, 9H Ceramic Coating, Paint Correction, Glass Tinting & Custom Painting.",
    url: "https://autouranium.com",
    siteName: "Auto Uranium - An Auto Detailing Studio",
    images: [
      {
        url: "/images/auto_uranium_logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Auto Uranium Logo - An Auto Detailing Studio Prayagraj",
      },
      {
        url: "/images/hero_banner_full.png",
        width: 1600,
        height: 900,
        alt: "Auto Uranium Detailing Studio Workshop",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Uranium | Best Auto Detailing Studio & PPF in Prayagraj",
    description:
      "Prayagraj's premier auto detailing studio for PPF, 9H Ceramic Coating, Paint Correction & Custom Painting. Est. 2006.",
    images: ["/images/hero_banner_full.png"],
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
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Prayagraj",
    "geo.position": "25.452;81.826",
    ICBM: "25.452, 81.826",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Graph JSON-LD Structured Data
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": "https://autouranium.com/#organization",
        name: "Auto Uranium",
        alternateName: "AutoUranium - An Auto Detailing Studio",
        description: "Prayagraj's premier auto detailing studio for Paint Protection Film (PPF), 9H Ceramic Coating, Paint Correction, Custom Body Painting, and Sun Control Glass Tinting.",
        image: "https://autouranium.com/images/auto_uranium_logo.jpg",
        logo: "https://autouranium.com/images/auto_uranium_logo.jpg",
        telephone: "+91 99354 13993",
        url: "https://autouranium.com",
        sameAs: [
          "https://www.instagram.com/auto_uranium_prayagraj/",
          "https://www.facebook.com/p/Auto-uranium-100064153860788/",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "39/25, Maharshi Dayanand Marg, behind Royal Enfield Showroom, Vivek Vihar Colony, Civil Lines",
          addressLocality: "Prayagraj",
          addressRegion: "Uttar Pradesh",
          postalCode: "211001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.452,
          longitude: 81.826,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "20:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "100",
        },
        priceRange: "₹₹₹",
      },
      {
        "@type": "WebSite",
        "@id": "https://autouranium.com/#website",
        url: "https://autouranium.com",
        name: "Auto Uranium",
        publisher: {
          "@id": "https://autouranium.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://autouranium.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://autouranium.com/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "3D Studio",
            item: "https://autouranium.com/#3d-studio",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "About",
            item: "https://autouranium.com/#about",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: "https://autouranium.com/#contact",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-[#0a0a0c] text-gray-100 min-h-screen selection:bg-[#ff3847] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
