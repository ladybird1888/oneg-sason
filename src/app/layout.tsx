import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GlobalRoots Foundation | Building a Better World Together",
    template: "%s | GlobalRoots Foundation",
  },
  description:
    "A global foundation dedicated to community development, environmental sustainability, and human empowerment across 140+ countries since 2005.",
  keywords: [
    "foundation",
    "non-profit",
    "charity",
    "community development",
    "sustainability",
    "education",
    "clean water",
    "volunteer",
  ],
  openGraph: {
    type: "website",
    siteName: "GlobalRoots Foundation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
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
