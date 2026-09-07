'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export interface ServiceCardData {
  id: string;
  title: string;
  tagline: string;
  bgImage: string;
  description: string;
  highlights: string[];
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services: ServiceCardData[] = [
    {
      id: 'ppf',
      title: 'PPF',
      tagline: 'Invisible Protection',
      bgImage: '/images/service_ppf.png',
      description: 'Ultra-durable TPU polyurethane film engineered to protect original factory paint against stone chips, scratches, and UV rays.',
      highlights: ['Self-Healing Micro Scratch Surface', 'Invisible Clear Film', 'Preserves Resale Value'],
    },
    {
      id: 'detailing',
      title: 'Detailing',
      tagline: 'Showroom Shine',
      bgImage: '/images/service_detailing_highres.jpg',
      description: 'Multi-stage paint correction, swirl removal, deep interior leather conditioning, and engine bay restoration.',
      highlights: ['3-Stage Paint Correction', 'Swirl & Scratch Removal', 'Interior Steam Sanitization'],
    },
    {
      id: 'painting',
      title: 'Painting',
      tagline: 'Flawless Finish',
      bgImage: '/images/service_painting_highres.jpg',
      description: 'Bespoke custom body painting, color changes, infrared paint booth drying, and brake caliper color accents.',
      highlights: ['Infrared Paint Booth Curing', 'OEM Color Code Match', 'Bespoke Custom Accents'],
    },
    {
      id: 'glass-film',
      title: 'Glass Film',
      tagline: 'Cooler. Safer. Smarter.',
      bgImage: '/images/service_glass_highres.jpg',
      description: 'High-performance ceramic sun control film blocking 99% UV rays and 85% solar infrared heat.',
      highlights: ['99% Harmful UV Block', '85% Heat Rejection', 'Shatter-Proof Glass Safety'],
    },
    {
      id: 'washing',
      title: 'Washing',
      tagline: 'Deep & Gentle Clean',
      bgImage: '/images/service_washing_highres.jpg',
      description: 'Ph-neutral multi-stage foam bath wash, iron fallout decontamination, and underbody high-pressure wash.',
      highlights: ['Ph-Neutral Snow Foam', 'Clay Bar Fallout Decontamination', 'Underbody Wash'],
    },
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coating',
      tagline: 'Long Lasting Gloss',
      bgImage: '/images/service_ceramic_highres.jpg',
      description: '9H hardness nano-ceramic coating creating hydrophobic water sheeting and mirror reflection.',
      highlights: ['5+ Years Glass Mirror Reflection', 'Extreme Water Sheeting', 'Chemical Resistance'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Complete Care for <span className="text-[#ff3847]">Every Drive</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectService('All Services')}
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#ff3847] uppercase tracking-wider transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#ff3847] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Services Grid Cards with High-Res Uploaded Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="relative group h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff3847] transition-all duration-300 cursor-pointer shadow-xl"
            >
              {/* Background Image with Dark Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-300 mt-0.5">
                      {service.tagline}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="w-10 h-10 rounded-full border border-white/30 bg-black/40 group-hover:bg-[#ff3847] group-hover:border-[#ff3847] text-white flex items-center justify-center transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
