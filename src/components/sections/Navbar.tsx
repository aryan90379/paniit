'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About Us', href: '/#about' },
  { name: 'Advantage', href: '/#advantage' },
  { name: 'Speakers', href: '/#speakers' },
  { name: 'Summit Agenda', href: '/#schedule' },
  { name: 'Committee', href: '/#committee' },
  { name: 'Contact Us', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Dynamic height calculation
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        if (height > 0) {
          // If at or near top of the page, record this as the unscrolled navbar height
          if (window.scrollY < 20) {
            document.documentElement.style.setProperty('--navbar-height', `${height}px`);
          }
        }
      }
    };

    updateNavbarHeight();

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateNavbarHeight) : null;
    if (headerRef.current && ro) {
      ro.observe(headerRef.current);
    }

    window.addEventListener('resize', updateNavbarHeight, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavbarHeight);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <header id="main-navbar" ref={headerRef} className="fixed top-0 w-full z-50 transition-all duration-300 shadow-lg">
      
      {/* TOP ROW - WHITE BACKGROUND WITH HUGE LOGOS */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-6'}`}>
        <div className="container mx-auto px-4 xl:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left Side: Large Logos */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-4 md:gap-6 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://d3liyurciwi0wb.cloudfront.net/logo/PanIIT%20Logo%20(1)%20(1).jpeg" 
              alt="PanIIT Alumni India" 
              className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-6 sm:h-8 md:h-12 lg:h-20' : 'h-8 sm:h-10 md:h-16 lg:h-32'}`}
            />
            <div className={`w-px bg-gray-300 transition-all duration-300 ${isScrolled ? 'h-4 sm:h-6 md:h-10 lg:h-16' : 'h-6 sm:h-8 md:h-14 lg:h-28'}`}></div>
            <img 
              src="https://d3liyurciwi0wb.cloudfront.net/logo/PanIIT%20AP%20Logo%20(1)%20(1).jpeg" 
              alt="PanIIT AP Summit" 
              className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-6 sm:h-8 md:h-12 lg:h-20' : 'h-8 sm:h-10 md:h-16 lg:h-32'}`}
            />
            <div className={`w-px bg-gray-300 transition-all duration-300 ${isScrolled ? 'h-4 sm:h-6 md:h-10 lg:h-16' : 'h-6 sm:h-8 md:h-14 lg:h-28'}`}></div>
            <div className="flex items-center">
              <img 
                src="https://d3liyurciwi0wb.cloudfront.net/logo/Emblem_of_Andhra_Pradesh%20(2).png" 
                alt="Govt of Andhra Pradesh" 
                className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-6 sm:h-8 md:h-12 lg:h-20' : 'h-8 sm:h-10 md:h-16 lg:h-32'}`}
              />
            </div>
          </a>

          {/* Right Side: Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a 
              href="https://www.paniit.org/events/21873"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-[#DD1D21] text-white font-bold text-xs md:text-sm uppercase tracking-wide rounded-sm hover:bg-red-600 transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Register Now
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#06206A] p-2 bg-gray-100 rounded-md"
            >
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW - NAV LINKS */}
      <div className="hidden lg:block bg-[#06206A] border-t border-white/10">
        <div className="container mx-auto px-4 xl:px-8">
          <nav className="flex justify-center items-center">
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#06206A] border-t border-white/10 shadow-2xl flex flex-col">
          
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
              href="https://www.paniit.org/events/21873"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3 bg-[#DD1D21] text-white font-bold uppercase rounded-sm shadow-md"
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
