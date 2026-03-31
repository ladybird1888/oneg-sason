'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Heart, ArrowRight } from 'lucide-react';

export default function StickyDonateBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 600) {
        setVisible(true);
      } else if (window.scrollY < 400) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-green-900 border-t-2 border-yellow-400 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
              <Heart size={16} className="text-yellow-400" />
            </div>
            <span className="text-sm font-medium">
              <span className="text-yellow-400 font-bold">12 people</span> donated in the last hour.
              <span className="hidden sm:inline text-green-300 ml-1">Every dollar changes lives.</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/get-involved#donate"
              className="btn-gold px-5 py-2 rounded-full text-white text-sm font-bold flex items-center gap-1.5 whitespace-nowrap"
            >
              Donate Now <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="text-green-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
