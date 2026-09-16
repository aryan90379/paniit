'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Medal } from 'lucide-react';

interface Sponsor {
  name: string;
  logo?: string;
}

const PAST_SPONSORS: Sponsor[] = [
  { name: 'Ayana Woods', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/ayana%20woods.png' },
  { name: 'Groww', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/groww.png' },
  { name: 'Kuku FM', logo: 'https://kukufm.com/blog/wp-content/uploads/sites/4/2020/07/logo-1-scaled.jpg' },
  { name: 'SAP' },
  { name: 'HDFC Mutual Fund' },
  { name: 'Cashfree Payments' },
  { name: 'Harness' },
  { name: 'Bharat Ke Super Founders' },
  { name: 'Rupeezy' },
  { name: 'Tally Solutions' },
  { name: 'VisionIAS' },
  { name: 'Astravion' },
  { name: 'BAC Infratech' },
  { name: 'Brihaspathi Technologies' },
  { name: 'Renova Hospitals' },
  { name: 'SSG' },
  { name: 'Constella' },
  { name: 'Taal' },
  { name: 'Terrum' },
  { name: 'Vasavi Group' },
  { name: 'Lexicon Infotech' },
];

export default function PastSponsors() {
  return (
    <section id="past-sponsors" className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-[#E3F0FA] text-[#43AAF0] text-sm font-medium mb-4 uppercase tracking-widest"
          >
            Partnerships & Legacy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#06206A] tracking-tight uppercase"
          >
            Past Sponsors
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-medium">
            Acknowledging the distinguished organizations and partners who championed previous editions of the PanIIT Summit.
          </p>
        </div>

        {/* COMBINED SPONSORS */}
        <div className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {PAST_SPONSORS.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="p-4 md:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-[#DD1D21]/30 hover:bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center group min-h-[100px]"
              >
                {sponsor.logo ? (
                  <img src={sponsor.logo} alt={sponsor.name} loading="lazy" className="max-w-[85%] max-h-[60px] object-contain mix-blend-multiply" />
                ) : (
                  <span className="font-bold text-sm md:text-base text-gray-700 tracking-tight group-hover:text-[#06206A] transition-colors leading-snug">
                    {sponsor.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

