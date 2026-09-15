'use client';
import MorphSlider from "@/components/ui/MorphSlider";
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  return (
    <section className="relative w-full pt-[80px] sm:pt-[90px] lg:pt-[205px] bg-white flex flex-col justify-between overflow-hidden" id="hero">
      
      {/* FULL WIDTH SLIDER - Exact 16:9 ratio to take full height of image without cropping */}
      <div className="w-full aspect-[16/9] relative">
        <div className="w-full h-full overflow-hidden relative">
          <MorphSlider
            items={[
              { image: 'https://wabflow.b-cdn.net/paniit/landing/image_2026-09-15_120838444.png', caption: 'PanIIT Andhra Pradesh Summit 2026' }
            ]}
            transition="melt"
            intensity={0.0}
            aberration={0.0}
            drift={0.0}
            autoplay={false}
            overlayColor="#ffffff"
            duration={1.0}
            ease="power2.inOut"
            scale={1.0}
            loop={false}
            radius={0}
            showCaptions={false}
            showControls={false}
            showIndicators={false}
          />
        </div>
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

        </div>
      </motion.div>
    </section>
  );
}
