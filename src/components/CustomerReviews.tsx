'use client';

import { Star, ArrowRight } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'Rahul K.',
      car: 'BMW 3 Series',
      rating: 5,
      comment: 'The type of work done even exceeds the OEM finish.',
      avatar: '/images/avatar_rahul.png',
    },
    {
      name: 'Priya S.',
      car: 'Audi Q5',
      rating: 5,
      comment: 'Owner is very polite and staff is very good also.',
      avatar: '/images/avatar_priya.png',
    },
    {
      name: 'Aman T.',
      car: 'Mercedes-Benz C-Class',
      rating: 5,
      comment: 'Professional team, premium quality. Will definitely come again.',
      avatar: '/images/avatar_aman.png',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
              OUR CUSTOMERS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Real People. <span className="text-[#ff3847]">Real Shine.</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#ff3847] uppercase tracking-wider transition-colors group"
          >
            <span>More Reviews</span>
            <ArrowRight className="w-4 h-4 text-[#ff3847] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-left flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-xs text-gray-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Customer Avatar & Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="text-xs font-bold text-white">{rev.name}</div>
                  <div className="text-[10px] text-gray-400">{rev.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
