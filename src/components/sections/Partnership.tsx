'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Target, Users, Zap } from 'lucide-react';
import { LogoLoop } from '@/components/ui/LogoLoop';

const WHY_PARTNER = [
  { title: "TRUSTED ECOSYSTEM ACCESS", desc: "Direct connection to one of India's most influential and credible alumni networks", icon: ShieldCheck },
  { title: "DEPTH OVER VOLUME", desc: "Conversations designed for learning, strategic thinking, and long-term value creation", icon: Target },
  { title: "CURATED HIGH QUALITY AUDIENCE", desc: "Early stage, growth stage, and scaled founders, builders, investors across enterprise SaaS, fintech, AI, consumer tech, and deep tech", icon: Users },
  { title: "ECOSYSTEM CONTRIBUTORS", desc: "Partners engage as enablers and builders, not transactional sponsors", icon: Zap }
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
        
        {/* Why Partner */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#153063] mb-6 tracking-tight uppercase"
            >
              Why Partner With The Summit?
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_PARTNER.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="w-12 h-1 bg-[#E13926] rounded-full" />
                  <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-24 bg-white rounded-[3rem] p-12 border border-gray-200 shadow-sm text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#153063] mb-6 tracking-tight uppercase"
          >
            Key Benefits To Sponsors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 font-medium max-w-3xl mx-auto mb-12"
          >
            Partnering with the PanIIT Tech4Bharat Summit 2026 offers sponsors unmatched access to India's most influential technology ecosystem.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl flex items-center gap-4"
              >
                <div className="text-2xl font-black text-[#153063] opacity-30">0{i+1}</div>
                <div className="font-bold text-gray-800">{benefit}</div>
              </motion.div>
            ))}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIERS.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] flex flex-col ${
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
