import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.compactName,
    description: BRAND.description,
    start_url: "/",
    display: "standalone",
    background_color: "#14532d",
    theme_color: "#14532d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
