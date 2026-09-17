'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About Us', href: '/#about' },
  { name: 'Advantage', href: '/#advantage' },
  { name: 'Speakers', href: '/#speakers' },
  { name: 'Summit Agenda', href: '/#schedule' },
  { name: 'Team', href: '/#committee' },
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
    <header id="main-navbar" ref={headerRef} className="fixed top-0 w-full z-50 bg-paper border-b border-[#06206A]/10">
      
      <div className={`bg-paper transition-all duration-300 ${isScrolled ? 'py-1.5 md:py-2' : 'py-2 md:py-3'}`}>
        <div className="container mx-auto px-4 xl:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 md:gap-5 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://d3liyurciwi0wb.cloudfront.net/logo/PanIIT%20Logo%20(1)%20(1).jpeg" 
              alt="PanIIT Alumni India" 
              className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-7 sm:h-8 md:h-11 lg:h-14' : 'h-9 sm:h-11 md:h-14 lg:h-20'}`}
            />
            <div className={`w-px bg-[#06206A]/15 transition-all duration-300 ${isScrolled ? 'h-5 sm:h-6 md:h-8 lg:h-10' : 'h-7 sm:h-8 md:h-10 lg:h-16'}`}></div>
            <img 
              src="https://d3liyurciwi0wb.cloudfront.net/logo/PanIIT%20AP%20Logo%20(1)%20(1).jpeg" 
              alt="PanIIT AP Summit" 
              className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-7 sm:h-8 md:h-11 lg:h-14' : 'h-9 sm:h-11 md:h-14 lg:h-20'}`}
            />
            <div className={`w-px bg-[#06206A]/15 transition-all duration-300 ${isScrolled ? 'h-5 sm:h-6 md:h-8 lg:h-10' : 'h-7 sm:h-8 md:h-10 lg:h-16'}`}></div>
            <div className="flex items-center">
              <img 
                src="https://d3liyurciwi0wb.cloudfront.net/logo/Emblem_of_Andhra_Pradesh%20(2).png" 
                alt="Govt of Andhra Pradesh" 
                className={`object-contain mix-blend-multiply transition-all duration-300 ${isScrolled ? 'h-7 sm:h-8 md:h-11 lg:h-14' : 'h-9 sm:h-11 md:h-14 lg:h-20'}`}
              />
            </div>
          </a>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a 
              href="https://www.paniit.org/events/21873"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center min-h-11 px-5 py-2.5 bg-[#DD1D21] text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-red-600 transition-colors whitespace-nowrap"
            >
              Register Now
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#06206A] min-h-11 min-w-11 inline-flex items-center justify-center bg-white/70 border border-[#06206A]/10 rounded-md"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-[#06206A]">
        <div className="container mx-auto px-4 xl:px-8">
          <nav className="flex justify-center items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/85 text-[13px] font-medium tracking-wide py-3.5 px-5 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#06206A] border-t border-white/10 shadow-xl flex flex-col">
          
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 text-sm font-medium py-4 px-6 min-h-11 border-b border-white/10 hover:bg-white/5 hover:text-white"
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
              className="text-center min-h-11 inline-flex items-center justify-center py-3 bg-[#DD1D21] text-white font-semibold rounded-sm"
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
