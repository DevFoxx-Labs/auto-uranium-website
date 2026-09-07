'use client';

import { motion } from 'motion/react';
import { Shield, Gem, Leaf, Heart, ArrowRight } from 'lucide-react';

interface ValueBannerProps {
  onOpenBooking: () => void;
}

export default function ValueBanner({ onOpenBooking }: ValueBannerProps) {
  const valueItems = [
    {
      icon: Shield,
      title: 'Preserve Value',
      desc: 'Keep your car looking new',
    },
    {
      icon: Gem,
      title: 'Turn Heads',
      desc: 'A shine that speaks',
    },
    {
      icon: Leaf,
      title: 'Protect for the Future',
      desc: 'Drive sustainably',
    },
    {
      icon: Heart,
      title: 'Feel the Difference',
      desc: "It's more than just a car",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 w-full bg-[#0a0a0c] overflow-hidden border-t border-b border-white/10">
      {/* Full Width Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/drive_brighter_bg_full.png"
          alt="Drive A Brighter Tomorrow Background"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/60 z-10" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="text-xs font-bold tracking-[0.25em] text-gray-300 uppercase">
              A SHINIER
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.02]">
              DRIVE A <br />
              <span className="text-[#ff3847]">BRIGHTER</span> <br />
              TOMORROW
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-medium max-w-lg leading-relaxed">
              Because every car deserves more than just a wash — it deserves care.
            </p>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#ff3847] hover:bg-[#e62e3d] rounded-full shadow-lg shadow-[#ff3847]/30 transition-all"
              >
                <span>Book Your Service</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Floating Dark Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-start lg:justify-end"
          >
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#0c0e14]/85 border border-white/15 backdrop-blur-xl shadow-2xl space-y-6 text-left">
              {valueItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className={`flex items-center gap-4 ${
                      idx !== valueItems.length - 1 ? 'pb-5 border-b border-white/10' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#ff3847]/15 border border-[#ff3847]/30 flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-6 h-6 text-[#ff3847]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
