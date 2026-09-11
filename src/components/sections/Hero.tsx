'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import AeroShards from '../AeroShards';
import WebThreads from '../WebThreads';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background with WebThreads (or AeroShards) */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        
        {/* Previous AeroShards implementation kept in stasis for quick switching */}
        {/*
        <AeroShards
          backgroundColor="#0a0a0a"
          shardColor="#1e3a8a" // PanIIT Navy Blue
          accentColor="#dc2626" // PanIIT Red
          placement="full"
          flow="stream"
          material="chrome"
          detail="balanced"
          effect="none"
          scale={1}
          spread={1}
          depth={1}
          speed={1.5}
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
        */}

        <WebThreads
          color1="#1e3a8a" // PanIIT Navy Blue
          color2="#dc2626" // PanIIT Red
          color3="#FFFFFF"
          speed={0.2}
          threadCount={6}
          frequency={5}
          spread={0.18}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.8}
          opacity={1}
          mirror={true}
          shimmer={false}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.3}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-md">
            AI & DeepTech
          </span>
          <span className="px-4 py-1.5 rounded-full bg-red-900/40 border border-red-500/30 text-red-400 text-sm font-medium backdrop-blur-md">
            Quantum Technology
          </span>
          <span className="px-4 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-400 text-sm font-medium backdrop-blur-md">
            Startups
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]"
        >
          PanIIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">Andhra Pradesh</span><br />
          Summit 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 font-light mb-2"
        >
          Andhra's DeepTech Decade: Anchored by PanIIT
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-red-400 font-medium mb-12"
        >
          Swarna Andhra to Viksit Bharat 2047
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Calendar className="text-blue-400" size={20} />
            <span>October 2-3, 2026</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-700" />
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-400" size={20} />
            <span>Vijayawada, Andhra Pradesh</span>
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
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
          >
            Register for the Event
          </a>
          <a
            href="#partner"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg backdrop-blur-sm transition-all"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
