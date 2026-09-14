'use client';

import { motion } from 'framer-motion';
import { Factory, Cpu, Anchor, Microscope, Landmark, Rocket, Network, Users, TrendingUp, Zap, Server, Globe } from 'lucide-react';

const LEGACY = [
  {
    icon: Landmark,
    title: "Amaravati Council & Venture Fund",
    desc: "PAN IIT Amaravati Council to be constituted with a permanent secretariat. PAN IIT Amaravati Venture Fund to be launched for DeepTech investment in the State."
  },
  {
    icon: Network,
    title: "Tech Transfer & Declaration",
    desc: "IIT technology-transfer pipeline to be created for commercialisation. Andhra PanIIT Declaration to be released—a long-term commitment between the 23 IITs, Industry and Govt. of AP."
  },
  {
    icon: Rocket,
    title: "Quantum & DeepTech Policy",
    desc: "Quantum computing and frontier-tech capabilities to be launched (including NMIOPS). DeepTech policy package unveiled to attract R&D, startups, and advanced manufacturing."
  },
  {
    icon: Users,
    title: "Mentorship & Academia",
    desc: "100-member Global IIT Mentor Network to be launched. 10 Industry Chairs to be established across different institutions/universities in AP."
  }
];

export default function AdvantageLegacy() {
  return (
    <section id="advantage" className="bg-gray-50">
      
      {/* Andhra Advantage Section - Bento Grid */}
      <div className="py-24 pt-32 container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#153063] mb-6 tracking-tight uppercase"
          >
            Powering India's Next Wave of Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-medium"
          >
            Andhra Pradesh is rapidly transforming into a global deep-tech and industrial powerhouse.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[250px]">
          
          {/* Bento Card 1 - Big Number */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 row-span-1 bg-[#153063] rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-xl group cursor-default"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-500" />
            <TrendingUp className="text-blue-400/30 absolute right-8 bottom-8 w-32 h-32 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            
            <h3 className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4">Investments Secured</h3>
            <div className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              ₹6.74 <span className="text-3xl md:text-4xl text-blue-200">Lakh Cr+</span>
            </div>
            <p className="text-blue-100/80 text-lg max-w-md font-medium leading-snug">
              Capturing nearly 25% of India's FY 2025-26 proposed investments across various industry sectors.
            </p>
          </motion.div>

          {/* Bento Card 2 - Quantum */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 bg-gradient-to-br from-[#E13926] to-red-700 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center shadow-xl group cursor-default"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] pointer-events-none" />
            <Zap className="text-white/30 absolute right-6 top-6 w-24 h-24 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
            
            <h3 className="text-white font-black text-3xl leading-tight mb-3">Quantum<br/>Valley Park</h3>
            <p className="text-red-100 font-medium text-sm leading-relaxed">
              Powering India's deep-tech future to drive quantum computing and commercial innovation.
            </p>
          </motion.div>

          {/* Bento Card 3 - AI & Data Centers */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 row-span-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-md relative overflow-hidden group cursor-default"
          >
            <Server className="text-gray-100 absolute -right-4 -bottom-4 w-40 h-40 transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-all duration-500" />
            
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-[#153063] font-bold text-2xl mb-3">AI & Data Centers</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed relative z-10">
              Global tech leaders like Google and Reliance are driving large-scale digital infrastructure in AP.
            </p>
          </motion.div>

          {/* Bento Card 4 - Logistics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 row-span-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-md relative overflow-hidden group cursor-default"
          >
            <Globe className="text-gray-100 absolute -right-4 -bottom-4 w-40 h-40 transform group-hover:rotate-45 transition-all duration-700" />
            
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Anchor className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-[#153063] font-bold text-2xl mb-1">6 Ports &</h3>
            <h3 className="text-[#153063] font-bold text-2xl mb-3">3 Corridors</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed relative z-10">
              Strategic east-coast location providing world-class logistics and industrial connectivity.
            </p>
          </motion.div>

          {/* Bento Card 5 - Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-1 row-span-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-md relative overflow-hidden group cursor-default"
          >
            <Factory className="text-gray-100 absolute -right-4 -bottom-4 w-40 h-40 transform group-hover:scale-110 transition-all duration-500" />
            
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
              <Microscope className="text-amber-600" size={28} />
            </div>
            <h3 className="text-[#153063] font-bold text-2xl mb-3">Multi-Sector Hub</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed relative z-10">
              Emerging center for Space-tech, semiconductors, clean energy, and advanced manufacturing.
            </p>
          </motion.div>

        </div>
        
        <div className="mt-12 text-center text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest max-w-3xl mx-auto">
          Building on a strong industrial legacy to drive the next era of innovation-led growth.
        </div>
      </div>

      {/* Legacy Initiatives Section */}
      <div className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#153063] uppercase tracking-tight"
            >
              Beyond The Summit<br/>
              <span className="text-gray-400 font-bold text-2xl md:text-4xl mt-2 block">Legacy Initiatives</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGACY.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all flex flex-col gap-4 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#153063] flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#153063]">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
