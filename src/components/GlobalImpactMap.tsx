import AnimatedCounter from './AnimatedCounter';
import { TrendingUp, Award, Users, Globe } from 'lucide-react';

const regionalStats = [
  { region: 'Sub-Saharan Africa', programs: 340, beneficiaries: '1.1M', color: 'bg-yellow-400' },
  { region: 'South & Southeast Asia', programs: 210, beneficiaries: '680K', color: 'bg-green-500' },
  { region: 'Latin America', programs: 155, beneficiaries: '380K', color: 'bg-amber-500' },
  { region: 'Middle East & N. Africa', programs: 85, beneficiaries: '150K', color: 'bg-emerald-500' },
  { region: 'Pacific Islands', programs: 40, beneficiaries: '60K', color: 'bg-teal-500' },
  { region: 'Eastern Europe', programs: 20, beneficiaries: '30K', color: 'bg-lime-500' },
];

export default function GlobalImpactMap() {
  return (
    <section className="py-20 bg-green-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        {/* Background grid pattern */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Worldwide Presence</p>
          <h2 className="font-display text-4xl font-bold">Our Global Reach</h2>
          <p className="text-green-300 mt-3 max-w-xl mx-auto text-sm">
            Active across six inhabited continents, reaching communities in 140+ countries.
          </p>
        </div>

        {/* Top stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { icon: Globe, label: 'Countries Active', value: 140, suffix: '+' },
            { icon: Users, label: 'Lives Impacted', value: 2400000, suffix: '+' },
            { icon: TrendingUp, label: 'Programs Running', value: 850, suffix: '+' },
            { icon: Award, label: 'Years of Service', value: 20, suffix: '+' },
          ].map(({ icon: Icon, label, value, suffix }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <Icon size={24} className="text-yellow-400 mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-white">
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <p className="text-green-300 text-xs mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Simplified world map SVG representation */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
          <h3 className="text-yellow-400 font-display font-semibold mb-6 text-lg">Impact by Region</h3>
          <div className="space-y-4">
            {regionalStats.map(({ region, programs, beneficiaries, color }) => (
              <div key={region} className="flex items-center gap-4">
                <span className="text-green-200 text-sm w-48 flex-shrink-0 hidden sm:block">{region}</span>
                <span className="text-green-200 text-xs sm:hidden w-28 flex-shrink-0 leading-tight">{region}</span>
                <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${color} transition-all duration-1000`}
                    style={{ width: `${(programs / 340) * 100}%` }}
                  />
                </div>
                <div className="text-right flex-shrink-0 w-28 hidden sm:flex items-center justify-end gap-4">
                  <span className="text-yellow-400 text-sm font-bold">{programs} programs</span>
                  <span className="text-green-300 text-xs">{beneficiaries}</span>
                </div>
                <span className="sm:hidden text-yellow-400 text-xs font-bold">{beneficiaries}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SDG alignment */}
        <div className="text-center">
          <p className="text-green-400 text-sm mb-5 uppercase tracking-widest font-semibold">Aligned with UN Sustainable Development Goals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { num: 1, label: 'No Poverty', color: 'bg-red-600' },
              { num: 2, label: 'Zero Hunger', color: 'bg-yellow-500' },
              { num: 3, label: 'Good Health', color: 'bg-green-500' },
              { num: 4, label: 'Quality Education', color: 'bg-red-500' },
              { num: 5, label: 'Gender Equality', color: 'bg-orange-500' },
              { num: 6, label: 'Clean Water', color: 'bg-blue-500' },
              { num: 8, label: 'Decent Work', color: 'bg-purple-500' },
              { num: 16, label: 'Peace & Justice', color: 'bg-amber-500' },
              { num: 17, label: 'Partnerships', color: 'bg-blue-700' },
            ].map(({ num, label, color }) => (
              <div
                key={num}
                className={`${color} rounded-xl px-3 py-2 text-center min-w-[70px] hover:scale-105 transition-transform cursor-default`}
              >
                <div className="text-white font-bold text-lg leading-none">{num}</div>
                <div className="text-white/80 text-xs leading-tight mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
