'use client';

import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-[#08080a] border-t border-white/10 text-left pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Col 1 Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/auto_uranium_logo.jpg"
                alt="Auto Uranium Logo"
                className="w-14 h-14 rounded-full object-cover border border-white/20 shadow-lg"
              />
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  <span className="font-black text-xl tracking-wider text-white uppercase">
                    AUTO<span className="text-[#ff3847]">URANIUM</span>
                  </span>
                </div>
                <span className="text-[8px] tracking-[0.18em] text-gray-400 font-semibold uppercase -mt-0.5">
                  AN AUTO DETAILING STUDIO
                </span>
              </div>
            </div>

            <p className="text-[11px] leading-relaxed text-gray-400 max-w-sm">
              Premium car care solutions for a cleaner, shinier and safer tomorrow. Viraj Trading Est. 2006. DPDP Act 2023 Compliant.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/auto_uranium_prayagraj/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#ff3847] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Auto-uranium-100064153860788/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#ff3847] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#3d-studio" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3 Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">PPF</a></li>
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">Detailing</a></li>
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">Painting</a></li>
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">Glass Film</a></li>
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">Washing</a></li>
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">Ceramic Coating</a></li>
              <li><a href="#services" className="hover:text-[#ff3847] transition-colors">& More</a></li>
            </ul>
          </div>

          {/* Col 4 Subscribe */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Subscribe</h4>
            <p className="text-[11px] text-gray-400">
              Get latest offers, tips and updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Auto Uranium!'); }} className="flex items-center gap-1 bg-[#121217] border border-white/10 rounded-xl p-1">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-transparent text-[11px] text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-[#ff3847] hover:bg-[#e62e3d] text-white rounded-lg transition-colors shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar with DevFoxx Labs Attribution & External Link */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© 2026 Auto Uranium (Viraj Trading). All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Designed and Developed by{' '}
              <a
                href="http://devfoxxlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff3847] font-bold hover:underline"
              >
                DevFoxx Labs
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors underline">
              Privacy Policy (DPDP Act 2023)
            </button>
            <span>|</span>
            <button onClick={onOpenTerms} className="hover:text-white transition-colors underline">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
