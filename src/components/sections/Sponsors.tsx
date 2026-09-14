'use client';

import { motion } from 'framer-motion';

const SPONSORS = [
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { name: 'Reliance', logo: 'https://upload.wikimedia.org/wikipedia/en/9/99/Reliance_Industries_Logo.svg' },
  { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg' },
  { name: 'HDFC', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg' },
  { name: 'Kotak', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Kotak_Mahindra_Bank_logo.svg' },
  { name: 'Schneider', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg' },
  { name: 'Coal India', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Coal_India_Logo.svg' },
  { name: 'NMDC', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4b/NMDC_Logo.svg' },
  { name: 'GAIL', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0d/GAIL_%28India%29_logo.svg' },
  { name: 'EaseMyTrip', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/EaseMyTrip_Logo.svg' },
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
                  (e.target as HTMLElement).style.display = 'none';
                  const nextSibling = (e.target as HTMLElement).nextElementSibling;
                  if (nextSibling) {
                    (nextSibling as HTMLElement).style.display = 'block';
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
