'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Building2, Lightbulb, Landmark } from 'lucide-react';

const COMBINED_STATS = [
  { value: '800+', label: 'Delegates & IIT Alumni', icon: Users },
  { value: '50+', label: 'Corporate CEOs & CXOs', icon: Building2 },
  { value: '100+', label: 'Unicorn & Startup Founders', icon: Lightbulb },
  { value: '50+', label: 'Investors & VCs', icon: Landmark },
  { value: '50+', label: 'Policy Makers & Govt Officials', icon: Briefcase }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Impact & Reach Stats Band (Theme-aligned Deep Navy instead of black) */}
        <div className="bg-gradient-to-br from-[#06206A] via-[#092b87] to-[#04164a] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-blue-900/40">
          
          {/* Subtle Brand Lighting Elements */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#43AAF0]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#7ABDF1]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block px-8 py-2 bg-[#DD1D21] rounded-full text-xs md:text-sm font-black uppercase tracking-widest shadow-lg mb-6 text-white">
              Who Will Attend
            </div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-4 tracking-wide uppercase text-white"
            >
              Event in Numbers
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C6E1F8] max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg font-medium leading-relaxed"
            >
              PanIIT Andhra Pradesh Summit 2026 unites innovators, nation builders, and policy makers for a day of keynotes, panels, and roundtables.
            </motion.p>
            
            {/* Stats Grid with full perimeter outline glow and centered icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-6">
              {COMBINED_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`h-full ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    <div className="h-full p-5 md:p-8 rounded-2xl md:rounded-3xl bg-[#041444]/80 backdrop-blur-md border-2 border-white/15 hover:border-[#43AAF0] hover:shadow-[0_0_35px_rgba(67,170,240,0.65),inset_0_0_20px_rgba(67,170,240,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group">
                      
                      {/* Centered icon right above number */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#43AAF0]/15 border border-[#43AAF0]/30 flex items-center justify-center text-[#43AAF0] mb-3 md:mb-5 group-hover:scale-110 group-hover:bg-[#43AAF0] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={24} className="md:w-7 md:h-7" />
                      </div>
                      
                      {/* Number */}
                      <div className="text-3xl md:text-5xl font-black text-white mb-2 md:mb-3 tracking-tight group-hover:text-[#C6E1F8] transition-colors drop-shadow-sm">
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-[10px] md:text-xs text-[#C6E1F8]/90 font-bold uppercase tracking-wider leading-snug">
                        {stat.label}
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
