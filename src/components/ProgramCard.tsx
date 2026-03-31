import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

interface ProgramCardProps {
  emoji: string;
  category: string;
  title: string;
  description: string;
  impact: string[];
  image: string;
  regions: string;
  borderColor: string;
  href?: string;
}

export default function ProgramCard({
  emoji, category, title, description,
  impact, image, regions, borderColor, href = '/get-involved',
}: ProgramCardProps) {
  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-sm border-t-4 ${borderColor} card-hover group`}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 text-4xl">{emoji}</div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
          <MapPin size={11} />
          <span>{regions}</span>
        </div>
        <h3 className="font-display font-bold text-2xl text-green-900 mb-3 group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {impact.map((stat) => (
            <div key={stat} className="flex items-start gap-1.5">
              <CheckCircle size={13} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-gray-600 font-medium leading-tight">{stat}</span>
            </div>
          ))}
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold group-hover:text-yellow-600 hover:gap-4 transition-all"
        >
          Support this program <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
