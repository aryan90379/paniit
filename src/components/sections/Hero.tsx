'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import WebThreads from '../WebThreads';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Background with WebThreads - LIGHT THEME */}
      <div className="absolute inset-0 z-0">
        <WebThreads
          color1="#153063" // Deep Navy Blue
          color2="#E13926" // Bright Orange-Red
          color3="#3b82f6" // Light Blue
          speed={0.2}
          threadCount={5}
          frequency={4}
          spread={0.2}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0}
          falloff={0.4}
          thickness={1.5}
          brightness={0.8}
          opacity={0.6}
          mirror={true}
          shimmer={false}
          grain={false}
          mouseInteraction={true}
          mouseStrength={0.3}
        />
        
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 z-10 pointer-events-none backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="px-5 py-2 rounded-full bg-white border border-[#153063]/20 text-[#153063] text-sm font-bold shadow-sm uppercase tracking-wider">
            AI & DeepTech
          </span>
          <span className="px-5 py-2 rounded-full bg-white border border-[#E13926]/20 text-[#E13926] text-sm font-bold shadow-sm uppercase tracking-wider">
            Quantum Technology
          </span>
          <span className="px-5 py-2 rounded-full bg-white border border-blue-500/20 text-blue-600 text-sm font-bold shadow-sm uppercase tracking-wider">
            Startups
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-[#153063] mb-8 leading-[1.05] uppercase"
        >
          PanIIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#E13926]">Andhra Pradesh</span><br />
          Summit 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-[#153063] font-semibold mb-3 tracking-tight"
        >
          Andhra's Resilient <span className="text-[#E13926] font-black">DEEPTECH DECADE:</span><br/>ANCHORED BY PANIIT
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-[#153063] font-bold mb-12 uppercase tracking-wide"
        >
          Swarna Andhra to <span className="text-[#E13926] font-black">Viksit Bharat 2047</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
            <Calendar className="text-[#E13926]" size={24} />
            <span className="text-[#153063] font-bold text-lg">3rd October, 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
            <MapPin className="text-[#E13926]" size={24} />
            <span className="text-[#153063] font-bold text-lg text-left leading-tight">Dr. B. R. Ambedkar Kala Vedika,<br/>Buckingham Peta, Vijayawada</span>
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
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#E13926] hover:bg-[#E13926] text-white font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 tracking-wide uppercase"
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
        <a href="#about" className="text-[#153063]/50 hover:text-[#153063] transition-colors">
          <ChevronDown size={40} />
        </a>
      </motion.div>

    </section>
  );
}
