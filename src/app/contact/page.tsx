'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, CheckCircle } from 'lucide-react';

const offices = [
  {
    city: 'Geneva',
    country: 'Switzerland',
    flag: '🇨🇭',
    address: '123 Foundation Way, Geneva, CH-1200',
    phone: '+41 22 123 4567',
    email: 'europe@globalroots.org',
    type: 'Global Headquarters',
    hours: 'Mon–Fri: 9:00–18:00 CET',
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    flag: '🇰🇪',
    address: '45 Uhuru Highway, Westlands, Nairobi',
    phone: '+254 20 123 4567',
    email: 'africa@globalroots.org',
    type: 'Africa Regional Office',
    hours: 'Mon–Fri: 8:00–17:00 EAT',
  },
  {
    city: 'New York',
    country: 'USA',
    flag: '🇺🇸',
    address: '250 Park Avenue, New York, NY 10177',
    phone: '+1 212 123 4567',
    email: 'americas@globalroots.org',
    type: 'Americas Office',
    hours: 'Mon–Fri: 9:00–18:00 EST',
  },
  {
    city: 'Bangkok',
    country: 'Thailand',
    flag: '🇹🇭',
    address: '88 Sukhumvit Road, Bangkok 10110',
    phone: '+66 2 123 4567',
    email: 'asia@globalroots.org',
    type: 'Asia Pacific Office',
    hours: 'Mon–Fri: 9:00–18:00 ICT',
  },
];

const faqs = [
  { q: 'How can I track how my donation is used?', a: 'We publish annual impact reports and provide quarterly donor updates. Donors above $1,000 receive personalized impact statements.' },
  { q: 'Are donations tax-deductible?', a: 'Yes, GlobalRoots Foundation is a registered charitable organization in Switzerland, the USA, and Kenya. Tax receipts are issued automatically.' },
  { q: 'How do I apply for a grant or program funding?', a: 'Visit our Programs page and submit an inquiry through the Partnership form. Our grants team reviews applications quarterly.' },
  { q: 'Can I designate my donation to a specific program?', a: 'Yes! You can specify a program during donation checkout, and we will direct 100% of designated funds to that initiative.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-green-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')` }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-medium mb-4">We'd Love to Hear From You</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, want to collaborate, or just want to say hello — we're here for you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold text-green-900 mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 rounded-3xl p-12 text-center">
                  <CheckCircle size={60} className="text-green-500 mx-auto mb-5" />
                  <h3 className="font-display text-2xl font-bold text-green-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll respond within 1–2 business days.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-green px-6 py-3 rounded-full text-white font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input type="text" required className="input-field" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input type="text" required className="input-field" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="input-field" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select required className="input-field">
                      <option value="">Select a topic</option>
                      <option>General Inquiry</option>
                      <option>Donation Question</option>
                      <option>Volunteer Inquiry</option>
                      <option>Partnership Proposal</option>
                      <option>Media & Press</option>
                      <option>Grant Application</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 w-4 h-4 accent-green-600" />
                    <span className="text-sm text-gray-600">
                      I agree to GlobalRoots Foundation's{' '}
                      <a href="#" className="text-green-700 underline">Privacy Policy</a>.
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="btn-green w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-green-900 mb-5">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">General Inquiries</p>
                      <p className="text-sm">hello@globalroots.org</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-yellow-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Main Line</p>
                      <p className="text-sm">+41 22 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={18} className="text-amber-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">HQ Address</p>
                      <p className="text-sm">123 Foundation Way, Geneva, Switzerland CH-1200</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Business Hours</p>
                      <p className="text-sm">Mon–Fri: 9:00–18:00 CET</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-bold text-green-900 mb-4">Follow Our Journey</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { Icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                    { Icon: Twitter, label: 'Twitter / X', color: 'hover:bg-sky-500' },
                    { Icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                    { Icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                    { Icon: Youtube, label: 'YouTube', color: 'hover:bg-red-600' },
                  ].map(({ Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 ${color} hover:text-white text-gray-700 text-sm font-medium transition-all duration-200`}
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div>
                <h3 className="font-display text-xl font-bold text-green-900 mb-4">Find Us</h3>
                <div className="rounded-2xl overflow-hidden border-2 border-gray-100 h-48 relative bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={36} className="text-green-700 mx-auto mb-2" />
                    <p className="text-green-800 font-semibold text-sm">Geneva, Switzerland</p>
                    <a
                      href="https://maps.google.com/?q=Geneva,+Switzerland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 underline mt-1 block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">Global Presence</p>
            <h2 className="font-display text-4xl font-bold text-green-900">Our Offices</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-white rounded-2xl p-6 card-hover shadow-sm border border-amber-100 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-green-900 group-hover:text-yellow-600 transition-colors">{office.city}</h3>
                    <p className="text-xs text-yellow-600 font-semibold">{office.type}</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-green-600 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-green-600 flex-shrink-0" />
                    <span className="text-green-700 hover:underline cursor-pointer">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-green-600 flex-shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">Quick Answers</p>
            <h2 className="font-display text-4xl font-bold text-green-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-amber-50 rounded-2xl overflow-hidden border border-amber-100">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-amber-100 transition-colors"
                >
                  <h3 className="font-semibold text-green-900 pr-4">{q}</h3>
                  <span className={`text-yellow-600 font-bold text-xl transition-transform duration-200 flex-shrink-0 ${expandedFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
