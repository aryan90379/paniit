'use client';

import { motion } from 'framer-motion';
import { Check, ShieldCheck, Target, Users, Zap, Network, Award, Globe, Rocket } from 'lucide-react';
import { LogoLoop } from '@/components/ui/LogoLoop';

const BENEFITS = [
  "Powerful Brand Visibility",
  "High-Value Networking",
  "Business Growth & Partnerships",
  "Thought Leadership Positioning",
  "Talent & Startup Access"
];

const TIERS = [
  { name: 'Bronze', price: '₹5 L', benefits: ['Standard logo visibility', 'Courtyard space (Medium Booth)', 'Standalone Social Media Mention', 'Logo Mention in Booklet', '1 Standee in event'] },
  { name: 'Silver', price: '₹10 L', benefits: ['Category partner association', 'Medium logo visibility', 'Courtyard space', 'Standalone Social Media Mention', 'Logo Mention in Booklet', '1 Standee in event'] },
  { name: 'Gold', price: '₹25 L', popular: true, benefits: ['Category partner association', '1 Panel Speaker slot', 'High logo visibility', 'Courtyard space', 'Standalone Social Media Mention', 'Event Mailer (500K+)', 'Media Coverage', 'Logo Mention in Booklet', '2 Standees in event'] },
  { name: 'Title', price: '₹50 L', benefits: ['Presented by (yes)', 'Keynote Speaker Slot', 'Maximum logo visibility', 'Courtyard space', 'Standalone Social Media Mention', 'Event Mailer (500K+)', 'Media Coverage', 'Dedicated Page in Booklet', '5 Standees in event'] }
];

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

export default function Partnership() {
  return (
    <section id="partner" className="py-24 bg-[#F4ECE4] text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Why Partner (Visual Bento Grid) */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-[#C6E1F8] text-blue-800 font-bold uppercase tracking-widest mb-6 border border-blue-200"
            >
              Exclusive Partnership
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#06206A] mb-6 tracking-tight"
            >
              WHY PARTNER WITH US?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Join an elite ecosystem of global leaders and secure your brand's position at the forefront of India's deep-tech and industrial revolution.
            </motion.p>
          </div>
          
          <div className="flex md:grid md:grid-cols-3 gap-6 md:auto-rows-[300px] overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory pb-8 px-4 md:px-0">
            
            {/* Card 1: Trusted Ecosystem (Large Graphic) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 col-span-1 md:col-span-2 row-span-1 bg-[#06206A] rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-xl group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay group-hover:opacity-30 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
              
              <Network className="text-white/10 absolute right-4 bottom-4 w-64 h-64 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700" />
              
              <div className="relative z-10 max-w-lg">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 mb-6">
                  <ShieldCheck className="text-blue-300" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase">Trusted Ecosystem</h3>
                <p className="text-blue-100 font-medium text-lg leading-relaxed">
                  Direct connection to one of India's most influential and credible alumni networks.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Depth over Volume */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 col-span-1 row-span-1 bg-gradient-to-br from-[#DD1D21] to-red-700 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center shadow-xl group"
            >
              <Target className="text-white/10 absolute -right-8 -bottom-8 w-56 h-56 transform group-hover:scale-110 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-6">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase leading-tight">Depth Over<br/>Volume</h3>
                <p className="text-red-100 font-medium leading-relaxed">
                  Conversations designed for learning, strategic thinking, and long-term value creation.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Quality Audience */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 col-span-1 row-span-1 bg-white border border-gray-200 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center shadow-md group"
            >
              <Users className="text-gray-100 absolute -right-4 -bottom-4 w-48 h-48 transform group-hover:-translate-x-4 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 mb-6">
                  <Users className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-2xl font-black text-[#06206A] mb-4 tracking-tight uppercase leading-tight">High Quality<br/>Audience</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Founders, builders, and investors across enterprise SaaS, AI, and deep tech.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Contributors (Large Graphic) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 col-span-1 md:col-span-2 row-span-1 bg-gray-900 rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-xl group"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] pointer-events-none" />
              <Zap className="text-gray-800 absolute right-8 -bottom-12 w-72 h-72 transform group-hover:-translate-y-4 transition-all duration-700" />
              
              <div className="relative z-10 max-w-lg">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 mb-6">
                  <Zap className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase">Ecosystem Contributors</h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed">
                  Partners engage as enablers and builders, not just transactional sponsors. We build long-term value.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Key Benefits (Integrated as glowing chips) */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-500 mb-8 tracking-widest uppercase">Core Benefits Included</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 px-6 py-3 rounded-full flex items-center gap-3 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E3F0FA] flex items-center justify-center text-[#43AAF0] text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="font-bold text-gray-700">{benefit}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Sponsors Loop */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#06206A] mb-4 tracking-wide uppercase"
            >
              Past Sponsors & Partners
            </motion.h2>
          </div>

          <div className="flex flex-col gap-10 md:gap-16 w-full py-8 overflow-hidden rounded-[2rem] bg-white border border-gray-200 shadow-sm">
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
        </div>

        {/* Tiers */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#06206A] mb-6 tracking-tight uppercase"
          >
            Partnership Tiers At A Glance
          </motion.h2>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory">
          {TIERS.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] flex flex-col min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 ${
                tier.popular 
                  ? 'bg-[#06206A] text-white shadow-xl scale-105 border-4 border-blue-400/30' 
                  : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className={`text-4xl font-black ${tier.popular ? 'text-blue-300' : 'text-[#06206A]'}`}>
                  {tier.price}
                </div>
              </div>
              
              <ul className="space-y-4 flex-1 mb-8">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={20} className={`shrink-0 mt-0.5 ${tier.popular ? 'text-blue-400' : 'text-green-600'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-blue-50' : 'text-gray-600'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.popular
                  ? 'bg-[#DD1D21] text-white hover:bg-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Express Interest
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
