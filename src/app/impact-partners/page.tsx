"use client";

import { useState } from "react";
import { Download, BarChart2, FileText, TrendingUp, Award } from "lucide-react";

const sponsors = [
  { name: "Global Corp", logo: "🌐" },
  { name: "EcoTech Inc", logo: "🌿" },
  { name: "HumanFirst", logo: "❤️" },
  { name: "BrightFutures", logo: "⭐" },
  { name: "Unity Bank", logo: "🏦" },
  { name: "GreenEnergy", logo: "⚡" },
  { name: "WorldBridge", logo: "🌉" },
  { name: "CareGroup", logo: "🤝" },
  { name: "NovaTech", logo: "🚀" },
  { name: "PeaceWorks", logo: "🕊️" },
  { name: "AquaFund", logo: "💧" },
  { name: "LightPath", logo: "✨" },
];

const reports = [
  {
    year: "2024",
    title: "Annual Impact Report 2024",
    size: "4.2 MB",
    highlight: "2.4M lives impacted across 140 countries",
    stats: [
      { label: "Total Beneficiaries", value: "2.4M", icon: "👥" },
      { label: "Funds Deployed", value: "$82M", icon: "💰" },
      { label: "Programs Active", value: "850", icon: "🎯" },
      { label: "Countries", value: "140+", icon: "🌍" },
    ],
  },
  {
    year: "2023",
    title: "Annual Impact Report 2023",
    size: "3.8 MB",
    highlight: "1.9M lives impacted, 12 new programs launched",
    stats: [
      { label: "Total Beneficiaries", value: "1.9M", icon: "👥" },
      { label: "Funds Deployed", value: "$71M", icon: "💰" },
      { label: "Programs Active", value: "720", icon: "🎯" },
      { label: "Countries", value: "128", icon: "🌍" },
    ],
  },
  {
    year: "2022",
    title: "Annual Impact Report 2022",
    size: "3.5 MB",
    highlight: "Post-COVID recovery efforts & 1.5M beneficiaries",
    stats: [
      { label: "Total Beneficiaries", value: "1.5M", icon: "👥" },
      { label: "Funds Deployed", value: "$58M", icon: "💰" },
      { label: "Programs Active", value: "610", icon: "🎯" },
      { label: "Countries", value: "110", icon: "🌍" },
    ],
  },
];

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
  const [expandedReport, setExpandedReport] = useState<string | null>("2024");

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
            Transparency & Proof
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Impact & Partners
          </h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            See the data behind our work, meet our partners, and explore stories
            from the field.
          </p>
        </div>
      </section>

      {/* SPONSOR / PARTNER WALL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">
              Our Community
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900">
              Partners & Supporters
            </h2>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden mb-8">
            <div className="carousel-track flex gap-6 w-max">
              {[...sponsors, ...sponsors].map(({ name, logo }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-24 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:border-yellow-400 hover:bg-amber-50 transition-all cursor-pointer group"
                >
                  <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">
                    {logo}
                  </div>
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-green-800">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid of logos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {sponsors.map(({ name, logo }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-amber-50 hover:bg-yellow-100 border border-amber-100 hover:border-yellow-300 transition-all card-hover group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {logo}
                </div>
                <span className="text-xs text-gray-600 font-medium text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT REPORTS */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">
              Accountability
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900">
              Impact Reports
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Every year we publish a comprehensive report detailing exactly how
              donations are used and lives are changed.
            </p>
          </div>
          <div className="space-y-5">
            {reports.map((report) => (
              <div
                key={report.year}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  onClick={() =>
                    setExpandedReport(
                      expandedReport === report.year ? null : report.year,
                    )
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-amber-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                      <FileText size={22} className="text-yellow-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-bold text-xl text-green-900">
                        {report.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {report.highlight}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">{report.size}</span>
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-green px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                    >
                      <Download size={14} />
                      PDF
                    </a>
                  </div>
                </button>
                {expandedReport === report.year && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                      {report.stats.map(({ label, value, icon }) => (
                        <div
                          key={label}
                          className="bg-amber-50 rounded-xl p-4 text-center"
                        >
                          <div className="text-2xl mb-1">{icon}</div>
                          <div className="font-display text-2xl font-bold text-green-900">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Infographic bar chart */}
                    <div className="mt-6 bg-green-900 rounded-xl p-6 text-white">
                      <div className="flex items-center gap-2 mb-5">
                        <BarChart2 size={18} className="text-yellow-400" />
                        <h4 className="font-display font-semibold text-yellow-400">
                          Fund Allocation {report.year}
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: "Program Delivery", pct: 78 },
                          { label: "Field Operations", pct: 12 },
                          { label: "Admin & Governance", pct: 5 },
                          { label: "Fundraising", pct: 5 },
                        ].map(({ label, pct }) => (
                          <div key={label} className="flex items-center gap-3">
                            <span className="text-green-200 text-xs w-36 flex-shrink-0">
                              {label}
                            </span>
                            <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-green-400"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-yellow-400 text-xs font-bold w-8">
                              {pct}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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
