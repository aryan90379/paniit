'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Medal } from 'lucide-react';

interface Sponsor {
  name: string;
  logo?: string;
}

const GOLD_SPONSORS: Sponsor[] = [
  { name: 'Ayana Woods' },
  { name: 'Groww' },
  { name: 'Kuku FM' },
];

const SILVER_SPONSORS: Sponsor[] = [
  { name: 'SAP', logo: '/sponsors/SAP logo png transparent/Image_1.webp' },
  { name: 'HDFC Mutual Fund', logo: '/sponsors/HDFC Bank logo png transparent/Image_1.jpg' },
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

const BRONZE_SPONSORS: Sponsor[] = [
  { name: 'State Bank of India', logo: '/sponsors/SBI logo png transparent/Image_1.jpg' },
  { name: 'Kotak Bank', logo: '/sponsors/Kotak Bank logo png transparent/Image_1.jpg' },
  { name: 'Coal India', logo: '/sponsors/Coal India logo png transparent/Image_1.jpg' },
  { name: 'NMDC', logo: '/sponsors/NMDC logo png transparent/Image_1.jpg' },
  { name: 'GAIL' },
  { name: 'SIDBI' },
  { name: 'T-Hub' },
  { name: 'T-Works' },
  { name: 'Aadhaar (UIDAI)' },
  { name: 'Aditya Birla Capital' },
  { name: 'Bajaj Beyond' },
  { name: 'Hexaware Technologies' },
  { name: 'Ministry of Defence' },
  { name: 'Dept of Defence Production' },
  { name: 'Govt of Maharashtra' },
  { name: 'IIT Startups' },
  { name: 'Wheels Global Foundation' },
  { name: 'Nishith Desai Associates' },
  { name: 'Avalon Consulting' },
  { name: 'IvyCap Ventures' },
  { name: 'Clairlabs' },
  { name: 'RideAlly' },
  { name: 'Avian WE' },
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
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-[#E3F0FA] text-[#43AAF0] text-sm font-medium mb-4 uppercase tracking-widest"
          >
            Partnerships & Legacy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#06206A] tracking-tight uppercase"
          >
            Past Sponsors & Partners
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 border border-amber-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center group min-h-[110px]"
              >
                <span className="font-extrabold text-xl md:text-2xl text-gray-800 tracking-tight group-hover:text-amber-700 transition-colors">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SILVER SPONSORS */}
        <div className="mb-20">
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
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="p-4 rounded-xl bg-slate-50/60 border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[90px]"
              >
                {sponsor.logo ? (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-h-10 max-w-[90px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="font-bold text-sm text-gray-700 tracking-tight group-hover:text-[#06206A] transition-colors leading-snug">
                    {sponsor.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. BRONZE SPONSORS */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-700 shadow-sm">
              <Shield size={22} />
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-orange-800">
              Bronze Sponsors
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 max-w-6xl mx-auto">
            {BRONZE_SPONSORS.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.03 }}
                className="p-3.5 rounded-xl bg-white border border-gray-200 hover:border-orange-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[80px]"
              >
                {sponsor.logo ? (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-h-9 max-w-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="font-semibold text-xs md:text-sm text-gray-700 tracking-tight group-hover:text-orange-900 transition-colors leading-tight">
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
