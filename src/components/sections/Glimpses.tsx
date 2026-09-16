'use client';

import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  'https://d3liyurciwi0wb.cloudfront.net/glimpses/01.png',
  'https://d3liyurciwi0wb.cloudfront.net/glimpses/02.png',
  'https://d3liyurciwi0wb.cloudfront.net/glimpses/03.png',
  'https://d3liyurciwi0wb.cloudfront.net/glimpses/003.png',
  'https://d3liyurciwi0wb.cloudfront.net/glimpses/04.png',
  'https://d3liyurciwi0wb.cloudfront.net/glimpses/05.png',
];

export default function Glimpses() {
  return (
    <section className="py-24 bg-slate-50 text-gray-900 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-[#E3F0FA] text-[#43AAF0] text-sm font-medium mb-4 uppercase tracking-widest"
          >
            Past Events
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#06206A] tracking-tight uppercase"
          >
            Glimpses From The Past
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Relive the moments that shaped our journey. A visual retrospective of past PanIIT summits and milestones.</p>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 px-6">
          {GALLERY_IMAGES.map((img, i) => {
            // Make the first image large (2 columns, 2 rows)
            const isFeatured = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 ${
                  isFeatured ? 'col-span-2 row-span-2 min-h-[500px]' : 'col-span-1 aspect-[4/3]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#06206A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={img} 
                  alt={`PanIIT Glimpse ${i+1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Carousel */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-[10vw] gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
              transition={{ delay: i * 0.1 }}
              className="w-[80vw] shrink-0 snap-center relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md"
            >
              <img 
                src={img} 
                alt={`PanIIT Glimpse ${i+1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-xs font-bold text-slate-400">
          <span>Swipe to explore glimpses &rarr;</span>
        </div>

      </div>
    </section>
  );
}
