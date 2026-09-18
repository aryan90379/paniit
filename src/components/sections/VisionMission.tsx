'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const CF = 'https://d3liyurciwi0wb.cloudfront.net/vision';

const CARDS = [
  {
    label: 'Swarna Andhra 2047',
    desc: 'Aligning state priorities with Viksit Bharat 2047 to establish Andhra Pradesh as an innovation superpower.',
    image: `${CF}/swarna%20andhra%202047.jpeg`,
    localImage: '/vision/swarna andhra 2047.jpeg',
    cols: 2,
  },
  {
    label: 'Global Network',
    desc: 'Uniting alumni leaders, global CXOs, and policymakers to channel capital and leadership into AP.',
    image: `${CF}/global%20network.jpg`,
    localImage: '/vision/global network.jpg',
    cols: 1,
  },
  {
    label: 'AI & Deep Tech',
    desc: 'Catalyzing breakthroughs in Quantum Computing, Artificial Intelligence, and Clean Energy ecosystems.',
    image: `${CF}/DeepTech%20AI.jpg`,
    localImage: '/vision/DeepTech AI.jpg',
    cols: 1,
  },
  {
    label: 'Talent Pool',
    desc: 'Transforming Andhra Pradesh youth into globally competitive engineering and research talent.',
    image: `${CF}/talent%20pool.jpg`,
    localImage: '/vision/talent pool.jpg',
    cols: 1,
  },
  {
    label: 'Innovation Hub',
    desc: 'Showcasing Andhra Pradesh as a premier destination for high-value strategic tech investments.',
    image: `${CF}/innovation%20hub.jpg`,
    localImage: '/vision/innovation hub.jpg',
    cols: 1,
  },
];

function CardPhoto({ card }: { card: (typeof CARDS)[0] }) {
  return (
    <img
      src={card.image}
      alt=""
      loading="lazy"
      decoding="async"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = card.localImage;
      }}
      className="w-full h-full object-cover object-center"
    />
  );
}

function CardCopy({
  card,
  featured = false,
}: {
  card: (typeof CARDS)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-center h-full bg-[#F7F4EE] border border-[#06206A] ${
        featured ? 'p-6 md:p-8' : 'p-4 sm:p-5'
      }`}
    >
      <h3
        className={`font-serif font-medium text-[#06206A] leading-tight tracking-tight mb-2 ${
          featured ? 'text-2xl md:text-3xl' : 'text-lg sm:text-xl'
        }`}
      >
        {card.label}
      </h3>
      <p className={`text-slate-600 font-medium leading-snug ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
        {card.desc}
      </p>
    </div>
  );
}

function VisionCard({ card, i }: { card: (typeof CARDS)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const featured = card.cols === 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn: `span ${card.cols}` }}
      className={`h-full overflow-hidden rounded-2xl bg-[#F7F4EE] flex ${
        featured ? 'flex-row' : 'flex-col'
      }`}
    >
      <div className={`overflow-hidden shrink-0 ${featured ? 'w-[45%] h-full' : 'w-full h-[55%]'}`}>
        <CardPhoto card={card} />
      </div>
      <div className="flex-1 min-w-0 min-h-0 h-full">
        <CardCopy card={card} featured={featured} />
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
            <VisionCard key={card.label} card={card} i={i} />
          ))}
        </div>

        <div className="flex md:hidden gap-3.5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -50px 0px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 snap-center w-[78vw] sm:w-[55vw] overflow-hidden rounded-2xl bg-[#F7F4EE] flex flex-col"
            >
              <div className="w-full h-44 overflow-hidden shrink-0">
                <CardPhoto card={card} />
              </div>
              <CardCopy card={card} />
            </motion.div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-xs font-bold text-gray-400">
          <span>Swipe to explore 5 vision pillars →</span>
        </div>

      </div>
    </section>
  );
}
