'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Server, Anchor, Microscope, Rocket, Globe2, Lightbulb, Users, Building, Shield, ChevronRight } from 'lucide-react';

const NODES_LEFT = [
  { id: 'n1', title: 'Investments', desc: '₹6.74 Lakh Cr+ secured', icon: Building, color: '#153063' },
  { id: 'n2', title: 'AI & Data Centers', desc: 'Global tech infrastructure', icon: Server, color: '#153063' },
  { id: 'n3', title: 'Global Startups', desc: 'Fostering 1000+ deep-tech startups', icon: Rocket, color: '#153063' },
];

const NODES_RIGHT = [
  { id: 'n4', title: 'Quantum Valley', desc: 'Powering commercial innovation', icon: Zap, color: '#E13926' },
  { id: 'n5', title: 'Logistics', desc: '6 Ports & 3 Corridors', icon: Anchor, color: '#153063' },
  { id: 'n6', title: 'Multi-Sector Hub', desc: 'Space-tech & Semiconductors', icon: Microscope, color: '#153063' },
];

const LEGACY = [
  { title: "PanIIT Mentorship Network", desc: "Connecting AP startups with top-tier IIT alumni mentors for strategic guidance and global market access.", icon: Users },
  { title: "Innovation Sandbox", desc: "A regulatory sandbox allowing deep-tech startups to test and deploy critical infrastructure solutions.", icon: Lightbulb },
  { title: "Global Market Bridge", desc: "Dedicated programs to help homegrown companies expand operations to US, Europe, and Southeast Asia.", icon: Globe2 },
  { title: "DeepTech Fund", desc: "A dedicated venture capital initiative supported by alumni to fund early-stage hardware and AI companies.", icon: Shield },
];

export default function AdvantageLegacy() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative border-t border-gray-100 overflow-hidden" id="advantage">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-red-100 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest mb-6"
          >
            The AP Advantage
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#153063] uppercase tracking-tighter leading-tight"
          >
            Powering India's Next<br/> Wave of Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 font-medium max-w-2xl mx-auto"
          >
            Andhra Pradesh is rapidly transforming into a global deep-tech and industrial powerhouse.
          </motion.p>
        </div>

        {/* Animated Node Flow Diagram */}
        <div className="w-full max-w-6xl mx-auto relative h-[800px] lg:h-[600px] hidden md:block mt-12 mb-20 bg-[#0a0a0a] rounded-[3rem] p-8 border border-gray-800 shadow-2xl overflow-hidden">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Base static lines */}
            <path d="M250,100 C350,100 400,300 450,300" fill="none" stroke="#222" strokeWidth="3" />
            <path d="M250,300 C350,300 400,300 450,300" fill="none" stroke="#222" strokeWidth="3" />
            <path d="M250,500 C350,500 400,300 450,300" fill="none" stroke="#222" strokeWidth="3" />
            
            <path d="M750,100 C650,100 600,300 550,300" fill="none" stroke="#222" strokeWidth="3" />
            <path d="M750,300 C650,300 600,300 550,300" fill="none" stroke="#222" strokeWidth="3" />
            <path d="M750,500 C650,500 600,300 550,300" fill="none" stroke="#222" strokeWidth="3" />

            {/* Animated Dashed Lines (Flowing into Center) */}
            <motion.path d="M250,100 C350,100 400,300 450,300" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [30, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
            <motion.path d="M250,300 C350,300 400,300 450,300" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [30, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />
            <motion.path d="M250,500 C350,500 400,300 450,300" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [30, 0] }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} />
            
            <motion.path d="M750,100 C650,100 600,300 550,300" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [-30, 0] }} transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }} />
            <motion.path d="M750,300 C650,300 600,300 550,300" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [-30, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
            <motion.path d="M750,500 C650,500 600,300 550,300" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [-30, 0] }} transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }} />
          </svg>

          {/* Center Node */}
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.4)] border-2 border-green-400/50 z-20"
          >
            <div className="absolute inset-0 bg-white/5 rounded-3xl animate-pulse" />
            <Target className="text-white w-12 h-12 mb-2" />
            <div className="text-white font-black text-center leading-tight">AP<br/>Ecosystem</div>
          </motion.div>

          {/* Left Nodes */}
          {NODES_LEFT.map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}
              className="absolute left-8 w-[240px] bg-[#141414] rounded-2xl p-4 shadow-2xl border border-gray-800 flex items-center gap-4 z-10 hover:scale-105 transition-transform cursor-default"
              style={{ top: `calc(${16.66 + i * 33.33}% - 45px)` }}
            >
              <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center shrink-0 border border-gray-800">
                <node.icon className="text-[#153063] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 leading-tight text-sm mb-0.5">{node.title}</h4>
                <p className="text-xs text-gray-400 leading-tight">{node.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Right Nodes */}
          {NODES_RIGHT.map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}
              className="absolute right-8 w-[240px] bg-[#141414] rounded-2xl p-4 shadow-2xl border border-gray-800 flex items-center gap-4 z-10 hover:scale-105 transition-transform cursor-default"
              style={{ top: `calc(${16.66 + i * 33.33}% - 45px)` }}
            >
              <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center shrink-0 border border-gray-800">
                <node.icon className="text-[#E13926] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 leading-tight text-sm mb-0.5">{node.title}</h4>
                <p className="text-xs text-gray-400 leading-tight">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Fallback Grid (Stacked cards) */}
        <div className="md:hidden flex flex-col gap-4 mt-12 mb-20">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 flex items-center gap-4 shadow-xl text-white">
            <Target className="text-white w-10 h-10" />
            <div>
              <h3 className="font-black text-xl">AP Ecosystem</h3>
              <p className="text-blue-200 text-sm">The central hub of innovation</p>
            </div>
          </div>
          {[...NODES_LEFT, ...NODES_RIGHT].map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 shadow-lg border border-gray-800 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center shrink-0 border border-gray-800">
                <node.icon color={node.color} className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 text-lg mb-0.5">{node.title}</h4>
                <p className="text-sm text-gray-400">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Legacy Initiatives Section */}
      <div className="py-24 bg-white border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#153063] uppercase tracking-tight"
            >
              Beyond The Summit<br/>
              <span className="text-gray-400 font-bold text-2xl md:text-4xl mt-2 block">Legacy Initiatives</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGACY.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all flex flex-col gap-4 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#153063] flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#153063]">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
