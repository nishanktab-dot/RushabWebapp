import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm shrink-0">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-8 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-1 md:p-2 rounded text-base md:text-xl font-bold italic leading-none">RTC</div>
            <span className="opacity-80">
              Centrex: 22505 / 24884
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="tel:+919845096435" className="hover:text-orange-400 transition-colors">
              080 4124 9005
            </a>
            <a href="mailto:rushabhtradingco@gmail.com" className="hover:text-orange-400 transition-colors">
              rushabhtradingco@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#" className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold text-blue-700 tracking-tight leading-none uppercase">RUSHABH TRADING COMPANY</span>
            <span className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">320, Avenue Rd, Bengaluru</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">
              {link.name.toUpperCase()}
            </a>
          ))}
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md">
            GET QUOTE
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-600 py-2 border-b border-slate-50 uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-orange-500 text-white text-center py-3 rounded-xl font-bold mt-4 shadow-md uppercase"
              >
                Get Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
