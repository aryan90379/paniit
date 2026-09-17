'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const measureNavbar = () => {
      const navbar = document.getElementById('main-navbar') || document.querySelector('header');
      if (!navbar) return;
      
      const rect = navbar.getBoundingClientRect();
      const h = Math.round(rect.height);
      if (h > 0) {
        // Capture unscrolled navbar height or initial height
        if (window.scrollY < 20 || navHeight === 0) {
          setNavHeight(h);
        }
      }
    };

    measureNavbar();

    window.addEventListener('resize', measureNavbar, { passive: true });

    const navbar = document.getElementById('main-navbar') || document.querySelector('header');
    let ro: ResizeObserver | null = null;
    if (navbar && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        measureNavbar();
      });
      ro.observe(navbar);
    }

    // Measure when header images finish loading
    const imgs = navbar?.querySelectorAll('img') || [];
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', measureNavbar, { once: true });
      }
    });

    return () => {
      window.removeEventListener('resize', measureNavbar);
      if (ro) ro.disconnect();
    };
  }, [navHeight]);

  const navOffset = navHeight ? `${navHeight}px` : 'var(--navbar-height, 70px)';

  return (
    <section 
      className="relative w-full bg-white flex flex-col justify-between overflow-hidden" 
      id="hero"
      style={{
        paddingTop: navOffset
      }}
    >
      
      <div className="w-full bg-white">
        <img
          src="/hero_banner.png"
          alt="PanIIT Andhra Pradesh Summit 2026"
          className="w-full h-auto block"
        />
      </div>
        
      {/* BOTTOM ROW - Event Details menu style */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full bg-white py-6 md:py-8 px-4 sm:px-6 relative z-10 mt-0"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-slate-50 md:bg-transparent rounded-[2rem] md:rounded-none p-6 md:p-0 border border-slate-100 md:border-none shadow-sm md:shadow-none">
          
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h3 className="font-semibold text-slate-500 text-[11px] sm:text-xs uppercase tracking-[0.18em] mb-1.5">Date & Time</h3>
            <div className="flex items-center gap-2.5 text-[#06206A]">
              <Calendar size={18} className="text-[#C4A35A]" />
              <span className="font-serif font-medium text-xl md:text-2xl tracking-tight">3rd October, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>
          {/* Mobile Divider */}
          <div className="md:hidden w-full h-px bg-slate-200/60 my-1"></div>

          <div className="flex flex-col items-center md:items-start flex-1 max-w-lg w-full text-center md:text-left">
            <h3 className="font-semibold text-slate-500 text-[11px] sm:text-xs uppercase tracking-[0.18em] mb-1.5">Venue</h3>
            <a 
              href="https://www.google.com/maps/dir//Dr.+B.+R.+Ambedkar'+Kala+Vedika,+GJ5J%2B8P2,+Buckinghampeta,+Vijayawada,+Andhra+Pradesh+520002/@19.1443224,72.9106087,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a35f100214ca94f:0xed340268dedead72!2m2!1d80.6317745!2d16.5082645"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center md:items-start text-[#06206A] hover:text-[#DD1D21] transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-[#C4A35A] shrink-0" />
                <span className="font-serif font-medium text-xl md:text-2xl leading-tight tracking-tight">
                  Dr. B. R. Ambedkar Kala Vedika
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#06206A] font-semibold mt-1.5 md:ml-6 group-hover:underline">
                Get directions →
              </span>
            </a>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200"></div>

          <div className="w-full md:w-auto flex items-center justify-center mt-2 md:mt-0">
            <a
              href="https://www.paniit.org/events/21873"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto min-h-11 text-center inline-flex items-center justify-center px-8 py-3.5 bg-[#DD1D21] hover:bg-red-600 text-white font-semibold text-sm tracking-wide rounded-md transition-transform duration-300 hover:scale-[1.03]"
            >
              Register Now &rarr;
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
