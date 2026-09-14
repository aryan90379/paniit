'use client';

import { motion } from 'framer-motion';
import { LogoLoop } from '@/components/ui/LogoLoop';

const LogoText = ({ text, color }: { text: string, color: string }) => (
  <span 
    className="font-black text-4xl md:text-5xl uppercase tracking-tighter opacity-40 hover:opacity-100 transition-opacity duration-300 px-4" 
    style={{ color }}
  >
    {text}
  </span>
);

const tier1Logos = [
  { node: <LogoText text="Google" color="#4285F4" />, title: "Google" },
  { node: <LogoText text="Microsoft" color="#00A4EF" />, title: "Microsoft" },
  { node: <LogoText text="Amazon" color="#FF9900" />, title: "Amazon" },
  { node: <LogoText text="IBM" color="#0530AD" />, title: "IBM" },
  { node: <LogoText text="Intel" color="#0068B5" />, title: "Intel" },
  { node: <LogoText text="NVIDIA" color="#76B900" />, title: "NVIDIA" },
];

const tier2Logos = [
  { node: <LogoText text="Cisco" color="#1BA0D7" />, title: "Cisco" },
  { node: <LogoText text="Oracle" color="#F80000" />, title: "Oracle" },
  { node: <LogoText text="Salesforce" color="#00A1E0" />, title: "Salesforce" },
  { node: <LogoText text="SAP" color="#008FD3" />, title: "SAP" },
  { node: <LogoText text="Tata" color="#184589" />, title: "Tata" },
  { node: <LogoText text="Infosys" color="#007CC3" />, title: "Infosys" },
];

export default function Sponsors() {
  return (
    <section className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#153063] mb-4 tracking-wide uppercase"
          >
            Past Sponsors & Partners
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-[#E13926] mx-auto"
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-16 w-full py-8">
          {/* Top Strip (Left) */}
          <div className="relative w-full">
            <LogoLoop
              logos={tier1Logos}
              speed={40}
              direction="left"
              logoHeight={80}
              gap={100}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#ffffff"
            />
          </div>

          {/* Bottom Strip (Right) */}
          <div className="relative w-full">
            <LogoLoop
              logos={tier2Logos}
              speed={40}
              direction="right"
              logoHeight={80}
              gap={100}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#ffffff"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#partner"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#153063] text-[#153063] font-bold uppercase tracking-widest rounded-sm hover:bg-[#153063] hover:text-white transition-colors"
          >
            Become a Partner
          </a>
        </div>

      </div>
    </section>
  );
}
