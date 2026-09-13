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
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className={`text-xl md:text-2xl font-black tracking-tighter uppercase ${isScrolled ? 'text-[#153063]' : 'text-[#153063]'}`}>
            <span className="text-[#E13926]">PanIIT</span> AP Summit
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-[#E13926]' : 'text-[#153063]/80 hover:text-[#E13926]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#partner"
            className="text-sm font-bold text-[#153063] hover:text-[#E13926] transition-colors uppercase"
          >
            Become a Partner
          </a>
          <a
            href="#register"
            className="px-5 py-2.5 rounded-full bg-[#E13926] hover:bg-[#E13926] text-white text-sm font-bold uppercase transition-all shadow-md hover:shadow-lg"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden ${isScrolled ? 'text-[#153063]' : 'text-[#153063]'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-4 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#153063] font-bold uppercase py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#partner"
              className="text-center py-2 text-[#153063] font-bold uppercase border border-[#153063]/20 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Partner
            </a>
            <a
              href="#register"
              className="text-center py-2 bg-[#E13926] text-white font-bold uppercase rounded-lg"
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
