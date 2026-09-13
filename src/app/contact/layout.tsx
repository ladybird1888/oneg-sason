import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OnegSason",
  description:
    "Contact OnegSason (Oneg Sason Empowerment Foundation) in Lagos. Reach us about donations, volunteering, partnerships, and community programs.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
