'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import MorphSlider from '@/components/MorphSlider';

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

export default function Hero() {
  return (
    <section className="relative w-full pt-[80px] sm:pt-[90px] lg:pt-[205px] bg-white flex flex-col justify-between overflow-hidden" id="hero">
      
      {/* FULL WIDTH BANNER CAROUSEL - WebGL Morph Slider */}
      <div className="w-full aspect-[4/3] md:aspect-[16/9] relative overflow-hidden bg-slate-950 shadow-md">
        <MorphSlider
          items={HERO_SLIDES}
          transition="melt"
          duration={1.2}
          intensity={0.55}
          aberration={0.35}
          drift={0.4}
          autoplay={true}
          autoplayDelay={4}
          loop={true}
          radius={0}
          showCaptions={false}
          showControls={true}
          showIndicators={true}
          className="w-full h-full"
        />
      </div>
        
      {/* BOTTOM ROW - Event Details menu style */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full bg-white py-6 md:py-8 px-4 sm:px-6 relative z-10 -mt-2 md:mt-0"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-slate-50 md:bg-transparent rounded-[2rem] md:rounded-none p-6 md:p-0 border border-slate-100 md:border-none shadow-sm md:shadow-none">
          
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h3 className="font-bold text-slate-400 text-[11px] sm:text-xs uppercase tracking-widest mb-1.5">Date & Time</h3>
            <div className="flex items-center gap-2.5 text-[#06206A]">
              <Calendar size={18} className="text-[#DD1D21]" />
              <span className="font-black text-lg md:text-xl tracking-tight">3rd October, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>
          {/* Mobile Divider */}
          <div className="md:hidden w-full h-px bg-slate-200/60 my-1"></div>

          <div className="flex flex-col items-center md:items-start flex-1 max-w-lg w-full text-center md:text-left">
            <h3 className="font-bold text-slate-400 text-[11px] sm:text-xs uppercase tracking-widest mb-1.5">Venue</h3>
            <a 
              href="https://www.google.com/maps/dir//Dr.+B.+R.+Ambedkar'+Kala+Vedika,+GJ5J%2B8P2,+Buckinghampeta,+Vijayawada,+Andhra+Pradesh+520002/@19.1443224,72.9106087,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a35f100214ca94f:0xed340268dedead72!2m2!1d80.6317745!2d16.5082645"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center md:items-start gap-1.5 md:gap-2.5 text-[#06206A] hover:text-[#DD1D21] transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-[#DD1D21] group-hover:scale-110 transition-transform shrink-0 mt-1 self-start" />
                <span className="font-black text-lg md:text-xl leading-tight tracking-tight max-w-[200px]">
                  Dr. B. R. Ambedkar Kala Vedika
                </span>
              </div>
              <div className="flex flex-col ml-0 md:ml-4 text-sm font-bold text-slate-500 md:mt-1">
                <span>Vijayawada, AP</span>
                <span className="text-[11px] uppercase tracking-wider text-[#DD1D21] font-bold mt-1 group-hover:underline">GET DIRECTIONS &rarr;</span>
              </div>
            </a>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200"></div>

          <div className="w-full md:w-auto flex items-center justify-center mt-2 md:mt-0">
            <a
              href="https://www.paniit.org/events/21873"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-8 py-4 bg-[#DD1D21] hover:bg-red-600 text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(221,29,33,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(221,29,33,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Register Now &rarr;
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
