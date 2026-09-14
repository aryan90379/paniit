import MorphSlider from "@/components/ui/MorphSlider";

'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hero = heroRef.current;
    if (!cursor || !hero) return;

    let cursorP = { x: 0, y: 0 };
    let pageP = { x: 0, y: 0 };

    const lerp = (start: number, end: number, amount = 0.05) => {
      return (1 - amount) * start + amount * end;
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.opacity = '0.3';
      const rect = hero.getBoundingClientRect();
      pageP.x = e.clientX - rect.left;
      pageP.y = e.clientY - rect.top;
    };

    const handleMouseOut = () => {
      cursor.style.opacity = '0';
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseOut);

    let animationFrameId: number;
    const loop = () => {
      cursorP.x = lerp(cursorP.x, pageP.x, 0.1);
      cursorP.y = lerp(cursorP.y, pageP.y, 0.1);
      cursor.style.transform = `translate(calc(${cursorP.x}px - 50%), calc(${cursorP.y}px - 50%))`;
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex flex-col z-[2] bg-[#fef6e4] lg:bg-[#f8f9fa] overflow-x-hidden">
      
      {/* Grainy overlay */}
      <div 
        className="absolute inset-0 z-[3] mix-blend-normal opacity-40 pointer-events-none"
        style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }}
      />
      
      {/* Interactive Gradient Cursor */}
      <div 
        ref={cursorRef}
        className="absolute z-[1] w-[250px] h-[250px] left-0 top-0 pointer-events-none transition-opacity duration-1000 opacity-0 blur-[30px]"
      >
        <div 
          className="w-full h-full rounded-full animate-[spin_20s_linear_infinite_alternate]"
          style={{ background: 'radial-gradient(circle, #E13926, #153063)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-[200px] flex-grow flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center lg:items-start gap-12 lg:gap-8">
          
          {/* LEFT COLUMN - Title Area */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-10">


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="px-4 py-1.5 rounded-full bg-[#153063]/10 border border-[#153063]/20 text-[#153063] text-xs font-bold shadow-sm uppercase tracking-wider backdrop-blur-md">
                AI & DeepTech
              </span>
              <span className="px-4 py-1.5 rounded-full bg-[#E13926]/10 border border-[#E13926]/20 text-[#E13926] text-xs font-bold shadow-sm uppercase tracking-wider backdrop-blur-md">
                Quantum Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-[#153063] mb-6 leading-[1.05] uppercase"
            >
              PanIIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E13926] to-[#f582ae]">Andhra Pradesh</span><br />
              Summit 2026
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-[#172c66] font-semibold mb-2 tracking-tight"
            >
              Andhra's Resilient <span className="text-[#E13926] font-black">DEEPTECH DECADE</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-lg md:text-xl text-[#172c66]/80 font-bold mb-10 uppercase tracking-wide"
            >
              Swarna Andhra to <span className="text-[#E13926] font-black">Viksit Bharat 2047</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="#register"
                className="group relative px-8 py-4 bg-[#fef6e4] border-none cursor-pointer z-0 outline-none"
              >
                <span className="relative z-10 block bg-[#fef6e4] rounded-sm text-[#001858] font-black uppercase tracking-wide px-4 py-2">
                  Registration Open Now
                </span>
                <div className="absolute inset-[-3px] bg-gradient-to-r from-[#E13926] to-[#153063] rounded-lg -z-10 transition-shadow duration-300 ease-in group-hover:shadow-[0_0_10px_#f3d2c1,0_0_20px_#f582ae]"></div>
              </a>
            </motion.div>
          </div>
          {/* RIGHT COLUMN - Image Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex-1 w-full lg:w-1/2 mt-12 lg:mt-0 relative z-10"
          >
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
              <MorphSlider
                items={[
                  { image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop', caption: 'Global Network' },
                  { image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop', caption: 'Actionable Insights' },
                  { image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop', caption: 'Real Impact' }
                ]}
                transition="melt"
                intensity={0.55}
                aberration={0.35}
                drift={0.4}
                autoplay={true}
                overlayColor="#05060a"
                duration={1.1}
                ease="power2.inOut"
                scale={2.4}
                autoplayDelay={4}
                loop={true}
                radius={16}
                showCaptions={true}
                showControls={true}
                showIndicators={true}
              />
            </div>
            
            {/* Chief Guest floating over the slider */}
            <div className="absolute -top-6 -right-4 md:-top-8 md:-right-8 rounded-full p-2 pr-8 text-[#172c66] backdrop-blur-xl shadow-xl bg-white/90 border border-white flex items-center gap-4 z-40 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full relative shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E13926] to-[#153063] rounded-full scale-[1.05]" />
                <img src="https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg" alt="Chief Guest" className="w-full h-full object-cover rounded-full relative z-10 border-2 border-white bg-gray-100" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-[#E13926] tracking-widest leading-none mb-1.5">Chief Guest</span>
                <span className="text-[1rem] font-black text-[#001858] leading-none mb-1">Sri Nara Chandrababu Naidu</span>
                <span className="text-[10px] font-bold text-[#153063]/80 leading-none uppercase">Hon'ble Chief Minister, AP</span>
              </div>
            </div>
          </motion.div>
          
        </div>
        </div>
        
      {/* BOTTOM ROW - Event Details menu style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="w-full bg-white/40 backdrop-blur-md border-t border-white/50 py-8 px-4 mt-12"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
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