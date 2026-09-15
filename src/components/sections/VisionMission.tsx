'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe2, Cpu, TrendingUp, Users, Target, Rocket, Lightbulb, Network } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="mb-10 md:mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-red-200 bg-red-50 text-[#DD1D21] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6"
            >
              Our Vision
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-[#06206A] tracking-tight leading-[1.15]"
            >
              Vision of PanIIT<br className="hidden md:block" /> Andhra Pradesh Summit
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-500 font-medium max-w-md text-center md:text-left"
          >
            A strategic roadmap to elevate Andhra Pradesh as India's premier destination for deep-tech and industrial innovation.
          </motion.p>
        </div>

        {/* Visual Bento Grid - Infographic Carousel on Mobile / Grid on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pb-6 md:pb-0 hide-scrollbar snap-x snap-mandatory auto-rows-[340px] -mx-4 px-4 md:mx-0 md:px-0">
          
          {/* Card 1: Swarna Andhra 2047 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-1 bg-[#06184a] rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group cursor-default w-[88vw] sm:w-[70vw] md:w-auto snap-center shrink-0 flex flex-col justify-between border-2 border-blue-800/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl min-h-[320px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06206A] via-[#092b87] to-[#041444]" />
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#43AAF0]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#43AAF0]/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-[#43AAF0]/40 text-[#43AAF0] group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Target size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0">
                Roadmap to 2047
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#43AAF0]/25 text-[#C6E1F8] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Viksit Bharat</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/15 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Frontier R&D</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 sm:mb-3 tracking-tight">Swarna Andhra 2047</h3>
              <p className="text-[#C6E1F8] text-sm sm:text-base md:text-lg font-medium max-w-lg leading-relaxed">
                Aligning state priorities with Viksit Bharat 2047 to establish Andhra Pradesh as an innovation superpower.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Global Network */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 bg-[#051a54] rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group cursor-default w-[88vw] sm:w-[70vw] md:w-auto snap-center shrink-0 flex flex-col justify-between border-2 border-blue-900/50 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#041444] via-[#06206A] to-[#0a235c]" />
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-[#7ABDF1]/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 text-white group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Users size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#C6E1F8] text-[11px] font-bold uppercase tracking-wider shrink-0">
                500k+ IITians
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">Global Network</h3>
              <p className="text-[#C6E1F8] font-medium text-xs sm:text-sm leading-relaxed mb-3">
                Uniting alumni leaders, global CXOs, and policymakers to channel capital and leadership into AP.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#43AAF0] uppercase tracking-wider">
                Alumni • Industry • Policy
              </div>
            </div>
          </motion.div>

          {/* Card 3: Deep Tech */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 bg-[#1a0826] rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group cursor-default w-[88vw] sm:w-[70vw] md:w-auto snap-center shrink-0 flex flex-col justify-between border-2 border-purple-900/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0826] via-[#240b36] to-[#06206A]" />
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-[#DD1D21]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-red-500/40 text-red-300 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Rocket size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-400/30 text-red-200 text-[11px] font-bold uppercase tracking-wider shrink-0">
                Frontier Tech
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">AI & Deep Tech</h3>
              <p className="text-red-100 font-medium text-xs sm:text-sm leading-relaxed mb-3">
                Catalyzing breakthroughs in Quantum Computing, Artificial Intelligence, and Clean Energy ecosystems.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-300 uppercase tracking-wider">
                Quantum • AI • Startups
              </div>
            </div>
          </motion.div>

          {/* Card 4: Talent Pool */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 row-span-1 bg-[#062038] rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group cursor-default w-[88vw] sm:w-[70vw] md:w-auto snap-center shrink-0 flex flex-col justify-between border-2 border-teal-900/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#062038] via-[#09355c] to-[#041444]" />
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-[#43AAF0]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-teal-500/40 text-teal-300 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Lightbulb size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-200 text-[11px] font-bold uppercase tracking-wider shrink-0">
                Future Workforce
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">Talent Pool</h3>
              <p className="text-teal-100 font-medium text-xs sm:text-sm leading-relaxed mb-3">
                Transforming Andhra Pradesh youth into globally competitive engineering and research talent.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 uppercase tracking-wider">
                Mentorship • Academia • Chairs
              </div>
            </div>
          </motion.div>

          {/* Card 5: Innovation Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 row-span-1 bg-[#06184a] rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group cursor-default w-[88vw] sm:w-[70vw] md:w-auto snap-center shrink-0 flex flex-col justify-between border-2 border-blue-900/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06184a] via-[#0a2b75] to-[#041444]" />
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-[#C6E1F8]/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-indigo-500/40 text-indigo-300 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <MapPin size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-200 text-[11px] font-bold uppercase tracking-wider shrink-0">
                Innovation Hub
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">Innovation Hub</h3>
              <p className="text-indigo-100 font-medium text-xs sm:text-sm leading-relaxed mb-3">
                Showcasing Andhra Pradesh as a premier destination for high-value strategic tech investments.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#43AAF0] uppercase tracking-wider">
                Semiconductors • R&D Parks
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-xs font-bold text-gray-400">
          <span>Swipe to explore 5 vision pillars &rarr;</span>
        </div>

      </div>
    </section>
  );
}
