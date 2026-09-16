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
    <section id="advantage" className="bg-white">
      <div className="py-12 sm:py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#06206A] uppercase tracking-tight"
            >
              Beyond The Summit<br/>
              <span className="text-gray-400 font-bold text-xl sm:text-2xl md:text-4xl mt-1 sm:mt-2 block">Legacy Initiatives</span>
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
                  className="w-full bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all flex flex-col gap-3 sm:gap-4 group shadow-xs"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 text-[#06206A] flex items-center justify-center mb-1 sm:mb-2 shadow-xs group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#06206A]">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
