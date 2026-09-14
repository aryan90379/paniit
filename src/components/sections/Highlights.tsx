'use client';

import { motion } from 'framer-motion';
import { Flag, Mic2, FileText, Users, Network, Rocket, Coffee, Award, Shield, Satellite, Microchip, BookOpen, Tractor, HeartPulse, Battery, Cpu } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Flag, label: 'Grand Opening Ceremony', desc: 'Kickoff with state leaders' },
  { icon: Mic2, label: 'Visionary Keynotes', desc: 'Insights from global icons' },
  { icon: FileText, label: 'Policy & Vision Papers', desc: 'Shaping the 2047 roadmap' },
  { icon: Users, label: 'Leadership Panels', desc: 'CXO-level discussions' },
  { icon: Network, label: 'Strategic Roundtables', desc: 'Exclusive networking' },
  { icon: Rocket, label: 'Innovation Expo', desc: 'Cutting-edge startups' },
  { icon: Coffee, label: 'Executive Lunch', desc: 'Connect with peers' },
  { icon: Award, label: "Valedictory Address", desc: "Hon'ble CM's closing remarks" },
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

const NOISE_SVG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjAuODQiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJ0dXJidWxlbmNlIiBiYXNlRnJlcXVlbmN5PSIwLjIiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+Cgk8ZmVTcGVjdWxhckxpZ2h0aW5nIHN1cmZhY2VTY2FsZT0iMjYiIHNwZWN1bGFyQ29uc3RhbnQ9IjMiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzA1Njk2OSIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTc4Ij48L2ZlRGlzdGFudExpZ2h0PgogIAk8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAKPC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjMDU2OTY5IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+PC9zdmc+";

export default function Highlights() {
  return (
    <section className="py-24 bg-white text-gray-900 relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-16 tracking-tight text-center"
          >
            Summit Highlights
          </motion.h2>
          
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
                  className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-[#DD1D21] rounded-[1.5rem] rotate-6 scale-95 opacity-20 mix-blend-multiply group-hover:rotate-8 transition-transform duration-300 origin-center" />
                  
                  <div className="relative z-10 p-8 rounded-[1.5rem] h-full flex flex-col justify-center items-center text-center overflow-hidden border border-blue-400/30 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1),0_1rem_3rem_rgba(0,0,0,0.15)] bg-[#06206A] text-white transition-transform duration-300 group-hover:-translate-y-1">
                    
                    <div 
                      className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none grayscale brightness-150" 
                      style={{ backgroundImage: `url('${NOISE_SVG}')`, backgroundSize: 'cover' }} 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20 pointer-events-none" />

                    <div className="relative z-20 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                        <Icon size={24} className="text-red-400" />
                      </div>
                      <h3 className="font-bold text-xl leading-tight mb-2 text-white">
                        {item.label}
                      </h3>
                      <p className="text-sm text-blue-200 opacity-80 leading-snug">
                        {item.desc}
                      </p>
                    </div>

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
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight text-center"
          >
            Session Themes
          </motion.h2>

          <div className="flex md:flex-wrap md:justify-center gap-4 max-w-5xl mx-auto overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory pb-4 px-4 md:px-0">
            {THEMES.map((theme, i) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`snap-center shrink-0 flex items-center gap-3 px-6 py-4 rounded-full ${theme.bg} border ${theme.border} cursor-default hover:scale-105 transition-transform duration-300 shadow-sm`}
                >
                  <Icon size={20} className={theme.color} />
                  <span className="font-semibold text-gray-800 tracking-wide">{theme.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Convex curve dipping into the next section */}

    </section>
  );
}
