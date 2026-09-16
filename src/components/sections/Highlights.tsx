'use client';

import { motion } from 'framer-motion';
import { Flag, Mic2, FileText, Users, Network, Rocket, Coffee, Award, Shield, Satellite, Microchip, BookOpen, Tractor, HeartPulse, Leaf, Cpu, ArrowUpRight } from 'lucide-react';

const HIGHLIGHTS = [
  { 
    icon: Flag, 
    label: 'Grand Opening Ceremony', 
    desc: 'Kickoff with state leaders and global dignitaries', 
    tag: 'Inaugural',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/grand%20opening.jpg',
    localImage: '/summit_highlights/grand opening.jpg'
  },
  { 
    icon: Mic2, 
    label: 'Visionary Keynotes', 
    desc: 'Insights and foresight from global technology icons', 
    tag: 'Keynote',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/visionary%20keynotes.jpg',
    localImage: '/summit_highlights/visionary keynotes.jpg'
  },
  { 
    icon: FileText, 
    label: 'Policy & Vision Papers', 
    desc: 'Shaping the Andhra Pradesh 2047 economic roadmap', 
    tag: 'Policy',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/policy%20papers.jpg',
    localImage: '/summit_highlights/policy papers.jpg'
  },
  { 
    icon: Users, 
    label: 'Leadership Panels', 
    desc: 'CXO-level discussions and IIT director roundtables', 
    tag: 'Leadership',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/speaker-giving-talk-conference-hall-260nw-2321303215%20(1).webp',
    localImage: '/summit_highlights/speaker-giving-talk-conference-hall-260nw-2321303215 (1).webp'
  },
  { 
    icon: Network, 
    label: 'Strategic Roundtables', 
    desc: 'Exclusive closed-door networking and high-level sessions', 
    tag: 'Network',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/strategic%20roundtables.jpg',
    localImage: '/summit_highlights/strategic roundtables.jpg'
  },
  { 
    icon: Rocket, 
    label: 'Innovation Expo', 
    desc: 'Cutting-edge startups and breakthrough prototypes', 
    tag: 'Startups',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/innovation%20expo.jpg',
    localImage: '/summit_highlights/innovation expo.jpg'
  },
  { 
    icon: Coffee, 
    label: 'Executive Lunch', 
    desc: 'Curated networking lunches connecting peers and leaders', 
    tag: 'Networking',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/executive%20lunch.jpg',
    localImage: '/summit_highlights/executive lunch.jpg'
  },
  { 
    icon: Award, 
    label: 'Valedictory Address', 
    desc: "Hon'ble Chief Minister's closing address and declaration", 
    tag: 'Valedictory',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/valedictory%20by%20cm.jpg',
    localImage: '/summit_highlights/valedictory by cm.jpg'
  },
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
    <section id="highlights" className="py-20 sm:py-24 md:py-28 bg-white text-gray-900 relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* SECTION 1: SUMMIT HIGHLIGHTS (Claude / Wispr Photo Bento Cards) */}
        <div className="mb-24 sm:mb-28 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs mb-4 text-[#06206A]">
              <span className="w-2 h-2 rounded-full bg-[#DD1D21]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#06206A]">
                Flagship Experience
              </span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#06206A] uppercase tracking-tight mb-4"
            >
              Summit Highlights
            </motion.h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              Explore the key milestones, high-impact sessions, and visionary gatherings defining the PanIIT Andhra Pradesh Summit 2026.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto px-4 md:px-0">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="min-h-[350px] sm:min-h-[380px] relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-sky-400/50 bg-slate-950 p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-2"
                >
                  {/* Background Photo with Zoom on Hover */}
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = item.localImage;
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />

                  {/* Claude / Wispr Deep Vignette Overlays for High Legibility & Mood */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/75 via-45% to-black/30 group-hover:via-[#020617]/65 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#06206A]/25 mix-blend-multiply opacity-50 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  {/* Top Hairline Horizon Glow */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-sky-400/80 transition-colors duration-500 z-20" />

                  {/* Top Bar: Squircle Icon & Category Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-300 group-hover:scale-110 group-hover:bg-[#06206A] group-hover:text-white group-hover:border-sky-400/60 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300 shadow-md">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-slate-200 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21]" />
                      {item.tag}
                    </span>
                  </div>
                  
                  {/* Bottom Text Content */}
                  <div className="relative z-10">
                    <h3 className="font-black text-xl sm:text-2xl leading-tight mb-2 text-white group-hover:text-sky-200 transition-colors drop-shadow-md">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed drop-shadow-sm">
                      {item.desc}
                    </p>

                    {/* Interactive Footer Action */}
                    <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-semibold group-hover:text-white transition-colors duration-300">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 group-hover:text-sky-300 transition-colors">
                        Summit Program
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-[#06206A] transition-all duration-300">
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
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
