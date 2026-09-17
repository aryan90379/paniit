'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: 'https://wabflow.b-cdn.net/paniit/landing/image_2026-09-15_120838444.png',
  },
  {
    image: '/hero_banner.png',
  },
  {
    image: '/landing_banner.png',
  },
];

function PlainBanner({ slides }: { slides: { image: string }[] }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering || slides.length < 2) return undefined;
    const id = window.setTimeout(() => setIndex(i => (i + 1) % slides.length), 4000);
    return () => window.clearTimeout(id);
  }, [hovering, index, slides.length]);

  const go = (dir: number) => {
    setIndex(i => (i + dir + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full h-full bg-white"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          draggable={false}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {slides.length > 1 && (
        <>
          <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between px-4 -translate-y-1/2 pointer-events-none">
            <button
              type="button"
              className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-full text-white border border-white/20 bg-black/40 cursor-pointer hover:bg-black/55"
              aria-label="Previous slide"
              onClick={() => go(-1)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-full text-white border border-white/20 bg-black/40 cursor-pointer hover:bg-black/55"
              aria-label="Next slide"
              onClick={() => go(1)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="absolute left-0 right-0 bottom-4 z-10 flex gap-2 justify-center items-center" role="tablist" aria-label="Slides">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full ${i === index ? 'w-[22px] bg-[#DD1D21]' : 'w-2 bg-white/40'}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
      
      {/* FULL WIDTH BANNER CAROUSEL - fills remaining first screen under the navbar */}
      <div
        className="w-full relative overflow-hidden bg-white shadow-md"
        style={{ height: `calc(100dvh - ${navOffset})` }}
      >
        <PlainBanner slides={HERO_SLIDES} />
        {/* plain still-image carousel — no WebGL MorphSlider */}
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
