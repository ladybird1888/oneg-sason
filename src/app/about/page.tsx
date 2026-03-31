import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const team = [
  { name: 'Dr. Amina Osei', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80' },
  { name: 'Carlos Mendez', role: 'Director of Programs', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Priya Sharma', role: 'Head of Partnerships', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'James Okafor', role: 'Chief Impact Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
];

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We lead with empathy, placing human dignity at the center of everything we do.', color: 'bg-red-50 text-red-600' },
  { icon: Target, title: 'Accountability', desc: 'We measure what matters, report honestly, and remain transparent with our stakeholders.', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Globe, title: 'Inclusivity', desc: 'We celebrate diversity and ensure our programs uplift all people, regardless of background.', color: 'bg-green-50 text-green-600' },
  { icon: Award, title: 'Excellence', desc: 'We pursue the highest standards in program delivery, governance, and impact.', color: 'bg-blue-50 text-blue-600' },
  { icon: Users, title: 'Collaboration', desc: 'We believe lasting change happens when communities, governments, and NGOs work together.', color: 'bg-purple-50 text-purple-600' },
  { icon: Eye, title: 'Vision', desc: 'We dare to imagine a world free from poverty, inequality, and environmental destruction.', color: 'bg-amber-50 text-amber-600' },
];

const milestones = [
  { year: '2005', event: 'Founded in Geneva with 12 team members' },
  { year: '2008', event: 'Launched first clean water project in Kenya' },
  { year: '2012', event: 'Reached 1 million beneficiaries globally' },
  { year: '2016', event: 'Expanded to 80+ countries' },
  { year: '2020', event: 'COVID relief effort: 500,000 families supported' },
  { year: '2024', event: '2.4 million lives transformed, 140+ countries' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-green-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')` }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-medium mb-4">About GlobalRoots</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Who We Are
          </h1>
          <p className="text-green-200 text-xl leading-relaxed max-w-2xl mx-auto">
            A global family united by the belief that every person deserves a life of opportunity, safety, and belonging.
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
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
                  alt="Our team in the field"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-yellow-400 rounded-2xl p-6 shadow-xl">
                <p className="font-display text-4xl font-bold text-white">20+</p>
                <p className="text-yellow-900 text-sm font-semibold">Years Strong</p>
              </div>
            </div>
            <div>
              <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">Our Story</p>
              <h2 className="font-display text-4xl font-bold text-green-900 mb-6 leading-tight">
                Born from a Shared Dream
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                GlobalRoots Foundation was born in 2005 when twelve changemakers from across the globe gathered in Geneva with one conviction: that community-led solutions, supported by global resources, could transform the world.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Two decades later, our network spans 140+ countries. We work with local leaders, governments, corporations, and passionate individuals to design programs that are truly rooted in the communities they serve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach is holistic — addressing education, health, environment, and economic opportunity simultaneously — because lasting change requires addressing the full complexity of human need.
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
              <h3 className="font-display text-3xl font-bold text-yellow-400 mb-5">Our Vision</h3>
              <p className="text-green-100 text-lg leading-relaxed">
                A world where every person — regardless of where they were born — has access to clean water, quality education, economic opportunity, and a healthy environment. A world where communities thrive together.
              </p>
            </div>
            <div className="bg-yellow-400 p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-green-900/10 -translate-x-1/3 translate-y-1/3" />
              <Target size={40} className="text-green-900 mb-6" />
              <h3 className="font-display text-3xl font-bold text-green-900 mb-5">Our Mission</h3>
              <p className="text-green-900/80 text-lg leading-relaxed">
                To empower communities worldwide by delivering sustainable programs in education, environmental restoration, clean water access, and economic development — always guided by local knowledge, driven by data, and measured by real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">What Guides Us</p>
            <h2 className="font-display text-4xl font-bold text-green-900">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border border-gray-100 card-hover bg-white shadow-sm group"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-green-900 mb-3 group-hover:text-yellow-600 transition-colors">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-3">Our Journey</p>
            <h2 className="font-display text-4xl font-bold">20 Years of Impact</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-yellow-400/30" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center">
                    <span className="text-yellow-400 font-bold text-xs">{year}</span>
                  </div>
                  <div className="pt-3 pb-3 pl-2">
                    <p className="text-green-100 font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">Leadership</p>
            <h2 className="font-display text-4xl font-bold text-green-900">Meet Our Team</h2>
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
                <h3 className="font-display font-bold text-xl text-green-900 mb-1">{name}</h3>
                <p className="text-yellow-600 text-sm font-medium">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-green-900 mb-4">Be Part of Our Story</h2>
          <p className="text-green-800 mb-8">Join the movement. Every contribution, every hour volunteered, every partnership formed — it all matters.</p>
          <Link href="/get-involved" className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold transition-all">
            Get Involved <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
