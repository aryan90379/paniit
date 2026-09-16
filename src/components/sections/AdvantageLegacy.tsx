'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Network, 
  ScrollText, 
  Users, 
  GraduationCap, 
  ArrowUpRight 
} from 'lucide-react';

interface Initiative {
  id: string;
  number: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  iconBg: string;
  iconColor: string;
  colSpan: string;
}

const INITIATIVES: Initiative[] = [
  {
    id: 'council',
    number: '01',
    title: 'PAN IIT Amaravati Council',
    desc: 'Permanent secretariat to be constituted in Amaravati',
    icon: Landmark,
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'fund',
    number: '02',
    title: 'PAN IIT Amaravati Venture Fund',
    desc: 'To be launched for DeepTech investment in the State',
    icon: TrendingUp,
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'quantum',
    number: '03',
    title: 'Quantum Computing & Frontier-Tech',
    desc: 'Capabilities to be launched, including NMIOPS technologies',
    icon: Cpu,
    iconBg: 'bg-sky-50 border-sky-100',
    iconColor: 'text-sky-600',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'deeptech-policy',
    number: '04',
    title: 'DeepTech Policy Package',
    desc: 'To attract R&D, startups, investment, and advanced manufacturing',
    icon: ShieldCheck,
    iconBg: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'tech-transfer',
    number: '05',
    title: 'IIT Technology-Transfer Pipeline',
    desc: 'Identifying technologies ready for commercialisation in AP',
    icon: Network,
    iconBg: 'bg-indigo-50 border-indigo-100',
    iconColor: 'text-indigo-600',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'declaration',
    number: '06',
    title: 'Andhra PanIIT Declaration',
    desc: 'A long-term commitment between the 23 IITs, Industry, and Govt. of AP',
    icon: ScrollText,
    iconBg: 'bg-rose-50 border-rose-100',
    iconColor: 'text-[#DD1D21]',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'mentor-network',
    number: '07',
    title: '100-Member Global IIT Mentor Network',
    desc: 'To be launched',
    icon: Users,
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'industry-chairs',
    number: '08',
    title: '10 Industry Chairs',
    desc: 'To be established across institutions/universities in AP',
    icon: GraduationCap,
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-700',
    colSpan: 'lg:col-span-2'
  }
];

function BentoCard({ item, index }: { item: Initiative; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative h-full shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-auto min-h-[260px] md:min-h-0 ${item.colSpan}`}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full p-6 sm:p-7 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(6,32,106,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(6,32,106,0.15)] hover:border-blue-300/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-default"
      >
        {/* Magic Bento Interactive Mouse Spotlight */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(67, 170, 240, 0.12), transparent 70%)`
            }}
          />
        )}

        {/* Ambient Top Subtle Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Top: Icon & Number */}
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={22} strokeWidth={2} className={item.iconColor} />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#06206A]/60 transition-colors">
                {item.number}
              </span>
              <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#06206A] group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-300">
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-extrabold text-[#06206A] tracking-tight mb-2.5 leading-snug group-hover:text-blue-900 transition-colors">
            {item.title}
          </h3>

          {/* Exact Description */}
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Minimalist Bottom Hover Accent */}
        <div className="relative z-10 pt-4 mt-6 border-t border-slate-100/80 flex items-center justify-end">
          <div className="h-1 w-6 rounded-full bg-slate-200 group-hover:w-12 group-hover:bg-[#DD1D21] transition-all duration-300" />
        </div>

      </div>
    </motion.div>
  );
}

export default function AdvantageLegacy() {
  return (
    <section id="advantage" className="py-16 sm:py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Ambient background light spheres */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#06206A] uppercase tracking-tight"
          >
            Beyond The Summit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#DD1D21] mt-2 tracking-tight"
          >
            PanIIT–Andhra Pradesh Legacy Initiatives
          </motion.p>
        </div>

        {/* 8-Card Magic Bento Grid - Carousel on Mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible gap-4 sm:gap-5 md:gap-6 pb-6 md:pb-0 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {INITIATIVES.map((item, index) => (
            <BentoCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-xs font-bold text-slate-400">
          <span>Swipe to explore initiatives &rarr;</span>
        </div>

      </div>
    </section>
  );
}
