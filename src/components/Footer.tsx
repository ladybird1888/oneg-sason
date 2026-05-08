"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-green-950 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-yellow-400 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-green-400 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter banner */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-yellow-400 mb-1">
                Stay Connected
              </h3>
              <p className="text-green-200 text-sm">
                Get updates on our global impact, events, and opportunities.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-yellow-400 font-medium">
                <Heart size={18} />
                Thank you for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2 w-full md:w-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 md:w-72 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white/15"
                  required
                />
                <button
                  type="submit"
                  className="btn-gold px-5 py-3 rounded-full font-semibold text-sm text-white whitespace-nowrap flex items-center gap-2"
                >
                  Subscribe <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/images/logo.jpeg" alt="" width={100} height={10} />
            </Link>
            <p className="text-green-200 text-sm leading-relaxed mb-5">
              Empowering communities worldwide through education,
              sustainability, and human dignity since 2020.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-yellow-400 mb-5 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/our-work", label: "Our Work" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/impact-partners", label: "Impact & Partners" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-yellow-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display font-semibold text-yellow-400 mb-5 text-lg">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/get-involved#donate", label: "Donate Now" },
                { href: "/get-involved#volunteer", label: "Volunteer" },
                { href: "/get-involved#partnership", label: "Partner With Us" },
                { href: "/get-involved#sponsor", label: "Sponsorship" },
                { href: "/impact-partners", label: "Impact Reports" },
                { href: "/impact-partners#gallery", label: "Photo Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-yellow-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-yellow-400 mb-5 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-200 text-sm">
                <MapPin
                  size={16}
                  className="text-yellow-400 flex-shrink-0 mt-0.5"
                />
                <span>
                  49 Lambe Street Off Ago Palace Way Okota Isolo Lagos
                </span>
              </li>
              <li className="flex items-center gap-3 text-green-200 text-sm">
                <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                <span>+234 704 100 6613</span>
              </li>
              <li className="flex items-center gap-3 text-green-200 text-sm">
                <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                <span>info@onegsason.org</span>
              </li>
            </ul>
            {/* <div className="mt-6">
              <p className="text-xs text-green-400 uppercase tracking-widest mb-2">
                Registered Charity
              </p>
              <p className="text-green-200 text-sm">Reg. No: CHE-123.456.789</p>
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} Oneg Sason . All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-green-400 hover:text-yellow-400 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
