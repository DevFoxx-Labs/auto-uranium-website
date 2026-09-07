'use client';

import { motion } from 'motion/react';
import { Shield, Gem, Settings, Leaf, Clock } from 'lucide-react';

export default function FeatureHighlights() {
  const features = [
    {
      icon: Shield,
      title: 'Premium Products',
      subtitle: 'Global trusted brands',
    },
    {
      icon: Gem,
      title: 'Skilled Experts',
      subtitle: 'Detail in every inch',
    },
    {
      icon: Settings,
      title: 'Advanced Technology',
      subtitle: 'Precision & perfection',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      subtitle: 'Safe for you & the planet',
    },
    {
      icon: Clock,
      title: 'Long Lasting Results',
      subtitle: 'Drive with confidence',
    },
  ];

  return (
    <section className="py-12 bg-[#0c0c0e] border-t border-b border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center text-center p-4 ${
                  index !== 0 ? 'md:pl-6' : ''
                } ${index !== features.length - 1 ? 'md:pr-6' : ''} cursor-pointer group`}
              >
                <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mb-3 group-hover:border-[#ff3847] group-hover:bg-[#ff3847]/10 transition-colors shadow-lg">
                  <Icon className="w-5 h-5 text-white group-hover:text-[#ff3847] transition-colors" />
                </div>
                <h3 className="text-xs font-bold text-white tracking-wide uppercase group-hover:text-[#ff3847] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
