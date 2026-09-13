'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import LightTunnel from '../LightTunnel';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background with LightTunnel - DARK THEME */}
      <div className="absolute inset-0 z-0">
        <LightTunnel
          cableColor="#E13926" // Vibrant Orange-Red
          pulseColor="#f97316" // Orange
          tunnelColor="#153063" // Deep Navy Blue
          tunnelOpacity={0.2}
          speed={0.1}
          flowDirection="outward"
          pulseSpeed={2}
          pulseLength={0.28}
          pulseBlend={1}
          pulseWidth={1}
          cableCount={20}
          thickness={0.35}
          rimWidth={0.15}
          waviness={0.3}
          sway={0.5}
          size={1}
          centerX={0}
          centerY={0}
          glow={1}
          fadeNear={0.5}
          fadeFar={2}
          brightness={1}
          colorVariance
          grain
          grainIntensity={0.05}
          opacity={1}
          mouseInteraction
          mouseStrength={0.1}
        />
        
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm font-bold shadow-sm uppercase tracking-wider backdrop-blur-sm">
            AI & DeepTech
          </span>
          <span className="px-5 py-2 rounded-full bg-[#E13926]/10 border border-[#E13926]/30 text-[#E13926] text-sm font-bold shadow-sm uppercase tracking-wider backdrop-blur-sm">
            Quantum Technology
          </span>
          <span className="px-5 py-2 rounded-full bg-[#153063]/30 border border-[#153063]/50 text-blue-300 text-sm font-bold shadow-sm uppercase tracking-wider backdrop-blur-sm">
            Startups
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white mb-8 leading-[1.05] uppercase"
        >
          PanIIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#E13926]">Andhra Pradesh</span><br />
          Summit 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-gray-200 font-semibold mb-3 tracking-tight"
        >
          Andhra's Resilient <span className="text-[#E13926] font-black">DEEPTECH DECADE:</span><br/>ANCHORED BY PANIIT
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-200 font-bold mb-12 uppercase tracking-wide"
        >
          Swarna Andhra to <span className="text-[#E13926] font-black">Viksit Bharat 2047</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white/10">
            <Calendar className="text-[#E13926]" size={24} />
            <span className="text-white font-bold text-lg">3rd October, 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white/10">
            <MapPin className="text-[#E13926]" size={24} />
            <span className="text-white font-bold text-lg text-left leading-tight">Dr. B. R. Ambedkar Kala Vedika,<br/>Buckingham Peta, Vijayawada</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#register"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#E13926] hover:bg-red-500 text-white font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 tracking-wide uppercase"
          >
            Registration Open Now
          </a>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
      >
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={40} />
        </a>
      </motion.div>

    </section>
  );
}
