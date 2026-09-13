'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import AeroShards from '../AeroShards';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#050B14]">
      {/* Background with AeroShards - DARK THEME */}
      <div className="absolute inset-0 z-0">
        <AeroShards
          backgroundColor="#050B14" // Deep Dark Navy
          shardColor="#3b82f6" // Bright Blue (from poster's sky/water)
          accentColor="#E13926" // Vermilion Red (from poster's text)
          placement="full"
          flow="stream"
          material="pearl"
          detail="balanced"
          effect="none"
          scale={1}
          spread={1.5}
          depth={1}
          speed={1}
          spin={1}
          interaction="repel"
          density={1.5}
          shardSize={1.1}
          stretch={1}
          turbulence={1}
          glow={1}
          edgeSoftness={2}
          bloom={0.5}
          grain={0.05}
          chromaticAberration={0.0075}
          transitionDuration={1}
          interactionRadius={1.5}
          interactionStrength={0.5}
          rippleIntensity={1}
          holdToGather={true}
        />
        
        {/* Overlay to ensure text readability and maintain deep dark vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-transparent to-[#050B14] z-10 pointer-events-none" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="px-5 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-bold shadow-sm uppercase tracking-wider backdrop-blur-md">
            AI & DeepTech
          </span>
          <span className="px-5 py-2 rounded-full bg-[#E13926]/20 border border-[#E13926]/40 text-red-300 text-sm font-bold shadow-sm uppercase tracking-wider backdrop-blur-md">
            Quantum Technology
          </span>
          <span className="px-5 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-bold shadow-sm uppercase tracking-wider backdrop-blur-md">
            Startups
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white mb-8 leading-[1.05] uppercase"
        >
          PanIIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#E13926]">Andhra Pradesh</span><br />
          Summit 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-blue-100 font-semibold mb-3 tracking-tight"
        >
          Andhra's Resilient <span className="text-[#E13926] font-black">DEEPTECH DECADE:</span><br/>ANCHORED BY PANIIT
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-blue-100 font-bold mb-12 uppercase tracking-wide"
        >
          Swarna Andhra to <span className="text-[#E13926] font-black">Viksit Bharat 2047</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-blue-500/20">
            <Calendar className="text-blue-400" size={24} />
            <span className="text-white font-bold text-lg">3rd October, 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-blue-500/20">
            <MapPin className="text-blue-400" size={24} />
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
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#E13926] hover:bg-red-600 text-white font-black text-lg transition-all shadow-[0_0_20px_rgba(225,57,38,0.4)] hover:shadow-[0_0_35px_rgba(225,57,38,0.6)] hover:-translate-y-1 tracking-wide uppercase"
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
