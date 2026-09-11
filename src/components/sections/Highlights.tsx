'use client';

import { motion } from 'framer-motion';
import { Flag, Mic2, FileText, Users, Network, Rocket, Coffee, Award, Cpu, Shield, Satellite, Microchip, BookOpen, Tractor, HeartPulse, Battery } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Flag, label: 'Grand Opening Ceremony' },
  { icon: Mic2, label: 'Visionary Keynotes' },
  { icon: FileText, label: 'Policy & Vision Papers' },
  { icon: Users, label: 'Leadership Panels' },
  { icon: Network, label: 'Strategic Roundtables' },
  { icon: Rocket, label: 'Innovation & Startup Expo' },
  { icon: Coffee, label: 'Executive Lunch' },
  { icon: Award, label: "Valedictory Address by Hon'ble CM" },
];

const THEMES = [
  { icon: Shield, label: 'AI in Governance', color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
  { icon: Satellite, label: 'Defence & SpaceTech', color: 'text-red-600', bg: 'bg-red-100', border: 'border-red-200' },
  { icon: Cpu, label: 'Quantum Computing', color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200' },
  { icon: Microchip, label: 'Semiconductors', color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
  { icon: BookOpen, label: 'Skilling / Entrepreneurship', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200' },
  { icon: Tractor, label: 'AgriTech', color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
  { icon: HeartPulse, label: 'BioValley/HealthTech', color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200' },
  { icon: Battery, label: 'Energy', color: 'text-yellow-600', bg: 'bg-yellow-100', border: 'border-yellow-200' },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-white text-gray-900 relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight text-center"
          >
            Summit Highlights
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-sm hover:border-gray-200 transition-all"
                >
                  <Icon size={28} className="text-gray-500 mb-4" />
                  <span className="text-sm md:text-base font-medium text-gray-800">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight text-center"
          >
            Session Themes
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {THEMES.map((theme, i) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-full ${theme.bg} border ${theme.border} cursor-default hover:scale-105 transition-transform duration-300 shadow-sm`}
                >
                  <Icon size={20} className={theme.color} />
                  <span className="font-semibold text-gray-800 tracking-wide">{theme.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
