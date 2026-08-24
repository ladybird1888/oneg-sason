import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oneg Sason Empowerment Foundation — a faith-driven nonprofit restoring hope and dignity to vulnerable communities across Africa.",
};
import { values } from "@/lib/constants";

const team = [
  {
    name: "Dr. Amina Osei",
    role: "Founder & CEO",
    image:
      "/images/community-2.jpeg",
  },
  {
    name: "Carlos Mendez",
    role: "Director of Programs",
    image:
      "/images/community-3.jpeg",
  },
  {
    name: "Priya Sharma",
    role: "Head of Partnerships",
    image:
      "/images/community-4.jpeg",
  },
  {
    name: "James Okafor",
    role: "Chief Impact Officer",
    image:
      "/images/community-6.jpeg",
  },
];

const milestones = [
  { year: "2005", event: "Founded in Geneva with 12 team members" },
  { year: "2008", event: "Launched first clean water project in Kenya" },
  { year: "2012", event: "Reached 1 million beneficiaries globally" },
  { year: "2016", event: "Expanded to 80+ countries" },
  { year: "2020", event: "COVID relief effort: 500,000 families supported" },
  { year: "2024", event: "2.4 million lives transformed, 140+ countries" },
];

export default function AboutPage() {
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
            About Oneg Sason Empowerment Foundation
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Who We Are
          </h1>
          <p className="text-green-200 text-xl leading-relaxed max-w-2xl mx-auto">
            Oneg Sason is a faith-based organization dedicated to supporting and
            empowering vulnerable communities through compassionate service and
            practical assistance.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/community-5.jpeg"
                  alt="Our team in the field"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl font-bold text-green-900 mb-6 leading-tight">
                From a Moment of Service to a Mission of Hope
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                In 2020, amidst the silence of the global lockdown, a clear call
                was heard: to feed the hungry and comfort those in distress.
                What began as a singular, compassionate response to the
                hardships of COVID-19—intended to be a one-time outreach—became
                the birth of Oneg Sason.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We quickly realized that the needs of our community extended far
                beyond a single season of crisis. What started as a journey to
                care for a few has blossomed into a lifelong commitment to the
                many.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Seven years later, our footprint has grown, but our heart
                remains the same. Today, Oneg Sason is more than an emergency
                response; it is a holistic vision for the future. By focusing on
                Education, Health, and Community Empowerment, we work tirelessly
                to restore joy, ignite hope, and uphold the inherent dignity of
                every human being we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-900 text-white p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-400/10 translate-x-1/3 -translate-y-1/3" />
              <Eye size={40} className="text-yellow-400 mb-6" />
              <h3 className="font-display text-3xl font-bold text-yellow-400 mb-5">
                Our Vision
              </h3>
              <p className="text-green-100 text-lg leading-relaxed">
                To see vulnerable communities restored to lives of dignity,
                hope, and joy, where individuals experience God’s love, walk in
                peace, and become channels of light, compassion, and restoration
                to others.
              </p>
            </div>
            <div className="bg-yellow-400 p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-green-900/10 -translate-x-1/3 translate-y-1/3" />
              <Target size={40} className="text-green-900 mb-6" />
              <h3 className="font-display text-3xl font-bold text-green-900 mb-5">
                Our Mission
              </h3>
              <p className="text-green-900/80 text-lg leading-relaxed">
                Oneg Sason exists to demonstrate God's love through tangible
                action. We are committed to alleviating hunger, protecting
                vulnerable children, improving healthcare access, and empowering
                communities. Our mission includes supporting missionary outreach
                to spread the Gospel, executed through the "Fruit of the
                Spirit": love, joy, peace, patience, kindness, goodness,
                faithfulness, gentleness, and self-control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">
              What Guides Us
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-7 rounded-xl border border-gray-100 hover:border-yellow-400 transition-colors bg-white group"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4 group-hover:bg-yellow-400/40 transition-colors">
                  <Icon size={22} className="text-yellow-600" />
                </div>
                <h3 className="font-serif font-semibold text-green-900 text-xl mb-2 group-hover:text-yellow-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">
              Leadership
            </p>
            <h2 className="font-display text-4xl font-bold text-green-900">
              Meet Our Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role, image }) => (
              <div key={name} className="text-center group card-hover">
                <div className="relative mb-5 overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-green-900 mb-1">
                  {name}
                </h3>
                <p className="text-yellow-600 text-sm font-medium">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-yellow-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-green-900 mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-green-800 mb-8">
            Join the movement. Every contribution, every hour volunteered, every
            partnership formed — it all matters.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            Get Involved <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
