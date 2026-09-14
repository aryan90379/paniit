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
              className="inline-block px-4 py-1 rounded-full border border-red-200 bg-red-50 text-[#E13926] text-sm font-bold uppercase tracking-widest mb-6"
            >
              Our Vision
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#153063] tracking-tighter leading-[1.1]"
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

        {/* Bento Grid - Carousel on Mobile */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible grid-cols-1 md:grid-cols-3 gap-6 pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory auto-rows-[280px]">
          
          {/* Card 1: Viksit Bharat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-1 bg-[#153063] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-500" />
            <Globe2 className="text-white/10 absolute right-8 -bottom-8 w-48 h-48 transform group-hover:rotate-12 transition-all duration-700" />
            
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-4">
              <Target className="text-white" size={28} />
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
            className="col-span-1 row-span-1 bg-gray-50 border border-gray-200 rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between"
          >
            <Network className="text-gray-200 absolute -right-6 -bottom-6 w-40 h-40 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500" />
            
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mb-4 z-10">
              <Users className="text-[#153063]" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-[#153063] mb-3 leading-tight">Global Network</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
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
            className="col-span-1 row-span-1 bg-gradient-to-br from-[#E13926] to-red-800 rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] pointer-events-none" />
            <Cpu className="text-white/20 absolute -right-4 -bottom-4 w-36 h-36 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
            
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-4 z-10">
              <Rocket className="text-white" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">AI & Deep Tech</h3>
              <p className="text-red-100 font-medium text-sm leading-relaxed">
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
            className="col-span-1 row-span-1 bg-gray-900 rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between"
          >
            <TrendingUp className="text-gray-800 absolute -right-6 -bottom-6 w-40 h-40 transform group-hover:-translate-y-4 transition-all duration-700" />
            
            <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 mb-4 z-10">
              <Lightbulb className="text-yellow-400" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">Talent Pool</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
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
            className="col-span-1 row-span-1 bg-blue-50 border border-blue-100 rounded-[2rem] p-8 relative overflow-hidden group cursor-default min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-between"
          >
            <MapPin className="text-blue-200 absolute -right-4 -bottom-8 w-40 h-40 transform group-hover:scale-110 transition-all duration-500" />
            
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-blue-100 mb-4 z-10">
              <MapPin className="text-blue-600" size={28} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-blue-900 mb-3 leading-tight">Innovation Hub</h3>
              <p className="text-blue-700/80 font-medium text-sm leading-relaxed">
                Showcasing Andhra Pradesh as a hub of skilled talent and strategic investment.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
