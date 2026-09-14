'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const BACKGROUNDS = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1920&auto=format&fit=crop'
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Carousel
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 5000);
    
    // Timer
    const targetDate = new Date('October 3, 2026 09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#020617]">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={bgIndex}
            src={BACKGROUNDS[bgIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#001858]/60 z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex-1 flex flex-col lg:flex-row items-center gap-12 pt-32 pb-16">
        
        {/* LEFT COLUMN - Main Content */}
        <div className="flex-1 max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#E13926] animate-pulse"></span>
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">PanIIT Alumni India Summit</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight uppercase"
          >
            AP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E13926] to-[#f582ae]">Deeptech</span><br/>
            Summit 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-300 font-semibold mb-2 tracking-tight"
          >
            Swarna Andhra to <span className="text-white font-black">Viksit Bharat 2047</span>
          </motion.p>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-4 md:gap-6 my-10"
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg mb-2">
                  <span className="text-2xl md:text-4xl font-black text-white">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#register"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#E13926] text-white font-black uppercase tracking-wide rounded-sm hover:bg-[#c12e1f] transition-all duration-300 shadow-[0_0_20px_rgba(225,57,38,0.4)] hover:shadow-[0_0_30px_rgba(225,57,38,0.6)]"
            >
              Register Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
          {/* Chief Guest Big Pill - Top Right */}
          <div className="lg:absolute lg:top-[-20px] lg:right-[-10px] rounded-full p-2 pr-8 text-white backdrop-blur-xl shadow-2xl bg-white/10 border border-white/20 flex items-center gap-4 z-40 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 rounded-full relative shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E13926] to-[#153063] rounded-full scale-[1.05]" />
              <img src="https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Sri%20Nara%20Chandrababu%20Naidu.jpg" alt="Chief Guest" className="w-full h-full object-cover rounded-full relative z-10 border-2 border-white/20 bg-[#020617]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-[#E13926] tracking-widest leading-none mb-1.5 drop-shadow-md">Chief Guest</span>
              <span className="text-[1rem] font-black text-white leading-none mb-1">Sri Nara Chandrababu Naidu</span>
              <span className="text-[10px] font-bold text-gray-300 leading-none uppercase">Hon'ble Chief Minister, AP</span>
            </div>
          </div>

          {/* Card 1 - Center Left */}
          <div className="lg:absolute lg:top-[60px] lg:left-[-30px] rounded-xl p-4 lg:w-[220px] text-white backdrop-blur-md shadow-2xl bg-white/5 border border-white/10 z-20 hover:-translate-y-1 transition-transform">
            <div className="font-bold text-[1.1rem] mb-1.5 text-[#8bd3dd]">"A Global Network"</div>
            <p className="text-[0.85rem] leading-relaxed mb-2 text-gray-300">
              1000+ top-tier alumni converging to shape the future of deeptech.
            </p>
            <div className="font-extrabold text-[9px] uppercase tracking-wider text-[#E13926] text-right">
              Community
            </div>
          </div>

          {/* Card 2 - Center Right */}
          <div className="lg:absolute lg:top-[160px] lg:right-[10px] rounded-xl p-4 lg:w-[220px] text-white backdrop-blur-md shadow-2xl bg-white/5 border border-white/10 z-10 hover:-translate-y-1 transition-transform">
            <div className="font-bold text-[1.1rem] mb-1.5 text-[#8bd3dd]">"Actionable Insights"</div>
            <p className="text-[0.85rem] leading-relaxed mb-2 text-gray-300">
              20+ industry leaders sharing strategies for quantum computing, AI, and startups.
            </p>
            <div className="font-extrabold text-[9px] uppercase tracking-wider text-white/50 text-right">
              Knowledge
            </div>
          </div>

          {/* Card 3 - Bottom Left */}
          <div className="lg:absolute lg:top-[280px] lg:left-[20px] rounded-xl p-4 lg:w-[220px] text-white backdrop-blur-md shadow-2xl bg-white/5 border border-white/10 z-0 hover:-translate-y-1 transition-transform">
            <div className="font-bold text-[1.1rem] mb-1.5 text-[#8bd3dd]">"Real Impact"</div>
            <p className="text-[0.85rem] leading-relaxed mb-2 text-gray-300">
              Bridging the gap between world-class engineering talent and state governance.
            </p>
            <div className="font-extrabold text-[9px] uppercase tracking-wider text-[#E13926] text-right">
              Action
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* BOTTOM ROW - Event Details */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-8 px-4 relative z-20"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col text-center md:text-left">
            <h3 className="font-black text-gray-400 text-lg uppercase tracking-wide">Date & Time</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-white">
              <Calendar size={20} className="text-[#E13926]" />
              <span className="font-bold">3rd October, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-white/20"></div>

          <div className="flex flex-col text-center md:text-left flex-1 max-w-lg">
            <h3 className="font-black text-gray-400 text-lg uppercase tracking-wide">Venue</h3>
            <a 
              href="https://www.google.com/maps/dir//Dr.+B.+R.+Ambedkar'+Kala+Vedika,+GJ5J%2B8P2,+Buckinghampeta,+Vijayawada,+Andhra+Pradesh+520002"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center md:justify-start gap-2 mt-2 text-white hover:text-[#E13926] transition-colors"
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
