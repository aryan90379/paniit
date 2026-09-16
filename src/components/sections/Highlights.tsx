'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flag, Mic2, FileText, Users, Network, Rocket, Coffee, Award, Shield, Satellite, Microchip, BookOpen, Tractor, HeartPulse, Leaf, Cpu } from 'lucide-react';

// span config: cols/rows for desktop 4-col bento grid
// Layout: [0]=2×2 hero, [1]=1×1, [2]=1×1, [3]=2×1 wide, [4]=1×1, [5]=1×1, [6]=1×1, [7]=1×1
const HIGHLIGHTS = [
  {
    icon: Flag,
    label: 'Grand Opening Ceremony',
    desc: 'Kickoff with state leaders and global dignitaries',
    tag: 'Inaugural',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/grand%20opening.jpg',
    localImage: '/summit_highlights/grand opening.jpg',
    cols: 2, rows: 2,
  },
  {
    icon: Mic2,
    label: 'Visionary Keynotes',
    desc: 'Insights from global technology icons',
    tag: 'Keynote',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/visionary%20keynotes.jpg',
    localImage: '/summit_highlights/visionary keynotes.jpg',
    cols: 1, rows: 1,
  },
  {
    icon: FileText,
    label: 'Policy & Vision Papers',
    desc: 'Shaping the Andhra Pradesh 2047 roadmap',
    tag: 'Policy',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/policy%20papers.jpg',
    localImage: '/summit_highlights/policy papers.jpg',
    cols: 1, rows: 1,
  },
  {
    icon: Users,
    label: 'Leadership Panels',
    desc: 'CXO-level discussions and IIT director roundtables',
    tag: 'Leadership',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/speaker-giving-talk-conference-hall-260nw-2321303215%20(1).webp',
    localImage: '/summit_highlights/speaker-giving-talk-conference-hall-260nw-2321303215 (1).webp',
    cols: 2, rows: 1,
  },
  {
    icon: Network,
    label: 'Strategic Roundtables',
    desc: 'High-level closed-door sessions',
    tag: 'Network',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/strategic%20roundtables.jpg',
    localImage: '/summit_highlights/strategic roundtables.jpg',
    cols: 1, rows: 1,
  },
  {
    icon: Rocket,
    label: 'Innovation Expo',
    desc: 'Startups and breakthrough prototypes',
    tag: 'Startups',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/innovation%20expo.jpg',
    localImage: '/summit_highlights/innovation expo.jpg',
    cols: 1, rows: 1,
  },
  {
    icon: Coffee,
    label: 'Executive Lunch',
    desc: 'Curated networking connecting peers and leaders',
    tag: 'Networking',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/executive%20lunch.jpg',
    localImage: '/summit_highlights/executive lunch.jpg',
    cols: 1, rows: 1,
  },
  {
    icon: Award,
    label: 'Valedictory Address',
    desc: "Hon'ble CM's closing address and declaration",
    tag: 'Valedictory',
    image: 'https://d3liyurciwi0wb.cloudfront.net/summit_highlights/valedictory%20by%20cm.jpg',
    localImage: '/summit_highlights/valedictory by cm.jpg',
    cols: 1, rows: 1,
  },
];


const THEMES = [
  { icon: Shield, label: 'AI in Governance', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/AI%20in%20Governance%20(1).jpg', tag: 'GovTech & Policy' },
  { icon: Satellite, label: 'Defence & SpaceTech', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Defense%20and%20SpaceTech.jpg', tag: 'Strategic Aerospace' },
  { icon: Cpu, label: 'Quantum Computing', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Quantum%20Computing.webp', tag: 'Next-Gen Computing' },
  { icon: Microchip, label: 'Semiconductors', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Semiconductors.jpg', tag: 'Silicon & VLSI' },
  { icon: BookOpen, label: 'Skilling / Entrepreneurship', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Skilling_Entrepreneurship.webp', tag: 'Talent & Startups' },
  { icon: Tractor, label: 'AgriTech', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Agritech.jpg', tag: 'Smart Agriculture' },
  { icon: HeartPulse, label: 'BioValley / HealthTech', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Biovalley_HealthTech.jpg', tag: 'Life Sciences' },
  { icon: Leaf, label: 'Green Energy', image: 'https://d3liyurciwi0wb.cloudfront.net/inforgraphics/Green%20Energy.jpg', tag: 'CleanTech & Renewables' },
];

// --- HighlightCard sub-component ---
function HighlightCard({ item, i }: { item: (typeof HIGHLIGHTS)[0]; i: number }) {
  const Icon = item.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isBig = item.rows === 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn: `span ${item.cols}`, gridRow: `span ${item.rows}` }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#06101f]"
    >
      <img
        src={item.image}
        alt={item.label}
        loading="lazy"
        decoding="async"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = item.localImage; }}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:opacity-82 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      {/* Soft vignette — only from bottom, not a full blackout */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      {/* Hairline highlight on top edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10 group-hover:bg-white/18 transition-colors duration-500" />

      {/* Tag pill — top left */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-sm border border-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/75">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21] shrink-0" />
          {item.tag}
        </span>
      </div>

      {/* Icon squircle — top right */}
      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-[#06206A]/80 group-hover:text-white group-hover:border-sky-400/20 transition-all duration-400">
        <Icon size={16} strokeWidth={2} />
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-5">
        <h3 className={`font-bold text-white leading-tight tracking-tight ${isBig ? 'text-xl sm:text-2xl md:text-3xl mb-1.5' : 'text-base sm:text-lg mb-1'}`}>
          {item.label}
        </h3>
        <p className={`text-white/55 font-medium leading-snug ${isBig ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

// --- ThemeCard sub-component ---
function ThemeCard({ theme, i }: { theme: (typeof THEMES)[0]; i: number }) {
  const Icon = theme.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#06101f] h-52 sm:h-60"
    >
      <img
        src={theme.image}
        alt={theme.label}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-white/10 group-hover:bg-white/18 transition-colors duration-500" />

      <div className="absolute top-3.5 left-3.5 z-10 w-9 h-9 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#DD1D21]/80 group-hover:text-white group-hover:border-red-300/20 transition-all duration-300">
        <Icon size={15} strokeWidth={2} />
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 p-4">
        <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-sky-300/75 mb-1">{theme.tag}</span>
        <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{theme.label}</h3>
        <div className="mt-2 h-0.5 w-5 bg-[#DD1D21] rounded-full group-hover:w-9 transition-all duration-300" />
      </div>
    </motion.div>
  );
}

export default function Highlights() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });
  const themeTitleRef = useRef<HTMLDivElement>(null);
  const themeTitleInView = useInView(themeTitleRef, { once: true, margin: '-80px' });

  return (
    <section id="highlights" className="py-24 sm:py-28 md:py-32 bg-white text-gray-900 relative border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">

        {/* ── SUMMIT HIGHLIGHTS ── */}
        <div className="mb-20 sm:mb-24 md:mb-28">

          {/* Header — left-aligned like Claude / Wispr */}
          <div ref={titleRef} className="mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06206A]/6 border border-[#06206A]/12 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21]" />
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#06206A]">Flagship Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-black text-[#06206A] uppercase tracking-tight leading-none mb-3"
            >
              Summit Highlights
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="text-slate-500 text-sm sm:text-base max-w-lg leading-relaxed"
            >
              Key milestones, high-impact sessions, and visionary gatherings defining the PanIIT Andhra Pradesh Summit 2026.
            </motion.p>
          </div>

          {/* Desktop bento — 4 col, auto rows of 220px */}
          <div
            className="hidden md:grid gap-3"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '220px' }}
          >
            {HIGHLIGHTS.map((item, i) => (
              <HighlightCard key={i} item={item} i={i} />
            ))}
          </div>

          {/* Mobile / tablet — carousel */}
          <div className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible gap-3 md:hidden pb-6 sm:pb-0 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#06101f] h-60 sm:h-52 shrink-0 snap-center w-[85vw] sm:w-auto"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = item.localImage; }}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-sm border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21] shrink-0" />
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60">
                    <Icon size={16} strokeWidth={2} />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 z-10 p-5">
                    <h3 className="text-white font-bold text-lg leading-tight mb-1.5">{item.label}</h3>
                    <p className="text-white/55 text-sm font-medium leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Mobile Swipe Hint */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-2 text-xs font-bold text-slate-400">
            <span>Swipe to explore highlights &rarr;</span>
          </div>
        </div>

        {/* ── SESSION THEMES ── */}
        <div className="pb-4">
          <div ref={themeTitleRef} className="mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={themeTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DD1D21]/6 border border-[#DD1D21]/12 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DD1D21]" />
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#DD1D21]">PanIIT Summit Tracks</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={themeTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-black text-[#06206A] uppercase tracking-tight leading-none mb-3"
            >
              Session Themes
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={themeTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="text-slate-500 text-sm sm:text-base max-w-lg leading-relaxed"
            >
              Immersive tracks and deep-dives exploring the future of innovation.
            </motion.p>
          </div>

          {/* Session Themes Carousel */}
          <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible gap-3 pb-6 md:pb-0 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
            {THEMES.map((theme, i) => (
              <div key={i} className="shrink-0 snap-center w-[75vw] sm:w-[45vw] md:w-auto">
                <ThemeCard theme={theme} i={i} />
              </div>
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-xs font-bold text-slate-400">
            <span>Swipe to explore themes &rarr;</span>
          </div>
        </div>

      </div>
    </section>
  );
}
