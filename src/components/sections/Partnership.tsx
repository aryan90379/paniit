'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Sparkles } from 'lucide-react';

const TIERS = [
  { name: 'Platinum Partner', color: 'from-slate-300 to-slate-500', text: 'text-slate-300' },
  { name: 'Gold Partner', color: 'from-yellow-300 to-yellow-600', text: 'text-yellow-400' },
  { name: 'Silver Partner', color: 'from-gray-300 to-gray-500', text: 'text-gray-300' },
  { name: 'Knowledge Partner', color: 'from-cyan-400 to-blue-600', text: 'text-red-400' },
];

export default function Partnership() {
  return (
    <section id="partner" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Partner With the Summit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Join us in shaping the deep-tech future of Andhra Pradesh and India.
          </motion.p>
        </div>

        {/* Why Partner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: ShieldCheck, title: 'Trusted Ecosystem', desc: 'Direct access to government and institutional leaders.' },
            { icon: Target, title: 'Depth over Volume', desc: 'Focused, high-impact interactions with decision-makers.' },
            { icon: Users, title: 'Curated Audience', desc: 'Invite-only delegates ensuring high-quality networking.' },
            { icon: Sparkles, title: 'Brand Visibility', desc: 'Premium placement across all summit materials and PR.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mx-auto mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Tiers & CTA */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Partnership Opportunities</h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {TIERS.map((tier, i) => (
                <div key={i} className={`px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm font-semibold ${tier.text}`}>
                  {tier.name}
                </div>
              ))}
            </div>
            
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
            >
              Request Partnership Brochure
            </a>
          </div>
        </div>

        {/* Institutional Partners Marquee Placeholder */}
        <div className="mt-32">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-gray-500 mb-8">Institutional Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['IIT Madras', 'IIT Tirupati', 'IIT Hyderabad', 'IIT Palakkad', 'Govt of AP'].map((partner, i) => (
              <div key={i} className="text-xl md:text-2xl font-black text-gray-400">
                {partner}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
