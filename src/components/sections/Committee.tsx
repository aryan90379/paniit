'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_COMMITTEE_MEMBERS, CommitteeMember } from '@/data/committee';

const CATEGORIES = [
  'All',
  'Core Committee',
  'Office Bearers',
  'Advisors',
  'Organising Committee',
] as const;

export default function Committee() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredMembers = selectedCategory === 'All'
    ? ALL_COMMITTEE_MEMBERS
    : ALL_COMMITTEE_MEMBERS.filter(m => m.category === selectedCategory);

  return (
    <section id="committee" className="py-20 md:py-28 bg-[#F8FAFC] text-gray-900 relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#06206A] mb-4 tracking-tight uppercase"
          >
            Summit Organising Committee
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
          >
            The visionaries, leaders, and alumni working together to deliver the PanIIT Andhra Pradesh Summit 2026.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' 
                ? ALL_COMMITTEE_MEMBERS.length 
                : ALL_COMMITTEE_MEMBERS.filter(m => m.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#06206A] text-white shadow-md scale-105'
                      : 'bg-white text-gray-600 hover:text-[#06206A] hover:bg-gray-100 border border-gray-200 shadow-2xs'
                  }`}
                >
                  {cat} <span className={`ml-1 text-[11px] ${isActive ? 'text-white/80' : 'text-gray-400'}`}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Column Grid (Bangalore Summit Layout) */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((person, i) => (
              <motion.div
                key={`${person.name}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xs hover:shadow-xl border border-gray-100/90 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 group relative"
              >
                {/* Profile Image with LinkedIn Badge */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 shrink-0">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover rounded-full bg-slate-100 border-2 border-white shadow-xs ring-1 ring-gray-100 group-hover:scale-105 transition-transform duration-300" 
                  />
                  {person.linkedin && (
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="absolute bottom-0 right-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center shadow-md border-2 border-white transition-all hover:scale-115"
                    >
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-sm md:text-base font-extrabold text-[#06206A] leading-snug text-center mb-1 group-hover:text-blue-700 transition-colors">
                  {person.name}
                </h3>

                {/* Role */}
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-gray-400 text-center line-clamp-2">
                  {person.role || 'Committee Member'}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
