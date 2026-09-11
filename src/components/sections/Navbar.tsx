'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Summit', href: '#summit' },
  { name: 'Andhra Advantage', href: '#advantage' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Partner', href: '#partner' },
  { name: 'Committee', href: '#committee' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-white">
            <span className="text-blue-600">PanIIT</span> AP Summit
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#partner"
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Become a Partner
          </a>
          <a
            href="#register"
            className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#partner"
              className="text-center py-2 text-blue-400 font-medium border border-blue-500/30 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Partner
            </a>
            <a
              href="#register"
              className="text-center py-2 bg-red-600 text-white font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
