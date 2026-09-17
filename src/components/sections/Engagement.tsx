'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const IMAGES = [
  'https://d3liyurciwi0wb.cloudfront.net/vision/TOGETHER/PHOTO-2026-09-16-13-58-48.jpg',
  'https://d3liyurciwi0wb.cloudfront.net/vision/TOGETHER/PHOTO-2026-09-16-13-58-29.jpg'
];

export default function Engagement() {
  return (
    <section className="py-20 md:py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <SectionHeading
          eyebrow="Gallery"
          title="PanIIT × Govt. of Andhra Pradesh"
          subtitle="Engagement moments ahead of the PanIIT Andhra Pradesh Summit."
          className="mb-12 md:mb-16 px-2"
        />

        {/* Gallery Carousel / Grid */}
        <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible gap-4 md:gap-8 pb-6 md:pb-0 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 shrink-0 snap-center w-[85vw] md:w-auto"
            >
              <img 
                src={img} 
                alt={`Engagement Moment ${i+1}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-xs font-bold text-slate-400">
          <span>Swipe to view &rarr;</span>
        </div>

      </div>
    </section>
  );
}
