'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, Cpu, Users, Target, Rocket, Lightbulb, MapPin } from 'lucide-react';

const CF = 'https://d3liyurciwi0wb.cloudfront.net/vision';

const CARDS = [
  {
    icon: Target,
    label: 'Swarna Andhra 2047',
    badge: 'Roadmap to 2047',
    tags: ['Viksit Bharat', 'Frontier R&D'],
    desc: 'Aligning state priorities with Viksit Bharat 2047 to establish Andhra Pradesh as an innovation superpower.',
    footer: null,
    image: `${CF}/swarna%20andhra%202047.jpeg`,
    localImage: '/vision/swarna andhra 2047.jpeg',
    cols: 2,
    accentColor: 'sky',
  },
  {
    icon: Users,
    label: 'Global Network',
    badge: '500k+ IITians',
    tags: null,
    desc: 'Uniting alumni leaders, global CXOs, and policymakers to channel capital and leadership into AP.',
    footer: 'Alumni • Industry • Policy',
    image: `${CF}/global%20network.jpg`,
    localImage: '/vision/global network.jpg',
    cols: 1,
    accentColor: 'sky',
  },
  {
    icon: Rocket,
    label: 'AI & Deep Tech',
    badge: 'Frontier Tech',
    tags: null,
    desc: 'Catalyzing breakthroughs in Quantum Computing, Artificial Intelligence, and Clean Energy ecosystems.',
    footer: 'Quantum • AI • Startups',
    image: `${CF}/DeepTech%20AI.jpg`,
    localImage: '/vision/DeepTech AI.jpg',
    cols: 1,
    accentColor: 'red',
  },
  {
    icon: Lightbulb,
    label: 'Talent Pool',
    badge: 'Future Workforce',
    tags: null,
    desc: 'Transforming Andhra Pradesh youth into globally competitive engineering and research talent.',
    footer: 'Mentorship • Academia • Chairs',
    image: `${CF}/talent%20pool.jpg`,
    localImage: '/vision/talent pool.jpg',
    cols: 1,
    accentColor: 'sky',
  },
  {
    icon: MapPin,
    label: 'Innovation Hub',
    badge: 'Innovation Hub',
    tags: null,
    desc: 'Showcasing Andhra Pradesh as a premier destination for high-value strategic tech investments.',
    footer: 'Semiconductors • R&D Parks',
    image: `${CF}/innovation%20hub.jpg`,
    localImage: '/vision/innovation hub.jpg',
    cols: 1,
    accentColor: 'sky',
  },
];

function VisionCard({ card, i }: { card: typeof CARDS[0]; i: number }) {
  const Icon = card.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isBig = card.cols === 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn: `span ${card.cols}` }}
      className="relative group cursor-default overflow-hidden rounded-2xl bg-[#060e1f] min-h-[300px] md:min-h-0"
    >
      {/* Photo */}
      <img
        src={card.image}
        alt={card.label}
        loading="lazy"
        decoding="async"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = card.localImage; }}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
      />

      {/* Soft bottom vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

      {/* Hairline top highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/12 group-hover:bg-white/22 transition-colors duration-500" />

      {/* Badge — top right */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/12 text-[10px] font-bold uppercase tracking-widest text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21] shrink-0" />
          {card.badge}
        </span>
      </div>

      {/* Icon squircle — top left */}
      <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/12 flex items-center justify-center text-white/75 group-hover:bg-white/18 group-hover:text-white transition-all duration-300">
        <Icon size={18} strokeWidth={2} />
      </div>

      {/* Content — bottom */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6">
        {/* Tags row (only on big card) */}
        {card.tags && (
          <div className="flex flex-wrap gap-2 mb-2">
            {card.tags.map(t => (
              <span key={t} className="px-2.5 py-0.5 rounded-md bg-white/15 text-white/80 text-[10px] font-bold uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        )}

        <h3 className={`font-black text-white leading-tight tracking-tight mb-1.5 ${isBig ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-lg sm:text-xl'}`}>
          {card.label}
        </h3>

        <p className={`text-white/60 font-medium leading-snug ${isBig ? 'text-sm sm:text-base max-w-lg' : 'text-xs sm:text-sm'}`}>
          {card.desc}
        </p>

        {card.footer && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300/80">{card.footer}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function VisionMission() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">

        {/* Header */}
        <div ref={titleRef} className="mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DD1D21]/6 border border-[#DD1D21]/15 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21]" />
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#DD1D21]">Our Vision</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-black text-[#06206A] uppercase tracking-tight leading-none"
            >
              Vision of PanIIT<br className="hidden sm:block" /> Andhra Pradesh
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="text-slate-500 text-sm sm:text-base max-w-sm leading-relaxed md:text-right shrink-0"
            >
              A strategic roadmap to elevate Andhra Pradesh as India's premier destination for deep-tech and industrial innovation.
            </motion.p>
          </div>
        </div>

        {/* Desktop Bento Grid — 3-col, auto rows */}
        <div
          className="hidden md:grid gap-3"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '300px' }}
        >
          {CARDS.map((card, i) => (
            <VisionCard key={i} card={card} i={i} />
          ))}
        </div>

        {/* Mobile / Tablet — horizontal scroll cards */}
        <div className="flex md:hidden gap-3.5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative group shrink-0 snap-center w-[78vw] sm:w-[55vw] overflow-hidden rounded-2xl bg-[#060e1f] h-64"
              >
                <img
                  src={card.image}
                  alt={card.label}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = card.localImage; }}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/75">
                    <span className="w-1 h-1 rounded-full bg-[#DD1D21] shrink-0" />
                    {card.badge}
                  </span>
                </div>
                <div className="absolute top-3.5 left-3.5 z-10 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70">
                  <Icon size={15} strokeWidth={2} />
                </div>

                <div className="absolute bottom-0 inset-x-0 z-10 p-4">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{card.label}</h3>
                  <p className="text-white/55 text-xs font-medium leading-snug">{card.desc}</p>
                  {card.footer && (
                    <span className="block mt-2 text-[9px] font-bold uppercase tracking-widest text-sky-300/75">{card.footer}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile swipe hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-xs font-bold text-gray-400">
          <span>Swipe to explore 5 vision pillars →</span>
        </div>

      </div>
    </section>
  );
}
