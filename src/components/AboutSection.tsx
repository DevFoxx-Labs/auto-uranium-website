'use client';

import { motion } from 'motion/react';
import { Award, Calendar, CheckCircle2, History, MapPin, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function AboutSection() {
  const milestones = [
    {
      year: '2006',
      title: 'Foundations & Passion',
      desc: 'AutoUranium (Viraj Trading) started with a simple goal: trading the absolute best products for cleaning, painting, and polishing cars.',
      icon: History,
    },
    {
      year: '2020',
      title: 'Customer Experience Centre',
      desc: 'Launched Prayagraj’s state-of-the-art flagship experience studio in Civil Lines for vehicle owners seeking OEM-exceeding finish.',
      icon: MapPin,
    },
    {
      year: '2026',
      title: '18+ Years Excellence Story',
      desc: 'Expanded capabilities into self-healing PPF, 9H Ceramic & Graphene coatings, dust-free paint repair, and Fix Auto network integration.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#080b12] relative overflow-hidden border-t border-b border-white/10">
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ff3847]/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#00ff88]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff3847]/10 border border-[#ff3847]/30 text-[#ff3847] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR STORY • EST. 2006</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              PASSION FOR CARS. <br />
              <span className="text-[#ff3847]">CRAFTED IN PRAYAGRAJ.</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              <p>
                <strong className="text-white font-bold">AutoUranium (Viraj Trading)</strong> started in 2006 with a simple goal: trading and applying the very best products for cleaning, painting, and polishing cars. Cars are not only something we’re passionate about — <em className="text-white italic">they are part of who we are.</em> We have the best products, the best studio, and the BEST customers!
              </p>
              <p>
                In <strong className="text-emerald-400">April of 2020</strong>, AutoUranium launched its dedicated customer experience centre for car enthusiasts of Prayagraj. With over <strong className="text-white font-bold">18 years of automotive refinishing experience</strong>, AutoUranium grew from servicing a few vehicles per week out of a garage into the success story it is today.
              </p>
              <p>
                Joining the <strong className="text-red-400 font-bold">Fix Auto network</strong> was a natural progression. As AutoUranium, we’ve expanded our offerings and ability to deliver — particularly in multi-stage paint correction, body & paint repair, 9H Ceramic Coatings, and 200-micron self-healing Paint Protection Film (PPF).
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#00ff88]" />
                <div>
                  <div className="font-bold text-white">Viraj Trading Direct Imports</div>
                  <div className="text-[10px] text-gray-400">Trusted global detailing brands</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <div>
                  <div className="font-bold text-white">4.8★ Verified Ratings</div>
                  <div className="text-[10px] text-gray-400">Google, Justdial & Facebook</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Timeline Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="p-5 rounded-3xl bg-gradient-to-b from-[#0f141e] to-[#0a0d14] border border-white/10 hover:border-[#ff3847]/50 shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#ff3847]/15 text-[#ff3847] font-black text-xs border border-[#ff3847]/30">
                      {m.year}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
