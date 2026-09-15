'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe2, Cpu, TrendingUp, Users, Target, Rocket, Lightbulb, Network } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-red-200 bg-red-50 text-[#DD1D21] text-sm font-bold uppercase tracking-widest mb-6"
            >
              Our Vision
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#06206A] tracking-tighter leading-[1.1]"
            >
              Vision of PanIIT<br className="hidden md:block" /> Andhra Pradesh Summit
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-medium max-w-md"
          >
            A strategic roadmap to elevate Andhra Pradesh as India's premier destination for deep-tech and industrial innovation.
          </motion.p>
        </div>

        {/* Visual Bento Grid - Infographic Carousel on Mobile / Grid on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible grid-cols-1 md:grid-cols-3 gap-6 pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory auto-rows-[340px]">
          
          {/* Card 1: Swarna Andhra 2047 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-1 bg-[#06184a] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group cursor-default min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-2 border-blue-800/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-45 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06184a] via-[#06184a]/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 bg-[#43AAF0]/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-[#43AAF0]/40 text-[#43AAF0] group-hover:scale-110 transition-transform duration-300">
                <Target size={28} />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-black uppercase tracking-widest">
                Roadmap to 2047
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#43AAF0]/25 text-[#C6E1F8] text-[11px] font-bold uppercase tracking-wider">Viksit Bharat</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider">Frontier R&D</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">Swarna Andhra 2047</h3>
              <p className="text-[#C6E1F8] text-base md:text-lg font-medium max-w-lg leading-relaxed">
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
            className="col-span-1 row-span-1 bg-[#051a54] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-2 border-blue-900/50 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051a54] via-[#051a54]/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 text-white group-hover:scale-110 transition-transform duration-300">
                <Users size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#C6E1F8] text-[11px] font-bold uppercase tracking-wider">
                500k+ IITians
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2 leading-tight">Global Network</h3>
              <p className="text-[#C6E1F8] font-medium text-sm leading-relaxed mb-3">
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
            className="col-span-1 row-span-1 bg-[#1a0826] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-2 border-purple-900/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-45 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0826] via-[#1a0826]/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-red-500/40 text-red-300 group-hover:scale-110 transition-transform duration-300">
                <Rocket size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-400/30 text-red-200 text-[11px] font-bold uppercase tracking-wider">
                Frontier Tech
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2 leading-tight">AI & Deep Tech</h3>
              <p className="text-red-100 font-medium text-sm leading-relaxed mb-3">
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
            className="col-span-1 row-span-1 bg-[#062038] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-2 border-teal-900/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062038] via-[#062038]/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-teal-500/40 text-teal-300 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-200 text-[11px] font-bold uppercase tracking-wider">
                Future Workforce
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2 leading-tight">Talent Pool</h3>
              <p className="text-teal-100 font-medium text-sm leading-relaxed mb-3">
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
            className="col-span-1 row-span-1 bg-[#06184a] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-2 border-blue-900/40 hover:border-[#43AAF0] hover:shadow-[0_15px_40px_-10px_rgba(67,170,240,0.4)] transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06184a] via-[#06184a]/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-indigo-500/40 text-indigo-300 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-200 text-[11px] font-bold uppercase tracking-wider">
                Innovation Hub
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2 leading-tight">Innovation Hub</h3>
              <p className="text-indigo-100 font-medium text-sm leading-relaxed mb-3">
                Showcasing Andhra Pradesh as a premier destination for high-value strategic tech investments.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#43AAF0] uppercase tracking-wider">
                Semiconductors • R&D Parks
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
