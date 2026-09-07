'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sparkles, Sun, Shield, Eye, Layers, CheckCircle2, Info } from 'lucide-react';

// Paint Color Options
const CAR_COLORS = [
  { name: 'Stealth Satin Black', hex: '#111318', filter: 'none' },
  { name: 'Uranium Emerald', hex: '#00ff88', filter: 'hue-rotate(85deg) saturate(2.2) brightness(0.95)' },
  { name: 'Racing Crimson', hex: '#ff3847', filter: 'hue-rotate(325deg) saturate(2.8) brightness(1.05)' },
  { name: 'Titanium Silver', hex: '#d1d5db', filter: 'brightness(1.35) contrast(1.1) grayscale(0.8)' },
  { name: 'Cyber Electric Cyan', hex: '#00f0ff', filter: 'hue-rotate(160deg) saturate(2.2) brightness(1.0)' },
];

// Finish Options
const FINISH_TYPES = [
  { name: 'Ceramic Hydrophobic Gloss', opacity: 1, glow: 'shadow-[0_0_50px_rgba(255,255,255,0.15)]' },
  { name: 'Satin PPF Shield', opacity: 0.92, glow: 'shadow-[0_0_30px_rgba(0,255,136,0.2)]' },
  { name: 'Ultra Mirror Metallic', opacity: 1, glow: 'shadow-[0_0_60px_rgba(255,56,71,0.25)]' },
];

// Interactive Hotspots on the GT-R Car
const HOTSPOTS = [
  {
    id: 'ppf',
    top: '38%',
    left: '52%',
    title: 'Invisible PPF Hood Shield',
    desc: 'Self-healing 200 micron TPU film shielding against stone chips & scratches.',
  },
  {
    id: 'ceramic',
    top: '48%',
    left: '34%',
    title: '9H Ceramic Coating',
    desc: 'Hydrophobic nano-molecular glass layer with 5+ years paint reflection.',
  },
  {
    id: 'tint',
    top: '28%',
    left: '30%',
    title: 'Ceramic Glass Sun Control',
    desc: '99% UV rejection and 85% heat rejection for cool interior drive.',
  },
  {
    id: 'wheels',
    top: '68%',
    left: '32%',
    title: 'Graphene Wheel Polish',
    desc: 'Brake dust repellent graphene shield for forged alloy wheels.',
  },
];

export default function Car3DStudio() {
  const [selectedColor, setSelectedColor] = useState(CAR_COLORS[0]);
  const [finishIndex, setFinishIndex] = useState(0);
  const [lightingMode, setLightingMode] = useState<'showroom' | 'neon'>('showroom');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const activeFinish = FINISH_TYPES[finishIndex];

  return (
    <section id="3d-studio" className="relative py-24 bg-[#0a0a0c] overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff3847]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00ff88]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff3847]/10 border border-[#ff3847]/30 text-[#ff3847] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOMIZE & PREVIEW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Customize & Preview <span className="text-[#ff3847]">Your Finish</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Experiment with paint finishes, ceramic gloss, PPF protective layers, and preview interactive detailing hotspots in real-time.
          </p>
        </div>

        {/* Interactive Studio Stage */}
        <div className="relative w-full min-h-[500px] sm:min-h-[580px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1017] via-[#090b10] to-[#050608] border border-white/15 shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          {/* Top Stage Control Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 z-20">
            <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs text-gray-300">
              <Eye className="w-4 h-4 text-[#ff3847]" />
              <span>Click markers on the car to inspect detailing protection</span>
            </div>

            {/* Lighting Mode Selector */}
            <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setLightingMode('showroom')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  lightingMode === 'showroom'
                    ? 'bg-[#ff3847] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" /> Showroom Light
              </button>
              <button
                onClick={() => setLightingMode('neon')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  lightingMode === 'neon'
                    ? 'bg-[#00ff88] text-black font-bold shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Uranium Neon
              </button>
            </div>
          </div>

          {/* Central Car Stage Visual */}
          <div className="relative w-full my-auto flex items-center justify-center py-6">
            {/* Ambient Floor Reflection */}
            <div className="absolute bottom-2 w-4/5 h-20 bg-gradient-to-t from-red-600/20 via-[#00ff88]/10 to-transparent blur-2xl rounded-full" />

            {/* Interactive Car Image */}
            <div className="relative max-w-4xl w-full flex justify-center">
              <img
                src="/images/studio_gtr_car.png"
                alt="Auto Uranium Studio Nissan GT-R"
                className={`w-full max-w-3xl h-auto object-contain transition-all duration-700 ${activeFinish.glow}`}
                style={{
                  filter: lightingMode === 'neon'
                    ? `${selectedColor.filter} drop-shadow(0 0 45px rgba(0,255,136,0.3))`
                    : `${selectedColor.filter} drop-shadow(0 0 35px rgba(255,56,71,0.25))`,
                  opacity: activeFinish.opacity,
                }}
              />

              {/* Interactive Hotspot Markers */}
              {HOTSPOTS.map((hs) => (
                <div
                  key={hs.id}
                  className="absolute z-30"
                  style={{ top: hs.top, left: hs.left }}
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      activeHotspot === hs.id
                        ? 'bg-[#00ff88] text-black scale-125 shadow-lg shadow-[#00ff88]/60'
                        : 'bg-[#ff3847] text-white hover:scale-110 shadow-md shadow-[#ff3847]/40'
                    }`}
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-60"></span>
                    <Shield className="w-3.5 h-3.5 relative z-10" />
                  </button>

                  {/* Tooltip Card */}
                  <AnimatePresence>
                    {activeHotspot === hs.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-9 left-1/2 -translate-x-1/2 w-60 p-3.5 bg-[#0c0f17]/95 border border-[#00ff88]/50 rounded-2xl shadow-2xl backdrop-blur-xl text-left z-50"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#00ff88]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{hs.title}</span>
                        </div>
                        <p className="text-[11px] text-gray-300 mt-1 leading-snug">
                          {hs.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Interactive Customizer Toolbar */}
          <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-left">
            {/* Color Palette Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#ff3847]" /> Paint Tint:
              </span>
              <div className="flex items-center gap-2">
                {CAR_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor.name === c.name
                        ? 'border-[#00ff88] scale-125 shadow-lg shadow-[#00ff88]/50'
                        : 'border-white/20 hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Finish Type Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00ff88]" /> Finish:
              </span>
              <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                {FINISH_TYPES.map((f, i) => (
                  <button
                    key={f.name}
                    onClick={() => setFinishIndex(i)}
                    className={`px-3 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                      finishIndex === i
                        ? 'bg-[#ff3847] text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {f.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
