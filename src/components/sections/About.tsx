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
  { icon: Building2, label: 'Corporate CEOs & Investors' },
  { icon: Briefcase, label: 'CXOs & VCs' },
  { icon: Users, label: 'Global IIT Alumni' },
  { icon: Landmark, label: 'IIT Directors & Policymakers' },
  { icon: Lightbulb, label: 'Startup Founders' },
  { icon: Trophy, label: 'Industry Leaders' },
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
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            About PanIIT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-light mb-6"
          >
            The umbrella body of alumni from all 23 IITs, representing over <strong className="text-gray-900">500,000+ IIT graduates globally</strong> across India, US, Canada, UK, Korea, Singapore, and Australia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-medium"
          >
            Key Initiatives: PARFI, WHEELS, IIT Startups, IIT-IIT
          </motion.p>
        </div>

        {/* Impact & Reach Stats Band */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm text-center group hover:border-blue-500/30 hover:shadow-md transition-all"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Who Will Attend */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"
          >
            Who Will Attend
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {AUDIENCE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                    <Icon size={24} />
                  </div>
                  <div className="text-sm text-gray-700 font-medium leading-tight">
                    {item.label}
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
