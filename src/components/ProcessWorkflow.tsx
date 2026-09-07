'use client';

import { Calendar, MessageSquare, Settings, Sparkles, ChevronRight } from 'lucide-react';

export default function ProcessWorkflow() {
  const steps = [
    {
      number: '01',
      title: 'Book a Service',
      desc: 'Online or call us',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Get Expert Advice',
      desc: 'Tailored to your car',
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Service in Action',
      desc: 'By trained professionals',
      icon: Settings,
    },
    {
      number: '04',
      title: 'Drive the Difference',
      desc: "A car you'll love",
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#0c0c0e] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
            OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Simple. Transparent. <span className="text-[#ff3847]">Hassle-Free.</span>
          </h2>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left"
              >
                <div className="w-14 h-14 rounded-full border border-[#ff3847]/40 bg-[#ff3847]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#ff3847]" />
                </div>

                <div>
                  <div className="text-[11px] font-bold text-gray-400">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wide mt-0.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-gray-600">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
