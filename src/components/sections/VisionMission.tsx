'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const CARDS = [
  {
    label: 'Swarna Andhra 2047',
    desc: 'Aligning state priorities with Viksit Bharat 2047 to establish Andhra Pradesh as an innovation superpower.',
    image: '/vision/swarna-andhra-2047.png',
    cols: 2,
  },
  {
    label: 'Global Network',
    desc: 'Uniting alumni leaders, global CXOs, and policymakers to channel capital and leadership into AP.',
    image: '/vision/global-network.png',
    cols: 1,
  },
  {
    label: 'AI & Deep Tech',
    desc: 'Catalyzing breakthroughs in Quantum Computing, Artificial Intelligence, and Clean Energy ecosystems.',
    image: '/vision/ai-deep-tech.png',
    cols: 1,
  },
  {
    label: 'Talent Pool',
    desc: 'Transforming Andhra Pradesh youth into globally competitive engineering and research talent.',
    image: '/vision/talent-pool.png',
    cols: 1,
  },
  {
    label: 'Innovation Hub',
    desc: 'Showcasing Andhra Pradesh as a premier destination for high-value strategic tech investments.',
    image: '/vision/innovation-hub.png',
    cols: 1,
  },
];

function VisionCard({
  card,
  i,
  featured = false,
}: {
  card: (typeof CARDS)[0];
  i: number;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn: `span ${card.cols}` }}
      className="relative h-full overflow-hidden rounded-2xl bg-[#06101f]"
    >
      <img
        src={card.image}
        alt={card.label}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      <div className={`absolute bottom-0 inset-x-0 z-10 [text-shadow:0_1px_14px_rgba(0,0,0,0.55)] ${featured ? 'p-5 md:p-7' : 'p-4 sm:p-5'}`}>
        <h3
          className={`font-serif font-medium text-white leading-tight tracking-tight mb-2 ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg sm:text-xl'
          }`}
        >
          {card.label}
        </h3>
        <p className={`text-white/80 font-medium leading-snug ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function VisionMission() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-paper text-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">

        <div ref={titleRef} className="mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <SectionHeading
              align="left"
              eyebrow="Our Vision"
              title="Vision of PanIIT Andhra Pradesh"
              subtitle="A strategic roadmap to elevate Andhra Pradesh as India's premier destination for deep-tech and industrial innovation."
            />
          </motion.div>
        </div>

        <div
          className="hidden md:grid gap-3"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '320px' }}
        >
          {CARDS.map((card, i) => (
            <VisionCard key={card.label} card={card} i={i} featured={card.cols === 2} />
          ))}
        </div>

        <div className="flex md:hidden gap-3.5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
          {CARDS.map((card, i) => (
            <div
              key={card.label}
              className={`shrink-0 snap-center ${card.cols === 2 ? 'w-[88vw]' : 'w-[78vw] sm:w-[55vw]'} h-80`}
            >
              <VisionCard card={card} i={i} featured={card.cols === 2} />
            </div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-xs font-bold text-gray-400">
          <span>Swipe to explore 5 vision pillars →</span>
        </div>

      </div>
    </section>
  );
}
