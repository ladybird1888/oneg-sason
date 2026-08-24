import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://onegsason.org";
  return [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/our-work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/get-involved`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/impact-partners`, changeFrequency: "monthly", priority: 0.6 },
  ];
}