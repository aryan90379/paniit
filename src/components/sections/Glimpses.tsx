'use client';

import { motion } from 'framer-motion';

export default function Glimpses() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#153063] tracking-tight uppercase"
          >
            GLIMPSES FROM PAST SUMMITS
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1475721025870-24608f5fd151?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop'
          ].map((url, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img src={url} alt={`Glimpse ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-black tracking-widest text-lg drop-shadow-md">PANIIT SUMMIT</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
