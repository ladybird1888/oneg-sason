import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Gallery",
  description:
    "See OnegSason (Oneg Sason Empowerment Foundation) impact stories, partners, and photo gallery from communities we serve.",
  alternates: {
    canonical: "/impact-partners",
  },
};

export default function ImpactPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
