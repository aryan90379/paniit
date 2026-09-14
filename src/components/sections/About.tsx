'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Building2, Lightbulb, Landmark } from 'lucide-react';
import BorderGlow from '@/components/ui/BorderGlow';

const STATS = [
  { value: '800+', label: 'Delegates' },
  { value: '50+', label: 'Corporate CEOs & Senior CXOs' },
  { value: '100+', label: 'Unicorn Founders & Startup Leaders' },
  { value: '50+', label: 'Investors, VCs & Family Offices' },
];

const AUDIENCE = [
  { icon: Building2, label: 'Corporate CEOs & CXOs' },
  { icon: Landmark, label: 'Investors & VCs' },
  { icon: Users, label: 'IIT Directors & Global Alumni' },
  { icon: Briefcase, label: 'Policy Makers' },
  { icon: Lightbulb, label: 'Startup Founders' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* About PanIIT */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            What is PanIIT?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed text-center"
          >
            PanIIT Alumni India is the umbrella body uniting 500,000+ graduates across all 23 IITs globally. Through high-impact summits, policy dialogues, and dedicated foundation programs, we channel the unmatched expertise of the IIT alumni community to drive nation-building, frontier innovation, and India's global leadership.
          </motion.p>
        </div>

        {/* Who Will Attend */}
        <div className="text-center mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 bg-[#E13926] text-white text-2xl md:text-3xl font-bold rounded-lg mb-10 shadow-md uppercase tracking-wide"
          >
            Who Will Attend?
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6">
            {AUDIENCE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-red-200 transition-all w-48 h-48 group"
                >
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#E13926] group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <div className="text-sm md:text-base text-gray-800 font-bold text-center leading-tight uppercase">
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Impact & Reach Stats Band */}
        <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/80 pointer-events-none" />

          <div className="relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-16 md:-mt-24 px-8 py-2 bg-blue-600 rounded-b-xl text-sm md:text-base font-bold uppercase tracking-widest shadow-lg">
              Impact & Reach
            </div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 mt-8 tracking-wide"
            >
              EVENT IN NUMBERS
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
            >
              PanIIT Andhra Pradesh Summit 2026 unites innovators, nation builders, and policy makers for a day of keynotes, panels, and roundtables.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full"
                >
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="210 100 50"
                    backgroundColor="#121212"
                    borderRadius={24}
                    glowRadius={40}
                    glowIntensity={1.5}
                    coneSpread={30}
                    animated={false}
                    colors={['#3b82f6', '#8b5cf6', '#ec4899']}
                    className="h-full p-8 flex flex-col justify-center items-center text-center cursor-pointer"
                  >
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-4 drop-shadow-sm">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-300 font-bold uppercase tracking-wider">{stat.label}</div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
