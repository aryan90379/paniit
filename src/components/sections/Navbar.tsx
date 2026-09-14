'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Advantage', href: '#advantage' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
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
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#153063]/10 py-3 shadow-sm' : 'bg-white border-b border-gray-100 py-4 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 md:gap-4 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://wabflow.b-cdn.net/paniit/logos/PanIIT%20Logo.jpeg" 
            alt="PanIIT Alumni India" 
            className="h-8 md:h-12 object-contain mix-blend-multiply" 
          />
          <div className="w-px h-6 md:h-8 bg-[#153063]/20"></div>
          <img 
            src="https://wabflow.b-cdn.net/paniit/logos/PanIIT%20AP%20Logo.jpeg" 
            alt="PanIIT AP Summit" 
            className="h-8 md:h-12 object-contain mix-blend-multiply" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase transition-colors whitespace-nowrap text-[#153063]/70 hover:text-[#E13926]`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <img 
            src="https://wabflow.b-cdn.net/paniit/logos/Emblem_of_Andhra_Pradesh.png" 
            alt="Govt of Andhra Pradesh" 
            className="h-10 md:h-12 object-contain mix-blend-multiply mr-2 xl:mr-4" 
          />
          <a
            href="#partner"
            className="text-sm font-bold text-[#153063]/70 hover:text-[#E13926] transition-colors uppercase whitespace-nowrap"
          >
            Become a Partner
          </a>
          <a
            href="#register"
            className="px-5 py-2.5 rounded-full bg-[#E13926] hover:bg-red-500 text-white text-sm font-bold uppercase transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle & Emblem */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            className={`text-[#001858]`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <img 
            src="https://wabflow.b-cdn.net/paniit/logos/Emblem_of_Andhra_Pradesh.png" 
            alt="Govt of Andhra Pradesh" 
            className="h-8 object-contain mix-blend-multiply" 
          />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-4 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#001858] font-bold uppercase py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 lg:hidden">
            <a
              href="#partner"
              className="text-center py-2 text-[#001858] font-bold uppercase border border-[#153063]/20 rounded-lg"
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
