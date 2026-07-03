"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );

      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

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
            We'd Love to Hear From You
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, want to collaborate, or just want to
            say hello — we're here for you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold text-green-900 mb-8">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-green-50 rounded-3xl p-12 text-center">
                  <CheckCircle
                    size={60}
                    className="text-green-500 mx-auto mb-5"
                  />
                  <h3 className="font-display text-2xl font-bold text-green-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll respond within 1–2
                    business days.
                  </p>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 accent-green-600"
                    />
                    <span className="text-sm text-gray-600">
                      I agree to Oneg Sason Empowerment Foundation's{" "}
                      <a href="#" className="text-green-700 underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-green w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-green-900 mb-5">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        General Inquiries
                      </p>
                      <p className="text-sm">info@onegsason.org</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-yellow-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        Main Line
                      </p>
                      <p className="text-sm">+234 704 100 6613</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={18} className="text-amber-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        HQ Address
                      </p>
                      <p className="text-sm">
                        49 Lambe Street Off Ago Palace Way Okota Isolo Lagos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        Business Hours
                      </p>
                      <p className="text-sm">Mon–Fri: 9:00–18:00 WAT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-bold text-green-900 mb-4">
                  Follow Our Journey
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      Icon: Twitter,
                      label: "Twitter / X",
                      color: "hover:bg-sky-500",
                    },
                    {
                      Icon: Instagram,
                      label: "Instagram",
                      color: "hover:bg-pink-600",
                    },
                    {
                      Icon: Linkedin,
                      label: "LinkedIn",
                      color: "hover:bg-blue-700",
                    },
                    {
                      Icon: Youtube,
                      label: "YouTube",
                      color: "hover:bg-red-600",
                    },
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

              {/* <div>
                <h3 className="font-display text-xl font-bold text-green-900 mb-4">
                  Find Us
                </h3>
                <div className="rounded-2xl overflow-hidden border-2 border-gray-100 h-48 relative bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={36} className="text-green-700 mx-auto mb-2" />
                    <p className="text-green-800 font-semibold text-sm">
                      Okota Isolo Lagos
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/6.4263508,3.4548019/49+Lambe+Iluyomade+Ave,+Ilasamaja,+Lagos+102214,+Lagos/@6.4920026,3.2985465,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b8ee418d8fdc3:0xf131132d43753525!2m2!1d3.3047554!2d6.5092787?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 underline mt-1 block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
