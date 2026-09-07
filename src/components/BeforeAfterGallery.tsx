'use client';

import { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterGallery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORMATION GALLERY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Before & <span className="text-[#ff3847]">After Precision</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Drag or hover the slider to inspect the dramatic scratch removal & 9H Uranium Ceramic reflection.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/15 select-none cursor-ew-resize shadow-2xl bg-black"
        >
          {/* AFTER Image (Full background layer) */}
          <div className="absolute inset-0">
            <img
              src="/images/after_car.png"
              alt="After Detailing - Uranium Ceramic & PPF"
              className="w-full h-full object-cover object-center"
            />
            {/* Top Right AFTER Label Badge matching reference photo */}
            <div className="absolute top-6 right-6 z-20 text-right pointer-events-none space-y-1">
              <span className="inline-block px-4 py-1 rounded-full bg-[#00ff88] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#00ff88]/40">
                AFTER
              </span>
              <p className="text-[11px] font-bold text-gray-200 tracking-widest uppercase pt-1 drop-shadow-md">
                URANIUM CERAMIC & PPF
              </p>
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay layer) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full min-w-[320px] sm:min-w-[700px] lg:min-w-[1200px]">
              <img
                src="/images/before_car.jpg"
                alt="Before Detailing - Scratched & Oxidized"
                className="w-full h-full object-cover object-center"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                }}
              />
              {/* Top Left BEFORE Label Badge matching reference photo */}
              <div className="absolute top-6 left-6 z-20 text-left pointer-events-none space-y-1">
                <span className="inline-block px-4 py-1 rounded-full bg-[#990011] text-white font-black text-xs uppercase tracking-widest shadow-lg">
                  BEFORE
                </span>
                <p className="text-[11px] font-bold text-gray-200 tracking-widest uppercase pt-1 drop-shadow-md">
                  SCRATCHED & OXIDIZED
                </p>
              </div>
            </div>
          </div>

          {/* Slider Dividing Bar & Center Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#00ff88] z-30 shadow-[0_0_15px_#00ff88]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#00ff88] text-black font-bold flex items-center justify-center shadow-xl shadow-[#00ff88]/60 border-2 border-black">
              <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
