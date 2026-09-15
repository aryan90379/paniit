'use client';

import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721028070-2051d528b49e?q=80&w=2000&auto=format&fit=crop',
];

export default function Glimpses() {
  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-[#E3F0FA] text-[#43AAF0] text-sm font-medium mb-4 uppercase tracking-widest"
          >
            Past Events
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#06206A] tracking-tight uppercase"
          >
            Glimpses From The Past
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Relive the moments that shaped our journey. A visual retrospective of past PanIIT summits and milestones.</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[#06206A]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src={img} 
                alt={`PanIIT Glimpse ${i+1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
