"use client";

import { useState, useEffect, useRef } from "react";
import {
  Heart,
  Users,
  Building2,
  Star,
  CheckCircle,
  Handshake,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

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

const donationAmounts: Record<"NGN" | "EUR", number[]> = {
  NGN: [25000, 50000, 100000, 250000, 500000, 1000000],
  EUR: [25, 50, 100, 250, 500, 1000],
};

const volunteerRoles = [
  "Education & Mentoring",
  "Health Outreach",
  "Community Development",
  "Fundraising Events",
  "Digital & Marketing",
  "Legal & Finance",
  "Administrative Support",
];

export default function GetInvolvedPage() {
  const [donationAmount, setDonationAmount] = useState<number | null>(
    donationAmounts.NGN[0],
  );
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [donationCurrency, setDonationCurrency] = useState<"NGN" | "EUR">("NGN");
  const [donationLoading, setDonationLoading] = useState(false);
  const [donorEmail, setDonorEmail] = useState("");
  const [donorName, setDonorName] = useState("");
  const [flutterTxRef, setFlutterTxRef] = useState("");
  const [showDonateThankYou, setShowDonateThankYou] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const flutterInitRef = useRef(false);

  const currencySymbol = donationCurrency === "NGN" ? "\u20A6" : "\u20AC";

  const formatNumber = (n: number) => n.toLocaleString("en-US");

  const displayAmount = () => {
    const n = customAmount ? parseInt(customAmount) : donationAmount ?? 0;
    return n ? formatNumber(n) : "";
  };

  const flutterConfig = flutterTxRef
    ? {
        public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
        tx_ref: flutterTxRef,
        amount: customAmount ? parseInt(customAmount) : donationAmount || 100,
        currency: donationCurrency,
        payment_options:
          donationCurrency === "NGN"
            ? "card,mobilemoney,ussd,banktransfer"
            : "card",
        customer: {
          email: donorEmail || "donor@onegsason.org",
          name: donorName || "Anonymous Donor",
          phone_number: "00000000000",
        },
        customizations: {
          title: "Oneg Sason Donation",
          description:
            donationType === "monthly"
              ? "Monthly donation"
              : "One-time donation",
        },
      }
    : null;

  const handleFlutterPayment = useFlutterwave(flutterConfig as any);

  useEffect(() => {
    if (flutterTxRef && flutterInitRef.current) {
      flutterInitRef.current = false;
      handleFlutterPayment({
        callback: async (response) => {
          if (response.status === "successful") {
            const finalAmount = customAmount
              ? parseInt(customAmount)
              : donationAmount || 100;
            try {
              await fetch("/api/flutterwave/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  transaction_id: response.transaction_id,
                  tx_ref: response.tx_ref,
                  amount: finalAmount,
                  donationType,
                  currency: donationCurrency,
                  email: donorEmail || null,
                }),
              });
            } catch {
              // donation still recorded by webhook/admin
            }
            setShowDonateThankYou(true);
            setDonationLoading(false);
          }
          closePaymentModal();
        },
        onClose: () => {
          setDonationLoading(false);
          setFlutterTxRef("");
        },
      });
    }
  }, [flutterTxRef]);

  const [volunteerForm, setVolunteerForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    introduction: "",
  });
  const [volunteerLoading, setVolunteerLoading] = useState(false);

  const [partnerForm, setPartnerForm] = useState({
    organizationName: "",
    organizationType: "",
    contactName: "",
    jobTitle: "",
    email: "",
    areaOfInterest: "Education Programs",
    message: "",
  });
  const [partnerLoading, setPartnerLoading] = useState(false);

  const toggleRole = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role],
    );
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerLoading(true);
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...volunteerForm, areasOfInterest: selectedRoles }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to submit application. Please try again.");
        return;
      }
      setSubmitted("volunteer");
      setVolunteerForm({ firstName: "", lastName: "", email: "", country: "", introduction: "" });
      setSelectedRoles([]);
      setTimeout(() => setSubmitted(null), 4000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setVolunteerLoading(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerLoading(true);
    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnerForm),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to submit inquiry. Please try again.");
        return;
      }
      setSubmitted("partnership");
      setPartnerForm({ organizationName: "", organizationType: "", contactName: "", jobTitle: "", email: "", areaOfInterest: "Education Programs", message: "" });
      setTimeout(() => setSubmitted(null), 4000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setPartnerLoading(false);
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
            Take Action
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            There are many ways to join the Oneg Sason Empowerment Foundation
            family — choose the path that resonates with you.
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
              Every contribution goes directly to programs that transform lives.
            </p>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 shadow-sm">
            {showDonateThankYou ? (
              <div className="text-center py-10">
                <CheckCircle
                  size={50}
                  className="text-green-500 mx-auto mb-4"
                />
                <h3 className="font-display text-2xl font-bold text-green-900 mb-2">
                  Thank You for Your Donation!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your generosity will transform lives. A receipt has been sent
                  to your email.
                </p>
                <button
                  onClick={() => {
                    setShowDonateThankYou(false);
                    setCustomAmount("");
                    setDonationAmount(100);
                    setDonorEmail("");
                    setDonorName("");
                    setDonationCurrency("NGN");
                  }}
                  className="btn-green px-6 py-3 rounded-xl text-white font-bold"
                >
                  Make Another Donation
                </button>
              </div>
            ) : (
              <>
                {/* Frequency & Currency */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                  <div className="flex gap-1 bg-white rounded-2xl p-1.5">
                    {(["once", "monthly"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setDonationType(type)}
                        className={`px-5 py-2 rounded-xl font-semibold text-sm capitalize transition-all ${
                          donationType === type
                            ? "bg-green-700 text-white shadow-md"
                            : "text-gray-600 hover:text-green-700"
                        }`}
                      >
                        {type === "once" ? "One-Time" : "Monthly"}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-1 bg-white rounded-2xl p-1.5">
                    {(["NGN", "EUR"] as const).map((cur) => (
                      <button
                        key={cur}
                        onClick={() => {
                          setDonationCurrency(cur);
                          setDonationAmount(donationAmounts[cur][0]);
                          setCustomAmount("");
                        }}
                        className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                          donationCurrency === cur
                            ? "bg-yellow-400 text-green-900 shadow-md"
                            : "text-gray-600 hover:text-yellow-600"
                        }`}
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount selector */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {donationAmounts[donationCurrency].map((amount) => (
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
                      {currencySymbol}
                      {formatNumber(amount)}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                    {currencySymbol}
                  </span>
                  <input
                    type="number"
                    placeholder={`Enter custom amount in ${donationCurrency}`}
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setDonationAmount(null);
                    }}
                    style={{ paddingLeft: "2.75rem" }}
                    className="input-field"
                  />
                </div>

                {/* Donor info */}
                <div className="space-y-3 mb-4">
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Your email for receipt (optional)"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Impact calculator */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
                  <strong>
                    {currencySymbol}
                    {displayAmount() || "100"}
                  </strong>{" "}
                  {donationType === "monthly" ? "/month " : ""} can{" "}
                  {(customAmount
                    ? parseInt(customAmount)
                    : donationAmount || 100) >=
                    (donationCurrency === "NGN" ? 1000000 : 500)
                    ? "help provide a family with food, healthcare, and school supplies for a whole month."
                    : (customAmount
                        ? parseInt(customAmount)
                        : donationAmount || 100) >=
                        (donationCurrency === "NGN" ? 100000 : 100)
                      ? "put nutritious meals on the table for vulnerable families and keep children in school."
                      : "go a long way to support a family with food and essential care."}
                </div>

                <button
                  onClick={() => {
                    const finalAmount = customAmount
                      ? parseInt(customAmount)
                      : donationAmount;
                    if (!finalAmount || finalAmount < 1) return;
                    setDonationLoading(true);
                    flutterInitRef.current = true;
                    setFlutterTxRef(
                      `OSEF-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                    );
                  }}
                  disabled={donationLoading}
                  className="btn-gold w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {donationLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Heart size={20} />
                  )}
                  {donationLoading
                    ? "Opening..."
                    : "Donate " +
                      currencySymbol +
                      (displayAmount() || "") +
                      " " +
                      (donationType === "monthly" ? "Monthly" : "Now")}
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  <ExternalLink size={12} className="inline mr-1" />
                  Powered by Flutterwave · Secure payment
                </p>
              </>
            )}
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
              Join the team of our volunteers.
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
              <form onSubmit={handleVolunteerSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.firstName}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, firstName: e.target.value })}
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
                      value={volunteerForm.lastName}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, lastName: e.target.value })}
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
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
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
                    value={volunteerForm.country}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, country: e.target.value })}
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
                    Brief Introduction
                  </label>
                  <textarea
                    rows={4}
                    value={volunteerForm.introduction}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, introduction: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Tell us about yourself and why you want to volunteer..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={volunteerLoading}
                  className="btn-green w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {volunteerLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Users size={20} />
                  )}
                  {volunteerLoading ? "Submitting..." : "Submit Application"}
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
                onSubmit={handlePartnerSubmit}
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
                      value={partnerForm.organizationName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, organizationName: e.target.value })}
                      className="input-field"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select
                      required
                      className="input-field"
                      value={partnerForm.organizationType}
                      onChange={(e) => setPartnerForm({ ...partnerForm, organizationType: e.target.value })}
                    >
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
                      value={partnerForm.contactName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
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
                      value={partnerForm.jobTitle}
                      onChange={(e) => setPartnerForm({ ...partnerForm, jobTitle: e.target.value })}
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
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Partnership Interest
                  </label>
                  <select
                    className="input-field"
                    value={partnerForm.areaOfInterest}
                    onChange={(e) => setPartnerForm({ ...partnerForm, areaOfInterest: e.target.value })}
                  >
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
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Describe your organization's goals and how you envision partnering with Oneg Sason Empowerment Foundation..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={partnerLoading}
                  className="btn-green w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {partnerLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Building2 size={20} />
                  )}
                  {partnerLoading ? "Submitting..." : "Submit Inquiry"}
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
