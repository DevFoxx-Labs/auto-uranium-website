'use client';

import { ArrowRight, Phone } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenQuote: () => void;
}

export default function PreFooterCTA({ onOpenQuote }: PreFooterCTAProps) {
  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-b border-white/10">
      {/* Exact Extracted Prefooter Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: 'url(/images/prefooter_bg.png)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              READY TO GIVE YOUR CAR <br />
              <span className="text-[#ff3847]">THE CARE</span> IT DESERVES?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Premium services. Expert hands. Lasting results.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff3847] hover:bg-[#e62e3d] rounded-full shadow-lg shadow-[#ff3847]/30 hover:scale-105 transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:09935413993"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black/60 hover:bg-white/10 border border-white/30 rounded-full transition-all"
            >
              <Phone className="w-4 h-4 text-[#ff3847]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
