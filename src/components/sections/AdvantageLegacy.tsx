'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Rocket, Factory, Ship, Cpu, ShieldCheck } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: TrendingUp,
    title: "~25% of India's Investments",
    desc: "Proposed investments in FY 2025–26, marking AP as the leading destination."
  },
  {
    icon: Landmark,
    title: "₹74.74 Lakh Crore+",
    desc: "Investment proposals approved and actively being mobilized."
  },
  {
    icon: Globe,
    title: "Global Tech Leaders",
    desc: "Google, Reliance, and others investing heavily in AI, data centres, and digital infra."
  },
  {
    icon: Ship,
    title: "Unmatched Logistics",
    desc: "6 operational ports and 3 national industrial corridors providing strong connectivity."
  },
  {
    icon: Cpu,
    title: "Emerging DeepTech Hub",
    desc: "Leading in AI, space-tech, semiconductors, electronics, and clean energy."
  }
];

// Re-using Lucide imports locally since we missed Landmark/Globe in this file
import { Landmark, Globe } from 'lucide-react';

const OUTCOMES = [
  "IIT technology-transfer pipeline for AP.",
  "Andhra PanIIT Declaration (23 IITs + Industry + Govt of AP).",
  "Quantum & frontier-tech capabilities (incl. NMIQPS).",
  "DeepTech policy package.",
  "PanIIT Amaravati Council + permanent secretariat.",
  "PanIIT Amaravati Venture Fund.",
  "100-member Global IIT Mentor Network.",
  "10 Industry Chairs across AP institutions."
];

export default function AdvantageLegacy() {
  return (
    <section id="advantage" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Andhra Advantage */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight text-center"
          >
            Why Andhra Pradesh
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{adv.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legacy Beyond the Summit */}
        <div>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Legacy Beyond the Summit
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
            >
              Committed outcomes and deliverables driving long-term impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {OUTCOMES.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-red-900/10 to-transparent border border-red-500/10 hover:border-red-500/30 transition-colors"
              >
                <div className="mt-1 text-red-400">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-gray-200 font-medium">{outcome}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
