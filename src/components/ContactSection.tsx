'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Send, MessageCircle, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#080b12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Studio Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>STUDIO LOCATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Visit Auto <span className="text-gradient-uranium">Uranium</span>
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Prayagraj's premier auto detailing & paint protection destination since 2006.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff3847]/20 text-[#ff3847] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Address</h4>
                  <p className="text-xs text-white font-medium mt-1 leading-relaxed">
                    39/25, Maharshi Dayanand Marg, behind Royal Enfield Showroom, Vivek Vihar Colony, Civil Lines, Prayagraj, Uttar Pradesh 211001
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone & WhatsApp</h4>
                  <a
                    href="tel:09935413993"
                    className="text-sm text-emerald-400 font-extrabold mt-1 block hover:underline"
                  >
                    +91 99354 13993
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#00f0ff] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Working Hours</h4>
                  <p className="text-xs text-white font-medium mt-1">
                    Open Daily • Closes 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=39/25,+Maharshi+Dayanand+Marg,+behind+Royal+Enfield+Showroom,+Vivek+Vihar+Colony,+Civil+Lines,+Prayagraj,+Uttar+Pradesh+211001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ff3847] hover:bg-[#e6001b] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#ff3847]/30"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
              <a
                href="https://wa.me/919935413993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#00ff88] hover:bg-[#00dd77] text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-[#00ff88]/30"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column Contact Form & Interactive Map Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map Frame */}
            <div className="rounded-3xl overflow-hidden glass-panel border border-white/10 h-[280px] relative">
              <iframe
                title="Auto Uranium Prayagraj Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8258380387413!2d81.826!3d25.452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb2e4874c3b1%3A0xa4c852a51757aeb3!2sAuto%20Uranium!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1017] border border-white/10 text-left space-y-4">
              <h3 className="text-lg font-extrabold text-white uppercase">
                Send Direct Studio Inquiry
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent to Auto Uranium studio!'); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3847]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3847]"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your car model and required detailing or PPF services..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3847]"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#ff3847] to-[#cc001b] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#ff3847]/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
