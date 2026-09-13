'use client';

import { motion } from 'framer-motion';
import { Factory, Cpu, Building2, Anchor, Microscope, Landmark, Rocket, Network, Lightbulb, Users, School } from 'lucide-react';

const ADVANTAGE = [
  {
    icon: Factory,
    text: "Capturing nearly 25% of India's FY 2025-26 proposed investments, Andhra Pradesh secured over ₹6.74 lakh crore across different industry sectors."
  },
  {
    icon: Lightbulb,
    text: "Powering India's deep-tech future, Andhra Pradesh is building a premier Quantum Valley Park to drive Quantum computing, literacy, and commercial innovation."
  },
  {
    icon: Cpu,
    text: "Global technology leaders such as Google and Reliance are driving large-scale investments in AI, digital infrastructure, and next-generation data centres in AP."
  },
  {
    icon: Anchor,
    text: "Strategic east-coast location with 6 operational world-class ports, 3 national industrial corridors, and strong logistics connectivity."
  },
  {
    icon: Microscope,
    text: "Emerging hub for AI, Space-tech, semiconductors, deep-tech, electronics, clean energy, and advanced manufacturing."
  }
];

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
      
      {/* Andhra Advantage Section */}
      <div className="py-24 pt-32 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-6 tracking-tight"
          >
            Andhra Pradesh: Powering India's Next Wave of Innovation & Industrial Growth
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {ADVANTAGE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-1 text-right">
                  <p className="text-lg md:text-xl text-[#1e3a8a] font-medium leading-relaxed text-right md:text-center">
                    {item.text}
                  </p>
                </div>
                <div className="w-16 h-16 shrink-0 flex items-center justify-center text-[#d97706] bg-orange-50 rounded-xl">
                  <Icon size={32} />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center text-lg md:text-xl text-white bg-[#1e3a8a] py-6 px-8 rounded-[2rem] font-medium shadow-lg max-w-3xl mx-auto">
          Building on a strong industrial legacy to drive the next era of innovation-led growth.
        </div>
      </div>

      {/* Legacy Initiatives Section */}
      <div className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#1e3a8a] uppercase tracking-tight"
            >
              Beyond The Summit:<br/>
              <span className="text-gray-900">PanIIT–Andhra Pradesh Legacy Initiatives</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEGACY.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-blue-100 shadow-sm hover:shadow-lg transition-all flex flex-col gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#e0e7ff] text-[#1e3a8a] flex items-center justify-center mb-2">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
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
