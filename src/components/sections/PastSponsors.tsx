'use client';

import { motion } from 'framer-motion';
import { Award, Medal } from 'lucide-react';

interface Sponsor {
  name: string;
  logo?: string;
}

const GOLD_SPONSORS: Sponsor[] = [
  { name: 'Ayana Woods', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/ayana%20woods.png' },
  { name: 'Groww', logo: 'https://d3liyurciwi0wb.cloudfront.net/gold%20past%20/groww.png' },
  { name: 'Kuku FM', logo: 'https://kukufm.com/blog/wp-content/uploads/sites/4/2020/07/logo-1-scaled.jpg' },
];

const SILVER_SPONSORS: Sponsor[] = [
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

        {/* 1. GOLD SPONSORS */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shadow-sm">
              <Award size={22} />
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-amber-700">
              Gold Sponsors
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {GOLD_SPONSORS.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 border border-amber-200/80 shadow-sm hover:shadow-lg hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center group min-h-[120px]"
              >
                {sponsor.logo ? (
                  <img src={sponsor.logo} alt={sponsor.name} loading="lazy" className="max-w-[85%] max-h-[70px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <span className="font-extrabold text-xl md:text-2xl text-gray-800 tracking-tight group-hover:text-amber-700 transition-colors">
                    {sponsor.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SILVER SPONSORS */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600 shadow-sm">
              <Medal size={22} />
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-slate-700">
              Silver Sponsors
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {SILVER_SPONSORS.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} style={{ WebkitTransform: "translateZ(0)", willChange: "transform, opacity" }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="p-4 rounded-xl bg-slate-50/60 border border-slate-200 hover:border-slate-400 hover:bg-white shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center text-center group min-h-[90px]"
              >
                <span className="font-bold text-sm text-gray-700 tracking-tight group-hover:text-[#06206A] transition-colors leading-snug">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
