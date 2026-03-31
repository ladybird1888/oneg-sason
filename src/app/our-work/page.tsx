import Link from 'next/link';
import { ArrowRight, MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';

const programs = [
  {
    emoji: '🌱',
    category: 'Environment',
    title: 'Reforestation & Ecosystem Restoration',
    description: 'Our flagship environmental program has planted over 50 million trees across degraded landscapes in Africa, Southeast Asia, and Latin America. We work with local communities to restore biodiversity corridors and create sustainable livelihoods tied to healthy forests.',
    impact: ['50M+ trees planted', '1.2M hectares restored', '28 countries active'],
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
    color: 'border-green-500',
    regions: 'Africa, Asia, Latin America',
  },
  {
    emoji: '📚',
    category: 'Education',
    title: 'Schools Without Borders',
    description: 'We build and equip schools in remote and conflict-affected areas, train local teachers, and provide digital learning tools that connect rural students with world-class curricula. Our program has enrolled over 800,000 students since inception.',
    impact: ['800K+ students enrolled', '3,200 schools built', '42,000 teachers trained'],
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80',
    color: 'border-yellow-500',
    regions: 'Sub-Saharan Africa, South Asia',
  },
  {
    emoji: '💧',
    category: 'Water & Sanitation',
    title: 'Clean Water for Life',
    description: 'Access to clean water is a human right. Our engineers and community health workers install sustainable water systems — from solar-powered boreholes to rainwater harvesting networks — serving over 3 million people annually.',
    impact: ['3M+ people served/year', '12,000 wells drilled', '85% water quality rate'],
    image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800&q=80',
    color: 'border-blue-500',
    regions: 'East Africa, South Asia, Pacific Islands',
  },
  {
    emoji: '👩‍💼',
    category: 'Empowerment',
    title: 'Women Rising Initiative',
    description: 'Economic independence transforms communities. Through microfinance, skills training, and mentorship networks, we have supported over 280,000 women in launching sustainable small businesses and community enterprises.',
    impact: ['280K+ women supported', '$45M in microloans issued', '70% business survival rate'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    color: 'border-purple-500',
    regions: 'Global',
  },
  {
    emoji: '🏥',
    category: 'Health',
    title: 'Community Health Networks',
    description: 'Our mobile clinics, telemedicine platforms, and community health worker training programs bring preventive and primary care to the world\'s most underserved populations — often reaching areas with no healthcare access.',
    impact: ['5.2M consultations/year', '1,400 health workers trained', '60 mobile clinics'],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    color: 'border-red-500',
    regions: 'Africa, Latin America',
  },
  {
    emoji: '🌾',
    category: 'Food Security',
    title: 'Sustainable Agriculture Program',
    description: 'Using regenerative farming techniques and climate-smart agriculture, we help smallholder farmers increase yields, build resilience to climate shocks, and access fair markets — transforming food insecurity into abundance.',
    impact: ['420K farmers trained', '35% average yield increase', '90 food security zones'],
    image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=800&q=80',
    color: 'border-amber-500',
    regions: 'Africa, South Asia, Southeast Asia',
  },
];

export default function OurWorkPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-green-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1600&q=80')` }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-medium mb-4">Programs & Initiatives</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">What We Do</h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Six transformative programs. One shared mission. Millions of lives changed.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <div
                key={program.title}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm border-t-4 ${program.color} card-hover group`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-4xl">{program.emoji}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <MapPin size={12} />
                    <span>{program.regions}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-green-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {program.impact.map((stat) => (
                      <div key={stat} className="flex items-start gap-1.5">
                        <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 font-medium leading-tight">{stat}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-4 transition-all group-hover:text-yellow-600"
                  >
                    Support this program <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold mb-3">How We Work</p>
            <h2 className="font-display text-4xl font-bold text-green-900">Our Approach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Community-Led', desc: 'Every program begins with listening. Local communities define their priorities, and we provide the resources and expertise to achieve them.' },
              { icon: TrendingUp, title: 'Data-Driven', desc: 'We measure everything. Our impact metrics are independently verified and published annually in our Impact Report.' },
              { icon: CheckCircle, title: 'Sustainable by Design', desc: 'We build programs that outlast our involvement — training local leaders, using local materials, and creating locally-owned institutions.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 rounded-2xl bg-amber-50 card-hover group">
                <div className="w-16 h-16 rounded-2xl bg-green-900 flex items-center justify-center mx-auto mb-5 group-hover:bg-yellow-400 transition-colors">
                  <Icon size={28} className="text-yellow-400 group-hover:text-green-900 transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-green-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-green-900 mb-4">Fuel Our Work</h2>
          <p className="text-green-800 mb-8">Your donation directly funds these life-changing programs.</p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-green-900 text-white px-8 py-4 rounded-full font-bold hover:bg-green-800 transition-all">
            Donate Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
