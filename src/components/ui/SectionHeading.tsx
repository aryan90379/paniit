'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ staggerChildren: 0.08 }}
      className={cn(
        align === 'center' ? 'text-center mx-auto w-full' : 'text-left w-full',
        className
      )}
    >
      {eyebrow ? (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] mb-3',
            light ? 'text-white/70' : 'text-[#06206A]'
          )}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] max-w-full text-pretty break-words whitespace-normal',
          light ? 'text-white' : 'text-[#06206A]'
        )}
        style={{ fontFamily: 'var(--font-newsreader), ui-serif, Georgia, serif' }}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'mt-4 h-px w-14 bg-[#C4A35A] origin-left',
          align === 'center' ? 'mx-auto origin-center' : ''
        )}
      />
      {subtitle ? (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-white/70' : 'text-slate-600'
          )}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
