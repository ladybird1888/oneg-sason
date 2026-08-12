import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Oneg Sason Empowerment Foundation | Empowerment through hope",
    template: "%s | Oneg Sason Empowerment Foundation",
  },
  description:
    "A Oneg Sason Empowerment Foundation dedicated to community development, human empowerment, and supporting vulnerable families.",
  keywords: [
    "foundation",
    "non-profit",
    "charity",
    "community development",
    "sustainability",
    "education",
    "healthcare",
    "volunteer",
  ],
  openGraph: {
    type: "website",
    siteName: "Oneg Sason Empowerment Foundation",
    images: [
      {
        url: "/images/hero.jpg",
      },
    ],
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
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
