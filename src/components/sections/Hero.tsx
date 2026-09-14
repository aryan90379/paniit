'use client';
import MorphSlider from "@/components/ui/MorphSlider";
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  return (
    <section className="relative w-full pt-[80px] bg-white flex flex-col justify-between overflow-hidden" id="hero">
      
      {/* FULL WIDTH SLIDER */}
      <div className="w-full h-[60vh] md:h-[75vh] min-h-[500px] max-h-[800px] relative ">
        <div className="w-full h-full overflow-hidden relative">
          <MorphSlider
            items={[
              { image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop', caption: 'Global Network' },
              { image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop', caption: 'Actionable Insights' },
              { image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop', caption: 'Real Impact' }
            ]}
            transition="melt"
            intensity={0.15}
            aberration={0.05}
            drift={0.1}
            autoplay={true}
            overlayColor="#05060a"
            duration={1.1}
            ease="power2.inOut"
            scale={1.1}
            autoplayDelay={4}
            loop={true}
            radius={0}
            showCaptions={false}
            showControls={true}
            showIndicators={true}
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
            <h3 className="font-black text-[#001858] text-lg uppercase tracking-wide">Date & Time</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-[#172c66]">
              <Calendar size={20} className="text-[#E13926]" />
              <span className="font-bold">3rd October, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-[#153063]/20"></div>

          <div className="flex flex-col text-center md:text-left flex-1 max-w-lg">
            <h3 className="font-black text-[#001858] text-lg uppercase tracking-wide">Venue</h3>
            <a 
              href="https://www.google.com/maps/dir//Dr.+B.+R.+Ambedkar'+Kala+Vedika,+GJ5J%2B8P2,+Buckinghampeta,+Vijayawada,+Andhra+Pradesh+520002/@19.1443224,72.9106087,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a35f100214ca94f:0xed340268dedead72!2m2!1d80.6317745!2d16.5082645"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center md:justify-start gap-2 mt-2 text-[#172c66] hover:text-[#E13926] transition-colors"
            >
              <MapPin size={20} className="text-[#E13926] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="font-bold leading-tight">
                Dr. B. R. Ambedkar Kala Vedika, Vijayawada, AP
                <span className="block text-xs uppercase tracking-wider text-[#E13926] mt-1 opacity-80 group-hover:opacity-100">Get Directions &rarr;</span>
              </span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
