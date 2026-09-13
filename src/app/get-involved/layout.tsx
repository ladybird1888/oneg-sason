import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate, volunteer, or partner with OnegSason (Oneg Sason Empowerment Foundation). Support community development, education, and healthcare.",
  alternates: {
    canonical: "/get-involved",
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
