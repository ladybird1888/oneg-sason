export const SITE_URL = "https://www.onegsason.org";

export const BRAND = {
  name: "Oneg Sason Empowerment Foundation",
  shortName: "Oneg Sason",
  compactName: "OnegSason",
  legalName: "Oneg Sason Empowerment Foundation",
  domain: "onegsason.org",
  email: "info@onegsason.org",
  phone: "+2347041006613",
  foundingDate: "2020",
  description:
    "OnegSason (Oneg Sason Empowerment Foundation) is a faith-driven charity transforming lives through community development, education, healthcare, and supporting vulnerable families.",
  alternateNames: [
    "OnegSason",
    "Oneg Sason",
    "OnegSason Empowerment Foundation",
    "Oneg Sason Foundation",
    "OnegSason Foundation",
    "onegsason",
    "oneg sason",
  ],
  keywords: [
    "OnegSason",
    "Oneg Sason",
    "OnegSason Empowerment Foundation",
    "Oneg Sason Empowerment Foundation",
    "OnegSason Foundation",
    "Oneg Sason Foundation",
    "onegsason.org",
    "onegsason",
    "charity in Nigeria",
    "non-profit Nigeria",
    "faith-based foundation",
    "community development",
    "education",
    "healthcare",
    "donate",
    "volunteer",
  ],
} as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    alternateName: [...BRAND.alternateNames],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.jpeg`,
      caption: `${BRAND.compactName} — ${BRAND.name}`,
    },
    image: `${SITE_URL}/images/hero.jpg`,
    description: BRAND.description,
    foundingDate: BRAND.foundingDate,
    email: BRAND.email,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "29, Aderemi Akeju Street off Deeper life church Hq Soluyi Gbagada",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: BRAND.email,
      telephone: BRAND.phone,
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND.name,
    alternateName: [...BRAND.alternateNames],
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}
