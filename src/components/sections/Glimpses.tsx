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
            className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight uppercase"
          >
            Glimpses From Past Summits
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder for images, user will provide CDNs later */}
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold tracking-wider">PANIIT SUMMIT</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
