'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const GALLERY_IMAGES = [
  { src: 'https://d3liyurciwi0wb.cloudfront.net/glimpses/01.png', focus: 'center' },
  { src: 'https://d3liyurciwi0wb.cloudfront.net/glimpses/02.png', focus: 'center' },
  { src: 'https://d3liyurciwi0wb.cloudfront.net/glimpses/03.png', focus: 'center' },
  { src: 'https://d3liyurciwi0wb.cloudfront.net/glimpses/003.png', focus: 'center' },
  { src: 'https://d3liyurciwi0wb.cloudfront.net/glimpses/04.png', focus: 'center' },
  { src: 'https://d3liyurciwi0wb.cloudfront.net/glimpses/05.png', focus: 'center' },
];

export default function Glimpses() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const centerFirstCard = () => {
      const card = track.querySelector<HTMLElement>('[data-glimpse-card]');
      if (!card) return;
      const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollLeft = Math.max(0, left);
    };

    centerFirstCard();
    const id = window.requestAnimationFrame(centerFirstCard);
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-paper text-gray-900 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <SectionHeading
          eyebrow="Past Events"
          title="Glimpses From the Past"
          subtitle="Relive the moments that shaped our journey. A visual retrospective of past PanIIT summits and milestones."
          className="mb-12 md:mb-16 px-4"
        />
      </div>

      {/* Desktop Grid (3 above, 3 below) */}
      <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 px-6 container mx-auto max-w-7xl">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 col-span-1 aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#06206A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={img.src} 
                alt={`PanIIT Glimpse ${i+1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ objectPosition: img.focus }}
              />
            </motion.div>
          ))}
        </div>

      <div
        ref={trackRef}
        className="flex md:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
        style={{
          paddingLeft: '10vw',
          paddingRight: '10vw',
          scrollPaddingLeft: '10vw',
          scrollPaddingRight: '10vw',
        }}
      >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              data-glimpse-card={i === 0 ? true : undefined}
              className="snap-center relative aspect-[3/2] rounded-3xl overflow-hidden shadow-md bg-paper"
              style={{
                flex: '0 0 80vw',
                width: '80vw',
                minWidth: '80vw',
                marginRight: i < GALLERY_IMAGES.length - 1 ? 16 : 0,
              }}
            >
              <img 
                src={img.src} 
                alt={`PanIIT Glimpse ${i+1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
                style={{ objectPosition: img.focus }}
              />
            </div>
          ))}
      </div>

      <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-xs font-bold text-slate-400">
        <span>Swipe to explore glimpses &rarr;</span>
      </div>
    </section>
  );
}
