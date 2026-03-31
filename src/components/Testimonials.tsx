'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "GlobalRoots changed everything for our village. We now have clean water, our children go to school, and my women's cooperative has grown to 40 members. I never dreamed life could be this different.",
    name: "Fatima Al-Hassan",
    role: "Cooperative Leader",
    location: "Northern Nigeria",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    program: "Women Rising Initiative",
  },
  {
    quote: "Our school had no roof and no teachers just three years ago. Today, 280 students come every morning. The GlobalRoots team didn't just build walls — they built futures for our entire community.",
    name: "Emmanuel Osei",
    role: "School Principal",
    location: "Rural Ghana",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    program: "Schools Without Borders",
  },
  {
    quote: "I used to walk 4 hours every day just to collect water. Now a clean borehole is 200 meters from my home. That time I save — I spend it learning to read, starting a garden, living.",
    name: "Amara Diallo",
    role: "Mother & Community Member",
    location: "Southern Senegal",
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=200&q=80",
    program: "Clean Water for Life",
  },
  {
    quote: "As a corporate partner, we've witnessed firsthand how GlobalRoots operates — with total transparency, genuine community ownership, and measurable results. It's the partnership we're most proud of.",
    name: "Sarah Chen",
    role: "Head of CSR",
    location: "EcoTech Inc, Singapore",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    program: "Corporate Partner",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-widest mb-3">Real Stories</p>
          <h2 className="font-display text-4xl font-bold text-green-900">Voices from the Field</h2>
        </div>

        <div className="relative bg-gradient-to-br from-green-900 to-green-800 rounded-3xl overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-yellow-400/10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-green-500/20 -translate-x-1/3 translate-y-1/3" />

          <div className="relative grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                key={current.image}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-top"
                style={{ transition: 'opacity 0.4s ease' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 lg:hidden">
                <span className="bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
                  {current.program}
                </span>
              </div>
            </div>

            {/* Quote side */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="hidden lg:block mb-4">
                  <span className="bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full border border-yellow-400/30">
                    {current.program}
                  </span>
                </div>
                <Quote size={36} className="text-yellow-400/40 mb-4" />
                <blockquote className="font-display text-xl text-white leading-relaxed mb-6">
                  "{current.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <p className="font-bold text-yellow-400">{current.name}</p>
                    <p className="text-green-300 text-sm">{current.role}</p>
                    <p className="text-green-400 text-xs">{current.location}</p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === index ? 'w-6 h-2.5 bg-yellow-400' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-green-900 hover:bg-yellow-300 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
