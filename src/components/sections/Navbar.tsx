'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About Us', href: '#about' },
  { name: 'Advantage', href: '#advantage' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Committee', href: '#committee' },
  { name: 'Contact Us', href: '#contact' },
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
    <header className="fixed top-0 w-full z-50 transition-all duration-300 shadow-lg">
      
      {/* TOP ROW - WHITE BACKGROUND WITH HUGE LOGOS */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-6'}`}>
        <div className="container mx-auto px-4 xl:px-8 flex flex-wrap items-center justify-between gap-4">
          
          {/* Left Side: Large Logos */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 md:gap-6 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://wabflow.b-cdn.net/paniit/logos/PanIIT%20Logo.jpeg" 
              alt="PanIIT Alumni India" 
              className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-24'}`}
            />
            <div className={`w-px bg-gray-300 transition-all duration-300 ${isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-20'}`}></div>
            <img 
              src="https://wabflow.b-cdn.net/paniit/logos/PanIIT%20AP%20Logo.jpeg" 
              alt="PanIIT AP Summit" 
              className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-24'}`}
            />
            <div className={`hidden md:block w-px bg-gray-300 transition-all duration-300 ${isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-20'}`}></div>
            <div className="hidden md:flex flex-col items-center">
              <img 
                src="https://wabflow.b-cdn.net/paniit/logos/Emblem_of_Andhra_Pradesh.png" 
                alt="Govt of Andhra Pradesh" 
                className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-16'} mb-1`}
              />
              <span className={`text-[8px] md:text-[10px] font-bold text-black uppercase tracking-wider ${isScrolled ? 'hidden' : 'block'}`}>Powered By Govt of AP</span>
            </div>
          </a>

          {/* Right Side: Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#partner"
              className="hidden lg:flex items-center justify-center px-6 py-2.5 md:py-3 border-2 border-[#153063] text-[#153063] font-bold text-xs md:text-sm uppercase tracking-wide rounded-sm hover:bg-[#153063] hover:text-white transition-colors"
            >
              Become a Partner
            </a>
            <a
              href="#register"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 md:py-3 bg-[#E13926] text-white font-bold text-xs md:text-sm uppercase tracking-wide rounded-sm hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
            >
              Register
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-[#153063] p-2 bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* BOTTOM ROW - DARK BLUE BACKGROUND WITH LINKS */}
      <div className="hidden lg:block bg-[#0e2246] border-t border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center">
            <a
              href="#partner"
              className="text-white text-[13px] font-bold tracking-widest uppercase py-4 px-6 hover:bg-white/10 transition-colors underline underline-offset-4 decoration-[#E13926] decoration-2"
            >
              EOI for Partners
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 text-[13px] font-bold tracking-widest uppercase py-4 px-6 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* MOBILE MENU DROP DOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0e2246] border-t border-white/10 shadow-2xl flex flex-col">
          <a
            href="#partner"
            className="text-white text-sm font-bold uppercase py-4 px-6 border-b border-white/10 hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Become a Partner
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 text-sm font-bold uppercase py-4 px-6 border-b border-white/10 hover:bg-white/5 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="p-4 flex flex-col gap-3">
            <a
              href="#register"
              className="text-center py-3 bg-[#E13926] text-white font-bold uppercase rounded-sm shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
