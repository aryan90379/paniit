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

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-32 flex-grow flex flex-col justify-center">
        
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
          {/* RIGHT COLUMN - Glassmorphism Cards & Chief Guest */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex-1 w-full lg:relative flex flex-col lg:block gap-4 mt-12 lg:mt-0"
          >
            {/* Chief Guest Compact Pill */}
            <div className="lg:absolute lg:top-[-90px] lg:right-[10px] rounded-full p-2 pr-6 text-[#172c66] backdrop-blur-md shadow-lg bg-white/70 border border-white/80 flex items-center gap-4 z-30">
              <img src="https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg" alt="Chief Guest" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-[#E13926] tracking-widest leading-none mb-1">Chief Guest</span>
                <span className="text-sm font-bold text-[#001858] leading-none">Sri Nara Chandrababu Naidu</span>
              </div>
            </div>

            {/* Card 1 */}
            <div className="lg:absolute lg:top-[-20px] lg:left-[-20px] rounded-lg p-5 lg:w-[260px] text-[#172c66] backdrop-blur-[5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[#f3d2c1]/40 border border-white/20 z-20">
              <div className="font-bold text-xl mb-2 text-[#001858]">"A Global Network"</div>
              <p className="text-[1rem] leading-relaxed mb-3 opacity-90">
                1000+ top-tier alumni converging to shape the future of deeptech and innovation in Andhra Pradesh.
              </p>
              <div className="font-extrabold text-xs uppercase tracking-wider text-[#E13926] text-right">
                Community
              </div>
            </div>

            {/* Card 2 */}
            <div className="lg:absolute lg:top-[120px] lg:right-[10px] rounded-lg p-5 lg:w-[260px] text-[#172c66] backdrop-blur-[5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[#8bd3dd]/30 border border-white/20 z-10">
              <div className="font-bold text-xl mb-2 text-[#001858]">"Actionable Insights"</div>
              <p className="text-[1rem] leading-relaxed mb-3 opacity-90">
                20+ industry leaders sharing strategies for quantum computing, AI, and startup ecosystems.
              </p>
              <div className="font-extrabold text-xs uppercase tracking-wider text-[#153063] text-right">
                Knowledge
              </div>
            </div>

            {/* Card 3 */}
            <div className="lg:absolute lg:top-[280px] lg:left-[40px] rounded-lg p-5 lg:w-[260px] text-[#172c66] backdrop-blur-[5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[#E13926]/10 border border-white/20 z-0">
              <div className="font-bold text-xl mb-2 text-[#001858]">"Real Impact"</div>
              <p className="text-[1rem] leading-relaxed mb-3 opacity-90">
                Bridging the gap between world-class engineering talent and transformative state governance.
              </p>
              <div className="font-extrabold text-xs uppercase tracking-wider text-[#E13926] text-right">
                Action
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