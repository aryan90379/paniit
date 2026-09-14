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
    <section id="advantage" className="bg-[#F4ECE4]">
      
      {/* Andhra Advantage Section - Bento Grid */}
      <div className="py-24 pt-32 container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#06206A] mb-6 tracking-tight uppercase"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[320px]">
          
          {/* Bento Card 1 - Big Number */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 row-span-1 rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-end shadow-xl group cursor-default bg-cover bg-center "
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-10">
              <h3 className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-2">Investments Secured</h3>
              <div className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tighter">
                ₹6.74 <span className="text-3xl md:text-4xl text-blue-200">Lakh Cr+</span>
              </div>
              <p className="text-gray-300 text-lg max-w-md font-medium leading-snug">
                Capturing nearly 25% of India's FY 2025-26 proposed investments across various industry sectors.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2 - Quantum */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end shadow-xl group cursor-default bg-cover bg-center "
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-10">
              <Zap className="text-red-400 w-10 h-10 mb-4" />
              <h3 className="text-white font-black text-3xl leading-tight mb-2">Quantum<br/>Valley Park</h3>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">
                Powering India's deep-tech future to drive quantum computing and commercial innovation.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 3 - AI & Data Centers */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 row-span-1 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end shadow-xl group cursor-default bg-cover bg-center "
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Cpu className="text-white" size={24} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">AI & Data Centers</h3>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">
                Global tech leaders like Google and Reliance are driving large-scale digital infrastructure in AP.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 4 - Logistics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 row-span-1 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end shadow-xl group cursor-default bg-cover bg-center "
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?q=80&w=1600&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Anchor className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-0.5">6 Ports &</h3>
              <h3 className="text-white font-bold text-2xl mb-2">3 Corridors</h3>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">
                Strategic east-coast location providing world-class logistics and industrial connectivity.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 5 - Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-1 row-span-1 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end shadow-xl group cursor-default bg-cover bg-center "
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Microscope className="text-amber-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Multi-Sector Hub</h3>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">
                Emerging center for Space-tech, semiconductors, clean energy, and advanced manufacturing.
              </p>
            </div>
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
              className="text-3xl md:text-5xl font-black text-[#06206A] uppercase tracking-tight"
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
                  className="bg-[#F4ECE4] p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all flex flex-col gap-4 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#06206A] flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#06206A]">{item.title}</h3>
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
