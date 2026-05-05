"use client";

import { useState } from "react";
import {
  Heart,
  Users,
  Building2,
  Star,
  CheckCircle,
  ArrowRight,
  Handshake,
} from "lucide-react";

const sponsorshipTiers = [
  {
    level: "Gold",
    amount: "$50,000+",
    color: "tier-gold",
    textColor: "text-yellow-700",
    iconColor: "text-yellow-500",
    benefits: [
      "Premier logo placement on all materials",
      "Dedicated impact report",
      "VIP event invitations (4 guests)",
      "Named program sponsorship",
      "Annual CEO meeting",
      "Social media feature campaign",
      "Tax receipt & recognition plaque",
    ],
  },
  {
    level: "Silver",
    amount: "$25,000+",
    color: "tier-silver",
    textColor: "text-gray-700",
    iconColor: "text-gray-500",
    benefits: [
      "Logo on website and annual report",
      "Quarterly impact updates",
      "VIP event invitations (2 guests)",
      "Project co-branding opportunity",
      "Social media mention",
      "Tax receipt & recognition certificate",
    ],
  },
  {
    level: "Bronze",
    amount: "$10,000+",
    color: "tier-bronze",
    textColor: "text-amber-700",
    iconColor: "text-amber-600",
    benefits: [
      "Logo in annual report",
      "Semi-annual impact updates",
      "Event invitation (1 guest)",
      "Social media shoutout",
      "Tax receipt",
    ],
  },
];

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const volunteerRoles = [
  "Education & Mentoring",
  "Environmental Projects",
  "Health Outreach",
  "Community Development",
  "Fundraising Events",
  "Digital & Marketing",
  "Legal & Finance",
  "Administrative Support",
];

export default function GetInvolvedPage() {
  const [donationAmount, setDonationAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const toggleRole = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role],
    );
  };

  const handleSubmit = (formType: string) => (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(formType);
    setTimeout(() => setSubmitted(null), 4000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-green-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-medium mb-4">
            Take Action
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            There are many ways to join the GlobalRoots family — choose the path
            that resonates with you.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { label: "Donate", href: "#donate", icon: Heart },
              { label: "Volunteer", href: "#volunteer", icon: Users },
              { label: "Partnership", href: "#partnership", icon: Handshake },
              { label: "Sponsorship", href: "#sponsor", icon: Star },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Heart size={26} className="text-red-500" />
            </div>
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-2">
              Give Today
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900 mb-3">
              Make a Donation
            </h2>
            <p className="text-gray-600">
              Every dollar goes directly to programs that transform lives.
            </p>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 shadow-sm">
            {/* Frequency */}
            <div className="flex gap-3 mb-8 bg-white rounded-2xl p-1.5 w-fit mx-auto">
              {(["once", "monthly"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setDonationType(type)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm capitalize transition-all ${
                    donationType === type
                      ? "bg-green-700 text-white shadow-md"
                      : "text-gray-600 hover:text-green-700"
                  }`}
                >
                  {type === "once" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>

            {/* Amount selector */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setDonationAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-xl font-bold text-lg transition-all ${
                    donationAmount === amount && !customAmount
                      ? "bg-yellow-400 text-green-900 shadow-md scale-105"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-400"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                $
              </span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setDonationAmount(null);
                }}
                className="input-field pl-8"
              />
            </div>

            {/* Impact calculator */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
              💡 <strong>${customAmount || donationAmount || 100}</strong>{" "}
              {donationType === "monthly" ? "/month " : ""} can{" "}
              {(customAmount
                ? parseInt(customAmount)
                : donationAmount || 100) >= 500
                ? "fund a full clean water installation for a family of five."
                : (customAmount
                      ? parseInt(customAmount)
                      : donationAmount || 100) >= 100
                  ? "provide school supplies for 10 students for an entire year."
                  : "plant 5 trees and support local reforestation efforts."}
            </div>

            <button
              onClick={() => alert("Redirecting to secure payment gateway...")}
              className="btn-gold w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
            >
              <Heart size={20} />
              Donate{" "}
              {customAmount
                ? `$${customAmount}`
                : donationAmount
                  ? `$${donationAmount}`
                  : ""}{" "}
              {donationType === "monthly" ? "Monthly" : "Now"}
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">
              🔒 Secure payment · Tax-deductible · All currencies accepted
            </p>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="py-20 bg-amber-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Users size={26} className="text-green-600" />
            </div>
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-2">
              Give Your Time
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900 mb-3">
              Volunteer With Us
            </h2>
            <p className="text-gray-600">
              Join 35,000+ volunteers making a daily difference around the
              world.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            {submitted === "volunteer" ? (
              <div className="text-center py-10">
                <CheckCircle
                  size={50}
                  className="text-green-500 mx-auto mb-4"
                />
                <h3 className="font-display text-2xl font-bold text-green-900 mb-2">
                  Application Received!
                </h3>
                <p className="text-gray-600">
                  Our volunteer coordinator will reach out within 2 business
                  days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit("volunteer")} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
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
                    required
                    className="input-field"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country / Location
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Lagos, Nigeria"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {volunteerRoles.map((role) => (
                      <label
                        key={role}
                        className="flex items-center gap-2 p-3 rounded-xl border cursor-pointer hover:bg-green-50 transition-colors group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedRoles.includes(role)}
                          onChange={() => toggleRole(role)}
                          className="w-4 h-4 accent-green-600"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-green-700">
                          {role}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <select className="input-field">
                    <option>Part-time (weekends)</option>
                    <option>Part-time (evenings)</option>
                    <option>Full-time (3+ months)</option>
                    <option>Remote only</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Introduction
                  </label>
                  <textarea
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell us about yourself and why you want to volunteer..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-green w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section id="partnership" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Handshake size={26} className="text-blue-600" />
            </div>
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-2">
              Collaborate
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900 mb-3">
              Partner With Us
            </h2>
            <p className="text-gray-600">
              We welcome partnerships with NGOs, corporations, governments, and
              academic institutions.
            </p>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 shadow-sm">
            {submitted === "partnership" ? (
              <div className="text-center py-10">
                <CheckCircle
                  size={50}
                  className="text-green-500 mx-auto mb-4"
                />
                <h3 className="font-display text-2xl font-bold text-green-900 mb-2">
                  Inquiry Submitted!
                </h3>
                <p className="text-gray-600">
                  Our partnerships team will respond within 3 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit("partnership")}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select required className="input-field">
                      <option value="">Select type</option>
                      <option>Corporation</option>
                      <option>NGO / Non-profit</option>
                      <option>Government Agency</option>
                      <option>Academic Institution</option>
                      <option>Foundation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Head of CSR"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Partnership Interest
                  </label>
                  <select className="input-field">
                    <option>Education Programs</option>
                    <option>Women Empowerment</option>
                    <option>Health Programs</option>
                    <option>General / Multiple</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="input-field resize-none"
                    placeholder="Describe your organization's goals and how you envision partnering with GlobalRoots..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-green w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Building2 size={20} />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP */}
      {/* <section id="sponsor" className="py-20 bg-green-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-3">Corporate Investment</p>
            <h2 className="font-display text-4xl font-bold text-white mb-3">Sponsorship Tiers</h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Make a meaningful corporate investment in humanity while gaining powerful brand visibility and stakeholder goodwill.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorshipTiers.map(({ level, amount, color, textColor, iconColor, benefits }) => (
              <div key={level} className={`rounded-3xl p-8 card-hover ${color}`}>
                <div className="text-center mb-6">
                  <Star size={36} className={`mx-auto mb-3 ${iconColor}`} />
                  <h3 className={`font-display text-3xl font-bold ${textColor} mb-1`}>{level}</h3>
                  <p className={`text-2xl font-bold ${textColor} opacity-80`}>{amount}</p>
                  <p className="text-gray-600 text-sm">per year</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className={`flex-shrink-0 mt-0.5 ${iconColor}`} />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#partnership"
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${
                    level === 'Gold'
                      ? 'bg-yellow-500 hover:bg-yellow-400 text-white shadow-lg'
                      : level === 'Silver'
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-amber-600 hover:bg-amber-500 text-white'
                  }`}
                >
                  Become a {level} Sponsor
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-green-300 mt-8 text-sm">
            Custom packages available for extraordinary commitments. <a href="#partnership" className="text-yellow-400 underline">Contact us</a>.
          </p>
        </div>
      </section> */}
    </div>
  );
}
