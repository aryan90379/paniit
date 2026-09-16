'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const PARTNER_LOGOS = [
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.22.08%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.22.45%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.22%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.38%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.50%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.03%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.16%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.27%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.40%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.57%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.25.11%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.33.49%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.34.18%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.34.29%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.34.52%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.10%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.21%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.33%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.45%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.55%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.36.14%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.36.27%E2%80%AFPM.png",
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.36.39%E2%80%AFPM.png",
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
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
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
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
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
