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
      
      {/* FULL WIDTH BANNER CAROUSEL - Exact 16:9 ratio with WebGL Morph Slider */}
      <div className="w-full aspect-[16/9] relative overflow-hidden bg-slate-950 shadow-md">
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
        className="w-full bg-white backdrop-blur-md py-8 px-4 mt-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col text-center md:text-left">
            <h3 className="font-black text-[#06206A] text-lg uppercase tracking-wide">Date & Time</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-[#06206A]">
              <Calendar size={20} className="text-[#DD1D21]" />
              <span className="font-bold">3rd October, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-[#06206A]/20"></div>

          <div className="flex flex-col text-center md:text-left flex-1 max-w-lg">
            <h3 className="font-black text-[#06206A] text-lg uppercase tracking-wide">Venue</h3>
            <a 
              href="https://www.google.com/maps/dir//Dr.+B.+R.+Ambedkar'+Kala+Vedika,+GJ5J%2B8P2,+Buckinghampeta,+Vijayawada,+Andhra+Pradesh+520002/@19.1443224,72.9106087,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a35f100214ca94f:0xed340268dedead72!2m2!1d80.6317745!2d16.5082645"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center md:justify-start gap-2 mt-2 text-[#06206A] hover:text-[#DD1D21] transition-colors"
            >
              <MapPin size={20} className="text-[#DD1D21] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="font-bold leading-tight">
                Dr. B. R. Ambedkar Kala Vedika, Vijayawada, AP
                <span className="block text-xs uppercase tracking-wider text-[#DD1D21] mt-1 opacity-80 group-hover:opacity-100">Get Directions &rarr;</span>
              </span>
            </a>
          </div>

          <div className="hidden md:block w-px h-12 bg-[#06206A]/20"></div>

          <div className="w-full md:w-auto flex items-center justify-center">
            <a
              href="https://www.paniit.org/events/21873"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-8 py-3.5 bg-[#DD1D21] hover:bg-red-600 text-white font-bold text-sm md:text-base uppercase tracking-wider rounded-sm shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Register Now &rarr;
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
