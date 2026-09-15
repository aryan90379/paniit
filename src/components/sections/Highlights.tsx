'use client';

import { motion } from 'framer-motion';
import { Flag, Mic2, FileText, Users, Network, Rocket, Coffee, Award, Shield, Satellite, Microchip, BookOpen, Tractor, HeartPulse, Battery, Cpu } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Flag, label: 'Grand Opening Ceremony', desc: 'Kickoff with state leaders', tag: 'Inaugural' },
  { icon: Mic2, label: 'Visionary Keynotes', desc: 'Insights from global icons', tag: 'Keynote' },
  { icon: FileText, label: 'Policy & Vision Papers', desc: 'Shaping the 2047 roadmap', tag: 'Policy' },
  { icon: Users, label: 'Leadership Panels', desc: 'CXO-level discussions', tag: 'Leadership' },
  { icon: Network, label: 'Strategic Roundtables', desc: 'Exclusive networking', tag: 'Network' },
  { icon: Rocket, label: 'Innovation Expo', desc: 'Cutting-edge startups', tag: 'Startups' },
  { icon: Coffee, label: 'Executive Lunch', desc: 'Connect with peers', tag: 'Networking' },
  { icon: Award, label: "Valedictory Address", desc: "Hon'ble CM's closing remarks", tag: 'Valedictory' },
];

const THEMES = [
  { icon: Shield, label: 'AI in Governance', color: 'text-[#43AAF0]', bg: 'bg-[#C6E1F8]', border: 'border-blue-200' },
  { icon: Satellite, label: 'Defence & SpaceTech', color: 'text-[#DD1D21]', bg: 'bg-red-100', border: 'border-red-200' },
  { icon: Cpu, label: 'Quantum Computing', color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200' },
  { icon: Microchip, label: 'Semiconductors', color: 'text-[#43AAF0]', bg: 'bg-[#E3F0FA]', border: 'border-blue-200' },
  { icon: BookOpen, label: 'Skilling / Entrepreneurship', color: 'text-[#DD1D21]', bg: 'bg-red-50', border: 'border-red-200' },
  { icon: Tractor, label: 'AgriTech', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { icon: HeartPulse, label: 'BioValley/HealthTech', color: 'text-[#43AAF0]', bg: 'bg-[#C6E1F8]', border: 'border-blue-200' },
  { icon: Battery, label: 'Energy', color: 'text-[#DD1D21]', bg: 'bg-red-100', border: 'border-red-200' },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-white text-gray-900 relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-center"
          >
            Summit Highlights
          </motion.h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">Explore the key moments and infographic highlights of the PanIIT Andhra Pradesh Summit.</p>
          
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory pb-8 px-4 md:px-0">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="min-w-[75vw] sm:min-w-[60vw] md:min-w-0 min-h-[280px] snap-center shrink-0 relative group cursor-pointer rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-900/40 bg-gradient-to-br from-[#06206A] via-[#08287a] to-[#041444] p-8 flex flex-col justify-between"
                >
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#43AAF0]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#43AAF0]/20 flex items-center justify-center backdrop-blur-md border border-[#43AAF0]/40 text-[#43AAF0] group-hover:scale-110 group-hover:bg-[#43AAF0] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={26} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C6E1F8] text-[11px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl leading-tight mb-2 text-white group-hover:text-[#C6E1F8] transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm text-[#C6E1F8]/80 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-center"
          >
            Session Themes
          </motion.h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Immersive tracks and deep-dives exploring the future of innovation.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4 md:px-0">
            {THEMES.map((theme, i) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex flex-col justify-between p-6 rounded-[1.5rem] ${theme.bg} border ${theme.border} cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[150px] relative overflow-hidden group`}
                >
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
                    <Icon size={120} className={theme.color} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                      <Icon size={20} className={theme.color} />
                    </div>
                    <span className="font-bold text-gray-800 tracking-wide text-lg leading-tight block">{theme.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
