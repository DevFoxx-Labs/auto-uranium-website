'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', active: true },
    { name: 'Services', href: '#services' },
    { name: '3D Studio', href: '#3d-studio' },
    { name: 'About', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Matching Reference Image */}
          <a href="#hero" className="flex flex-col text-left group">
            <div className="flex items-center gap-1">
              <span className="font-black text-xl sm:text-2xl tracking-wider text-white uppercase">
                AUTO<span className="text-[#ff3847]">URANIUM</span>
              </span>
              <span className="text-[#ff3847] text-lg font-black">+</span>
            </div>
            <span className="text-[9px] tracking-[0.2em] text-gray-400 font-semibold uppercase -mt-0.5">
              PROTECT WHAT MOVES YOU
            </span>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                  link.active
                    ? 'text-[#ff3847] border-b-2 border-[#ff3847]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 rounded-full bg-[#ff3847] hover:bg-[#e62e3d] shadow-lg shadow-[#ff3847]/30 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-4 py-1.5 text-xs font-bold text-white bg-[#ff3847] rounded-full"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/10 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0c0e] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 text-left"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
