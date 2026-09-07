'use client';

import { motion } from "motion/react";
import { Sparkles, Star } from "lucide-react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "The type of work done even exceeds the OEM finish. The 9H Ceramic Coating on my BMW 3 Series is unbelievable.",
    image: "/images/avatar_rahul.png",
    name: "Rahul K.",
    role: "BMW 3 Series Owner",
  },
  {
    text: "Owner is very polite and staff is very good also. They explained the PPF self-healing maintenance step by step.",
    image: "/images/avatar_priya.png",
    name: "Priya S.",
    role: "Audi Q5 Owner",
  },
  {
    text: "Professional team, premium quality products directly from Viraj Trading. Will definitely come again!",
    image: "/images/avatar_aman.png",
    name: "Aman T.",
    role: "Mercedes-Benz C-Class Owner",
  },
  {
    text: "Best auto detailing studio in Prayagraj hands down. Civil Lines studio is top notch equipped with IR curing booths.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    name: "Dr. Vivek Verma",
    role: "Fortuner Legender Owner",
  },
  {
    text: "Paint protection film installation on my Virtus GT was done with extreme precision. Edge wrapping is completely invisible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    name: "Aniket Sharma",
    role: "VW Virtus GT Owner",
  },
  {
    text: "Decontamination foam wash and interior steam cleaning made my vehicle feel like it just rolled out of the showroom.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    name: "Sneha Gupta",
    role: "Hyundai Creta Owner",
  },
  {
    text: "Viraj Trading has been supplying the best car care products since 2006. Their detailing expertise in Prayagraj is unmatched.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    name: "Vikramaditya Singh",
    role: "Mahindra Thar Owner",
  },
  {
    text: "Got sun control ceramic glass film installed. Heat rejection is incredible during Prayagraj peak summers!",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
    name: "Rohit Mishra",
    role: "Kia Seltos Owner",
  },
  {
    text: "Custom red caliper painting and 9H gloss ceramic coating done in 2 days flat. Exceptional craft!",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    name: "Karan Srivastava",
    role: "BMW M3 Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[580px] mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff3847]/10 border border-[#ff3847]/30 text-[#ff3847] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CUSTOMERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Real People. <span className="text-[#ff3847]">Real Shine.</span>
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            See what car owners across Prayagraj have to say about Auto Uranium precision detailing.
          </p>

          <div className="mt-4 flex items-center gap-2 text-yellow-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white">4.9/5 Rating</span>
            <span className="text-gray-400">• Google & Justdial Verified</span>
          </div>
        </motion.div>

        {/* 3 Column Animated Vertical Marquee */}
        <div className="flex justify-center gap-6 mt-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
