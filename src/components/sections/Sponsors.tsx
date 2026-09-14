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
];

export default function Sponsors() {
  // Duplicate for seamless infinite scroll
  const marqueeSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153063]/5 border border-[#153063]/10 text-[#153063] text-sm font-bold uppercase tracking-widest mb-6">
            Ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#001858] mb-6 tracking-tight uppercase">
            Past <span className="text-[#E13926]">Sponsors</span> & Partners
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Over the years, PanIIT has partnered with the world's most influential technology and enterprise brands.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee gap-16 py-8 items-center shrink-0">
          {marqueeSponsors.map((sponsor, idx) => (
            <div 
              key={`${sponsor.name}-${idx}`} 
              className="w-40 h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                  const nextSibling = (e.target as HTMLElement).nextElementSibling;
                  if (nextSibling) {
                    (nextSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <span className="hidden font-black text-xl text-[#001858] tracking-widest uppercase text-center w-full">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
