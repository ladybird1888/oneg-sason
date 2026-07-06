"use client";

import { useState } from "react";

const galleryImages = [
  {
    src: "/images/community-1.jpeg",
    alt: "Community gathering",
    category: "2024",
    event: "Annual Forum",
  },
  {
    src: "/images/community-2.jpeg",
    alt: "Education program",
    category: "2024",
    event: "Schools Launch",
  },
  {
    src: "/images/community-3.jpeg",
    alt: "Reforestation",
    category: "2023",
    event: "Forest Drive",
  },
  {
    src: "/images/community-4.jpeg",
    alt: "Volunteer team",
    category: "2024",
    event: "Field Work",
  },
  {
    src: "/images/community-5.jpeg",
    alt: "Women program",
    category: "2023",
    event: "Women Rising",
  },
  {
    src: "/images/community-6.jpeg",
    alt: "Water project",
    category: "2022",
    event: "Water Access",
  },
  {
    src: "/images/community-1.jpeg",
    alt: "Students",
    category: "2023",
    event: "Education",
  },
  {
    src: "/images/community-2.jpeg",
    alt: "Community build",
    category: "2024",
    event: "Build-a-Thon",
  },
  {
    src: "/images/community-3.jpeg",
    alt: "Clean water",
    category: "2022",
    event: "Water Drive",
  },
];

const years = ["All", "2024", "2023", "2022"];

export default function ImpactPartnersPage() {
  const [activeYear, setActiveYear] = useState("All");

  const filteredImages =
    activeYear === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeYear);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-green-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-medium mb-4">
            Our Impact
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Impact & Gallery
          </h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Explore stories and moments from the field.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">
              From the Field
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900 mb-5">
              Photo Gallery
            </h2>
            {/* Year filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeYear === year
                      ? "bg-yellow-400 text-green-900 shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-amber-100"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="masonry-grid">
            {filteredImages.map(({ src, alt, event, category }, i) => (
              <div
                key={i}
                className="masonry-item rounded-2xl overflow-hidden shadow-sm card-hover group cursor-pointer relative"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    height:
                      i % 3 === 0 ? "300px" : i % 3 === 1 ? "220px" : "260px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="bg-yellow-400 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      {category}
                    </span>
                    <p className="text-white font-semibold mt-1">{event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
