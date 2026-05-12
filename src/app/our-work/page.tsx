import Link from 'next/link';
import { ArrowRight, MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';

const programs = [
  {
    emoji: '🌱',
    category: 'Environment',
    title: 'Combating Hunger and Food Insecurity',
    description: 'We support street dwellers and vulnerable communities by providing nutritious meals and essential food supplies. We also assist widows with regular food support, helping to ease the impact of economic hardship on families and communities.',
    impact: ['50M+ trees planted', '1.2M hectares restored', '28 countries active'],
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
    color: 'border-green-500',
    regions: 'Africa, Asia, Latin America',
  },
  {
    emoji: '📚',
    category: 'Education',
    title: 'Supporting Child Education and Future Opportunities',
    description: 'We are committed to helping children from vulnerable communities gain access to quality education, learning materials, and opportunities that promote literacy, personal growth, and renewed hope for a brighter future.',
    impact: ['800K+ students enrolled', '3,200 schools built', '42,000 teachers trained'],
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80',
    color: 'border-yellow-500',
    regions: 'Sub-Saharan Africa, South Asia',
  },
  {
    emoji: '💧',
    category: 'Water & Sanitation',
    title: 'Expanding Access to Healthcare',
    description: 'Our programs are dedicated to improving access to quality healthcare for widows and people in vulnerable communities. We also support continued access to essential medications and medical care for individuals managing chronic health conditions.',
    impact: ['3M+ people served/year', '12,000 wells drilled', '85% water quality rate'],
    image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800&q=80',
    color: 'border-blue-500',
    regions: 'East Africa, South Asia, Pacific Islands',
  },
  {
    emoji: '👩‍💼',
    category: 'Empowerment',
    title: 'Empowering Communities with Dignity',
    description: 'We are committed to empowering men and women in vulnerable communities with opportunities and support for sustainable living. Through this, we help restore dignity, stability, and hope to individuals and families.',
    impact: ['280K+ women supported', '$45M in microloans issued', '70% business survival rate'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    color: 'border-purple-500',
    regions: 'Global',
  },
  {
    emoji: '🏥',
    category: 'Health',
    title: 'Advancing Faith-Based and Missionary Outreach',
    description: 'We believe in the holistic transformation of individuals and communities through faith and compassion. This is why we support missionaries and outreach initiatives that share the Gospel, foster spiritual growth, and bring hope, healing, and wholeness to lives and communities.',
    impact: ['5.2M consultations/year', '1,400 health workers trained', '60 mobile clinics'],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    color: 'border-red-500',
    regions: 'Africa, Latin America',
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
          
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-200 group" style={{ background: 'linear-gradient(135deg, #f9fafb 60%, #f3f4f6 100%)' }}
              >
                <div className="p-8">
                  <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-block mb-3">
                    {program.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-green-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.description}</p>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all group-hover:text-yellow-600"
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
              <div key={title} className="text-center p-8 rounded-2xl bg-amber-50 border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-200 group">
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
