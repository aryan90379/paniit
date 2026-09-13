'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe2, Cpu, TrendingUp, Users } from 'lucide-react';

const VISION_POINTS = [
  {
    icon: MapPin,
    text: "Showcasing Andhra Pradesh as a hub of skilled talent, innovation, global collaboration, and strategic investment opportunities"
  },
  {
    icon: Globe2,
    text: "Aligning with Swarna Andhra 2047 and Viksit Bharat 2047 to build a globally competitive, future-ready innovation ecosystem"
  },
  {
    icon: Cpu,
    text: "Catalyzing AI, Quantum Computing, Green Energy, Deep-tech Innovation, Startups, and Entrepreneurship"
  },
  {
    icon: TrendingUp,
    text: "Transforming Andhra Pradesh's youth into a globally competitive talent pool for emerging industries"
  },
  {
    icon: Users,
    text: "Connecting Global IIT Alumni, Industry Leaders, Policymakers, and Academia to drive innovation-led growth in Andhra Pradesh"
  }
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-red-200 bg-white text-red-600 text-sm font-medium mb-4"
          >
            About The Summit
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight leading-tight"
          >
            Vision of PanIIT Andhra Pradesh <br className="hidden md:block" />Summit 2026
          </motion.h2>
        </div>

        <div className="space-y-8">
          {VISION_POINTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#d97706] group-hover:shadow-md transition-all">
                  <Icon size={32} className="text-[#d97706]" />
                </div>
                <div className="pt-2">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-full pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,0 L0,0 Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
}
