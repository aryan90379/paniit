'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Trophy, Building2, Lightbulb, Landmark } from 'lucide-react';

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
            What is PanIIT ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-light mb-6 leading-relaxed text-justify md:text-center"
          >
            PanIIT Alumni India (PanIIT) is the umbrella body of alumni from all 23 IITs, uniting 500,000+ graduates across India and global hubs like the US, Canada, UK, Korea, Singapore, and Australia to drive nation-building and innovation-led growth. Through summits, policy dialogues, and programmes such as PanIIT Alumni Foundation (PARFI), WHEELS, IIT Startups and IIT-IIT, it channels the IIT alumni community's expertise towards India's development and global leadership.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed text-justify md:text-center"
          >
            Its work has received national and international recognition, most notably, by the Hon'ble Prime Minister of India Shri Narendra Modi in his Independence Day 2026 address this year. IIT Directors and Faculty are regular participants in all the endeavours of PanIIT.
          </motion.p>
        </div>

        {/* Who Will Attend */}
        <div className="text-center mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 bg-red-600 text-white text-2xl md:text-3xl font-bold rounded-lg mb-10 shadow-md uppercase tracking-wide"
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
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
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
        <div className="bg-[#0a0a0a] rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-1 bg-blue-600 rounded-b-lg text-xs font-bold uppercase tracking-wider">
            Impact & Reach
          </div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 mt-4"
          >
            EVENT IN NUMBERS
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto mb-12"
          >
            PanIIT Andhra Pradesh Summit 2026 unites innovators, nation builders, and policy makers for a day of keynotes, panels, and roundtables.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-sm text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
