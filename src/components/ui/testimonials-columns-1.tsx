"use client";
import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f141e] to-[#0a0d14] shadow-xl shadow-black/40 max-w-xs w-full text-left space-y-4 hover:border-[#ff3847]/40 transition-colors"
                  key={i}
                >
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-300 italic leading-relaxed">"{text}"</div>
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-white/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-extrabold text-xs text-white tracking-tight leading-5">{name}</div>
                      <div className="text-[10px] font-semibold text-emerald-400 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
