import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const articles = [
  {
    tag: 'Impact Story',
    tagColor: 'bg-green-100 text-green-700',
    title: 'How One Borehole Transformed an Entire Village in Northern Kenya',
    excerpt: 'When Oneg Sason installed a solar-powered borehole in Marsabit County, the ripple effects were extraordinary — school attendance surged, child illness dropped, and women reclaimed 4 hours of their day.',
    date: 'March 18, 2025',
    image: '/images/community-3.jpeg',
    readTime: '4 min read',
  },
  {
    tag: 'News',
    tagColor: 'bg-yellow-100 text-yellow-700',
    title: 'Oneg Sason Expands Food Support to 50,000 Families Across West Africa',
    excerpt: 'Our most ambitious hunger-relief drive yet begins this spring, providing nutritious meals to vulnerable families across 12 countries in West Africa.',
    date: 'February 28, 2025',
    image: '/images/community-5.jpeg',
    readTime: '3 min read',
  },
  {
    tag: 'Partnership',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'EcoTech Inc. Commits $5M to Women Rising Initiative',
    excerpt: 'A landmark corporate partnership will expand microfinance access to 50,000 new women entrepreneurs across West Africa.',
    date: 'January 15, 2025',
    image: '/images/community-6.jpeg',
    readTime: '2 min read',
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-yellow-600 text-sm font-semibold uppercase tracking-widest mb-2">Latest Updates</p>
            <h2 className="font-display text-4xl font-bold text-green-900">News & Stories</h2>
          </div>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all"
          >
            View all stories <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm card-hover group cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${article.tagColor}`}>
                    {article.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1"><Calendar size={11} />{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-green-900 mb-3 leading-snug group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-green-700 text-sm font-semibold group-hover:gap-3 transition-all">
                  Read story <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
