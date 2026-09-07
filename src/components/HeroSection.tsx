'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '18+', label: 'Years of Expertise' },
    { value: '50+', label: 'Car Care Specialists' },
    { value: '100%', label: 'Satisfaction Guarantee' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-[#0a0a0c]">
      {/* Full Width Hero Banner Image Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_banner_full.png"
          alt="Auto Uranium Studio Hero Banner"
          className="w-full h-full object-cover object-right sm:object-center opacity-90"
        />
        {/* Subtle Dark Vignette Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/60 z-10" />
      </div>

      {/* Hero Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          {/* Sub-tagline */}
          <div className="text-xs font-bold tracking-[0.25em] text-gray-300 uppercase flex items-center gap-2">
            <span>PROTECT</span>
            <span className="text-[#ff3847]">•</span>
            <span>ENHANCE</span>
            <span className="text-[#ff3847]">•</span>
            <span>DRIVE PROUD</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-[1.02]">
            MORE THAN <br />
            A CLEAN CAR <br />
            <span className="text-[#ff3847]">A BETTER</span> YOU
          </h1>

          {/* Paragraph description */}
          <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-xl">
            Premium PPF, Detailing, Painting, Glass Film, Washing, Ceramic Coating & more — for a showroom finish, that lasts.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center gap-5 pt-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff3847] hover:bg-[#e62e3d] rounded-full shadow-lg shadow-[#ff3847]/30 hover:scale-105 transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#3d-studio"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff3847] transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#ff3847] transition-colors">
                <Play className="w-3.5 h-3.5 fill-white group-hover:fill-[#ff3847] transition-colors ml-0.5" />
              </div>
              <span>Watch Our Work</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
