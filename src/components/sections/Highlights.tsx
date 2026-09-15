'use client';

import { motion } from 'framer-motion';
import { Flag, Mic2, FileText, Users, Network, Rocket, Coffee, Award, Shield, Satellite, Microchip, BookOpen, Tractor, HeartPulse, Leaf, Cpu, ArrowUpRight } from 'lucide-react';

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
  { 
    icon: Shield, 
    label: 'AI in Governance', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/AI%20in%20Governance%20(1).jpg',
    tag: 'GovTech & Policy'
  },
  { 
    icon: Satellite, 
    label: 'Defence & SpaceTech', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Defense%20and%20SpaceTech.jpg',
    tag: 'Strategic Aerospace'
  },
  { 
    icon: Cpu, 
    label: 'Quantum Computing', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Quantum%20Computing.webp',
    tag: 'Next-Gen Computing'
  },
  { 
    icon: Microchip, 
    label: 'Semiconductors', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Semiconductors.jpg',
    tag: 'Silicon & VLSI'
  },
  { 
    icon: BookOpen, 
    label: 'Skilling / Entrepreneurship', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Skilling_Entrepreneurship.webp',
    tag: 'Talent & Startups'
  },
  { 
    icon: Tractor, 
    label: 'AgriTech', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Agritech.jpg',
    tag: 'Smart Agriculture'
  },
  { 
    icon: HeartPulse, 
    label: 'BioValley / HealthTech', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Biovalley_HealthTech.jpg',
    tag: 'Life Sciences'
  },
  { 
    icon: Leaf, 
    label: 'Green Energy', 
    image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Green%20Energy.jpg',
    tag: 'CleanTech & Renewables'
  },
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
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#DD1D21]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#DD1D21]">PanIIT Summit Tracks</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#06206A] mb-3 tracking-tight text-center uppercase"
            >
              Session Themes
            </motion.h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto font-medium">Immersive tracks and deep-dives exploring the future of innovation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto px-4 md:px-0">
            {THEMES.map((theme, i) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="group relative h-64 sm:h-72 rounded-[1.75rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-gray-200/80 hover:border-blue-400/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between p-6 bg-slate-950"
                >
                  {/* Background Infographic Image with Zoom on Hover */}
                  <img
                    src={theme.image}
                    alt={theme.label}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />

                  {/* Gradient Overlays for High Contrast & Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/40 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#06206A]/25 mix-blend-multiply opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

                  {/* Top Bar: Icon Badge & Arrow */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:bg-[#DD1D21] group-hover:border-red-400 group-hover:shadow-lg transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white/90 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 group-hover:text-[#43AAF0] transition-colors block mb-1 drop-shadow-sm">
                      {theme.tag}
                    </span>
                    <h3 className="font-black text-lg md:text-xl text-white tracking-tight leading-snug drop-shadow-md group-hover:text-white transition-colors">
                      {theme.label}
                    </h3>
                    
                    {/* Dynamic Accent Bar */}
                    <div className="w-8 group-hover:w-16 h-1 bg-[#DD1D21] rounded-full mt-3 transition-all duration-300" />
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
