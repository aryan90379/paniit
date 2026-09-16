'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const PARTNER_LOGOS = [
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.22.45+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.23.22+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.23.38+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.23.50+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.24.03+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.24.16+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.24.27+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.24.40+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.24.57+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.25.11+PM.png",
  // New batch
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.33.49+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.34.18+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.34.29+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.34.52+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.35.10+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.35.21+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.35.33+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.35.45+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.35.55+PM.png",
  "https://paniit.s3.ap-south-1.amazonaws.com/iitlogo/Screenshot+2026-09-16+at+3.36.14+PM.png",
];

export default function OurPartners() {
  return (
    <section id="our-partners" className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <Globe size={800} strokeWidth={1} />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#06206A] tracking-tight uppercase"
          >
            Our Partners
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PARTNER_LOGOS.map((logoUrl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square relative bg-white flex items-center justify-center rounded-2xl p-4 border border-transparent hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Note: using standard img tag for external urls to avoid Next.js unconfigured remote patterns errors */}
              <img 
                src={logoUrl} 
                alt={`Partner ${i + 1}`} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback for broken images if S3 permissions fail
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=IIT+${i+1}&background=E3F0FA&color=06206A&size=200`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
