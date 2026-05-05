"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart, Users } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/impact-partners", label: "Impact & Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/images/logo.jpeg" alt="" width={100} height={10} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium nav-link transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-green-700"
                    : "text-white/90 hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved#volunteer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                scrolled
                  ? "border-green-600 text-green-700 hover:bg-green-50"
                  : "border-white/60 text-white hover:bg-white/10"
              }`}
            >
              <Users size={15} />
              Get Involved
            </Link>
            <Link
              href="/get-involved#donate"
              className="btn-gold flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md"
            >
              <Heart size={15} />
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
                <Link
                  href="/get-involved#volunteer"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-full border-2 border-green-600 text-green-700 font-semibold text-sm"
                >
                  Get Involved
                </Link>
                <Link
                  href="/get-involved#donate"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-full btn-gold text-white font-semibold text-sm"
                >
                  Donate Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
