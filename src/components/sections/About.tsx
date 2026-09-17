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
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="relative rounded-3xl md:rounded-[2rem] bg-[#06206A] p-8 md:p-16 text-center text-white overflow-hidden shadow-[0_20px_50px_-20px_rgba(6,32,106,0.35)]">
          <div className="absolute inset-0 paper-grain opacity-[0.07] pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[180px] bg-white/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A]/55 to-transparent" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ duration: 0.45 }}
              className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.22em] text-white/70 uppercase mb-4"
            >
              Who Will Attend
            </motion.p>
            
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-newsreader), ui-serif, Georgia, serif' }}
            >
              Event in Numbers
            </motion.h3>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-5 h-px w-14 bg-[#C4A35A] origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-white/70 max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg leading-relaxed"
            >
              PanIIT Andhra Pradesh Summit 2026 unites innovators, nation builders, and policy makers for a day of keynotes, panels, and roundtables.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
              {COMBINED_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.06 }}
                    className={`h-full ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <div className="relative h-full p-5 md:p-7 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-between text-center overflow-hidden transition-colors duration-500 hover:border-[#C4A35A]/45">
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A]/35 to-transparent" />

                      <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#C4A35A] mb-4">
                        <Icon className="w-5 h-5" strokeWidth={1.6} />
                      </div>
                      
                      <div className="flex items-baseline justify-center mb-2 md:mb-3">
                        <span className="text-4xl sm:text-5xl tracking-tight text-white" style={{ fontFamily: 'var(--font-newsreader), ui-serif, Georgia, serif' }}>
                          <AnimatedCounter value={stat.numericValue} />
                        </span>
                        <span className="font-serif text-2xl sm:text-3xl text-[#C4A35A] ml-0.5">
                          +
                        </span>
                      </div>
                      
                      <p className="text-sm md:text-[15px] text-white/65 font-medium leading-snug">
                        {stat.label}
                      </p>
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
