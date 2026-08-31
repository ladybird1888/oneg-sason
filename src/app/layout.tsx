import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://onegsason.org"),
  title: {
    default: "Oneg Sason Empowerment Foundation | Empowerment through hope",
    template: "%s | Oneg Sason Empowerment Foundation",
  },
  description:
    "Oneg Sason Empowerment Foundation is a faith-driven charity transforming lives through community development, education, healthcare, and supporting vulnerable families.",
  keywords: [
    "Oneg Sason",
    "Oneg Sason Foundation",
    "Oneg Sason Empowerment Foundation",
    "onegsason",
    "charity in Nigeria",
    "non-profit",
    "foundation",
    "community development",
    "education",
    "healthcare",
    "donate",
    "volunteer",
  ],
  applicationName: "Oneg Sason Empowerment Foundation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Oneg Sason Empowerment Foundation",
    title: "Oneg Sason Empowerment Foundation | Empowerment through hope",
    description:
      "A faith-driven charity transforming lives through community development, education, and healthcare. Donate today.",
    url: "https://onegsason.org",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Oneg Sason Empowerment Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oneg Sason Empowerment Foundation",
    description:
      "A faith-driven charity transforming lives through community development, education, and healthcare. Donate today.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Oneg Sason Empowerment Foundation",
              alternateName: "Oneg Sason",
              url: "https://onegsason.org",
              logo: "https://onegsason.org/images/logo.jpeg",
              image: "https://onegsason.org/images/hero.jpg",
              description:
                "A faith-driven, community-centered charity empowering vulnerable families through education, healthcare, and food support.",
              foundingDate: "2020",
              nonprofitStatus: "Nonprofit501c3",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Oneg Sason Empowerment Foundation",
              alternateName: "Oneg Sason",
              url: "https://onegsason.org",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
