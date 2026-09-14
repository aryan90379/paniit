'use client';

import { motion } from 'framer-motion';

const SPONSORS = [
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
  { name: 'SAP', logo: 'https://logo.clearbit.com/sap.com' },
  { name: 'Reliance', logo: 'https://logo.clearbit.com/ril.com' },
  { name: 'SBI', logo: 'https://logo.clearbit.com/sbi.co.in' },
  { name: 'HDFC', logo: 'https://logo.clearbit.com/hdfcbank.com' },
  { name: 'Kotak', logo: 'https://logo.clearbit.com/kotak.com' },
  { name: 'Schneider', logo: 'https://logo.clearbit.com/se.com' },
  { name: 'Hexaware', logo: 'https://logo.clearbit.com/hexaware.com' },
  { name: 'Mindtickle', logo: 'https://logo.clearbit.com/mindtickle.com' },
  { name: 'EaseMyTrip', logo: 'https://logo.clearbit.com/easemytrip.com' },
  { name: 'Constella', logo: 'https://logo.clearbit.com/constellaintelligence.com' },
];

export default function Sponsors() {
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
            PAST SPONSORS AND PARTNERS
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {SPONSORS.map((sponsor, idx) => (
            <motion.div 
              key={`${sponsor.name}-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.1 }}
              className="w-32 h-16 md:w-40 md:h-20 bg-gray-50 rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-shadow border border-gray-100"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.classList.add('hidden');
                  const nextSibling = target.nextElementSibling;
                  if (nextSibling) {
                    nextSibling.classList.remove('hidden');
                  }
                }}
              />
              <span className="hidden font-bold text-sm text-[#153063] text-center w-full">{sponsor.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
