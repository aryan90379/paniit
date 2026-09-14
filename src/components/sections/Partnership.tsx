'use client';

import { motion } from 'framer-motion';
import { Check, ShieldCheck, Target, Users, Zap } from 'lucide-react';
import { LogoLoop } from '@/components/ui/LogoLoop';
import BorderGlow from '@/components/ui/BorderGlow';

const WHY_PARTNER = [
  { title: "TRUSTED ECOSYSTEM ACCESS", desc: "Direct connection to one of India's most influential and credible alumni networks.", icon: ShieldCheck },
  { title: "DEPTH OVER VOLUME", desc: "Conversations designed for learning, strategic thinking, and long-term value creation.", icon: Target },
  { title: "CURATED HIGH QUALITY AUDIENCE", desc: "Early stage, growth stage, and scaled founders, builders, investors across deep tech.", icon: Users },
  { title: "ECOSYSTEM CONTRIBUTORS", desc: "Partners engage as enablers and builders, not transactional sponsors.", icon: Zap }
];

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
    <section id="partner" className="py-24 bg-gray-50 text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Why Partner (Redesigned as Premium Dark Section) */}
        <div className="mb-24 bg-[#0a0a0a] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/90 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20 text-sm font-bold uppercase tracking-widest mb-6"
              >
                Exclusive Partnership
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
              >
                WHY PARTNER WITH THE SUMMIT?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                Join an elite ecosystem of global leaders and secure your brand's position at the forefront of India's deep-tech and industrial revolution.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
              {WHY_PARTNER.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <BorderGlow
                      edgeSensitivity={30}
                      glowColor="210 100 60"
                      backgroundColor="#121212"
                      borderRadius={28}
                      glowRadius={40}
                      glowIntensity={1.5}
                      coneSpread={25}
                      animated={false}
                      colors={['#3b82f6', '#8b5cf6', '#ec4899']}
                      className="p-8 md:p-10 flex flex-col gap-6 group cursor-pointer h-full"
                    >
                      <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 shadow-sm border border-blue-500/10">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-wide uppercase">{item.title}</h3>
                        <p className="text-gray-400 font-medium leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </BorderGlow>
                  </motion.div>
                )
              })}
            </div>

            {/* Key Benefits (Integrated as glowing chips) */}
            <div className="border-t border-white/10 pt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-300 mb-10 tracking-wide uppercase">Core Benefits Included</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {BENEFITS.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer shadow-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="font-bold text-gray-200">{benefit}</div>
                  </motion.div>
                ))}
              </div>
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
              className="text-3xl md:text-5xl font-bold text-[#153063] mb-4 tracking-wide uppercase"
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
            className="text-3xl md:text-5xl font-bold text-[#153063] mb-6 tracking-tight uppercase"
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
                  ? 'bg-[#153063] text-white shadow-xl scale-105 border-4 border-blue-400/30' 
                  : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className={`text-4xl font-black ${tier.popular ? 'text-blue-300' : 'text-[#153063]'}`}>
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
                  ? 'bg-[#E13926] text-white hover:bg-red-500 shadow-lg shadow-red-600/30'
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
