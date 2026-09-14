'use client';

import { motion } from 'framer-motion';

export default function Glimpses() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/extracted_images/glimpse_p22_0.jpeg" 
            alt="Glimpses" 
            className="w-full h-auto rounded-xl shadow-md border border-gray-100" 
          />
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/extracted_images/glimpse_p23_0.jpeg" 
            alt="Glimpses" 
            className="w-full h-auto rounded-xl shadow-md border border-gray-100" 
          />
        </div>
      </div>
    </section>
  );
}
