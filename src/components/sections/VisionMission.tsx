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

        {/* Visual Bento Grid - Carousel on Mobile */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible grid-cols-1 md:grid-cols-3 gap-6 pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory auto-rows-[300px]">
          
          {/* Card 1: Viksit Bharat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-1 bg-[#061128] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border border-blue-900/50"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061128] via-[#061128]/50 to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-blue-400/30 mb-4 z-10">
              <Target className="text-blue-300" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Swarna Andhra 2047</h3>
              <p className="text-blue-100/90 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                Aligning with Viksit Bharat 2047 to build a globally competitive, future-ready innovation ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Global Network */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 bg-[#0a0a0a] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border border-gray-800"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 mb-4 z-10">
              <Users className="text-white" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">Global Network</h3>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">
                Connecting Global IIT Alumni, Industry Leaders, and Policymakers to drive growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Deep Tech */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 bg-[#1A0B10] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border border-red-900/30"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B10] via-[#1A0B10]/50 to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-red-500/30 mb-4 z-10">
              <Rocket className="text-red-400" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">AI & Deep Tech</h3>
              <p className="text-red-200/80 font-medium text-sm leading-relaxed">
                Catalyzing AI, Quantum Computing, Green Energy, and Entrepreneurship.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Talent Pool */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 row-span-1 bg-[#091515] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border border-teal-900/30"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091515] via-[#091515]/50 to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-teal-500/30 mb-4 z-10">
              <Lightbulb className="text-teal-400" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">Talent Pool</h3>
              <p className="text-teal-100/70 font-medium text-sm leading-relaxed">
                Transforming AP's youth into a globally competitive talent pool for emerging industries.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Innovation Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 row-span-1 bg-[#0c1222] rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border border-blue-900/30"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/50 to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-indigo-500/30 mb-4 z-10">
              <MapPin className="text-indigo-400" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">Innovation Hub</h3>
              <p className="text-indigo-200/70 font-medium text-sm leading-relaxed">
                Showcasing Andhra Pradesh as a hub of skilled talent and strategic investment.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
