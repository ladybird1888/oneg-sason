import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Heart,
  Users,
  HeartPulse,
  ChevronDown,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { values } from "./about/page";

const programs = [
  {
    icon: "🌱",
    title: " Feeding Hope",
    desc: "Combating Hunger and Food Insecurity",
    color: "border-green-400",
  },
  {
    icon: "📚",
    title: "Education for All",
    desc: "Supporting Child Education and Future Opportunities",
    color: "border-yellow-400",
  },
  {
    icon: "⛑️",
    title: "Clean Water Access",
    desc: "Expanding Access to Healthcare",
    color: "border-blue-400",
  },
  {
    icon: "🤝",
    title: "Empowerment",
    desc: "Empowering Communities with Dignity",
    color: "border-purple-400",
  },
  {
    icon: "✝️",
    title: "Faith in Action Mission",
    desc: "Advancing Faith-Based and Missionary Outreach",
    color: "border-red-400",
  },
];

const impactStats = [
  {
    number: 3200,
    suffix: "+",
    label: "Fed street dwellers and people in vulnerable communities ",
    icon: Users,
  },
  {
    number: 300,
    suffix: "+",
    label: "Supported widows with food supplies",
    icon: Heart,
  },
  {
    number: 50,
    suffix: "+",
    label: "Supported patients with their medical bills",
    icon: HeartPulse,
  },
  // { number: 35000, suffix: "+", label: "Volunteers Worldwide", icon: Users },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=80')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full border border-yellow-400/20 animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full border border-yellow-400/10 animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-44 h-44 rounded-full border border-white/10 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-24">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-300 text-sm font-medium">
              Empowering communities since 2005
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Rooted in <span className="text-yellow-400">Humanity,</span>
            <br />
            Growing <span className="text-green-300">Together.</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            GlobalRoots Foundation connects communities, restores ecosystems,
            and empowers millions of people to build lives of dignity and
            purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="btn-gold px-8 py-4 rounded-full font-bold text-white text-lg flex items-center justify-center gap-2 shadow-xl"
            >
              Join the Movement <ArrowRight size={20} />
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 rounded-full font-semibold text-white text-lg border-2 border-white/40 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Globe size={20} /> Explore Our Work
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-5 text-white/60 text-xs uppercase tracking-widest">
            <span>✦ UN SDG Champion 2023</span>
            <span>✦ 140+ Countries</span>
            <span>✦ 4-Star Rated</span>
            <span>✦ 94% to Programs</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* IMPACT COUNTER */}
      <section className="bg-green-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-sm font-medium uppercase tracking-widest mb-2">
              Our Reach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Impact at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {impactStats.map(({ number, suffix, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                  <Icon size={24} className="text-yellow-400" />
                </div>
                <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={number} suffix={suffix} />
                </div>
                <p className="text-green-200 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-green-900 mb-6 leading-tight">
                A Movement of Hope & Healing
              </h2>
              <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                Oneg Sason is a faith-driven, community-centered organization
                committed to uplifting vulnerable and disadvantaged individuals,
                especially women, children, widows, orphans, and street
                dwellers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Through acts of compassion and service, we work to restore
                dignity and hope by addressing immediate needs while empowering
                individuals to build better futures.
              </p>
              {/* <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { label: "94%", sub: "Funds to Programs" },
                  { label: "4★", sub: "Charity Navigator" },
                  { label: "A+", sub: "Transparency Rating" },
                ].map(({ label, sub }) => (
                  <div
                    key={sub}
                    className="bg-amber-50 rounded-xl px-5 py-3 border border-amber-100"
                  >
                    <div className="font-display text-2xl font-bold text-yellow-600">
                      {label}
                    </div>
                    <div className="text-xs text-gray-600">{sub}</div>
                  </div>
                ))}
              </div> */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 btn-green px-6 py-3 rounded-full text-white font-semibold"
              >
                Our Full Story <ArrowRight size={17} />
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Community"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Field work"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-44">
                  <img
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&q=80"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Education"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-44 mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Team"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-2xl px-6 py-4 shadow-xl text-center whitespace-nowrap">
                <p className="font-display text-3xl font-bold text-white">6+</p>
                <p className="text-yellow-900 text-xs font-semibold uppercase tracking-wide">
                  Years of Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900 mb-4">
              Our Key Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From environmental restoration to education and clean water, our
              programs address the most pressing challenges facing humanity
              today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`bg-white rounded-2xl p-7 card-hover shadow-sm border-b-4 ${program.color} cursor-pointer group`}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-display font-bold text-green-900 text-lg mb-3 group-hover:text-yellow-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.desc}
                </p>
                {/* <div className="mt-5 flex items-center gap-2 text-green-700 text-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </div> */}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/our-work"
              className="btn-green inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold"
            >
              View All Programs <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <Testimonials /> */}

      {/* GLOBAL IMPACT MAP */}
      {/* <GlobalImpactMap /> */}

      {/* CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-600 text-sm font-semibold uppercase tracking-widest mb-3">
                What Drives Us
              </p>
              <h2 className="font-display text-4xl font-bold text-green-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                These four pillars guide every decision we make, every program
                we design, and every partnership we form. They are not
                aspirations — they are commitments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map(({ title, desc }, i) => (
                  <div
                    key={title}
                    className="p-5 rounded-2xl bg-amber-50 border border-amber-100 group card-hover"
                  >
                    <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center mb-3 group-hover:bg-yellow-400/40 transition-colors">
                      <span className="text-yellow-600 font-bold font-display">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-green-900 mb-1 group-hover:text-yellow-600 transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Community values"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
                  <p className="font-display text-lg font-bold text-yellow-400 mb-1">
                    Our Promise
                  </p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    We will always put communities first, report honestly, and
                    never stop pushing for a more just and sustainable world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      {/* <LatestNews /> */}

      {/* FINAL CTA */}
      <section className="py-24 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-900/10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-green-800/70 uppercase tracking-widest text-sm font-semibold mb-4">
            The Time is Now
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 mb-6 leading-tight">
            Ready to Make a Difference?
          </h2>
          <p className="text-green-800 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you donate, volunteer, or partner with us — every action
            creates ripples of change that span the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved#donate"
              className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <Heart size={20} /> Donate Today
            </Link>
            <Link
              href="/get-involved#volunteer"
              className="bg-white/80 hover:bg-white text-green-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <Users size={20} /> Become a Volunteer
            </Link>
            <Link
              href="/get-involved#partnership"
              className="border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
