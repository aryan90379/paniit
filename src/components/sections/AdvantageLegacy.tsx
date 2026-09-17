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

const headingFade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

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
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'fund',
    number: '02',
    title: 'PAN IIT Amaravati Venture Fund',
    desc: 'To be launched for DeepTech investment in the State',
    icon: TrendingUp,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'quantum',
    number: '03',
    title: 'Quantum Computing & Frontier-Tech',
    desc: 'Capabilities to be launched, including NMIOPS technologies',
    icon: Cpu,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'deeptech-policy',
    number: '04',
    title: 'DeepTech Policy Package',
    desc: 'To attract R&D, startups, investment, and advanced manufacturing',
    icon: ShieldCheck,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'tech-transfer',
    number: '05',
    title: 'IIT Technology-Transfer Pipeline',
    desc: 'Identifying technologies ready for commercialisation in AP',
    icon: Network,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'declaration',
    number: '06',
    title: 'Andhra PanIIT Declaration',
    desc: 'A long-term commitment between the 23 IITs, Industry, and Govt. of AP',
    icon: ScrollText,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-1'
  },
  {
    id: 'mentor-network',
    number: '07',
    title: '100-Member Global IIT Mentor Network',
    desc: 'To be launched',
    icon: Users,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'industry-chairs',
    number: '08',
    title: '10 Industry Chairs',
    desc: 'To be established across institutions/universities in AP',
    icon: GraduationCap,
    iconBg: 'bg-paper border-[#06206A]/10',
    iconColor: 'text-[#06206A]',
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
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative h-full shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-auto min-h-[260px] md:min-h-0 ${item.colSpan}`}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-white border border-[#06206A]/10 flex flex-col justify-between overflow-hidden group cursor-default"
      >
        {/* Magic Bento Interactive Mouse Spotlight */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(196, 163, 90, 0.12), transparent 70%)`
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

            <div className="flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-slate-300 group-hover:text-[#06206A]/60 transition-colors">
                {item.number}
              </span>
              <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#06206A] group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-300">
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#06206A] tracking-tight mb-2.5 leading-snug">
            {item.title}
          </h3>

          {/* Exact Description */}
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Minimalist Bottom Hover Accent */}
        <div className="relative z-10 pt-4 mt-6 border-t border-slate-100/80 flex items-center justify-end">
          <div className="h-px w-6 bg-[#C4A35A] group-hover:w-12 transition-all duration-300" />
        </div>

      </div>
    </motion.div>
  );
}

export default function AdvantageLegacy() {
  return (
    <section id="initiatives" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.08 }}
          className="text-center mx-auto w-full mb-12 sm:mb-16"
        >
          <motion.h2
            variants={headingFade}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] max-w-full text-pretty break-words whitespace-normal text-[#06206A]"
            style={{ fontFamily: 'var(--font-newsreader), ui-serif, Georgia, serif' }}
          >
            PanIIT–Andhra Pradesh Legacy Initiatives
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 h-px w-14 bg-[#C4A35A] origin-center mx-auto"
          />
          <motion.p
            variants={headingFade}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#06206A]"
            style={{ fontFamily: 'var(--font-newsreader), ui-serif, Georgia, serif' }}
          >
            Beyond the Summit
          </motion.p>
        </motion.div>

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
