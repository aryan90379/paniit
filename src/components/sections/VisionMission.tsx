'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Globe, Lightbulb } from 'lucide-react';

export default function VisionMission() {
  return (
    <section id="summit" className="py-24 bg-gray-50 text-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            About the Summit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto"
          >
            A defining convergence of visionaries, policymakers, and innovators shaping the future of deep technology.
          </motion.p>
        </div>

        {/* Vision Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-end min-h-[300px] relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AP as a Hub</h3>
              <p className="text-gray-600">Showcase Andhra Pradesh as a premier global hub for skilled talent, innovation, and strategic investment.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-end min-h-[300px] hover:border-red-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Catalyze DeepTech</h3>
            <p className="text-gray-600">Accelerate AI, Quantum, Green Energy, and advanced startups.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-end min-h-[300px] hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Talent</h3>
            <p className="text-gray-600">Cultivate a globally competitive and future-ready youth talent pool.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-red-50 to-white border border-red-100 flex flex-col justify-end min-h-[300px] relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe size={120} className="text-red-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Connection</h3>
              <p className="text-gray-600 max-w-xl">Forge powerful synergies connecting global IIT alumni, industry leaders, policymakers, and academia.</p>
            </div>
          </motion.div>

        </div>

        {/* GOAP Swarna Andhra Mission */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] p-10 md:p-16 bg-white border border-gray-200 shadow-lg relative overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-red-200 text-red-700 text-sm font-bold tracking-wider uppercase mb-6">
                GOAP Swarna Andhra Mission
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aligning with Swarna Andhra 2047
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This summit is a cornerstone in realizing the Government of Andhra Pradesh's vision for 2047, driving the state towards unprecedented growth and technological leadership.
              </p>
              
              <ul className="space-y-4">
                {['Inclusive Growth', 'Innovation-led Economy', 'Skilled Talent', 'Future-ready Infrastructure'].map((pillar, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {pillar}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-red-700 font-medium transition-colors">
                  Learn more about Swarna Andhra 2047 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-400 text-sm border-2 border-dashed border-gray-300 rounded-xl p-8 w-full">
                [ TBD: Official GOAP Swarna Andhra Logo / Branding ]
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
