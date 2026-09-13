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
            className="flex-1 w-full mt-12 lg:mt-0"
          >
            {/* Desktop Orbital Layout */}
            <div className="hidden lg:block relative w-full h-[450px]">
              {/* Chief Guest Focal Card - DEAD CENTER */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[280px] rounded-2xl p-6 text-[#172c66] backdrop-blur-xl shadow-2xl bg-white border border-white flex flex-col items-center text-center z-40 transform hover:scale-105 transition-transform duration-300">
                <div className="w-28 h-28 rounded-full mb-4 relative shadow-[0_0_20px_rgba(225,57,38,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E13926] to-[#153063] rounded-full scale-[1.05]" />
                  <img src="https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg" alt="Chief Guest" className="w-full h-full object-cover rounded-full relative z-10 border-[3px] border-white bg-gray-100" />
                </div>
                <div className="px-4 py-1 rounded-full bg-[#E13926] text-white text-[10px] font-black uppercase tracking-widest mb-3 shadow-sm">
                  Chief Guest
                </div>
                <h2 className="font-black text-[1.1rem] text-[#001858] leading-tight mb-1">
                  Sri Nara Chandrababu Naidu
                </h2>
                <p className="font-bold text-[#E13926] text-[10px] uppercase tracking-wider">
                  Hon'ble Chief Minister, AP
                </p>
              </div>

              {/* Card 1 - Top Left Orbit */}
              <div className="absolute top-0 left-[10px] rounded-xl p-5 w-[230px] text-[#172c66] backdrop-blur-[8px] shadow-lg bg-[#f3d2c1]/80 border border-white/60 z-20 hover:-translate-y-2 transition-transform">
                <div className="font-bold text-[1.05rem] mb-2 text-[#001858]">"A Global Network"</div>
                <p className="text-[0.85rem] leading-relaxed mb-3 opacity-90">
                  1000+ top-tier alumni converging for the future of deeptech.
                </p>
                <div className="font-extrabold text-[9px] uppercase tracking-wider text-[#E13926] text-right mt-auto">
                  Community
                </div>
              </div>

              {/* Card 2 - Top Right Orbit */}
              <div className="absolute top-[60px] right-0 rounded-xl p-5 w-[230px] text-[#172c66] backdrop-blur-[8px] shadow-lg bg-[#8bd3dd]/70 border border-white/60 z-20 hover:-translate-y-2 transition-transform">
                <div className="font-bold text-[1.05rem] mb-2 text-[#001858]">"Actionable Insights"</div>
                <p className="text-[0.85rem] leading-relaxed mb-3 opacity-90">
                  20+ industry leaders sharing quantum & AI strategies.
                </p>
                <div className="font-extrabold text-[9px] uppercase tracking-wider text-[#153063] text-right mt-auto">
                  Knowledge
                </div>
              </div>

              {/* Card 3 - Bottom Center Orbit */}
              <div className="absolute bottom-[20px] left-1/2 -translate-x-[40%] rounded-xl p-5 w-[250px] text-[#172c66] backdrop-blur-[8px] shadow-lg bg-[#E13926]/15 border border-white/60 z-50 hover:-translate-y-2 transition-transform">
                <div className="font-bold text-[1.05rem] mb-2 text-[#001858]">"Real Impact"</div>
                <p className="text-[0.85rem] leading-relaxed mb-3 opacity-90">
                  Bridging the gap between engineering talent and state governance.
                </p>
                <div className="font-extrabold text-[9px] uppercase tracking-wider text-[#E13926] text-right mt-auto">
                  Action
                </div>
              </div>
            </div>

            {/* Mobile Stack Layout */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="rounded-2xl p-5 text-[#172c66] backdrop-blur-xl shadow-xl bg-white border border-white/60 flex flex-col items-center text-center z-30">
                <div className="w-24 h-24 rounded-full mb-3 relative shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E13926] to-[#153063] rounded-full scale-[1.05]" />
                  <img src="https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg" alt="Chief Guest" className="w-full h-full object-cover rounded-full relative z-10 border-[3px] border-white bg-gray-100" />
                </div>
                <div className="px-3 py-1 rounded-full bg-[#E13926] text-white text-[9px] font-black uppercase tracking-widest mb-2 shadow-sm">
                  Chief Guest
                </div>
                <h2 className="font-black text-[1rem] text-[#001858] leading-tight mb-1">
                  Sri Nara Chandrababu Naidu
                </h2>
                <p className="font-bold text-[#E13926] text-[10px] uppercase tracking-wider">
                  Hon'ble Chief Minister, AP
                </p>
              </div>
              <div className="rounded-xl p-5 text-[#172c66] backdrop-blur-[5px] shadow-lg bg-[#f3d2c1]/60 border border-white/40">
                <div className="font-bold text-[1.05rem] mb-2 text-[#001858]">"A Global Network"</div>
                <p className="text-[0.85rem] leading-relaxed mb-3 opacity-90">1000+ top-tier alumni converging for the future of deeptech.</p>
              </div>
              <div className="rounded-xl p-5 text-[#172c66] backdrop-blur-[5px] shadow-lg bg-[#8bd3dd]/50 border border-white/40">
                <div className="font-bold text-[1.05rem] mb-2 text-[#001858]">"Actionable Insights"</div>
                <p className="text-[0.85rem] leading-relaxed mb-3 opacity-90">20+ industry leaders sharing quantum & AI strategies.</p>
              </div>
              <div className="rounded-xl p-5 text-[#172c66] backdrop-blur-[5px] shadow-lg bg-[#E13926]/10 border border-white/40">
                <div className="font-bold text-[1.05rem] mb-2 text-[#001858]">"Real Impact"</div>
                <p className="text-[0.85rem] leading-relaxed mb-3 opacity-90">Bridging the gap between engineering talent and state governance.</p>
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