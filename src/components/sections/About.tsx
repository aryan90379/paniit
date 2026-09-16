'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Building2, Lightbulb, Landmark } from 'lucide-react';

interface StatItem {
  numericValue: number;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>;
}

const COMBINED_STATS: StatItem[] = [
  { numericValue: 800, label: 'Delegates & IIT Alumni', icon: Users },
  { numericValue: 50, label: 'Corporate CEOs & CXOs', icon: Building2 },
  { numericValue: 100, label: 'Unicorn & Startup Founders', icon: Lightbulb },
  { numericValue: 50, label: 'Investors & VCs', icon: Landmark },
  { numericValue: 50, label: 'Policy Makers & Govt Officials', icon: Briefcase }
];

function AnimatedCounter({ value, duration = 1.8 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // easeOutExpo curve for an ultra-snappy, satisfying counter tick
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeOut * value);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {count}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Dark Architectural Island with Wispr / Claude luxury aesthetic */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] bg-[#030714] p-7 md:p-16 text-center text-white overflow-hidden shadow-[0_25px_70px_-15px_rgba(3,7,20,0.35),0_0_0_1px_rgba(3,7,20,0.06)] border border-white/[0.08]">
          
          {/* Subtle Dot-Matrix Texture */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" 
          />

          {/* Ambient Lighting Accents */}
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-sky-500/20 via-blue-600/10 to-transparent blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#DD1D21]/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-[#06206A]/50 rounded-full blur-[110px] pointer-events-none" />
          
          {/* Top Hairline Horizon Glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

          <div className="relative z-10">
            {/* Claude / Wispr Frosted Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 hover:bg-white/[0.08] transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DD1D21] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DD1D21]" />
              </span>
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
                Who Will Attend
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight uppercase"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
                Event in Numbers
              </span>
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-slate-400 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base font-normal leading-relaxed tracking-wide"
            >
              PanIIT Andhra Pradesh Summit 2026 unites innovators, nation builders, and policy makers for a day of keynotes, panels, and roundtables.
            </motion.p>
            
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
              {COMBINED_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className={`h-full ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <div className="relative h-full p-5 md:p-7 rounded-2xl md:rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md group hover:border-sky-400/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-between text-center overflow-hidden cursor-default">
                      
                      {/* Interactive Hover Spotlight */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Top Hairline Highlight */}
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-sky-400/60 transition-colors duration-500" />

                      {/* Icon */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sky-400 mb-4 md:mb-5 group-hover:scale-110 group-hover:text-white group-hover:bg-sky-500/20 group-hover:border-sky-400/50 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300">
                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                      </div>
                      
                      {/* Animated Counter Display */}
                      <div className="flex items-baseline justify-center font-black tracking-tight mb-2 md:mb-3">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-sm">
                          <AnimatedCounter value={stat.numericValue} />
                        </span>
                        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#DD1D21] ml-0.5 group-hover:translate-x-0.5 transition-transform">
                          +
                        </span>
                      </div>
                      
                      {/* Label */}
                      <p className="text-xs md:text-[13px] text-slate-400 group-hover:text-slate-200 transition-colors font-medium leading-snug tracking-normal">
                        {stat.label}
                      </p>

                      {/* Micro bottom accent shimmer */}
                      <div className="mt-4 md:mt-5 h-1 w-6 rounded-full bg-white/[0.08] group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-[#DD1D21] transition-all duration-500" />

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
