'use client';

import { motion } from 'framer-motion';

const IMAGES = [
  'https://d3liyurciwi0wb.cloudfront.net/vision/TOGETHER/PHOTO-2026-09-16-13-58-48.jpg',
  'https://d3liyurciwi0wb.cloudfront.net/vision/TOGETHER/PHOTO-2026-09-16-13-58-29.jpg'
];

export default function Engagement() {
  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3F0FA] border border-blue-200 text-[#43AAF0] font-semibold text-sm mb-6 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Gallery
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#0f172a] tracking-tight mb-4"
          >
            PanIIT &times; Govt. of Andhra Pradesh
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto"
          >
            Engagement moments ahead of the PanIIT Andhra Pradesh Summit.
          </motion.p>
        </div>

        {/* Gallery Carousel / Grid */}
        <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible gap-4 md:gap-8 pb-6 md:pb-0 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
